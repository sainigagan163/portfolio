import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PenLine } from 'lucide-react';

const posts = [
  {
    title: 'Why Static Thresholds Fail for Cloud Cost Anomaly Detection',
    summary: 'Cloud spending patterns are non-Gaussian and seasonally variant. I learned this the hard way at CloudEQ when our initial alerting system generated 60%+ false positives. Here\'s how switching to DBSCAN density-based clustering solved the problem.',
    tags: ['Machine Learning', 'FinOps', 'Anomaly Detection'],
    comingSoon: true,
  },
  {
    title: 'Designing ETL Pipelines for Multi-Cloud Usage Data',
    summary: 'AWS, Azure, and GCP each report resource utilisation in completely different schemas. This is how I built a normalisation layer that unified them into a single analytics-ready format, and the architectural trade-offs involved.',
    tags: ['Data Engineering', 'AWS', 'Azure', 'GCP'],
    comingSoon: true,
  },
  {
    title: 'From Civil Engineering to Data Science: A Non-Linear Career Path',
    summary: 'I studied civil engineering and ended up building ML pipelines. This post is about the transferable skills (systems thinking, statistical analysis, project management) and what I wish I\'d known earlier.',
    tags: ['Career', 'Data Science'],
    comingSoon: true,
  },
];

const Writing = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="writing" className="py-20">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="Writing & Thinking"
          subtitle="How I approach problems — coming soon"
        />

        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.title}
              className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 shrink-0 mt-1">
                  <PenLine className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                    {post.comingSoon && (
                      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-full shrink-0">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{post.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-400/20 rounded-full text-xs text-emerald-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
