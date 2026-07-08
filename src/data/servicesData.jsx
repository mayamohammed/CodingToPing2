import React from 'react';

const servicesData = [
  {
    id: 1, slug: 'web-development', label: 'Web Development',
    desc: 'Corporate sites, e-commerce, and custom platforms.',
    longDesc: 'We craft high-performance websites that combine stunning design with robust functionality. From corporate portals to complex e-commerce platforms, every project is built with scalability, security, and SEO best practices at its core.',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Performance Tuning', 'SSL & Security'],
    process: ['Discovery & Requirements', 'Wireframing & Prototyping', 'Development & Testing', 'Launch & Optimization'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="10" width="56" height="40" rx="4" />
        <line x1="4" y1="22" x2="60" y2="22" />
        <circle cx="12" cy="16" r="2" fill="currentColor" stroke="none" />
        <circle cx="20" cy="16" r="2" fill="currentColor" stroke="none" />
        <circle cx="28" cy="16" r="2" fill="currentColor" stroke="none" />
        <circle cx="32" cy="37" r="10" />
        <ellipse cx="32" cy="37" rx="5" ry="10" />
        <line x1="22" y1="37" x2="42" y2="37" />
        <circle cx="22" cy="37" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="42" cy="37" r="1.5" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 2, slug: 'web-applications', label: 'Web Applications',
    desc: 'High-performance and scalable business applications.',
    longDesc: 'We build custom web applications tailored to your business logic — from internal tools and SaaS platforms to client-facing portals. Built with modern frameworks for speed, reliability, and seamless user experience.',
    features: ['Custom Business Logic', 'Real-time Updates', 'Role-based Access', 'Cloud Deployment', 'API-first Architecture'],
    process: ['Requirements Analysis', 'Architecture Design', 'Agile Development', 'QA & Deployment'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="10" width="56" height="40" rx="4" />
        <line x1="4" y1="22" x2="60" y2="22" />
        <path d="M20 32 L13 38 L20 44" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M44 32 L51 38 L44 44" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line x1="35" y1="29" x2="29" y2="47" strokeWidth="2" strokeLinecap="round" />
        <circle cx="13" cy="38" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="51" cy="38" r="1.5" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 3, slug: 'ai-automation', label: 'AI Automation',
    desc: 'Automate your tasks and increase productivity.',
    longDesc: 'Leverage artificial intelligence to automate repetitive workflows, extract insights from data, and make smarter decisions. We integrate machine learning models, NLP engines, and predictive analytics into your existing systems.',
    features: ['Workflow Automation', 'Predictive Analytics', 'NLP & Text Processing', 'Computer Vision', 'Custom ML Models'],
    process: ['Use Case Identification', 'Data Preparation', 'Model Training', 'Integration & Monitoring'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M32 16 C24 16 18 22 18 30 C18 36 22 40 28 42 L28 48 L36 48 L36 42 C42 40 46 36 46 30 C46 22 40 16 32 16 Z" />
        <line x1="32" y1="16" x2="32" y2="48" />
        <circle cx="54" cy="24" r="2" fill="#E8000E" stroke="none" />
        <circle cx="54" cy="36" r="2" fill="#E8000E" stroke="none" />
        <circle cx="10" cy="24" r="2" fill="#E8000E" stroke="none" />
        <circle cx="10" cy="36" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 4, slug: 'smart-chatbots', label: 'Smart Chatbots',
    desc: 'AI chatbots to improve your 24/7 customer service.',
    longDesc: 'Deploy intelligent conversational agents that handle customer inquiries, qualify leads, and provide instant support around the clock. Our chatbots integrate with WhatsApp, Messenger, and your website seamlessly.',
    features: ['Multi-channel Support', 'Natural Language Understanding', 'Lead Qualification', 'CRM Integration', 'Analytics Dashboard'],
    process: ['Conversation Design', 'NLU Training', 'Channel Integration', 'Launch & Iterate'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M10 14 Q10 10 14 10 L50 10 Q54 10 54 14 L54 38 Q54 42 50 42 L24 42 L14 52 L14 42 Q10 42 10 38 Z" />
        <circle cx="22" cy="26" r="3" fill="currentColor" stroke="none" />
        <circle cx="32" cy="26" r="3" fill="currentColor" stroke="none" />
        <circle cx="42" cy="26" r="3" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 5, slug: 'dashboards-bi', label: 'Dashboards & BI',
    desc: 'Interactive dashboards and real-time tracking.',
    longDesc: 'Transform raw data into actionable insights with custom dashboards. We build interactive business intelligence tools that give you real-time visibility into KPIs, sales, operations, and customer behavior.',
    features: ['Real-time Data', 'Custom KPIs', 'Export & Reporting', 'Team Collaboration', 'Mobile Access'],
    process: ['KPI Definition', 'Data Source Integration', 'Dashboard Design', 'Deployment & Training'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="6" y="8" width="52" height="48" rx="4" />
        <line x1="6" y1="20" x2="58" y2="20" />
        <line x1="34" y1="8" x2="34" y2="56" />
        <circle cx="20" cy="38" r="10" />
        <path d="M20 38 L20 28 A10 10 0 0 1 30 38 Z" fill="#E8000E" stroke="none" />
        <rect x="38" y="34" width="5" height="14" fill="currentColor" stroke="none" rx="1" />
        <rect x="45" y="28" width="5" height="20" fill="#E8000E" stroke="none" rx="1" />
      </svg>
    ),
  },
  {
    id: 6, slug: 'api-integration', label: 'API & Integration',
    desc: 'API integration and tool connectivity.',
    longDesc: 'Connect your tools, platforms, and data sources with robust API integrations. We build RESTful and GraphQL APIs, automate data flows between systems, and ensure your tech stack works as one cohesive unit.',
    features: ['REST & GraphQL APIs', 'Third-party Connectors', 'Data Sync', 'Webhook Automation', 'API Documentation'],
    process: ['System Audit', 'API Architecture', 'Development & Testing', 'Monitoring & Maintenance'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M10 10 L28 10 L28 18 Q32 18 32 22 Q32 26 28 26 L28 34 L10 34 L10 26 Q6 26 6 22 Q6 18 10 18 Z" />
        <path d="M36 30 L54 30 L54 38 Q58 38 58 42 Q58 46 54 46 L54 54 L36 54 L36 46 Q32 46 32 42 Q32 38 36 38 Z" />
        <circle cx="36" cy="18" r="2" fill="#E8000E" stroke="none" />
        <circle cx="28" cy="46" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 7, slug: 'maintenance-support', label: 'Maintenance & Support',
    desc: 'Responsive technical support and continuous maintenance.',
    longDesc: 'Keep your digital products running at peak performance with our dedicated maintenance and support services. We handle updates, bug fixes, security patches, and performance optimization so you can focus on your business.',
    features: ['24/7 Monitoring', 'Bug Fixes & Updates', 'Security Patches', 'Performance Audits', 'SLA Guaranteed'],
    process: ['Initial Audit', 'SLA Setup', 'Ongoing Monitoring', 'Monthly Reports'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 34 L16 30 C16 19 48 19 48 30 L48 34" strokeLinecap="round" />
        <rect x="10" y="34" width="10" height="14" rx="4" />
        <rect x="44" y="34" width="10" height="14" rx="4" />
        <path d="M48 48 C48 52 44 56 32 56" strokeLinecap="round" />
        <circle cx="32" cy="56" r="2.5" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 8, slug: 'seo-optimization', label: 'SEO & Optimization',
    desc: 'Improve your visibility and attract more traffic.',
    longDesc: 'Boost your online presence with data-driven SEO strategies. We optimize your website structure, content, and performance to rank higher on Google and attract qualified organic traffic that converts.',
    features: ['Technical SEO', 'Content Strategy', 'Core Web Vitals', 'Local SEO', 'Analytics & Tracking'],
    process: ['SEO Audit', 'Keyword Research', 'On-page Optimization', 'Monitoring & Reporting'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="26" cy="26" r="16" />
        <line x1="38" y1="38" x2="56" y2="56" strokeWidth="3" strokeLinecap="round" />
        <polyline points="14,34 20,26 26,30 32,20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="32" cy="20" r="2.5" fill="#E8000E" stroke="none" />
        <circle cx="56" cy="56" r="3" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 9, slug: 'e-commerce', label: 'E-commerce',
    desc: 'Secure online stores optimized for conversion.',
    longDesc: 'Launch a powerful online store with secure payment processing, inventory management, and conversion-optimized design. We build e-commerce solutions that scale with your business and delight your customers.',
    features: ['Secure Payments', 'Inventory Management', 'Order Tracking', 'Multi-currency', 'Mobile Commerce'],
    process: ['Store Planning', 'Design & Branding', 'Development & Integration', 'Launch & Growth'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 10 L14 10 L20 40 L54 40" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10 L18 30 L54 30 L58 14 L14 14" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="46" r="5" />
        <circle cx="24" cy="46" r="2" fill="#E8000E" stroke="none" />
        <circle cx="46" cy="46" r="5" />
        <circle cx="46" cy="46" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 10, slug: 'ui-ux-design', label: 'UI/UX Design',
    desc: 'Modern, intuitive, and user-centric interfaces.',
    longDesc: 'Create digital experiences that users love. Our design process combines user research, prototyping, and visual design to deliver interfaces that are beautiful, intuitive, and drive engagement and conversions.',
    features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping', 'Usability Testing'],
    process: ['Discovery & Research', 'Information Architecture', 'Design & Iterate', 'Handoff & QA'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="6" y="8" width="44" height="34" rx="3" />
        <line x1="6" y1="18" x2="50" y2="18" />
        <path d="M28 42 L28 54 M20 54 L36 54" strokeLinecap="round" />
        <path d="M40 36 L56 20 L60 24 L44 40 Z" strokeLinejoin="round" />
        <circle cx="42" cy="38" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
];

export default servicesData;
