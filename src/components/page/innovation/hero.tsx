'use client'

import React from 'react'
import { Section } from '@/components/ui/section'
import { motion } from 'motion/react'
import { Sparkles, Zap, Rocket, TrendingUp } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const Hero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('products')
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Section
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

            {/* Animated orbs */}
            <motion.div
                className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-20 right-[10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div className="relative z-10 container px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease }}
                        className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 ring-1 ring-primary/20"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Innovation Lab</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease }}
                    >
                        <span className="inline-block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Transform
                        </span>
                        <br />
                        <span className="inline-block">Your Business</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl sm:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease }}
                    >
                        เราสร้างสรรค์โซลูชันซอฟต์แวร์ที่ตอบโจทย์ธุรกิจในทุกอุตสาหกรรม
                        ตั้งแต่ระบบ ERP, POS ไปจนถึง Mobile Apps และ Web Applications
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-3 gap-8 w-full max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease }}
                    >
                        <div className="flex flex-col items-center">
                            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100+</div>
                            <div className="text-sm text-muted-foreground">Projects</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-500 mb-2">50+</div>
                            <div className="text-sm text-muted-foreground">Clients</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl sm:text-4xl font-bold text-purple-500 mb-2">99%</div>
                            <div className="text-sm text-muted-foreground">Satisfaction</div>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        onClick={scrollToProducts}
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-blue-500 text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8, ease }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="flex items-center gap-2">
                            Explore Our Solutions
                            <motion.span
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                ↓
                            </motion.span>
                        </span>
                    </motion.button>

                    {/* Feature Icons */}
                    <motion.div
                        className="flex gap-6 sm:gap-12 mt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        {[
                            { icon: Zap, color: 'from-yellow-500 to-orange-500' },
                            { icon: Rocket, color: 'from-blue-500 to-purple-500' },
                            { icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                                >
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        </Section>
    )
}

export default Hero
