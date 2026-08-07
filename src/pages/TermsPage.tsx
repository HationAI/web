import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { PageRoute } from '../types';

interface TermsPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Hation AI"
        description="Terms of Service for Hation AI: user obligations, service levels, intellectual property, and limitations of liability."
        canonicalUrl="https://hation.xyz/terms"
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
              Terms of Service
            </h1>

            <p className="text-slate-400 text-xs sm:text-sm font-mono pt-1">
              Last updated: <span className="text-slate-300">August 4, 2026</span>
            </p>
          </div>

          {/* Terms Document Card */}
          <div className="bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl pointer-events-none rounded-full" />

            <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
              
              {/* Preamble */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed border-b border-slate-800/80 pb-6">
                These Terms of Service govern your access to and use of the Hation AI website and automated email support service. By booking an audit or connecting your WMS to Hation AI, you agree to these Terms.
              </p>

              {/* Section 1 */}
              <section className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    01
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Use of the Service
                  </h2>
                </div>
                <p className="text-slate-400 pl-10">
                  Hation AI grants you a non-exclusive, non-transferable license to access our platform for automating customer order inquiries. You agree to use the service only for lawful logistics operations.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    02
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    WMS Credentials &amp; Permissions
                  </h2>
                </div>
                <p className="text-slate-400 pl-10">
                  You are responsible for maintaining the security of your API keys and inbox OAuth connections. You agree to provide read-only WMS credentials as directed during onboarding[cite: 4].
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    03
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Fees &amp; Billing
                  </h2>
                </div>
                <p className="text-slate-400 pl-10">
                  Services are billed on a monthly subscription rate ($700/mo) following payment of the initial $1,000 setup fee[cite: 4]. Subscriptions may be canceled at any time prior to the next billing cycle[cite: 4].
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    04
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Limitation of Liability
                  </h2>
                </div>
                <p className="text-slate-400 pl-10">
                  To the fullest extent permitted by law, Hation AI shall not be liable for any indirect, incidental, or consequential damages resulting from carrier shipping delays or third-party WMS downtime[cite: 4].
                </p>
              </section>

              {/* Contact Footer */}
              <div className="pt-6 border-t border-slate-800/80">
                <p className="text-slate-400 text-sm">
                  Questions? Email{' '}
                  <a 
                    href="mailto:legal@hation.xyz" 
                    className="text-orange-400 hover:text-orange-300 font-medium underline underline-offset-4 transition-colors"
                  >
                    legal@hation.xyz
                  </a>[cite: 4].
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};