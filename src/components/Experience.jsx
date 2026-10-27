import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my professional roles, engineering milestones, and impact across companies.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {experience.map((item, index) => (
              <div key={item.id} className="timeline-item">
                {/* Node Marker */}
                <div className={`timeline-node ${item.current ? 'current' : ''}`}>
                  <Briefcase size={16} />
                </div>

                {/* Card Content */}
                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <div className="timeline-company-info">
                        <span className="company-name">{item.company}</span>
                        <span className="info-divider">•</span>
                        <span className="location-text">
                          <MapPin size={13} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="timeline-date-badge">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                      {item.current && <span className="present-badge">Present</span>}
                    </div>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="timeline-highlights">
                      <h4 className="highlights-title">Key Contributions &amp; Impact:</h4>
                      <ul className="highlights-list">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="highlight-item">
                            <CheckCircle2 size={15} className="highlight-icon text-cyan" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
