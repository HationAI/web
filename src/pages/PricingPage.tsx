import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { PageRoute } from '../types';

interface PricingPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ navigate, onOpenCalendly }) => {
  // Interactive ROI Calculator State
  const [weeklyEmails, setWeeklyEmails] = useState<number>(250);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculations
  const minutesPerEmail = 3; // 3 minutes per manual WMS lookup & email reply
  const hoursPerMonth = Math.round((weeklyEmails * 4 * minutesPerEmail) / 60);
  const csRepLoadedRate = 32.5; // $32.50/hr fully loaded cost
  const manualLaborCostPerMonth = Math.round(hoursPerMonth * csRepLoadedRate);
  const hationMonthlyCost = 700;
  const netSavingsPerMonth = Math.max(0, manualLaborCostPerMonth - hationMonthlyCost);
  const annualSavings = netSavingsPerMonth * 12;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    price: '700',
    priceCurrency: 'USD',
    description: '$1,000 one-time setup fee + $700/month flat rate for unlimited WISMO email automation.',
    url: 'https://hation.xyz/pricing',
  };

  const features = [
    { title: 'Unlimited WISMO lookups & auto-replies', tooltip: 'No volume caps or peak season surcharges' },
    { title: 'WMS REST API integration', subtitle: 'ShipStation, Extensiv, SkuVault, and custom systems' },
    { title: 'CS Support Inbox sync', subtitle: 'Native integration with Gmail, Outlook, Zendesk, Gorgias' },
    { title: 'Human-in-the-loop draft review mode', tooltip: 'Approve AI-generated responses before sending' },
    { title: 'Smart escalation routing with order notes', subtitle: 'Seamlessly hands off complex tickets to human reps' },
    { title: 'Inventory sync mismatch alerts', subtitle: 'Real-time notifications sent directly to Slack' },
    { title: 'Dedicated onboarding engineer & 4-day go-live', subtitle: 'White-glove technical setup included' },
  ];

  const faqs = [
    {
      question: 'Is there a ticket limit on the $700/month flat fee?',
      answer: 'No. Hation AI provides unlimited order status queries and email auto-replies. Your pricing remains completely predictable regardless of Q4 peak season surges or sudden order volume spikes.'
    },
    {
      question: 'What is included in the $1,000 setup fee?',
      answer: 'The setup fee covers API key provisioning for your WMS (ShipStation, Extensiv, SkuVault), CS inbox OAuth integration, brand voice customization, and a comprehensive accuracy verification suite performed by a dedicated integration engineer.'
    },
    {
      question: 'How does $700/mo compare to hiring a CS rep?',
      answer: 'A full-time CS representative costs approximately $4,000/month in salary, taxes, and benefits. Hation AI handles over 50% of your ticket volume for less than 18% of that cost — with 24/7 coverage and zero turnover.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing & ROI Calculator | Hation AI"
        description="Transparent 3PL support automation pricing: $1,000 setup + $700/month flat fee. Calculate your CS payroll savings compared to hiring a representative."
        canonicalUrl="https://hation.xyz/pricing"
        jsonLd={jsonLd}
      />

      {/* Embedded High-Performance Micro-Styles to Guarantee SaaS Aesthetics */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes floatAccents {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 8s ease-in-out infinite;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: 3px solid #0f172a;
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.6);
          transition: transform 0.15s ease, background-color 0.15s ease;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: #fb923c;
        }
        .roi-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: 3px solid #0f172a;
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.6);
          transition: transform 0.15s ease, background-color 0.15s ease;
        }
        .roi-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          background: #fb923c;
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
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
              Simple, Predictable Pricing
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              One Plan. Unlimited Order Lookups.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                No Hidden Seat Fees.
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
              Decouple your customer support costs from order volume. Pay a fraction of a CS representative's wage.
            </p>
          </div>

          {/* Pricing Card Section */}
          <div className="max-w-2xl mx-auto mb-24 relative group">
            {/* Soft Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 pointer-events-none" />

            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-orange-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
              {/* Badge Anchor */}
              <div className="absolute top-0 right-8 transform -translate-y-0">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-mono font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-b-xl shadow-lg">
                  Built for 3PL Margins
                </span>
              </div>

              {/* Pricing Details */}
              <div className="text-center mb-10 pt-2">
                <h2 className="text-3xl text-white font-bold tracking-tight mb-2">3PL Growth Plan</h2>
                <p className="text-slate-400 text-sm">Everything you need to automate WISMO inboxes.</p>
                
                <div className="mt-8 flex items-baseline justify-center gap-1.5">
                  <span className="text-6xl font-mono font-black text-white tracking-tight">$700</span>
                  <span className="text-slate-400 font-medium text-lg">/ month</span>
                </div>
                
                <div className="inline-block mt-3 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-300 font-mono text-xs">
                  + $1,000 one-time onboarding &amp; WMS setup fee
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10 text-sm border-t border-slate-800/80 pt-8">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group/item">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                      ✓
                    </div>
                    <div className="flex-1">
                      <span className="text-slate-200 font-medium leading-snug">{item.title}</span>
                      {item.subtitle && (
                        <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
                      )}
                      {item.tooltip && (
                        <p className="text-xs text-slate-400/80 mt-0.5 italic">{item.tooltip}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={onOpenCalendly}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Book a 15-Minute Audit &amp; Start Setup</span>
                <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Cancel anytime. No long-term lock-in contract.
              </p>
            </div>
          </div>

          {/* Interactive ROI Calculator */}
          <div className="max-w-4xl mx-auto mb-24 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-lg shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl pointer-events-none rounded-full" />

            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                Interactive ROI Calculator
              </span>
              <h2 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">Calculate Your 3PL Labor Savings</h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
                Drag the slider to match your average weekly order status email volume.
              </p>
            </div>

            {/* Slider Control */}
            <div className="mb-12 max-w-2xl mx-auto bg-slate-950/60 border border-slate-800/80 p-6 sm:p-8 rounded-2xl">
              <div className="flex justify-between items-center text-sm font-mono mb-4">
                <span className="text-slate-300 font-medium">Inbound WISMO Emails / Week</span>
                <span className="bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-lg px-3 py-1 rounded-lg">
                  {weeklyEmails.toLocaleString()} emails
                </span>
              </div>
              
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={weeklyEmails}
                onChange={(e) => setWeeklyEmails(Number(e.target.value))}
                className="roi-slider w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
              />
              
              <div className="flex justify-between text-xs text-slate-400 mt-3 font-mono">
                <span>50/wk</span>
                <span>500/wk</span>
                <span>1,000/wk</span>
              </div>
            </div>

            {/* Calculation Output Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-950/50 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-colors">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">Hours Saved / Month</span>
                <div className="my-3">
                  <span className="block text-4xl font-mono font-bold text-white">{hoursPerMonth}</span>
                  <span className="text-xs text-slate-400 font-mono">hours</span>
                </div>
                <span className="text-xs text-slate-400/80 leading-normal">Freeing CS staff for high-value tasks</span>
              </div>

              <div className="bg-slate-950/50 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-colors">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">Manual Labor Cost</span>
                <div className="my-3">
                  <span className="block text-4xl font-mono font-bold text-rose-400">${manualLaborCostPerMonth.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 font-mono">per month</span>
                </div>
                <span className="text-xs text-slate-400/80 leading-normal">At $32.50/hr fully loaded CS wage</span>
              </div>

              <div className="bg-emerald-950/20 border-2 border-emerald-500/50 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-lg shadow-emerald-950/20">
                <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-mono font-bold px-2 py-0.5 rounded-bl-md uppercase">
                  Net Return
                </div>
                <span className="text-xs font-mono font-semibold uppercase text-emerald-400 tracking-wider">Net Savings / Month</span>
                <div className="my-3">
                  <span className="block text-4xl font-mono font-bold text-emerald-400">${netSavingsPerMonth.toLocaleString()}</span>
                  <span className="text-xs text-emerald-400/80 font-mono">saved every month</span>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg py-1 px-2">
                  <span className="text-xs text-emerald-300 font-bold block">${annualSavings.toLocaleString()} saved / year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing FAQ */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-slate-400 text-sm mt-2">Clear answers about pricing, integration, and performance limits.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-800 rounded-2xl bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-200 hover:border-slate-700"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full py-5 px-6 text-left font-medium text-white flex justify-between items-center gap-4 focus:outline-none focus:ring-1 focus:ring-orange-500/50 rounded-2xl"
                    >
                      <span className="text-base sm:text-lg text-slate-200 font-semibold">{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-orange-500/10 text-orange-400 border-orange-500/30' : ''}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 mt-1">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};