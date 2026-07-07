import React, { useEffect, useRef, useState } from 'react';

const row1Services = [
  {
    id: 1,
    label: 'Websites',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        <rect x="4" y="10" width="56" height="40" rx="4" />
        <line x1="4" y1="22" x2="60" y2="22" />
        <circle cx="12" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="20" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="28" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="32" cy="37" r="10" />
        <ellipse cx="32" cy="37" rx="5" ry="10" />
        <line x1="22" y1="37" x2="42" y2="37" />
        <line x1="23" y1="31" x2="41" y2="31" />
        <line x1="23" y1="43" x2="41" y2="43" />
        <circle cx="22" cy="37" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="42" cy="37" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="32" cy="27" r="1.5" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Web Apps',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        <rect x="4" y="10" width="56" height="40" rx="4" />
        <line x1="4" y1="22" x2="60" y2="22" />
        <circle cx="12" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="20" cy="16" r="2" fill="#111" stroke="none" />
        <circle cx="28" cy="16" r="2" fill="#111" stroke="none" />
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
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        <path d="M32 16 C24 16 18 22 18 30 C18 36 22 40 28 42 L28 48 L36 48 L36 42 C42 40 46 36 46 30 C46 22 40 16 32 16 Z" />
        <line x1="32" y1="16" x2="32" y2="48" />
        <path d="M18 30 C14 28 12 24 14 20" strokeLinecap="round" />
        <path d="M46 30 C50 28 52 24 50 20" strokeLinecap="round" />
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
    label: 'Chatbots',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        <path d="M10 14 Q10 10 14 10 L50 10 Q54 10 54 14 L54 38 Q54 42 50 42 L24 42 L14 52 L14 42 L14 42 Q10 42 10 38 Z" />
        <circle cx="22" cy="26" r="3" fill="#111" stroke="none" />
        <circle cx="32" cy="26" r="3" fill="#111" stroke="none" />
        <circle cx="42" cy="26" r="3" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 5,
    label: 'Dashboards',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="svc2-svg">
        <rect x="6" y="8" width="52" height="48" rx="4" />
        <line x1="6" y1="20" x2="58" y2="20" />
        <line x1="34" y1="8" x2="34" y2="56" />
        <circle cx="20" cy="38" r="10" />
        <path d="M20 38 L20 28 A10 10 0 0 1 30 38 Z" fill="#E8000E" stroke="none" />
        <rect x="38" y="34" width="5" height="14" fill="#111" stroke="none" rx="1" />
        <rect x="45" y="28" width="5" height="20" fill="#E8000E" stroke="none" rx="1" />
        <rect x="52" y="31" width="4" height="17" fill="#111" stroke="none" rx="1" opacity="0.4" />
        <circle cx="14" cy="14" r="2" fill="#E8000E" stroke="none" />
        <circle cx="20" cy="14" r="2" fill="#111" stroke="none" />
        <circle cx="26" cy="14" r="2" fill="#111" stroke="none" />
      </svg>
    ),
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [phase, setPhase] = useState('hero'); // 'hero' | 'exiting' | 'gone'

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      const heroBottom = heroRect.bottom;
      const viewportH = window.innerHeight;

      // When hero bottom is near or past the top of the viewport, cards should be gone
      // When hero bottom is in the bottom 30% of viewport, start exiting
      if (heroBottom < viewportH * 0.35) {
        setPhase('gone');
      } else if (heroBottom < viewportH * 0.75) {
        setPhase('exiting');
      } else {
        setPhase('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-content">
        <div style={{ marginBottom: '30px' }}>
          <img
            src="/2.png"
            alt="Coding To Ping Logo"
            style={{ maxWidth: '500px', width: '100%', display: 'block', margin: '0 auto' }}
          />
        </div>

        <h1 className="hero-headline">
          <span className="ia-red">AI</span> Agency + Web Development<br />for Moroccan SMEs
        </h1>

        <div className="hero-divider"></div>

        <p className="hero-subtitle">
          We help SMEs digitize their sales,<br />their operations, and their customer service.
        </p>

        {/* Row 1 cards in hero */}
        <div
          className={`hero-service-cards hero-cards--${phase}`}
          ref={cardsContainerRef}
        >
          {row1Services.map((s, i) => (
            <div
              className="hero-svc-card"
              key={s.id}
              style={{ '--card-index': i }}
            >
              <div className="hero-svc-icon">{s.icon}</div>
              <span className="hero-svc-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Decorative divider line */}
        <div className="hero-bottom-line"></div>

        <div className="hero-tagline">
          <span className="hero-tagline-text">Innovation</span>
          <div className="hero-tagline-dot"></div>
          <span className="hero-tagline-text">Performance</span>
          <div className="hero-tagline-dot"></div>
          <span className="hero-tagline-text">Support</span>
        </div>
      </div>
    </section>
  );
}
