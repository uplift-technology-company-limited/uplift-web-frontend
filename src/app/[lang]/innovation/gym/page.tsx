import React from 'react';
import type { Metadata } from 'next';
import Nav from "@/components/basic/nav/resnav";
import Footer from "@/components/layout/footer/footer";

// Import sections
import GymHero from '@/components/page/innovation/gym/sections/hero';
import GymFeatures from '@/components/page/innovation/gym/sections/features';
import GymDashboard from '@/components/page/innovation/gym/sections/dashboard';
import GymPricing from '@/components/page/innovation/gym/sections/pricing';
import GymCTA from '@/components/page/innovation/gym/sections/cta';

interface GymPageProps {
  params: Promise<{ lang: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: GymPageProps): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: 'Gym Management System | UPLIFT Innovation',
    description: 'Complete fitness center management solution with membership tracking, class booking, POS integration, and real-time analytics',
    openGraph: {
      title: 'Gym Management System | UPLIFT',
      description: 'Complete gym management solution for modern fitness centers',
      url: `https://uplifttech.store/${lang}/innovation/gym`,
      type: 'website',
    },
    alternates: {
      canonical: `/${lang}/innovation/gym`,
      languages: {
        en: '/en/innovation/gym',
        th: '/th/innovation/gym',
      },
    },
  };
}

export default async function GymInnovationPage({
  params,
}: GymPageProps) {
  const { lang } = await params;

  return (
    <>
      <Nav />
      <main className="w-full min-h-screen bg-background">
        <GymHero lang={lang} />
        <GymFeatures lang={lang} />
        <GymDashboard lang={lang} />
        <GymPricing lang={lang} />
        <GymCTA lang={lang} />
      </main>
      <Footer />
    </>
  );
}
