import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#methode',  label: 'Méthode' },
    { href: '#projets',  label: 'Projets' },
    { href: '#contact',  label: 'Contact' },
  ];

  return (
    <nav>
      <div className="nav-inner">
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <a className="nav-logo" href="#">
            <img src="/coding_to_ping.png" alt="Coding To Ping" style={{ height: '36px', width: 'auto', display: 'block', transform: 'scale(1.6)', transformOrigin: 'left center' }} />
          </a>
        </div>

        <nav className="nav-links" style={{ flex: 0, display: 'flex', justifyContent: 'center' }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link${activeSection === l.href.slice(1) ? ' active' : ''}`}
            >{l.label}</a>
          ))}
        </nav>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <a className="nav-cta" href="#contact">Devis gratuit →</a>
        </div>
      </div>
    </nav>
  );
}
