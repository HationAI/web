import { Integration } from '../types';

export const integrationsData: Record<string, Integration> = {
  shipstation: {
    slug: 'shipstation',
    name: 'ShipStation',
    category: 'Order Management',
    badge: 'Popular WMS / OMS',
    description: 'Hation AI connects directly to ShipStation REST APIs to read order status, tracking numbers, carrier details, and shipment dates in real time.',
    heroHeadline: 'Automate ShipStation WISMO Inquiries in 4 Days',
    apiCapabilities: [
      'Real-time order lookup by order number, PO, or customer email',
      'Automated carrier tracking code & URL retrieval (UPS, FedEx, USPS, DHL)',
      'Fulfillment status verification (Awaiting Shipment, Shipped, On Hold)',
      'Shipment date & estimated delivery date extraction',
      'Multi-store order routing support',
    ],
    setupTime: 'Live in 4 Business Days',
    howItWorksSteps: [
      {
        title: 'Provide ShipStation API Key & Secret',
        desc: 'Generate a read-only API key pair from your ShipStation account settings and provide it during onboarding.',
      },
      {
        title: 'Connect CS Support Inbox',
        desc: 'Connect your Gmail or Outlook support inbox or set up email forwarding to Hation AI.',
      },
      {
        title: 'Configure Auto-Reply Logic & Approval Handoff',
        desc: 'Choose whether AI sends auto-replies directly or queues drafts for human agent 1-click review.',
      },
      {
        title: 'Go Live with Autonomous WISMO Resolution',
        desc: 'Hation AI monitors inbound emails, queries ShipStation endpoints in under 200ms, and sends accurate replies.',
      },
    ],
    faq: [
      {
        question: 'Does Hation AI modify orders in ShipStation?',
        answer: 'No. Hation AI operates on read-only permissions to query order status and tracking details. It never edits or cancels orders in ShipStation.',
      },
      {
        question: 'What if an order in ShipStation is "On Hold" or "Unfulfilled"?',
        answer: 'If an order is on hold, Hation AI informs the client of the specific hold reason or routes the thread to a human rep with context attached.',
      },
      {
        question: 'Does ShipStation integration support multiple client brand stores?',
        answer: 'Yes. Hation AI automatically maps incoming client emails to their respective store instance in ShipStation.',
      },
    ],
  },
  extensiv: {
    slug: 'extensiv',
    name: 'Extensiv (3PL Central)',
    category: 'WMS',
    badge: 'Enterprise 3PL Standard',
    description: 'Deep integration with Extensiv 3PL Warehouse Manager (3PL Central) API for enterprise fulfillment centers and multi-facility 3PL operations.',
    heroHeadline: 'Autonomous Order Status Support for Extensiv 3PL Central',
    apiCapabilities: [
      'Extensiv 3PL Warehouse Manager API REST integration',
      'Multi-warehouse inventory & fulfillment status lookup',
      'Customer account ID mapping & client billing verification',
      'Carrier tracking number and package weight extraction',
      'Automated escalation for stockout & backorder delays',
    ],
    setupTime: 'Live in 4 Business Days',
    howItWorksSteps: [
      {
        title: 'Authenticate Extensiv REST API',
        desc: 'Enter your Extensiv 3PL Central API credentials and select the client accounts to monitor.',
      },
      {
        title: 'Define Client Brand Communication Rules',
        desc: 'Customize brand voice, reply templates, and escalation triggers per client brand.',
      },
      {
        title: 'Test Order Lookup Validation',
        desc: 'Run a verification suite across historical Extensiv orders to confirm 100% data extraction accuracy.',
      },
      {
        title: 'Launch Autonomous Customer Service',
        desc: 'Hation AI resolves incoming email inquiries automatically while sending Slack notifications for exceptions.',
      },
    ],
    faq: [
      {
        question: 'Does Hation AI work with Extensiv 3PL Warehouse Manager?',
        answer: 'Yes, Hation AI connects directly with Extensiv 3PL Central REST API endpoints for seamless order status queries.',
      },
      {
        question: 'How are multi-client 3PL setups handled in Extensiv?',
        answer: 'Hation AI isolates data by Extensiv Customer ID, ensuring client brand messages only receive data belonging to their specific account.',
      },
      {
        question: 'Can Hation AI alert us to inventory sync discrepancies?',
        answer: 'Yes! Hation AI can flag stock mismatches between Extensiv and client channels like Shopify before customers complain.',
      },
    ],
  },
  skuvault: {
    slug: 'skuvault',
    name: 'SkuVault',
    category: 'Inventory Control',
    badge: 'Inventory & OMS',
    description: 'Connect Hation AI to SkuVault API for real-time inventory availability, order status lookup, and item fulfillment tracking.',
    heroHeadline: 'Streamline SkuVault Order & Tracking Inquiries',
    apiCapabilities: [
      'SkuVault API endpoint synchronization for order statuses',
      'Real-time quantity-on-hand & bin location verification',
      'Outbound shipment tracking retrieval',
      'Kitting & assembly order progress status',
      'Smart escalation for partial fulfillment & backorders',
    ],
    setupTime: 'Live in 4 Business Days',
    howItWorksSteps: [
      {
        title: 'Generate SkuVault User Key & Account Token',
        desc: 'Access your SkuVault admin panel to generate API tokens for secure integration.',
      },
      {
        title: 'Connect Support Inbox',
        desc: 'Link your Gmail or Outlook CS inbox with 1-click OAuth authentication.',
      },
      {
        title: 'Set Up Exception Rules',
        desc: 'Define custom escalation thresholds for backordered items or delayed shipments.',
      },
      {
        title: 'Enable AI Email Resolution',
        desc: 'Hation AI reads incoming email inquiries, verifies status in SkuVault, and sends instant answers.',
      },
    ],
    faq: [
      {
        question: 'How fast is the SkuVault API response time?',
        answer: 'Hation AI queries SkuVault endpoints in under 300 milliseconds to deliver rapid email replies.',
      },
      {
        question: 'Can SkuVault integration handle kit or bundle orders?',
        answer: 'Yes. Hation AI checks individual SKU line items within SkuVault kits to provide detailed order status.',
      },
      {
        question: 'Is human review available during pilot onboarding?',
        answer: 'Yes! You can start in Draft Review Mode where AI prepares replies for 1-click human agent approval.',
      },
    ],
  },
};
