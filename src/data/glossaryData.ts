import { GlossaryTerm } from '../types';

export const glossaryTerms: Record<string, GlossaryTerm> = {
  wismo: {
    slug: 'wismo',
    title: 'Where Is My Order?',
    abbreviation: 'WISMO',
    shortDefinition: 'WISMO ("Where Is My Order?") refers to an inbound customer support inquiry asking for the current processing, shipment, or tracking status of a placed order.',
    fullDefinition: 'WISMO (Where Is My Order?) represents the single largest category of customer service emails and tickets for e-commerce brands and third-party logistics (3PL) providers. It comprises routine status updates, tracking request lookups, carrier delay inquiries, and estimated delivery timeframe questions.',
    whyItMatters: 'At high order volume, WISMO inquiries account for 25% to 40% of all inbound emails received by a 3PL customer service team. Because each response requires opening a WMS, looking up an order or tracking number, copying details, and pasting them back into an email reply, human agents waste dozens of hours per week doing repetitive manual data entry.',
    financialImpact: 'Handling a single manual WISMO ticket costs a 3PL approximately $3.50 to $6.00 in labor overhead when factoring in fully loaded CS wages and management review. For a 3PL processing 50,000 orders monthly, manual WISMO lookups cost upwards of $3,000 to $5,000 per month in wasted payroll.',
    automationApproach: 'Hation AI automates WISMO inquiries by parsing inbound emails for order or PO numbers, querying the warehouse management system (ShipStation, Extensiv, or SkuVault) via real-time API endpoints, and sending a formatted, accurate status reply within seconds.',
    relatedTerms: [
      { slug: '3pl', name: 'Third-Party Logistics (3PL)' },
      { slug: 'wms', name: 'Warehouse Management System (WMS)' },
      { slug: 'tms', name: 'Transportation Management System (TMS)' },
    ],
    relatedIntegrations: [
      { slug: 'shipstation', name: 'ShipStation' },
      { slug: 'extensiv', name: 'Extensiv (3PL Central)' },
      { slug: 'skuvault', name: 'SkuVault' },
    ],
  },
  '3pl': {
    slug: '3pl',
    title: 'Third-Party Logistics',
    abbreviation: '3PL',
    shortDefinition: 'A 3PL (Third-Party Logistics) is an outsourced provider that manages warehousing, inventory storage, order pick & pack fulfillment, and shipping operations for e-commerce brands.',
    fullDefinition: 'A 3PL provides end-to-end supply chain services to merchant brands, handling receiving, inventory warehousing, order fulfillment, kitting, and parcel logistics. As e-commerce brands scale, 3PL providers act as operational backbones.',
    whyItMatters: '3PLs operate on tight per-order fulfillment margins. High customer service ticket volume directly dilutes profitability. When client brand managers or end consumers submit constant order inquiries, 3PL support teams get bogged down in administrative lookups instead of focusing on warehouse throughput and account expansion.',
    financialImpact: 'Scaling a 3PL customer service team linearly with order growth requires adding headcount at $45,000–$55,000 per year per representative. AI-driven WISMO automation resolves over half of inbound ticket volume at a fixed cost, decoupling support overhead from order growth.',
    automationApproach: 'Hation AI acts as an autonomous Tier-1 support representative for 3PLs, integrating directly with WMS software to resolve client order inquiries instantly while routing complex exceptions to human reps.',
    relatedTerms: [
      { slug: 'wismo', name: 'Where Is My Order? (WISMO)' },
      { slug: 'wms', name: 'Warehouse Management System (WMS)' },
      { slug: 'tms', name: 'Transportation Management System (TMS)' },
    ],
    relatedIntegrations: [
      { slug: 'extensiv', name: 'Extensiv (3PL Central)' },
      { slug: 'shipstation', name: 'ShipStation' },
      { slug: 'skuvault', name: 'SkuVault' },
    ],
  },
  wms: {
    slug: 'wms',
    title: 'Warehouse Management System',
    abbreviation: 'WMS',
    shortDefinition: 'A Warehouse Management System (WMS) is core software used by fulfillment operators to control inventory, order picking, packing workflows, carrier labeling, and shipping tracking.',
    fullDefinition: 'The WMS serves as the operational source of truth for a 3PL warehouse. It tracks stock levels across bins, shelf locations, batch lots, order processing queues, packing statuses, carrier pick-ups, and live tracking numbers.',
    whyItMatters: 'Without an automated bridge between client support inboxes and the WMS, support agents must constantly alt-tab between Gmail/Outlook and WMS search screens to copy-paste tracking codes and fulfillment statuses.',
    financialImpact: 'Manual WMS lookups take between 2 to 4 minutes per ticket. Multiplied across thousands of tickets, a 3PL team spends over 80 hours per month navigating WMS dashboards purely for customer communication.',
    automationApproach: 'Hation AI connects directly to WMS REST APIs (e.g. ShipStation, Extensiv, SkuVault). When an email arrives, Hation AI queries the WMS endpoint in milliseconds, retrieves exact tracking links and carrier ETAs, and drafts/sends an accurate customer email.',
    relatedTerms: [
      { slug: 'wismo', name: 'Where Is My Order? (WISMO)' },
      { slug: '3pl', name: 'Third-Party Logistics (3PL)' },
      { slug: 'tms', name: 'Transportation Management System (TMS)' },
    ],
    relatedIntegrations: [
      { slug: 'shipstation', name: 'ShipStation' },
      { slug: 'extensiv', name: 'Extensiv (3PL Central)' },
      { slug: 'skuvault', name: 'SkuVault' },
    ],
  },
  tms: {
    slug: 'tms',
    title: 'Transportation Management System',
    abbreviation: 'TMS',
    shortDefinition: 'A Transportation Management System (TMS) manages carrier selection, freight routing, shipping rate optimization, and transit tracking across carrier networks.',
    fullDefinition: 'While a WMS handles internal warehouse storage and order picking, a TMS oversees outbound transportation logistics across carriers like UPS, FedEx, DHL, USPS, and regional freight carriers.',
    whyItMatters: 'When order tracking status shows "In Transit", "Out for Delivery", or "Delayed", the WMS relays status updates from carrier APIs provided via TMS integrations. Real-time access to accurate carrier telemetry is essential for answering WISMO emails reliably.',
    financialImpact: 'Carrier exceptions and transit delays often trigger anxious customer emails. Having instant carrier status verification prevents unnecessary support escalations and carrier claim confusion.',
    automationApproach: 'Hation AI parses both WMS tracking IDs and carrier status responses (including UPS, FedEx, USPS tracking APIs) to give customers pinpoint delivery estimates and proactive delay notices.',
    relatedTerms: [
      { slug: 'wismo', name: 'Where Is My Order? (WISMO)' },
      { slug: '3pl', name: 'Third-Party Logistics (3PL)' },
      { slug: 'wms', name: 'Warehouse Management System (WMS)' },
    ],
    relatedIntegrations: [
      { slug: 'shipstation', name: 'ShipStation' },
      { slug: 'extensiv', name: 'Extensiv (3PL Central)' },
    ],
  },
};
