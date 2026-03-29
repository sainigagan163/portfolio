import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];
  const resumeHref = `${import.meta.env.BASE_URL}Gagan%20Saini%20Resume.pdf`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="text-lg font-bold text-white">
            GS
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-400 hover:text-white px-3 py-1.5 rounded text-sm transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={resumeHref}
              download="Gagan Saini Resume.pdf"
              type="application/pdf"
              className="ml-2 px-4 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded text-sm font-semibold transition-colors"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-slate-400 hover:text-white px-2 py-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={resumeHref}
              download="Gagan Saini Resume.pdf"
              type="application/pdf"
              className="inline-block mt-2 px-4 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded text-sm font-semibold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
