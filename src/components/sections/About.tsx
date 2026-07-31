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
              Data Scientist with 2.5 years of professional experience creating ML algorithms and statistical models that help lower costs, simplify complexities, and reveal business intelligence from big data - resulting in a savings of 25% on client cloud computing costs, 40% on report creation, and 30% on incident resolution time.
            </p>
            <p>
              Graduated with an MSc in Data Science from the University of Aberdeen (June 2026), with Commendation, supported by five credentials, including Microsoft Certified: Azure Data Scientist Associate & Microsoft Certified: Azure AI Engineer Associate.
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
                <p className="text-sm text-slate-500">University of Aberdeen, UK - Expected 2025-2026</p>
              </div>
              <div>
                <p className="font-medium text-white text-sm">B.Tech Civil Engineering</p>
                <p className="text-sm text-slate-500">AKGEC, AKTU, India - 2017–2021</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-400 mb-3">Quick Facts</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>5x AWS / Azure certified</li>
              <li>2.5 years commercial experience</li>
              <li>25% cloud cost reduction delivered</li>
              <li>40% report creation time saved</li>
              <li>30% incident resolution time reduced</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
