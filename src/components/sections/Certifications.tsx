import SectionTitle from '../ui/SectionTitle';

const Certifications = () => {
  const certifications = [
    {
      name: 'Microsoft Certified: Azure AI Engineer Associate',
      icon: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-azure-ai-engineer-associate.svg',
    },
    {
      name: 'Microsoft Certified: Azure Data Scientist Associate',
      icon: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-azure-data-scientist-associate.svg',
    },
    {
      name: 'AWS Certified DevOps Engineer – Professional',
      icon: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified_DevOps-Engineer-Professional_badge.png',
    },
    {
      name: 'AWS Certified Developer – Associate',
      icon: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified_Developer-Associate_badge.png',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      icon: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified_Cloud-Practitioner_badge.png',
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
                className="w-24 h-24 mb-4 object-contain"
                loading="lazy"
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
