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

const gradients = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-yellow-500',
  'from-green-500 to-emerald-500',
]

interface HowItWorksCardsProps {
  data: InnovationHowItWorksStep[]
  title?: string
  subtitle?: string
  lang?: string
}

export function HowItWorksCards({
  data,
  title = 'How It Works',
  subtitle = 'Get started in minutes',
}: HowItWorksCardsProps) {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 ring-1 ring-primary/20 mb-4">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {subtitle}
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((step, index) => {
            const IconComponent =
              iconMap[step.icon as keyof typeof iconMap] || Circle
            const gradient = gradients[index % gradients.length]

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Connection Arrow (not on last item) */}
                {index < data.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                )}

                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 text-center hover:shadow-xl transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-6xl font-bold text-muted-foreground/10">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Step Label */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 mb-4">
                    <span className="text-xs font-semibold text-muted-foreground">
                      STEP {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
