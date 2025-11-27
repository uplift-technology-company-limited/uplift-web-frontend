"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

interface GymPricingProps {
  lang: string;
}

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small fitness studios",
    price: "9,900",
    currency: "?",
    period: "/month",
    features: [
      "Up to 100 members",
      "Basic membership management",
      "QR code check-in",
      "Mobile app access",
      "Email support",
      "Basic analytics"
    ],
    isPopular: false
  },
  {
    name: "Professional",
    description: "Best for growing gyms",
    price: "19,900",
    currency: "?",
    period: "/month",
    features: [
      "Up to 500 members",
      "Advanced membership system",
      "Class booking scheduling",
      "POS integration",
      "Inventory management",
      "Advanced analytics",
      "Priority support",
      "Custom branding"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    description: "For multi-location chains",
    price: "Custom",
    currency: "",
    period: "",
    features: [
      "Unlimited members",
      "Multi-location support",
      "Custom integrations",
      "API access",
      "White-label solution",
      "Dedicated account manager",
      "24/7 support",
      "Custom development"
    ],
    isPopular: false
  }
];

export default function GymPricing({ lang }: GymPricingProps) {
  return (
    <Section className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your fitness business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col ${plan.isPopular ? "border-blue-500 border-2 shadow-lg scale-105" : "border-border"}`}
              >
                {plan.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                    Most Popular
                  </Badge>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.currency}{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/th/consult" className="mt-6">
                    <Button
                      className={plan.isPopular ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full" : "w-full"}
                      variant={plan.isPopular ? "default" : "outline"}
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              All plans include free updates and 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
