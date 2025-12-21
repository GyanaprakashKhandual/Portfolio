'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const deploymentSkills = [
  { name: 'AWS', icon: 'aws', exp: 4, projects: 18 },
  { name: 'Render', icon: 'render', exp: 3, projects: 12 },
  { name: 'Netlify', icon: 'netlify', exp: 4, projects: 25 },
  { name: 'DigitalOcean', icon: 'digitalocean', exp: 3, projects: 10 },
  { name: 'GoDaddy', icon: 'godaddy', exp: 2, projects: 8 },
  { name: 'Hostinger', icon: 'hostinger', exp: 2, projects: 6 },
  { name: 'GitHub Pages', icon: 'githubpages', exp: 5, projects: 30 },
  { name: 'Docker', icon: 'docker', exp: 4, projects: 22 },
  { name: 'Kubernetes', icon: 'kubernetes', exp: 3, projects: 9 },
  { name: 'Linux', icon: 'linux', exp: 5, projects: 35 },
  { name: 'Nginx', icon: 'nginx', exp: 4, projects: 20 },
  { name: 'Apache', icon: 'apache', exp: 3, projects: 15 },
  { name: 'GitHub Actions', icon: 'githubactions', exp: 4, projects: 28 },
  { name: 'GitLab CI', icon: 'gitlabci', exp: 3, projects: 12 },
  { name: 'Jenkins', icon: 'jenkins', exp: 3, projects: 11 },
  { name: 'Subdomains', icon: 'subdomain', exp: 4, projects: 24 },
  { name: 'Cloudflare', icon: 'cloudflare', exp: 4, projects: 19 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    aws: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l4-4 4 4 4-4 4 4 2-2" />
        <path d="M3 16l4-4 4 4 4-4 4 4 2-2" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
      </svg>
    ),
    render: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v12M6 12h12" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </svg>
    ),
    netlify: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M12 12l6-3M12 12l-6-3M12 12v7" />
      </svg>
    ),
    digitalocean: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 15v-3h3M12 12H9M12 12V9" />
      </svg>
    ),
    godaddy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 9h8M8 13h5" />
        <circle cx="18" cy="9" r="1" />
      </svg>
    ),
    hostinger: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    githubpages: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="8" width="4" height="4" />
        <rect x="8" y="8" width="4" height="4" />
        <rect x="13" y="8" width="4" height="4" />
        <rect x="3" y="13" width="4" height="4" />
        <rect x="8" y="13" width="4" height="4" />
        <path d="M18 8h3v9H3V8h3" />
      </svg>
    ),
    kubernetes: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6l3 3-3 3-3-3 3-3zM12 12l3 3-3 3-3-3 3-3z" />
      </svg>
    ),
    linux: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="2" />
        <path d="M10 10c-1 2-2 4-2 6h8c0-2-1-4-2-6" />
        <path d="M8 16v4M16 16v4M10 20h4" />
        <circle cx="9" cy="8" r="0.5" fill="currentColor" />
        <circle cx="15" cy="8" r="0.5" fill="currentColor" />
      </svg>
    ),
    nginx: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l8 16 8-16" />
        <path d="M4 20h16" />
        <path d="M8 12h8" />
      </svg>
    ),
    apache: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    githubactions: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2 2 4-4" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
    gitlabci: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 9H9l3-9z" />
        <path d="M3 11l9 11 9-11H3z" />
        <path d="M9 11l3 11 3-11" />
      </svg>
    ),
    jenkins: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="9" r="3" />
        <path d="M12 12v8M8 16l4 4 4-4" />
        <rect x="6" y="4" width="12" height="4" />
      </svg>
    ),
    subdomain: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <path d="M2 7l10 5M22 7l-10 5M12 12v10" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    cloudflare: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 15l9-9 9 9" />
        <path d="M6 18l6-6 6 6" />
        <path d="M9 21l3-3 3 3" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.aws}</div>;
};

// Skill Card Component
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="relative p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm group rounded-xl dark:bg-slate-900 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-lg"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-gray-700 transition-colors rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-800 dark:to-slate-900 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300">
        <SkillIcon icon={skill.icon} />
      </div>

      {/* Skill Name */}
      <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
        {skill.name}
      </h3>

      {/* Experience */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-slate-400">Experience</span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {skill.exp} yrs
          </span>
        </div>
        <div className="h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(skill.exp / 5) * 100}%` }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
          />
        </div>
      </div>

      {/* Projects */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-slate-800">
        <span className="text-sm text-gray-600 dark:text-slate-400">Projects</span>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {skill.projects}
          </span>
          <span className="text-sm text-gray-600 dark:text-slate-400">+</span>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 transition-all duration-300 pointer-events-none rounded-xl bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/5" />
    </motion.div>
  );
};

export default function DeploymentSkillsPage() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Deployment Tech Stack
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Expertise in cloud platforms, containerization, CI/CD, and infrastructure management
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deploymentSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}