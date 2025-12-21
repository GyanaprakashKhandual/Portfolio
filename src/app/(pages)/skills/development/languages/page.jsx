'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const languageSkills = [
  { name: 'C', icon: 'c', exp: 3, projects: 8 },
  { name: 'C++', icon: 'cpp', exp: 4, projects: 15 },
  { name: 'C#', icon: 'csharp', exp: 3, projects: 12 },
  { name: 'Python', icon: 'python', exp: 5, projects: 35 },
  { name: 'Rust', icon: 'rust', exp: 2, projects: 6 },
  { name: 'Go', icon: 'go', exp: 3, projects: 10 },
  { name: 'Java', icon: 'java', exp: 4, projects: 20 },
  { name: 'JavaScript', icon: 'javascript', exp: 5, projects: 50 },
  { name: 'TypeScript', icon: 'typescript', exp: 5, projects: 45 },
  { name: 'Bash', icon: 'bash', exp: 4, projects: 25 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    c: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9.5c-1-1-2.5-1.5-3.5-1.5-2.5 0-4 2-4 4s1.5 4 4 4c1 0 2.5-.5 3.5-1.5" />
      </svg>
    ),
    cpp: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9.5c-1-1-2.5-1.5-3.5-1.5-2.5 0-4 2-4 4s1.5 4 4 4c1 0 2.5-.5 3.5-1.5" />
        <path d="M17 10v4M19 10v4M17 12h2M19 12h2" />
      </svg>
    ),
    csharp: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9.5c-1-1-2.5-1.5-3.5-1.5-2.5 0-4 2-4 4s1.5 4 4 4c1 0 2.5-.5 3.5-1.5" />
        <path d="M17 10v4M19 10v4M16 12h4M16 11h4M16 13h4" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2c-3 0-5 1.5-5 4v2h5v1H7c-2 0-3 1.5-3 3.5S5 16 7 16h2v-2c0-2 1.5-3 3.5-3h4c2 0 3.5-1.5 3.5-3.5V6c0-2.5-2-4-5-4z" />
        <path d="M12 22c3 0 5-1.5 5-4v-2h-5v-1h5c2 0 3-1.5 3-3.5S19 8 17 8h-2v2c0 2-1.5 3-3.5 3h-4C5.5 13 4 14.5 4 16.5V18c0 2.5 2 4 5 4z" />
        <circle cx="10" cy="6" r="0.5" fill="currentColor" />
        <circle cx="14" cy="18" r="0.5" fill="currentColor" />
      </svg>
    ),
    rust: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6l3 3-3 3-3-3 3-3z" />
        <path d="M12 12l3 3-3 3-3-3 3-3z" />
        <circle cx="12" cy="4" r="1" fill="currentColor" />
        <circle cx="19" cy="8" r="1" fill="currentColor" />
        <circle cx="19" cy="16" r="1" fill="currentColor" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
        <circle cx="5" cy="16" r="1" fill="currentColor" />
        <circle cx="5" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
    go: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 12h12M3 8h18M3 16h18" />
        <circle cx="18" cy="12" r="3" />
        <path d="M15 12h6" />
      </svg>
    ),
    java: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 18c-2 0-3-1-3-2s1-2 3-2 4 1 4 2M14 14c0 1-2 2-4 2s-4-1-4-2" />
        <path d="M10 8v6M14 10c0-2-1-4-4-4" />
        <path d="M6 20c0 1 2 2 4 2s4-1 4-2" />
        <circle cx="11" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M10 17v-4c0-1 .5-2 2-2M16 17c0-1.5-1-2-2-2s-2 .5-2 2" />
        <path d="M10 9h4" />
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 7v10M9 7h6M16 17c0-1.5-1-2-2-2s-2 .5-2 2" />
      </svg>
    ),
    bash: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 9l3 3-3 3M12 15h5" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.c}</div>;
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

export default function LanguageSkillsPage() {
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
            Programming Languages
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Proficiency across system-level, application, and scripting languages
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {languageSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}