import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, CheckCircle2, Sparkles } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Real-World Projects</h2>
          <p className="section-subtitle">
            Authentic, functional web platforms engineered to solve institutional and community challenges.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-header">
                <span className="project-category-badge">{project.category}</span>
                {project.featured && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      color: 'var(--accent-secondary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Sparkles size={14} /> Production Live
                  </span>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <div className="project-tagline">{project.tagline}</div>

              <p className="project-description">{project.description}</p>

              <div className="project-role">
                <strong>My Contribution:</strong> {project.role}
              </div>

              <ul className="project-highlights-list">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="project-highlight-item">
                    <CheckCircle2 size={16} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <Github size={15} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
