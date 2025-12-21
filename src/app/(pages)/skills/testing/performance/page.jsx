'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const performanceSkills = [
  { name: 'JMeter', icon: 'jmeter', exp: 5, projects: 42 },
  { name: 'Grafana', icon: 'grafana', exp: 4, projects: 30 },
  { name: 'K6', icon: 'k6', exp: 4, projects: 28 },
  { name: 'Artillery', icon: 'artillery', exp: 3, projects: 18 },
  { name: 'BlazeMeter', icon: 'blazemeter', exp: 4, projects: 25 },
  { name: 'NeoLoad', icon: 'neoload', exp: 3, projects: 15 },
  { name: 'JSON', icon: 'json', exp: 5, projects: 50 },
  { name: 'HTML', icon: 'html', exp: 5, projects: 45 },
  { name: 'CSS', icon: 'css', exp: 5, projects: 45 },
  { name: 'JavaScript', icon: 'javascript', exp: 5, projects: 48 },
  { name: 'Custom Reports', icon: 'customreport', exp: 5, projects: 38 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    jmeter: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-7" />
        <circle cx="7" cy="14" r="1.5" fill="currentColor" />
        <circle cx="11" cy="10" r="1.5" fill="currentColor" />
        <circle cx="14" cy="13" r="1.5" fill="currentColor" />
        <circle cx="19" cy="6" r="1.5" fill="currentColor" />
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
    k6: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6-3M12 12v6M12 12L6 9" />
        <circle cx="12" cy="12" r="2" />
        <path d="M15 8l3 2M9 16l-3 2" />
      </svg>
    ),
    artillery: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17l4-8 4 8 4-12 4 12 2-4" />
        <circle cx="7" cy="9" r="1" fill="currentColor" />
        <circle cx="11" cy="17" r="1" fill="currentColor" />
        <circle cx="15" cy="5" r="1" fill="currentColor" />
        <circle cx="19" cy="17" r="1" fill="currentColor" />
        <path d="M3 20h18" />
      </svg>
    ),
    blazemeter: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6l3 6-3 6-3-6 3-6z" />
        <path d="M12 8v8" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    neoload: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="8" width="4" height="12" />
        <rect x="10" y="4" width="4" height="16" />
        <rect x="16" y="10" width="4" height="10" />
        <path d="M4 8l6-4 6 6 4-4" />
      </svg>
    ),
    json: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
        <circle cx="6" cy="8" r="0.5" fill="currentColor" />
        <circle cx="6" cy="12" r="0.5" fill="currentColor" />
        <circle cx="6" cy="16" r="0.5" fill="currentColor" />
      </svg>
    ),
    html: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 3l2 18 6 2 6-2 2-18H4z" />
        <path d="M8 8h8M8 12h8M8 16h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    css: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 3l2 18 6 2 6-2 2-18H4z" />
        <path d="M8 10l4-2 4 2M12 8v8M8 14l4 2 4-2" />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M10 17v-4c0-1 .5-2 2-2M16 17c0-1.5-1-2-2-2s-2 .5-2 2" />
        <path d="M10 9h4" />
      </svg>
    ),
    customreport: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
        <path d="M12 12l3 3M15 12l-3 3" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <path d="M13 6h5M13 15h5" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.jmeter}</div>;
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

export default function PerformanceTestingPage() {
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
            Performance Testing
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Load testing, stress testing, and performance monitoring with custom reporting
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {performanceSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}