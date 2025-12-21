'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const frontendSkills = [
  { name: 'HTML', icon: 'html', exp: 5, projects: 12 },
  { name: 'CSS', icon: 'css', exp: 5, projects: 15 },
  { name: 'Bootstrap', icon: 'bootstrap', exp: 4, projects: 8 },
  { name: 'Tailwind CSS', icon: 'tailwind', exp: 4, projects: 18 },
  { name: 'Material UI', icon: 'material', exp: 3, projects: 7 },
  { name: 'ZCN UI', icon: 'zcn', exp: 3, projects: 6 },
  { name: 'Alt Design', icon: 'alt', exp: 2, projects: 4 },
  { name: 'Fluent UI', icon: 'fluent', exp: 2, projects: 3 },
  { name: 'Primer Design', icon: 'primer', exp: 2, projects: 3 },
  { name: 'Framer Motion', icon: 'framer', exp: 4, projects: 10 },
  { name: 'GSAP', icon: 'gsap', exp: 3, projects: 8 },
  { name: '3JS', icon: '3js', exp: 2, projects: 4 },
  { name: 'Lucid React', icon: 'lucid', exp: 3, projects: 9 },
  { name: 'ReactJS', icon: 'react', exp: 5, projects: 20 },
  { name: 'NextJS', icon: 'nextjs', exp: 4, projects: 16 },
  { name: 'AngularJS', icon: 'angular', exp: 3, projects: 6 },
  { name: 'Web Vitals', icon: 'vitals', exp: 3, projects: 7 },
  { name: 'Semantic HTML', icon: 'semantic', exp: 5, projects: 12 },
  { name: 'Keyboard Navigation', icon: 'keyboard', exp: 4, projects: 10 },
  { name: 'React Memoization', icon: 'memo', exp: 4, projects: 11 },
  { name: 'Redux Toolkit', icon: 'redux', exp: 4, projects: 9 },
  { name: 'Zustand', icon: 'zustand', exp: 3, projects: 7 },
  { name: 'React Query', icon: 'query', exp: 4, projects: 10 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    html: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 2h18l-3 18-6 2-6-2L3 2z" />
        <path d="M8 10h8v7l-3 1.5-3-1.5v-5" />
      </svg>
    ),
    css: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 2h18l-2.5 15-5.5 2.5-5.5-2.5L3 2z" />
        <circle cx="8" cy="10" r="1.5" />
        <circle cx="16" cy="10" r="1.5" />
      </svg>
    ),
    react: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3c4 0 6.5 2.5 6.5 9s-2.5 9-6.5 9-6.5-2.5-6.5-9 2.5-9 6.5-9z" />
        <path d="M12 3c-4 0-6.5 2.5-6.5 9s2.5 9 6.5 9 6.5-2.5 6.5-9-2.5-9-6.5-9z" />
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12l4-4 4 4M12 8v8" />
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6c3-1 6-1 9 0M6 12c3-1 6-1 9 0M6 18c3-1 6-1 9 0" />
      </svg>
    ),
    redux: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" />
      </svg>
    ),
    zustand: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.5 7h7.5l-6 4.5 2.5 7.5L12 16l-6 4.5 2.5-7.5-6-4.5h7.5z" />
      </svg>
    ),
    framer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    bootstrap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h4v2H8V8zm0 4h4v2H8v-2z" />
      </svg>
    ),
    material: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
      </svg>
    ),
    zcn: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3l18 18M21 3L3 21" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    lucid: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v16M4 12h16" />
      </svg>
    ),
    gsap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M12 3v18M6 6l12 12M18 6L6 18" />
      </svg>
    ),
    '3js': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v12l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6 3-6 3-6-3 6-3z" />
      </svg>
    ),
    angular: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 18H3L12 2z" />
        <path d="M12 7l4 8H8l4-8z" />
      </svg>
    ),
    vitals: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l5-5 5 5 5-5 5 5" />
      </svg>
    ),
    semantic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 5h18M3 12h18M3 19h18" />
        <circle cx="9" cy="12" r="2" />
      </svg>
    ),
    keyboard: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 10h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
      </svg>
    ),
    memo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8c0 4-8 8-8 8s-8-4-8-8V6l8-4z" />
        <path d="M12 12l3-3-3-3-3 3 3 3z" />
      </svg>
    ),
    query: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M9 3v18" />
        <circle cx="9" cy="9" r="2" />
      </svg>
    ),
    alt: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 7v5l4 2.5" />
      </svg>
    ),
    fluent: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8h16M4 16h16" />
        <circle cx="8" cy="8" r="1.5" />
        <circle cx="16" cy="8" r="1.5" />
        <circle cx="8" cy="16" r="1.5" />
        <circle cx="16" cy="16" r="1.5" />
      </svg>
    ),
    primer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="4" y="14" width="6" height="6" />
        <rect x="14" y="14" width="6" height="6" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.react}</div>;
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

export default function FrontendSkillsPage() {
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
            Frontend Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Comprehensive expertise in modern web technologies and frameworks
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}