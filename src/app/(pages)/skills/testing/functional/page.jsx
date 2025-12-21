'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const automationSkills = [
  { name: 'Selenium', icon: 'selenium', exp: 5, projects: 45 },
  { name: 'Playwright', icon: 'playwright', exp: 4, projects: 35 },
  { name: 'Cypress', icon: 'cypress', exp: 5, projects: 40 },
  { name: 'Nightwatch.js', icon: 'nightwatch', exp: 3, projects: 18 },
  { name: 'WebdriverIO', icon: 'webdriverio', exp: 4, projects: 28 },
  { name: 'TestNG', icon: 'testng', exp: 4, projects: 30 },
  { name: 'JUnit', icon: 'junit', exp: 4, projects: 32 },
  { name: 'Mocha', icon: 'mocha', exp: 4, projects: 35 },
  { name: 'Cucumber', icon: 'cucumber', exp: 4, projects: 25 },
  { name: 'Appium', icon: 'appium', exp: 3, projects: 20 },
  { name: 'WinAppDriver', icon: 'winappdriver', exp: 2, projects: 10 },
  { name: 'Espresso', icon: 'espresso', exp: 3, projects: 15 },
  { name: 'XCUITest', icon: 'xcuitest', exp: 3, projects: 14 },
  { name: 'Selenium Grid', icon: 'seleniumgrid', exp: 4, projects: 22 },
  { name: 'BrowserStack', icon: 'browserstack', exp: 5, projects: 38 },
  { name: 'Sauce Labs', icon: 'saucelabs', exp: 4, projects: 28 },
  { name: 'Docker', icon: 'docker', exp: 4, projects: 30 },
  { name: 'GitHub Actions', icon: 'githubactions', exp: 5, projects: 42 },
  { name: 'Allure Report', icon: 'allure', exp: 4, projects: 25 },
  { name: 'Extent Reports', icon: 'extent', exp: 4, projects: 27 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    selenium: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        <circle cx="12" cy="17" r="1.5" fill="currentColor" />
        <circle cx="7" cy="12" r="1.5" fill="currentColor" />
        <circle cx="17" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    playwright: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" />
        <path d="M4 8l8 4m0 0l8-4m-8 4v8" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    cypress: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9c-1-1-2.5-1.5-3.5-1.5-2.5 0-4 2-4 4s1.5 4 4 4c1 0 2.5-.5 3.5-1.5" />
        <path d="M12 7v10" />
      </svg>
    ),
    nightwatch: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M12 12l4-4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    webdriverio: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10l3 4 6-8" />
        <circle cx="7" cy="10" r="1" fill="currentColor" />
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
    mocha: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 10h12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8z" />
        <path d="M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
        <path d="M10 14v4M14 14v4" />
      </svg>
    ),
    cucumber: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="4" width="12" height="16" rx="6" />
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
        <circle cx="9" cy="15" r="1" fill="currentColor" />
        <circle cx="15" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    appium: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 6h6M9 10h6M9 14h6" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    winappdriver: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
        <path d="M7 7l10 10" />
      </svg>
    ),
    espresso: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 8h12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" />
        <path d="M6 8V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2" />
        <path d="M6 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
        <path d="M10 11v3M14 11v3" />
      </svg>
    ),
    xcuitest: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7l6 6M15 7l-6 6" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <path d="M9 3h6" />
      </svg>
    ),
    seleniumgrid: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="7" cy="7" r="2" />
        <circle cx="17" cy="7" r="2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M9 7h6M9 17h6M7 9v6M17 9v6" />
      </svg>
    ),
    browserstack: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    saucelabs: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 10h8v4H8z" />
        <circle cx="10" cy="12" r="1" fill="currentColor" />
        <circle cx="14" cy="12" r="1" fill="currentColor" />
        <path d="M12 14v4" />
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
    githubactions: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2 2 4-4" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
    allure: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 12l3 3 5-6" />
        <path d="M4 8h16M4 16h16" />
      </svg>
    ),
    extent: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <path d="M12 12l3 3M15 12l-3 3" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.selenium}</div>;
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

export default function UIAutomationTestingPage() {
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
            UI Automation Testing
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Comprehensive test automation across web, mobile, and desktop platforms
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {automationSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}