export interface Project {
  slug: string;
  image: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  title: string;
  subtitle?: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
  website?: string;
  source?: string;
  summary: string;
  benefit: string;
  goal: string;
  implementation: { title: string; description: string }[];
  workflow: [string, string, string, string];
  workflowNote: string;
  considerations: string;
  future: string[];
  stackNote?: string;
}

const GH = 'https://github.com/shivanshsaxenaonline-byte';

const data: Project[] = [
  {
    slug: 'kamour-sales-os',
    image: {
      src: '/images/projects/kamour-sales-os-use-case.webp',
      alt: 'Illustration connecting a sales workstation with customer enquiries, doctor consultations, payment and orders, and follow-up activity.',
      caption:
        'Keeping the customer journey connected, from enquiry to follow-up.',
      width: 1536,
      height: 1024,
    },
    title: 'Kamour Sales OS',
    subtitle: 'Enterprise sales CRM',
    source: `${GH}/kamour-sales-os`,
    date: '2026-04-01',
    desc: 'An internal operating system for leads, consultations, prescriptions, payments, orders, follow-ups, and repeat sales. Normalised PostgreSQL schema on Supabase with authentication, role-based access, realtime workflows, lead prioritisation, payment verification, and audit tracking.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    featured: true,
    summary:
      'From first enquiry to repeat order, one connected sales workflow.',
    benefit:
      'Helps sales and operations teams keep leads, payments, orders, and follow-ups in context instead of treating each step as a separate task.',
    goal: 'Bring the customer journey into one internal operating system, giving teams a consistent record to work from as a lead moves through consultation, purchase, and follow-up.',
    implementation: [
      {
        title: 'A connected customer journey',
        description:
          'Workflows cover leads, consultations, prescriptions, payments, orders, follow-ups, and repeat sales.',
      },
      {
        title: 'Structured data and access',
        description:
          'A normalised PostgreSQL schema on Supabase supports authentication and role-based access.',
      },
      {
        title: 'Operational visibility',
        description:
          'Realtime workflows, lead prioritisation, payment verification, and audit tracking support day-to-day coordination.',
      },
    ],
    workflow: [
      'Lead & consultation',
      'Prescription & order',
      'Payment verification',
      'Follow-up & repeat sale',
    ],
    workflowNote:
      'A simplified customer journey. Supabase and PostgreSQL hold the shared records, with authentication and role-based access around the workflow.',
    considerations:
      'Payment verification, access boundaries, and audit history are important when several teams act on the same customer record. This overview describes the workflow without exposing internal customer data.',
    future: [
      'Explore reminders for leads and follow-ups that need attention.',
      'Add funnel reporting to help identify where enquiries stop progressing.',
      'Evaluate suggested next actions with a human review step.',
    ],
  },
  {
    slug: 'pms-pc-intelligence-dashboard',
    image: {
      src: '/images/projects/pms-pc-intelligence-dashboard-use-case.webp',
      alt: 'Illustration of leadership comparing performance dashboards supplied by shared spreadsheet data.',
      caption:
        'Shared daily data becomes a clearer view of business performance.',
      width: 1536,
      height: 1024,
    },
    title: 'PMS vs PC Intelligence Dashboard',
    subtitle: 'Management analytics',
    website: 'https://pms-pc-dashboard-navy.vercel.app',
    date: '2025-09-01',
    desc: 'A live leadership dashboard comparing daily sales and patient performance, with role-specific views for CEO, COO, and HR, interactive analytics, employee management, action tracking, and automated Google Sheets synchronisation.',
    tech: ['JavaScript', 'Supabase', 'Vercel', 'Apps Script'],
    featured: true,
    summary:
      'Turn daily sales and patient data into a clearer picture for leadership.',
    benefit:
      'Gives CEO, COO, and HR teams role-specific views of performance, with action tracking alongside the numbers that need attention.',
    goal: 'Make daily sales and patient performance easier to compare, while connecting leadership reporting with employee management and follow-through.',
    implementation: [
      {
        title: 'Role-specific reporting',
        description:
          'Separate views for CEO, COO, and HR present daily sales and patient performance with interactive analytics.',
      },
      {
        title: 'Actions alongside analysis',
        description:
          'Employee management and action tracking bring operational work into the dashboard.',
      },
      {
        title: 'Automated synchronisation',
        description:
          'Google Sheets synchronisation uses Apps Script, alongside Supabase and a Vercel deployment.',
      },
    ],
    workflow: [
      'Google Sheets data',
      'Apps Script sync',
      'Performance analytics',
      'Role views & actions',
    ],
    workflowNote:
      'A high-level reporting flow from Google Sheets synchronisation to interactive analytics and role-specific action tracking.',
    considerations:
      'A dashboard is only as useful as the source data behind it. Data freshness, consistent metric definitions, and appropriate visibility for each role are important areas to monitor.',
    future: [
      'Show data freshness and synchronisation health beside key metrics.',
      'Explore trend comparisons and unusual-change alerts.',
      'Extend action tracking with ownership and progress reporting.',
    ],
  },
  {
    slug: 'smart-mall-ai',
    image: {
      src: '/images/projects/smart-mall-ai-use-case.webp',
      alt: 'Illustrated mall entrance with person-tracking boxes, a directional counting line, and a connected monitoring dashboard and event log.',
      caption:
        'A camera feed becomes entry and exit events that operators can monitor.',
      width: 1536,
      height: 1024,
    },
    title: 'Smart Mall AI Crowd & Attendance',
    subtitle: 'Computer vision',
    source: `${GH}/ai-mall-attendance`,
    date: '2025-06-01',
    desc: 'Real-time person detection, tracking, and entry/exit counting with a live dashboard. Built on YOLOv8 and ByteTrack with MJPEG streaming and SQLite event logging behind a FastAPI service.',
    tech: ['Python', 'YOLOv8', 'ByteTrack', 'OpenCV', 'FastAPI', 'SQLite'],
    featured: true,
    summary: 'Turn a video feed into a live view of people moving in and out.',
    benefit:
      'Helps operators monitor footfall with person tracking, entry and exit counts, and a live dashboard instead of manually reviewing every frame.',
    goal: 'Connect real-time person detection with tracking and event logging so movement through an entrance can be understood as a stream of countable events.',
    implementation: [
      {
        title: 'Detection and tracking',
        description:
          'YOLOv8 detects people and ByteTrack tracks them across frames, with OpenCV in the video-processing stack.',
      },
      {
        title: 'Entry and exit counting',
        description:
          'Tracked movement feeds entry and exit counts displayed in a live dashboard.',
      },
      {
        title: 'Streaming and event records',
        description:
          'A FastAPI service provides MJPEG streaming, while SQLite records events.',
      },
    ],
    workflow: [
      'Video frames',
      'YOLOv8 + ByteTrack',
      'Entry / exit events',
      'Dashboard & SQLite',
    ],
    workflowNote:
      'Video frames pass through detection and tracking before movement becomes count events. FastAPI serves the stream and SQLite stores the event history.',
    considerations:
      'Crowded scenes, occlusion, camera placement, and lighting can affect counting reliability. Deployment would need location-specific evaluation and clear decisions about camera access and retention.',
    future: [
      'Evaluate counting performance across different entrances and lighting conditions.',
      'Explore multi-camera summaries and time-based footfall trends.',
      'Add configurable occupancy alerts with operator review.',
    ],
  },
  {
    slug: 'plant-health-ai',
    image: {
      src: '/images/projects/plant-health-ai-use-case.webp',
      alt: 'Illustration of healthy and spotted crop leaves, a hand capturing a leaf image on a phone, and a connected classification result.',
      caption:
        'From a crop image to an accessible plant-health classification.',
      width: 1536,
      height: 1024,
    },
    title: 'Plant Health AI',
    subtitle: 'Deep learning application',
    source: `${GH}/Plant-Health-AI`,
    date: '2025-03-01',
    desc: 'Crop disease detection across 27 classes spanning cotton, rice, maize, tomato, potato, and pepper, behind a farmer-friendly Hindi and English interface.',
    tech: ['Python', 'MobileNetV2', 'Deep Learning'],
    summary:
      'Make crop disease recognition easier to use, in Hindi and English.',
    benefit:
      'Offers an accessible starting point for identifying plant-health concerns across six crops, with an interface designed for farmers.',
    goal: 'Put crop disease classification behind a straightforward bilingual interface so the model is useful beyond a technical demonstration.',
    implementation: [
      {
        title: 'Crop disease classification',
        description:
          'The application covers 27 classes across cotton, rice, maize, tomato, potato, and pepper.',
      },
      {
        title: 'A deep learning foundation',
        description:
          'The model uses MobileNetV2 in a Python-based deep learning application.',
      },
      {
        title: 'Bilingual access',
        description:
          'Hindi and English interface options make the application more approachable for its intended users.',
      },
    ],
    workflow: [
      'Crop image',
      'MobileNetV2 model',
      'Disease classification',
      'Hindi / English UI',
    ],
    workflowNote:
      'A simplified inference flow: a crop image is classified by the model and the result is presented through the bilingual interface.',
    considerations:
      'A model result should be treated as a starting point for investigation. Image quality, unfamiliar conditions, and diseases outside the supported classes can limit what a classifier can tell the user.',
    future: [
      'Evaluate the model using more field images and varied growing conditions.',
      'Explore confidence-aware results that explain when a prediction is uncertain.',
      'Investigate an offline-friendly experience for areas with limited connectivity.',
    ],
  },
  {
    slug: 'kredo',
    image: {
      src: '/images/projects/kredo-use-case.webp',
      alt: 'Illustrated CRM workspace connecting customer cards and a sales pipeline with a task calendar, conversation history, and team activity.',
      caption:
        'Customer context and the next action, together in one workspace.',
      width: 1536,
      height: 1024,
    },
    title: 'Kredo',
    subtitle: 'Business CRM platform',
    date: '2025-01-01',
    desc: 'A centralised CRM for customers, leads, deals, tasks, sales pipelines, reminders, follow-ups, and activity history, with reporting, authentication, role-based access, and search and filter workflows.',
    tech: ['Full Stack', 'CRM', 'RBAC'],
    summary: 'Keep customer relationships and the next follow-up in one place.',
    benefit:
      'Helps a sales team see customer history, organise deals, and track tasks without losing the context behind each conversation.',
    goal: 'Create a central workspace for customer relationships and sales activity, from a new lead through pipeline management and ongoing follow-up.',
    implementation: [
      {
        title: 'Customer and pipeline records',
        description:
          'The CRM brings customers, leads, deals, and sales pipelines into one platform.',
      },
      {
        title: 'Daily follow-through',
        description:
          'Tasks, reminders, follow-ups, and activity history help keep the next action connected to its customer.',
      },
      {
        title: 'Finding and protecting information',
        description:
          'Reporting, search and filter workflows, authentication, and role-based access support team use.',
      },
    ],
    workflow: [
      'Customers & leads',
      'Deals & pipeline',
      'Tasks & follow-ups',
      'History & reporting',
    ],
    workflowNote:
      'A conceptual view of the CRM workflow, from customer records to pipeline activity and reporting.',
    stackNote:
      'The available project notes describe a full-stack CRM with role-based access; specific frameworks and database technologies are not listed yet.',
    considerations:
      'Consistent customer records, useful activity history, and clear access boundaries matter as a CRM grows. Specific framework and deployment details can be added when available.',
    future: [
      'Explore configurable pipeline stages for different sales processes.',
      'Add integrations that reduce repeated entry of customer information.',
      'Extend reporting with deal ageing and follow-up coverage.',
    ],
  },
  {
    slug: 'daily-settlements-update',
    image: {
      src: '/images/projects/daily-settlements-update-use-case.webp',
      alt: 'Illustration of spreadsheet rows flowing into desktop and mobile sales dashboards with trends and date-based reports.',
      caption:
        'A working spreadsheet becomes a dashboard for desktop and mobile.',
      width: 1536,
      height: 1024,
    },
    title: 'Daily Settlements Update',
    subtitle: 'Live sales dashboard',
    website: 'https://effervescent-biscuit-f8e2bd.netlify.app/',
    date: '2024-11-01',
    desc: 'A responsive sales dashboard pulling live data from Google Sheets through Apps Script, displaying business metrics without a backend to maintain.',
    tech: ['JavaScript', 'Apps Script', 'Google Sheets'],
    summary: 'Give a working spreadsheet a dashboard people can actually scan.',
    benefit:
      'Turns live sales data into a responsive view of business metrics while keeping Google Sheets as the source teams already use.',
    goal: 'Make daily sales information easier to read without introducing a separate application backend to maintain.',
    implementation: [
      {
        title: 'Spreadsheet-backed metrics',
        description:
          'Google Sheets provides the live sales data shown in the dashboard.',
      },
      {
        title: 'A lightweight connection',
        description:
          'Apps Script connects the spreadsheet data to the JavaScript dashboard.',
      },
      {
        title: 'Responsive presentation',
        description:
          'A responsive interface displays business metrics and is deployed on Netlify.',
      },
    ],
    workflow: [
      'Google Sheets',
      'Apps Script endpoint',
      'JavaScript dashboard',
      'Daily business metrics',
    ],
    workflowNote:
      'The dashboard reads spreadsheet data through Apps Script and presents it as business metrics without a separate application backend.',
    considerations:
      'Spreadsheet structure, access permissions, and Apps Script availability affect the dashboard. Visible loading, error, and freshness information would help readers judge the data they see.',
    future: [
      'Add a last-updated indicator and clearer handling of unavailable source data.',
      'Explore date comparisons and drill-down views.',
      'Introduce checks for missing or inconsistent spreadsheet values.',
    ],
  },
];

export default data;
