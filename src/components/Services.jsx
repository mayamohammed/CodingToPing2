import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 1,
    label: 'Web Development',
    desc: 'Corporate sites, e-commerce, and custom platforms.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        {/* Browser frame */}
        <rect x="4" y="10" width="56" height="40" rx="4" />
        <line x1="4" y1="22" x2="60" y2="22" />
        {/* dots */}
        <circle cx="12" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="20" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="28" cy="16" r="2" fill="#111" stroke="none" />
        {/* globe inside */}
        <circle cx="32" cy="37" r="10" />
        <ellipse cx="32" cy="37" rx="5" ry="10" />
        <line x1="22" y1="37" x2="42" y2="37" />
        <line x1="23" y1="31" x2="41" y2="31" />
        <line x1="23" y1="43" x2="41" y2="43" />
        {/* red dots on globe */}
        <circle cx="22" cy="37" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="42" cy="37" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="32" cy="27" r="1.5" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Web Applications',
    desc: 'High-performance and scalable business applications.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        <rect x="4" y="10" width="56" height="40" rx="4" />
        <line x1="4" y1="22" x2="60" y2="22" />
        <circle cx="12" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="20" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="28" cy="16" r="2" fill="#111" stroke="none" />
        {/* Code brackets */}
        <path d="M20 32 L13 38 L20 44" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M44 32 L51 38 L44 44" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line x1="35" y1="29" x2="29" y2="47" strokeWidth="2" strokeLinecap="round" />
        <circle cx="13" cy="38" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="51" cy="38" r="1.5" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'AI Automation',
    desc: 'Automate your tasks and increase productivity.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        {/* Brain shape */}
        <path d="M32 16 C24 16 18 22 18 30 C18 36 22 40 28 42 L28 48 L36 48 L36 42 C42 40 46 36 46 30 C46 22 40 16 32 16 Z" />
        <line x1="32" y1="16" x2="32" y2="48" />
        <path d="M18 30 C14 28 12 24 14 20" strokeLinecap="round" />
        <path d="M46 30 C50 28 52 24 50 20" strokeLinecap="round" />
        {/* circuit lines */}
        <line x1="46" y1="30" x2="54" y2="30" strokeWidth="1.4" />
        <line x1="54" y1="24" x2="54" y2="36" strokeWidth="1.4" />
        <circle cx="54" cy="24" r="2" fill="#E8000E" stroke="none" />
        <circle cx="54" cy="36" r="2" fill="#E8000E" stroke="none" />
        <line x1="18" y1="30" x2="10" y2="30" strokeWidth="1.4" />
        <line x1="10" y1="24" x2="10" y2="36" strokeWidth="1.4" />
        <circle cx="10" cy="24" r="2" fill="#E8000E" stroke="none" />
        <circle cx="10" cy="36" r="2" fill="#E8000E" stroke="none" />
        <line x1="32" y1="16" x2="32" y2="8" strokeWidth="1.4" />
        <circle cx="32" cy="8" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 4,
    label: 'Smart Chatbots',
    desc: 'AI chatbots to improve your 24/7 customer service.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        {/* Chat bubble */}
        <path d="M10 14 Q10 10 14 10 L50 10 Q54 10 54 14 L54 38 Q54 42 50 42 L24 42 L14 52 L14 42 L14 42 Q10 42 10 38 Z" />
        {/* 3 dots */}
        <circle cx="22" cy="26" r="3" fill="#111" stroke="none" />
        <circle cx="32" cy="26" r="3" fill="#111" stroke="none" />
        <circle cx="42" cy="26" r="3" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 5,
    label: 'Dashboards & BI',
    desc: 'Interactive dashboards and real-time tracking.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        <rect x="6" y="8" width="52" height="48" rx="4" />
        <line x1="6" y1="20" x2="58" y2="20" />
        <line x1="34" y1="8" x2="34" y2="56" />
        {/* Pie chart */}
        <circle cx="20" cy="38" r="10" />
        <path d="M20 38 L20 28 A10 10 0 0 1 30 38 Z" fill="#E8000E" stroke="none" />
        {/* Bar chart */}
        <rect x="38" y="34" width="5" height="14" fill="#111" stroke="none" rx="1" />
        <rect x="45" y="28" width="5" height="20" fill="#E8000E" stroke="none" rx="1" />
        <rect x="52" y="31" width="4" height="17" fill="#111" stroke="none" rx="1" opacity="0.4" />
        {/* small dot nav */}
        <circle cx="14" cy="14" r="2" fill="#E8000E" stroke="none" />
        <circle cx="20" cy="14" r="2" fill="#111" stroke="none" />
        <circle cx="26" cy="14" r="2" fill="#111" stroke="none" />
      </svg>
    ),
  },
  {
    id: 6,
    label: 'API & Integration',
    desc: 'API integration and tool connectivity.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        {/* Puzzle pieces */}
        <path d="M10 10 L28 10 L28 18 Q32 18 32 22 Q32 26 28 26 L28 34 L10 34 L10 26 Q6 26 6 22 Q6 18 10 18 Z" />
        <path d="M36 30 L54 30 L54 38 Q58 38 58 42 Q58 46 54 46 L54 54 L36 54 L36 46 Q32 46 32 42 Q32 38 36 38 Z" />
        {/* connection */}
        <circle cx="36" cy="18" r="2" fill="#E8000E" stroke="none" />
        <circle cx="28" cy="46" r="2" fill="#E8000E" stroke="none" />
        <line x1="36" y1="18" x2="46" y2="18" strokeDasharray="3 2" />
        <line x1="18" y1="46" x2="28" y2="46" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    id: 7,
    label: 'Maintenance & Support',
    desc: 'Responsive technical support and continuous maintenance.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        {/* Headset */}
        <path d="M16 34 L16 30 C16 19 48 19 48 30 L48 34" strokeLinecap="round" />
        <rect x="10" y="34" width="10" height="14" rx="4" />
        <rect x="44" y="34" width="10" height="14" rx="4" />
        <path d="M48 48 C48 52 44 56 32 56" strokeLinecap="round" />
        <circle cx="32" cy="56" r="2.5" fill="#E8000E" stroke="none" />
        {/* signal waves */}
        <path d="M32 22 C32 18 32 14 32 10" strokeDasharray="2 2" />
        <circle cx="32" cy="8" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 8,
    label: 'SEO & Optimization',
    desc: 'Improve your visibility and attract more traffic.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        {/* Magnifying glass */}
        <circle cx="26" cy="26" r="16" />
        <line x1="38" y1="38" x2="56" y2="56" strokeWidth="3" strokeLinecap="round" />
        {/* rising chart inside */}
        <polyline points="14,34 20,26 26,30 32,20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="32" cy="20" r="2.5" fill="#E8000E" stroke="none" />
        <circle cx="14" cy="34" r="1.5" fill="#111" stroke="none" />
        {/* red arrow on magnifier handle */}
        <circle cx="56" cy="56" r="3" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 9,
    label: 'E-commerce',
    desc: 'Secure online stores optimized for conversion.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        {/* Cart */}
        <path d="M6 10 L14 10 L20 40 L54 40" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10 L18 30 L54 30 L58 14 L14 14" strokeLinecap="round" strokeLinejoin="round" />
        {/* Grid on cart */}
        <line x1="28" y1="14" x2="26" y2="30" />
        <line x1="40" y1="14" x2="38" y2="30" />
        {/* Wheels */}
        <circle cx="24" cy="46" r="5" />
        <circle cx="24" cy="46" r="2" fill="#E8000E" stroke="none" />
        <circle cx="46" cy="46" r="5" />
        <circle cx="46" cy="46" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 10,
    label: 'UI/UX Design',
    desc: 'Modern, intuitive, and user-centric interfaces.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        {/* Monitor */}
        <rect x="6" y="8" width="44" height="34" rx="3" />
        <line x1="6" y1="18" x2="50" y2="18" />
        <circle cx="11" cy="13" r="1.5" fill="#111" stroke="none" />
        <circle cx="16" cy="13" r="1.5" fill="#111" stroke="none" />
        <path d="M28 42 L28 54 M20 54 L36 54" strokeLinecap="round" />
        {/* Pen/stylus */}
        <path d="M40 36 L56 20 L60 24 L44 40 Z" strokeLinejoin="round" />
        <line x1="56" y1="20" x2="60" y2="24" />
        <circle cx="42" cy="38" r="2" fill="#E8000E" stroke="none" />
        {/* design element inside screen */}
        <circle cx="22" cy="30" r="5" />
        <line x1="30" y1="26" x2="44" y2="26" />
        <line x1="30" y1="30" x2="40" y2="30" />
        <line x1="30" y1="34" x2="37" y2="34" />
      </svg>
    ),
  },
];

export default function Services() {
  const row1Ref = useRef(null);
  const [row1Visible, setRow1Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRow1Visible(true);
        } else {
          // Reset when scrolling back up so the animation replays
          setRow1Visible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (row1Ref.current) {
      observer.observe(row1Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="svc2-section" id="services">
      {/* Corner decorations */}
      <div className="svc2-deco svc2-deco--tr" aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="180" cy="20" r="3" fill="#E8000E" opacity="0.6"/>
          <circle cx="160" cy="60" r="2" fill="#E8000E" opacity="0.4"/>
          <circle cx="140" cy="30" r="1.5" fill="#E8000E" opacity="0.3"/>
          <path d="M120 80 L170 80 L170 30 L200 30" stroke="#ddd" strokeWidth="1" fill="none"/>
          <path d="M150 80 L150 120 L200 120" stroke="#ddd" strokeWidth="1" fill="none"/>
          <circle cx="170" cy="80" r="3" fill="none" stroke="#ccc" strokeWidth="1"/>
          <circle cx="150" cy="120" r="3" fill="none" stroke="#ccc" strokeWidth="1"/>
          <rect x="115" y="75" width="10" height="10" rx="2" fill="none" stroke="#ddd" strokeWidth="1"/>
        </svg>
      </div>
      <div className="svc2-deco svc2-deco--bl" aria-hidden="true">
        <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
          <circle cx="20" cy="160" r="3" fill="#E8000E" opacity="0.6"/>
          <circle cx="60" cy="140" r="2" fill="#E8000E" opacity="0.4"/>
          <path d="M0 80 L60 80 L60 140 L100 140" stroke="#ddd" strokeWidth="1" fill="none"/>
          <path d="M60 80 L60 40 L120 40" stroke="#ddd" strokeWidth="1" fill="none"/>
          <circle cx="60" cy="80" r="3" fill="none" stroke="#ccc" strokeWidth="1"/>
          <circle cx="60" cy="140" r="3" fill="none" stroke="#ccc" strokeWidth="1"/>
          <rect x="115" y="35" width="10" height="10" rx="2" fill="none" stroke="#ddd" strokeWidth="1"/>
        </svg>
      </div>

      <div className="svc2-container">
        {/* Header */}
        <div className="svc2-header">
          <h2 className="svc2-title">Our Services</h2>
          <div className="svc2-red-bar"/>
          <p className="svc2-subtitle">
            Tailor-made digital solutions to accelerate your business growth.
          </p>
        </div>

        {/* Row 1 — 5 cards with scroll-reveal animation */}
        <div
          className={`svc2-row svc2-row--animated ${row1Visible ? 'svc2-row--visible' : ''}`}
          ref={row1Ref}
        >
          {services.slice(0, 5).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* Row 2 — 5 cards */}
        <div className="svc2-row">
          {services.slice(5, 10).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="svc2-card">
      {/* Animated blob background */}
      <div className="svc2-blob" aria-hidden="true"/>
      {/* Glass inner layer */}
      <div className="svc2-bg">
        <div className="svc2-card-inner">
          <div className="svc2-icon-area">
            {service.icon}
          </div>
          <h3 className="svc2-card-title">{service.label}</h3>
          <div className="svc2-card-bar"/>
          <p className="svc2-card-desc">{service.desc}</p>
        </div>
      </div>
    </div>
  );
}
