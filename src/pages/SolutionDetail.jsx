import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import solutionsData from '../data/solutionsData';

// Helper component for the FAQ accordion
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`detail-faq-item detail-faq-item--dark ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
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

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutionsData.find(s => s.slug === slug);

  if (!solution) {
    return (
      <div className="detail-not-found detail-not-found--dark">
        <h1>Solution not found</h1>
        <Link to="/" className="detail-back-btn">← Back to Home</Link>
      </div>
    );
  }

  // Get other solutions for the footer link
  const otherSolutions = solutionsData.filter(s => s.id !== solution.id).slice(0, 3);

  return (
    <div className="detail-page detail-page--dark">
      {/* Enhanced Split Hero */}
      <section className="detail-hero-split detail-hero-split--dark">
        <div className="detail-hero-split-inner">
          <div className="detail-hero-split-content">
            <Link to="/" className="detail-back-link">← Back to Home</Link>
            <div className="detail-hero-number">{solution.number}</div>
            <h1 className="detail-hero-title">{solution.label}</h1>
            <p className="detail-hero-desc">{solution.longDesc}</p>
            <Link to="/contact" className="detail-hero-cta">Build Your Solution</Link>
          </div>
          <div className="detail-hero-split-visual">
            <div className="detail-hero-icon-large detail-hero-icon--dark">{solution.icon}</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="detail-content detail-content--dark">
        <div className="detail-container">
          
          {/* Why Choose Us / Benefits */}
          {solution.benefits && (
            <div className="detail-section">
              <h2 className="detail-section-title">The Business Value</h2>
              <div className="detail-divider"></div>
              <div className="detail-benefits-grid">
                {solution.benefits.map((benefit, i) => (
                  <div className="detail-benefit-card detail-benefit-card--dark" key={i}>
                    <h3 className="detail-benefit-title">{benefit.title}</h3>
                    <p className="detail-benefit-desc">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="detail-section">
            <h2 className="detail-section-title">Platform Features</h2>
            <div className="detail-divider"></div>
            <div className="detail-features-grid">
              {solution.features.map((f, i) => (
                <div className="detail-feature-card detail-feature-card--dark" key={i}>
                  <div className="detail-feature-num">{String(i + 1).padStart(2, '0')}</div>
                  <span className="detail-feature-text">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          {solution.technologies && (
            <div className="detail-section">
              <h2 className="detail-section-title">Tech Stack</h2>
              <div className="detail-divider"></div>
              <div className="detail-tech-flex">
                {solution.technologies.map((tech, i) => (
                  <span className="detail-tech-pill detail-tech-pill--dark" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Process */}
          <div className="detail-section">
            <h2 className="detail-section-title">Deployment Process</h2>
            <div className="detail-divider"></div>
            <div className="detail-process">
              {solution.process.map((step, i) => (
                <div className="detail-process-step detail-process-step--dark" key={i}>
                  <div className="detail-process-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="detail-process-line" aria-hidden="true"></div>
                  <p className="detail-process-text">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {solution.faqs && (
            <div className="detail-section">
              <h2 className="detail-section-title">Frequently Asked Questions</h2>
              <div className="detail-divider"></div>
              <div className="detail-faq-list">
                {solution.faqs.map((faq, i) => (
                  <FAQItem faq={faq} key={i} />
                ))}
              </div>
            </div>
          )}

          {/* Other Solutions */}
          <div className="detail-section detail-other-services">
            <h3 className="detail-other-title">Explore Other Solutions</h3>
            <div className="detail-other-flex">
              {otherSolutions.map(s => (
                <Link to={`/solutions/${s.slug}`} className="detail-other-link detail-other-link--dark" key={s.id}>
                  {s.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="detail-cta detail-cta--dark">
            <h3 className="detail-cta-title">Ready to get started?</h3>
            <p className="detail-cta-text">Let's discuss how we can build the perfect solution for you.</p>
            <Link to="/contact" className="detail-cta-btn">Get a Free Quote →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
