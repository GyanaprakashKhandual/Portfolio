'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const monitoringSkills = [
  { name: 'Grafana', icon: 'grafana', exp: 4, projects: 18 },
  { name: 'Prometheus', icon: 'prometheus', exp: 4, projects: 16 },
  { name: 'Sentry', icon: 'sentry', exp: 5, projects: 30 },
  { name: 'ELK Stack', icon: 'elk', exp: 3, projects: 12 },
  { name: 'UptimeRobot', icon: 'uptimerobot', exp: 4, projects: 25 },
  { name: 'Google Analytics', icon: 'analytics', exp: 5, projects: 40 },
  { name: 'Cloudflare', icon: 'cloudflare', exp: 4, projects: 22 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
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
        <circle cx="9" cy="8" r="1" fill="currentColor" />
        <circle cx="15" cy="8" r="1" fill="currentColor" />
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
    cloudflare: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 15l9-9 9 9" />
        <path d="M6 18l6-6 6 6" />
        <path d="M9 21l3-3 3 3" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.grafana}</div>;
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

export default function MonitoringSkillsPage() {
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
            Monitoring & Analytics
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Expertise in performance monitoring, error tracking, and analytics platforms
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {monitoringSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}