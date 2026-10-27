import React from 'react';
import { ArrowUp, Sparkles, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon size={16} />;
      case 'Linkedin':
        return <LinkedinIcon size={16} />;
      case 'Twitter':
        return <TwitterIcon size={16} />;
      case 'Mail':
        return <Mail size={16} />;
      default:
        return <Sparkles size={16} />;
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Upper Row */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-badge">
              <Sparkles size={16} className="brand-icon" />
            </div>
            <span className="brand-text">
              {personal.name}
              <span className="brand-dot">.</span>
            </span>
            <p className="footer-tagline">{personal.role}</p>
          </div>

          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={social.name}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Lower Row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personal.name}. Crafted with modern React &amp; CSS.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
