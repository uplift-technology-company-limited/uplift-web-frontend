import React from 'react'
import type { Metadata } from 'next'
import Nav from '@/components/basic/nav/resnav'
import Footer from '@/components/layout/footer/footer'
import { VisionHero } from '@/components/page/vision/hero'
import { CoreValues } from '@/components/page/vision/core'
import { BrandPersonality } from '@/components/page/vision/brand'
import { OurPathForward } from '@/components/page/vision/forward'

interface VisionPageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: VisionPageProps): Promise<Metadata> {
  const { lang } = await params
  const isThaiLang = lang === 'th'

  return {
    title: isThaiLang
      ? 'วิสัยทัศน์และค่านิยม | UPLIFT'
      : 'Vision & Values | UPLIFT',
    description: isThaiLang
      ? 'วิสัยทัศน์ พันธกิจ และค่านิยมหลักของ UPLIFT Technology - Software House ที่มุ่งมั่นสร้างโซลูชันเทคโนโลยีที่ตอบโจทย์ธุรกิจจริง ด้วยการเข้าใจลูกค้าเชิงลึก'
      : 'Vision, mission, and core values of UPLIFT Technology - A software house committed to creating technology solutions that truly address business needs through deep client understanding.',
    openGraph: {
      title: isThaiLang ? 'วิสัยทัศน์และค่านิยม | UPLIFT' : 'Vision & Values | UPLIFT',
      description: isThaiLang
        ? 'วิสัยทัศน์ พันธกิจ และค่านิยมหลักของ UPLIFT Technology'
        : 'Vision, mission, and core values of UPLIFT Technology',
      url: `https://uplifttech.store/${lang}/vision`,
      type: 'website',
      images: [
        {
          url: '/og/vision.jpg',
          width: 1200,
          height: 630,
          alt: isThaiLang ? 'UPLIFT วิสัยทัศน์และค่านิยม' : 'UPLIFT Vision & Values',
        },
      ],
    },
    alternates: {
      canonical: `/${lang}/vision`,
      languages: {
        en: '/en/vision',
        th: '/th/vision',
      },
    },
  }
}

export default async function VisionPage({ params }: VisionPageProps) {
  await params // Ensure params are resolved

  return (
    <>
      <Nav />
      <main className="w-full">
        <VisionHero />
        <CoreValues />
        <BrandPersonality />
        <OurPathForward />
      </main>
      <Footer />
    </>
  )
}
