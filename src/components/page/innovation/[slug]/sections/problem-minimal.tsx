'use client'

import { motion } from 'motion/react'
import { InnovationProblem } from '@/types/innovation'
import {
  Brain,
  Shield,
  Zap,
  AlertCircle,
  Clock,
  TrendingDown,
  Lock,
  Ban,
  Database,
  AlertTriangle,
  PackageX,
  Package,
  Calculator,
  UserX,
  Layers,
  Code,
  CreditCard,
  Target,
  X,
} from 'lucide-react'

const iconMap = {
  Brain,
  Shield,
  Zap,
  AlertCircle,
  Clock,
  TrendingDown,
  Lock,
  Ban,
  Database,
  AlertTriangle,
  PackageX,
  Package,
  Calculator,
  UserX,
  Layers,
  Code,
  CreditCard,
  Target,
}

interface ProblemMinimalProps {
  data: InnovationProblem[]
  title?: string
  subtitle?: string
  lang?: string
}

export function ProblemMinimal({
  data,
  title = 'The Problem',
  subtitle = 'Challenges businesses face today',
}: ProblemMinimalProps) {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 ring-1 ring-destructive/20 mb-4">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">{title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {subtitle}
            </h2>
          </motion.div>
        </div>

        {/* Minimal List Style */}
        <div className="space-y-6">
          {data.map((problem, index) => {
            const IconComponent =
              iconMap[problem.icon as keyof typeof iconMap] || AlertCircle

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-muted/50 transition-colors">
                  {/* X Icon indicating problem */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <X className="w-6 h-6 text-destructive" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-5 h-5 text-muted-foreground" />
                      <h3 className="text-xl font-bold">{problem.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {index < data.length - 1 && (
                  <div className="border-b border-border/50 mx-6" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
