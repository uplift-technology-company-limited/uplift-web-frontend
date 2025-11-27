'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface Value {
  icon: ReactNode
  title: string
  description: string
}

interface CompanyValuesProps {
  lang: string
  values: Value[]
}

export function CompanyValues({ lang, values }: CompanyValuesProps) {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {lang === 'th' ? 'คุณค่าหลักของเรา' : 'Our Core Values'}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {lang === 'th'
              ? 'หลักการและค่านิยมที่ขับเคลื่อนการทำงานของเราในทุกโปรเจกต์'
              : 'Principles and values that drive our work in every project'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full">
                <div className="text-blue-600 dark:text-blue-400 mb-4 inline-flex p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
