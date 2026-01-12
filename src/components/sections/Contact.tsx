import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SocialLink from '../ui/SocialLink';
import { FileText, Github, Linkedin, Mail, Phone } from 'lucide-react'; // Added Phone import

const Contact: React.FC = () => {
  const resumeHref = `${import.meta.env.BASE_URL}Gagan%20Saini%20Resume.pdf`;

  return (
    <section id="contact" className="py-20 bg-slate-950/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's connect and discuss opportunities"
        />
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-4">
            I welcome opportunities in data science, analytics, and MLOps, including consulting and collaborative projects.
            Reach out to discuss how I can support your data initiatives and delivery goals.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
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
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
