import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { PageRoute } from '../types';

interface AboutPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate, onOpenCalendly }) => {
  return (
    <>
      <SEOHead
        title="About Hation AI | Autonomous 3PL Customer Service"
        description="Learn why Hation AI was built specifically for 3PLs and fulfillment centers to automate WISMO email inquiries, eliminate manual WMS lookups, and support warehouse margins."
        canonicalUrl="https://hation.xyz/about"
      />

      <section className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="kicker">About Hation AI</span>
            <h1>Engineered for 3PL Margins &amp; Warehouse Precision.</h1>
            <p className="text-[var(--steel-300)] text-lg mt-4">
              We built Hation AI because customer support representatives should not spend their working hours copy-pasting tracking numbers out of a WMS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-[var(--ink-900)] border border-[var(--steel-700)] rounded-xl p-8">
              <span className="badge badge-green mb-4">Our Origin Story</span>
              <h2 className="text-2xl text-white font-bold mb-4">The Frustration That Started Hation</h2>
              <p className="text-[var(--steel-300)] mb-4">
                Working closely with logistics operations managers across North America, we noticed a recurring bottleneck: support teams were drowning in inbound emails asking the exact same question — <em>"Where is my order?"</em>
              </p>
              <p className="text-[var(--steel-300)] mb-4">
                Support agents spent 20+ hours every week logging into ShipStation, Extensiv, or SkuVault, searching order IDs, copying tracking links, and sending template replies. It was expensive, slow for brand clients, and miserable for staff.
              </p>
              <p className="text-[var(--steel-300)]">
                Generic AI chatbots failed because they didn't connect to WMS endpoints or understand warehouse status states. Hation AI was engineered to bridge that gap with direct API integrations and strict guardrails.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-[var(--ink-850)] border border-[var(--steel-700)] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">100% Data Accuracy First</h3>
                <p className="text-[var(--steel-400)] text-sm">
                  We never allow AI models to "guess" tracking codes or delivery dates. Every response is verified directly against your live WMS database before an email is sent.
                </p>
              </div>

              <div className="bg-[var(--ink-850)] border border-[var(--steel-700)] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Built Exclusively for 3PLs</h3>
                <p className="text-[var(--steel-400)] text-sm">
                  We don't build generic SaaS bots. Our entire platform is architected around 3PL workflows, multi-client brand routing, warehouse status codes, and fulfillment metrics.
                </p>
              </div>

              <div className="bg-[var(--ink-850)] border border-[var(--steel-700)] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Human Control &amp; Guardrails</h3>
                <p className="text-[var(--steel-400)] text-sm">
                  You decide where the handoff sits. Enable full auto-replies or starting with 1-click human agent approval mode until confidence is 100%.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[var(--ink-850)] to-[var(--ink-900)] border border-[var(--steel-700)] rounded-2xl p-10 text-center max-w-3xl mx-auto">
            <span className="kicker">Leadership &amp; Values</span>
            <h2 className="text-3xl text-white font-bold mb-4">Founded by Engineers &amp; Logistics Veterans</h2>
            <p className="text-[var(--steel-300)] mb-6">
              Hation AI is led by team members with backgrounds in systems engineering and logistics automation. We are dedicated to providing enterprise-grade reliability, transparent pricing, and rapid 4-day onboarding.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button type="button" className="btn btn-primary" onClick={onOpenCalendly}>
                Book a Workflow Audit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/security')}
              >
                Review Security &amp; Data Policies
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
