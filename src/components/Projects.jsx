import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Portfolio Showcase</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects &amp; Work</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of applications, open-source utilities, and systems I have architected and shipped.
          </p>
        </div>

        {/* Project Filters */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-tab-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-card">
              {/* Card Banner / Mockup Header */}
              <div
                className="project-banner"
                style={{ background: project.gradient }}
              >
                <div className="project-banner-overlay"></div>
                <div className="project-browser-bar">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="browser-url">demo.app/{project.id}</span>
                </div>

                <div className="banner-content">
                  <span className="banner-category-badge">{project.category}</span>
                  {project.metrics && (
                    <span className="banner-metric-badge">
                      <Sparkles size={12} />
                      {project.metrics}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Live Preview</span>
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Code</span>
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
