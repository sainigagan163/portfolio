import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-6 text-white">About</h2>

        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            MSc Data Science candidate at the University of Aberdeen (expected June 2026) with
            2+ years of professional experience building ML-powered cloud optimisation pipelines
            at CloudEQ Software. I specialise in fraud detection, ETL architecture, and applied
            machine learning across AWS, Azure, and GCP.
          </p>
          <p>
            I made a self-driven career pivot from Civil Engineering into data science — motivated
            by a genuine interest in using data to solve complex problems at scale. My work
            focuses on shipping ML systems that deliver measurable business outcomes, not just
            proof-of-concept notebooks.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-800 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-400 mb-3">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-white text-sm">MSc Data Science</p>
                <p className="text-sm text-slate-500">University of Aberdeen, UK — Expected June 2026</p>
              </div>
              <div>
                <p className="font-medium text-white text-sm">B.Tech Civil Engineering</p>
                <p className="text-sm text-slate-500">AKGEC, AKTU, India — 2017–2021</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-400 mb-3">Quick Facts</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>5x AWS / Azure certified</li>
              <li>2+ years production ML experience</li>
              <li>35% cloud cost reduction delivered</li>
              <li>50K+ daily records processed at 99.7% integrity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
