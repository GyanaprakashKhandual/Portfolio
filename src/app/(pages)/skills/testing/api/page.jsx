'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const apiAutomationSkills = [
  { name: 'Postman', icon: 'postman', exp: 5, projects: 60 },
  { name: 'Postman Assertion', icon: 'postmanassertion', exp: 5, projects: 55 },
  { name: 'Rest Assured', icon: 'restassured', exp: 5, projects: 50 },
  { name: 'TestNG', icon: 'testng', exp: 4, projects: 40 },
  { name: 'JUnit', icon: 'junit', exp: 4, projects: 42 },
  { name: 'BDD', icon: 'bdd', exp: 4, projects: 35 },
  { name: 'Cucumber', icon: 'cucumber', exp: 4, projects: 38 },
  { name: 'Jenkins', icon: 'jenkins', exp: 4, projects: 30 },
  { name: 'Data Bindings', icon: 'databindings', exp: 4, projects: 28 },
  { name: 'SOAPUI', icon: 'soapui', exp: 3, projects: 20 },
  { name: 'JMeter', icon: 'jmeter', exp: 4, projects: 32 },
  { name: 'KarateDSL', icon: 'karate', exp: 3, projects: 18 },
  { name: 'ExtentReport', icon: 'extent', exp: 4, projects: 35 },
  { name: 'AllureReport', icon: 'allure', exp: 4, projects: 33 },
  { name: 'Custom HTML Report', icon: 'customhtml', exp: 4, projects: 25 },
  { name: 'JSON', icon: 'json', exp: 5, projects: 70 },
  { name: 'Newman', icon: 'newman', exp: 4, projects: 28 },
  { name: 'k6', icon: 'k6', exp: 3, projects: 22 },
  { name: 'WireMock', icon: 'wiremock', exp: 4, projects: 24 },
  { name: 'Pact', icon: 'pact', exp: 3, projects: 16 },
  { name: 'OpenAPI/Swagger', icon: 'swagger', exp: 5, projects: 45 },
  { name: 'JSON Schema Validator', icon: 'jsonschema', exp: 4, projects: 30 },
  { name: 'OAuth 2.0 Tools', icon: 'oauth', exp: 4, projects: 26 },
  { name: 'JWT Utilities', icon: 'jwt', exp: 5, projects: 40 },
  { name: 'Apache HttpClient', icon: 'httpclient', exp: 4, projects: 28 },
  { name: 'Retrofit', icon: 'retrofit', exp: 3, projects: 20 },
  { name: 'Axios', icon: 'axios', exp: 5, projects: 50 },
  { name: 'OkHttp', icon: 'okhttp', exp: 4, projects: 25 },
  { name: 'Docker', icon: 'docker', exp: 4, projects: 35 },
  { name: 'GitHub Actions', icon: 'githubactions', exp: 5, projects: 48 },
  { name: 'GitLab CI', icon: 'gitlabci', exp: 4, projects: 30 },
  { name: 'Postman Monitor', icon: 'postmanmonitor', exp: 4, projects: 22 },
  { name: 'MockServer', icon: 'mockserver', exp: 4, projects: 26 },
  { name: 'Gatling', icon: 'gatling', exp: 3, projects: 18 },
  { name: 'InfluxDB', icon: 'influxdb', exp: 3, projects: 15 }
];

// SVG Icons for Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    postman: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    postmanassertion: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2 2 4-4" />
        <path d="M12 7v3M12 14v3" />
      </svg>
    ),
    restassured: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M12 8v8M8 12h8" />
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
    bdd: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M3 12h18M3 18h18" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
        <circle cx="6" cy="18" r="1" fill="currentColor" />
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
    jenkins: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="9" r="3" />
        <path d="M12 12v8M8 16l4 4 4-4" />
        <rect x="6" y="4" width="12" height="4" />
      </svg>
    ),
    databindings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="7" height="5" rx="1" />
        <rect x="14" y="5" width="7" height="5" rx="1" />
        <rect x="3" y="14" width="7" height="5" rx="1" />
        <rect x="14" y="14" width="7" height="5" rx="1" />
        <path d="M10 7.5h4M10 16.5h4" />
      </svg>
    ),
    soapui: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16v12H4z" />
        <path d="M8 10h8M8 14h5" />
        <circle cx="6" cy="10" r="1" fill="currentColor" />
        <circle cx="6" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
    jmeter: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-7" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    karate: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6-3M12 12v6M12 12L6 9" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    extent: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <path d="M12 12l3 3M15 12l-3 3" />
      </svg>
    ),
    allure: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 12l3 3 5-6" />
        <path d="M4 8h16M4 16h16" />
      </svg>
    ),
    customhtml: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 9l2 3-2 3M13 9l2 3-2 3" />
      </svg>
    ),
    json: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
        <circle cx="6" cy="8" r="0.5" fill="currentColor" />
        <circle cx="6" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
    newman: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8v8" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </svg>
    ),
    k6: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
        <path d="M12 12l6-3M12 12v6M12 12L6 9" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    wiremock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M8 10h8M8 14h5" />
        <circle cx="18" cy="10" r="1" fill="currentColor" />
        <path d="M12 6V4M12 20v-2" />
      </svg>
    ),
    pact: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6h6v6H6zM14 6h4v6h-4M6 14h4v4H6zM14 14h4v4h-4" />
        <path d="M12 9h2M12 17h2M9 12v2M17 12v2" />
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
    jsonschema: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 12l2 2 4-4" />
        <path d="M4 8h16M4 16h16" />
      </svg>
    ),
    oauth: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        <circle cx="16" cy="8" r="1.5" fill="currentColor" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    jwt: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="7" height="12" rx="1" />
        <rect x="14" y="6" width="7" height="12" rx="1" />
        <path d="M6.5 10v4M17.5 10v4" />
      </svg>
    ),
    httpclient: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M12 3v18" />
        <path d="M7 7l5 5-5 5M17 7l-5 5 5 5" />
      </svg>
    ),
    retrofit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" />
        <path d="M12 12l6-3M12 12l-6-3M12 12v7" />
      </svg>
    ),
    axios: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" />
        <path d="M4 8l8 4m0 0l8-4m-8 4v8" />
      </svg>
    ),
    okhttp: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12h6M12 9v6" />
        <circle cx="9" cy="9" r="1.5" fill="currentColor" />
        <circle cx="15" cy="15" r="1.5" fill="currentColor" />
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
    gitlabci: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l2 6H10l2-6z" />
        <path d="M4 8l8 14 8-14H4z" />
        <path d="M10 8l2 14 2-14" />
      </svg>
    ),
    postmanmonitor: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    mockserver: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10h16M10 4v16" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="13" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
    gatling: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17l4-8 4 8 4-12 4 12 2-4" />
        <circle cx="7" cy="9" r="1" fill="currentColor" />
        <circle cx="11" cy="17" r="1" fill="currentColor" />
        <circle cx="15" cy="5" r="1" fill="currentColor" />
      </svg>
    ),
    influxdb: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-7" />
        <rect x="6" y="13" width="2" height="4" />
        <rect x="10" y="9" width="2" height="8" />
        <rect x="14" y="11" width="2" height="6" />
      </svg>
    )
  };
  return <div className="w-8 h-8">{icons[icon] || icons.postman}</div>;
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

export default function APIAutomationTestingPage() {
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
            API Automation Testing
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Comprehensive REST/SOAP API testing, performance testing, and contract testing expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apiAutomationSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}