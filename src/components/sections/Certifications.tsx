import SectionTitle from '../ui/SectionTitle';

type Certification = {
  title: string;
  provider: string;
  issuedOn?: string;
  validThrough?: string;
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
    badge: {
      src: 'https://learn.microsoft.com/training/achievements/azure-ai-engineer-associate.svg',
      alt: 'Microsoft Certified Azure AI Engineer Associate badge',
    },
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/3fc79218913ba045?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    provider: 'Microsoft',
    validThrough: 'Valid through 04 Sep 2026',
    badge: {
      src: 'https://learn.microsoft.com/training/achievements/azure-data-scientist-associate.svg',
      alt: 'Microsoft Certified Azure Data Scientist Associate badge',
    },
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/gagansaini-2441/credentials/f70065ef3f358180?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'AWS Certified DevOps Engineer – Professional',
    provider: 'Amazon Web Services',
    validThrough: 'Valid through 17 Mar 2027',
    badge: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_DevOps-Engineer-Professional_badge.png',
      alt: 'AWS Certified DevOps Engineer Professional badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/97b48d60-0400-4303-b8c6-31522efc5ab6/linked_in_profile',
  },
  {
    title: 'AWS Certified Developer – Associate',
    provider: 'Amazon Web Services',
    issuedOn: 'Issued 27 Jul 2023',
    validThrough: 'Valid through 17 Mar 2027',
    badge: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Developer-Associate_badge.png',
      alt: 'AWS Certified Developer Associate badge',
    },
    verificationUrl:
      'https://www.credly.com/badges/029d108e-6898-4435-ae55-d73dd99d40da/linked_in_profile',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    provider: 'Amazon Web Services',
    issuedOn: 'Issued 13 Mar 2023',
    validThrough: 'Valid through 17 Mar 2027',
    badge: {
      src: 'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_badge.png',
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
                {(certification.issuedOn || certification.validThrough) && (
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-purple-200/70">
                    {[certification.issuedOn, certification.validThrough].filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
