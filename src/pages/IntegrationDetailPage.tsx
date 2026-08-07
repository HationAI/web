import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { integrationsData } from '../data/integrationsData';
import { PageRoute } from '../types';

interface IntegrationDetailPageProps {
  integrationSlug: string;
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const IntegrationDetailPage: React.FC<IntegrationDetailPageProps> = ({
  integrationSlug,
  navigate,
  onOpenCalendly,
}) => {
  const item = integrationsData[integrationSlug];

  if (!item) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
        <div className="container max-w-md text-center py-12 px-6 bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[var(--ink-800)] border border-[var(--steel-700)] text-[var(--orange-tint)] flex items-center justify-center mx-auto mb-4 font-mono text-xl">
            404
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Integration Not Found</h1>
          <p className="text-sm text-[var(--steel-300)] mb-6">
            The integration requested could not be found or has been renamed.
          </p>
          <button
            type="button"
            className="btn btn-primary px-6 py-2.5 text-xs font-semibold rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all"
            onClick={() => navigate('/integrations')}
          >
            ← Back to All Integrations
          </button>
        </div>
      </section>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Hation AI ${item.name} Integration`,
    serviceType: `${item.name} WISMO Email Automation`,
    provider: {
      '@type': 'Organization',
      name: 'Hation AI',
      url: 'https://hation.xyz',
    },
    description: item.description,
  };

  return (
    <>
      <SEOHead
        title={`${item.name} WISMO Email Automation | Hation AI`}
        description={item.description}
        canonicalUrl={`https://hation.xyz/integrations/${item.slug}`}
        jsonLd={jsonLd}
      />

      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Top Ambient Light Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(249,115,22,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Top Bar Navigation & Actions */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--steel-700)]/50">
            <nav className="text-xs font-mono text-[var(--steel-400)] flex items-center gap-2">
              <a
                href="/integrations"
                className="hover:text-white transition-colors flex items-center gap-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/integrations');
                }}
              >
                <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
                <span>Integrations</span>
              </a>
              <span className="text-[var(--steel-600)]">/</span>
              <span className="text-[var(--orange-tint)] font-medium">{item.name}</span>
            </nav>

            <button
              type="button"
              onClick={() => navigate('/integrations')}
              className="text-xs font-mono text-[var(--steel-400)] hover:text-white transition-colors"
            >
              All Integrations
            </button>
          </div>

          {/* Header Section */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ink-900)] border border-[var(--steel-700)] text-xs font-mono text-emerald-400 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {item.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              {item.heroHeadline}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--steel-300)] leading-relaxed font-normal">
              {item.description}
            </p>
          </header>

          {/* API Capabilities Card */}
          <div className="bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 sm:p-8 mb-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--orange)] opacity-5 blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--orange-tint)] mb-4 uppercase tracking-wider">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Direct API Integration
            </div>

            <h2 className="text-xl sm:text-2xl text-white font-bold tracking-tight mb-6">
              Supported {item.name} Capabilities
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--steel-300)]">
              {item.apiCapabilities.map((cap, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-[var(--ink-850)] border border-[var(--steel-700)]/60 rounded-xl p-3.5 shadow-sm hover:border-[var(--steel-500)] transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span className="leading-snug">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Setup Steps Section */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--orange)]" />
              4-Day Onboarding Workflow
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.howItWorksSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="group bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 hover:border-[var(--steel-500)] transition-all duration-300 hover:-translate-y-0.5 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-[var(--ink-800)] border border-[var(--steel-700)] text-[11px] font-mono text-[var(--orange-tint)] font-bold mb-3">
                      STEP 0{idx + 1}
                    </div>
                    <h3 className="text-lg text-white font-bold mb-2 tracking-tight group-hover:text-[var(--orange-tint)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--steel-300)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--orange)]" />
              Integration FAQ
            </h2>

            <div className="space-y-4">
              {item.faq.map((f, idx) => (
                <details
                  key={idx}
                  className="group bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 transition-all duration-200 open:border-[var(--steel-500)] open:shadow-lg"
                >
                  <summary className="flex items-center justify-between text-base font-semibold text-white cursor-pointer list-none select-none">
                    <span>{f.question}</span>
                    <span className="ml-4 w-6 h-6 rounded-full bg-[var(--ink-800)] border border-[var(--steel-700)] flex items-center justify-center text-[var(--steel-400)] group-open:rotate-180 group-open:text-white transition-all duration-200 shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-[var(--steel-300)] leading-relaxed pt-3 border-t border-[var(--steel-700)]/60">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Call-to-Action Callout Box */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            {/* Ambient Lighting in CTA */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[var(--orange)] opacity-10 blur-3xl pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-3 tracking-tight">
              Automate {item.name} Order Lookups
            </h2>
            <p className="text-[var(--steel-300)] text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Connect your {item.name} account and start sending autonomous order status replies in 4 days.
            </p>
            <button
              type="button"
              className="btn btn-primary px-8 py-3.5 text-sm font-semibold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-0.5"
              onClick={onOpenCalendly}
            >
              Book a 15-Min Integration Audit
            </button>
          </div>

        </div>
      </section>
    </>
  );
};