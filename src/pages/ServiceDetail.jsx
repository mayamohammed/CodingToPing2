import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="detail-not-found">
        <h1>Service not found</h1>
        <Link to="/" className="detail-back-btn">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-page detail-page--light">
      {/* Hero */}
      <section className="detail-hero detail-hero--light">
        <div className="detail-hero-inner">
          <Link to="/" className="detail-back-link">← Back to Home</Link>
          <div className="detail-hero-icon detail-hero-icon--light">{service.icon}</div>
          <h1 className="detail-hero-title">{service.label}</h1>
          <p className="detail-hero-desc">{service.desc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="detail-content">
        <div className="detail-container">
          {/* About */}
          <div className="detail-section">
            <h2 className="detail-section-title">About This Service</h2>
            <div className="detail-divider"></div>
            <p className="detail-text">{service.longDesc}</p>
          </div>

          {/* Features */}
          <div className="detail-section">
            <h2 className="detail-section-title">Key Features</h2>
            <div className="detail-divider"></div>
            <div className="detail-features-grid">
              {service.features.map((f, i) => (
                <div className="detail-feature-card" key={i}>
                  <div className="detail-feature-num">{String(i + 1).padStart(2, '0')}</div>
                  <span className="detail-feature-text">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="detail-section">
            <h2 className="detail-section-title">Our Process</h2>
            <div className="detail-divider"></div>
            <div className="detail-process">
              {service.process.map((step, i) => (
                <div className="detail-process-step" key={i}>
                  <div className="detail-process-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="detail-process-line" aria-hidden="true"></div>
                  <p className="detail-process-text">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="detail-cta">
            <h3 className="detail-cta-title">Ready to get started?</h3>
            <p className="detail-cta-text">Let's discuss how we can help your business grow.</p>
            <Link to="/contact" className="detail-cta-btn">Get a Free Quote →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
