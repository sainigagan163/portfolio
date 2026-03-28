import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';

type Certification = {
  title: string;
  provider: string;
  validThrough: string;
  badge: {
    src: string;
    alt: string;
  };
  verificationUrl: string;
  highlights: string[];
};

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Azure AI Engineer Associate',
    provider: 'Microsoft',
    validThrough: 'Sep 2026',
    highlights: ['Azure AI services', 'Azure OpenAI', 'Responsible AI'],
    badge: {
      src: `${import.meta.env.BASE_URL}certifications/azure-ai-engineer.png`,
      alt: 'Microsoft Certified Azure AI Engineer Associate badge',
    },
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/3fc79218913ba045?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Azure Data Scientist Associate',
    provider: 'Microsoft',
    validThrough: 'Sep 2026',
    highlights: ['Azure ML pipelines', 'Model deployment', 'Feature engineering'],
    badge: {
      src: `${import.meta.env.BASE_URL}certifications/azure-data-scientist.png`,
      alt: 'Microsoft Certified Azure Data Scientist Associate badge',
    },
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/f70065ef3f358180?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'AWS DevOps Engineer — Professional',
    provider: 'Amazon Web Services',
    validThrough: 'Mar 2027',
    highlights: ['CI/CD automation', 'Infrastructure as Code', 'Monitoring & observability'],
    badge: {
      src: `${import.meta.env.BASE_URL}certifications/aws-devops-pro.png`,
      alt: 'AWS Certified DevOps Engineer Professional badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/97b48d60-0400-4303-b8c6-31522efc5ab6/linked_in_profile',
  },
  {
    title: 'AWS Developer — Associate',
    provider: 'Amazon Web Services',
    validThrough: 'Mar 2027',
    highlights: ['Serverless architectures', 'AWS SDK & tooling', 'Secure app design'],
    badge: {
      src: `${import.meta.env.BASE_URL}certifications/aws-developer-assoc.png`,
      alt: 'AWS Certified Developer Associate badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/029d108e-6898-4435-ae55-d73dd99d40da/linked_in_profile',
  },
  {
    title: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services',
    validThrough: 'Mar 2027',
    highlights: ['Cloud architecture', 'Security & compliance', 'Cost optimisation'],
    badge: {
      src: `${import.meta.env.BASE_URL}certifications/aws-cloud-practitioner.png`,
      alt: 'AWS Certified Cloud Practitioner badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/ddf6d91a-6ba3-4456-99c7-49168ce06914/linked_in_profile',
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="bg-slate-900/70 py-20">
      <div ref={ref} className={`mx-auto max-w-6xl px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="Certifications"
          subtitle="5 active credentials — all independently verifiable"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CERTIFICATIONS.map((cert) => (
            <a
              key={cert.title}
              href={cert.verificationUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-5 text-center shadow-lg shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/60 hover:shadow-xl hover:shadow-emerald-900/30"
              aria-label={`Verify ${cert.title} credential`}
            >
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl bg-slate-950/70 mb-3">
                <img
                  src={cert.badge.src}
                  alt={cert.badge.alt}
                  loading="lazy"
                  className="h-full w-full object-contain drop-shadow-[0_12px_18px_rgba(16,185,129,0.35)] transition duration-500 group-hover:scale-110"
                />
              </div>

              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-200/80">
                {cert.provider}
              </span>
              <h3 className="text-sm font-semibold text-white mt-1 mb-1">
                {cert.title}
              </h3>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-200/60 mb-3">
                Valid through {cert.validThrough}
              </p>

              {/* Verification link — visible text for crawlers */}
              <span className="flex items-center gap-1 text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                <ExternalLink className="w-3 h-3" />
                Verify credential
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
