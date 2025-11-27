'use client'

import { motion } from 'motion/react'
import { InnovationHowItWorksStep } from '@/types/innovation'
import { CheckCircle2, Circle, ArrowRight, Play, Settings, Check } from 'lucide-react'

const iconMap = {
  CheckCircle2,
  Circle,
  Play,
  Settings,
  Check,
  ArrowRight,
}

interface HowItWorksSectionProps {
  data: InnovationHowItWorksStep[]
  title?: string
  subtitle?: string
  lang?: string
}

export function HowItWorksSection({
  data,
  title = 'How It Works',
  subtitle = 'Get started in minutes',
  lang = 'th',
}: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              {title}
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-16">
            {data.map((step, index) => {
              const IconComponent =
                iconMap[step.icon as keyof typeof iconMap] || Circle
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Number Circle (Desktop Center) */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground items-center justify-center text-2xl font-bold shadow-lg z-10">
                      {step.step}
                    </div>

                    {/* Placeholder for spacing */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
