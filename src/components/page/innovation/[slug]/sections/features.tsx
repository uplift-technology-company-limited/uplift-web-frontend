'use client'

import { motion } from 'motion/react'
import { InnovationFeature } from '@/types/innovation'
import {
  BarChart3,
  Brain,
  FileText,
  LineChart,
  Zap,
  Shield,
  Users,
  Globe,
  Smartphone,
  Code,
} from 'lucide-react'

const iconMap = {
  BarChart3,
  Brain,
  FileText,
  LineChart,
  Zap,
  Shield,
  Users,
  Globe,
  Smartphone,
  Code,
}

interface FeaturesSectionProps {
  data: InnovationFeature[]
  title?: string
  subtitle?: string
  lang?: string
}

export function FeaturesSection({
  data,
  title = 'Features',
  subtitle = 'Everything you need to succeed',
  lang = 'th',
}: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {data.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap] || Zap
            const isReversed = index % 2 !== 0

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-center`}
              >
                {/* Image */}
                {feature.image && (
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={`w-full ${feature.image ? 'lg:w-1/2' : ''} space-y-4`}>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
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
