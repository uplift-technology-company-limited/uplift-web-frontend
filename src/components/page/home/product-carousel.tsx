'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';
import { cn } from '@/lib/utils';

interface ProductCard {
    slug: string;
    title: string;
    subtitle: string;
    badge: string;
    description: string;
    image: string;
    link: string;
    gradient: string;
}

interface ProductCarouselProps {
    products: ProductCard[];
}

// Gradient colors for cards
const gradientColors = [
    'from-blue-500/20 via-purple-500/20 to-pink-500/20',
    'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    'from-orange-500/20 via-red-500/20 to-rose-500/20',
    'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
    'from-amber-500/20 via-yellow-500/20 to-lime-500/20',
    'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
];

const beamColors = [
    { from: '#3b82f6', to: '#8b5cf6' },
    { from: '#10b981', to: '#06b6d4' },
    { from: '#f97316', to: '#ef4444' },
    { from: '#8b5cf6', to: '#d946ef' },
    { from: '#f59e0b', to: '#84cc16' },
    { from: '#06b6d4', to: '#6366f1' },
];

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = useCallback(() => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

            // Calculate active index based on scroll position
            const cardWidth = 380; // approximate card width + gap
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(newIndex, products.length - 1));
        }
    }, [products.length]);

    useEffect(() => {
        checkScroll();
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', checkScroll);
            return () => scrollElement.removeEventListener('scroll', checkScroll);
        }
    }, [checkScroll]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const cardWidth = 380;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const cardWidth = 380;
            scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full">
            {/* Navigation Arrows */}
            <AnimatePresence>
                {canScrollLeft && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onClick={() => scroll('left')}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-background hover:scale-110 transition-all duration-200"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 text-foreground" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {canScrollRight && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onClick={() => scroll('right')}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-background hover:scale-110 transition-all duration-200"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 text-foreground" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Cards Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scroll-smooth px-4 md:px-8 py-8 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
                style={{ scrollbarWidth: 'none' }}
            >
                {products.map((product, index) => (
                    <motion.div
                        key={product.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex-shrink-0 w-[320px] md:w-[360px]"
                    >
                        <Link href={product.link} className="block group">
                            <div className="relative h-[480px] md:h-[520px] rounded-3xl overflow-hidden bg-neutral-900 border border-border shadow-xl shadow-black/10 dark:shadow-black/30">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    {product.image && (
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                                            sizes="(max-width: 768px) 320px, 360px"
                                        />
                                    )}
                                    {/* Dark Gradient Overlays - Always dark for readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-neutral-900/30" />
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                        gradientColors[index % gradientColors.length]
                                    )} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                    {/* Top Badge */}
                                    <div className="flex justify-between items-start">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs font-medium text-white shadow-lg">
                                            <Sparkles className="w-3 h-3" />
                                            {product.badge}
                                        </span>
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 45 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ArrowRight className="w-4 h-4 text-white" />
                                        </motion.div>
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="space-y-3">
                                        <div className="text-sm text-white/80 font-medium">
                                            {product.subtitle}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm text-white/70 line-clamp-2 leading-relaxed">
                                            {product.description}
                                        </p>

                                        {/* CTA Button */}
                                        <motion.div
                                            className="inline-flex items-center gap-2 text-white font-semibold pt-2"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span>ดูรายละเอียด</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Border Beam - Only on hover */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <BorderBeam
                                        size={250}
                                        duration={10 + index}
                                        delay={index * 0.5}
                                        colorFrom={beamColors[index % beamColors.length].from}
                                        colorTo={beamColors[index % beamColors.length].to}
                                        borderWidth={2}
                                    />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}

                {/* Spacer for last card visibility */}
                <div className="flex-shrink-0 w-4 md:w-8" />
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={cn(
                            "transition-all duration-300 rounded-full",
                            activeIndex === index
                                ? "w-8 h-2 bg-primary"
                                : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Gradient Edges */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />
        </div>
    );
};
