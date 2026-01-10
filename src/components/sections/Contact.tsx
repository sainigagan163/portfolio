diff --git a/src/components/sections/Contact.tsx b/src/components/sections/Contact.tsx
index da486311cd367ff778e7725d3c7beb7b83b1c08e..33706a78d8a00850a4f317f32a44e1ddf49ffafc 100644
--- a/src/components/sections/Contact.tsx
+++ b/src/components/sections/Contact.tsx
@@ -1,48 +1,48 @@
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
-            I'm always open to new opportunities and collaborations.
-            Feel free to reach out if you'd like to work together!
+            I welcome opportunities in data science, analytics, and MLOps, including consulting and collaborative projects.
+            Reach out to discuss how I can support your data initiatives and delivery goals.
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
       </div>
     </section>
   );
 };
 
-export default Contact;
\ No newline at end of file
+export default Contact;
