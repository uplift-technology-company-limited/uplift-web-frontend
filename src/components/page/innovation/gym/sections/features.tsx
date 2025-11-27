"use client";

import { Users, Calendar, CreditCard, BarChart3, Settings, QrCode } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface GymFeaturesProps {
  lang: string;
}

const features = [
  {
    icon: Users,
    title: 'Membership Management',
    description: 'Complete member registration, status tracking, and auto-renewal system with role-based access control'
  },
  {
    icon: Calendar,
    title: 'Booking & Check-In',
    description: 'Class booking, equipment reservation, and mobile QR code check-in for seamless member experience'
  },
  {
    icon: CreditCard,
    title: 'Sales & POS',
    description: 'Integrated payment processing with multiple payment methods including cash, card, and e-wallets'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time reporting and business insights with revenue tracking and member analytics'
  },
  {
    icon: Settings,
    title: 'Inventory Management',
    description: 'Efficiently manage gym equipment, retail product stock, and automatic reorder notifications'
  },
  {
    icon: QrCode,
    title: 'Mobile Integration',
    description: 'QR code generation for member check-in and seamless mobile app integration'
  }
];

export default function GymFeatures({ lang }: GymFeaturesProps) {
  return (
    <Section className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Powerful Features for Modern Gyms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a successful fitness center, all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardHeader>
                    <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg w-fit group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors mb-4">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
