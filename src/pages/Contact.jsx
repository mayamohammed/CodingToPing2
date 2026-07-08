import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Background Decor */}
      <div className="contact-bg-pattern" aria-hidden="true"></div>
      <div className="contact-orb contact-orb--1" aria-hidden="true"></div>
      <div className="contact-orb contact-orb--2" aria-hidden="true"></div>

      <div className="contact-container">
        <Link to="/" className="contact-back-link">← Back to Home</Link>
        
        <div className="contact-grid">
          
          {/* Left Column: Info */}
          <div className="contact-info">
            <h1 className="contact-title">Let's build something <span className="text-red">extraordinary.</span></h1>
            <p className="contact-desc">
              Whether you need a full digital transformation, a custom web app, or an AI automation solution, our team is ready to help you succeed.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="contact-method-label">Email Us</div>
                  <a href="mailto:contact@codingtopping.ma" className="contact-method-val">contact@codingtopping.ma</a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="contact-method-label">Call / WhatsApp</div>
                  <a href="https://wa.me/212600000000" className="contact-method-val">+212 600 00 00 00</a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="contact-method-label">Location</div>
                  <div className="contact-method-val">Casablanca, Morocco</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <div className="contact-social-label">Follow us:</div>
              <div className="contact-social-links">
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help?" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
