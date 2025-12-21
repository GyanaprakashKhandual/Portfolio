'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const securityTestingSkills = [
  { name: 'OWASP ZAP', icon: 'zap', exp: 5, projects: 42 },
  { name: 'Burp Suite', icon: 'burpsuite', exp: 5, projects: 45 },
  { name: 'Nikto', icon: 'nikto', exp: 4, projects: 30 },
  { name: 'TheFatRat', icon: 'fatrat', exp: 3, projects: 18 },
  { name: 'Metasploit', icon: 'metasploit', exp: 4, projects: 28 },
  { name: 'Nmap', icon: 'nmap', exp: 5, projects: 40 },
  { name: 'Wireshark', icon: 'wireshark', exp: 4, projects: 32 },
  { name: 'SQLMap', icon: 'sqlmap', exp: 4, projects: 35 },
  { name: 'OWASP Top 10', icon: 'owasptop10', exp: 5, projects: 50 },
  { name: 'Penetration Testing', icon: 'pentest', exp: 5, projects: 38 },
  { name: 'Vulnerability Assessment', icon: 'vulnerability', exp: 5, projects: 45 },
  { name: 'XSS Testing', icon: 'xss', exp: 5, projects: 40 },
  { name: 'SQL Injection', icon: 'sqlinjection', exp: 5, projects: 42 },
  { name: 'CSRF Testing', icon: 'csrf', exp: 4, projects: 35 },
  { name: 'Security Scanning', icon: 'scanning', exp: 5, projects: 48 },
  { name: 'Kali Linux', icon: 'kali', exp: 5, projects: 40 },
  { name: 'SSL/TLS Testing', icon: 'ssl', exp: 4, projects: 38 },
  { name: 'Authentication Testing', icon: 'auth', exp: 5, projects: 45 },
  { name: 'Authorization Testing', icon: 'authorization', exp: 5, projects: 43 },
  { name: 'Session Management', icon: 'session', exp: 5, projects: 40 },
  { name: 'Security Headers', icon: 'headers', exp: 4, projects: 35 },
  { name: 'API Security', icon: 'apisecurity', exp: 5, projects: 42 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    zap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    ),
    burpsuite: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6l-6 6h4l2 6 6-6h-4l-2-6z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    nikto: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6-3M12 12v6M12 12L6 9" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 6V3" />
      </svg>
    ),
    fatrat: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8 2 5 5 5 9v6c0 4 3 7 7 7s7-3 7-7V9c0-4-3-7-7-7z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
        <path d="M9 14c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
        <path d="M6 7l-2-2M18 7l2-2" />
      </svg>
    ),
    metasploit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M12 12l6-3M12 12l-6-3M12 12v7" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    nmap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        <circle cx="12" cy="17" r="1.5" fill="currentColor" />
        <circle cx="7" cy="12" r="1.5" fill="currentColor" />
        <circle cx="17" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    wireshark: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-7" />
        <circle cx="7" cy="14" r="1" fill="currentColor" />
        <circle cx="11" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="13" r="1" fill="currentColor" />
        <circle cx="19" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    sqlmap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
        <path d="M13 13l3 3M16 13l-3 3" />
      </svg>
    ),
    owasptop10: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 3v7c0 5-8 10-8 10s-8-5-8-10V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    pentest: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10l3 4 6-8" />
        <circle cx="7" cy="10" r="1" fill="currentColor" />
        <path d="M12 6V4M12 20v-2" />
      </svg>
    ),
    vulnerability: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 3v7c0 5-8 10-8 10s-8-5-8-10V5l8-3z" />
        <path d="M12 8v4M12 16v.01" />
      </svg>
    ),
    xss: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 2L8 22M4 7l4 5-4 5M20 7l-4 5 4 5" />
      </svg>
    ),
    sqlinjection: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10h10M7 14h7" />
        <path d="M18 10l3 4-3 4" />
      </svg>
    ),
    csrf: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8v8" />
        <path d="M16 16l4 4M8 8L4 4" />
      </svg>
    ),
    scanning: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 7v8M7 11h8" />
      </svg>
    ),
    kali: (
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
    ssl: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="2" />
        <path d="M12 18v2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
    auth: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 8l2 2 4-4" />
      </svg>
    ),
    authorization: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="2" />
        <path d="M12 18v2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <path d="M15 16h3" />
      </svg>
    ),
    session: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M20 12h2M2 12h2" />
      </svg>
    ),
    headers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 13h10M7 17h7" />
      </svg>
    ),
    apisecurity: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
        <path d="M12 2l8 3v7c0 5-8 10-8 10" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.zap}</div>;
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

export default function SecurityTestingPage() {
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
            Security Testing
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Comprehensive security testing including penetration testing and vulnerability assessment
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityTestingSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}