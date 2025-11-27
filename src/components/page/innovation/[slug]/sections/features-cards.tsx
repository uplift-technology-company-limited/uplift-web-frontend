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
  MessageSquare,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Building2,
  MapPin,
  GitBranch,
  Mail,
  Palette,
  Megaphone,
  ArrowRight,
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
  MessageSquare,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Building2,
  MapPin,
  GitBranch,
  Mail,
  Palette,
  Megaphone,
}

const gradients = [
  'from-blue-500 to-purple-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-pink-500 to-rose-500',
  'from-cyan-500 to-blue-500',
  'from-violet-500 to-purple-500',
]

interface FeaturesCardsProps {
  data: InnovationFeature[]
  title?: string
  subtitle?: string
  lang?: string
}

export function FeaturesCards({
  data,
  title = 'Features',
  subtitle = 'Everything you need to succeed',
}: FeaturesCardsProps) {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {subtitle}
            </h2>
          </motion.div>
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap] || Zap
            const gradient = gradients[index % gradients.length]

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
