import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <img src="/coding_to_ping.png" alt="Coding To Ping" style={{ height: '72px', width: 'auto', display: 'block', borderRadius: '6px', marginBottom: '16px' }} />
            <div className="footer-desc">Agence IA + Développement Web pour PME Marocaines. Digitalisation, automatisation et croissance.</div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              <a href="#">Sites web</a>
              <a href="#">Applications web</a>
              <a href="#">Automatisation IA</a>
              <a href="#">Chatbots</a>
              <a href="#">Dashboards</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Entreprise</div>
            <div className="footer-links">
              <a href="#">À propos</a>
              <a href="#">Réalisations</a>
              <a href="#">Notre méthode</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-links">
              <a href="mailto:contact@codingtopping.ma">contact@codingtopping.ma</a>
              <a href="https://wa.me/212600000000">WhatsApp</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 <span>codPING</span> · Coding to Ping. Tous droits réservés.</div>
          <div className="footer-socials">
            <a className="social-pill" href="#" title="LinkedIn">in</a>
            <a className="social-pill" href="#" title="Instagram">ig</a>
            <a className="social-pill" href="#" title="WhatsApp">wa</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
