import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Data science, MLOps, and analytics expertise anchored in business outcomes"
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-200">
              Professional Summary
            </h3>

            <p className="text-gray-300">
              I am a postgraduate Data Science student at the University of Aberdeen with hands-on experience delivering
              machine learning solutions, data automation, and cloud-based analytics. My work spans predictive modeling,
              MLOps, and scalable pipelines that connect technical delivery to measurable business outcomes. I partner
              with cross-functional teams to translate complex data into clear, decision-ready insights.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                  What I deliver
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li>Production-ready ML workflows and deployment pipelines</li>
                  <li>Data quality automation, monitoring, and alerting</li>
                  <li>Analytics storytelling for leadership alignment</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                  Core focus
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li>Predictive analytics and anomaly detection</li>
                  <li>Cloud-native data platforms on AWS and Azure</li>
                  <li>Responsible AI, security, and model governance</li>
                </ul>
              </div>
            </div>

            {/* EDUCATION */}
            <h3 className="text-2xl font-semibold text-emerald-200 pt-4">
              Education
            </h3>

            <div className="space-y-6">
              {/* MSc */}
              <div>
                <p className="text-lg font-semibold text-gray-100">
                  MSc Data Science
                </p>
                <p className="text-gray-300">
                  University of Aberdeen, UK
                </p>
                <p className="text-sm text-gray-400">
                  Jan 2025 – Present
                </p>
              </div>

              {/* B.Tech */}
              <div>
                <p className="text-lg font-semibold text-gray-100">
                  B.Tech Civil Engineering
                </p>
                <p className="text-gray-300">
                  Ajay Kumar Garg Engineering College, India
                </p>
                <p className="text-gray-300">
                  Dr. A.P.J. Abdul Kalam Technical University
                </p>
                <p className="text-sm text-gray-400">
                  2017 – 2021
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative md:sticky md:top-20 flex justify-center pt-8 md:pt-0">
            <div className="w-64 h-64 md:w-80 md:h-80 aspect-square rounded-full overflow-hidden border-4 border-emerald-400 shadow-xl">
              <img
                src="/images/Profile.jpg"
                alt="Gagan Saini Profile"
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
