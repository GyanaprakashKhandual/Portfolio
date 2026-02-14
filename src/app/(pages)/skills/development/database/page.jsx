'use client';

import { motion } from 'framer-motion';

const databaseSkills = [
  { 
    name: 'Mongoose', 
    icon: 'mongoose', 
    exp: 5, 
    projects: 20,
    github: 'https://github.com/yourusername/mongoose-projects',
    project: 'https://your-demo.com/mongoose-app'
  },
  { 
    name: 'Prisma', 
    icon: 'prisma', 
    exp: 4, 
    projects: 15,
    github: 'https://github.com/yourusername/prisma-examples',
    project: 'https://your-demo.com/prisma-project'
  },
  { 
    name: 'SQLite', 
    icon: 'sqlite', 
    exp: 3, 
    projects: 9,
    github: '#',
    project: '#'
  },
  { 
    name: 'Elasticsearch', 
    icon: 'elasticsearch', 
    exp: 3, 
    projects: 8,
    github: '#',
    project: '#'
  },
  { 
    name: 'Meilisearch', 
    icon: 'meilisearch', 
    exp: 3, 
    projects: 7,
    github: '#',
    project: '#'
  },
  { 
    name: 'Indexing', 
    icon: 'indexing', 
    exp: 4, 
    projects: 14,
    github: '#',
    project: '#'
  },
  { 
    name: 'Querying', 
    icon: 'querying', 
    exp: 5, 
    projects: 22,
    github: '#',
    project: '#'
  },
  { 
    name: 'Pagination', 
    icon: 'pagination', 
    exp: 4, 
    projects: 16,
    github: '#',
    project: '#'
  },
  { 
    name: 'Hygraph', 
    icon: 'hygraph', 
    exp: 2, 
    projects: 5,
    github: '#',
    project: '#'
  },
  { 
    name: 'Liquibase', 
    icon: 'liquibase', 
    exp: 2, 
    projects: 4,
    github: '#',
    project: '#'
  },
  { 
    name: 'Amazon RDS', 
    icon: 'rds', 
    exp: 3, 
    projects: 8,
    github: '#',
    project: '#'
  },
  { 
    name: 'Supabase', 
    icon: 'supabase', 
    exp: 3, 
    projects: 10,
    github: 'https://github.com/yourusername/supabase-projects',
    project: 'https://your-demo.com/supabase-app'
  },
  { 
    name: 'MongoDB Plus', 
    icon: 'mongodb', 
    exp: 4, 
    projects: 13,
    github: '#',
    project: '#'
  }
];

// Skill Icon Component
const SkillIcon = ({ icon }) => {
  const icons = {
    mongoose: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8M10 10l4 4M14 10l-4 4" /></svg>,
    prisma: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l9-9 9 9-4.5 4.5L12 21 3 12z" /><path d="M12 3v18" /></svg>,
    sqlite: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8" cy="8" r="1.5" /><circle cx="16" cy="8" r="1.5" /><circle cx="8" cy="16" r="1.5" /><circle cx="16" cy="16" r="1.5" /><path d="M8 12h8" /></svg>,
    elasticsearch: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 6v12M6 12h12M9 9l6 6M15 9l-6 6" /></svg>,
    meilisearch: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><circle cx="11" cy="11" r="3" /></svg>,
    indexing: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /><circle cx="7" cy="6" r="2" /><circle cx="7" cy="12" r="2" /><circle cx="7" cy="18" r="2" /></svg>,
    querying: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18M3 15h18" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="12" r="1" /></svg>,
    pagination: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="6" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="18" cy="12" r="1.5" /></svg>,
    hygraph: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v12M6 12h12" /><circle cx="12" cy="12" r="3" /></svg>,
    liquibase: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v12l-8 4-8-4V6l8-4z" /><path d="M12 12l6 3-6 3-6-3 6-3z" /><path d="M12 6v6" /></svg>,
    rds: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><rect x="14" y="14" width="6" height="6" /><path d="M7 4v16M17 4v16M4 10h16M4 20h16" /></svg>,
    supabase: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 10l2 2 8-8M5 10l-2 2 10 10M5 10h14v10H5z" /></svg>,
    mongodb: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" /><circle cx="12" cy="12" r="2" /></svg>,
  };

  return (
    <div className="text-gray-700 transition-colors w-7 h-7 dark:text-gray-300">
      {icons[icon] || icons.mongoose}
    </div>
  );
};

export default function DatabaseSkillsTable() {
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
            Database Skills
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl dark:text-slate-400">
            Expertise in database management, optimization, ORMs, search engines & cloud databases
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
              {databaseSkills.map((skill, index) => (
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
                          ? 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' 
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