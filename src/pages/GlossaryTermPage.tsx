import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { glossaryTerms } from '../data/glossaryData';
import { PageRoute } from '../types';

interface GlossaryTermPageProps {
  termSlug: string;
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const GlossaryTermPage: React.FC<GlossaryTermPageProps> = ({
  termSlug,
  navigate,
  onOpenCalendly,
}) => {
  const term = glossaryTerms[termSlug];

  if (!term) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
        <div className="container max-w-md text-center py-12 px-6 bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[var(--ink-800)] border border-[var(--steel-700)] text-[var(--orange-tint)] flex items-center justify-center mx-auto mb-4 font-mono text-xl">
            404
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Term Not Found</h1>
          <p className="text-sm text-[var(--steel-300)] mb-6">
            The glossary term you are looking for could not be found or has been updated.
          </p>
          <button
            type="button"
            className="btn btn-primary px-6 py-2.5 text-xs font-semibold rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all"
            onClick={() => navigate('/glossary')}
          >
            ← Back to Glossary
          </button>
        </div>
      </section>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `https://hation.xyz/glossary/${term.slug}/#term`,
    name: term.abbreviation,
    alternateName: term.title,
    description: term.shortDefinition,
    inDefinedTermSet: 'https://hation.xyz/glossary/#termset',
  };

  return (
    <>
      <SEOHead
        title={`What is ${term.abbreviation} (${term.title})? | Hation AI Glossary`}
        description={term.shortDefinition}
        canonicalUrl={`https://hation.xyz/glossary/${term.slug}`}
        jsonLd={jsonLd}
      />

      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Top Radial Ambient Background Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(249,115,22,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Navigation Bar / Breadcrumbs */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--steel-700)]/50">
            <nav className="text-xs font-mono text-[var(--steel-400)] flex items-center gap-2">
              <a
                href="/glossary"
                className="hover:text-white transition-colors flex items-center gap-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/glossary');
                }}
              >
                <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
                <span>Glossary</span>
              </a>
              <span className="text-[var(--steel-600)]">/</span>
              <span className="text-[var(--orange-tint)] font-medium">{term.abbreviation}</span>
            </nav>

            <button
              type="button"
              onClick={() => navigate('/glossary')}
              className="text-xs font-mono text-[var(--steel-400)] hover:text-white transition-colors"
            >
              All Terms
            </button>
          </div>

          {/* Header Block */}
          <header className="mb-12">
            <div className="inline-block px-2.5 py-1 rounded-md bg-[var(--ink-900)] border border-[var(--steel-700)] text-[11px] font-mono text-[var(--orange-tint)] font-semibold mb-4 shadow-sm">
              {term.abbreviation}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              {term.title}
            </h1>

            {/* Featured Definition Box */}
            <div className="relative overflow-hidden bg-[var(--ink-900)] border border-[var(--steel-700)] p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--orange)]" />
              <p className="text-lg sm:text-xl text-[var(--steel-300)] leading-relaxed font-normal">
                {term.shortDefinition}
              </p>
            </div>
          </header>

          {/* Main Content Sections */}
          <div className="space-y-12 mb-16">
            
            {/* Full Definition */}
            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--orange)]" />
                Full Definition
              </h2>
              <p className="text-[var(--steel-300)] text-base sm:text-lg leading-relaxed">
                {term.fullDefinition}
              </p>
            </section>

            {/* Why It Matters Callout Card */}
            <section className="bg-gradient-to-r from-[var(--ink-900)] to-[var(--ink-850)] border-l-4 border-[var(--orange)] border-y border-r border-[var(--steel-700)] p-6 sm:p-8 rounded-r-2xl shadow-md">
              <h2 className="text-xl sm:text-2xl text-white font-bold tracking-tight mb-3">
                Why It Matters for 3PL Operators
              </h2>
              <p className="text-[var(--steel-300)] text-base leading-relaxed">
                {term.whyItMatters}
              </p>
            </section>

            {/* Financial & Labor Impact */}
            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--orange)]" />
                Financial &amp; Labor Impact
              </h2>
              <p className="text-[var(--steel-300)] text-base sm:text-lg leading-relaxed">
                {term.financialImpact}
              </p>
            </section>

            {/* How Hation AI Automates Section */}
            <section className="bg-[var(--ink-900)] border border-[var(--steel-700)] p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[var(--ink-800)] border border-[var(--steel-700)] text-[11px] font-mono text-[var(--orange-tint)] mb-3">
                Automated Workflow
              </div>
              <h2 className="text-xl sm:text-2xl text-white font-bold tracking-tight mb-3">
                How Hation AI Automates {term.abbreviation}
              </h2>
              <p className="text-[var(--steel-300)] text-base leading-relaxed">
                {term.automationApproach}
              </p>
            </section>

          </div>

          {/* Related Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-[var(--steel-700)] mb-16">
            
            {/* Related Terms Box */}
            <div className="bg-[var(--ink-900)] border border-[var(--steel-700)] p-6 rounded-2xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--orange-tint)] mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Related Glossary Terms
              </h3>
              <ul className="space-y-2.5 text-sm">
                {term.relatedTerms.map((rt) => (
                  <li key={rt.slug}>
                    <a
                      href={`/glossary/${rt.slug}`}
                      className="text-[var(--steel-300)] hover:text-white transition-colors font-medium flex items-center gap-2 group"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/glossary/${rt.slug}`);
                      }}
                    >
                      <span className="text-[var(--steel-500)] group-hover:text-[var(--orange-tint)] transition-colors">→</span>
                      <span>{rt.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatible WMS Integrations Box */}
            <div className="bg-[var(--ink-900)] border border-[var(--steel-700)] p-6 rounded-2xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--orange-tint)] mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 4 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Compatible WMS Integrations
              </h3>
              <ul className="space-y-2.5 text-sm">
                {term.relatedIntegrations.map((ri) => (
                  <li key={ri.slug}>
                    <a
                      href={`/integrations/${ri.slug}`}
                      className="text-[var(--steel-300)] hover:text-white transition-colors font-medium flex items-center gap-2 group"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/integrations/${ri.slug}`);
                      }}
                    >
                      <span className="text-[var(--steel-500)] group-hover:text-[var(--orange-tint)] transition-colors">→</span>
                      <span>{ri.name} Integration</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Call-to-Action Callout Box */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            {/* Ambient Lighting in CTA */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[var(--orange)] opacity-10 blur-3xl pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-3 tracking-tight">
              Ready to Eliminate Manual {term.abbreviation} Inquiries?
            </h2>
            <p className="text-[var(--steel-300)] text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Book a 15-minute workflow audit to see how Hation AI resolves order status emails in seconds.
            </p>
            <button
              type="button"
              className="btn btn-primary px-8 py-3.5 text-sm font-semibold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-0.5"
              onClick={onOpenCalendly}
            >
              Book an Audit
            </button>
          </div>

        </div>
      </section>
    </>
  );
};