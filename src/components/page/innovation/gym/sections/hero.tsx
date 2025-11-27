"use client";

import { motion, useInView } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

interface GymHeroProps {
  lang: string;
}

function HeroPill() {
  return (
    <motion.div
      className="flex w-auto items-center space-x-2 rounded-full bg-blue-100 px-4 py-2 ring-1 ring-blue-200 dark:bg-blue-950 dark:ring-blue-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <Dumbbell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
        Demo Innovation Project
      </p>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
        }}
      >
        {["Gym", "Management", "System"].map((text, index) => (
          <motion.span
            key={index}
            className="inline-block px-2 md:px-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="mx-auto max-w-2xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Complete fitness center management solution with membership tracking,
        booking system, POS integration, and real-time analytics.
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link href="https://uplift-gym-frontend.vercel.app/" target="_blank">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2">
            <Dumbbell className="h-5 w-5" />
            Try Demo System
          </Button>
        </Link>
        <Link href="/th/consult">
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </Link>
      </motion.div>
      <motion.p
        className="mt-5 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Live demo available. No registration required.
      </motion.p>
    </>
  );
}

function DashboardPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
      className="relative mt-16 w-full max-w-6xl [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,var(--background)_30%,transparent)]"
    >
      <div
        className={`relative rounded-xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-sm before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#3b82f6,#8b5cf6,transparent_40%)] ${
          inView ? "before:animate-image-glow" : ""
        }`}
      >
        <BorderBeam
          size={200}
          duration={12}
          delay={11}
        />

        <div className="relative w-full rounded-[inherit] border border-white/10">
          {/* Placeholder for gym dashboard screenshot */}
          <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <Dumbbell className="h-16 w-16 mx-auto text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Gym Dashboard Preview
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Visit live demo to experience the full system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GymHero({ lang }: GymHeroProps) {
  return (
    <section id="hero" className="relative">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 pb-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <DashboardPreview />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>
  );
}
