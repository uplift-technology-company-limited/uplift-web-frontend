'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

interface CarouselImage {
  id: number
  src: string
  alt: string
  title: string
}

interface CompanyHeroCarouselProps {
  lang: string
  title: string
  subtitle: string
  description: string
  images: CarouselImage[]
}

export function CompanyHeroCarousel({
  lang,
  title,
  subtitle,
  description,
  images,
}: CompanyHeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-slate-900/70 dark:bg-slate-950/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Glass Overlay for Navbar Visibility */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 via-white/50 to-transparent dark:from-slate-900/85 dark:via-slate-900/50 backdrop-blur-lg border-b border-white/30 dark:border-slate-700/60 shadow-lg" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {lang === 'th' ? 'บริษัทเทคโนโลยี' : 'Technology Company'}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-blue-200 mb-4"
        >
          {subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-12"
        >
          {description}
        </motion.p>

        {/* Carousel Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-3"
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group flex flex-col items-center gap-2"
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Indicator dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                }`}
              />

              {/* Label (shown on hover or when active) */}
              <span
                className={`text-xs transition-opacity duration-300 ${
                  index === currentSlide
                    ? 'opacity-100 text-white font-semibold'
                    : 'opacity-0 group-hover:opacity-70 text-slate-300'
                }`}
              >
                {image.title}
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
