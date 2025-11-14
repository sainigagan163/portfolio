import SectionTitle from '../ui/SectionTitle';

type Certification = {
  name: string;
  issuer: string;
  issued: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  verifyUrl?: string;
  focusAreas: string[];
};

const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
    issued: 'Issued 2024',
    description:
      'Validated expertise in building AI solutions on Azure, including orchestration of cognitive services, Azure OpenAI, and Azure Machine Learning workloads.',
    image: {
      src: 'https://learn.microsoft.com/training/achievements/azure-ai-engineer-associate.svg',
      alt: 'Microsoft Certified Azure AI Engineer Associate badge',
    },
    verifyUrl: 'https://learn.microsoft.com/credentials/certifications/azure-ai-engineer/',
    focusAreas: ['Azure AI services', 'Responsible AI', 'Azure Machine Learning', 'Solution architecture'],
  },
  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    issued: 'Issued 2024',
    description:
      'Demonstrates proficiency in training, deploying, and maintaining machine learning models with Azure Machine Learning and responsible MLOps practices.',
    image: {
      src: 'https://learn.microsoft.com/training/achievements/azure-data-scientist-associate.svg',
      alt: 'Microsoft Certified Azure Data Scientist Associate badge',
    },
    verifyUrl: 'https://learn.microsoft.com/credentials/certifications/azure-data-scientist/',
    focusAreas: ['Azure Machine Learning', 'Responsible ML', 'Data exploration', 'Model deployment'],
  },
  {
    name: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'Amazon Web Services',
    issued: 'Issued 2023',
    description:
      'Highlights advanced ability to design, automate, and operate resilient cloud workloads on AWS with modern DevOps tooling and observability.',
    image: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_DevOps-Engineer-Professional_badge.png',
      alt: 'AWS Certified DevOps Engineer Professional badge',
    },
    verifyUrl: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
    focusAreas: ['CI/CD automation', 'Infrastructure as Code', 'Monitoring & logging', 'Incident response'],
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    issued: 'Issued 2023',
    description:
      'Validates the ability to build and optimize secure serverless and container-based applications on AWS with deep SDK knowledge.',
    image: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Developer-Associate_badge.png',
      alt: 'AWS Certified Developer Associate badge',
    },
    verifyUrl: 'https://aws.amazon.com/certification/certified-developer-associate/',
    focusAreas: ['Serverless architectures', 'AWS SDK & CLI', 'Application security', 'Performance optimization'],
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'Issued 2022',
    description:
      'Provides foundational AWS cloud fluency spanning architecture, compliance, pricing, and security best practices for stakeholders and builders alike.',
    image: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_badge.png',
      alt: 'AWS Certified Cloud Practitioner badge',
    },
    verifyUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    focusAreas: ['Cloud fundamentals', 'Shared responsibility model', 'Security & compliance', 'Cost management'],
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
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="group flex flex-col h-full rounded-2xl border border-purple-500/10 bg-slate-900/60 p-6 shadow-lg shadow-purple-900/10 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/30"
            >
              <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-slate-950/60">
                <img
                  src={certification.image.src}
                  alt={certification.image.alt}
                  loading="lazy"
                  className="h-full w-full max-w-[200px] object-contain drop-shadow-[0_12px_18px_rgba(168,85,247,0.35)] transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300/80">
                  {certification.issuer}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{certification.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.35em] text-purple-200/70">
                  {certification.issued}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {certification.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-purple-100/90">
                  {certification.focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" aria-hidden />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
                {certification.verifyUrl && (
                  <a
                    href={certification.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition hover:text-purple-200"
                  >
                    View credential
                    <span aria-hidden className="text-base">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
