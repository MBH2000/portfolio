import React from 'react';
import { MapPin, Calendar, CheckCircle, Layout, Server, Palette, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal, stats, services } = portfolioData;

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={24} className="service-icon text-cyan" />;
      case 'Server':
        return <Server size={24} className="service-icon text-primary" />;
      case 'Palette':
        return <Palette size={24} className="service-icon text-rose" />;
      case 'Zap':
        return <Zap size={24} className="service-icon text-amber" />;
      default:
        return <Zap size={24} className="service-icon" />;
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Crafting Digital Products with <span className="gradient-text">Passion & Precision</span>
          </h2>
          <p className="section-subtitle">
            A glance into my journey, core philosophy, and the value I bring to engineering teams.
          </p>
        </div>

        {/* Top Grid: Bio & Quick Facts */}
        <div className="about-grid">
          <div className="about-bio glass-card">
            <h3 className="about-heading">My Background</h3>
            <div className="bio-paragraphs">
              {personal.fullBio.map((paragraph, index) => (
                <p key={index} className="bio-text">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-meta-list">
              <div className="meta-item">
                <MapPin size={18} className="meta-icon text-cyan" />
                <span>{personal.location}</span>
              </div>
              <div className="meta-item">
                <Calendar size={18} className="meta-icon text-emerald" />
                <span>{personal.availability}</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass-card">
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services & What I Do */}
        <div className="services-container">
          <h3 className="services-title">What I Bring to the Table</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card glass-card">
                <div className="service-icon-wrapper">
                  {getServiceIcon(service.icon)}
                </div>
                <h4 className="service-card-title">{service.title}</h4>
                <p className="service-card-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
