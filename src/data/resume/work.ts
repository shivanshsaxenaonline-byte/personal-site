/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Kapeefit Health Brand',
    position: 'AI Automation & Full-Stack Developer',
    url: 'https://kapeefit.com',
    startDate: '2026',
    summary: `An IIT Mandi-supported healthcare startup. I independently design and build the
    internal software: CRM systems, management dashboards, workflow automations, APIs,
    databases, analytics tools, and AI-enabled business solutions.`,
    highlights: [
      'Architected Kamour Sales OS, a centralized sales CRM replacing fragmented workflows spread across Zoho CRM, nine Google Sheet tabs, WATI/WhatsApp, Razorpay checks, consultations, orders, and follow-ups.',
      'Designed the data model and migration approach for 52,000+ legacy CRM records, covering customer deduplication, lead ownership, consultations, prescriptions, orders, follow-ups, payment status, and repeat-order workflows.',
      'Integrated Supabase, Razorpay, Zoho CRM, Google Sheets, WATI/WhatsApp, Shopify, Meta, and advertising platforms through APIs and webhooks.',
      'Worked end to end across requirement analysis, UI/UX, frontend, backend, database design, API integration, debugging, deployment, and production improvements.',
    ],
  },
  {
    name: 'Patanjali',
    position: 'Software & Data Analytics Intern',
    url: 'https://www.patanjaliayurved.net',
    startDate: '2025',
    endDate: '2025',
    summary: `Worked on billing and operational software, and analysed business datasets to
    improve visibility into sales and performance.`,
    highlights: [
      'Built the PMS vs PC Intelligence Dashboard with role-based views for CEO, COO, and HR, including daily, monthly, and custom-range sales and patient analytics, employee leaderboards, meeting action tracking, and PDF/CSV export.',
      'Implemented automated data synchronisation between Google Sheets, serverless APIs, Supabase/PostgreSQL, and a live web dashboard deployed on Vercel.',
    ],
  },
];

export default work;
