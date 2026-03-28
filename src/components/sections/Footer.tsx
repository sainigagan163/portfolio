import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { href: '#about', label: 'About' },
    { href: '#impact', label: 'Results' },
    { href: '#case-study', label: 'Case Study' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#writing', label: 'Writing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-emerald-400/10 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a
              href="#"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400"
            >
              Gagan Saini
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Data Scientist who builds ML models that ship to production and save money.
              MSc Data Science, University of Aberdeen.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80 mb-3">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {sections.map(({ href, label }) => (
                <a key={href} href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80 mb-3">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/sainigagan163" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Github className="w-4 h-4" />
                github.com/sainigagan163
              </a>
              <a href="https://linkedin.com/in/gagansaini29" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/gagansaini29
              </a>
              <a href="mailto:sainigagan163@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" />
                sainigagan163@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-emerald-400/10">
          <p className="text-gray-500 text-sm">&copy; 2025 Gagan Saini. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-gray-400 hover:text-emerald-300 text-sm transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
