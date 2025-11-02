"use client";

import { Button } from "@/components/basic/button/button";
import { LogOutIcon, UserIcon, SettingsIcon, ShieldIcon, BookOpenIcon, BriefcaseIcon, LightbulbIcon, PuzzleIcon } from "lucide-react";
import { useAuthActions } from "@/lib/store/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { authApi } from "@/lib/api/auth";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

interface NavSheetProps {
  user?: {
    name?: string | null;
    email?: string | null;
    avatar?: string | null;
    roles?: Array<{
      name: string;
      pathRoles: string;
      type: string;
    }>;
  } | null;
  onClose: () => void;
  navItems?: Array<{ name: string; link: string }>;
  isMobile?: boolean;
}

export function NavSheet({ user, onClose, navItems, isMobile = false }: NavSheetProps) {
  const { logout } = useAuthActions();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';

  // Fallback static nav items (same as navbar) - แสดงแม้ไม่มี API
  const defaultNavItems = [
    {
      name: "Story",
      link: `/${currentLang}/story`,
    },
    {
      name: "Service",
      link: `/${currentLang}/service`,
    },
    {
      name: "Solution",
      link: `/${currentLang}/solutions`,
    },
    {
      name: "Innovation",
      link: `/${currentLang}/innovation`,
    },
  ];

  // Use provided navItems or fallback to default
  const displayNavItems = navItems && navItems.length > 0 ? navItems : defaultNavItems;

  // Check if user has admin role
  const hasAdminRole = user?.roles?.some(role =>
    role.type === 'admin' || role.pathRoles === 'admin'
  );

  console.log('🔍 NavSheet - User roles:', user?.roles);
  console.log('🔍 NavSheet - Has admin role:', hasAdminRole);

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* User Info - only show if logged in */}
      {user && (
        <div className="flex items-center gap-3 pb-4 border-b">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user.avatar || ""} alt={user.name || "User"} />
            <AvatarFallback>
              {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-sm">{user.name || "User"}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
        </div>
      )}

      {/* Navigation Items - always show on mobile with fallback data */}
      {isMobile && (
        <div className="flex flex-col gap-2 mb-4">
          {displayNavItems.map((item, idx) => {
            // Map navigation items to icons
            const getIcon = (name: string) => {
              switch (name.toLowerCase()) {
                case 'story': return <BookOpenIcon className="h-4 w-4" />;
                case 'service': return <BriefcaseIcon className="h-4 w-4" />;
                case 'solution': return <PuzzleIcon className="h-4 w-4" />;
                case 'innovation': return <LightbulbIcon className="h-4 w-4" />;
                default: return null;
              }
            };

            return (
              <Link key={`nav-item-${idx}`} href={item.link} onClick={onClose}>
                <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                  {getIcon(item.name)}
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>
      )}

      {/* Menu Items - only show if logged in */}
      {user ? (
        <div className="flex flex-col gap-2">
          <Link href="/user/profile" onClick={onClose}>
            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
              <UserIcon className="h-4 w-4" />
              Profile
            </Button>
          </Link>

          <Link href="/user/settings" onClick={onClose}>
            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Button>
          </Link>

          {/* Admin Console - only show if user has admin role */}
          {hasAdminRole && (
            <Link href="/admin/dashboard" onClick={onClose}>
              <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <ShieldIcon className="h-4 w-4" />
                Admin Console
              </Button>
            </Link>
          )}

          <Button
            variant="ghost"
            className="justify-start gap-3 h-12 text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={async () => {
              try {
                onClose();
                // Call backend logout API to clear httpOnly cookies
                await authApi.logout();
                // Clear local auth state
                logout();
                toast.success("Logged out successfully");
                window.location.href = "/";
              } catch (error) {
                console.error("Logout error:", error);
                // Still logout locally even if API fails
                logout();
                window.location.href = "/";
              }
            }}
          >
            <LogOutIcon className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      ) : (
        /* Show login/signup buttons if not logged in */
        <div className="flex flex-col gap-3">
          <Link href={`/${currentLang}/auth/signin`} onClick={onClose}>
            <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Sign In
            </Button>
          </Link>
          <Link href={`/${currentLang}/auth/signup`} onClick={onClose}>
            <Button variant="outline" className="w-full h-12">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}