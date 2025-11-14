import SectionTitle from '../ui/SectionTitle';

const Certifications = () => {
  const certifications = [
    {
      name: 'Microsoft Certified: Azure AI Engineer Associate',
      icon: 'images/certifications/azure-ai-engineer-associate.svg',
    },
    {
      name: 'Microsoft Certified: Azure Data Scientist Associate',
      icon: 'images/certifications/azure-data-scientist-associate.svg',
    },
    {
      name: 'AWS Certified DevOps Engineer – Professional',
      icon: 'images/certifications/aws-devops-engineer-professional.svg',
    },
    {
      name: 'AWS Certified Developer – Associate',
      icon: 'images/certifications/aws-developer-associate.svg',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      icon: 'images/certifications/aws-cloud-practitioner.svg',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900/70">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Certifications"
          subtitle="Industry-recognized credentials that validate my cloud and AI expertise"
        />
        <div className="skill-grid">
          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="flex flex-col items-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/20"
            >
              <img
                src={certification.icon}
                alt={certification.name}
                className="w-20 h-20 mb-4"
              />
              <span className="text-sm text-center text-purple-100 leading-relaxed">
                {certification.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
