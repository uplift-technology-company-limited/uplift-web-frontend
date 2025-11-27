'use client';

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { AlertTriangle, TrendingDown } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface ProblemItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  impact: string;
}

interface ProblemData {
  title: string;
  subtitle: string;
  items: ProblemItem[];
}

interface ProblemsProps {
  data: ProblemData;
}

// Extract percentage from impact string (e.g., "สูญเสียเวลา 85%" -> 85)
const extractPercentage = (impact: string): number => {
  const match = impact.match(/(\d+)%/);
  return match ? parseInt(match[1], 10) : 0;
};

// Gradient colors for cards
const cardGradients = [
  { bg: 'from-red-500/10 to-orange-500/10', border: 'hover:border-red-500/50', beam: { from: '#ef4444', to: '#f97316' } },
  { bg: 'from-blue-500/10 to-cyan-500/10', border: 'hover:border-blue-500/50', beam: { from: '#3b82f6', to: '#06b6d4' } },
  { bg: 'from-purple-500/10 to-pink-500/10', border: 'hover:border-purple-500/50', beam: { from: '#8b5cf6', to: '#ec4899' } },
  { bg: 'from-green-500/10 to-emerald-500/10', border: 'hover:border-green-500/50', beam: { from: '#22c55e', to: '#10b981' } },
];

const Problems = ({ data }: ProblemsProps) => {
  const { title, subtitle, items } = data;

  return (
    <Section id="problems" aria-labelledby="problems-title" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((problem, index) => {
            const percentage = extractPercentage(problem.impact);
            const colors = cardGradients[index % cardGradients.length];

            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`relative h-full p-6 rounded-2xl bg-card border border-border ${colors.border} transition-all duration-300 overflow-hidden`}>
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center rounded-2xl bg-muted/50 mb-5 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-4xl">{problem.icon}</span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {problem.description}
                    </p>

                    {/* Impact Meter */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <TrendingDown className="w-3.5 h-3.5" />
                          Impact
                        </span>
                        <span className={`font-bold bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent`}>
                          {problem.impact}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${problem.gradient} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Border Beam on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <BorderBeam
                      size={200}
                      duration={8 + index}
                      delay={index * 0.5}
                      colorFrom={colors.beam.from}
                      colorTo={colors.beam.to}
                      borderWidth={2}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

Problems.displayName = 'Problems';
export default Problems;

