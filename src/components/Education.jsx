import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education & Milestones</h2>
          <p className="section-subtitle">
            Strong foundational computer science theory blended with continuous hands-on software development.
          </p>
        </div>

        <div className="timeline-container">
          {education.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.degree}</h3>
                  <span className="timeline-badge">{item.status}</span>
                </div>

                <div className="timeline-institution">
                  {item.institution} &bull; <span style={{ color: 'var(--text-muted)' }}>{item.location}</span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <ul className="timeline-highlights">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="timeline-highlight">
                      <CheckCircle2 size={16} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
