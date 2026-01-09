import React from 'react';
import ParticleBackground from '../ParticleBackground';
import TypewriterEffect from '../TypewriterEffect';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Gagan Saini
          </span>
        </h1>
        <TypewriterEffect />
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Data Scientist focused on translating complex data into reliable, business-ready insights.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
