'use client'

import { motion } from 'motion/react'
import { InnovationHowItWorksStep } from '@/types/innovation'
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  Play,
  Settings,
  Check,
  Upload,
  Link,
  Cpu,
  Lightbulb,
  Layout,
  Package,
  Rocket,
  Zap,
  Download,
} from 'lucide-react'

const iconMap = {
  CheckCircle2,
  Circle,
  Play,
  Settings,
  Check,
  ArrowRight,
  Upload,
  Link,
  Cpu,
  Lightbulb,
  Layout,
  Package,
  Rocket,
  Zap,
  Download,
}

interface HowItWorksTimelineProps {
  data: InnovationHowItWorksStep[]
  title?: string
  subtitle?: string
  lang?: string
}

export function HowItWorksTimeline({
  data,
  title = 'How It Works',
  subtitle = 'Get started in minutes',
}: HowItWorksTimelineProps) {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 ring-1 ring-primary/20 mb-4">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {subtitle}
            </h2>
          </motion.div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {data.map((step, index) => {
              const IconComponent =
                iconMap[step.icon as keyof typeof iconMap] || Circle
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div
                    className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ml-20 md:ml-0 ${isEven ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <motion.div
                        className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center md:hidden">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Circle with Number */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg ring-4 ring-background"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                      >
                        <IconComponent className="w-7 h-7" />
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
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
