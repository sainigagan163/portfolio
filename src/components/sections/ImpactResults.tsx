import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { TrendingDown, Cloud, Award, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const results = [
  {
    icon: TrendingDown,
    metric: '18%',
    title: 'Cloud Cost Reduction',
    description: 'Built ML anomaly detection models (DBSCAN, clustering) that identified infrastructure inefficiencies across multi-cloud environments, delivering measurable operational savings.',
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud ML Delivery',
    metric: '3',
    metricSuffix: ' Clouds',
    description: 'Shipped predictive analytics and data automation solutions across AWS, Azure, and GCP for enterprise clients at CloudEQ.',
  },
  {
    icon: Award,
    metric: '5',
    title: 'Active Certifications',
    description: 'Azure AI Engineer, Azure Data Scientist, AWS DevOps Professional, AWS Developer, and AWS Cloud Practitioner — all currently valid.',
  },
  {
    icon: BarChart3,
    metric: '2.5',
    metricSuffix: ' Years',
    title: 'Production ML Experience',
    description: 'End-to-end ML delivery: from ETL pipelines processing high-volume data to stakeholder dashboards translating insights into business decisions.',
  },
];

const ImpactResults = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="impact" className="py-20 bg-slate-950/40 backdrop-blur-sm">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="Impact & Results"
          subtitle="Real numbers from real work — not project descriptions, delivery outcomes"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map(({ icon: Icon, metric, metricSuffix, title, description }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/60 hover:shadow-xl hover:shadow-emerald-900/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 transition-colors group-hover:bg-emerald-400/20 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                {metric}<span className="text-lg font-semibold">{metricSuffix || '%'}</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactResults;
