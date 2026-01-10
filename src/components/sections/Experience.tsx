import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const highlights = [
    'Designed and implemented automation pipelines across AWS, Azure, and GCP.',
    'Developed anomaly-detection ML models, improving operational efficiency and reducing costs by 18%.',
    'Built Power BI and Tableau dashboards, translating technical findings for senior stakeholders.',
    'Enabled secure, scalable data applications using Docker and Kubernetes.',
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Experience"
          subtitle="Professional roles focused on cloud automation, MLOps, and analytics delivery"
        />
        <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10">
          <div className="flex items-center gap-3 text-emerald-200">
            <Briefcase className="h-6 w-6" />
            <div>
              <p className="text-lg font-semibold text-white">DevOps Engineer I</p>
              <p className="text-sm text-gray-400">
                CloudEQ Software India Pvt. Ltd. · 07/2022 – 12/2024
              </p>
            </div>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
