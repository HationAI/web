export type PageRoute =
  | '/'
  | '/about'
  | '/security'
  | '/pricing'
  | '/privacy'
  | '/terms'
  | '/glossary'
  | '/glossary/wismo'
  | '/glossary/3pl'
  | '/glossary/wms'
  | '/glossary/tms'
  | '/integrations'
  | '/integrations/shipstation'
  | '/integrations/extensiv'
  | '/integrations/skuvault'
  | '/blog'
  | '/blog/how-to-reduce-wismo-email-volume'
  | '/blog/3pl-customer-service-automation-guide'
  | '/blog/what-a-wismo-ticket-costs'
  | '/blog/shipstation-vs-extensiv-vs-skuvault-cs'
  | '/blog/when-to-hire-vs-automate'
  | '/case-studies';

export interface GlossaryTerm {
  slug: 'wismo' | '3pl' | 'wms' | 'tms';
  title: string;
  abbreviation: string;
  shortDefinition: string;
  fullDefinition: string;
  whyItMatters: string;
  financialImpact: string;
  automationApproach: string;
  relatedTerms: Array<{ slug: string; name: string }>;
  relatedIntegrations: Array<{ slug: string; name: string }>;
}

export interface Integration {
  slug: 'shipstation' | 'extensiv' | 'skuvault';
  name: string;
  category: 'WMS' | 'Order Management' | 'Inventory Control';
  badge: string;
  description: string;
  heroHeadline: string;
  apiCapabilities: string[];
  setupTime: string;
  howItWorksSteps: Array<{ title: string; desc: string }>;
  faq: Array<{ question: string; answer: string }>;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  content: Array<{
    heading: string;
    body: string[];
    quote?: string;
    bulletPoints?: string[];
  }>;
}
