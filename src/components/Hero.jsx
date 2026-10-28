import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Send, 
  MessageCircle, 
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow-bg"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Hero Content */}
          <div className="hero-content">
            {/* Live Status Badge */}
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>{personal.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personal.fullName}</span>
              <br />
              {personal.title}
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="hero-subtitle">
              {personal.tagline} Focused on crafting high-performance, accessible web platforms using <strong>React</strong>, <strong>Python (Django / FastAPI)</strong>, and <strong>PostgreSQL</strong>.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary btn-lg">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary btn-lg">
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Social Links */}
            <div className="hero-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={personal.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>

              <a
                href={personal.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Telegram"
                title="Telegram"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Hero Profile Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img
                src={personal.photoUrl}
                alt={`${personal.fullName} - ${personal.title}`}
                loading="eager"
                width="360"
                height="450"
              />
              <div className="hero-floating-pill">
                <MapPin size={16} color="var(--accent-primary)" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
