import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { integrationsData } from '../data/integrationsData';
import { PageRoute } from '../types';

interface IntegrationsPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const IntegrationsPage: React.FC<IntegrationsPageProps> = ({ navigate, onOpenCalendly }) => {
  const integrationsList = Object.values(integrationsData);

  return (
    <>
      <SEOHead
        title="WMS & OMS Integrations | Hation AI"
        description="Connect Hation AI to ShipStation, Extensiv 3PL Central, and SkuVault APIs to automate WISMO email resolution with real-time order status lookups."
        canonicalUrl="https://hation.xyz/integrations"
      />

      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Top Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Hero Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ink-900)] border border-[var(--steel-700)] text-xs font-mono text-[var(--orange-tint)] mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] animate-pulse" />
              Direct WMS API Integration
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              WMS &amp; OMS Integrations
            </h1>
            <p className="text-[var(--steel-300)] text-lg sm:text-xl font-normal leading-relaxed">
              Hation AI connects directly to your warehouse management and order management APIs to answer WISMO emails with live order data — in under 200ms.
            </p>
          </div>

          {/* Integration Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {integrationsList.map((item) => (
              <div
                key={item.slug}
                onClick={() => navigate(`/integrations/${item.slug}`)}
                className="group relative bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-6 sm:p-7 hover:border-[var(--steel-500)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-4">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[var(--ink-800)] border border-[var(--steel-700)] text-[11px] text-[var(--orange-tint)] font-semibold">
                      {item.badge}
                    </span>
                    <span className="text-[var(--steel-400)]">{item.category}</span>
                  </div>
                  <h2 className="text-xl text-white font-bold mb-3 tracking-tight group-hover:text-[var(--orange-tint)] transition-colors leading-snug">
                    {item.name}
                  </h2>
                  <p className="text-[var(--steel-300)] text-sm mb-6 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[var(--steel-700)] flex justify-between items-center text-xs">
                    <span className="text-[var(--steel-400)] font-medium">{item.setupTime}</span>
                    <span className="text-[var(--orange-tint)] font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View integration →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Box */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[var(--orange)] opacity-10 blur-3xl pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl text-white font-bold mb-3 tracking-tight">
              Don't See Your WMS?
            </h3>
            <p className="text-[var(--steel-300)] text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Hation AI supports custom REST API integrations. Schedule a 15-minute audit to map your WMS endpoints and go live in 4 days.
            </p>
            <button
              type="button"
              className="btn btn-primary px-8 py-3.5 text-sm font-semibold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-0.5"
              onClick={onOpenCalendly}
            >
              Book an Integration Audit
            </button>
          </div>

        </div>
      </section>
    </>
  );
};
