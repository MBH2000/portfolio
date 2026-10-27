import React, { useState } from 'react';
import { Code, Database, Cpu, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { categories } = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'frontend':
        return <Code size={18} />;
      case 'backend':
        return <Database size={18} />;
      case 'tools':
        return <Cpu size={18} />;
      default:
        return <Layers size={18} />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Proficiency</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technological ecosystem and tools I use to turn complex ideas into refined software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-tabs">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <Layers size={16} />
            <span>All Categories</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-category-grid">
          {displayedCategories.map((category) => (
            <div key={category.id} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-box">{getCategoryIcon(category.id)}</div>
                <h3 className="category-title">{category.name}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-text">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bar">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="skills-callout glass-card">
          <div className="callout-icon">
            <Sparkles size={24} className="text-amber" />
          </div>
          <div className="callout-content">
            <h4>Continuous Innovation &amp; Lifelong Learning</h4>
            <p>
              Always experimenting with emerging paradigms—from Edge computing and WebAssembly to AI orchestration and micro-frontends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
