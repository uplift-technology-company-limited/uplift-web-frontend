'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { InnovationHero } from '@/types/innovation'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { useState } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

interface HeroSectionProps {
  data: InnovationHero
  lang?: string
}

export function HeroSection({ data, lang = 'th' }: HeroSectionProps) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          {data.badge && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 ring-1 ring-primary/20"
            >
              <span className="text-sm font-medium text-primary">{data.badge}</span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            {data.title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease,
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-primary/80 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease }}
          >
            {data.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease }}
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          {data.cta && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease }}
            >
              {data.cta.primary && (
                <Button asChild size="lg" className="group">
                  <Link href={data.cta.primary.href}>
                    {data.cta.primary.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

          {/* Video or Image */}
          {(data.video || data.image) && (
            <motion.div
              className="relative w-full max-w-4xl mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1, ease }}
            >
              {data.video && !showVideo ? (
                <div
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
                  onClick={() => setShowVideo(true)}
                >
                  <img
                    src={data.video.thumbnail}
                    alt={data.video.alt}
                    className="w-full h-auto transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ) : data.video && showVideo ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <iframe
                    src={data.video.src}
                    title={data.video.alt}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : data.image ? (
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              ) : null}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
