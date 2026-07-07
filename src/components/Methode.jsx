import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Audit',
    desc: 'We analyze your business, goals, and digital ecosystem to identify growth levers.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="methode-svg">
        {/* Magnifying glass */}
        <circle cx="28" cy="28" r="14" />
        <line x1="38" y1="38" x2="54" y2="54" strokeWidth="3" strokeLinecap="round" />
        {/* Document inside */}
        <rect x="20" y="20" width="16" height="18" rx="2" strokeWidth="1.2" />
        <line x1="23" y1="25" x2="33" y2="25" strokeWidth="1.2" />
        <line x1="23" y1="29" x2="31" y2="29" strokeWidth="1.2" />
        <line x1="23" y1="33" x2="28" y2="33" strokeWidth="1.2" />
        {/* Red accents */}
        <circle cx="54" cy="54" r="3" fill="#E8000E" stroke="none" />
        <circle cx="20" cy="20" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Strategy & Planning',
    desc: 'We design a custom strategy with a clear action plan, measurable goals, and a precise timeline.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="methode-svg">
        {/* Clipboard */}
        <rect x="12" y="8" width="40" height="50" rx="4" />
        <rect x="22" y="4" width="20" height="10" rx="3" />
        {/* Checklist */}
        <rect x="18" y="22" width="8" height="8" rx="2" />
        <polyline points="20,26 23,29 27,23" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="26" x2="44" y2="26" strokeWidth="1.4" />
        <rect x="18" y="34" width="8" height="8" rx="2" />
        <polyline points="20,38 23,41 27,35" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="38" x2="44" y2="38" strokeWidth="1.4" />
        <rect x="18" y="46" width="8" height="8" rx="2" />
        <line x1="30" y1="50" x2="40" y2="50" strokeWidth="1.4" />
        {/* Red accent */}
        <circle cx="32" cy="7" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Design & Prototyping',
    desc: 'Our designers create interactive mockups and high-fidelity prototypes validated with you at each step.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="methode-svg">
        {/* Pen tool / bezier */}
        <circle cx="14" cy="14" r="4" />
        <circle cx="50" cy="14" r="4" />
        <circle cx="32" cy="50" r="4" />
        <path d="M14 18 Q14 50 32 46" strokeWidth="1.6" />
        <path d="M50 18 Q50 50 32 46" strokeWidth="1.6" />
        {/* Control lines */}
        <line x1="14" y1="14" x2="14" y2="34" strokeDasharray="3 2" />
        <line x1="50" y1="14" x2="50" y2="34" strokeDasharray="3 2" />
        {/* Red accents */}
        <circle cx="14" cy="14" r="2" fill="#E8000E" stroke="none" />
        <circle cx="50" cy="14" r="2" fill="#E8000E" stroke="none" />
        <circle cx="32" cy="50" r="2" fill="#E8000E" stroke="none" />
        <circle cx="14" cy="34" r="2.5" fill="#111" stroke="none" />
        <circle cx="50" cy="34" r="2.5" fill="#111" stroke="none" />
      </svg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Agile Development',
    desc: 'Iterative development with short sprints, regular deliverables, and transparent communication.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="methode-svg">
        {/* Code brackets */}
        <path d="M18 18 L8 32 L18 46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <path d="M46 18 L56 32 L46 46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <line x1="36" y1="14" x2="28" y2="50" strokeWidth="2" strokeLinecap="round" />
        {/* Cycle arrows around */}
        <path d="M32 4 A28 28 0 0 1 56 16" strokeWidth="1.4" strokeLinecap="round" />
        <polygon points="56,16 54,10 60,12" fill="#E8000E" stroke="none" />
        <path d="M56 48 A28 28 0 0 1 32 60" strokeWidth="1.4" strokeLinecap="round" />
        <polygon points="32,60 34,54 28,56" fill="#E8000E" stroke="none" />
        {/* Red accents */}
        <circle cx="8" cy="32" r="2" fill="#E8000E" stroke="none" />
        <circle cx="56" cy="32" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Testing & Validation',
    desc: 'Rigorous performance, security, and UX testing before every production release to ensure quality.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="methode-svg">
        {/* Shield */}
        <path d="M32 6 L54 16 L54 34 C54 48 32 58 32 58 C32 58 10 48 10 34 L10 16 Z" strokeLinejoin="round" />
        {/* Checkmark */}
        <polyline points="20,32 28,40 44,24" stroke="#E8000E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Small decorative dots */}
        <circle cx="32" cy="10" r="2" fill="#E8000E" stroke="none" />
      </svg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Launch & Support',
    desc: 'Optimized deployment, team training, and continuous support to ensure long-term success.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.6" className="methode-svg">
        {/* Rocket */}
        <path d="M32 8 C32 8 22 18 22 36 L32 44 L42 36 C42 18 32 8 32 8 Z" strokeLinejoin="round" />
        <circle cx="32" cy="26" r="4" />
        <circle cx="32" cy="26" r="2" fill="#E8000E" stroke="none" />
        {/* Fins */}
        <path d="M22 36 L14 42 L18 46 L22 42" strokeLinejoin="round" />
        <path d="M42 36 L50 42 L46 46 L42 42" strokeLinejoin="round" />
        {/* Flames */}
        <path d="M28 44 L32 56 L36 44" stroke="#E8000E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 44 L32 50 L34 44" fill="#E8000E" stroke="none" />
        {/* Stars */}
        <circle cx="12" cy="14" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="52" cy="20" r="1.5" fill="#E8000E" stroke="none" />
        <circle cx="8" cy="28" r="1" fill="#111" stroke="none" />
      </svg>
    ),
  },
];

export default function Methode() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-step-index');
            setVisibleCards((prev) => new Set([...prev, idx]));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    const cards = sectionRef.current?.querySelectorAll('.methode-step');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="methode-section" id="methode" ref={sectionRef}>
      {/* Background decorations */}
      <div className="methode-bg-pattern" aria-hidden="true"></div>

      <div className="methode-container">
        {/* Header */}
        <div className="methode-header">
          <span className="methode-badge">How we work</span>
          <h2 className="methode-title">Our Methodology</h2>
          <div className="methode-red-bar" />
          <p className="methode-subtitle">
            A structured and transparent approach designed to turn your ideas into high-performance digital solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="methode-timeline">
          {/* Vertical connector line */}
          <div className="methode-line" aria-hidden="true" />

          {steps.map((step, i) => (
            <div
              className={`methode-step ${visibleCards.has(String(i)) ? 'methode-step--visible' : ''}`}
              key={step.id}
              data-step-index={i}
              style={{ '--step-delay': `${i * 0.12}s` }}
            >
              {/* Number circle on the timeline */}
              <div className="methode-step-number">
                <span>{step.number}</span>
              </div>

              {/* Card */}
              <div className="methode-step-card">
                <div className="methode-step-blob" aria-hidden="true" />
                <div className="methode-step-glass">
                  <div className="methode-step-icon">
                    {step.icon}
                  </div>
                  <div className="methode-step-content">
                    <h3 className="methode-step-title">{step.title}</h3>
                    <div className="methode-step-bar" />
                    <p className="methode-step-desc">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
