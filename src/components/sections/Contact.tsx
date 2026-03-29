import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
        <p className="text-slate-400 mb-8">
          Open to Data Scientist, ML Engineer, and Data Engineer roles in the UK.
          Let's talk.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="mailto:sainigagan163@gmail.com"
            className="flex items-center gap-3 rounded-lg border border-slate-800 p-4 text-sm text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
          >
            <Mail className="w-5 h-5 text-teal-500 shrink-0" />
            sainigagan163@gmail.com
          </a>
          <a
            href="tel:+447823916494"
            className="flex items-center gap-3 rounded-lg border border-slate-800 p-4 text-sm text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
          >
            <Phone className="w-5 h-5 text-teal-500 shrink-0" />
            +44 7823916494
          </a>
          <a
            href="https://github.com/sainigagan163"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-slate-800 p-4 text-sm text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
          >
            <Github className="w-5 h-5 text-teal-500 shrink-0" />
            github.com/sainigagan163
          </a>
          <a
            href="https://linkedin.com/in/gagansaini29"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-slate-800 p-4 text-sm text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-teal-500 shrink-0" />
            linkedin.com/in/gagansaini29
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-4 text-sm text-slate-400 sm:col-span-2">
            <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
            Aberdeen, UK — Open to relocation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
