'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { AnimateEffect } from '@/components/common/animate-effect';
import { motion } from 'motion/react';
import {
  SiKubernetes,
  SiTerraform,
  SiDocker,
  SiPrometheus,
  SiGrafana,
  SiNginx
} from 'react-icons/si';
import { FaServer, FaNetworkWired, FaShieldAlt, FaChartLine } from 'react-icons/fa';

interface ArchitectureFeature {
  title: string;
  description: string;
  icon: string;
  metrics: string[];
  highlights: string[];
}

interface ArchitectureStat {
  label: string;
  value: string;
}

interface ArchitectureData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: ArchitectureFeature[];
  techLabel: string;
  stats: ArchitectureStat[];
  cta: {
    text: string;
    button: string;
  };
}

interface SolutionArchitectureProps {
  data: ArchitectureData;
}

const iconMap: Record<string, React.ReactNode> = {
  kubernetes: <SiKubernetes className="w-12 h-12" />,
  terraform: <SiTerraform className="w-12 h-12" />,
  network: <FaNetworkWired className="w-12 h-12" />,
};

const gradients = [
  'from-blue-500 to-cyan-400',
  'from-purple-600 to-purple-400',
  'from-green-500 to-emerald-400',
];

const techComponents = [
  { name: 'K8s', icon: <SiKubernetes className="w-6 h-6" />, color: 'text-blue-500' },
  { name: 'Docker', icon: <SiDocker className="w-6 h-6" />, color: 'text-cyan-500' },
  { name: 'Terraform', icon: <SiTerraform className="w-6 h-6" />, color: 'text-purple-500' },
  { name: 'Nginx', icon: <SiNginx className="w-6 h-6" />, color: 'text-green-500' },
  { name: 'Prometheus', icon: <SiPrometheus className="w-6 h-6" />, color: 'text-orange-500' },
  { name: 'Grafana', icon: <SiGrafana className="w-6 h-6" />, color: 'text-yellow-500' }
];

const statIcons = [
  <FaChartLine key="chart" />,
  <FaServer key="server" />,
  <SiKubernetes key="k8s" />,
  <SiTerraform key="terraform" />
];

export const SolutionArchitecture = ({ data }: SolutionArchitectureProps) => {
  const [selectedFeature, setSelectedFeature] = React.useState<number>(0);

  return (
    <Section id="architecture" aria-labelledby="architecture-title" className="bg-gradient-to-b from-background to-muted/30 py-20 md:py-32 relative overflow-hidden">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <AnimateEffect index={0}>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaShieldAlt className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {data.badge}
              </span>
            </motion.div>

            <h2 id="architecture-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {data.title}
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {data.subtitle}
              <br />
              {data.description}
            </p>
          </div>
        </AnimateEffect>

        {/* Main Architecture Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {data.features.map((feature, index) => (
            <AnimateEffect key={feature.title} index={index + 1}>
              <motion.div
                className={`relative group cursor-pointer h-full ${
                  selectedFeature === index ? 'z-20' : 'z-10'
                }`}
                onClick={() => setSelectedFeature(index)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card */}
                <div
                  className={`relative h-full bg-card border rounded-2xl p-8 overflow-hidden transition-all duration-300 ${
                    selectedFeature === index
                      ? 'border-primary shadow-2xl shadow-primary/20'
                      : 'border-border hover:border-primary/50 hover:shadow-xl'
                  }`}
                >
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 transition-opacity duration-300 ${
                      selectedFeature === index ? 'opacity-10' : 'group-hover:opacity-5'
                    }`}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} text-white`}
                      whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      {iconMap[feature.icon] || iconMap.kubernetes}
                    </motion.div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    {feature.metrics && (
                      <div className="flex flex-wrap gap-2">
                        {feature.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="inline-flex items-center bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <motion.div
                          key={highlight}
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: selectedFeature === index ? 1 : 0.6,
                            x: 0
                          }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} mr-2`} />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimateEffect>
          ))}
        </div>

        {/* Tech Components */}
        <AnimateEffect index={6}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">{data.techLabel}</p>

            <div className="flex flex-wrap justify-center gap-6">
              {techComponents.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <span className={tech.color}>{tech.icon}</span>
                  <span className="font-semibold text-foreground">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateEffect>

        {/* Stats */}
        <AnimateEffect index={7}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-primary mb-2 flex justify-center text-2xl">
                  {statIcons[index % statIcons.length]}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimateEffect>

        {/* CTA */}
        <AnimateEffect index={8}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-lg mb-6">
              {data.cta.text}
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {data.cta.button}
            </motion.button>
          </div>
        </AnimateEffect>
      </div>
    </Section>
  );
};
