'use client';

import { motion } from 'framer-motion';

const languageSkills = [
  { name: 'C',          icon: 'c',          exp: 3, projects: 8,   github: '#', project: '#' },
  { name: 'C++',        icon: 'cpp',        exp: 4, projects: 15,  github: '#', project: '#' },
  { name: 'C#',         icon: 'csharp',     exp: 3, projects: 12,  github: '#', project: '#' },
  { 
    name: 'Python',     icon: 'python',     exp: 5, projects: 35,
    github: 'https://github.com/yourusername/python-projects',
    project: 'https://your-demo.com/python-script'
  },
  { name: 'Rust',       icon: 'rust',       exp: 2, projects: 6,   github: '#', project: '#' },
  { name: 'Go',         icon: 'go',         exp: 3, projects: 10,  github: '#', project: '#' },
  { 
    name: 'Java',       icon: 'java',       exp: 4, projects: 20,
    github: 'https://github.com/yourusername/java-projects',
    project: '#'
  },
  { 
    name: 'JavaScript', icon: 'javascript', exp: 5, projects: 50,
    github: 'https://github.com/yourusername/js-projects',
    project: 'https://your-demo.com/js-app'
  },
  { 
    name: 'TypeScript', icon: 'typescript', exp: 5, projects: 45,
    github: 'https://github.com/yourusername/ts-projects',
    project: 'https://your-demo.com/ts-app'
  },
  { name: 'Bash',       icon: 'bash',       exp: 4, projects: 25,  github: '#', project: '#' },
];

// Skill Icon Component (size matched to other tables)
const SkillIcon = ({ icon }) => {
  const icons = {
    c: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M15 9.5c-1-1-2.5-1.5-3.5-1.5-2.5 0-4 2-4 4s1.5 4 4 4c1 0 2.5-.5 3.5-1.5" /></svg>,
    cpp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M15 9.5c-1-1-2.5-1.5-3.5-1.5-2.5 0-4 2-4 4s1.5 4 4 4c1 0 2.5-.5 3.5-1.5" /><path d="M17 10v4M19 10v4M17 12h2M19 12h2" /></svg>,
    csharp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M15 9.5c-1-1-2.5-1.5-3.5-1.5-2.5 0-4 2-4 4s1.5 4 4 4c1 0 2.5-.5 3.5-1.5" /><path d="M17 10v4M19 10v4M16 12h4M16 11h4M16 13h4" /></svg>,
    python: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2c-3 0-5 1.5-5 4v2h5v1H7c-2 0-3 1.5-3 3.5S5 16 7 16h2v-2c0-2 1.5-3 3.5-3h4c2 0 3.5-1.5 3.5-3.5V6c0-2.5-2-4-5-4z" /><path d="M12 22c3 0 5-1.5 5-4v-2h-5v-1h5c2 0 3-1.5 3-3.5S19 8 17 8h-2v2c0 2-1.5 3-3.5 3h-4C5.5 13 4 14.5 4 16.5V18c0 2.5 2 4 5 4z" /><circle cx="10" cy="6" r="0.5" fill="currentColor" /><circle cx="14" cy="18" r="0.5" fill="currentColor" /></svg>,
    rust: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 6l3 3-3 3-3-3 3-3z" /><path d="M12 12l3 3-3 3-3-3 3-3z" /><circle cx="12" cy="4" r="1" fill="currentColor" /><circle cx="19" cy="8" r="1" fill="currentColor" /><circle cx="19" cy="16" r="1" fill="currentColor" /><circle cx="12" cy="20" r="1" fill="currentColor" /><circle cx="5" cy="16" r="1" fill="currentColor" /><circle cx="5" cy="8" r="1" fill="currentColor" /></svg>,
    go: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 12h12M3 8h18M3 16h18" /><circle cx="18" cy="12" r="3" /><path d="M15 12h6" /></svg>,
    java: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 18c-2 0-3-1-3-2s1-2 3-2 4 1 4 2M14 14c0 1-2 2-4 2s-4-1-4-2" /><path d="M10 8v6M14 10c0-2-1-4-4-4" /><path d="M6 20c0 1 2 2 4 2s4-1 4-2" /><circle cx="11" cy="6" r="1" fill="currentColor" /></svg>,
    javascript: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M10 17v-4c0-1 .5-2 2-2M16 17c0-1.5-1-2-2-2s-2 .5-2 2" /><path d="M10 9h4" /></svg>,
    typescript: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 7v10M9 7h6M16 17c0-1.5-1-2-2-2s-2 .5-2 2" /></svg>,
    bash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 9l3 3-3 3M12 15h5" /></svg>,
  };

  return (
    <div className="text-gray-700 transition-colors w-7 h-7 dark:text-gray-300">
      {icons[icon] || icons.c}
    </div>
  );
};

export default function LanguageSkillsTable() {
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
            Programming Languages
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl dark:text-slate-400">
            Proficiency across system-level, application, scripting and modern languages
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
                  Language
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
              {languageSkills.map((skill, index) => (
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
          Scroll → to see GitHub & Project links
        </div>
      </div>
    </div>
  );
}