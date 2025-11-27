'use client';

import { motion } from 'motion/react';
import { Target, Zap, Shield, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';

interface Mission {
  icon: string;
  text: string;
}

interface FounderVisionData {
  badge: string;
  title: {
    highlight: string;
    normal: string;
  };
  missions: Mission[];
  cta: {
    primary: string;
    secondary: string;
  };
}

interface FounderVisionProps {
  lang?: string;
  data: FounderVisionData;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  shield: Shield,
  zap: Zap,
};

const iconColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
];

export function FounderVision({ lang = 'th', data }: FounderVisionProps) {
  return (
    <section id="vision" aria-labelledby="vision-title" className="relative py-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Headline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">
                  {data.badge}
                </span>
              </motion.div>

              <motion.h2
                id="vision-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {data.title.highlight}
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">
                  {data.title.normal}
                </span>
              </motion.h2>
            </div>

            {/* Mission Points - Visual Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              {data.missions.map((mission, index) => {
                const Icon = iconMap[mission.icon] || Target;
                const color = iconColors[index % iconColors.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-2xl transition-opacity duration-300 blur-xl`} />
                    <div className="relative p-8 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col items-center text-center">
                      <div className={`p-5 rounded-2xl bg-gradient-to-br ${color} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {mission.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link href={`/${lang}/service`}>
                <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  <span>{data.cta.primary}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href={`/${lang}/teams`}>
                <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500 text-slate-900 dark:text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  <Users className="w-5 h-5" />
                  <span>{data.cta.secondary}</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
