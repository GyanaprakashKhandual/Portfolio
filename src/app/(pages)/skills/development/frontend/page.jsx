'use client';

import { motion } from 'framer-motion';

const frontendSkills = [
  { name: 'HTML', icon: 'html', exp: 5, projects: 12, github: '#', project: '#' },
  { name: 'CSS', icon: 'css', exp: 5, projects: 15, github: '#', project: '#' },
  { name: 'Bootstrap', icon: 'bootstrap', exp: 4, projects: 8, github: '#', project: '#' },
  { 
    name: 'Tailwind CSS', 
    icon: 'tailwind', 
    exp: 4, 
    projects: 18,
    github: 'https://github.com/yourusername/tailwind-projects',
    project: 'https://your-demo.com/tailwind-app'
  },
  { name: 'Material UI', icon: 'material', exp: 3, projects: 7, github: '#', project: '#' },
  { name: 'ZCN UI', icon: 'zcn', exp: 3, projects: 6, github: '#', project: '#' },
  { name: 'Alt Design', icon: 'alt', exp: 2, projects: 4, github: '#', project: '#' },
  { name: 'Fluent UI', icon: 'fluent', exp: 2, projects: 3, github: '#', project: '#' },
  { name: 'Primer Design', icon: 'primer', exp: 2, projects: 3, github: '#', project: '#' },
  { 
    name: 'Framer Motion', 
    icon: 'framer', 
    exp: 4, 
    projects: 10,
    github: 'https://github.com/yourusername/framer-motion-demos',
    project: '#'
  },
  { name: 'GSAP', icon: 'gsap', exp: 3, projects: 8, github: '#', project: '#' },
  { name: 'ThreeJS', icon: '3js', exp: 2, projects: 4, github: '#', project: '#' },
  { name: 'Lucid React', icon: 'lucid', exp: 3, projects: 9, github: '#', project: '#' },
  { 
    name: 'ReactJS', 
    icon: 'react', 
    exp: 5, 
    projects: 20,
    github: 'https://github.com/yourusername/react-projects',
    project: 'https://your-demo.com/react-app'
  },
  { 
    name: 'NextJS', 
    icon: 'nextjs', 
    exp: 4, 
    projects: 16,
    github: 'https://github.com/yourusername/nextjs-portfolio',
    project: 'https://your-nextjs-site.vercel.app'
  },
  { name: 'AngularJS', icon: 'angular', exp: 3, projects: 6, github: '#', project: '#' },
  { name: 'Web Vitals', icon: 'vitals', exp: 3, projects: 7, github: '#', project: '#' },
  { name: 'Semantic HTML', icon: 'semantic', exp: 5, projects: 12, github: '#', project: '#' },
  { name: 'Keyboard Navigation', icon: 'keyboard', exp: 4, projects: 10, github: '#', project: '#' },
  { name: 'React Memoization', icon: 'memo', exp: 4, projects: 11, github: '#', project: '#' },
  { 
    name: 'Redux Toolkit', 
    icon: 'redux', 
    exp: 4, 
    projects: 9,
    github: '#',
    project: '#'
  },
  { name: 'Zustand', icon: 'zustand', exp: 3, projects: 7, github: '#', project: '#' },
  { name: 'React Query', icon: 'query', exp: 4, projects: 10, github: '#', project: '#' }
];

// Skill Icon Component (adjusted size to match other tables)
const SkillIcon = ({ icon }) => {
  const icons = {
    html: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2h18l-3 18-6 2-6-2L3 2z" /><path d="M8 10h8v7l-3 1.5-3-1.5v-5" /></svg>,
    css: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2h18l-2.5 15-5.5 2.5-5.5-2.5L3 2z" /><circle cx="8" cy="10" r="1.5" /><circle cx="16" cy="10" r="1.5" /></svg>,
    react: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 3c4 0 6.5 2.5 6.5 9s-2.5 9-6.5 9-6.5-2.5-6.5-9 2.5-9 6.5-9z" /><path d="M12 3c-4 0-6.5 2.5-6.5 9s2.5 9 6.5 9 6.5-2.5 6.5-9-2.5-9-6.5-9z" /></svg>,
    nextjs: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M8 12l4-4 4 4M12 8v8" /></svg>,
    tailwind: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6c3-1 6-1 9 0M6 12c3-1 6-1 9 0M6 18c3-1 6-1 9 0" /></svg>,
    redux: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" /></svg>,
    zustand: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.5 7h7.5l-6 4.5 2.5 7.5L12 16l-6 4.5 2.5-7.5-6-4.5h7.5z" /></svg>,
    framer: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>,
    bootstrap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M8 8h4v2H8V8zm0 4h4v2H8v-2z" /></svg>,
    material: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" /></svg>,
    // ... remaining icons unchanged
    query: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3z" /><path d="M3 9h18M9 3v18" /><circle cx="9" cy="9" r="2" /></svg>,
  };

  return (
    <div className="text-gray-700 transition-colors w-7 h-7 dark:text-gray-300">
      {icons[icon] || icons.react}
    </div>
  );
};

export default function FrontendSkillsTable() {
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
            Frontend Skills
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl dark:text-slate-400">
            Modern web development — HTML/CSS, frameworks, animations, state management & performance
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
                  Main Project
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-slate-800 dark:bg-slate-950">
              {frontendSkills.map((skill, index) => (
                <motion.tr
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ backgroundColor: "rgba(30, 30, 30, 0.06)" }}
                  className="transition-colors group hover:bg-gray-50 dark:hover:bg-slate-800/40"
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
                      whileTap={{ scale: 0.94 }}
                      className={`inline-flex items-center px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        skill.github !== '#' 
                          ? 'text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700' 
                          : 'text-gray-400 bg-gray-200 cursor-not-allowed dark:bg-slate-700 dark:text-slate-500'
                      }`}
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
                      whileTap={{ scale: 0.94 }}
                      className={`inline-flex items-center px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        skill.project !== '#' 
                          ? 'text-white bg-blue-600 hover:bg-blue-700' 
                          : 'text-gray-400 bg-gray-200 cursor-not-allowed dark:bg-slate-700 dark:text-slate-500'
                      }`}
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
          Scroll horizontally → to see GitHub & Project links
        </div>
      </div>
    </div>
  );
}