'use client'

import { motion } from 'motion/react'
import { Globe } from 'lucide-react'

interface ContactCTAProps {
  lang: string
}

export function ContactCTA({ lang }: ContactCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {lang === 'th' ? 'พร้อมเริ่มต้นโปรเจกต์ของคุณ?' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {lang === 'th'
              ? 'พร้อมรับฟังและพัฒนาโซลูชันที่เหมาะกับธุรกิจของคุณ'
              : 'Ready to listen and develop solutions tailored to your business'}
          </p>
          <div className="inline-flex items-center space-x-3 text-lg bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Globe className="h-6 w-6" />
            <span className="font-medium">uplift.co.th</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
