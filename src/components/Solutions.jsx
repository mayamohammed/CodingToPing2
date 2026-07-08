import React from 'react';
import { Link } from 'react-router-dom';
import solutionsData from '../data/solutionsData';

const solutions = solutionsData;

export default function Solutions() {
  return (
    <section className="sol-section" id="solutions">
      {/* Background grid pattern */}
      <div className="sol-bg-pattern" aria-hidden="true"></div>
      
      {/* Floating accent orbs */}
      <div className="sol-orb sol-orb--1" aria-hidden="true"></div>
      <div className="sol-orb sol-orb--2" aria-hidden="true"></div>

      <div className="sol-container">
        {/* Header */}
        <div className="sol-header">
          <span className="sol-badge">What We Build</span>
          <h2 className="sol-title">Our Solutions</h2>
          <p className="sol-subtitle">
            Specialized platforms and software built to empower your unique workflow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="sol-grid">
          {solutions.map((s) => (
            <Link to={`/solutions/${s.slug}`} className="sol-card-link-wrap" key={s.id}>
              <div className="sol-card">
                {/* Card top accent line */}
                <div className="sol-card-accent"></div>

                <div className="sol-card-header">
                  <div className="sol-card-icon">
                    {s.icon}
                  </div>
                  <span className="sol-card-number">{s.number}</span>
                </div>

                <h3 className="sol-card-title">{s.label}</h3>
                <p className="sol-card-desc">{s.desc}</p>

                {/* Feature tags */}
                <div className="sol-card-features">
                  {s.features.map((f, i) => (
                    <span className="sol-feature-tag" key={i}>{f}</span>
                  ))}
                </div>

                {/* Arrow link */}
                <div className="sol-card-arrow" aria-label={`Learn more about ${s.label}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
