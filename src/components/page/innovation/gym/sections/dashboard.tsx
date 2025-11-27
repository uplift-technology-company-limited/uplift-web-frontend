"use client";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface GymDashboardProps {
  lang: string;
}

const dashboardViews = [
  {
    title: "Member Dashboard",
    description: "Browse products, manage cart, purchase memberships and track workout progress",
    role: "member",
    features: ["Product browsing", "Cart management", "Membership purchase", "Workout tracking"]
  },
  {
    title: "Owner Dashboard",
    description: "Complete system administration with product management, analytics, and reporting",
    role: "admin",
    features: ["Product management", "Sales analytics", "Member insights", "Inventory control"]
  }
];

export default function GymDashboard({ lang }: GymDashboardProps) {
  return (
    <Section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800" variant="secondary">
              System Preview
            </Badge>
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Experience Different Perspectives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the system from both member and administrator viewpoints
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dashboardViews.map((view, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{view.title}</h3>
                    <Badge 
                      className={view.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"}
                      variant="secondary"
                    >
                      {view.role === "admin" ? "Admin" : "User"}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {view.description}
                  </p>

                  <div className="space-y-2 pt-4">
                    <p className="text-sm font-medium">Key Features:</p>
                    <ul className="space-y-2">
                      {view.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://uplift-gym-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Try the live demo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
