import SectionTitle from '../ui/SectionTitle';
import SkillGrid from '../SkillGrid';

const Skills = () => {
  const dataScienceSkills = [
    { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'Predictive Analytics', icon: 'images/rag-icon.svg' }, // Placeholder icon path
    { name: 'Statistical Modelling', icon: 'images/fastapi-icon.svg' }, // Placeholder icon path
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'LLM & AI Integration', icon: 'images/openai-icon.svg' },
  ];

  const programmingSkills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'Data Engineering', icon: 'images/dvc-icon.svg' }, // Placeholder icon path
    { name: 'ETL Pipelines', icon: 'images/mlflow-icon.svg' }, // Placeholder icon path
    { name: 'FastAPI', icon: 'images/fastapi-icon.svg' },
  ];

  const dataVizSkills = [
    { name: 'Power BI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-plain.svg' },
    { name: 'Tableau', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg' },
    { name: 'SAS', icon: 'images/pinecone-icon.svg' }, // Placeholder icon path
    { name: 'Data Visualization', icon: 'images/langchain-icon.svg' }, // Placeholder icon path
  ];

  const cloudDevOpsSkills = [
    { name: 'AWS', icon: 'images/aws-icon.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Automation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Skills & Technologies" subtitle="A Comprehensive Technical Stack" />
        <div className="space-y-8">
          <SkillGrid title="Data Science & Core ML" skills={dataScienceSkills} />
          <SkillGrid title="Programming & Data Engineering" skills={programmingSkills} />
          <SkillGrid title="Data Visualization & BI" skills={dataVizSkills} />
          <SkillGrid title="Cloud & DevOps" skills={cloudDevOpsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
