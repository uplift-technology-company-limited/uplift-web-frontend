import React from 'react'
import type { Metadata } from 'next'
import Nav from '@/components/basic/nav/resnav'
import Footer from '@/components/layout/footer/footer'
import { Calendar, Building2, User, Code, Globe, Shield, Award, Target } from 'lucide-react'
import { CompanyHeroCarousel } from '@/components/page/company/hero-carousel'
import { RegistrationDetails } from '@/components/page/company/registration-details'
import { VisionMissionSection } from '@/components/page/company/vision-mission'
import { CompanyValues } from '@/components/page/company/company-values'
import { ContactCTA } from '@/components/page/company/contact-cta'

interface CompanyPageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { lang } = await params
  const isThaiLang = lang === 'th'

  return {
    title: isThaiLang ? 'ข้อมูลบริษัท | UPLIFT' : 'Company | UPLIFT',
    description: isThaiLang
      ? 'ข้อมูลรายละเอียดของบริษัท อัปพลิฟท์ เทคโนโลยี จำกัด - Software House สาย Startup Culture ที่เปลี่ยนความคิดสร้างสรรค์ให้กลายเป็นโซลูชันเชิงนวัตกรรม'
      : 'Detailed information about UPLIFT TECHNOLOGY CO., LTD. - A startup-culture software house transforming ideas into revolutionary solutions.',
    openGraph: {
      title: isThaiLang ? 'ข้อมูลบริษัท | UPLIFT' : 'Company | UPLIFT',
      description: isThaiLang
        ? 'ข้อมูลรายละเอียดของบริษัท อัปพลิฟท์ เทคโนโลยี จำกัด - Software House สาย Startup Culture'
        : 'Detailed information about UPLIFT TECHNOLOGY CO., LTD. - A startup-culture software house',
      url: `https://uplifttech.store/${lang}/company`,
      type: 'website',
      images: [
        {
          url: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/IM_01_02.png',
          width: 1200,
          height: 630,
          alt: isThaiLang ? 'UPLIFT Technology Company' : 'UPLIFT Technology Company',
        },
      ],
    },
    alternates: {
      canonical: `/${lang}/company`,
      languages: {
        en: '/en/company',
        th: '/th/company',
      },
    },
  }
}

const getCompanyData = (locale: string) => {
  const isThaiLang = locale === 'th'

  return {
    hero: {
      title: 'UPLIFT TECHNOLOGY CO., LTD.',
      subtitle: isThaiLang
        ? 'Software House สาย Startup Culture'
        : 'Startup Culture Software House',
      description: isThaiLang
        ? 'เราไม่ใช่แค่ทีมพัฒนาซอฟต์แวร์ แต่เป็นพาร์ทเนอร์ที่เข้าใจธุรกิจและช่วยยกระดับองค์กรของคุณด้วยเทคโนโลยี'
        : "We're not just a development team, but a partner who understands your business and elevates your organization with technology",
    },
    companyInfo: {
      registrationNumber: '0125568012345',
      registrationDate: isThaiLang ? '25 สิงหาคม 2568' : 'August 25, 2568',
      location: isThaiLang ? 'จังหวัดชลบุรี ประเทศไทย' : 'Chonburi Province, Thailand',
      capital: isThaiLang ? '1,000,000 บาท' : '1,000,000 THB',
      founder: isThaiLang ? 'คุณอานนท์ สุพัฒน์ผล' : 'Anon Suphatphon',
      businessType: isThaiLang
        ? 'บริการด้านเทคโนโลยีสารสนเทศและการสื่อสาร'
        : 'Information Technology and Communication Services',
      website: 'https://uplift.co.th',
    },
    vision: {
      title: isThaiLang ? 'วิสัยทัศน์' : 'Vision',
      content: isThaiLang
        ? 'เป็น Software House ชั้นนำที่ไม่เพียงแค่พัฒนาซอฟต์แวร์ แต่เป็นพาร์ทเนอร์ทางธุรกิจที่เข้าใจและช่วยยกระดับธุรกิจลูกค้าด้วยเทคโนโลยีที่เหมาะสม'
        : "To be a leading Software House that doesn't just develop software, but serves as a business partner who understands and elevates client businesses with appropriate technology.",
    },
    mission: {
      title: isThaiLang ? 'พันธกิจ' : 'Mission',
      content: isThaiLang
        ? 'สร้างโซลูชันเทคโนโลยีที่ตอบโจทย์ธุรกิจจริง ด้วยการเข้าใจลูกค้าเชิงลึก ใช้เทคโนโลยีที่เหมาะสม และมุ่งเน้นผลลัพธ์ที่วัดผลได้'
        : 'Create technology solutions that truly address business needs through deep client understanding, appropriate technology use, and focus on measurable results.',
    },
    values: [
      {
        icon: <Target className="h-6 w-6" />,
        title: isThaiLang ? 'เข้าใจธุรกิจเชิงลึก' : 'Deep Business Understanding',
        description: isThaiLang
          ? 'ไม่ใช่แค่ทำตามสเปก แต่เข้าใจปัญหาและโอกาสทางธุรกิจ'
          : 'Not just following specs, but understanding business problems and opportunities',
      },
      {
        icon: <Code className="h-6 w-6" />,
        title: isThaiLang ? 'เทคโนโลยีที่เหมาะสม' : 'Appropriate Technology',
        description: isThaiLang
          ? 'เลือกใช้เทคโนโลยีที่เหมาะกับปัญหา ไม่ใช่เทคโนโลยีที่ใหม่ที่สุด'
          : 'Choosing technology that fits the problem, not the newest technology',
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: isThaiLang ? 'คุณภาพและความปลอดภัย' : 'Quality and Security',
        description: isThaiLang
          ? 'ระบบที่เสถียร ปลอดภัย และสามารถขยายตัวได้'
          : 'Stable, secure, and scalable systems',
      },
      {
        icon: <Award className="h-6 w-6" />,
        title: isThaiLang ? 'ผลลัพธ์ที่วัดผลได้' : 'Measurable Results',
        description: isThaiLang
          ? 'มุ่งเน้นผลลัพธ์ที่เพิ่มประสิทธิภาพและผลกำไรให้ลูกค้า'
          : 'Focus on results that improve efficiency and profitability for clients',
      },
    ],
  }
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { lang } = await params
  const companyData = getCompanyData(lang)

  const carouselImages = [
    {
      id: 1,
      src: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/IM_01_02.png',
      alt: lang === 'th' ? 'ป้ายบริษัท UPLIFT Technology' : 'UPLIFT Technology Company Sign',
      title: lang === 'th' ? 'ป้ายบริษัท' : 'Company Sign',
    },
    {
      id: 6,
      src: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/IM_01_06.png',
      alt: lang === 'th' ? 'นามบัตรองค์กร' : 'Corporate Business Card',
      title: lang === 'th' ? 'นามบัตรองค์กร' : 'Business Card',
    },
    {
      id: 9,
      src: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/IM_01_09.png',
      alt: lang === 'th' ? 'ปกสัญญา TOR' : 'TOR Contract Cover',
      title: lang === 'th' ? 'ปกสัญญา TOR' : 'Contract Cover',
    },
  ]

  const registrationDetails = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: lang === 'th' ? 'วันที่จดทะเบียน' : 'Registration Date',
      value: companyData.companyInfo.registrationDate,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: lang === 'th' ? 'สถานที่ตั้ง' : 'Location',
      value: companyData.companyInfo.location,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: lang === 'th' ? 'ทุนจดทะเบียน' : 'Registered Capital',
      value: companyData.companyInfo.capital,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <User className="h-8 w-8" />,
      title: lang === 'th' ? 'ผู้ก่อตั้ง' : 'Founder',
      value: companyData.companyInfo.founder,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: lang === 'th' ? 'เว็บไซต์' : 'Website',
      value: companyData.companyInfo.website,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: lang === 'th' ? 'ประเภทธุรกิจ' : 'Business Type',
      value: companyData.companyInfo.businessType,
      gradient: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <>
      <Nav />
      <main className="relative w-full overflow-x-hidden">
        {/* Hero Section with Background Carousel */}
        <CompanyHeroCarousel
          lang={lang}
          title={companyData.hero.title}
          subtitle={companyData.hero.subtitle}
          description={companyData.hero.description}
          images={carouselImages}
        />

        {/* Company Registration Details */}
        <RegistrationDetails lang={lang} details={registrationDetails} />

        {/* Vision & Mission */}
        <VisionMissionSection
          lang={lang}
          vision={companyData.vision}
          mission={companyData.mission}
        />

        {/* Company Values */}
        <CompanyValues lang={lang} values={companyData.values} />

        {/* Contact CTA */}
        <ContactCTA lang={lang} />
      </main>
      <Footer />
    </>
  )
}
