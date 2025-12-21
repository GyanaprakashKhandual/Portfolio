'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const databaseSkills = [
  { name: 'Mongoose', icon: 'mongoose', exp: 5, projects: 20 },
  { name: 'Prisma', icon: 'prisma', exp: 4, projects: 15 },
  { name: 'SQLite', icon: 'sqlite', exp: 3, projects: 9 },
  { name: 'Elasticsearch', icon: 'elasticsearch', exp: 3, projects: 8 },
  { name: 'Meilisearch', icon: 'meilisearch', exp: 3, projects: 7 },
  { name: 'Indexing', icon: 'indexing', exp: 4, projects: 14 },
  { name: 'Querying', icon: 'querying', exp: 5, projects: 22 },
  { name: 'Pagination', icon: 'pagination', exp: 4, projects: 16 },
  { name: 'Hygraph', icon: 'hygraph', exp: 2, projects: 5 },
  { name: 'Liquibase', icon: 'liquibase', exp: 2, projects: 4 },
  { name: 'Amazon RDS', icon: 'rds', exp: 3, projects: 8 },
  { name: 'Supabase', icon: 'supabase', exp: 3, projects: 10 },
  { name: 'MongoDB Plus', icon: 'mongodb', exp: 4, projects: 13 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    mongoose: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8v8M10 10l4 4M14 10l-4 4" />
      </svg>
    ),
    prisma: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l9-9 9 9-4.5 4.5L12 21 3 12z" />
        <path d="M12 3v18" />
      </svg>
    ),
    sqlite: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8" cy="8" r="1.5" />
        <circle cx="16" cy="8" r="1.5" />
        <circle cx="8" cy="16" r="1.5" />
        <circle cx="16" cy="16" r="1.5" />
        <path d="M8 12h8" />
      </svg>
    ),
    elasticsearch: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v12M6 12h12M9 9l6 6M15 9l-6 6" />
      </svg>
    ),
    meilisearch: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <circle cx="11" cy="11" r="3" />
      </svg>
    ),
    indexing: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M3 12h18M3 18h18" />
        <circle cx="7" cy="6" r="2" />
        <circle cx="7" cy="12" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
    querying: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18M3 15h18" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="6" cy="12" r="1" />
      </svg>
    ),
    pagination: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="6" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="18" cy="12" r="1.5" />
      </svg>
    ),
    hygraph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v12M6 12h12" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    liquibase: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v12l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6 3-6 3-6-3 6-3z" />
        <path d="M12 6v6" />
      </svg>
    ),
    rds: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="4" y="14" width="6" height="6" />
        <rect x="14" y="14" width="6" height="6" />
        <path d="M7 4v16M17 4v16M4 10h16M4 20h16" />
      </svg>
    ),
    supabase: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 10l2 2 8-8M5 10l-2 2 10 10M5 10h14v10H5z" />
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.mongoose}</div>;
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

export default function DatabaseSkillsPage() {
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
            Database Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Expertise in database management, optimization, and cloud-based solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {databaseSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}