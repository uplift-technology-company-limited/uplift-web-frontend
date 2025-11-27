'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Section } from '@/components/ui/section'
import { motion } from 'motion/react'
import {
    ArrowRight, Zap, Package, Smartphone, Globe,
    Brain, Boxes, Users, ShoppingCart,
    Sparkles, Quote
} from 'lucide-react'
import { innovationMockData } from '@/data/innovation-mock'

const ease = [0.16, 1, 0.3, 1] as const

interface ProductsSectionProps {
    lang?: string
}

// Icon map for different product types
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'Smart ERP System': Zap,
    'Modern POS Solution': Package,
    'Web Application Platform': Globe,
    'Uplift Mobile App': Smartphone,
    'AI Analytics Platform': Brain,
    'Inventory Management': Boxes,
    'CRM System': Users,
    'E-Commerce Solution': ShoppingCart,
}

const gradientMap: Record<string, string> = {
    'Smart ERP System': 'from-blue-500 to-purple-500',
    'Modern POS Solution': 'from-green-500 to-emerald-500',
    'Web Application Platform': 'from-orange-500 to-red-500',
    'Uplift Mobile App': 'from-pink-500 to-purple-500',
    'AI Analytics Platform': 'from-violet-500 to-indigo-500',
    'Inventory Management': 'from-amber-500 to-yellow-500',
    'CRM System': 'from-cyan-500 to-blue-500',
    'E-Commerce Solution': 'from-rose-500 to-pink-500',
}

const ProductsSection = ({ lang = 'th' }: ProductsSectionProps) => {
    const products = Object.values(innovationMockData)
    const featuredProducts = products.slice(0, 4)
    const allProducts = products

    return (
        <>
            {/* Stats Section */}
            <Section id="stats" className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-muted/20">
                <div className="container max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        {[
                            { value: '8+', label: 'Products', color: 'text-primary' },
                            { value: '100+', label: 'Clients', color: 'text-blue-500' },
                            { value: '99%', label: 'Uptime', color: 'text-green-500' },
                            { value: '24/7', label: 'Support', color: 'text-purple-500' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className={`text-4xl sm:text-5xl font-bold mb-2 ${stat.color}`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* Bento Section - Featured Products */}
            <Section id="featured" className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 ring-1 ring-primary/20 mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Featured Solutions</span>
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            เลือกโซลูชันที่{' '}
                            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                เหมาะกับธุรกิจคุณ
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            โซลูชันที่ออกแบบมาเพื่อตอบโจทย์ทุกความต้องการของธุรกิจยุคใหม่
                        </p>
                    </motion.div>

                    {/* Bento Grid - 2x2 with varying sizes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredProducts.map((product, index) => {
                            const Icon = iconMap[product.hero.title] || Zap
                            const gradient = gradientMap[product.hero.title] || 'from-blue-500 to-purple-500'
                            const heroImage = product.hero.image || product.hero.video?.thumbnail
                            const isLarge = index === 0 || index === 3

                            return (
                                <motion.div
                                    key={product.slug}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease }}
                                    className={isLarge ? 'md:row-span-1' : ''}
                                >
                                    <Link href={`/${lang}/innovation/${product.slug}`}>
                                        <motion.div
                                            className={`group relative overflow-hidden rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 ${
                                                isLarge ? 'h-[400px]' : 'h-[350px]'
                                            }`}
                                            whileHover={{ y: -8 }}
                                        >
                                            {/* Background Image */}
                                            {heroImage && (
                                                <Image
                                                    src={heroImage}
                                                    alt={product.hero.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            )}

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

                                            {/* Icon Badge */}
                                            <div
                                                className={`absolute top-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                                            >
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <div className="text-sm text-muted-foreground mb-2 font-medium">
                                                    {product.hero.badge}
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                    {product.hero.title}
                                                </h3>
                                                <p className="text-muted-foreground line-clamp-2 mb-4">
                                                    {product.hero.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-primary font-semibold">
                                                    <span>เรียนรู้เพิ่มเติม</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </Section>

            {/* Quote Section */}
            <Section id="quote" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
                <div className="container max-w-4xl mx-auto">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
                        <blockquote className="text-center">
                            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
                                &ldquo;เราเชื่อว่าทุกธุรกิจสามารถเติบโตได้ด้วยเทคโนโลยีที่เหมาะสม
                                โซลูชันของเราออกแบบมาเพื่อให้คุณมุ่งเน้นที่สิ่งสำคัญ - การขับเคลื่อนธุรกิจของคุณ&rdquo;
                            </p>
                            <footer className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
                                    U
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">Uplift Team</div>
                                    <div className="text-sm text-muted-foreground">Innovation & Technology</div>
                                </div>
                            </footer>
                        </blockquote>
                    </motion.div>
                </div>
            </Section>

            {/* All Products Grid */}
            <Section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="container max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 ring-1 ring-primary/20 mb-6"
                        >
                            <Package className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">All Products</span>
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                โซลูชันทั้งหมด
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            เลือกดูโซลูชันทั้ง 8 ประเภทที่เราพัฒนาขึ้นเพื่อธุรกิจของคุณ
                        </p>
                    </motion.div>

                    {/* Products Grid - 4 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allProducts.map((product, index) => {
                            const Icon = iconMap[product.hero.title] || Zap
                            const gradient = gradientMap[product.hero.title] || 'from-blue-500 to-purple-500'

                            return (
                                <motion.div
                                    key={product.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05, ease }}
                                >
                                    <Link href={`/${lang}/innovation/${product.slug}`}>
                                        <motion.div
                                            className="group relative h-full rounded-2xl overflow-hidden bg-card border border-border p-6 hover:shadow-xl transition-all duration-300"
                                            whileHover={{ y: -4, scale: 1.02 }}
                                        >
                                            {/* Icon */}
                                            <div
                                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md mb-4`}
                                            >
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>

                                            {/* Content */}
                                            <div className="text-xs text-muted-foreground mb-1">
                                                {product.hero.badge}
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                                {product.hero.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                                {product.hero.subtitle}
                                            </p>

                                            {/* Arrow */}
                                            <div className="flex items-center gap-1 text-primary text-sm font-medium">
                                                <span>ดูรายละเอียด</span>
                                                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                            </div>

                                            {/* Hover gradient */}
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                                            />
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </Section>
        </>
    )
}

export default ProductsSection
