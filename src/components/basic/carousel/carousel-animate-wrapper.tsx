"use client";
import React from "react";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";

// Gradient color pairs for variety
const beamColors = [
  { from: "#ffaa40", to: "#9c40ff" },
  { from: "#00d4ff", to: "#7c3aed" },
  { from: "#f472b6", to: "#fb923c" },
  { from: "#34d399", to: "#22d3ee" },
  { from: "#818cf8", to: "#f472b6" },
  { from: "#fbbf24", to: "#f87171" },
];

interface CarouselAnimateWrapperProps {
  children: React.ReactNode;
  index: number;
  showBorderBeam?: boolean;
}

export const CarouselAnimateWrapper = ({
  children,
  index,
  showBorderBeam = true
}: CarouselAnimateWrapperProps) => {
  const colors = beamColors[index % beamColors.length];

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{
        opacity: 0,
        y: 20,
      } as const}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2 * index,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      } as const}
      className="relative rounded-3xl"
    >
      {children}
      {showBorderBeam && (
        <div className="absolute inset-0 z-20 pointer-events-none rounded-[inherit]">
          <BorderBeam
            size={200}
            duration={8 + index * 0.5}
            delay={index * 0.8}
            colorFrom={colors.from}
            colorTo={colors.to}
            borderWidth={2}
          />
        </div>
      )}
    </motion.div>
  );
};