import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, FileText, PlusCircle, CheckCircle, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section className="section" id="certifications" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Formal milestones, project completions, and verified technical credentials.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-header">
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
                <span className="timeline-badge">{cert.badge}</span>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {cert.date}
              </div>

              <p className="cert-desc">{cert.description}</p>
            </div>
          ))}

          {/* Reserved Space for User Uploads / Additions */}
          <div className="cert-upload-placeholder">
            <PlusCircle size={32} color="var(--accent-primary)" />
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              Add Your Next Certificate or Letter
            </div>
            <div style={{ fontSize: '0.85rem', maxWidth: '280px', lineHeight: 1.5 }}>
              Ready for your certificates, internship recommendation letters, or honors. Just add items to <code>src/data/portfolioData.js</code>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
