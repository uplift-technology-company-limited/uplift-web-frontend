'use client';

import { OptimizedImage } from "@/components/common/optimized-image";
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface Member {
    id: number;
    name: string;
    title: string;
    department: string;
    image: string;
}

interface MembersCarouselProps {
    members: Member[];
    lang?: string;
}

export default function MembersCarousel({ members, lang = 'en' }: MembersCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        window.addEventListener('resize', checkScrollButtons);
        return () => window.removeEventListener('resize', checkScrollButtons);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScrollButtons, 300);
        }
    };

    if (!members || members.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                            {lang === 'th' ? 'ทีมงานของเรา' : 'Our Team'}
                        </span>
                    </h2>
                    <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        {lang === 'th'
                            ? 'ผู้เชี่ยวชาญที่ทุ่มเทเพื่อความสำเร็จของโปรเจกต์คุณ'
                            : 'Dedicated professionals committed to your project success'
                        }
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors -ml-5"
                        >
                            <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                        </button>
                    )}

                    {/* Right Arrow */}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors -mr-5"
                        >
                            <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                        </button>
                    )}

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScrollButtons}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {members.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className="flex-shrink-0 w-64 snap-start"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="group bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    {/* Member Image */}
                                    <div className="relative mb-4 overflow-hidden rounded-lg">
                                        <OptimizedImage
                                            src={member.image}
                                            width={240}
                                            height={240}
                                            alt={member.name}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                            fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=240&background=8B5CF6&color=fff`}
                                            timeout={10000}
                                        />
                                        {/* Department Badge */}
                                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-purple-500/90 text-white text-xs font-medium rounded-md">
                                            {member.department}
                                        </div>
                                    </div>

                                    {/* Member Info */}
                                    <div className="text-center">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-1 line-clamp-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">
                                            {member.title}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
