'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { InnovationCTA } from '@/types/innovation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { BorderBeam } from '@/components/ui/border-beam'

const ease = [0.16, 1, 0.3, 1] as const

interface CTASectionProps {
  data: InnovationCTA
  lang?: string
}

export function CTASection({ data, lang = 'th' }: CTASectionProps) {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 text-center"
        >
          {/* Border Beam Effect */}
          <BorderBeam size={250} duration={12} delay={9} />

          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
              {data.title}
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              {data.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group min-w-[200px]"
              >
                <Link href={data.primaryButton.href}>
                  {data.primaryButton.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {data.secondaryButton && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-[200px] bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                >
                  <Link href={data.secondaryButton.href}>
                    {data.secondaryButton.text}
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
        </motion.div>
      </div>
    </section>
  )
}
