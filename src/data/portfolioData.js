/**
 * Portfolio Data Configuration
 * Edit this file to easily personalize your portfolio content, projects, skills, and links!
 */

export const portfolioData = {
  personal: {
    name: "Alex Morgan",
    role: "Senior Full Stack & UI/UX Developer",
    tagline: "Architecting sleek, high-performance web experiences with modern code.",
    shortBio: "I design and build intuitive digital products, combining clean aesthetics with robust, scalable software architecture.",
    fullBio: [
      "Hello! I am a full-stack engineer with over 5 years of experience building modern web applications. My passion lies at the intersection of sophisticated visual design and rock-solid backend infrastructure.",
      "I specialize in the React ecosystem, TypeScript, Node.js, and cloud architectures. Whether crafting silky-smooth user interfaces or optimizing distributed APIs, I focus on delivering speed, accessibility, and delightful user experiences.",
      "When I am not coding, you can find me exploring open-source tools, writing tech articles, or designing generative art."
    ],
    location: "San Francisco, CA (Open to Remote)",
    email: "alex.morgan.dev@example.com",
    availability: "Available for Full-time & Select Freelance",
    avatarUrl: null, // Set to an image URL or null for stylized avatar
    status: "Open to new opportunities",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "Github",
      username: "@alexmorgan",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
      username: "in/alexmorgandev",
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com",
      icon: "Twitter",
      username: "@alexmorgan_ui",
    },
    {
      name: "Email",
      url: "mailto:alex.morgan.dev@example.com",
      icon: "Mail",
      username: "alex.morgan.dev@example.com",
    },
  ],

  stats: [
    { label: "Years Experience", value: "5+", description: "Building production software" },
    { label: "Projects Completed", value: "40+", description: "Delivered on-time & to spec" },
    { label: "Happy Clients & Orgs", value: "25+", description: "Across startups & enterprise" },
    { label: "Code Commits", value: "3.2k+", description: "Open source & team contributions" },
  ],

  services: [
    {
      title: "Frontend Engineering",
      description: "Crafting reactive, lightning-fast web applications using React, Next.js, and cutting-edge CSS.",
      icon: "Layout",
    },
    {
      title: "Backend & API Architecture",
      description: "Designing resilient RESTful and GraphQL APIs, microservices, and database systems with high uptime.",
      icon: "Server",
    },
    {
      title: "UI/UX & Design Systems",
      description: "Building scalable, accessible design systems and design-to-code implementations that feel buttery smooth.",
      icon: "Palette",
    },
    {
      title: "Performance & SEO Audit",
      description: "Optimizing Core Web Vitals, bundle sizes, accessibility (a11y), and search indexing for top rankings.",
      icon: "Zap",
    },
  ],

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend",
        skills: [
          { name: "React / Next.js", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "JavaScript (ESNext)", level: 95 },
          { name: "HTML5 / Modern CSS", level: 95 },
          { name: "Tailwind / CSS Modules", level: 90 },
          { name: "State Management (Zustand/Redux)", level: 88 },
        ],
      },
      {
        id: "backend",
        name: "Backend & DB",
        skills: [
          { name: "Node.js & Express", level: 88 },
          { name: "PostgreSQL / Prisma", level: 85 },
          { name: "MongoDB / Mongoose", level: 82 },
          { name: "REST & GraphQL APIs", level: 90 },
          { name: "Python / FastAPI", level: 78 },
          { name: "Redis Caching", level: 75 },
        ],
      },
      {
        id: "tools",
        name: "DevOps & Tools",
        skills: [
          { name: "Git & GitHub Actions", level: 92 },
          { name: "Docker & Containers", level: 80 },
          { name: "Vite / Webpack / Turbopack", level: 88 },
          { name: "AWS & Vercel Cloud", level: 82 },
          { name: "Figma UI Design", level: 85 },
          { name: "Vitest & Jest", level: 80 },
        ],
      },
    ],
  },

  projects: [
    {
      id: "project-1",
      title: "NexusFlow - AI Cloud Workspace",
      category: "Full Stack",
      description: "A collaborative productivity suite powered by streaming AI models, real-time presence indicators, and interactive markdown documents.",
      tags: ["React", "TypeScript", "Node.js", "WebSockets", "Tailwind"],
      liveUrl: "https://example.com/nexusflow",
      githubUrl: "https://github.com/example/nexusflow",
      metrics: "12k+ Active Users",
      gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
      featured: true,
    },
    {
      id: "project-2",
      title: "AuraPay - Fintech Analytics Dashboard",
      category: "Frontend",
      description: "High-density financial metrics visualization tool with multi-currency reconciliation, dynamic forecasting charts, and dark/light adaptive styling.",
      tags: ["React", "Chart.js", "CSS Grid", "Zustand", "REST API"],
      liveUrl: "https://example.com/aurapay",
      githubUrl: "https://github.com/example/aurapay",
      metrics: "$4M+ Processed Daily",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      featured: true,
    },
    {
      id: "project-3",
      title: "HyperScale - API Gateway Monitor",
      category: "Full Stack",
      description: "Distributed telemetry dashboard visualizing latency metrics, server health heartbeats, and automated rate-limiting policies across cloud zones.",
      tags: ["Node.js", "React", "PostgreSQL", "Docker", "Redis"],
      liveUrl: "https://example.com/hyperscale",
      githubUrl: "https://github.com/example/hyperscale",
      metrics: "99.99% Uptime Tracked",
      gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
      featured: true,
    },
    {
      id: "project-4",
      title: "Lumina - Generative UI Design System",
      category: "Design System",
      description: "An open-source tokenized component library with WCAG AAA accessibility, custom hooks, and zero-runtime CSS variables.",
      tags: ["React", "TypeScript", "Vanilla CSS", "Storybook", "NPM"],
      liveUrl: "https://example.com/lumina",
      githubUrl: "https://github.com/example/lumina",
      metrics: "1.5k GitHub Stars",
      gradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
      featured: true,
    },
    {
      id: "project-5",
      title: "DevSprint - Agile Workflow Engine",
      category: "Full Stack",
      description: "Kanban board and sprint planning application featuring drag-and-drop mechanics, automated GitHub issue synchronization, and team velocity metrics.",
      tags: ["React", "Express", "MongoDB", "Drag & Drop", "Webhooks"],
      liveUrl: "https://example.com/devsprint",
      githubUrl: "https://github.com/example/devsprint",
      metrics: "Used by 80+ Teams",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      featured: false,
    },
    {
      id: "project-6",
      title: "Verve Audio - Web Audio Synthesizer",
      category: "Frontend",
      description: "Browser-based modular sound synthesizer and step sequencer leveraging Web Audio API, canvas spectrogram visualization, and MIDI controller support.",
      tags: ["JavaScript", "Web Audio API", "HTML5 Canvas", "CSS3"],
      liveUrl: "https://example.com/verve",
      githubUrl: "https://github.com/example/verve",
      metrics: "Featured on ProductHunt",
      gradient: "linear-gradient(135deg, #eab308 0%, #f97316 100%)",
      featured: false,
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Senior Full Stack Engineer",
      company: "Vanguard Digital Lab",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Leading frontend architecture for a high-traffic enterprise SaaS platform, mentoring 6 junior engineers, and driving migration to modern React micro-frontends.",
      highlights: [
        "Boosted core web vitals LCP by 45% and reduced bundle sizes by 320KB",
        "Architected real-time collaboration module used by 50,000+ daily active users",
        "Established company-wide automated UI testing with 85% branch coverage",
      ],
      current: true,
    },
    {
      id: "exp-2",
      role: "Frontend Developer",
      company: "Pulse Interactive",
      location: "Austin, TX (Remote)",
      period: "2021 - 2023",
      description: "Developed customer-facing responsive applications, interactive data dashboards, and modular component libraries for fintech clients.",
      highlights: [
        "Shipped 12 client products on schedule with zero critical post-release bugs",
        "Engineered accessible dark/light theme engine and token system",
        "Collaborated with UX researchers to increase conversion funnels by 28%",
      ],
      current: false,
    },
    {
      id: "exp-3",
      role: "Junior Web Developer",
      company: "Craft & Code Agency",
      location: "New York, NY",
      period: "2019 - 2021",
      description: "Built marketing websites, e-commerce storefronts, and internal administrative tooling with clean HTML, CSS, and modern JavaScript.",
      highlights: [
        "Constructed 20+ responsive web portals with cross-browser compatibility",
        "Integrated third-party payment APIs (Stripe, PayPal) and CMS platforms",
      ],
      current: false,
    },
  ],
};
