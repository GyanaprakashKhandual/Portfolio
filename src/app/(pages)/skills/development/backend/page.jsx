'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const backendSkills = [
  { name: 'Express JS', icon: 'express', exp: 5, projects: 18 },
  { name: 'Node JS', icon: 'nodejs', exp: 5, projects: 22 },
  { name: 'REST API', icon: 'rest', exp: 5, projects: 20 },
  { name: 'FastAPI', icon: 'fastapi', exp: 3, projects: 8 },
  { name: 'GraphQL', icon: 'graphql', exp: 3, projects: 9 },
  { name: 'Mongoose', icon: 'mongoose', exp: 4, projects: 16 },
  { name: 'Socket.IO', icon: 'socket', exp: 3, projects: 7 },
  { name: 'Firebase', icon: 'firebase', exp: 4, projects: 12 },
  { name: 'JWT', icon: 'jwt', exp: 5, projects: 18 },
  { name: 'OAuth 2.0', icon: 'oauth', exp: 4, projects: 13 },
  { name: 'RBAC', icon: 'rbac', exp: 4, projects: 11 },
  { name: 'Bcrypt', icon: 'bcrypt', exp: 5, projects: 19 },
  { name: 'Helmet', icon: 'helmet', exp: 4, projects: 14 },
  { name: 'Swagger', icon: 'swagger', exp: 4, projects: 12 },
  { name: 'Postman', icon: 'postman', exp: 4, projects: 15 },
  { name: 'Redis', icon: 'redis', exp: 3, projects: 8 },
  { name: 'Cloudflare', icon: 'cloudflare', exp: 3, projects: 6 },
  { name: 'Winston Logger', icon: 'winston', exp: 4, projects: 11 },
  { name: 'Anthropic API', icon: 'anthropic', exp: 2, projects: 4 },
  { name: 'OpenAI API', icon: 'openai', exp: 3, projects: 7 },
  { name: 'AWS', icon: 'aws', exp: 3, projects: 9 },
  { name: 'Cloudinary', icon: 'cloudinary', exp: 3, projects: 8 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    express: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M12 3v18M6 6l12 12M18 6L6 18" />
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12l4-4 4 4M12 8v8" />
      </svg>
    ),
    rest: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9zM9 3v18M3 9h18" />
      </svg>
    ),
    fastapi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M12 12l6 3-6 3-6-3 6-3z" />
      </svg>
    ),
    graphql: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="4" r="2" />
        <circle cx="6" cy="16" r="2" />
        <circle cx="18" cy="16" r="2" />
        <path d="M12 6v8M8.5 13.5l2 3.5M15.5 13.5l-2 3.5" />
      </svg>
    ),
    mongoose: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8v8M10 10l4 4M14 10l-4 4" />
      </svg>
    ),
    socket: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="7" cy="7" r="1.5" />
        <circle cx="17" cy="7" r="1.5" />
        <circle cx="7" cy="17" r="1.5" />
        <circle cx="17" cy="17" r="1.5" />
      </svg>
    ),
    firebase: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L3 7v10c0 5 9 8 9 8s9-3 9-8V7l-9-5z" />
        <path d="M12 11l4-2-4-2-4 2 4 2z" />
      </svg>
    ),
    jwt: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 10h12M6 14h12M4 12h1M19 12h1" />
      </svg>
    ),
    oauth: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
        <circle cx="7" cy="12" r="2" />
        <circle cx="17" cy="12" r="2" />
      </svg>
    ),
    rbac: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="9" y="14" width="6" height="6" />
        <path d="M7 10v2M17 10v2M12 14v2" />
      </svg>
    ),
    bcrypt: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 7h7l-5.5 4.5L12 22l-4.5-8.5L2 9h7l3-7z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    helmet: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v10M8 10h8" />
      </svg>
    ),
    swagger: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8l4 4 4-4M8 12l4 4 4-4" />
      </svg>
    ),
    postman: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18v12H3z" />
        <path d="M3 6l9 6 9-6M3 18l9-5 9 5" />
      </svg>
    ),
    redis: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="16" cy="12" r="2" />
      </svg>
    ),
    cloudflare: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 12c0-3 2-5 6-5s6 2 6 5M6 12c0 3 2 5 6 5s6-2 6-5" />
        <path d="M12 2v20" />
      </svg>
    ),
    winston: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l4-4 4 4 4-4 4 4" />
        <path d="M3 18l4-4 4 4 4-4 4 4" />
      </svg>
    ),
    anthropic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v12M8 10l4-2 4 2M8 14l4 2 4-2" />
      </svg>
    ),
    openai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" />
        <path d="M12 8v8M8 11l4 2 4-2M8 13l4 2 4-2" />
      </svg>
    ),
    cloudinary: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <circle cx="9" cy="9" r="3" />
        <path d="M2 18l6-6 4 4 8-8" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.nodejs}</div>;
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
            className="h-full bg-gradient-to-r from-gray-800 to-black dark:from-blue-400 dark:to-blue-500"
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

export default function BackendSkillsPage() {
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
            Backend Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Comprehensive expertise in server-side development, APIs, and cloud infrastructure
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {backendSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}