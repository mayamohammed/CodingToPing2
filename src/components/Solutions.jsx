import React from 'react';

const solutions = [
  {
    id: 1,
    number: '01',
    label: 'E-commerce Platforms',
    desc: 'End-to-end online stores designed for conversion and scalability.',
    features: ['Payment Integration', 'Product Catalog', 'Analytics Dashboard'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 16 L38 16 L35 32 L13 32 Z" strokeLinejoin="round" />
        <path d="M10 16 L7 10 L4 10" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="38" r="3" />
        <circle cx="32" cy="38" r="3" />
        <path d="M20 22 L28 22" strokeLinecap="round" strokeWidth="2" stroke="#E8000E"/>
        <path d="M18 26 L30 26" strokeLinecap="round" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    label: 'Custom ERP & CRM',
    desc: 'Tailor-made management tools to streamline your internal operations.',
    features: ['Workflow Automation', 'Client Tracking', 'Team Management'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="12" width="36" height="24" rx="3" />
        <line x1="18" y1="12" x2="18" y2="36" />
        <line x1="6" y1="22" x2="18" y2="22" />
        <circle cx="30" cy="24" r="5" />
        <path d="M30 19 L30 16" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 32 L30 29" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 24 L22 24" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 24 L35 24" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    label: 'Mobile Portals',
    desc: 'Native and cross-platform mobile apps for your customers and team.',
    features: ['iOS & Android', 'Push Notifications', 'Offline Mode'],
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
    id: 4,
    number: '04',
    label: 'Data & Analytics',
    desc: 'Centralized AI dashboards for real-time business intelligence.',
    features: ['Real-time Reports', 'Predictive AI', 'Custom KPIs'],
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

export default function Solutions() {
  return (
    <section className="sol-section" id="solutions">
      {/* Background grid pattern */}
      <div className="sol-bg-pattern" aria-hidden="true"></div>
      
      {/* Floating accent orbs */}
      <div className="sol-orb sol-orb--1" aria-hidden="true"></div>
      <div className="sol-orb sol-orb--2" aria-hidden="true"></div>

      <div className="sol-container">
        {/* Header */}
        <div className="sol-header">
          <span className="sol-badge">What We Build</span>
          <h2 className="sol-title">Our Solutions</h2>
          <p className="sol-subtitle">
            Specialized platforms and software built to empower your unique workflow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="sol-grid">
          {solutions.map((s) => (
            <div className="sol-card" key={s.id}>
              {/* Card top accent line */}
              <div className="sol-card-accent"></div>

              <div className="sol-card-header">
                <div className="sol-card-icon">
                  {s.icon}
                </div>
                <span className="sol-card-number">{s.number}</span>
              </div>

              <h3 className="sol-card-title">{s.label}</h3>
              <p className="sol-card-desc">{s.desc}</p>

              {/* Feature tags */}
              <div className="sol-card-features">
                {s.features.map((f, i) => (
                  <span className="sol-feature-tag" key={i}>{f}</span>
                ))}
              </div>

              {/* Arrow link */}
              <a href="#contact" className="sol-card-arrow" aria-label={`Learn more about ${s.label}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
