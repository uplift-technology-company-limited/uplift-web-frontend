'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'
import { InnovationHero } from '@/types/innovation'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const
const easeInOutCubic = [0.65, 0, 0.35, 1] as const

interface HeroMobileProps {
  data: InnovationHero
  lang?: string
}

export function HeroMobile({ data, lang = 'th' }: HeroMobileProps) {
  const { scrollY } = useScroll({
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollY, [0, 300], [100, 0])
  const y2 = useTransform(scrollY, [0, 300], [50, 0])
  const y3 = useTransform(scrollY, [0, 300], [0, 0])
  const y4 = useTransform(scrollY, [0, 300], [50, 0])
  const y5 = useTransform(scrollY, [0, 300], [100, 0])

  const deviceImages = data.deviceMockups || []

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto pt-16 sm:pt-24 md:pt-32">
          {/* Badge with animation */}
          {data.badge && (
            <div className="relative">
              <motion.div
                initial={{ scale: 4.5, height: '80vh' }}
                animate={{ scale: 1, height: '10vh' }}
                transition={{
                  scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
                  height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
                }}
                className="mb-8 relative z-20"
                style={{ transformOrigin: 'top' }}
              >
                <div className="bg-primary text-primary-foreground text-xl font-bold p-4 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md">
                  {data.badge.split(' ')[0]}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute inset-0 top-20 z-10 text-sm text-muted-foreground"
              >
                {data.badge}
              </motion.div>
            </div>
          )}

          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
          >
            {data.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl font-medium text-balance max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
          >
            {data.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: easeInOutCubic }}
          >
            {data.description}
          </motion.p>

          {/* Download Badges */}
          {data.downloadBadges && (
            <div className="flex justify-center mb-8">
              {data.downloadBadges.appStore && (
                <motion.img
                  src={data.downloadBadges.appStore}
                  alt="Download on App Store"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-12 w-auto dark:hidden block"
                />
              )}
              {data.downloadBadges.playStore && (
                <motion.img
                  src={data.downloadBadges.playStore}
                  alt="Get it on Google Play"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="h-12 w-auto ml-4"
                />
              )}
            </div>
          )}

          {/* Device Mockups with Parallax */}
          {deviceImages.length > 0 && (
            <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none mt-8">
              {deviceImages.map((image, index) => {
                const transforms = [y1, y2, y3, y4, y5]
                const yTransform = transforms[index % transforms.length]
                const delays = [1, 1, 1, 1, 1]
                const xValues = [-200, -100, 0, 100, 200]

                return (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${data.title} - Screenshot ${index + 1}`}
                    initial={{
                      opacity: 0,
                      x: index < deviceImages.length / 2 ? xValues[index] : xValues[index],
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ y: yTransform }}
                    transition={{ duration: 1, delay: delays[index % delays.length] }}
                    className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0 rounded-3xl shadow-2xl"
                  />
                )
              })}
            </div>
          )}

          {/* CTA Buttons (shown after device mockups) */}
          {data.cta && !data.downloadBadges && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease }}
            >
              {data.cta.primary && (
                <Button asChild size="lg" className="group">
                  <Link href={data.cta.primary.href}>
                    <Download className="mr-2 h-4 w-4" />
                    {data.cta.primary.text}
                  </Link>
                </Button>
              )}
              {data.cta.secondary && (
                <Button asChild size="lg" variant="outline">
                  <Link href={data.cta.secondary.href}>
                    {data.cta.secondary.text}
                  </Link>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
