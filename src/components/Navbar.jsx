import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  const location = useLocation();

  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/#solutions', label: 'Solutions' },
    { href: '/#methode', label: 'Methodology' },
    { href: '/#projets', label: 'Projects' },
    { href: '/contact', label: 'Contact', isRoute: true },
  ];

  return (
    <>
    <nav className={isScrolled ? 'nav-scrolled' : ''}>
      <div className="nav-inner">
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Link className="nav-logo" to="/">
            <img src="/coding_to_ping.png" alt="Coding To Ping" style={{ height: '36px', width: 'auto', display: 'block', transform: 'scale(1.6)', transformOrigin: 'left center' }} />
          </Link>
        </div>

        <div className="nav-desktop-links" style={{ flex: 0, display: 'flex', justifyContent: 'center' }}>
          {links.map(l => {
            const isActiveRoute = l.isRoute && location.pathname === l.href;
            const isActiveHash = !l.isRoute && activeSection === l.href.replace('/#', '');
            
            return l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className={`nav-link${isActiveRoute ? ' active' : ''}`}
              >{l.label}</Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link${isActiveHash ? ' active' : ''}`}
              >{l.label}</a>
            );
          })}
        </div>

        <div className="nav-actions" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
          <Link className="nav-cta" to="/contact">Free Quote →</Link>
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
        {links.map(l => {
          const isActiveRoute = l.isRoute && location.pathname === l.href;
          const isActiveHash = !l.isRoute && activeSection === l.href.replace('/#', '');
          const className = `mobile-nav-link${(isActiveRoute || isActiveHash) ? ' active' : ''}`;

          return l.isRoute ? (
            <Link
              key={l.href}
              to={l.href}
              className={className}
              onClick={() => setIsMobileMenuOpen(false)}
            >{l.label}</Link>
          ) : (
            <a
              key={l.href}
              href={l.href}
              className={className}
              onClick={() => setIsMobileMenuOpen(false)}
            >{l.label}</a>
          );
        })}
      </div>
    </div>
    </>
  );
}
