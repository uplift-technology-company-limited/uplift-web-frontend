'use client';

import React, { useMemo, useRef, useEffect, useId } from 'react';
import { Section } from '@/components/ui/section';
import { useTechModal } from '@/lib/providers/tech-modal-provider';
import { getTechIcon } from '@/lib/utils/icon-mapper';
import { motion, useAnimation, useInView } from 'motion/react';
import Marquee from 'react-fast-marquee';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TechItem {
  name: string;
  tagline: string;
  category: 'frontend' | 'backend' | 'database' | 'infrastructure' | 'ai';
  color: string;
  usedIn: string[];
}

interface TechStackData {
  badge: string;
  title: string;
  subtitle: string;
  categories: {
    frontend: TechItem[];
    backend: TechItem[];
    database: TechItem[];
    infrastructure: TechItem[];
    ai: TechItem[];
  };
}

interface TechStackProps {
  data: TechStackData;
}

// Gradient backgrounds for card glow (matching startup template)
const gradientColors = [
  'from-orange-600 via-rose-600 to-violet-600',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-green-500 via-teal-500 to-emerald-600',
  'from-yellow-400 via-orange-500 to-yellow-600',
  'from-purple-500 via-pink-500 to-rose-500',
  'from-gray-600 via-gray-500 to-gray-400',
  'from-blue-500 via-indigo-500 to-purple-500',
  'from-rose-500 via-red-500 to-orange-500',
];

// Tech Card component matching startup template style
const TechCard = ({
  tech,
  index,
  onClick,
}: {
  tech: TechItem;
  index: number;
  onClick: () => void;
}) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const bgGradient = gradientColors[index % gradientColors.length];

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: 'easeOut', duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${tech.name} - ${tech.tagline}`}
      className={cn(
        'relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 mx-1',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      {/* Icon */}
      <div className="relative z-10 size-full flex items-center justify-center text-foreground" aria-hidden="true">
        {getTechIcon(tech.name)}
      </div>

      {/* Colored Glow Background - matching startup template */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${bgGradient} opacity-70 blur-[20px] filter`}
        aria-hidden="true"
      />
    </motion.div>
  );
};

export const TechStack = ({ data }: TechStackProps) => {
  const { openTechModal } = useTechModal();

  // Flatten all categories into single array
  const allTech = useMemo(() => {
    const all = [
      ...data.categories.frontend,
      ...data.categories.backend,
      ...data.categories.database,
      ...data.categories.infrastructure,
      ...data.categories.ai,
    ];
    return all;
  }, [data.categories]);

  // Split into rows with different starting points for variety
  const getRowTech = (startIndex: number) => {
    const result = [];
    for (let i = 0; i < allTech.length; i++) {
      result.push(allTech[(startIndex + i) % allTech.length]);
    }
    return result;
  };

  const row1 = getRowTech(0);
  const row2 = getRowTech(10);
  const row3 = getRowTech(20);

  return (
    <Section className="py-20 md:py-28 relative overflow-hidden" id="tech-stack" aria-labelledby="tech-stack-title">
      <div className="relative min-h-[450px] md:min-h-[550px]">
        {/* Marquee Area - top section */}
        <div className="absolute inset-x-0 top-0 h-[280px] md:h-[320px]">
          {/* Marquee rows */}
          <div className="relative h-full">
            <Marquee
              gradient={false}
              speed={30}
              pauseOnHover
              direction="left"
              className="py-2"
            >
              {row1.map((tech, idx) => (
                <TechCard
                  key={`row1-${tech.name}-${idx}`}
                  tech={tech}
                  index={idx}
                  onClick={() =>
                    openTechModal({
                      ...tech,
                      icon: getTechIcon(tech.name),
                    })
                  }
                />
              ))}
            </Marquee>

            <Marquee
              gradient={false}
              speed={25}
              pauseOnHover
              direction="right"
              className="py-2"
            >
              {row2.map((tech, idx) => (
                <TechCard
                  key={`row2-${tech.name}-${idx}`}
                  tech={tech}
                  index={idx + 10}
                  onClick={() =>
                    openTechModal({
                      ...tech,
                      icon: getTechIcon(tech.name),
                    })
                  }
                />
              ))}
            </Marquee>

            <Marquee
              gradient={false}
              speed={35}
              pauseOnHover
              direction="left"
              className="py-2"
            >
              {row3.map((tech, idx) => (
                <TechCard
                  key={`row3-${tech.name}-${idx}`}
                  tech={tech}
                  index={idx + 20}
                  onClick={() =>
                    openTechModal({
                      ...tech,
                      icon: getTechIcon(tech.name),
                    })
                  }
                />
              ))}
            </Marquee>
          </div>

          {/* Gradient overlays - outside marquee wrapper */}
          {/* Y: top visible → bottom hidden */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

          {/* X: left edge hidden */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent pointer-events-none" />

          {/* X: right edge hidden */}
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Central Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center relative">
            {/* Central Icon Box */}
            <div className="mx-auto size-24 rounded-[2rem] border bg-background/90 p-3 shadow-2xl backdrop-blur-md lg:size-32" aria-hidden="true">
              <Sparkles className="mx-auto size-16 text-primary lg:size-24" />
            </div>

            {/* Title & Subtitle */}
            <div className="mt-4 flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-3">
                <span className="text-sm font-semibold text-primary">
                  {data.badge}
                </span>
              </span>
              <h2 id="tech-stack-title" className="text-3xl font-bold lg:text-4xl text-primary">
                {data.title}
              </h2>
              <p className="mt-2 text-muted-foreground max-w-md px-4">
                {data.subtitle}
              </p>
            </div>

            {/* Background blur */}
            <div className="absolute inset-0 -z-10 bg-background/70 blur-3xl scale-150 rounded-full" />
          </div>
        </div>
      </div>
    </Section>
  );
};
