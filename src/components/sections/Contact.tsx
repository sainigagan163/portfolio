import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SocialLink from '../ui/SocialLink';
import { FileText, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const resumeHref = `${import.meta.env.BASE_URL}Gagan%20Saini%20Resume.pdf`;
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:sainigagan163@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/40 backdrop-blur-sm">
      <div ref={ref} className={`max-w-5xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's connect and discuss opportunities"
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side - Info */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I welcome opportunities in data science, analytics, and MLOps, including consulting and collaborative projects.
              Reach out to discuss how I can support your data initiatives and delivery goals.
            </p>

            <div className="space-y-4">
              <SocialLink
                href="mailto:sainigagan163@gmail.com"
                icon={Mail}
                label="sainigagan163@gmail.com"
              />
              <SocialLink
                href="tel:+447823916494"
                icon={Phone}
                label="+44 7823916494"
              />
              <SocialLink
                href="https://github.com/sainigagan163"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com/in/gagansaini29"
                icon={Linkedin}
                label="LinkedIn"
              />
              <a
                href={resumeHref}
                download="Gagan Saini Resume.pdf"
                type="application/pdf"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-emerald-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400/60 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-emerald-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400/60 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-emerald-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-900 rounded-full font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
            >
              <Send className="w-4 h-4" />
              {submitted ? 'Opening mail client...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
