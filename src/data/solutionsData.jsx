import React from 'react';

const solutionsData = [
  {
    id: 1, slug: 'e-commerce-platforms', number: '01', label: 'E-commerce Platforms',
    desc: 'End-to-end online stores designed for conversion and scalability.',
    longDesc: 'We build complete e-commerce ecosystems — from product catalogs and shopping carts to payment gateways and fulfillment integrations. Our platforms are designed to convert visitors into loyal customers and scale effortlessly as your business grows.',
    features: ['Payment Integration', 'Product Catalog', 'Analytics Dashboard', 'Multi-channel Selling', 'Inventory Sync'],
    process: ['Market Analysis', 'Platform Architecture', 'Storefront Design', 'Payment & Logistics Setup', 'Launch & Growth'],
    benefits: [
      { title: 'Increase Sales Revenue', desc: 'An optimized checkout process means fewer abandoned carts and more completed purchases.' },
      { title: 'Automated Operations', desc: 'Sync inventory and accounting software to eliminate manual data entry.' },
      { title: 'Global Reach', desc: 'Expand your market beyond local borders with multi-currency and multi-language support.' },
      { title: 'Advanced Analytics', desc: 'Understand your customers buying habits to optimize your marketing spend.' }
    ],
    technologies: ['React', 'Next.js', 'Shopify Plus', 'Stripe', 'Node.js'],
    faqs: [
      { question: 'Do you build custom themes?', answer: 'Yes, we design completely custom, high-converting interfaces rather than using generic templates.' },
      { question: 'How long does an e-commerce platform take to launch?', answer: 'Depending on the complexity and catalog size, typically 6 to 12 weeks.' },
      { question: 'Is the platform secure for credit card payments?', answer: 'Absolutely. We only use PCI-compliant payment gateways like Stripe or local Moroccan gateways.' }
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 16 L38 16 L35 32 L13 32 Z" strokeLinejoin="round" />
        <path d="M10 16 L7 10 L4 10" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="38" r="3" />
        <circle cx="32" cy="38" r="3" />
        <path d="M20 22 L28 22" strokeLinecap="round" strokeWidth="2" stroke="#E8000E"/>
      </svg>
    ),
  },
  {
    id: 2, slug: 'custom-erp-crm', number: '02', label: 'Custom ERP & CRM',
    desc: 'Tailor-made management tools to streamline your internal operations.',
    longDesc: 'We design and develop custom ERP and CRM systems that fit your exact business processes. From client relationship tracking and pipeline management to inventory control and financial reporting — all in one unified platform.',
    features: ['Workflow Automation', 'Client Tracking', 'Team Management', 'Financial Reports', 'Custom Modules'],
    process: ['Business Process Mapping', 'System Design', 'Module Development', 'Data Migration', 'Training & Support'],
    benefits: [
      { title: 'Perfect Fit', desc: 'Stop changing your business to fit software; we build software that fits your business.' },
      { title: 'Centralized Truth', desc: 'All departments (sales, HR, logistics) work from the same updated database.' },
      { title: 'No Per-User Licensing', desc: 'Unlike SaaS platforms, you own the custom software without paying monthly per-seat fees.' },
      { title: 'Highly Secure', desc: 'Your proprietary business data remains under your absolute control.' }
    ],
    technologies: ['PostgreSQL', 'Express.js', 'React', 'Docker', 'Redis'],
    faqs: [
      { question: 'Is it better to build custom or use an off-the-shelf CRM?', answer: 'If standard CRMs require heavy workarounds or expensive plugins to fit your unique workflow, a custom solution will save money and frustration in the long run.' },
      { question: 'Can you migrate our old data?', answer: 'Yes, we handle complex data migrations from Excel, legacy databases, or old SaaS platforms.' },
      { question: 'How is the system hosted?', answer: 'We can deploy the system to your internal private servers or securely in the cloud (AWS, Azure) based on your security policies.' }
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="12" width="36" height="24" rx="3" />
        <line x1="18" y1="12" x2="18" y2="36" />
        <line x1="6" y1="22" x2="18" y2="22" />
        <circle cx="30" cy="24" r="5" />
        <path d="M30 19 L30 16" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 32 L30 29" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3, slug: 'mobile-portals', number: '03', label: 'Mobile Portals',
    desc: 'Native and cross-platform mobile apps for your customers and team.',
    longDesc: 'Reach your users wherever they are with beautifully designed mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions using React Native, ensuring a consistent experience across all devices.',
    features: ['iOS & Android', 'Push Notifications', 'Offline Mode', 'Biometric Auth', 'App Store Deployment'],
    process: ['UX Research', 'UI Design', 'Cross-platform Development', 'Testing & QA', 'Store Submission'],
    benefits: [
      { title: 'Direct Engagement', desc: 'Push notifications give you a direct, high-visibility line to your customers.' },
      { title: 'Offline Capabilities', desc: 'Allow your field teams or customers to use core features without internet access.' },
      { title: 'Brand Prestige', desc: 'Having a high-quality app on the App Store elevates your brand status.' },
      { title: 'Hardware Access', desc: 'Utilize camera, GPS, and biometrics to create powerful user experiences.' }
    ],
    technologies: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase'],
    faqs: [
      { question: 'Do you build for both iOS and Android?', answer: 'Yes, we typically use cross-platform frameworks like React Native to deliver both versions simultaneously, reducing cost and time.' },
      { question: 'Do you handle the App Store submission?', answer: 'Yes, we manage the entire publication process, including Apple and Google review guidelines.' },
      { question: 'Can the app sync with our existing website?', answer: 'Absolutely. We build a unified backend API so your website and mobile app share the exact same database in real-time.' }
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="14" y="6" width="20" height="36" rx="3" />
        <line x1="19" y1="11" x2="29" y2="11" />
        <circle cx="24" cy="36" r="2" fill="#E8000E" stroke="none" />
        <rect x="18" y="17" width="12" height="13" rx="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 4, slug: 'data-analytics', number: '04', label: 'Data & Analytics',
    desc: 'Centralized AI dashboards for real-time business intelligence.',
    longDesc: 'Turn your data into your competitive advantage. We build centralized analytics platforms powered by AI that provide real-time insights, predictive models, and custom KPI tracking — enabling faster, smarter business decisions.',
    features: ['Real-time Reports', 'Predictive AI', 'Custom KPIs', 'Data Visualization', 'Automated Alerts'],
    process: ['Data Audit', 'Pipeline Architecture', 'Dashboard Development', 'AI Model Integration', 'Ongoing Optimization'],
    benefits: [
      { title: 'Clear Visibility', desc: 'Stop guessing and start knowing exactly how your business is performing.' },
      { title: 'Identify Bottlenecks', desc: 'Easily spot inefficiencies in your sales pipeline or operational workflows.' },
      { title: 'Automated Reporting', desc: 'Save hours every week by eliminating manual report generation.' },
      { title: 'Predictive Edge', desc: 'Use AI to forecast demand, spot trends, and stay ahead of competitors.' }
    ],
    technologies: ['Python', 'Tableau', 'Power BI', 'Snowflake', 'D3.js'],
    faqs: [
      { question: 'Is my data secure?', answer: 'Security is our top priority. We use encrypted pipelines and adhere to strict data governance protocols.' },
      { question: 'Can you consolidate data from multiple tools?', answer: 'Yes, we specialize in building data warehouses that aggregate information from your CRM, ERP, Marketing tools, and accounting software.' },
      { question: 'Do I need a technical background to use the dashboards?', answer: 'Not at all. We design intuitive, visual dashboards tailored for business executives to understand at a glance.' }
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="8" y1="40" x2="40" y2="40" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="40" x2="8" y2="8" strokeWidth="2" strokeLinecap="round"/>
        <rect x="14" y="26" width="5" height="14" rx="1" fill="currentColor" opacity="0.3" stroke="none" />
        <rect x="22" y="16" width="5" height="24" rx="1" fill="#E8000E" stroke="none" />
        <rect x="30" y="10" width="5" height="30" rx="1" fill="currentColor" opacity="0.3" stroke="none" />
      </svg>
    ),
  },
];

export default solutionsData;
