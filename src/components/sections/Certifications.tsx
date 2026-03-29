import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const certifications = [
  {
    title: 'Azure AI Engineer Associate',
    provider: 'Microsoft',
    badge: `${import.meta.env.BASE_URL}certifications/azure-ai-engineer.png`,
    url: 'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/3fc79218913ba045?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Azure Data Scientist Associate',
    provider: 'Microsoft',
    badge: `${import.meta.env.BASE_URL}certifications/azure-data-scientist.png`,
    url: 'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/f70065ef3f358180?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'AWS DevOps Engineer — Professional',
    provider: 'Amazon Web Services',
    badge: `${import.meta.env.BASE_URL}certifications/aws-devops-pro.png`,
    url: 'https://www.credly.com/badges/97b48d60-0400-4303-b8c6-31522efc5ab6/linked_in_profile',
  },
  {
    title: 'AWS Developer — Associate',
    provider: 'Amazon Web Services',
    badge: `${import.meta.env.BASE_URL}certifications/aws-developer-assoc.png`,
    url: 'https://www.credly.com/badges/029d108e-6898-4435-ae55-d73dd99d40da/linked_in_profile',
  },
  {
    title: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services',
    badge: `${import.meta.env.BASE_URL}certifications/aws-cloud-practitioner.png`,
    url: 'https://www.credly.com/badges/ddf6d91a-6ba3-4456-99c7-49168ce06914/linked_in_profile',
  },
];

const marqueeItems = [...certifications, ...certifications];

const Certifications = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="py-24 bg-slate-900/50 overflow-hidden">
      <div ref={ref} className={`mx-auto max-w-6xl px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-8 text-white text-center">Certifications</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((cert, index) => (
              <a
                key={`${cert.title}-${index}`}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="group flex-shrink-0 w-56 mx-3 flex flex-col items-center rounded-lg border border-slate-800 p-5 text-center transition-all duration-200 hover:border-teal-500/40 hover:bg-teal-500/5"
                aria-label={`Verify ${cert.title} credential`}
              >
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-slate-900 mb-3">
                  <img
                    src={cert.badge}
                    alt={`${cert.title} badge`}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500 mb-1">
                  {cert.provider}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2">{cert.title}</h3>
                <span className="flex items-center gap-1 text-xs text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                  <ExternalLink className="w-3 h-3" />
                  Verify
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
