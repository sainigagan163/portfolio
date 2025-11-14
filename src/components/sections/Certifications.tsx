import SectionTitle from '../ui/SectionTitle';

type Certification = {
  title: string;
  provider: string;
  issued?: string;
  validThrough?: string;
  summary?: string;
  highlights?: string[];
  badge: {
    src: string;
    alt: string;
  };
  verificationUrl: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    provider: 'Microsoft',
    validThrough: 'Valid through 26 Sep 2026',
    summary:
      'Demonstrates applied expertise deploying Azure AI services, orchestrating Azure OpenAI workloads, and designing responsible AI solutions end-to-end.',
    highlights: [
      'Azure AI services orchestration',
      'Azure OpenAI + Cognitive Services',
      'Azure Machine Learning deployments',
      'Responsible AI guardrails',
    ],
    badge: {
      src: '/certifications/azure-ai-engineer.svg',
      alt: 'Microsoft Certified Azure AI Engineer Associate badge',
    },
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/3fc79218913ba045?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    provider: 'Microsoft',
    validThrough: 'Valid through 04 Sep 2026',
    summary:
      'Validates the ability to train, evaluate, and operationalize machine learning models with Azure Machine Learning and modern MLOps patterns.',
    highlights: [
      'End-to-end Azure ML pipelines',
      'Responsible ML practices',
      'Feature engineering & experimentation',
      'Model deployment & monitoring',
    ],
    badge: {
      src: '/certifications/azure-data-scientist.svg',
      alt: 'Microsoft Certified Azure Data Scientist Associate badge',
    },
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/f70065ef3f358180?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'AWS Certified DevOps Engineer – Professional',
    provider: 'Amazon Web Services',
    validThrough: 'Valid through 17 Mar 2027',
    summary:
      'Proves advanced proficiency automating AWS workloads with CI/CD, IaC, and observability to maintain resilient, secure cloud platforms.',
    highlights: [
      'CI/CD automation & release orchestration',
      'Infrastructure as Code (CloudFormation, CDK, Terraform)',
      'Monitoring, logging & incident response',
      'Security and compliance automation',
    ],
    badge: {
      src: '/certifications/aws-devops-pro.svg',
      alt: 'AWS Certified DevOps Engineer Professional badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/97b48d60-0400-4303-b8c6-31522efc5ab6/linked_in_profile',
  },
  {
    title: 'AWS Certified Developer – Associate',
    provider: 'Amazon Web Services',
    issued: 'Issued 27 Jul 2023',
    validThrough: 'Valid through 17 Mar 2027',
    summary:
      'Recognizes the ability to build secure, scalable AWS applications leveraging serverless, container, and SDK-driven architectures.',
    highlights: [
      'Serverless architectures with Lambda & API Gateway',
      'AWS SDK, CLI, and developer tooling',
      'Secure application design & IAM',
      'Performance optimization & caching',
    ],
    badge: {
      src: '/certifications/aws-developer-assoc.svg',
      alt: 'AWS Certified Developer Associate badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/029d108e-6898-4435-ae55-d73dd99d40da/linked_in_profile',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    provider: 'Amazon Web Services',
    issued: 'Issued 13 Mar 2023',
    validThrough: 'Valid through 17 Mar 2027',
    summary:
      'Builds foundational AWS fluency covering architecture, security, compliance, and cost management for cross-functional stakeholders.',
    highlights: [
      'Cloud architectural principles',
      'Shared responsibility model & governance',
      'Security & compliance fundamentals',
      'Cost optimization & billing best practices',
    ],
    badge: {
      src: '/certifications/aws-cloud-practitioner.svg',
      alt: 'AWS Certified Cloud Practitioner badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/ddf6d91a-6ba3-4456-99c7-49168ce06914/linked_in_profile',
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CERTIFICATIONS.map((certification) => (
            <a
              key={certification.title}
              href={certification.verificationUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-between rounded-2xl border border-purple-500/10 bg-slate-900/60 p-6 text-center shadow-lg shadow-purple-900/10 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/30"
              aria-label={`View ${certification.title} credential`}
            >
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl bg-slate-950/70">
                <img
                  src={certification.badge.src}
                  alt={certification.badge.alt}
                  loading="lazy"
                  className="h-full w-full object-contain drop-shadow-[0_12px_18px_rgba(168,85,247,0.35)] transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex flex-col items-center gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300/80">
                  {certification.provider}
                </span>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {certification.title}
                </h3>
                {(certification.issued || certification.validThrough) && (
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-purple-200/70">
                    {[certification.issued, certification.validThrough].filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>

              {(certification.summary || certification.highlights?.length) && (
                <div className="sr-only">
                  {certification.summary && <p>{certification.summary}</p>}
                  {certification.highlights && certification.highlights.length > 0 && (
                    <ul>
                      {certification.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;