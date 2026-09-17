export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'AI & Automation'],
  },
  { title: 'TypeScript', competency: 5, category: ['Languages', 'Frontend'] },
  { title: 'JavaScript', competency: 5, category: ['Languages', 'Frontend'] },
  { title: 'SQL', competency: 4, category: ['Languages', 'Backend & Data'] },
  { title: 'HTML', competency: 5, category: ['Languages', 'Frontend'] },
  { title: 'CSS', competency: 4, category: ['Languages', 'Frontend'] },

  // Frontend
  { title: 'React', competency: 5, category: ['Frontend'] },
  { title: 'Next.js', competency: 5, category: ['Frontend'] },
  { title: 'Tailwind CSS', competency: 4, category: ['Frontend'] },
  { title: 'Dashboard Development', competency: 5, category: ['Frontend'] },
  { title: 'Responsive UI', competency: 4, category: ['Frontend'] },

  // Backend & Data
  { title: 'Node.js', competency: 5, category: ['Backend & Data'] },
  { title: 'Express.js', competency: 4, category: ['Backend & Data'] },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Backend & Data', 'AI & Automation'],
  },
  {
    title: 'REST APIs',
    competency: 5,
    category: ['Backend & Data', 'Integrations'],
  },
  {
    title: 'Webhooks',
    competency: 5,
    category: ['Backend & Data', 'Integrations'],
  },
  { title: 'PostgreSQL', competency: 4, category: ['Backend & Data'] },
  { title: 'Supabase', competency: 5, category: ['Backend & Data'] },
  { title: 'Row Level Security', competency: 4, category: ['Backend & Data'] },
  { title: 'Realtime Data', competency: 4, category: ['Backend & Data'] },
  { title: 'SQLite', competency: 3, category: ['Backend & Data'] },

  // AI & Automation
  { title: 'OpenAI API', competency: 5, category: ['AI & Automation'] },
  { title: 'Claude API', competency: 5, category: ['AI & Automation'] },
  { title: 'AI Agents', competency: 4, category: ['AI & Automation'] },
  { title: 'LLM Workflows', competency: 4, category: ['AI & Automation'] },
  { title: 'Token Optimization', competency: 4, category: ['AI & Automation'] },
  {
    title: 'Workflow Automation',
    competency: 5,
    category: ['AI & Automation'],
  },

  // Computer Vision
  { title: 'YOLOv8', competency: 4, category: ['Computer Vision'] },
  { title: 'ByteTrack', competency: 3, category: ['Computer Vision'] },
  { title: 'OpenCV', competency: 4, category: ['Computer Vision'] },
  { title: 'MobileNetV2', competency: 3, category: ['Computer Vision'] },

  // Integrations
  { title: 'Zoho CRM API', competency: 4, category: ['Integrations'] },
  { title: 'Razorpay', competency: 4, category: ['Integrations'] },
  {
    title: 'WhatsApp Business / WATI',
    competency: 4,
    category: ['Integrations'],
  },
  { title: 'Shopify', competency: 3, category: ['Integrations'] },
  { title: 'Meta API', competency: 3, category: ['Integrations'] },
  { title: 'Google Ads API', competency: 3, category: ['Integrations'] },
  {
    title: 'Google Sheets / Apps Script',
    competency: 5,
    category: ['Integrations'],
  },

  // Cloud & Tools
  { title: 'Vercel', competency: 5, category: ['Cloud & Tools'] },
  {
    title: 'Serverless Deployment',
    competency: 4,
    category: ['Cloud & Tools'],
  },
  { title: 'AWS', competency: 3, category: ['Cloud & Tools'] },
  { title: 'Git & GitHub', competency: 4, category: ['Cloud & Tools'] },
  { title: 'CI/CD', competency: 3, category: ['Cloud & Tools'] },
  { title: 'Postman', competency: 4, category: ['Cloud & Tools'] },
  {
    title: 'Claude Code',
    competency: 5,
    category: ['Cloud & Tools', 'AI & Automation'],
  },
  {
    title: 'Codex CLI',
    competency: 4,
    category: ['Cloud & Tools', 'AI & Automation'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
