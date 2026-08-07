import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ManifestTicket } from '../components/ManifestTicket';
import { PageRoute } from '../types';

interface HomePageProps {
  navigate: (path: PageRoute | string) => void;
  onOpenCalendly: () => void;
}

const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

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
            <span className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
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
                Book a Workflow Audit
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <a href="#how-it-works" className="btn btn-secondary" onClick={scrollTo('how-it-works')}>
                See How It Works
              </a>
            </div>
            <div className="hero-trust">
              <span className="hero-trust-label">Built for teams running</span>
              <div className="hero-chips">
                <a
                  href="/integrations/shipstation"
                  className="hero-chip"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/integrations/shipstation');
                  }}
                >
                  ShipStation
                </a>
                <a
                  href="/integrations/extensiv"
                  className="hero-chip"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/integrations/extensiv');
                  }}
                >
                  Extensiv
                </a>
                <a
                  href="/integrations/skuvault"
                  className="hero-chip"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/integrations/skuvault');
                  }}
                >
                  SkuVault
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <ManifestTicket />
            <div className="hero-float hero-float-top" aria-hidden="true">
              <span className="hero-float-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              </span>
              <span>
                <strong>Replies in &lt;60s</strong>
                <em>average response time</em>
              </span>
            </div>
            <div className="hero-float hero-float-bottom" aria-hidden="true">
              <span className="hero-float-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v18M3 12h18" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <span>
                <strong>Live 24/7</strong>
                <em>no PTO, no turnover</em>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" aria-labelledby="problem-heading">
        <div className="container">
          <div className="problem-grid">
            <div className="section-head">
              <span className="kicker">The Problem</span>
              <h2 id="problem-heading">Your CS team is too expensive to be doing data entry.</h2>
              <p>
                Every "Where is my order?" email follows the same routine — a rep opens the WMS, searches an order number, copies a tracking link, and pastes it into a reply. That's not customer service. That's manual data entry with a person in the loop.
              </p>
            </div>
            <ul className="problem-list">
              <li className="problem-item">
                <span className="problem-stat">20+ hrs/wk</span>
                <div className="problem-copy">
                  <h3>Time burned on lookups</h3>
                  <p>Reps spend 20+ hours a week digging for tracking numbers instead of solving real problems.</p>
                </div>
              </li>
              <li className="problem-item">
                <span className="problem-stat">Slow replies</span>
                <div className="problem-copy">
                  <h3>Panicked clients churn</h3>
                  <p>Slow answers make B2B clients panic — and panicked clients take their volume elsewhere.</p>
                </div>
              </li>
              <li className="problem-item">
                <span className="problem-stat">Headcount cost</span>
                <div className="problem-copy">
                  <h3>Margins get eaten</h3>
                  <p>Thin fulfillment margins get eaten by CS headcount that scales with order volume, not revenue.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="section-tint" aria-labelledby="solution-heading">
        <div className="container">
          <div className="section-head center">
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
          <div className="control-panel">
            <div className="control-panel-head">
              <span className="kicker">You stay in control</span>
              <h3>Autonomy is a dial — not an all-or-nothing switch.</h3>
            </div>
            <ul className="control-checks">
              <li>
                <svg className="icon icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 12l5 5L20 7" />
                </svg>
                Start with AI-drafted replies you approve, move to full autonomy once accuracy is proven.
              </li>
              <li>
                <svg className="icon icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 12l5 5L20 7" />
                </svg>
                Set the tone, the templates, and exactly where the human handoff happens.
              </li>
              <li>
                <svg className="icon icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 12l5 5L20 7" />
                </svg>
                Lost or delayed orders are always escalated to a human — never auto-replied.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="section-head center">
            <span className="kicker">How It Works</span>
            <h2 id="how-it-works-heading">Live in three steps. No engineering lift on your end.</h2>
          </div>
          <ol className="steps">
            <li className="step">
              <span className="step-num" aria-hidden="true">01</span>
              <div className="step-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 2v4M15 2v4M7 6h10v4a5 5 0 0 1-10 0V6ZM12 15v3M8 22h8" />
                </svg>
              </div>
              <h3>Connect</h3>
              <p>We integrate with your WMS API — ShipStation, Extensiv, or SkuVault — plus your CS inbox.</p>
              <span className="step-meta">Typical turnaround: 4 business days</span>
            </li>
            <li className="step">
              <span className="step-num" aria-hidden="true">02</span>
              <div className="step-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
              <h3>Ingest</h3>
              <p>The AI reads every inbound email, extracts order and PO numbers, and queries your WMS in real time.</p>
              <span className="step-meta">Continuous, 24/7</span>
            </li>
            <li className="step">
              <span className="step-num" aria-hidden="true">03</span>
              <div className="step-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 3 10 14M21 3 14 21l-3-8-8-3Z" />
                </svg>
              </div>
              <h3>Respond</h3>
              <p>The AI drafts or sends an accurate reply. You set the tone, the logic, and where the human handoff happens.</p>
              <span className="step-meta">Your rules, your voice</span>
            </li>
          </ol>
        </div>
      </section>

      {/* RESULTS / METRICS */}
      <section id="results" className="section-tint" aria-labelledby="results-heading">
        <div className="container">
          <div className="section-head center">
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
          <div className="roi-panel">
            <div className="roi-copy">
              <span className="kicker">Compare</span>
              <h3>One Hation AI subscription vs. one CS hire</h3>
              <a
                href="/pricing"
                className="roi-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/pricing');
                }}
              >
                See the full pricing breakdown &amp; ROI calculator →
              </a>
            </div>
            <div className="roi-bars" aria-hidden="true">
              <div className="roi-bar">
                <div className="roi-bar-row">
                  <span className="roi-bar-label">Hation AI</span>
                  <span className="roi-bar-value">$700/mo</span>
                </div>
                <div className="roi-bar-track">
                  <div className="roi-bar-fill" style={{ width: '18%' }} />
                </div>
              </div>
              <div className="roi-bar">
                <div className="roi-bar-row">
                  <span className="roi-bar-label">CS hire (fully loaded)</span>
                  <span className="roi-bar-value">$4,000/mo</span>
                </div>
                <div className="roi-bar-track">
                  <div className="roi-bar-fill roi-bar-fill-muted" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" aria-labelledby="integrations-heading">
        <div className="container">
          <div className="section-head center">
            <span className="kicker">Integrations</span>
            <h2 id="integrations-heading">Plugs directly into the stack you already run.</h2>
            <p>Click any platform below to explore specific WMS integration capabilities.</p>
          </div>
          <ul className="integration-grid">
            <li className="integration-card" onClick={() => navigate('/integrations/shipstation')}>
              <div className="integration-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3 3 8v8l9 5 9-5V8Z" />
                  <path d="M3 8l9 5 9-5M12 13v8" />
                </svg>
              </div>
              <span className="integration-name">ShipStation</span>
              <span className="integration-tag">WMS</span>
            </li>
            <li className="integration-card" onClick={() => navigate('/integrations/extensiv')}>
              <div className="integration-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3 3 8v8l9 5 9-5V8Z" />
                  <path d="M3 8l9 5 9-5M12 13v8" />
                </svg>
              </div>
              <span className="integration-name">Extensiv (3PL Central)</span>
              <span className="integration-tag">WMS</span>
            </li>
            <li className="integration-card" onClick={() => navigate('/integrations/skuvault')}>
              <div className="integration-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3 3 8v8l9 5 9-5V8Z" />
                  <path d="M3 8l9 5 9-5M12 13v8" />
                </svg>
              </div>
              <span className="integration-name">SkuVault</span>
              <span className="integration-tag">WMS</span>
            </li>
            <li className="integration-card" onClick={() => navigate('/integrations')}>
              <div className="integration-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <span className="integration-name">Gmail</span>
              <span className="integration-tag">Inbox</span>
            </li>
            <li className="integration-card" onClick={() => navigate('/integrations')}>
              <div className="integration-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <span className="integration-name">Outlook</span>
              <span className="integration-tag">Inbox</span>
            </li>
            <li className="integration-card" onClick={() => navigate('/integrations')}>
              <div className="integration-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4Z" />
                </svg>
              </div>
              <span className="integration-name">Slack</span>
              <span className="integration-tag">Team</span>
            </li>
          </ul>
          <p className="integration-note">
            Running something else? Most WMS platforms expose an API we can connect to — mention it on the audit call.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="faq-grid">
            <div className="section-head">
              <span className="kicker">Before You Book A Call</span>
              <h2 id="faq-heading">Questions operators ask</h2>
              <p>Straight answers about autonomy, escalation, and setup — no sales fluff.</p>
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="get-started" aria-labelledby="final-cta-heading">
        <div className="container">
          <div className="final-cta-card">
            <span className="kicker">Get Started</span>
            <h2 id="final-cta-heading">Ready to automate your 3PL's inbox?</h2>
            <p>Book a 15-minute Workflow Audit. We'll map out exactly how much time AI can save your CS team this week.</p>
            <div className="final-cta-actions">
              <button type="button" className="btn btn-primary" onClick={onOpenCalendly}>
                Book Your Audit
              </button>
              <a
                href="/pricing"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/pricing');
                }}
              >
                See Pricing
              </a>
            </div>
            <p className="final-cta-note">Live in 4 business days · No engineering lift on your end</p>
          </div>
        </div>
      </section>
    </>
  );
};
