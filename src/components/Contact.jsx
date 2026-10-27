import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have an interesting project, an engineering opening, or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-card glass-card">
            <h3 className="contact-card-title">Let's talk about your next project</h3>
            <p className="contact-card-text">
              I am currently open to full-time engineering roles, technical advisory, and select contract consulting.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} className="text-cyan" />
                </div>
                <div className="contact-item-content">
                  <span className="item-label">Direct Email</span>
                  <div className="email-copy-group">
                    <a href={`mailto:${personal.email}`} className="item-value">
                      {personal.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="copy-btn"
                      title="Copy email to clipboard"
                      aria-label="Copy email"
                    >
                      {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} className="text-rose" />
                </div>
                <div className="contact-item-content">
                  <span className="item-label">Location</span>
                  <span className="item-value">{personal.location}</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Sparkles size={20} className="text-emerald" />
                </div>
                <div className="contact-item-content">
                  <span className="item-label">Availability</span>
                  <span className="item-value">{personal.availability}</span>
                </div>
              </div>
            </div>

            {/* Social pills */}
            <div className="contact-socials-group">
              <span className="socials-title">Follow / Find Me</span>
              <div className="social-pills">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                  >
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card glass-card">
            <h3 className="contact-card-title">
              <MessageSquare size={20} className="inline-icon text-primary" />
              <span>Send a Direct Message</span>
            </h3>

            {isSubmitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={32} className="text-emerald" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I typically respond within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me a bit about what you're working on, timeline, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
