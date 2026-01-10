diff --git a/src/components/sections/About.tsx b/src/components/sections/About.tsx
index bf0ee09b3a337a8f429d9e3cb849711f49491bd7..28b385c3131922cee32b280f1d0fa706649a1309 100644
--- a/src/components/sections/About.tsx
+++ b/src/components/sections/About.tsx
@@ -1,55 +1,80 @@
 import React from 'react';
 import SectionTitle from '../ui/SectionTitle';
 
 const About: React.FC = () => {
   return (
     <section id="about" className="py-20">
       <div className="max-w-4xl mx-auto px-4">
         <SectionTitle
           title="About Me"
-          subtitle="Learn more about my journey and passion for Data Science"
+          subtitle="Data science, MLOps, and analytics expertise anchored in business outcomes"
         />
         <div className="grid md:grid-cols-2 gap-8 items-start">
           <div className="space-y-6">
-            <h3 className="text-2xl font-semibold text-blue-400">Professional Bio</h3>
+            <h3 className="text-2xl font-semibold text-blue-400">Professional Summary</h3>
             <p className="text-gray-300">
-              I'm Gagan Saini, a postgraduate student in Data Science at the University of Aberdeen. I have a strong interest in machine learning, predictive analytics, and AI-driven business solutions. I am passionate about transforming complex data into actionable insights that address real-world problems and drive innovation. With experience in data engineering, automation, and cloud platforms, I am motivated by opportunities to bridge the gap between technical solutions and meaningful business impact.
+              I am a postgraduate Data Science student at the University of Aberdeen with hands-on experience delivering machine learning solutions, data automation, and cloud-based analytics. My work spans predictive modeling, MLOps, and scalable pipelines that connect technical delivery to measurable business outcomes. I partner with cross-functional teams to translate complex data into clear, decision-ready insights.
             </p>
 
+            <div className="grid gap-4 sm:grid-cols-2">
+              <div className="rounded-xl border border-purple-500/20 bg-slate-900/60 p-4">
+                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300/80">
+                  What I deliver
+                </p>
+                <ul className="mt-3 space-y-2 text-sm text-gray-300">
+                  <li>Production-ready ML workflows and deployment pipelines</li>
+                  <li>Data quality automation, monitoring, and alerting</li>
+                  <li>Analytics storytelling for leadership alignment</li>
+                </ul>
+              </div>
+              <div className="rounded-xl border border-purple-500/20 bg-slate-900/60 p-4">
+                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300/80">
+                  Core focus
+                </p>
+                <ul className="mt-3 space-y-2 text-sm text-gray-300">
+                  <li>Predictive analytics and anomaly detection</li>
+                  <li>Cloud-native data platforms on AWS and Azure</li>
+                  <li>Responsible AI, security, and model governance</li>
+                </ul>
+              </div>
+            </div>
+
             <h3 className="text-2xl font-semibold text-blue-400 pt-4">Education</h3>
             <div className="space-y-2">
               <p className="text-gray-300 font-medium">MSc Data Science, University of Aberdeen, UK (Jan 2025 – Present)</p>
-              <p className="text-gray-300 font-medium">B.Tech Civil Engineering, Ajay Kumar Garg Engineering College, India, Dr. A.P.J. Abdul Kalam Technical University (2017–2021)</p>
+              <p className="text-gray-300 font-medium">
+                B.Tech Civil Engineering, Ajay Kumar Garg Engineering College, India, Dr. A.P.J. Abdul Kalam Technical University (2017–2021)
+              </p>
             </div>
 
             <h3 className="text-2xl font-semibold text-blue-400 pt-4">Experience</h3>
             <div className="space-y-4">
               <div className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                 <h4 className="text-lg font-semibold text-purple-300">DevOps Engineer I, CloudEQ Software India Pvt. Ltd. (07/2022 – 12/2024)</h4>
                 <ul className="list-disc list-inside text-gray-300 ml-4 mt-2 space-y-1">
                   <li>Designed and implemented automation pipelines across AWS, Azure, and GCP.</li>
-                  <li>Developed ML models for anomaly detection, improving efficiency and reducing operational costs by 18%.</li>
-                  <li>Created Power BI/Tableau dashboards, collaborated with cross-functional teams, and presented analytical results to leadership.</li>
-                  <li>Supported integration of secure, scalable data applications using Docker and Kubernetes.</li>
+                  <li>Developed anomaly-detection ML models, improving operational efficiency and reducing costs by 18%.</li>
+                  <li>Built Power BI and Tableau dashboards, translating technical findings for senior stakeholders.</li>
+                  <li>Enabled secure, scalable data applications using Docker and Kubernetes.</li>
                 </ul>
               </div>
             </div>
           </div>
           
           <div className="relative md:sticky md:top-20 flex justify-center pt-8 md:pt-0">
             <div className="w-64 h-64 md:w-80 md:h-80 aspect-square rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
               <img
                 src="/images/Profile.jpg"
                 alt="Gagan Saini Profile"
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
 
         </div>
       </div>
     </section>
   );
 };
 
-export default About;
\ No newline at end of file
+export default About;
