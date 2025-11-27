'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { InnovationPricingPlan } from '@/types/innovation'
import { Button } from '@/components/ui/button'
import { Check, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingComparisonProps {
  data: InnovationPricingPlan[]
  title?: string
  subtitle?: string
  lang?: string
}

export function PricingComparison({
  data,
  title = 'Pricing',
  subtitle = 'Compare all plans',
}: PricingComparisonProps) {
  // Get all unique features across all plans
  const allFeatures = Array.from(
    new Set(data.flatMap((plan) => plan.features))
  )

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {subtitle}
            </h2>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="p-4">
                {/* Empty cell for features column */}
              </div>
              {data.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={cn(
                    'rounded-t-2xl p-6 text-center',
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border'
                  )}
                >
                  {plan.highlighted && (
                    <div className="text-xs font-semibold mb-2 inline-flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-sm opacity-70">{plan.currency || '฿'}</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm opacity-70">/{plan.period}</span>
                    )}
                  </div>
                  <p className={cn('text-sm', plan.highlighted ? 'opacity-80' : 'text-muted-foreground')}>
                    {plan.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Features Comparison */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {allFeatures.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={cn(
                    'grid grid-cols-4 gap-4',
                    featureIndex % 2 === 0 ? 'bg-muted/30' : ''
                  )}
                >
                  <div className="p-4 font-medium text-sm flex items-center">
                    {feature}
                  </div>
                  {data.map((plan, planIndex) => {
                    const hasFeature = plan.features.includes(feature)
                    return (
                      <div
                        key={planIndex}
                        className={cn(
                          'p-4 flex items-center justify-center',
                          plan.highlighted && 'bg-primary/5'
                        )}
                      >
                        {hasFeature ? (
                          <Check className="w-5 h-5 text-primary" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/30" />
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="p-4">
                {/* Empty cell */}
              </div>
              {data.map((plan, index) => (
                <div
                  key={index}
                  className={cn(
                    'rounded-b-2xl p-6',
                    plan.highlighted
                      ? 'bg-primary'
                      : 'bg-card border border-t-0 border-border'
                  )}
                >
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.highlighted ? 'secondary' : 'default'}
                    size="lg"
                  >
                    <Link href={plan.cta.href}>{plan.cta.text}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
