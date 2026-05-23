import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-8 text-white">Experience</h2>

        <div className="border-l-2 border-teal-500/40 pl-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Data Engineer I</h3>
              <p className="text-sm text-slate-400">CloudEQ Software India Pvt. Ltd.</p>
            </div>
            <span className="text-xs font-medium text-slate-500 shrink-0">Jul 2022 – Dec 2024</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Designed a machine learning-based resource clustering algorithm in Python utilizing Scikit-learn, TensorFlow, and DBSCAN to detect utilization patterns for <strong className="text-slate-300">500+ cloud resources</strong>, uncovering cost-saving patterns that led to a <strong className="text-slate-300">25% decrease in client cloud spend</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Created automated ETL flows using Python and SQL for the collection, cleaning, and transformation of massive infrastructural telemetry from AWS, Azure, and GCP API endpoints — <strong className="text-slate-300">saving up to 40% time on data preparation</strong> for statistical analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Created an anomaly detection system using Python applying threshold-based statistical models to live metrics data of <strong className="text-slate-300">500+ monitored infrastructural elements</strong>, detecting performance degradation trends and <strong className="text-slate-300">decreasing incident response time by 30%</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Used feature engineering and clustering algorithms in Python for multi-source cloud utilization data to <strong className="text-slate-300">create clusters of similar infrastructures</strong>, providing structured analytics data for further analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Implemented scalable data pipelines for ingestion of structured data using <strong className="text-slate-300">Microsoft Fabric Data Factory</strong> technology</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
