import React from 'react';
import { useParams, Link } from 'react-router-dom';
import solutionsData from '../data/solutionsData';

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

  return (
    <div className="detail-page detail-page--dark">
      {/* Hero */}
      <section className="detail-hero detail-hero--dark">
        <div className="detail-bg-pattern" aria-hidden="true"></div>
        <div className="detail-orb detail-orb--1" aria-hidden="true"></div>
        <div className="detail-orb detail-orb--2" aria-hidden="true"></div>
        <div className="detail-hero-inner">
          <Link to="/" className="detail-back-link detail-back-link--dark">← Back to Home</Link>
          <div className="detail-hero-icon detail-hero-icon--dark">{solution.icon}</div>
          <h1 className="detail-hero-title detail-hero-title--dark">{solution.label}</h1>
          <p className="detail-hero-desc detail-hero-desc--dark">{solution.desc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="detail-content detail-content--dark">
        <div className="detail-container">
          {/* About */}
          <div className="detail-section">
            <h2 className="detail-section-title detail-section-title--dark">About This Solution</h2>
            <div className="detail-divider"></div>
            <p className="detail-text detail-text--dark">{solution.longDesc}</p>
          </div>

          {/* Features */}
          <div className="detail-section">
            <h2 className="detail-section-title detail-section-title--dark">Key Features</h2>
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

          {/* Process */}
          <div className="detail-section">
            <h2 className="detail-section-title detail-section-title--dark">Our Process</h2>
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
