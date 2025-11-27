// Home Page - src/app/[lang]/page.tsx
// Main landing page for Uplift Technology co., LTD website with i18n support

import dynamic from "next/dynamic";
import Nav from "@/components/basic/nav/resnav";
import Footer from "@/components/layout/footer/footer";

// ============================================
// ABOVE-THE-FOLD (Load immediately + SSR)
// ============================================
import { Hero } from "@/components/page/home/hero/heroai";
import { AuthSuccessHandler } from "@/components/auth/auth-success-handler";
import { OAuthSuccessHandler } from "@/components/auth/oauth-success-handler";

// ============================================
// BELOW-THE-FOLD (Dynamic + SSR for SEO)
// ============================================
const Problems = dynamic(() => import("@/components/page/home/problems"), {
  loading: () => <div className="min-h-[400px]" /> // Skeleton placeholder
});

const Solution = dynamic(() => import("@/components/page/home/solution").then(mod => ({ default: mod.SolutionSSR })), {
  loading: () => <div className="min-h-[400px]" />
});

const Product = dynamic(() => import("@/components/page/home/product").then(mod => ({ default: mod.Product })), {
  loading: () => <div className="min-h-[400px]" />
});

const FAQ = dynamic(() => import("@/components/page/home/faq").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="min-h-[400px]" />
});

const BestPractice = dynamic(() => import("@/components/page/home/best-practice").then(mod => ({ default: mod.BestPractice })), {
  loading: () => <div className="min-h-[600px]" />
});

const FounderVision = dynamic(() => import("@/components/page/home/founder-vision").then(mod => ({ default: mod.FounderVision })), {
  loading: () => <div className="min-h-[600px]" />
});

// ============================================
// INTERACTIVE ONLY (Lazy loaded - less critical)
// ============================================
const DemoApp = dynamic(() => import("@/components/page/home/demo-app").then(mod => ({ default: mod.DemoApp })), {
  loading: () => <div className="min-h-[500px]" />
});

const TechStack = dynamic(() => import("@/components/page/home/tech-stack").then(mod => ({ default: mod.TechStack })), {
  loading: () => <div className="min-h-[500px]" />
});

const SolutionArchitecture = dynamic(() => import("@/components/page/home/solution-architecture").then(mod => ({ default: mod.SolutionArchitecture })), {
  loading: () => <div className="min-h-[500px]" />
});

// Valid languages
const VALID_LANGS = ['en', 'th'] as const;
type Lang = typeof VALID_LANGS[number];

// Dynamic import of homepage data with validation
const getHomepageData = async (locale: string) => {
  try {
    const homepageData = await import(`@/data/homepage/${locale}.json`);
    const data = homepageData.default;

    // Validate required fields
    if (!data?.hero || !data?.home || !data?.services) {
      console.error(`Invalid data structure in ${locale}.json`);
      throw new Error('Invalid locale data structure');
    }

    return data;
  } catch (error) {
    // Fallback to English if locale file doesn't exist or is invalid
    console.warn(`Failed to load ${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/en.json`);
    return fallbackData.default;
  }
};

// Load Problems data by section
const getProblemsData = async (locale: string) => {
  try {
    const problemsData = await import(`@/data/homepage/problems/${locale}.json`);
    return problemsData.default;
  } catch (error) {
    console.warn(`Failed to load problems/${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/problems/en.json`);
    return fallbackData.default;
  }
};

// Load FAQ data by section
const getFAQData = async (locale: string) => {
  try {
    const faqData = await import(`@/data/homepage/faq/${locale}.json`);
    return faqData.default;
  } catch (error) {
    console.warn(`Failed to load faq/${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/faq/en.json`);
    return fallbackData.default;
  }
};

// Load Tech Stack data by section
const getTechStackData = async (locale: string) => {
  try {
    const techStackData = await import(`@/data/homepage/techstack/${locale}.json`);
    return techStackData.default;
  } catch (error) {
    console.warn(`Failed to load techstack/${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/techstack/en.json`);
    return fallbackData.default;
  }
};

// Load Portfolio data by section
const getPortfolioData = async (locale: string) => {
  try {
    const portfolioData = await import(`@/data/homepage/portfolio/${locale}.json`);
    return portfolioData.default;
  } catch (error) {
    console.warn(`Failed to load portfolio/${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/portfolio/en.json`);
    return fallbackData.default;
  }
};

// Load DemoApp data by section
const getDemoAppData = async (locale: string) => {
  try {
    const demoAppData = await import(`@/data/homepage/demo-app/${locale}.json`);
    return demoAppData.default;
  } catch (error) {
    console.warn(`Failed to load demo-app/${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/demo-app/en.json`);
    return fallbackData.default;
  }
};

// Load Architecture data by section
const getArchitectureData = async (locale: string) => {
  try {
    const architectureData = await import(`@/data/homepage/architecture/${locale}.json`);
    return architectureData.default;
  } catch (error) {
    console.warn(`Failed to load architecture/${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/architecture/en.json`);
    return fallbackData.default;
  }
};

// Load Product data by section
const getProductData = async (locale: string) => {
  try {
    const productData = await import(`@/data/homepage/product/${locale}.json`);
    return productData.default;
  } catch (error) {
    console.warn(`Failed to load product/${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/product/en.json`);
    return fallbackData.default;
  }
};

// Load FounderVision data by section
const getFounderVisionData = async (locale: string) => {
  try {
    const founderVisionData = await import(`@/data/homepage/founder-vision/${locale}.json`);
    return founderVisionData.default;
  } catch (error) {
    console.warn(`Failed to load founder-vision/${locale}.json, falling back to English`, error);
    const fallbackData = await import(`@/data/homepage/founder-vision/en.json`);
    return fallbackData.default;
  }
};

// Generate static params for en and th
export function generateStaticParams() {
  return VALID_LANGS.map((lang) => ({ lang }));
}

// Generate metadata with SEO enhancements
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: paramLang } = await params;
  const lang = VALID_LANGS.includes(paramLang as Lang) ? paramLang : 'en';
  const homepageData = await getHomepageData(lang);

  const keywords = lang === 'th'
    ? ['software house', 'พัฒนาซอฟต์แวร์', 'ERP', 'POS', 'WMS', 'AI', 'เว็บแอปพลิเคชัน', 'แอปมือถือ', 'Thailand', 'บริษัทซอฟต์แวร์']
    : ['software house', 'software development', 'ERP', 'POS', 'WMS', 'AI solutions', 'web application', 'mobile app', 'Thailand', 'custom software'];

  return {
    title: homepageData.title,
    description: homepageData.description,
    keywords: keywords,
    authors: [{ name: 'UPLIFT Technology Co., Ltd.' }],
    creator: 'UPLIFT Technology',
    publisher: 'UPLIFT Technology Co., Ltd.',
    openGraph: {
      title: homepageData.title,
      description: homepageData.description,
      url: `https://uplifttech.store/${lang}`,
      siteName: 'UPLIFT Technology',
      type: 'website',
      locale: lang === 'th' ? 'th_TH' : 'en_US',
      images: [
        {
          url: '/og/home.jpg',
          width: 1200,
          height: 630,
          alt: lang === 'th' ? 'UPLIFT Technology - Software House' : 'UPLIFT Technology - Software House',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: homepageData.title,
      description: homepageData.description,
      images: ['/og/home.jpg'],
      creator: '@uplifttech',
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        th: '/th',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  // Await and validate lang parameter
  const { lang: paramLang } = await params;
  const lang = VALID_LANGS.includes(paramLang as Lang) ? paramLang : 'en';

  // 🆕 Load homepage data using lang parameter
  const homepageData = await getHomepageData(lang);
  const problemsData = await getProblemsData(lang);
  const faqData = await getFAQData(lang);
  const techStackData = await getTechStackData(lang);
  const portfolioData = await getPortfolioData(lang);
  const demoAppData = await getDemoAppData(lang);
  const architectureData = await getArchitectureData(lang);
  const productData = await getProductData(lang);
  const founderVisionData = await getFounderVisionData(lang);

  // Extract content sections - data is already validated in getHomepageData
  const { hero: heroContent } = homepageData;

  // JSON-LD Structured Data for SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UPLIFT Technology Co., Ltd.',
    alternateName: 'UPLIFT Technology',
    url: 'https://uplifttech.store',
    logo: 'https://uplifttech.store/logo.png',
    description: lang === 'th'
      ? 'บริษัทซอฟต์แวร์เฮาส์ชั้นนำ พัฒนาระบบ ERP, POS, WMS และโซลูชัน AI สำหรับธุรกิจในประเทศไทย'
      : 'Leading software house developing ERP, POS, WMS systems and AI solutions for businesses in Thailand',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
      addressLocality: 'Bangkok',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Thai', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/uplifttech',
      'https://www.linkedin.com/company/uplifttech',
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: homepageData.title,
    description: homepageData.description,
    url: `https://uplifttech.store/${lang}`,
    inLanguage: lang === 'th' ? 'th-TH' : 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'UPLIFT Technology',
      url: 'https://uplifttech.store',
    },
    publisher: {
      '@type': 'Organization',
      name: 'UPLIFT Technology Co., Ltd.',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'th' ? 'หน้าหลัก' : 'Home',
        item: `https://uplifttech.store/${lang}`,
      },
    ],
  };

  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: lang === 'th' ? 'เมนูหลัก' : 'Main Navigation',
    hasPart: [
      {
        '@type': 'WebPage',
        name: lang === 'th' ? 'หน้าหลัก' : 'Home',
        url: `https://uplifttech.store/${lang}`,
      },
      {
        '@type': 'WebPage',
        name: lang === 'th' ? 'บริการ' : 'Services',
        url: `https://uplifttech.store/${lang}/service`,
      },
      {
        '@type': 'WebPage',
        name: lang === 'th' ? 'นวัตกรรม' : 'Innovation',
        url: `https://uplifttech.store/${lang}/innovation`,
      },
      {
        '@type': 'WebPage',
        name: lang === 'th' ? 'โซลูชัน' : 'Solutions',
        url: `https://uplifttech.store/${lang}/solutions`,
      },
      {
        '@type': 'WebPage',
        name: lang === 'th' ? 'เรื่องราว' : 'Story',
        url: `https://uplifttech.store/${lang}/story`,
      },
      {
        '@type': 'WebPage',
        name: lang === 'th' ? 'วิสัยทัศน์' : 'Vision',
        url: `https://uplifttech.store/${lang}/vision`,
      },
      {
        '@type': 'WebPage',
        name: lang === 'th' ? 'ทีมงาน' : 'Teams',
        url: `https://uplifttech.store/${lang}/teams`,
      },
      {
        '@type': 'WebPage',
        name: lang === 'th' ? 'ติดต่อเรา' : 'Contact',
        url: `https://uplifttech.store/${lang}/consult`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />

      <AuthSuccessHandler />
      <OAuthSuccessHandler />
      <Nav />

      <main className="w-full overflow-x-hidden max-w-full">
        {/* Hero Section */}
        <Hero heroContent={heroContent} lang={lang} />

        {/* Problems Section */}
        <Problems data={problemsData} />

        {/* Solution Section - ดึงข้อมูลจาก innovation-mock (highlight: true) */}
        <Solution lang={lang} />

        {/* Best Practice Section */}
        <BestPractice data={portfolioData} />

        {/* Demo App Section */}
        <DemoApp data={demoAppData} />

        {/* Tech Stack Section */}
        <TechStack data={techStackData} />

        {/* Solution Architecture Section */}
        <SolutionArchitecture data={architectureData} />

        {/* Product Section */}
        <Product lang={lang} data={productData} />

        {/* Founder Vision Section */}
        <FounderVision lang={lang} data={founderVisionData} />

        {/* FAQ Section */}
        <FAQ data={faqData} />
      </main>

      <Footer />
    </>
  );
}
