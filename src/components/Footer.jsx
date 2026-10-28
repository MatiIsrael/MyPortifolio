import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  MessageCircle, 
  Send, 
  Facebook, 
  ArrowUp,
  Heart
} from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>&lt;</span>
              <span>{personal.displayName}</span>
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>/&gt;</span>
            </div>
            <p className="footer-brand-desc">
              {personal.title} based in {personal.location}. Ready to build modern, reliable digital products for clients worldwide.
            </p>
          </div>

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
              aria-label="WhatsApp"
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

            <a
              href={personal.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-btn"
              aria-label="Facebook Profile"
              title="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {personal.fullName}. Built with React, clean code, and dedication.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
