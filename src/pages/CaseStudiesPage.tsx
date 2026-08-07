import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { PageRoute } from '../types';

interface CaseStudiesPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ navigate, onOpenCalendly }) => {
  const caseStudies = [
    {
      type: 'Benchmark Report',
      title: '2026 3PL Customer Service Benchmark',
      description:
        'Analyzing average WISMO response times, ticket cost breakdowns, and seasonal ticket surges across 50 North American fulfillment centers.',
      date: 'Publishing Q3 2026',
      status: 'Research in progress',
      badgeColor: 'text-[var(--orange-tint)] bg-[var(--ink-800)] border-[var(--steel-700)]',
    },
    {
      type: 'Case Study Preview',
      title: 'Midwest Omni-Channel 3PL Pilot',
      description:
        'Deploying autonomous ShipStation email lookups across 12 e-commerce brand accounts to eliminate 30 hours of weekly support backlog.',
      date: 'Early Pilot Verification',
      status: 'Audit in progress',
      badgeColor: 'text-amber-400 bg-[var(--ink-800)] border-[var(--steel-700)]',
    },
    {
      type: 'Architecture Paper',
      title: 'WMS API Response Optimization',
      description:
        'Engineering sub-200ms REST queries against Extensiv 3PL Central databases to generate instant order status responses.',
      date: 'Engineering Whitepaper',
      status: 'Coming soon',
      badgeColor: 'text-sky-400 bg-[var(--ink-800)] border-[var(--steel-700)]',
    },
  ];

  return (
    <>
      <SEOHead
        title="3PL Case Studies & Benchmark Research | Hation AI"
        description="Explore upcoming 3PL customer service benchmarks, WISMO response time studies, and fulfillment automation reports from Hation AI."
        canonicalUrl="https://hation.xyz/case-studies"
      />

      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Top Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ink-900)] border border-[var(--steel-700)] text-xs font-mono text-[var(--orange-tint)] mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse" />
              Verified Performance Data
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              3PL Case Studies &amp; Research
            </h1>
            <p className="text-[var(--steel-300)] text-lg sm:text-xl font-normal leading-relaxed">
              We hold ourselves to a strict standard: we do not publish synthetic reviews or fabricated metrics. Verified customer case studies and benchmark reports are currently being compiled.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 sm:p-8 hover:border-[var(--steel-500)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md border text-[11px] font-mono font-medium ${item.badgeColor}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h2 className="text-xl text-white font-bold mb-3 tracking-tight group-hover:text-[var(--orange-tint)] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-[var(--steel-300)] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--steel-700)] flex justify-between items-center text-xs font-mono">
                  <span className="text-[var(--steel-400)]">{item.date}</span>
                  <span className="text-[var(--orange-tint)] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Banner */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[var(--orange)] opacity-10 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ink-900)] border border-[var(--steel-700)] text-xs font-mono text-[var(--orange-tint)] mb-4">
              Early Pilot Program
            </div>

            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-3 tracking-tight">
              Become a Featured Case Study Partner
            </h2>

            <p className="text-[var(--steel-300)] text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Join our priority 4-day onboarding program for ShipStation, Extensiv, or SkuVault operators and measure your team's exact time savings.
            </p>

            <button
              type="button"
              className="btn btn-primary px-8 py-3.5 text-sm font-semibold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-0.5"
              onClick={onOpenCalendly}
            >
              Apply for Pilot Program
            </button>
          </div>
        </div>
      </section>
    </>
  );
};