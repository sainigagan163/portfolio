diff --git a/src/components/sections/Hero.tsx b/src/components/sections/Hero.tsx
index dad801601bf2e27a550b1cf2d46aea40dfb96d2e..4d6cdd2185b346098b791f646d41806c9388bd45 100644
--- a/src/components/sections/Hero.tsx
+++ b/src/components/sections/Hero.tsx
@@ -1,46 +1,54 @@
 import React from 'react';
 import ParticleBackground from '../ParticleBackground';
 import TypewriterEffect from '../TypewriterEffect';
 import { ArrowDown } from 'lucide-react';
 
 const Hero = () => {
   return (
     <section className="relative h-screen flex items-center justify-center overflow-hidden">
       <ParticleBackground />
       <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
+        <div className="text-sm uppercase tracking-[0.35em] text-purple-300/80">
+          Data Scientist • MLOps Engineer • Cloud Analytics
+        </div>
         <h1 className="text-4xl md:text-6xl font-bold">
           Hi, I'm{' '}
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
             Gagan Saini
           </span>
         </h1>
         <TypewriterEffect />
         <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
-          Passionate about transforming complex data into actionable insights.
+          I deliver production-ready ML systems, dependable data pipelines, and executive-ready analytics that drive measurable outcomes.
         </p>
+        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
+          <span className="rounded-full border border-purple-400/40 bg-slate-900/60 px-4 py-2">Aberdeen, UK</span>
+          <span className="rounded-full border border-purple-400/40 bg-slate-900/60 px-4 py-2">AWS · Azure Certified</span>
+          <span className="rounded-full border border-purple-400/40 bg-slate-900/60 px-4 py-2">Open to full-time roles</span>
+        </div>
         <div className="flex justify-center gap-4">
           <a
             href="#contact"
             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
           >
-            Get in Touch
+            Schedule a Call
           </a>
           <a
             href="#projects"
             className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-colors"
           >
-            View Projects
+            View Case Studies
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
 
-export default Hero;
\ No newline at end of file
+export default Hero;
