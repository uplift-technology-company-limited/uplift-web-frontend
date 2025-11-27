'use client'

import { motion } from 'motion/react'
import { BookOpen, Lightbulb } from 'lucide-react'

interface BlogHeroProps {
  lang: string
}

export function BlogHero({ lang }: BlogHeroProps) {
  const content = {
    th: {
      title: 'บทความและโซลูชัน',
      subtitle: 'ความรู้ กรณีศึกษา และโซลูชันเทคโนโลยีจากทีม Uplift',
      description:
        'แบ่งปันประสบการณ์และความรู้เกี่ยวกับเทคโนโลยี ระบบอัตโนมัติ และการพัฒนาซอฟต์แวร์',
    },
    en: {
      title: 'Articles & Solutions',
      subtitle: 'Knowledge, case studies, and technology solutions from Uplift team',
      description:
        'Sharing our experience and knowledge about technology, automation, and software development',
    },
  }

  const text = content[lang as keyof typeof content] || content.th

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
              className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg"
            >
              <Lightbulb className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              {text.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              {text.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-muted-foreground max-w-2xl"
          >
            {text.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-4"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">
                {lang === 'th' ? 'บทความ' : 'Articles'}
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">
                {lang === 'th' ? 'กรณีศึกษา' : 'Case Studies'}
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">
                {lang === 'th' ? 'หมวดหมู่' : 'Categories'}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-50" />
    </section>
  )
}
