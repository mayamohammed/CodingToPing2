import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveSection(current);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#methode', label: 'Methodology' },
    { href: '#projets', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
    <nav className={isScrolled ? 'nav-scrolled' : ''}>
      <div className="nav-inner">
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <a className="nav-logo" href="#">
            <img src="/coding_to_ping.png" alt="Coding To Ping" style={{ height: '36px', width: 'auto', display: 'block', transform: 'scale(1.6)', transformOrigin: 'left center' }} />
          </a>
        </div>

        <div className="nav-desktop-links" style={{ flex: 0, display: 'flex', justifyContent: 'center' }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link${activeSection === l.href.slice(1) ? ' active' : ''}`}
            >{l.label}</a>
          ))}
        </div>

        <div className="nav-actions" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
          <a className="nav-cta" href="#contact">Free Quote →</a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Drawer */}
    <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="mobile-drawer-inner">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`mobile-nav-link${activeSection === l.href.slice(1) ? ' active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >{l.label}</a>
        ))}
      </div>
    </div>
    </>
  );
}
