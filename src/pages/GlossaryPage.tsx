import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { glossaryTerms } from '../data/glossaryData';
import { PageRoute } from '../types';

interface GlossaryPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const GlossaryPage: React.FC<GlossaryPageProps> = ({ navigate, onOpenCalendly }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const termsList = Object.values(glossaryTerms);
  const filteredTerms = termsList.filter(
    (term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.shortDefinition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://hation.xyz/glossary/#termset',
    name: 'Hation AI Logistics Glossary',
    description: 'Essential 3PL, fulfillment, and customer service automation terminology for warehouse operators.',
    hasDefinedTerm: termsList.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.abbreviation,
      alternateName: t.title,
      description: t.shortDefinition,
    })),
  };

  return (
    <>
      <SEOHead
        title="Logistics & 3PL Support Glossary | Hation AI"
        description="Definitions of essential 3PL, WMS, and order fulfillment terms: WISMO, 3PL, WMS, TMS, and automated customer service concepts."
        canonicalUrl="https://hation.xyz/glossary"
        jsonLd={jsonLd}
      />

      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Top Ambient Radial Light Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Hero Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ink-900)] border border-[var(--steel-700)] text-xs font-mono text-[var(--orange-tint)] mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse" />
              3PL Logistics Knowledge Base
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              3PL &amp; Fulfillment Glossary
            </h1>
            <p className="text-[var(--steel-300)] text-lg sm:text-xl font-normal leading-relaxed">
              Clear, citable definitions of core logistics, warehouse management, and customer support automation terms.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto mb-14">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search terms (e.g., WISMO, WMS, 3PL)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-xl py-3.5 pl-11 pr-10 text-white placeholder-[var(--steel-400)] focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 outline-none font-sans text-sm transition-all shadow-md group-hover:border-[var(--steel-500)]"
              />
              <svg
                className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--steel-400)] pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[var(--steel-400)] hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Term Cards Grid */}
          {filteredTerms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {filteredTerms.map((term) => (
                <div
                  key={term.slug}
                  onClick={() => navigate(`/glossary/${term.slug}`)}
                  className="group relative bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 sm:p-8 hover:border-[var(--steel-500)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Header: Abbreviation & CTA */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[var(--ink-800)] border border-[var(--steel-700)] text-[11px] font-mono text-[var(--orange-tint)] font-semibold">
                        {term.abbreviation}
                      </span>
                      <span className="text-xs font-mono text-[var(--orange-tint)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View full term
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>

                    {/* Title & Definition */}
                    <h2 className="text-xl text-white font-bold mb-3 tracking-tight group-hover:text-[var(--orange-tint)] transition-colors">
                      {term.title}
                    </h2>
                    <p className="text-[var(--steel-300)] text-sm leading-relaxed mb-6 line-clamp-3">
                      {term.shortDefinition}
                    </p>
                  </div>

                  {/* Related Terms Footer */}
                  <div className="pt-4 border-t border-[var(--steel-700)] flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--steel-400)]">
                    <span className="text-[var(--steel-500)]">Related:</span>
                    {term.relatedTerms.map((rt) => (
                      <span
                        key={rt.slug}
                        className="text-[var(--steel-300)] bg-[var(--ink-800)] px-2 py-0.5 rounded border border-[var(--steel-700)] text-[11px] hover:border-[var(--steel-500)] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/glossary/${rt.slug}`);
                        }}
                      >
                        {rt.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl mb-20 max-w-xl mx-auto shadow-xl">
              <p className="text-[var(--steel-300)] text-base font-medium mb-1">
                No matching terminology found
              </p>
              <p className="text-xs text-[var(--steel-400)]">
                Try adjusting your search term or browse all terms.
              </p>
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="mt-5 text-xs font-mono text-[var(--orange-tint)] hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}

          {/* Call-to-Action Callout Box */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            {/* Ambient Lighting in CTA */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[var(--orange)] opacity-10 blur-3xl pointer-events-none" />

            <h3 className="text-2xl sm:text-3xl text-white font-bold mb-3 tracking-tight">
              Want to Automate Your WISMO Tickets?
            </h3>
            <p className="text-[var(--steel-300)] text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Connect your WMS API to Hation AI and start resolving order status emails in seconds.
            </p>
            <button
              type="button"
              className="btn btn-primary px-8 py-3.5 text-sm font-semibold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-0.5"
              onClick={onOpenCalendly}
            >
              Book a Workflow Audit
            </button>
          </div>

        </div>
      </section>
    </>
  );
};