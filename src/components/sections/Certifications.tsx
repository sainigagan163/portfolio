import SectionTitle from '../ui/SectionTitle';

type Certification = {
  name: string;
  issuer: string;
  credentialId?: string;
  image: string;
  description: string;
};

const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
    image: 'https://learn.microsoft.com/training/achievements/azure-ai-engineer-associate.svg',
    description:
      'Designing and implementing responsible AI solutions on Azure using AI services, Azure ML, and cognitive services.',
  },
  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    image: 'https://learn.microsoft.com/training/achievements/azure-data-scientist-associate.svg',
    description:
      'Building, deploying, and operationalizing machine learning workloads on Azure with responsible AI practices.',
  },
  {
    name: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'Amazon Web Services',
    image:
      'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_DevOps-Engineer-Professional_badge.png',
    description:
      'Automating and managing distributed systems on AWS with CI/CD pipelines, observability, and operational excellence.',
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    image:
      'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Developer-Associate_badge.png',
    description:
      'Developing and optimizing serverless and containerized applications on AWS with secure, scalable architectures.',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    image:
      'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_badge.png',
    description:
      'Demonstrating foundational AWS cloud fluency, architectural best practices, and the shared responsibility model.',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900/70">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Certifications"
          subtitle="Industry-recognized credentials that validate my cloud and AI expertise"
        />
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="group flex flex-col h-full rounded-2xl border border-purple-500/10 bg-slate-900/60 p-6 shadow-lg shadow-purple-900/10 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/30"
            >
              <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-slate-950/60">
                <img
                  src={certification.image}
                  alt={`${certification.name} badge`}
                  loading="lazy"
                  className="h-full w-full max-w-[200px] object-contain drop-shadow-[0_12px_18px_rgba(168,85,247,0.35)] transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300/80">
                  {certification.issuer}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{certification.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {certification.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
