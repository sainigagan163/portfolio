import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SocialLink from '../ui/SocialLink';
import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // Added Phone import

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's connect and discuss opportunities"
        />
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-4">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
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
        </div>
        
        {/* Placeholder for Contact Form (as requested) */}
        <div className="max-w-xl mx-auto p-8 bg-slate-800/50 rounded-lg border border-purple-500/20 text-center">
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Send a Message</h3>
          <p className="text-gray-400">
            To integrate a contact form, you will need to add the necessary JSX/logic here (and set up a backend service like AWS Lambda or a form service). For now, please use the direct links above.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;