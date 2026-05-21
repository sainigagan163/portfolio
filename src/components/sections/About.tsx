import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-6 text-white">About</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="space-y-4 text-slate-400 leading-relaxed flex-1">
            <p>
              Data Scientist with a track record of building ML systems that reduce cost, automate
              complexity, and surface actionable insights from large-scale operational data — including
              a clustering model cutting client cloud spend by 25% and an anomaly detection system
              reducing incident response time by 30%.
            </p>
            <p>
              Currently pursuing MSc in Data Science at the University of Aberdeen (graduating June 2026),
              with 2.5 years of commercial experience in Python, SQL, and cloud-based data engineering
              across AWS, Azure, and GCP. Holds five certifications including Azure Data Scientist Associate.
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/Profile.jpg`}
            alt="Gagan Saini"
            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border-2 border-slate-800 shadow-lg shadow-teal-500/10 shrink-0 mx-auto md:mx-0"
          />
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
              <li>2.5 years commercial experience</li>
              <li>25% cloud cost reduction delivered</li>
              <li>500+ cloud assets monitored & optimised</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
