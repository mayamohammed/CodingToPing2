import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <img src="/coding_to_ping.png" alt="Coding To Ping" style={{ height: '72px', width: 'auto', display: 'block', borderRadius: '6px', marginBottom: '16px' }} />
            <div className="footer-desc">AI Agency + Web Development for Moroccan SMEs. Digitalization, automation, and growth.</div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              <a href="#">Websites</a>
              <a href="#">Web Apps</a>
              <a href="#">AI Automation</a>
              <a href="#">Chatbots</a>
              <a href="#">Dashboards</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Portfolio</a>
              <a href="#">Our Methodology</a>
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
          <div className="footer-copy">© 2026 <span>codPING</span> · Coding to Ping. All rights reserved.</div>
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
