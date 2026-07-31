import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeading num="06" title="Contact" />

        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <h3 className="gradient-text text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Get In Touch
          </h3>

          <p className="text-slate-400 leading-relaxed mb-10">
            Currently open to <span className="text-slate-200">Data Scientist</span>,{' '}
            <span className="text-slate-200">ML Engineer</span>, and{' '}
            <span className="text-slate-200">Data Engineer</span> roles — remote or in Delhi-NCR. Whether
            you have an opportunity or just want to say hi, my inbox is always open.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:sainigagan163@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-teal-500/40 text-teal-300 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 text-sm font-medium mb-16"
          >
            <Mail className="w-4 h-4" />
            sainigagan163@gmail.com
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Social links row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <a
              href="https://github.com/sainigagan163"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              sainigagan163
            </a>
            <span className="h-4 w-px bg-slate-800" />
            <a
              href="https://linkedin.com/in/gagansaini29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              gagansaini29
            </a>
            <span className="h-4 w-px bg-slate-800" />
            <a
              href="tel:+919911774256"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              +91 9911774256
            </a>
            <span className="h-4 w-px bg-slate-800" />
            <span className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4" />
              Delhi-NCR, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
