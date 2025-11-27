"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Dumbbell, ArrowRight } from "lucide-react";
import Link from "next/link";

interface GymCTAProps {
  lang: string;
}

export default function GymCTA({ lang }: GymCTAProps) {
  return (
    <Section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-background dark:to-purple-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />

            <div className="relative z-10 text-center text-white space-y-6">
              <div className="inline-flex p-3 bg-white/20 rounded-full mb-4">
                <Dumbbell className="h-8 w-8" />
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to Transform Your Gym?
              </h2>

              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Join hundreds of fitness centers using our platform to streamline operations
                and enhance member experience. Try the demo or schedule a consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="https://uplift-gym-frontend.vercel.app/" target="_blank">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 gap-2"
                  >
                    <Dumbbell className="h-5 w-5" />
                    Try Live Demo
                  </Button>
                </Link>

                <Link href="/th/consult">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 gap-2"
                  >
                    Schedule Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-white/80 pt-4">
                No credit card required • Free 30-day trial • Setup in minutes
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}
