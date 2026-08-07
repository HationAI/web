import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { PageRoute } from '../types';

interface SecurityPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
  onOpenPrivacy: () => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ navigate, onOpenCalendly, onOpenPrivacy }) => {
  const pipelineSteps = [
    {
      step: "1",
      title: "Inbound Email",
      description: "Encrypted via TLS 1.3. Order # or PO extracted securely.",
      accent: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      step: "2",
      title: "WMS API Query",
      description: "Read-only REST API query sent to ShipStation/Extensiv/SkuVault.",
      accent: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      step: "3",
      title: "Response Generation",
      description: "Format tracking status & carrier ETA. Zero model retraining.",
      accent: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      )
    },
    {
      step: "4",
      title: "Reply or Handoff",
      description: "Automated reply sent or escalated to human rep with notes.",
      accent: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      )
    }
  ];

  const securityCards = [
    {
      title: "Read-Only WMS API Scope",
      description: "Hation AI operates strictly on minimal read-only permissions required for order lookup. We never request permission to modify orders, alter inventory balances, or cancel shipments in your WMS.",
      positives: ["Read orders by ID & PO number", "Read shipment status & tracking links"],
      negatives: ["NO order edit or cancellation permissions"],
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      )
    },
    {
      title: "Zero AI Model Retraining",
      description: "Your email content, customer identities, and warehouse order history are never used to train public or foundational AI models. Inference calls run through isolated, SOC 2 Type II compliant API endpoints.",
      positives: ["Zero data retention for model training", "Isolated client tenant processing", "Automatic PII redactions where applicable"],
      negatives: [],
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      )
    },
    {
      title: "Encryption in Transit & At Rest",
      description: "All data transmission between your email provider, your WMS API, and Hation AI is encrypted using TLS 1.3 protocols. Stored data is secured with AES-256 military-grade encryption.",
      positives: ["TLS 1.3 transport encryption", "AES-256 storage encryption", "OAuth 2.0 inbox authentication"],
      negatives: [],
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h3.006a2.25 2.25 0 001.908-1.058l1.214-1.942M2.41 9h19.18M12 2.25v6" />
        </svg>
      )
    },
    {
      title: "Auditable Subprocessors & Hosting",
      description: "Hation AI infrastructure is hosted on Google Cloud Platform (GCP) in tier-4 data centers within North America, featuring multi-region redundancy and continuous vulnerability monitoring.",
      positives: ["GCP North America Hosting", "SOC 2 Type II aligned subprocessors", "Continuous uptime monitoring"],
      negatives: [],
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5h11.25a4.5 4.5 0 003.09-7.78 4.5 4.5 0 00-6.42-6.42A4.5 4.5 0 007.5 7.5a4.5 4.5 0 00-5.25 7.5z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <SEOHead
        title="Security & Data Handling | Hation AI"
        description="Comprehensive security documentation for 3PL operations & IT leaders: data flow architecture, encryption standards, WMS read-only permissions, and compliance policies."
        canonicalUrl="https://hation.xyz/security"
      />

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 8s ease-in-out infinite;
        }
      `}</style>

      <section className="relative pt-28 pb-24 overflow-hidden bg-slate-950 text-slate-100 min-h-screen">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse-glow" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Security &amp; Compliance
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Enterprise Data Security Built for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                3PL Trust.
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
              We treat your warehouse data and client email threads with the highest standards of confidentiality, isolation, and cryptographic security.
            </p>
          </div>

          {/* Interactive Data Flow Architecture Component */}
          <div className="max-w-5xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-2xl mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 blur-3xl pointer-events-none rounded-full" />

            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
                End-to-End WISMO Data Flow Pipeline
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                How Hation AI safely processes incoming customer emails and queries your WMS API.
              </p>
            </div>

            {/* Step Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {pipelineSteps.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 group relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold ${item.accent}`}>
                        {item.step}
                      </div>
                      <div className="text-slate-500 group-hover:text-slate-300 transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-white text-base font-bold mb-2 tracking-tight group-hover:text-orange-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Horizontal Flow Indicator for larger screens */}
                  {idx < pipelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Security Guarantees Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {securityCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-md shadow-xl hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{card.title}</h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-5 space-y-2 font-mono text-xs">
                  {card.positives.map((pos, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-slate-300">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{pos}</span>
                    </div>
                  ))}
                  {card.negatives.map((neg, nIdx) => (
                    <div key={nIdx} className="flex items-center gap-2.5 text-rose-400">
                      <span className="font-bold">✗</span>
                      <span>{neg}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Box */}
          <div className="max-w-3xl mx-auto bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl text-white font-bold tracking-tight mb-3">
                Need Custom Security Diligence?
              </h2>
              
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Our engineering team can complete your IT security questionnaire or join a technical diligence review call.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenCalendly}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                >
                  Schedule IT Security Call
                </button>

                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-all duration-200 cursor-pointer"
                >
                  Read Privacy Policy
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};