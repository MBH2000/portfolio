import React from 'react';
import { ArrowRight, Download, Terminal, Code2, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal, socials } = portfolioData;

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon size={18} />;
      case 'Linkedin':
        return <LinkedinIcon size={18} />;
      case 'Twitter':
        return <TwitterIcon size={18} />;
      case 'Mail':
        return <Mail size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Intro text */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="status-dot"></span>
            <span className="badge-text">{personal.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
            <br />
            <span className="hero-subtitle-role">{personal.role}</span>
          </h1>

          <p className="hero-description">
            {personal.tagline} {personal.shortBio}
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Get In Touch</span>
              <Mail size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="socials-list">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title={social.name}
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal / Developer Card */}
        <div className="hero-visual">
          <div className="hero-card-glow"></div>
          <div className="glass-card hero-terminal-card">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>developer.config.ts</span>
              </div>
              <div className="terminal-badge">TypeScript</div>
            </div>

            {/* Code Body */}
            <div className="terminal-code">
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;
              </div>
              <div className="code-line indent">
                <span className="code-prop">name</span>: <span className="code-string">"{personal.name}"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">focus</span>: <span className="code-string">"Modern Web & High Performance"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">primaryStack</span>: [
              </div>
              <div className="code-line indent-2">
                <span className="code-string">"React"</span>, <span className="code-string">"TypeScript"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"Tailwind"</span>
              </div>
              <div className="code-line indent">
                ],
              </div>
              <div className="code-line indent">
                <span className="code-prop">passionateAbout</span>: <span className="code-string">"Fluid UX, Accessibility & Scalability"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">availableForHire</span>: <span className="code-bool">true</span>,
              </div>
              <div className="code-line">
                &#125;;
              </div>
            </div>

            {/* Floating Live Card Badges */}
            <div className="terminal-footer">
              <div className="feature-pill">
                <Code2 size={16} className="text-cyan" />
                <span>Clean & Testable Code</span>
              </div>
              <div className="feature-pill">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Modern Web Vitals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
