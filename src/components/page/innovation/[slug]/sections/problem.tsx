'use client'

import { motion } from 'motion/react'
import { InnovationProblem } from '@/types/innovation'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Shield, Zap, AlertCircle, Clock, TrendingDown, Lock, Ban } from 'lucide-react'

const iconMap = {
  Brain,
  Shield,
  Zap,
  AlertCircle,
  Clock,
  TrendingDown,
  Lock,
  Ban,
}

interface ProblemSectionProps {
  data: InnovationProblem[]
  title?: string
  subtitle?: string
  lang?: string
}

export function ProblemSection({
  data,
  title = 'The Problem',
  subtitle = 'Challenges businesses face today',
  lang = 'th',
}: ProblemSectionProps) {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8">
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

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((problem, index) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap] || AlertCircle

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full border-none shadow-none bg-muted/50 hover:bg-muted transition-colors">
                  <CardContent className="p-6 space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-destructive" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold">{problem.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
