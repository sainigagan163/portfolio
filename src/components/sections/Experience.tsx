import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

const bullets = [
  {
    text: 'Designed a machine learning-based resource clustering model in Python using Scikit-learn, TensorFlow, and DBSCAN to detect utilization patterns across 500+ cloud resources, reducing client cloud spend by',
    bold: '25%',
  },
  {
    text: 'Built automated ETL pipelines using Python and SQL to gather, clean, and transform high-volume telemetry data from AWS, Azure, and GCP APIs — cutting manual data preparation time by',
    bold: '40%',
  },
  {
    text: 'Created a Python-based anomaly detection system using statistical thresholding on live metrics from 500+ monitored assets, enabling early detection of performance degradation and reducing incident response time by',
    bold: '30%',
  },
  {
    text: 'Performed feature engineering and unsupervised clustering of multi-source cloud utilization data for resource behavior segmentation, producing structured analytics output.',
    bold: null,
  },
  {
    text: 'Designed and implemented scalable structured data ingestion pipelines using',
    bold: 'Microsoft Fabric Data Factory',
    suffix: '.',
  },
];

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeading num="02" title="Experience" />

        <div className="relative pl-8 border-l-2 border-teal-500/20">
          {/* Animated pulse dot at top of timeline */}
          <div className="absolute -left-[5px] top-6">
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Data Engineer I</h3>
                <p className="text-sm text-teal-400 font-medium mt-1">CloudEQ Software India Pvt. Ltd.</p>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 shrink-0 self-start">
                Jul 2022 – Dec 2024
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-3.5">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                  <span>
                    {item.text}{' '}
                    {item.bold && (
                      <strong className="text-slate-200 font-semibold">{item.bold}</strong>
                    )}
                    {item.suffix ?? (item.bold && !item.text.endsWith('.') ? '.' : '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
