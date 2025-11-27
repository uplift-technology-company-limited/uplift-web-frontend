'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
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

interface FeaturesBentoProps {
  data: InnovationFeature[]
  title?: string
  subtitle?: string
  lang?: string
}

export function FeaturesBento({
  data,
  title = 'Features',
  subtitle = 'Everything you need to succeed',
}: FeaturesBentoProps) {
  // Bento grid pattern: large, small, small, large
  const getBentoClass = (index: number) => {
    const pattern = index % 4
    if (pattern === 0 || pattern === 3) {
      return 'md:col-span-2 md:row-span-2'
    }
    return 'md:col-span-1 md:row-span-1'
  }

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
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 ring-1 ring-primary/20 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {subtitle}
            </h2>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap] || Zap
            const isLarge = index % 4 === 0 || index % 4 === 3

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${getBentoClass(index)}`}
              >
                {/* Background Image for large items */}
                {isLarge && feature.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                  </div>
                )}

                <div className={`relative p-6 ${isLarge ? 'min-h-[300px] flex flex-col justify-end' : 'min-h-[180px]'}`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 ${isLarge ? '' : ''}`}>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className={`font-bold mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-muted-foreground ${isLarge ? 'text-base' : 'text-sm line-clamp-2'}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
