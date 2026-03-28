import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="About Me"
          subtitle="Data scientist who ships ML models that drive real business outcomes"
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a postgraduate Data Science student at the University of Aberdeen with 2.5 years
              of hands-on experience shipping machine learning solutions in production. At CloudEQ,
              I built ML anomaly detection models that cut cloud costs by 18% across AWS, Azure, and
              GCP. My work spans predictive modelling, ETL pipeline architecture, and translating
              complex data into executive-level insights that drive business decisions.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                  What I deliver
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li>ML models that ship to production and save money</li>
                  <li>Predictive analytics with measurable business impact</li>
                  <li>Stakeholder dashboards that drive decisions</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                  Core focus
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li>Anomaly detection and cost optimisation</li>
                  <li>Multi-cloud data platforms (AWS, Azure, GCP)</li>
                  <li>Responsible AI and model governance</li>
                </ul>
              </div>
            </div>

            {/* EDUCATION */}
            <h3 className="text-2xl font-semibold text-emerald-200 pt-4">
              Education
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-gray-100">MSc Data Science</p>
                <p className="text-gray-300">University of Aberdeen, UK</p>
                <p className="text-sm text-gray-400">Jan 2025 – Present</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-100">B.Tech Civil Engineering</p>
                <p className="text-gray-300">Ajay Kumar Garg Engineering College, India</p>
                <p className="text-gray-300">Dr. A.P.J. Abdul Kalam Technical University</p>
                <p className="text-sm text-gray-400">2017 – 2021</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative md:sticky md:top-20 flex justify-center pt-8 md:pt-0">
            <div className="w-64 h-64 md:w-80 md:h-80 aspect-square rounded-full overflow-hidden border-4 border-emerald-400 shadow-xl shadow-emerald-500/20">
              <img
                src="/images/Profile.jpg"
                alt="Gagan Saini — Data Scientist based in Aberdeen, UK"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
