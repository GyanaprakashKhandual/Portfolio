'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const toolsSkills = [
  { name: 'Visual Studio Code', icon: 'vscode', exp: 5, projects: 100 },
  { name: 'Git', icon: 'git', exp: 5, projects: 100 },
  { name: 'GitHub', icon: 'github', exp: 5, projects: 85 },
  { name: 'GitLab', icon: 'gitlab', exp: 4, projects: 30 },
  { name: 'Docker', icon: 'docker', exp: 4, projects: 45 },
  { name: 'Docker Compose', icon: 'dockercompose', exp: 4, projects: 40 },
  { name: 'Kubernetes', icon: 'kubernetes', exp: 3, projects: 15 },
  { name: 'Helm', icon: 'helm', exp: 3, projects: 12 },
  { name: 'AWS', icon: 'aws', exp: 4, projects: 35 },
  { name: 'Google Cloud Platform', icon: 'gcp', exp: 3, projects: 20 },
  { name: 'Microsoft Azure', icon: 'azure', exp: 3, projects: 18 },
  { name: 'Cloudflare', icon: 'cloudflare', exp: 4, projects: 25 },
  { name: 'Nginx', icon: 'nginx', exp: 4, projects: 30 },
  { name: 'Postman', icon: 'postman', exp: 5, projects: 60 },
  { name: 'Swagger', icon: 'swagger', exp: 4, projects: 35 },
  { name: 'OpenAPI', icon: 'openapi', exp: 4, projects: 32 },
  { name: 'GitHub Actions', icon: 'githubactions', exp: 5, projects: 50 },
  { name: 'GitLab CI', icon: 'gitlabci', exp: 4, projects: 28 },
  { name: 'Jenkins', icon: 'jenkins', exp: 3, projects: 15 },
  { name: 'MongoDB Atlas', icon: 'mongodbatlas', exp: 4, projects: 38 },
  { name: 'PostgreSQL', icon: 'postgresql', exp: 4, projects: 42 },
  { name: 'Redis', icon: 'redis', exp: 4, projects: 35 },
  { name: 'Amazon S3', icon: 's3', exp: 4, projects: 40 },
  { name: 'Grafana', icon: 'grafana', exp: 4, projects: 22 },
  { name: 'Prometheus', icon: 'prometheus', exp: 4, projects: 20 },
  { name: 'Sentry', icon: 'sentry', exp: 5, projects: 45 },
  { name: 'ELK Stack', icon: 'elk', exp: 3, projects: 16 },
  { name: 'UptimeRobot', icon: 'uptimerobot', exp: 4, projects: 30 },
  { name: 'Google Analytics', icon: 'analytics', exp: 5, projects: 55 },
  { name: 'k6', icon: 'k6', exp: 3, projects: 18 },
  { name: 'OWASP ZAP', icon: 'zap', exp: 3, projects: 14 },
  { name: 'Vault', icon: 'vault', exp: 3, projects: 12 },
  { name: 'AWS Secrets Manager', icon: 'secretsmanager', exp: 4, projects: 25 },
  { name: 'Slack', icon: 'slack', exp: 5, projects: 70 },
  { name: 'Jira Workspace', icon: 'jira', exp: 5, projects: 50 },
  { name: 'Zoho Workspace', icon: 'zoho', exp: 3, projects: 15 },
  { name: 'Microsoft Workspace', icon: 'microsoft', exp: 4, projects: 35 },
  { name: 'Google Workspace', icon: 'googleworkspace', exp: 5, projects: 60 },
  { name: 'Confluence', icon: 'confluence', exp: 4, projects: 28 },
  { name: 'Notion', icon: 'notion', exp: 5, projects: 40 },
  { name: 'PagerDuty', icon: 'pagerduty', exp: 3, projects: 12 },
  { name: 'Opsgenie', icon: 'opsgenie', exp: 3, projects: 10 },
  { name: 'Figma', icon: 'figma', exp: 5, projects: 65 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    vscode: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 2L8 22M4 7l4 5-4 5M20 7l-4 5 4 5" />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <path d="M9 6h6M6 9v6M12 9v3M15 9l-3 3" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    gitlab: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 9H9l3-9z" />
        <path d="M3 11l9 11 9-11H3z" />
        <path d="M9 11l3 11 3-11" />
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
    dockercompose: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="3" height="3" />
        <rect x="7" y="6" width="3" height="3" />
        <rect x="11" y="6" width="3" height="3" />
        <rect x="3" y="10" width="3" height="3" />
        <rect x="7" y="10" width="3" height="3" />
        <rect x="3" y="14" width="3" height="3" />
        <path d="M15 8h6v10H3V8h3" />
      </svg>
    ),
    kubernetes: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6l3 3-3 3-3-3 3-3zM12 12l3 3-3 3-3-3 3-3z" />
      </svg>
    ),
    helm: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8l-8 8-8-8V6l8-4z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9v6" />
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l4-4 4 4 4-4 4 4 2-2" />
        <path d="M3 16l4-4 4 4 4-4 4 4 2-2" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
      </svg>
    ),
    gcp: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M12 12l6-3M12 12l-6-3M12 12v7" />
      </svg>
    ),
    azure: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 18l8-16 4 10-8 6z" />
        <path d="M12 12l8 6H4" />
      </svg>
    ),
    cloudflare: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 15l9-9 9 9" />
        <path d="M6 18l6-6 6 6" />
        <path d="M9 21l3-3 3 3" />
      </svg>
    ),
    nginx: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l8 16 8-16" />
        <path d="M4 20h16" />
        <path d="M8 12h8" />
      </svg>
    ),
    postman: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    swagger: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8v8" />
        <circle cx="8" cy="12" r="1" fill="currentColor" />
        <circle cx="16" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    openapi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
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
        <path d="M12 2l2 6H10l2-6z" />
        <path d="M4 8l8 14 8-14H4z" />
        <path d="M10 8l2 14 2-14" />
      </svg>
    ),
    jenkins: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="9" r="3" />
        <path d="M12 12v8M8 16l4 4 4-4" />
        <rect x="6" y="4" width="12" height="4" />
      </svg>
    ),
    mongodbatlas: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 3v3M12 18v3" />
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8 2 5 5 5 9v10c0 1.5 1 3 3 3h8c2 0 3-1.5 3-3V9c0-4-3-7-7-7z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
        <path d="M12 14v4" />
      </svg>
    ),
    redis: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16M4 14h16" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="16" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
    s3: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M7 14h10" />
        <circle cx="7" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
    grafana: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v12M6 12h12" />
        <path d="M8 8l8 8M16 8l-8 8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    prometheus: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l-2 4h4l-2-4z" />
        <circle cx="12" cy="8" r="2" />
        <path d="M12 10v4" />
        <path d="M12 14c-3 0-5 2-5 4h10c0-2-2-4-5-4z" />
        <path d="M7 18v2h10v-2" />
      </svg>
    ),
    sentry: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6l-6 6h4l2 6 6-6h-4l-2-6z" />
      </svg>
    ),
    elk: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="4" height="10" />
        <rect x="10" y="6" width="4" height="14" />
        <rect x="17" y="8" width="4" height="12" />
        <path d="M3 10l4-4 3 3 4-4 3 3 4-4" />
      </svg>
    ),
    uptimerobot: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2 2 4-4" />
        <path d="M12 6v2M12 16v2M6 12h2M16 12h2" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 3 3 5-7" />
        <circle cx="7" cy="16" r="1.5" fill="currentColor" />
        <circle cx="11" cy="12" r="1.5" fill="currentColor" />
        <circle cx="14" cy="15" r="1.5" fill="currentColor" />
        <circle cx="19" cy="8" r="1.5" fill="currentColor" />
      </svg>
    ),
    k6: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6-3M12 12v6M12 12L6 9" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    zap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    ),
    vault: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M12 8V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3" />
        <circle cx="12" cy="14" r="2" />
        <path d="M12 16v2" />
      </svg>
    ),
    secretsmanager: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="2" />
        <path d="M12 18v2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
    slack: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v3h-3a3 3 0 0 1-3-3z" />
        <path d="M6 9a3 3 0 0 1-3-3h0a3 3 0 0 1 3-3h3v3a3 3 0 0 1-3 3z" />
        <path d="M15 18a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3v-3h3a3 3 0 0 1 3 3z" />
        <path d="M18 15a3 3 0 0 1 3 3h0a3 3 0 0 1-3 3h-3v-3a3 3 0 0 1 3-3z" />
      </svg>
    ),
    jira: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9l3 3-3 3M15 9v6" />
      </svg>
    ),
    zoho: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18v12H3z" />
        <path d="M7 10l10 4M7 14l10-4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    microsoft: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </svg>
    ),
    googleworkspace: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    ),
    confluence: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8c0-2 2-4 4-4h8c2 0 4 2 4 4v8c0 2-2 4-4 4H8c-2 0-4-2-4-4V8z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    notion: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M8 4v16M12 8v12M16 4v16" />
      </svg>
    ),
    pagerduty: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    opsgenie: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9v6" />
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M6 6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V6z" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.vscode}</div>;
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
export default function ToolsSkillsPage() {
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
            Development Tools & Platforms
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Comprehensive toolkit covering development, deployment, monitoring, and collaboration
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolsSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
