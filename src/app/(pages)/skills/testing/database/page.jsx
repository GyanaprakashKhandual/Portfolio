'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const databaseTestingSkills = [
  { name: 'SQL', icon: 'sql', exp: 5, projects: 60 },
  { name: 'MySQL', icon: 'mysql', exp: 5, projects: 55 },
  { name: 'PostgreSQL', icon: 'postgresql', exp: 5, projects: 50 },
  { name: 'MongoDB', icon: 'mongodb', exp: 5, projects: 48 },
  { name: 'Oracle Database', icon: 'oracle', exp: 4, projects: 35 },
  { name: 'SQL Server', icon: 'sqlserver', exp: 4, projects: 40 },
  { name: 'SQLite', icon: 'sqlite', exp: 4, projects: 30 },
  { name: 'Redis', icon: 'redis', exp: 4, projects: 28 },
  { name: 'Cassandra', icon: 'cassandra', exp: 3, projects: 18 },
  { name: 'JDBC', icon: 'jdbc', exp: 5, projects: 45 },
  { name: 'Stored Procedures', icon: 'storedproc', exp: 5, projects: 42 },
  { name: 'Triggers', icon: 'triggers', exp: 4, projects: 35 },
  { name: 'Views', icon: 'views', exp: 5, projects: 38 },
  { name: 'Indexes', icon: 'indexes', exp: 5, projects: 40 },
  { name: 'Joins', icon: 'joins', exp: 5, projects: 55 },
  { name: 'Transactions', icon: 'transactions', exp: 5, projects: 48 },
  { name: 'Data Integrity', icon: 'dataintegrity', exp: 5, projects: 52 },
  { name: 'Schema Validation', icon: 'schema', exp: 5, projects: 45 },
  { name: 'ETL Testing', icon: 'etl', exp: 4, projects: 30 },
  { name: 'Data Migration', icon: 'migration', exp: 4, projects: 32 },
  { name: 'Query Optimization', icon: 'optimization', exp: 5, projects: 38 },
  { name: 'Performance Testing', icon: 'performance', exp: 4, projects: 35 },
  { name: 'TestNG', icon: 'testng', exp: 4, projects: 40 },
  { name: 'JUnit', icon: 'junit', exp: 4, projects: 42 },
  { name: 'DBUnit', icon: 'dbunit', exp: 4, projects: 28 },
  { name: 'Liquibase', icon: 'liquibase', exp: 3, projects: 22 },
  { name: 'Flyway', icon: 'flyway', exp: 3, projects: 20 },
  { name: 'Data Generator', icon: 'datagenerator', exp: 4, projects: 30 },
  { name: 'SQL Profiler', icon: 'profiler', exp: 4, projects: 25 },
  { name: 'Backup & Recovery', icon: 'backup', exp: 4, projects: 28 },
  { name: 'Security Testing', icon: 'security', exp: 4, projects: 32 },
  { name: 'Replication Testing', icon: 'replication', exp: 3, projects: 18 },
  { name: 'NoSQL Testing', icon: 'nosql', exp: 4, projects: 35 },
  { name: 'DB Automation Scripts', icon: 'automation', exp: 5, projects: 45 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    sql: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
        <path d="M12 12h6M12 15h6" />
      </svg>
    ),
    mysql: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" />
        <circle cx="12" cy="12" r="2" />
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
    mongodb: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 3v3M12 18v3" />
      </svg>
    ),
    oracle: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    sqlserver: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="4" y="14" width="6" height="6" />
        <rect x="14" y="14" width="6" height="6" />
        <path d="M7 4v16M17 4v16M4 10h16M4 20h16" />
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
    redis: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16M4 14h16" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="16" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
    cassandra: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6-3M12 12v6M12 12L6 9" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    jdbc: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M8 10h8M8 14h5" />
        <circle cx="18" cy="10" r="1" fill="currentColor" />
        <path d="M12 6V4M12 20v-2" />
      </svg>
    ),
    storedproc: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10l3 4 6-8" />
        <circle cx="7" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    triggers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    ),
    views: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5C7 5 3 12 3 12s4 7 9 7 9-7 9-7-4-7-9-7z" />
      </svg>
    ),
    indexes: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M3 12h18M3 18h18" />
        <circle cx="7" cy="6" r="2" />
        <circle cx="7" cy="12" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
    joins: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="12" r="6" />
        <circle cx="15" cy="12" r="6" />
        <path d="M12 9v6" />
      </svg>
    ),
    transactions: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3v3M12 18v3" />
      </svg>
    ),
    dataintegrity: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="2" />
        <path d="M12 18v2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
    schema: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 12l2 2 4-4" />
        <path d="M4 8h16M4 16h16" />
      </svg>
    ),
    etl: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="7" height="5" rx="1" />
        <rect x="14" y="5" width="7" height="5" rx="1" />
        <rect x="3" y="14" width="7" height="5" rx="1" />
        <rect x="14" y="14" width="7" height="5" rx="1" />
        <path d="M10 7.5h4M10 16.5h4" />
        <path d="M17.5 10v4" />
      </svg>
    ),
    migration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    optimization: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 18l4-8 4 8 4-12 4 12 2-4" />
        <circle cx="7" cy="10" r="1" fill="currentColor" />
        <circle cx="11" cy="18" r="1" fill="currentColor" />
        <circle cx="15" cy="6" r="1" fill="currentColor" />
        <path d="M3 21h18" />
      </svg>
    ),
    performance: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    testng: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 8v8M15 8v8M9 12h6" />
        <circle cx="9" cy="8" r="1" fill="currentColor" />
        <circle cx="15" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
    junit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 8v6M14 10c0-2-1-4-4-4" />
        <path d="M6 20c0 1 2 2 4 2s4-1 4-2" />
        <circle cx="11" cy="6" r="1" fill="currentColor" />
        <path d="M14 14v4c0 1 1 2 2 2s2-1 2-2v-6" />
      </svg>
    ),
    dbunit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    liquibase: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v12l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6 3-6 3-6-3 6-3z" />
        <path d="M12 6v6" />
      </svg>
    ),
    flyway: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 18l9-9 9 9" />
        <path d="M6 21l6-6 6 6" />
        <path d="M12 3v6" />
        <circle cx="12" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
    datagenerator: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M12 8v8M8 12h8" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="16" cy="8" r="1" fill="currentColor" />
        <circle cx="8" cy="16" r="1" fill="currentColor" />
        <circle cx="16" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    profiler: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="4" height="10" />
        <rect x="10" y="6" width="4" height="14" />
        <rect x="17" y="8" width="4" height="12" />
        <path d="M3 10l4-4 3 3 4-4 3 3 4-4" />
      </svg>
    ),
    backup: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <circle cx="12" cy="14" r="2" />
        <path d="M12 16v2" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 3v7c0 5-8 10-8 10s-8-5-8-10V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    replication: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="8" r="5" />
        <circle cx="16" cy="16" r="5" />
        <path d="M13 8h3v8" />
      </svg>
    ),
    nosql: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" />
        <path d="M4 8l8 4m0 0l8-4m-8 4v8" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2 2 4-4" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.sql}</div>;
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

export default function DatabaseTestingPage() {
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
            Database Testing
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Comprehensive database testing including automation, manual testing, and validation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {databaseTestingSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}