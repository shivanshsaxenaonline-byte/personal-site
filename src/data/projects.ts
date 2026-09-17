export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const GH = 'https://github.com/shivanshsaxenaonline-byte';

const data: Project[] = [
  {
    title: 'Kamour Sales OS',
    subtitle: 'Enterprise sales CRM',
    link: `${GH}/kamour-sales-os`,
    date: '2026-04-01',
    desc: 'An internal operating system for leads, consultations, prescriptions, payments, orders, follow-ups, and repeat sales. Normalised PostgreSQL schema on Supabase with authentication, role-based access, realtime workflows, lead prioritisation, payment verification, and audit tracking.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'PMS vs PC Intelligence Dashboard',
    subtitle: 'Management analytics',
    link: 'https://pms-pc-dashboard-navy.vercel.app',
    date: '2025-09-01',
    desc: 'A live leadership dashboard comparing daily sales and patient performance, with role-specific views for CEO, COO, and HR, interactive analytics, employee management, action tracking, and automated Google Sheets synchronisation.',
    tech: ['JavaScript', 'Supabase', 'Vercel', 'Apps Script'],
    featured: true,
  },
  {
    title: 'Smart Mall AI Crowd & Attendance',
    subtitle: 'Computer vision',
    link: `${GH}/ai-mall-attendance`,
    date: '2025-06-01',
    desc: 'Real-time person detection, tracking, and entry/exit counting with a live dashboard. Built on YOLOv8 and ByteTrack with MJPEG streaming and SQLite event logging behind a FastAPI service.',
    tech: ['Python', 'YOLOv8', 'ByteTrack', 'OpenCV', 'FastAPI'],
    featured: true,
  },
  {
    title: 'Plant Health AI',
    subtitle: 'Deep learning application',
    link: `${GH}/Plant-Health-AI`,
    date: '2025-03-01',
    desc: 'Crop disease detection across 27 classes spanning cotton, rice, maize, tomato, potato, and pepper, behind a farmer-friendly Hindi and English interface.',
    tech: ['Python', 'MobileNetV2', 'Deep Learning'],
  },
  {
    title: 'Kredo',
    subtitle: 'Business CRM platform',
    date: '2025-01-01',
    desc: 'A centralised CRM for customers, leads, deals, tasks, sales pipelines, reminders, follow-ups, and activity history, with reporting, authentication, role-based access, and search and filter workflows.',
    tech: ['Full Stack', 'CRM', 'RBAC'],
  },
  {
    title: 'Daily Settlements Update',
    subtitle: 'Live sales dashboard',
    link: 'https://effervescent-biscuit-f8e2bd.netlify.app/',
    date: '2024-11-01',
    desc: 'A responsive sales dashboard pulling live data from Google Sheets through Apps Script, displaying business metrics without a backend to maintain.',
    tech: ['JavaScript', 'Apps Script', 'Google Sheets'],
  },
];

export default data;
