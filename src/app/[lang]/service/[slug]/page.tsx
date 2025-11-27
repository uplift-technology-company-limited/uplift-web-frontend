import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from "@/components/basic/nav/resnav";
import Footer from "@/components/layout/footer/footer";

// Import all section components
import HeroSection from '@/components/page/service/pagesection/HeroSection';
import QuickPitchSection from '@/components/page/service/pagesection/QuickPitchSection';
import ProblemStatementSection from '@/components/page/service/pagesection/ProblemStatementSection';
import InDepthFeaturesSection from '@/components/page/service/pagesection/InDepthFeaturesSection';
import BenefitsOutcomesSection from '@/components/page/service/pagesection/BenefitsOutcomesSection';
import CaseStudySection from '@/components/page/service/pagesection/CaseStudySection';
import PricingSection from '@/components/page/service/pagesection/PricingSection';
import FaqSection from '@/components/page/service/pagesection/FaqSection';

interface ServiceDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

// Service data type
interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  description: string;
  icon?: string;
  color?: string;
  heroImage?: string;
  highlights?: Array<{ title: string; description: string; icon?: string }>;
  problems?: Array<{ title: string; description: string; icon?: string }>;
  features?: Array<{ title: string; description: string; icon?: string }>;
  benefits?: Array<{ title: string; description: string; icon?: string }>;
  caseStudies?: Array<{ title: string; description: string; image?: string; results?: string[] }>;
  pricing?: Array<{ name: string; description: string; price: string; features: string[]; isPopular?: boolean }>;
  faqs?: Array<{ question: string; answer: string }>;
}

// Service slugs mapping
const serviceData: Record<string, ServiceData> = {
  'it-resource': {
    slug: 'it-resource',
    title: 'IT Resource Service',
    subtitle: 'IT Staffing & Outsourcing Solutions',
    overview: 'Professional IT staffing and outsourcing service covering all essential roles from Business Analysts to QA Specialists.',
    description: 'We provide skilled IT professionals to strengthen your team temporarily or handle complete project outsourcing. Our services cover BA, SA, UX/UI Designer, Software Engineer, DevOps, and QA specialists.',
    icon: 'Users',
    color: 'from-orange-500 to-red-500',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
    highlights: [
      { title: 'Flexible Engagement', description: 'Hire by project, contract, or permanent placement', icon: 'Calendar' },
      { title: 'Pre-vetted Talent', description: 'All professionals thoroughly screened and tested', icon: 'CheckCircle' },
      { title: 'Quick Deployment', description: 'Resources ready within 1-2 weeks', icon: 'Zap' },
      { title: 'Cost-Effective', description: 'Save up to 40% compared to direct hiring', icon: 'TrendingDown' },
    ],
    problems: [
      { title: 'Hiring Delays', description: 'Long recruitment processes delay projects', icon: 'Clock' },
      { title: 'Skill Gaps', description: 'Existing team lacks specific expertise', icon: 'AlertTriangle' },
      { title: 'High Costs', description: 'Full-time salaries and benefits strain budget', icon: 'DollarSign' },
      { title: 'Project Overload', description: 'Too many projects, not enough people', icon: 'Users' },
    ],
    features: [
      { title: 'Business Analyst (BA) & System Analyst (SA)', description: 'Requirement gathering, process analysis, and system design expertise', icon: 'FileText' },
      { title: 'UX/UI Designer', description: 'Professional designers creating intuitive user experiences', icon: 'Palette' },
      { title: 'Software Engineer & DevOps', description: 'Full-stack developers and infrastructure automation specialists', icon: 'Code' },
      { title: 'Quality Assurance (QA) Specialist', description: 'Testing experts ensuring software quality and reliability', icon: 'Shield' },
    ],
    benefits: [
      { title: 'Faster Time-to-Market', description: 'Launch projects 50% faster with ready resources', icon: 'Rocket' },
      { title: 'Reduced Risk', description: 'No long-term commitments, scale up or down easily', icon: 'ShieldCheck' },
      { title: 'Focus on Core Business', description: 'Let experts handle IT while you focus on strategy', icon: 'Target' },
      { title: 'Access to Expertise', description: 'Get specialized skills without permanent hiring', icon: 'Award' },
    ],
    caseStudies: [
      {
        title: 'E-Commerce Platform Modernization',
        description: 'A retail company needed to modernize their legacy platform. We provided a complete team of 2 BAs, 4 Engineers, 1 DevOps, and 2 QA specialists.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
        results: [
          'Project completed 3 months ahead of schedule',
          'Platform performance improved by 200%',
          'Client extended contract for ongoing support',
        ],
      },
      {
        title: 'Fintech Startup Launch',
        description: 'A startup needed to build their MVP quickly. We provided 3 full-stack engineers and 1 UX/UI designer on a 6-month contract.',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop',
        results: [
          'MVP launched in 4 months',
          'Secured Series A funding after successful launch',
          '3 resources converted to permanent employees',
        ],
      },
    ],
    pricing: [
      {
        name: 'Single Resource',
        description: 'Individual specialist for specific needs',
        price: '฿45,000 - ฿120,000/month',
        features: [
          '1 dedicated professional',
          'Flexible engagement terms',
          'Direct communication',
          'Monthly reporting',
        ]
      },
      {
        name: 'Team Augmentation',
        description: 'Most popular for project teams',
        price: '฿250,000 - ฿800,000/month',
        features: [
          '3-8 mixed role professionals',
          'Team lead included',
          'Agile/Scrum practices',
          'Weekly progress reports',
          'Priority support',
        ],
        isPopular: true
      },
      {
        name: 'Complete Outsourcing',
        description: 'Full project takeover',
        price: 'Contact us',
        features: [
          'Complete project team',
          'Project management included',
          'Quality assurance',
          'Infrastructure setup',
          '24/7 support available',
          'SLA guarantees',
        ]
      },
    ],
    faqs: [
      { question: 'How quickly can resources be deployed?', answer: 'Typically 1-2 weeks after finalizing requirements. For urgent needs, we can deploy within 3-5 business days from our readily available pool.' },
      { question: 'What if the resource doesn\'t fit our team?', answer: 'We offer a 2-week trial period. If the fit isn\'t right, we\'ll provide a replacement at no additional cost.' },
      { question: 'Can we hire the resource permanently?', answer: 'Yes, we offer conversion options. Terms are discussed upfront and typically include a finder\'s fee.' },
      { question: 'What level of experience do your professionals have?', answer: 'All resources have minimum 3 years experience. Senior and lead-level professionals with 7+ years are also available.' },
      { question: 'Do you handle remote and on-site placements?', answer: 'Yes, we support both models. Remote is our default, but on-site placement is available within Bangkok metropolitan area.' },
    ],
  },
  'saas': {
    slug: 'saas',
    title: 'SaaS Solutions',
    subtitle: 'Software as a Service Development',
    overview: 'Custom SaaS platform development for businesses looking to scale their software solutions in the cloud.',
    description: 'We build scalable, multi-tenant SaaS applications with subscription billing, user management, and cloud infrastructure that grows with your business.',
    icon: 'Cloud',
    color: 'from-indigo-500 to-blue-500',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    highlights: [
      { title: 'Multi-Tenant Architecture', description: 'Secure data isolation for each customer', icon: 'Shield' },
      { title: 'Auto-Scaling', description: 'Infrastructure scales with user demand', icon: 'TrendingUp' },
      { title: 'Subscription Billing', description: 'Built-in payment and subscription management', icon: 'CreditCard' },
      { title: 'API-First Design', description: 'Extensible and integration-ready', icon: 'Link' },
    ],
    problems: [
      { title: 'Scaling Challenges', description: 'Traditional software can\'t handle growth', icon: 'AlertTriangle' },
      { title: 'Maintenance Burden', description: 'Managing multiple client installations is costly', icon: 'Tool' },
      { title: 'Revenue Limitations', description: 'One-time licenses limit recurring revenue', icon: 'DollarSign' },
      { title: 'Slow Updates', description: 'Deploying updates to clients takes too long', icon: 'Clock' },
    ],
    features: [
      { title: 'Cloud Infrastructure', description: 'AWS/Azure/GCP deployment with high availability', icon: 'Cloud' },
      { title: 'User & Access Management', description: 'Role-based access control and SSO integration', icon: 'Users' },
      { title: 'Analytics Dashboard', description: 'Real-time usage metrics and business intelligence', icon: 'BarChart' },
      { title: 'Billing Integration', description: 'Stripe, PayPal, and local payment gateways', icon: 'CreditCard' },
      { title: 'API & Webhooks', description: 'RESTful APIs and event-driven webhooks', icon: 'Code' },
      { title: 'White-Label Ready', description: 'Customizable branding for each tenant', icon: 'Palette' },
    ],
    benefits: [
      { title: 'Recurring Revenue', description: 'Subscription model provides predictable income', icon: 'TrendingUp' },
      { title: 'Lower Costs', description: 'Shared infrastructure reduces per-customer costs by 60%', icon: 'TrendingDown' },
      { title: 'Faster Innovation', description: 'Deploy updates instantly to all customers', icon: 'Rocket' },
      { title: 'Global Reach', description: 'Serve customers worldwide with cloud distribution', icon: 'Globe' },
    ],
    caseStudies: [
      {
        title: 'HR Management SaaS Platform',
        description: 'Built a complete HR and payroll SaaS platform serving 150+ companies. Multi-tenant architecture with company-specific customizations.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
        results: [
          '150+ companies onboarded in first year',
          '99.9% uptime SLA maintained',
          'Platform generates ฿2M+ MRR',
        ],
      },
      {
        title: 'Project Management Tool',
        description: 'Developed a competitive alternative to traditional project management tools with Thai localization and local payment integration.',
        image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=500&fit=crop',
        results: [
          '5,000+ active users within 6 months',
          'Handling 1M+ tasks tracked monthly',
          'Acquired by larger SaaS company',
        ],
      },
    ],
    pricing: [
      {
        name: 'MVP Development',
        description: 'Launch your SaaS idea quickly',
        price: '฿800,000 - ฿1,500,000',
        features: [
          'Core features development',
          'Basic multi-tenancy',
          'User authentication',
          'Payment integration',
          'Cloud deployment',
          '3 months support',
        ]
      },
      {
        name: 'Full Platform',
        description: 'Complete SaaS solution',
        price: '฿2,500,000 - ฿5,000,000',
        features: [
          'Advanced multi-tenancy',
          'Admin & user dashboards',
          'Analytics & reporting',
          'API & webhooks',
          'Auto-scaling infrastructure',
          'White-label ready',
          '12 months support',
        ],
        isPopular: true
      },
      {
        name: 'Enterprise SaaS',
        description: 'Large-scale platform with advanced features',
        price: 'Contact us',
        features: [
          'Custom architecture design',
          'Microservices architecture',
          'Advanced security & compliance',
          'Custom integrations',
          'DevOps automation',
          'Ongoing development team',
          '24/7 support',
        ]
      },
    ],
    faqs: [
      { question: 'How long does it take to build a SaaS platform?', answer: 'MVP typically takes 3-6 months. Full platform with advanced features: 6-12 months. Timeline depends on complexity and feature scope.' },
      { question: 'Which cloud platform do you recommend?', answer: 'We work with AWS, Azure, and GCP. AWS is our default recommendation for most projects due to its comprehensive services and pricing.' },
      { question: 'Do you handle the infrastructure and DevOps?', answer: 'Yes, we provide complete DevOps setup including CI/CD pipelines, monitoring, automated backups, and scaling configuration.' },
      { question: 'Can you help with the business model and pricing strategy?', answer: 'Yes, we provide consultation on SaaS business models, pricing tiers, and monetization strategies based on market research.' },
      { question: 'What about data privacy and security compliance?', answer: 'We implement industry-standard security practices and can help achieve compliance with PDPA, GDPR, and other regulations as needed.' },
    ],
  },
};

// Generate static params for all service slugs
export async function generateStaticParams() {
  const slugs = Object.keys(serviceData);

  // Generate for both languages
  return slugs.flatMap((slug) => [
    { lang: 'th', slug },
    { lang: 'en', slug },
  ]);
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | UPLIFT`,
    description: service.description,
    openGraph: {
      title: `${service.title} - ${service.subtitle}`,
      description: service.description,
      url: `https://uplifttech.store/${lang}/service/${slug}`,
      type: 'website',
      images: service.heroImage
        ? [
            {
              url: service.heroImage,
              width: 1200,
              height: 630,
              alt: service.title,
            },
          ]
        : [],
    },
    alternates: {
      canonical: `/${lang}/service/${slug}`,
      languages: {
        en: `/en/service/${slug}`,
        th: `/th/service/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { lang, slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="w-full min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection service={service} />

        {/* Quick Pitch / Highlights */}
        {service.highlights && service.highlights.length > 0 && (
          <QuickPitchSection
            highlights={service.highlights}
            serviceColor={service.color}
            sectionTitle={lang === 'th' ? 'ทำไมต้องเลือกเรา' : 'Why Choose Us'}
          />
        )}

        {/* Problems */}
        {service.problems && service.problems.length > 0 && (
          <ProblemStatementSection
            problems={service.problems}
            serviceColor={service.color}
            sectionTitle={
              lang === 'th' ? 'คุณกำลังเจอปัญหาแบบนี้อยู่หรือไม่?' : 'Are You Facing These Challenges?'
            }
          />
        )}

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <InDepthFeaturesSection
            features={service.features}
            serviceColor={service.color}
            sectionTitle={lang === 'th' ? 'ฟีเจอร์หลัก' : 'Key Features'}
          />
        )}

        {/* Benefits */}
        {service.benefits && service.benefits.length > 0 && (
          <BenefitsOutcomesSection
            benefits={service.benefits}
            serviceColor={service.color}
            sectionTitle={lang === 'th' ? 'ประโยชน์ที่คุณจะได้รับ' : 'Benefits You\'ll Receive'}
          />
        )}

        {/* Case Studies */}
        {service.caseStudies && service.caseStudies.length > 0 && (
          <CaseStudySection
            caseStudies={service.caseStudies}
            serviceColor={service.color}
            sectionTitle={lang === 'th' ? 'ความสำเร็จของลูกค้า' : 'Customer Success Stories'}
          />
        )}

        {/* Pricing */}
        {service.pricing && service.pricing.length > 0 && (
          <PricingSection
            pricing={service.pricing}
            serviceColor={service.color}
            sectionTitle={lang === 'th' ? 'ราคา & แพ็กเกจ' : 'Pricing & Packages'}
          />
        )}

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <FaqSection
            faqs={service.faqs}
            serviceColor={service.color}
            sectionTitle={lang === 'th' ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions'}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
