import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { PageRoute } from '../types';

interface NotFoundPageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate, onOpenCalendly }) => {
  return (
    <>
      <SEOHead
        title="Order #404 - Page Not Found | Hation AI"
        description="The requested page URL could not be located in our WMS. Return to Hation AI homepage or explore integrations."
      />

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 8s ease-in-out infinite;
        }
        
        /* Barcode pattern generation */
        .barcode-pattern {
          background-image: repeating-linear-gradient(
            90deg,
            #cbd5e1 0px,
            #cbd5e1 2px,
            transparent 2px,
            transparent 4px,
            #cbd5e1 4px,
            #cbd5e1 7px,
            transparent 7px,
            transparent 9px,
            #cbd5e1 9px,
            #cbd5e1 10px
          );
        }
      `}</style>

      <section className="relative pt-28 pb-24 overflow-hidden bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-rose-500/10 via-orange-500/5 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse-glow" />
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-xl text-center">
          
          {/* Manifest Ticket Styled 404 Visual */}
          <div className="mb-10 max-w-md mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500 pointer-events-none" />

            {/* Ticket Outer Container */}
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Ticket Head */}
              <div className="bg-slate-950/80 p-5 border-b border-slate-800 flex items-center justify-between">
                <div className="barcode-pattern h-8 w-28 opacity-80 rounded-sm" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-[11px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                  WMS Lookup Exception
                </span>
              </div>

              {/* Ticket Tear Perforated Line */}
              <div className="relative h-4 bg-slate-900 flex items-center justify-between px-2 overflow-hidden">
                <div className="w-4 h-4 rounded-full bg-slate-950 -ml-4 border border-slate-800" />
                <div className="w-full border-b-2 border-dashed border-slate-800/80 mx-2" />
                <div className="w-4 h-4 rounded-full bg-slate-950 -mr-4 border border-slate-800" />
              </div>

              {/* Ticket Body */}
              <div className="p-6 text-left space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800/60 font-mono text-xs">
                  <span className="text-slate-400 font-medium">STATUS</span>
                  <span className="text-rose-400 font-bold bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded">
                    404 NOT FOUND
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-800/60 font-mono text-xs">
                  <span className="text-slate-400 font-medium">URI</span>
                  <span className="text-slate-200 font-semibold truncate max-w-[200px] bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {typeof window !== 'undefined' ? window.location.pathname : '/unknown'}
                  </span>
                </div>

                {/* Ticket Terminal Log */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 font-mono text-xs space-y-1.5">
                  <p className="text-slate-400">&gt; parsing request URL…</p>
                  <p className="text-slate-400">&gt; querying site router…</p>
                  <p className="text-rose-400 font-bold flex items-center gap-1.5 pt-1">
                    <span>&gt; error: route not matched</span>
                    <span className="text-rose-500">✕</span>
                  </p>
                </div>
              </div>

              {/* Stamp Accent */}
              <div className="absolute bottom-4 right-4 pointer-events-none transform rotate-[-12deg] opacity-25">
                <div className="border-2 border-rose-500 text-rose-500 font-mono font-black text-xs uppercase px-3 py-1 rounded tracking-widest">
                  Error 404
                </div>
              </div>

            </div>
          </div>

          {/* Heading & Subtitle */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Order #404 — Page Missing
          </h1>

          <p className="text-slate-400 text-base max-w-md mx-auto mb-8 leading-relaxed">
            The page or resource you requested could not be found in our directory. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              type="button" 
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              Return to Homepage
            </button>
            
            <button 
              type="button" 
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 transition-all duration-200 cursor-pointer" 
              onClick={() => navigate('/integrations')}
            >
              View Integrations
            </button>
          </div>

        </div>
      </section>
    </>
  );
};