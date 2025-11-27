'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface RegistrationDetail {
  icon: ReactNode
  title: string
  value: string
  gradient: string
}

interface RegistrationDetailsProps {
  lang: string
  details: RegistrationDetail[]
}

export function RegistrationDetails({ lang, details }: RegistrationDetailsProps) {
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
              {lang === 'th' ? 'ข้อมูลการจดทะเบียน' : 'Registration Details'}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {lang === 'th'
              ? 'รายละเอียดการจดทะเบียนบริษัทอย่างเป็นทางการ'
              : 'Official company registration information'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full">
                {/* Icon with gradient background */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${detail.gradient} mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="text-white">{detail.icon}</div>
                </div>

                <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">
                  {detail.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{detail.value}</p>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${detail.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
