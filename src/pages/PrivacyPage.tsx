import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { PageRoute } from '../types';

interface PrivacyPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Hation AI"
        description="Privacy Policy for Hation AI: details on information collection, data security, WMS permissions, and usage rules."
        canonicalUrl="https://hation.xyz/privacy"
      />

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 8s ease-in-out infinite;
        }
      `}</style>

      <section className="relative pt-28 pb-24 overflow-hidden bg-slate-950 text-slate-100 min-h-screen">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse-glow" />
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
          
          {/* Header Section */}
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Legal &amp; Compliance
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Privacy Policy
            </h1>

            <p className="text-slate-400 text-xs sm:text-sm font-mono pt-1">
              Last updated: <span className="text-slate-300">August 4, 2026</span>
            </p>
          </div>

          {/* Privacy Policy Document Card */}
          <div className="bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl pointer-events-none rounded-full" />

            <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
              
              {/* Introduction */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed border-b border-slate-800/80 pb-6">
                This Privacy Policy explains how Hation AI ("we", "us", or "our") collects, uses, and protects your information when you visit our website at <a href="https://hation.xyz" className="text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-colors">hation.xyz</a> or use our automated email response services.
              </p>

              {/* Section 1 */}
              <section className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    01
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Information We Collect
                  </h2>
                </div>
                <p className="text-slate-400 pl-10">
                  We collect information you provide directly — such as your name, work email address, 3PL company name, and WMS software details when you book a consultation or onboard onto our platform.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    02
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    How We Use Order &amp; Email Data
                  </h2>
                </div>
                
                <div className="pl-10 space-y-4 text-slate-400">
                  <p>
                    When integrated with your customer service inbox and WMS API (ShipStation, Extensiv, or SkuVault), Hation AI processes inbound email text solely to extract order identifiers, query order tracking telemetry, and format response messages.
                  </p>
                  
                  {/* Highlight Callout Box */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 my-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">Zero Model Retraining Guarantee</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Your customer email threads, order histories, and client brand identities are <strong className="text-slate-200 uppercase tracking-wide">never</strong> sold or used to train public generative AI models[cite: 3].
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    03
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Data Security &amp; Encryption
                  </h2>
                </div>
                <p className="text-slate-400 pl-10">
                  We employ TLS 1.3 transport encryption for all data in transit and AES-256 encryption for data at rest[cite: 3]. Access to WMS APIs is managed via scoped OAuth keys with read-only permissions[cite: 3].
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    04
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Your Data Rights
                  </h2>
                </div>
                <p className="text-slate-400 pl-10">
                  You may request access to, correction of, or complete deletion of your account and integration data at any time by emailing{' '}
                  <a 
                    href="mailto:privacy@hation.xyz" 
                    className="text-orange-400 hover:text-orange-300 font-medium underline underline-offset-4 transition-colors"
                  >
                    privacy@hation.xyz
                  </a>[cite: 3].
                </p>
              </section>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};