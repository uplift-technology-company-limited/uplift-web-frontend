import React from 'react';
import type { Metadata } from 'next';
import Nav from "@/components/basic/nav/resnav";
import Footer from "@/components/layout/footer/footer";
import { ServiceShowcaseSection } from "@/components/page/service/service";
import { HeroSection } from "@/components/page/service/hero"
import type { ShowcaseSectionContent } from '@/types/models/service';

// Dynamic import of services data
const getServicesData = async (locale: string) => {
  try {
    const servicesData = await import(`@/data/services/${locale}.json`);
    return servicesData.default;
  } catch {
    // Fallback to English if locale file doesn't exist
    const servicesData = await import(`@/data/services/en.json`);
    return servicesData.default;
  }
};

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isThaiLang = lang === 'th';

  return {
    title: isThaiLang ? 'บริการของเรา | UPLIFT' : 'Our Services | UPLIFT',
    description: isThaiLang
      ? 'บริการพัฒนาซอฟต์แวร์ครบวงจร ระบบ ERP, POS และเว็บแอปพลิเคชันที่ตอบโจทย์ธุรกิจของคุณ'
      : 'Comprehensive software development services including ERP systems, POS solutions, and custom web applications tailored to your business needs.',
    openGraph: {
      title: isThaiLang ? 'บริการของเรา | UPLIFT' : 'Our Services | UPLIFT',
      description: isThaiLang
        ? 'บริการพัฒนาซอฟต์แวร์ครบวงจร ระบบ ERP, POS และเว็บแอปพลิเคชัน'
        : 'Comprehensive software development services including ERP, POS, and web applications',
      url: `https://uplifttech.store/${lang}/service`,
      type: 'website',
      images: [
        {
          url: '/og/services.jpg',
          width: 1200,
          height: 630,
          alt: isThaiLang ? 'UPLIFT Services' : 'UPLIFT Services',
        },
      ],
    },
    alternates: {
      canonical: `/${lang}/service`,
      languages: {
        en: '/en/service',
        th: '/th/service',
      },
    },
  };
}


export default async function ServicePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const serviceShowcaseContent = await getServicesData(lang);

  // Type Guard and Assertion
  if (!serviceShowcaseContent || !('showcase_items' in serviceShowcaseContent) || !Array.isArray(serviceShowcaseContent.showcase_items)) {
    return <div>Error: Service Showcase content not found or invalid for {lang}</div>;
  }

  const typedShowcaseContent: ShowcaseSectionContent = serviceShowcaseContent as ShowcaseSectionContent;

  return (
    <>
      <Nav />
      <main className="w-full inset-0 ">
        <HeroSection />
        <ServiceShowcaseSection showcaseContent={typedShowcaseContent} />
      </main>
      <Footer />
    </>
  );
}