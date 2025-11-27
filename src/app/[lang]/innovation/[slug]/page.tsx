import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/basic/nav/resnav'
import Footer from '@/components/layout/footer/footer'
import { innovationMockData } from '@/data/innovation-mock'

// Hero variants
import { HeroSection } from '@/components/page/innovation/[slug]/sections/hero'
import { HeroMobile } from '@/components/page/innovation/[slug]/sections/hero-mobile'

// Problem variants
import { ProblemSection } from '@/components/page/innovation/[slug]/sections/problem'
import { ProblemMinimal } from '@/components/page/innovation/[slug]/sections/problem-minimal'

// Features variants
import { FeaturesSection } from '@/components/page/innovation/[slug]/sections/features'
import { FeaturesBento } from '@/components/page/innovation/[slug]/sections/features-bento'
import { FeaturesCards } from '@/components/page/innovation/[slug]/sections/features-cards'

// How It Works variants
import { HowItWorksSection } from '@/components/page/innovation/[slug]/sections/how-it-works'
import { HowItWorksTimeline } from '@/components/page/innovation/[slug]/sections/how-it-works-timeline'
import { HowItWorksCards } from '@/components/page/innovation/[slug]/sections/how-it-works-cards'

// Pricing variants
import { PricingSection } from '@/components/page/innovation/[slug]/sections/pricing'
import { PricingComparison } from '@/components/page/innovation/[slug]/sections/pricing-comparison'

// Other sections
import { FAQSection } from '@/components/page/innovation/[slug]/sections/faq'
import { CTASection } from '@/components/page/innovation/[slug]/sections/cta'

interface InnovationPageProps {
  params: Promise<{ lang: string; slug: string }>
}

// Generate static paths for all innovation products
export async function generateStaticParams() {
  const slugs = Object.keys(innovationMockData)

  return slugs.flatMap((slug) => [
    { lang: 'th', slug },
    { lang: 'en', slug },
  ])
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: InnovationPageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const data = innovationMockData[slug]

  if (!data) {
    return {
      title: 'Not Found | UPLIFTTECH',
    }
  }

  const metadata = data.metadata || {
    title: data.hero.title,
    description: data.hero.description,
  }

  return {
    title: `${metadata.title} | UPLIFTTECH`,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      images: metadata.ogImage
        ? [
            {
              url: metadata.ogImage,
              width: 1200,
              height: 630,
              alt: metadata.title,
            },
          ]
        : [],
    },
    alternates: {
      canonical: `/${lang}/innovation/${slug}`,
      languages: {
        en: `/en/innovation/${slug}`,
        th: `/th/innovation/${slug}`,
      },
    },
  }
}

export default async function InnovationPage({ params }: InnovationPageProps) {
  const { lang, slug } = await params

  // Get innovation data (in future, this could fetch from API)
  const pageData = innovationMockData[slug]

  if (!pageData) {
    notFound()
  }

  // Get variants configuration (with defaults)
  const variants = pageData.variants || {
    features: 'default',
    howItWorks: 'default',
    problem: 'default',
    pricing: 'default',
  }

  // Helper function to render Problem section based on variant
  const renderProblemSection = () => {
    if (!pageData.problems || pageData.problems.length === 0) return null

    const props = {
      data: pageData.problems,
      title: lang === 'th' ? 'ปัญหา' : 'The Problem',
      subtitle:
        lang === 'th'
          ? 'ความท้าทายที่ธุรกิจเผชิญในปัจจุบัน'
          : 'Challenges businesses face today',
      lang,
    }

    switch (variants.problem) {
      case 'minimal':
        return <ProblemMinimal {...props} />
      default:
        return <ProblemSection {...props} />
    }
  }

  // Helper function to render Features section based on variant
  const renderFeaturesSection = () => {
    if (!pageData.features || pageData.features.length === 0) return null

    const props = {
      data: pageData.features,
      title: lang === 'th' ? 'ฟีเจอร์' : 'Features',
      subtitle:
        lang === 'th'
          ? 'ทุกสิ่งที่คุณต้องการเพื่อความสำเร็จ'
          : 'Everything you need to succeed',
      lang,
    }

    switch (variants.features) {
      case 'bento':
        return <FeaturesBento {...props} />
      case 'cards':
        return <FeaturesCards {...props} />
      default:
        return <FeaturesSection {...props} />
    }
  }

  // Helper function to render How It Works section based on variant
  const renderHowItWorksSection = () => {
    if (!pageData.howItWorks || pageData.howItWorks.length === 0) return null

    const props = {
      data: pageData.howItWorks,
      title: lang === 'th' ? 'วิธีการทำงาน' : 'How It Works',
      subtitle:
        lang === 'th' ? 'เริ่มต้นได้ภายในไม่กี่นาที' : 'Get started in minutes',
      lang,
    }

    switch (variants.howItWorks) {
      case 'timeline':
        return <HowItWorksTimeline {...props} />
      case 'cards':
        return <HowItWorksCards {...props} />
      default:
        return <HowItWorksSection {...props} />
    }
  }

  // Helper function to render Pricing section based on variant
  const renderPricingSection = () => {
    if (!pageData.pricing || pageData.pricing.length === 0) return null

    const props = {
      data: pageData.pricing,
      title: lang === 'th' ? 'แผนราคา' : 'Pricing',
      subtitle:
        lang === 'th'
          ? 'เลือกแผนที่เหมาะสมกับคุณ'
          : 'Choose the perfect plan for you',
      lang,
    }

    switch (variants.pricing) {
      case 'comparison':
        return <PricingComparison {...props} />
      default:
        return <PricingSection {...props} />
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background">
        {/* Hero Section - Render variant based on hero.variant */}
        {pageData.hero.variant === 'mobile' ? (
          <HeroMobile data={pageData.hero} lang={lang} />
        ) : (
          <HeroSection data={pageData.hero} lang={lang} />
        )}

        {/* Problems Section */}
        {renderProblemSection()}

        {/* Features Section */}
        {renderFeaturesSection()}

        {/* How It Works Section */}
        {renderHowItWorksSection()}

        {/* Pricing Section */}
        {renderPricingSection()}

        {/* FAQ Section */}
        {pageData.faqs && pageData.faqs.length > 0 && (
          <FAQSection
            data={pageData.faqs}
            title={lang === 'th' ? 'คำถามที่พบบ่อย' : 'FAQ'}
            subtitle={
              lang === 'th' ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions'
            }
            lang={lang}
          />
        )}

        {/* CTA Section */}
        {pageData.cta && <CTASection data={pageData.cta} lang={lang} />}
      </main>
      <Footer />
    </>
  )
}
