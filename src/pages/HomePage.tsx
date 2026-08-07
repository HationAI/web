import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ManifestTicket } from '../components/ManifestTicket';
import { PageRoute } from '../types';

interface HomePageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onOpenCalendly }) => {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://hation.xyz/#organization',
      name: 'Hation AI',
      alternateName: 'Hation',
      url: 'https://hation.xyz',
      description: 'Autonomous order-status (WISMO) email automation built for 3PLs and fulfillment operators.',
      slogan: 'Stop answering Where Is My Order? emails manually.',
      email: 'privacy@hation.xyz',
      areaServed: ['US', 'CA'],
      knowsAbout: ['WISMO', '3PL', 'WMS', 'ShipStation', 'Extensiv', 'SkuVault', 'AI customer support'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': 'https://hation.xyz/#software',
      name: 'Hation AI WISMO Email Automation',
      operatingSystem: 'Web-based (SaaS)',
      applicationCategory: 'BusinessApplication',
      description: 'AI agent that connects to 3PL WMS platforms via API to autonomously resolve customer order-status (WISMO) email inquiries.',
      offers: {
        '@type': 'Offer',
        price: '700',
        priceCurrency: 'USD',
        url: 'https://hation.xyz/pricing',
      },
    },
  ];

  return (
    <>
      <SEOHead
        title="WISMO Email Automation for 3PLs | Hation AI"
        description="Hation AI answers WISMO (&quot;Where Is My Order?&quot;) emails automatically — reading inbound messages, checking your WMS, and replying in seconds. Live in 4 days. From $700/mo."
        canonicalUrl="https://hation.xyz/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="hero" id="hero" aria-label="Introduction">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="kicker">
              AI Automation for{' '}
              <a
                href="/glossary/3pl"
                className="underline hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/glossary/3pl');
                }}
              >
                3PL
              </a>{' '}
              &amp; Fulfillment Ops
            </span>
            <h1>
              Stop Answering "Where Is My Order?" (
              <a
                href="/glossary/wismo"
                className="underline hover:text-[var(--orange-tint)]"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/glossary/wismo');
                }}
              >
                WISMO
              </a>
              ) Emails Manually.
            </h1>
            <p className="hero-sub">
              Our AI reads inbound client emails, queries your{' '}
              <a
                href="/glossary/wms"
                className="underline hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/glossary/wms');
                }}
              >
                WMS
              </a>{' '}
              in real time, and sends back the exact order status — no rep required.
            </p>
            <div className="hero-cta-row">
              <button type="button" className="btn btn-primary" onClick={onOpenCalendly}>
                Book an Audit
              </button>
              <a
                href="#how-it-works"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See How It Works
              </a>
            </div>
            <p className="hero-trust">
              Built for teams running{' '}
              <a
                href="/integrations/shipstation"
                className="underline hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/integrations/shipstation');
                }}
              >
                ShipStation
              </a>
              ,{' '}
              <a
                href="/integrations/extensiv"
                className="underline hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/integrations/extensiv');
                }}
              >
                Extensiv
              </a>
              , or{' '}
              <a
                href="/integrations/skuvault"
                className="underline hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/integrations/skuvault');
                }}
              >
                SkuVault
              </a>
              .
            </p>
          </div>

          <ManifestTicket />
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" aria-labelledby="problem-heading">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The Problem</span>
            <h2 id="problem-heading">Your CS team is too expensive to be doing data entry.</h2>
            <p>
              Every "Where is my order?" email follows the same routine — a rep opens the WMS, searches an order number, copies a tracking link, and pastes it into a reply. That's not customer service. That's manual data entry with a person in the loop.
            </p>
          </div>
          <ul className="problem-list">
            <li className="problem-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
              <p>20+ hours a week spent looking up tracking numbers instead of solving real problems.</p>
            </li>
            <li className="problem-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3.5 21 20 3 20Z" />
                <path d="M12 9v4.5M12 16.5v.01" />
              </svg>
              <p>Slow replies make B2B clients panic — and panicked clients churn.</p>
            </li>
            <li className="problem-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6v12H6" />
              </svg>
              <p>Thin fulfillment margins get eaten by CS headcount that scales with order volume, not revenue.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" aria-labelledby="solution-heading">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The Fix</span>
            <h2 id="solution-heading">Meet your new autonomous Tier-1 support rep.</h2>
            <p>
              We connect directly to your WMS API. When a client emails asking about an order, the AI reads the message, pulls the live status from ShipStation, Extensiv, or SkuVault, and replies with the exact answer — in seconds, without a rep touching it.
            </p>
          </div>
          <ul className="feature-grid">
            <li className="feature-card">
              <div className="feature-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
                </svg>
              </div>
              <h3>Autonomous WISMO Replies</h3>
              <p>Detects order numbers in inbound emails, queries your WMS directly, and sends an accurate reply automatically.</p>
            </li>
            <li className="feature-card">
              <div className="feature-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 17h7a3 3 0 0 0 3-3V6M11 9l3-3 3 3" />
                </svg>
              </div>
              <h3>Smart Escalation</h3>
              <p>Genuinely lost, delayed, or complex orders get routed straight to a human rep, with the full context attached.</p>
            </li>
            <li className="feature-card">
              <div className="feature-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12a8 8 0 0 1 14-5.3L21 9M21 4v5h-5" />
                  <path d="M20 12a8 8 0 0 1-14 5.3L3 15M3 20v-5h5" />
                </svg>
              </div>
              <h3>Inventory Sync Alerts</h3>
              <p>Flags WMS-to-Shopify inventory mismatches before your client notices, so your AMs get ahead of the complaint.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="section-head">
            <span className="kicker">How It Works</span>
            <h2 id="how-it-works-heading">Live in three steps. No engineering lift on your end.</h2>
          </div>
          <ul className="steps">
            <li className="step">
              <span className="step-num">01</span>
              <div className="step-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 2v4M15 2v4M7 6h10v4a5 5 0 0 1-10 0V6ZM12 15v3M8 22h8" />
                </svg>
              </div>
              <h3>Connect</h3>
              <p>We integrate with your WMS API — ShipStation, Extensiv, or SkuVault — plus your CS inbox. Typical turnaround: 4 business days.</p>
            </li>
            <li className="step">
              <span className="step-num">02</span>
              <div className="step-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
              <h3>Ingest</h3>
              <p>The AI reads every inbound email, extracts order and PO numbers, and queries your WMS in real time.</p>
            </li>
            <li className="step">
              <span className="step-num">03</span>
              <div className="step-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 3 10 14M21 3 14 21l-3-8-8-3Z" />
                </svg>
              </div>
              <h3>Respond</h3>
              <p>The AI drafts or sends an accurate reply. You set the tone, the logic, and exactly where the human handoff happens.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* RESULTS / METRICS */}
      <section id="results" aria-labelledby="results-heading">
        <div className="container">
          <div className="section-head">
            <span className="kicker">The Numbers</span>
            <h2 id="results-heading">Built for 3PL margins, not vanity metrics.</h2>
          </div>
          <ul className="metrics">
            <li className="metric">
              <span className="metric-number">50%</span>
              <span className="metric-label">Reduction in CS email volume</span>
            </li>
            <li className="metric">
              <span className="metric-number">&lt;60 sec</span>
              <span className="metric-label">Average response time</span>
            </li>
            <li className="metric">
              <span className="metric-number">$700/mo</span>
              <span className="metric-label">vs. $4,000/mo for a new CS hire</span>
            </li>
          </ul>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" aria-labelledby="integrations-heading">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Integrations</span>
            <h2 id="integrations-heading">Plugs directly into the stack you already run.</h2>
            <p>Click any platform below to explore specific WMS integration capabilities.</p>
          </div>
          <ul className="integrations-row">
            <li
              className="integration-badge"
              onClick={() => navigate('/integrations/shipstation')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3 3 8v8l9 5 9-5V8Z" />
                <path d="M3 8l9 5 9-5M12 13v8" />
              </svg>
              ShipStation
            </li>
            <li
              className="integration-badge"
              onClick={() => navigate('/integrations/extensiv')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3 3 8v8l9 5 9-5V8Z" />
                <path d="M3 8l9 5 9-5M12 13v8" />
              </svg>
              Extensiv (3PL Central)
            </li>
            <li
              className="integration-badge"
              onClick={() => navigate('/integrations/skuvault')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3 3 8v8l9 5 9-5V8Z" />
                <path d="M3 8l9 5 9-5M12 13v8" />
              </svg>
              SkuVault
            </li>
            <li
              className="integration-badge"
              onClick={() => navigate('/integrations')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Gmail
            </li>
            <li
              className="integration-badge"
              onClick={() => navigate('/integrations')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Outlook
            </li>
            <li
              className="integration-badge"
              onClick={() => navigate('/integrations')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4Z" />
              </svg>
              Slack
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Before You Book A Call</span>
            <h2 id="faq-heading">Questions operators ask</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                What does WISMO mean?
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>
                WISMO stands for "Where Is My Order?" — the inbound customer email asking for an order's current status or location. It's one of the highest-volume, lowest-value-per-reply ticket types a 3PL's customer support team handles.{' '}
                <a
                  href="/glossary/wismo"
                  className="underline text-[var(--orange-tint)]"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/glossary/wismo');
                  }}
                >
                  Read full definition →
                </a>
              </p>
            </details>
            <details className="faq-item">
              <summary>
                What is a 3PL?
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>
                A 3PL (third-party logistics provider) is a company that handles warehousing, order fulfillment, and shipping on behalf of other businesses, usually e-commerce brands. Hation AI is built specifically for 3PL customer support teams.{' '}
                <a
                  href="/glossary/3pl"
                  className="underline text-[var(--orange-tint)]"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/glossary/3pl');
                  }}
                >
                  Read full guide →
                </a>
              </p>
            </details>
            <details className="faq-item">
              <summary>
                What is a WMS, and which ones does Hation AI support?
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>
                A WMS (warehouse management system) is the software a 3PL uses to track inventory, orders, and shipments. Hation AI connects via API to ShipStation, Extensiv (3PL Central), and SkuVault to pull live order status.{' '}
                <a
                  href="/integrations"
                  className="underline text-[var(--orange-tint)]"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/integrations');
                  }}
                >
                  View integrations →
                </a>
              </p>
            </details>
            <details className="faq-item">
              <summary>
                What if we're not on ShipStation, Extensiv, or SkuVault?
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>Those are the three platforms we support out of the box. If you're running something else, mention it on the audit call — most WMS platforms expose an API we can connect to.</p>
            </details>
            <details className="faq-item">
              <summary>
                Does the AI ever reply without a human checking it first?
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>That's your call. Most clients start with AI-drafted replies for a human to approve, then move to full autonomy once accuracy is proven. You decide where the handoff sits.</p>
            </details>
            <details className="faq-item">
              <summary>
                What happens with orders that are actually lost or delayed?
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>Anything that doesn't cleanly match in the WMS — a lost shipment, damage, a real complaint — gets escalated straight to a human rep, with the full email thread and order context already attached.</p>
            </details>
            <details className="faq-item">
              <summary>
                How long does setup actually take?
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>Most clients are live within 4 business days of the audit call: WMS integration, inbox connection, and a short testing period before go-live.</p>
            </details>
            <details className="faq-item">
              <summary>
                What does this cost?
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>
                $1,000 setup fee, then $700 a month. That's a fraction of the fully-loaded cost of one CS hire — and it doesn't take PTO or turn over.{' '}
                <a
                  href="/pricing"
                  className="underline text-[var(--orange-tint)]"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/pricing');
                  }}
                >
                  See pricing breakdown &amp; ROI calculator →
                </a>
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="get-started" aria-labelledby="final-cta-heading">
        <div className="container final-cta-inner">
          <h2 id="final-cta-heading">Ready to automate your 3PL's inbox?</h2>
          <p>Book a 15-minute Workflow Audit. We'll map out exactly how much time AI can save your CS team this week.</p>
          <button type="button" className="btn btn-primary" onClick={onOpenCalendly}>
            Book an Audit
          </button>
        </div>
      </section>
    </>
  );
};
