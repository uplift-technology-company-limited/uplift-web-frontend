"use client";
import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

interface InDepthFeaturesTabsProps {
  features: FeatureItem[];
  serviceColor: string; // e.g., "from-blue-500 to-cyan-400"
}

const IconMap: Record<string, React.ComponentType<any>> = {
  TrendingUpIcon: LucideIcons.TrendingUpIcon,
  ZapIcon: LucideIcons.ZapIcon,
  BarChartIcon: LucideIcons.BarChartIcon,
  RefreshCcwIcon: LucideIcons.RefreshCcwIcon,
  LayoutIcon: LucideIcons.LayoutIcon,
  CodeIcon: LucideIcons.CodeIcon,
  Monitor: LucideIcons.Monitor,
  Edit: LucideIcons.Edit,
  Shield: LucideIcons.Shield,
  Globe: LucideIcons.Globe,
  // Add other icons as needed from service-pages.json
};

const getIcon = (iconName: string, size = 22) => {
  const Icon = IconMap[iconName];
  return Icon ? <Icon size={size} /> : null;
};

const InDepthFeaturesTabs: React.FC<InDepthFeaturesTabsProps> = ({ features, serviceColor }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const colorClass = serviceColor.split(' ')[1].replace('to-', '');

  return (
    <>
      {/* Desktop Tabs */}
      <div className="hidden md:block">
        <div className="flex border-b border-gray-700 mb-6">
          {features?.map((feature, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${activeTab === index ? 'border-b-2 border-' + colorClass + ' text-white' : 'text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveTab(index)}
            >
              {feature.icon && getIcon(feature.icon, 18)}
              <span>{feature.title}</span>
            </button>
          ))}
        </div>
        <div className="mt-6">
          {features?.map((feature, index) => (
            <div
              key={index}
              className={`${activeTab === index ? 'block' : 'hidden'}`}
            >
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Accordions */}
      <div className="md:hidden">
        {features?.map((feature, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full flex items-center justify-between p-4 rounded-lg ${activeAccordion === index ? 'bg-gradient-to-r ' + serviceColor + ' text-white' : 'bg-[#1A1A1A] text-white'}`}
              onClick={() =>
                setActiveAccordion(
                  activeAccordion === index ? null : index,
                )
              }
            >
              <div className="flex items-center gap-2">
                {feature.icon && getIcon(feature.icon, 18)}
                <span className="font-medium">{feature.title}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {activeAccordion === index && (
              <div className="p-4 bg-[#1A1A1A] rounded-b-lg">
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default InDepthFeaturesTabs;
