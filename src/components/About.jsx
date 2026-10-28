import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Award, Globe, Code2 } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Mati</span>
          <h2 className="section-title">Bridging Ideas & Practical Code</h2>
          <p className="section-subtitle">
            Get to know my background, design principles, and how I approach engineering solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio text */}
          <div className="about-text">
            <h3>{about.heading}</h3>

            {about.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about-highlights-list">
              {about.highlights.map((item, index) => (
                <div key={index} className="about-highlight-item">
                  <CheckCircle2 size={18} color="var(--accent-secondary)" style={{ marginTop: '2px' }} />
                  <div>
                    <div className="label">{item.label}</div>
                    <div className="val">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="stats-grid">
            {about.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
