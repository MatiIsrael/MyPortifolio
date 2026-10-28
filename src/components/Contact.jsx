import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personal, callToAction } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry / Job Opportunity',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    // Trigger subtle celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (err) {
      // Fallback gracefully
    }

    // Simulate sending & open mail client option
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);

      // Create fallback mailto link to ensure message delivery
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject + ' - from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect & Build Together</h2>
          <p className="section-subtitle">
            {callToAction.subheading}
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Direct Connect */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Contact Channels</h3>
            <p className="contact-info-desc">
              Have a question or looking to collaborate? Reach out through any of these direct methods. I respond promptly!
            </p>

            <div className="contact-channels">
              {/* Email */}
              <a href={`mailto:${personal.email}`} className="contact-channel-item">
                <div className="channel-icon">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Direct Email</span>
                  <span className="channel-val">{personal.email}</span>
                </div>
              </a>

              {/* Phone 1 */}
              <a href={`tel:${personal.phones[0]}`} className="contact-channel-item">
                <div className="channel-icon">
                  <Phone size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Primary Phone / WhatsApp</span>
                  <span className="channel-val">{personal.phones[0]}</span>
                </div>
              </a>

              {/* Phone 2 */}
              <a href={`tel:${personal.phones[1]}`} className="contact-channel-item">
                <div className="channel-icon">
                  <Phone size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Secondary Contact</span>
                  <span className="channel-val">{personal.phones[1]}</span>
                </div>
              </a>

              {/* Location */}
              <div className="contact-channel-item">
                <div className="channel-icon">
                  <MapPin size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Current Base</span>
                  <span className="channel-val">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Instant Messaging Shortcuts */}
            <div className="quick-connect-actions">
              <a
                href={personal.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageCircle size={18} />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <a
                href={personal.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-telegram"
                style={{ width: '100%' }}
              >
                <Send size={18} />
                <span>Message on Telegram</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={40} style={{ margin: '0 auto 1rem auto' }} />
                <h3>Thank you, {formData.name}!</h3>
                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                  Your message has been initiated. If your email application didn't open automatically, you can also send directly to <strong>{personal.email}</strong> or message me on WhatsApp!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: 'Project Inquiry / Job Opportunity',
                      message: ''
                    });
                  }}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '1.25rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="form-control"
                    />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className="form-control"
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="form-control"
                  ></textarea>
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  <span>{isSending ? 'Preparing Message...' : 'Send Message'}</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
