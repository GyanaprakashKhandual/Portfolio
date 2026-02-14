'use client';

import { motion } from 'framer-motion';

const backendSkills = [
  { 
    name: 'Express JS', 
    icon: 'express', 
    exp: 5, 
    projects: 18,
    github: 'https://github.com/yourusername/express-projects',
    project: 'https://yourproject.com/express-demo'
  },
  { 
    name: 'Node JS', 
    icon: 'nodejs', 
    exp: 5, 
    projects: 22,
    github: 'https://github.com/yourusername/node-projects',
    project: 'https://yourproject.com/node-app'
  },
  { 
    name: 'REST API', 
    icon: 'rest', 
    exp: 5, 
    projects: 20,
    github: 'https://github.com/yourusername/rest-api',
    project: 'https://yourproject.com/rest-demo'
  },
  // Add real links for all items below
  { name: 'FastAPI', icon: 'fastapi', exp: 3, projects: 8, github: '#', project: '#' },
  { name: 'GraphQL', icon: 'graphql', exp: 3, projects: 9, github: '#', project: '#' },
  { name: 'Mongoose', icon: 'mongoose', exp: 4, projects: 16, github: '#', project: '#' },
  { name: 'Socket.IO', icon: 'socket', exp: 3, projects: 7, github: '#', project: '#' },
  { name: 'Firebase', icon: 'firebase', exp: 4, projects: 12, github: '#', project: '#' },
  { name: 'JWT', icon: 'jwt', exp: 5, projects: 18, github: '#', project: '#' },
  { name: 'OAuth 2.0', icon: 'oauth', exp: 4, projects: 13, github: '#', project: '#' },
  { name: 'RBAC', icon: 'rbac', exp: 4, projects: 11, github: '#', project: '#' },
  { name: 'Bcrypt', icon: 'bcrypt', exp: 5, projects: 19, github: '#', project: '#' },
  { name: 'Helmet', icon: 'helmet', exp: 4, projects: 14, github: '#', project: '#' },
  { name: 'Swagger', icon: 'swagger', exp: 4, projects: 12, github: '#', project: '#' },
  { name: 'Postman', icon: 'postman', exp: 4, projects: 15, github: '#', project: '#' },
  { name: 'Redis', icon: 'redis', exp: 3, projects: 8, github: '#', project: '#' },
  { name: 'Cloudflare', icon: 'cloudflare', exp: 3, projects: 6, github: '#', project: '#' },
  { name: 'Winston Logger', icon: 'winston', exp: 4, projects: 11, github: '#', project: '#' },
  { name: 'Anthropic API', icon: 'anthropic', exp: 2, projects: 4, github: '#', project: '#' },
  { name: 'OpenAI API', icon: 'openai', exp: 3, projects: 7, github: '#', project: '#' },
  { name: 'AWS', icon: 'aws', exp: 3, projects: 9, github: '#', project: '#' },
  { name: 'Cloudinary', icon: 'cloudinary', exp: 3, projects: 8, github: '#', project: '#' }
];

// Skill Icon Component (unchanged)
const SkillIcon = ({ icon }) => {
  const icons = {
    express: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M12 3v18M6 6l12 12M18 6L6 18" /></svg>,
    nodejs: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M8 12l4-4 4 4M12 8v8" /></svg>,
    rest: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9zM9 3v18M3 9h18" /></svg>,
    fastapi: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" /><path d="M12 12l6 3-6 3-6-3 6-3z" /></svg>,
    graphql: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="4" r="2" /><circle cx="6" cy="16" r="2" /><circle cx="18" cy="16" r="2" /><path d="M12 6v8M8.5 13.5l2 3.5M15.5 13.5l-2 3.5" /></svg>,
    // ... add remaining icons as before
    openai: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M7 12h10" /><circle cx="12" cy="12" r="3" /></svg>,
    aws: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" /><path d="M12 8v8M8 11l4 2 4-2M8 13l4 2 4-2" /></svg>,
    cloudinary: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="3" /><circle cx="9" cy="9" r="3" /><path d="M2 18l6-6 4 4 8-8" /></svg>,
  };

  return (
    <div className="text-gray-700 transition-colors w-7 h-7 dark:text-gray-300">
      {icons[icon] || icons.nodejs}
    </div>
  );
};

export default function BackendSkillsTable() {
  return (
    <div className="min-h-screen px-4 py-10 text-gray-900 bg-white sm:px-6 lg:px-8 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:text-left"
        >
          <h1 className="mb-3 text-4xl font-bold sm:text-5xl">
            Backend Skills
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl dark:text-slate-400">
            Comprehensive expertise in server-side development, APIs, databases & cloud infrastructure
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-x-auto border border-gray-200 shadow-sm rounded-xl dark:border-slate-800"
        >
          <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-800">
            <thead className="bg-gray-50 dark:bg-slate-900/70">
              <tr>
                <th scope="col" className="px-4 py-4 text-sm font-semibold text-left text-gray-700 dark:text-slate-300">
                  Skill
                </th>
                <th scope="col" className="hidden px-4 py-4 text-sm font-semibold text-left text-gray-700 dark:text-slate-300 md:table-cell">
                  Experience
                </th>
                <th scope="col" className="px-4 py-4 text-sm font-semibold text-center text-gray-700 dark:text-slate-300">
                  Years
                </th>
                <th scope="col" className="px-4 py-4 text-sm font-semibold text-center text-gray-700 dark:text-slate-300">
                  Projects
                </th>
                <th scope="col" className="hidden px-4 py-4 text-sm font-semibold text-center text-gray-700 dark:text-slate-300 sm:table-cell">
                  GitHub
                </th>
                <th scope="col" className="hidden px-4 py-4 text-sm font-semibold text-center text-gray-700 dark:text-slate-300 sm:table-cell">
                  Project
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-slate-800 dark:bg-slate-950">
              {backendSkills.map((skill, index) => (
                <motion.tr
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ backgroundColor: "rgba(30, 30, 30, 0.08)" }}
                  className="transition-colors group hover:bg-gray-50 dark:hover:bg-slate-800/50"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <SkillIcon icon={skill.icon} />
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                  </td>

                  <td className="hidden px-4 py-4 whitespace-nowrap md:table-cell">
                    <div className="w-48 max-w-full">
                      <div className="h-2.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(skill.exp / 5) * 100}%` }}
                          transition={{ duration: 1.2, delay: 0.4 + index * 0.06 }}
                          className="h-full bg-gradient-to-r from-gray-800 to-black dark:from-gray-700 dark:to-gray-900"
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-sm font-medium text-center whitespace-nowrap">
                    <span className="text-gray-900 dark:text-white">{skill.exp} yrs</span>
                  </td>

                  <td className="px-4 py-4 text-sm text-center whitespace-nowrap">
                    <span className="font-bold text-gray-900 dark:text-white">{skill.projects}</span>
                    <span className="ml-1 text-gray-500 dark:text-slate-400">+</span>
                  </td>

                  <td className="hidden px-4 py-4 text-center whitespace-nowrap sm:table-cell">
                    <motion.a
                      href={skill.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </motion.a>
                  </td>

                  <td className="hidden px-4 py-4 text-center whitespace-nowrap sm:table-cell">
                    <motion.a
                      href={skill.project}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                      View Project
                    </motion.a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile hint */}
        <div className="mt-6 text-sm text-center text-gray-500 dark:text-slate-400 sm:hidden">
          Scroll horizontally to see GitHub & Project links →
        </div>
      </div>
    </div>
  );
}