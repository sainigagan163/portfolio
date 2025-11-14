import SectionTitle from '../ui/SectionTitle';

type Certification = {
  title: string;
  provider: string;
  issuedOn?: string;
  validThrough?: string;
  summary: string;
  badge: {
    src: string;
    alt: string;
  };
  highlights: string[];
  verificationUrl: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    provider: 'Microsoft',
    validThrough: 'Valid through 26 Sep 2026',
    summary:
      'Demonstrates applied expertise deploying Azure AI services, orchestrating Azure OpenAI workloads, and designing responsible AI solutions end-to-end.',
    badge: {
      src: 'https://learn.microsoft.com/training/achievements/azure-ai-engineer-associate.svg',
      alt: 'Microsoft Certified Azure AI Engineer Associate badge',
    },
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/3fc79218913ba045?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    highlights: [
      'Azure AI services orchestration',
      'Azure OpenAI + Cognitive Services',
      'Azure Machine Learning deployments',
      'Responsible AI guardrails',
    ],
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    provider: 'Microsoft',
    validThrough: 'Valid through 04 Sep 2026',
    summary:
      'Validates the ability to train, evaluate, and operationalize machine learning models with Azure Machine Learning and modern MLOps patterns.',
    badge: {
      src: 'https://learn.microsoft.com/training/achievements/azure-data-scientist-associate.svg',
      alt: 'Microsoft Certified Azure Data Scientist Associate badge',
    },
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/f70065ef3f358180?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    highlights: [
      'End-to-end Azure ML pipelines',
      'Responsible ML practices',
      'Feature engineering & experimentation',
      'Model deployment & monitoring',
    ],
  },
  {
    title: 'AWS Certified DevOps Engineer – Professional',
    provider: 'Amazon Web Services',
    validThrough: 'Valid through 17 Mar 2027',
    summary:
      'Proves advanced proficiency automating AWS workloads with CI/CD, IaC, and observability to maintain resilient, secure cloud platforms.',
    badge: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_DevOps-Engineer-Professional_badge.png',
      alt: 'AWS Certified DevOps Engineer Professional badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/97b48d60-0400-4303-b8c6-31522efc5ab6/linked_in_profile',
    highlights: [
      'CI/CD automation & release orchestration',
      'Infrastructure as Code (CloudFormation, CDK, Terraform)',
      'Monitoring, logging & incident response',
      'Security and compliance automation',
    ],
  },
  {
    title: 'AWS Certified Developer – Associate',
    provider: 'Amazon Web Services',
    issuedOn: 'Issued 27 Jul 2023',
    validThrough: 'Valid through 17 Mar 2027',
    summary:
      'Recognizes the ability to build secure, scalable AWS applications leveraging serverless, container, and SDK-driven architectures.',
    badge: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Developer-Associate_badge.png',
      alt: 'AWS Certified Developer Associate badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/029d108e-6898-4435-ae55-d73dd99d40da/linked_in_profile',
    highlights: [
      'Serverless architectures with Lambda & API Gateway',
      'AWS SDK, CLI, and developer tooling',
      'Secure application design & IAM',
      'Performance optimization & caching',
    ],
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    provider: 'Amazon Web Services',
    issuedOn: 'Issued 13 Mar 2023',
    validThrough: 'Valid through 17 Mar 2027',
    summary:
      'Builds foundational AWS fluency covering architecture, security, compliance, and cost management for cross-functional stakeholders.',
    badge: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_badge.png',
      alt: 'AWS Certified Cloud Practitioner badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/ddf6d91a-6ba3-4456-99c7-49168ce06914/linked_in_profile',
    highlights: [
      'Cloud architectural principles',
      'Shared responsibility model & governance',
      'Security & compliance fundamentals',
      'Cost optimization & billing best practices',
    ],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-slate-900/70 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Certifications"
          subtitle="Official credentials that reinforce my cloud, data, and AI delivery experience"
        />

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {CERTIFICATIONS.map((certification) => (
            <article
              key={certification.title}
              className="group flex h-full flex-col rounded-2xl border border-purple-500/10 bg-slate-900/60 p-6 shadow-lg shadow-purple-900/10 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/30"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-slate-950/70">
                <img
                  src={certification.badge.src}
                  alt={certification.badge.alt}
                  loading="lazy"
                  className="h-full w-full max-w-[240px] object-contain drop-shadow-[0_12px_18px_rgba(168,85,247,0.35)] transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300/80">
                  {certification.provider}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{certification.title}</h3>
                <div className="mt-2 space-y-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-purple-200/70">
                  {certification.issuedOn && <p>{certification.issuedOn}</p>}
                  {certification.validThrough && <p>{certification.validThrough}</p>}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{certification.summary}</p>

                <ul className="mt-4 space-y-2 text-sm text-purple-100/90" role="list">
                  {certification.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {certification.verificationUrl && (
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition hover:text-purple-200"
                    aria-label={`View ${certification.title} credential`}
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
