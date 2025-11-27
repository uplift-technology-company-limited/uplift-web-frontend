import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Section } from "@/components/ui/section"

interface ProblemItem {
  title: string;
  description: string;
  icon?: string;
}

interface ProblemStatementSectionProps {
  problems: ProblemItem[];
  serviceColor: string; // e.g., "from-blue-500 to-cyan-400"
  sectionTitle: string;
}

const IconMap: Record<string, React.ComponentType<any>> = {
  TrendingUpIcon: LucideIcons.TrendingUpIcon,
  ZapIcon: LucideIcons.ZapIcon,
  BarChartIcon: LucideIcons.BarChartIcon,
  RefreshCcwIcon: LucideIcons.RefreshCcwIcon,
  Clock: LucideIcons.Clock, // Added for problems
  Smartphone: LucideIcons.Smartphone, // Added for problems
  Search: LucideIcons.Search, // Added for problems
  Monitor: LucideIcons.Monitor, // Added for problems
  Wrench: LucideIcons.Wrench, // Added for problems
  // Add other icons as needed
};

const getIcon = (iconName: string, size = 22) => {
  const Icon = IconMap[iconName];
  return Icon ? <Icon size={size} /> : null;
};

const ProblemStatementSection: React.FC<ProblemStatementSectionProps> = ({ problems, serviceColor, sectionTitle }) => {
  return (
    <Section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {sectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems?.map((problem, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {problem.icon && (
                  <div className={`bg-gradient-to-r ${serviceColor} text-white inline-flex p-3 rounded-lg mb-4`}>
                    {getIcon(problem.icon)}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemStatementSection;
