import React from 'react';

const servicesData = [
  {
    id: 1, slug: 'web-development', label: 'Web Development',
    desc: 'Corporate sites, e-commerce, and custom platforms.',
    longDesc: 'We craft high-performance websites that combine stunning design with robust functionality. From corporate portals to complex e-commerce platforms, every project is built with scalability, security, and SEO best practices at its core.',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Performance Tuning', 'SSL & Security'],
    process: ['Discovery & Requirements', 'Wireframing & Prototyping', 'Development & Testing', 'Launch & Optimization'],
    benefits: [
      { title: 'Enhanced Brand Image', desc: 'A professional website builds trust and credibility with your audience.' },
      { title: 'Increased Conversion Rates', desc: 'Optimized user journeys lead to more leads and sales.' },
      { title: 'Future-Proof Scalability', desc: 'Built on modern architectures that grow seamlessly with your business.' },
      { title: 'Better Search Rankings', desc: 'Technical SEO ensures you are found by the right customers.' }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    faqs: [
      { question: 'How long does a typical website take to build?', answer: 'Most corporate websites take between 4 to 8 weeks, depending on complexity and content readiness.' },
      { question: 'Do you provide ongoing maintenance?', answer: 'Yes, we offer comprehensive support plans to keep your site secure, updated, and fast.' },
      { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. All our websites are built with a mobile-first approach to ensure perfect rendering on all devices.' }
    ],
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
    benefits: [
      { title: 'Streamlined Operations', desc: 'Centralize your processes and reduce manual data entry.' },
      { title: 'Unmatched Performance', desc: 'Single Page Applications (SPAs) offer instant load times and native-like feel.' },
      { title: 'High Security', desc: 'Enterprise-grade security protocols protect your sensitive business data.' },
      { title: 'Seamless Integrations', desc: 'Easily connect your web app with existing ERPs, CRMs, or third-party APIs.' }
    ],
    technologies: ['React', 'Vue', 'Node.js', 'Express', 'MongoDB'],
    faqs: [
      { question: 'What is the difference between a website and a web app?', answer: 'A website is primarily informational, while a web application provides interactive functionality (like a dashboard, portal, or SaaS tool).' },
      { question: 'Can you integrate the app with our existing systems?', answer: 'Yes, we specialize in building API-first architectures that connect smoothly with your current software stack.' },
      { question: 'How do you ensure data security?', answer: 'We implement industry best practices including end-to-end encryption, role-based access control (RBAC), and regular vulnerability audits.' }
    ],
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
    benefits: [
      { title: 'Cost Reduction', desc: 'Automate manual tasks to reduce operational overhead significantly.' },
      { title: 'Error Minimization', desc: 'AI algorithms perform repetitive tasks with near-perfect accuracy.' },
      { title: 'Predictive Insights', desc: 'Anticipate market trends and customer behavior using historical data.' },
      { title: '24/7 Operations', desc: 'Automated systems run around the clock without supervision.' }
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain'],
    faqs: [
      { question: 'Do we need a lot of data to use AI?', answer: 'Not necessarily. While custom models require data, we can leverage pre-trained models (like GPT-4) to provide immediate value with minimal proprietary data.' },
      { question: 'Will AI replace my employees?', answer: 'No, our AI automation is designed to augment your team, taking over repetitive tasks so your employees can focus on high-value, strategic work.' },
      { question: 'How secure is our data when using AI?', answer: 'We prioritize data privacy. We can deploy local models on your own servers or use enterprise APIs that do not train on your private data.' }
    ],
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
    benefits: [
      { title: 'Instant Responses', desc: 'Never make a customer wait. Provide instant answers 24/7/365.' },
      { title: 'Higher Lead Conversion', desc: 'Automatically qualify leads and schedule meetings while you sleep.' },
      { title: 'Omnichannel Presence', desc: 'Engage customers on WhatsApp, Facebook Messenger, or your website.' },
      { title: 'Reduced Support Costs', desc: 'Handle 80% of routine inquiries without human intervention.' }
    ],
    technologies: ['Dialogflow', 'WhatsApp Business API', 'Node.js', 'OpenAI API'],
    faqs: [
      { question: 'Can the chatbot transfer to a human agent?', answer: 'Yes! We configure seamless human-handoff protocols so complex queries are instantly routed to your support team.' },
      { question: 'Does it understand languages other than English?', answer: 'Absolutely. Our chatbots support over 50 languages, including French and Moroccan Darija (via customized NLP training).' },
      { question: 'Can it connect to my CRM?', answer: 'Yes, we integrate the chatbot with HubSpot, Salesforce, Zoho, and custom CRMs to sync leads automatically.' }
    ],
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
    benefits: [
      { title: 'Data-Driven Decisions', desc: 'Base your strategy on real-time numbers, not just intuition.' },
      { title: 'Unified View', desc: 'Consolidate data from marketing, sales, and operations into one screen.' },
      { title: 'Automated Reporting', desc: 'Eliminate manual Excel sheets with automated weekly or monthly reports.' },
      { title: 'Custom Visualizations', desc: 'Graphs and charts tailored specifically to your unique business metrics.' }
    ],
    technologies: ['React', 'D3.js', 'Chart.js', 'Power BI integration', 'Metabase'],
    faqs: [
      { question: 'Where does the data come from?', answer: 'We connect your dashboard directly to your existing databases, CRMs, ERPs, or third-party APIs (like Google Analytics or Stripe).' },
      { question: 'Can I export the reports?', answer: 'Yes, our dashboards allow you to export data in CSV, Excel, or PDF formats.' },
      { question: 'Is the dashboard accessible on mobile?', answer: 'Yes, we design responsive BI interfaces so you can check your KPIs on the go from any device.' }
    ],
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
    benefits: [
      { title: 'Eliminate Data Silos', desc: 'Ensure all your software tools communicate and share data seamlessly.' },
      { title: 'Increase Efficiency', desc: 'Automate data transfer to avoid manual copy-pasting between systems.' },
      { title: 'Scalable Architecture', desc: 'A microservices approach allows you to swap tools without rebuilding everything.' },
      { title: 'Partner Connectivity', desc: 'Provide secure APIs for your B2B partners to interact with your platform.' }
    ],
    technologies: ['Node.js', 'GraphQL', 'REST', 'Docker', 'AWS API Gateway'],
    faqs: [
      { question: 'What is an API?', answer: 'An API (Application Programming Interface) is a secure bridge that allows two different software systems to talk to each other and share data.' },
      { question: 'Do you build custom APIs from scratch?', answer: 'Yes, we can expose your internal database via a secure, custom-built REST or GraphQL API.' },
      { question: 'Can you integrate legacy systems?', answer: 'Yes, we have experience building middleware that connects older legacy systems to modern cloud applications.' }
    ],
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
    benefits: [
      { title: 'Peace of Mind', desc: 'Focus on your business while we handle server uptime and software updates.' },
      { title: 'Maximum Security', desc: 'Regular vulnerability patching keeps your data safe from threats.' },
      { title: 'Cost Predictability', desc: 'Avoid expensive emergency fixes with a predictable monthly maintenance plan.' },
      { title: 'Continuous Improvement', desc: 'We do not just maintain; we constantly optimize for speed and user experience.' }
    ],
    technologies: ['Datadog', 'Sentry', 'GitHub Actions', 'AWS CloudWatch'],
    faqs: [
      { question: 'What does a SLA (Service Level Agreement) cover?', answer: 'Our SLA guarantees specific response times (e.g., under 2 hours for critical bugs) and server uptime targets (e.g., 99.9%).' },
      { question: 'Do you support platforms you didn\'t build?', answer: 'Yes, after a thorough technical audit of the codebase, we can take over maintenance for existing platforms.' },
      { question: 'How do we report bugs?', answer: 'You will have access to a dedicated client portal and a direct Slack/WhatsApp channel for immediate communication.' }
    ],
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
    benefits: [
      { title: 'Long-term Traffic', desc: 'Unlike paid ads, SEO provides sustainable, free organic traffic over time.' },
      { title: 'High Intent Leads', desc: 'Capture customers exactly when they are searching for your services.' },
      { title: 'Brand Authority', desc: 'Ranking on the first page of Google builds immense trust in your brand.' },
      { title: 'Better User Experience', desc: 'Technical SEO improves site speed and usability, benefiting all visitors.' }
    ],
    technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'Semrush', 'Lighthouse'],
    faqs: [
      { question: 'How long does it take to see results?', answer: 'SEO is a long-term strategy. Typically, you will start seeing noticeable improvements in traffic and rankings within 3 to 6 months.' },
      { question: 'Do you guarantee a #1 ranking?', answer: 'No honest agency can guarantee a #1 ranking due to Google\'s changing algorithms. We guarantee best practices that drastically improve your visibility.' },
      { question: 'What is Technical SEO?', answer: 'It involves optimizing the backend of your site—like page speed, mobile-friendliness, XML sitemaps, and schema markup—so search engines can crawl it easily.' }
    ],
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
    benefits: [
      { title: 'Global Reach', desc: 'Sell your products to anyone, anywhere, at any time.' },
      { title: 'Frictionless Checkout', desc: 'Optimized payment flows reduce cart abandonment.' },
      { title: 'Automated Inventory', desc: 'Sync your physical stock with your online store automatically.' },
      { title: 'Customer Loyalty', desc: 'Features like wishlists, accounts, and personalized emails bring customers back.' }
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js Commerce'],
    faqs: [
      { question: 'Which platform do you use for E-commerce?', answer: 'We are platform-agnostic. Depending on your needs, we build on Shopify, WooCommerce, or completely custom headless platforms.' },
      { question: 'Can you integrate local Moroccan payment gateways?', answer: 'Yes, we regularly integrate local payment solutions like CMI (Centre Monétique Interbancaire) and PayZone.' },
      { question: 'Do you help with product imports?', answer: 'Yes, we can help format your data and perform bulk imports of your initial product catalog.' }
    ],
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
    benefits: [
      { title: 'Higher Retention', desc: 'Users stay longer on interfaces that are beautiful and easy to use.' },
      { title: 'Lower Support Costs', desc: 'Intuitive design means fewer users get confused and contact support.' },
      { title: 'Premium Branding', desc: 'A bespoke interface positions your brand as a market leader.' },
      { title: 'Developer Ready', desc: 'We deliver clean, component-based design systems ready for coding.' }
    ],
    technologies: ['Figma', 'Adobe XD', 'Framer', 'Protopie'],
    faqs: [
      { question: 'Do you provide just design, or development too?', answer: 'We do both. We can design your product and hand it off to your internal developers, or our engineers can build it for you.' },
      { question: 'What is the difference between UI and UX?', answer: 'UX (User Experience) focuses on logic, flow, and how the app works. UI (User Interface) focuses on colors, typography, and how the app looks.' },
      { question: 'Do you test the designs with real users?', answer: 'Yes, if required, we conduct usability testing sessions with interactive prototypes before writing a single line of code.' }
    ],
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
