diff --git a/src/components/sections/Projects.tsx b/src/components/sections/Projects.tsx
index 86c7dced322747311925c0e3a3c664d72da1e193..9f2447b629676d3d61e1e74fcff279e058827370 100644
--- a/src/components/sections/Projects.tsx
+++ b/src/components/sections/Projects.tsx
@@ -74,38 +74,38 @@ const Projects: React.FC = () => {
       technologies: ['AWS Lambda', 'API Gateway', 'IAM', 'Amazon S3'],
       imageUrl: 'images/projects/sagemaker.jpg', 
       githubUrl: 'https://github.com/sainigagan163/AWS-Sagemaker-Build-And-Deploy-Model',
     },
     {
       title: 'GitHub Docker and Jenkins CI-CD Pipeline',
       description: "This project contains code for setting up a Continuous Integration/Continuous Deployment (CI/CD) pipeline using Docker and Jenkins. The pipeline automates the process of building, testing, and deploying applications, ensuring efficiency and consistency in software development workflows.",
       technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'CI-CD'],
       imageUrl: 'images/projects/jenkins-app.jpg', 
       githubUrl: 'https://github.com/sainigagan163/GitHub-Docker-and-Jenkins-CI-CD-Pipeline',
     },
     {
       title: 'Trendy Restaurant E Commerce Platform',
       description: "Café ZARZA's online food ordering system offers a modern dining experience with a visually stunning interface. Features include a homepage, product catalog, shopping cart, checkout process, user authentication, and delivery integration.",
       technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
       imageUrl: 'images/projects/zarza.jpg', 
       githubUrl: 'https://github.com/sainigagan163/Trendy-Restaurant-E-Commerce-Platform',
     }
   ];
 
   return (
     <section id="projects" className="py-20">
       <div className="max-w-6xl mx-auto px-4">
         <SectionTitle
           title="Projects"
-          subtitle="Recent AI/ML Projects"
+          subtitle="Selected case studies in ML, analytics, and data platforms"
         />
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {projects.map((project) => (
             <ProjectCard key={project.title} {...project} />
           ))}
         </div>
       </div>
     </section>
   );
 };
 
-export default Projects;
\ No newline at end of file
+export default Projects;
