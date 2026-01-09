import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Background, focus areas, and the value I bring to data-driven teams"
        />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">Professional Bio</h3>
            <p className="text-gray-300">
              I am a postgraduate Data Science student at the University of Aberdeen with hands-on experience delivering machine learning solutions, data automation, and cloud-based analytics. My focus areas include predictive modeling, MLOps, and building scalable pipelines that connect technical work to measurable business outcomes. I enjoy collaborating with cross-functional teams to translate complex data into clear, actionable recommendations.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 pt-4">Education</h3>
            <div className="space-y-2">
              <p className="text-gray-300 font-medium">MSc Data Science, University of Aberdeen, UK (Jan 2025 – Present)</p>
              <p className="text-gray-300 font-medium">
                B.Tech Civil Engineering, Ajay Kumar Garg Engineering College, India, Dr. A.P.J. Abdul Kalam Technical University (2017–2021)
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-400 pt-4">Experience</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                <h4 className="text-lg font-semibold text-purple-300">DevOps Engineer I, CloudEQ Software India Pvt. Ltd. (07/2022 – 12/2024)</h4>
                <ul className="list-disc list-inside text-gray-300 ml-4 mt-2 space-y-1">
                  <li>Designed and implemented automation pipelines across AWS, Azure, and GCP.</li>
                  <li>Developed anomaly-detection ML models, improving operational efficiency and reducing costs by 18%.</li>
                  <li>Built Power BI and Tableau dashboards, translating technical findings for senior stakeholders.</li>
                  <li>Enabled secure, scalable data applications using Docker and Kubernetes.</li>
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

export default About;
