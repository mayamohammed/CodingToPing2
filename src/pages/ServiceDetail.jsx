import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';

// Helper component for the FAQ accordion
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`detail-faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="detail-faq-question">
        <h4>{faq.question}</h4>
        <span className="detail-faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="detail-faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

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

  // Get other services for the footer link
  const otherServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="detail-page detail-page--light">
      {/* Enhanced Split Hero */}
      <section className="detail-hero-split detail-hero-split--light">
        <div className="detail-hero-split-inner">
          <div className="detail-hero-split-content">
            <Link to="/" className="detail-back-link">← Back to Home</Link>
            <h1 className="detail-hero-title">{service.label}</h1>
            <p className="detail-hero-desc">{service.longDesc}</p>
            <Link to="/contact" className="detail-hero-cta">Get a Free Quote</Link>
          </div>
          <div className="detail-hero-split-visual">
            <div className="detail-hero-icon-large detail-hero-icon--light">{service.icon}</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="detail-content">
        <div className="detail-container">
          
          {/* Why Choose Us / Benefits */}
          {service.benefits && (
            <div className="detail-section">
              <h2 className="detail-section-title">Why You Need This</h2>
              <div className="detail-divider"></div>
              <div className="detail-benefits-grid">
                {service.benefits.map((benefit, i) => (
                  <div className="detail-benefit-card" key={i}>
                    <h3 className="detail-benefit-title">{benefit.title}</h3>
                    <p className="detail-benefit-desc">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="detail-section">
            <h2 className="detail-section-title">Key Capabilities</h2>
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

          {/* Technologies */}
          {service.technologies && (
            <div className="detail-section">
              <h2 className="detail-section-title">Technologies We Use</h2>
              <div className="detail-divider"></div>
              <div className="detail-tech-flex">
                {service.technologies.map((tech, i) => (
                  <span className="detail-tech-pill" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          )}

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

          {/* FAQs */}
          {service.faqs && (
            <div className="detail-section">
              <h2 className="detail-section-title">Frequently Asked Questions</h2>
              <div className="detail-divider"></div>
              <div className="detail-faq-list">
                {service.faqs.map((faq, i) => (
                  <FAQItem faq={faq} key={i} />
                ))}
              </div>
            </div>
          )}

          {/* Other Services */}
          <div className="detail-section detail-other-services">
            <h3 className="detail-other-title">Explore Other Services</h3>
            <div className="detail-other-flex">
              {otherServices.map(s => (
                <Link to={`/services/${s.slug}`} className="detail-other-link" key={s.id}>
                  {s.label} →
                </Link>
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
