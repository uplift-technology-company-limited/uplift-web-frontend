import React from 'react';
import Image from 'next/image';

interface CaseStudyItem {
  title: string;
  description: string;
  image?: string;
  results?: string[];
}

interface CaseStudySectionProps {
  caseStudies: CaseStudyItem[];
  serviceColor: string; // e.g., "from-blue-500 to-cyan-400"
  sectionTitle: string;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ caseStudies, serviceColor, sectionTitle }) => {
  const colorClass = serviceColor.split(' ')[1].replace('to-', '');

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {sectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies?.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {caseStudy.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                {caseStudy.results && caseStudy.results.length > 0 && (
                  <div className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-sm`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${serviceColor}`} />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
