'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { FaMobile, FaCode, FaPalette, FaRocket } from 'react-icons/fa';
import { AnimateEffect } from '@/components/common/animate-effect';
import { motion } from 'motion/react';

interface DemoAppFeature {
  title: string;
  description: string;
  icon: string;
}

interface DemoAppStat {
  value: string;
  label: string;
}

interface DemoAppData {
  badge: string;
  title: {
    highlight: string;
    normal: string;
  };
  description: string;
  features: DemoAppFeature[];
  stats: DemoAppStat[];
  mockup: {
    appName: string;
    tagline: string;
  };
}

interface DemoAppProps {
  data: DemoAppData;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: FaCode,
  palette: FaPalette,
  rocket: FaRocket,
  mobile: FaMobile,
};

const iconColors = ['text-cyan-400', 'text-blue-400', 'text-purple-400', 'text-green-400'];
const bgColors = ['bg-cyan-500/20', 'bg-blue-500/20', 'bg-purple-500/20', 'bg-green-500/20'];

export const DemoApp = ({ data }: DemoAppProps) => {
  return (
    <Section id="demo" aria-label="Mobile Application Development Services" className="bg-gradient-to-b from-background to-muted/30 min-h-screen">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-8">
            <AnimateEffect index={0}>
              <div className="space-y-6">
                <motion.div
                  className="w-fit mb-8 inline-flex items-center bg-cyan-500/10 dark:bg-primary/5 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/30 dark:border-primary/20 shadow-lg shadow-cyan-500/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <FaMobile className="h-4 w-4 text-cyan-600 dark:text-cyan-400 mr-2" />
                  </motion.div>
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{data.badge}</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {data.title.highlight}
                  </span>
                  <br />{data.title.normal}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  {data.description}
                </p>
              </div>
            </AnimateEffect>

            <AnimateEffect index={1}>
              {/* Service Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.features.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon] || FaMobile;
                  return (
                    <div key={feature.title} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 ${bgColors[index % bgColors.length]} rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`${iconColors[index % iconColors.length]} text-xl`} />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimateEffect>

            <AnimateEffect index={2}>
              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateEffect>
          </div>

          {/* Left Side - Smartphone Mockups */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative flex justify-center items-center">

              {/* Main Phone */}
              <motion.div
                className="relative z-10"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-64 h-[500px] md:w-72 md:h-[550px] bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />

                    {/* Screen Content */}
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex flex-col">
                      {/* Status Bar */}
                      <div className="h-12 flex items-center justify-between px-6 pt-6">
                        <span className="text-white text-sm font-medium">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm opacity-60" />
                          <div className="w-4 h-2 bg-white rounded-sm opacity-80" />
                          <div className="w-4 h-2 bg-white rounded-sm" />
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 flex items-center justify-center">
                          <FaMobile className="text-white text-2xl" />
                        </div>
                        <h3 className="text-white text-xl font-bold mb-2">{data.mockup.appName}</h3>
                        <p className="text-white/80 text-sm mb-8">{data.mockup.tagline}</p>

                        {/* Mock UI Elements */}
                        <div className="w-full space-y-3">
                          <div className="h-12 bg-white/20 rounded-xl" />
                          <div className="h-12 bg-white/20 rounded-xl" />
                          <div className="h-12 bg-white rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Phone (Left) */}
              <motion.div
                className="absolute left-0 top-8 z-0 opacity-30 scale-90 rotate-12"
                animate={{ y: [-5, 5, -5], rotate: [12, 15, 12] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-56 h-[450px] bg-gray-800 rounded-[2.5rem] p-3">
                  <div className="w-full h-full bg-gray-100 rounded-[2rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500" />
                  </div>
                </div>
              </motion.div>

              {/* Background Phone (Right) */}
              <motion.div
                className="absolute right-0 top-12 z-0 opacity-30 scale-90 -rotate-12"
                animate={{ y: [5, -5, 5], rotate: [-12, -15, -12] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-56 h-[450px] bg-gray-800 rounded-[2.5rem] p-3">
                  <div className="w-full h-full bg-gray-100 rounded-[2rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-cyan-500" />
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
