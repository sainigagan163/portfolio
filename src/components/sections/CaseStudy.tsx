import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CaseStudy = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="case-study" className="py-20">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="Case Study"
          subtitle="One strong case study is worth ten project bullet points"
        />

        <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-8 shadow-lg shadow-emerald-500/10 backdrop-blur-sm space-y-8">
          {/* Title */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">CloudEQ Software India Pvt. Ltd. — 2022-2024</span>
            <h3 className="text-2xl font-bold text-white mt-2">ML-Driven Cloud Cost Optimisation Across AWS, Azure & GCP</h3>
          </div>

          {/* Problem */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400 text-sm font-bold">1</span>
              <h4 className="text-lg font-semibold text-red-400">The Problem</h4>
            </div>
            <p className="text-gray-300 leading-relaxed pl-11">
              Enterprise clients were overspending on cloud infrastructure with zero visibility into
              resource utilisation patterns. Costs were growing month-over-month with no data-driven
              mechanism to identify waste, under-utilised resources, or spending anomalies across
              three cloud providers (AWS, Azure, GCP). Manual reviews were slow, error-prone, and
              couldn't scale.
            </p>
          </div>

          {/* Approach */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 text-sm font-bold">2</span>
              <h4 className="text-lg font-semibold text-sky-400">What I Built</h4>
            </div>
            <div className="pl-11 space-y-3">
              <p className="text-gray-300 leading-relaxed">
                Designed and shipped an end-to-end ML pipeline for cloud cost anomaly detection:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span><strong className="text-white">ETL Pipelines</strong> — Built scalable data pipelines to ingest and normalise high-volume usage data from AWS, Azure, and GCP into a unified schema.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span><strong className="text-white">ML Models</strong> — Applied DBSCAN clustering and time-series anomaly detection (Python, Scikit-learn, TensorFlow) to identify spending outliers and under-utilised resources.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span><strong className="text-white">Automation</strong> — Created Python tools for VM monitoring, disk health analysis, snapshot lifecycle management, and cluster right-sizing recommendations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span><strong className="text-white">Dashboards</strong> — Delivered stakeholder-ready analytical reports translating complex technical findings into executive-level business recommendations.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What Failed */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 text-sm font-bold">3</span>
              <h4 className="text-lg font-semibold text-amber-400">What I Learned</h4>
            </div>
            <p className="text-gray-300 leading-relaxed pl-11">
              Initial models using simple threshold-based alerts generated too many false positives.
              Switching to DBSCAN clustering with density-based outlier detection dramatically improved
              signal quality. The key insight: cloud spending patterns are non-Gaussian and
              seasonally variant — static thresholds will always fail. Adaptive, density-aware models
              were the right approach.
            </p>
          </div>

          {/* Result */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-bold">4</span>
              <h4 className="text-lg font-semibold text-emerald-400">The Result</h4>
            </div>
            <div className="pl-11 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/20 bg-slate-950/60 p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400">18%</p>
                <p className="text-sm text-gray-400 mt-1">Cost efficiency gain</p>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-slate-950/60 p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400">3</p>
                <p className="text-sm text-gray-400 mt-1">Cloud providers covered</p>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-slate-950/60 p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400">Scaled</p>
                <p className="text-sm text-gray-400 mt-1">Across multiple enterprise clients</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t border-emerald-400/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Scikit-learn', 'TensorFlow', 'DBSCAN', 'Pandas', 'SQL', 'AWS', 'Azure', 'GCP', 'Terraform', 'GitHub Actions', 'Power BI'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-emerald-500/10 border border-emerald-400/20 rounded-full text-xs text-emerald-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
