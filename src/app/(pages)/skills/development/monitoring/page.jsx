'use client';

import { motion } from 'framer-motion';

const monitoringSkills = [
  { 
    name: 'Grafana', 
    icon: 'grafana', 
    exp: 4, 
    projects: 18,
    github: '#',
    project: '#'
  },
  { 
    name: 'Prometheus', 
    icon: 'prometheus', 
    exp: 4, 
    projects: 16,
    github: '#',
    project: '#'
  },
  { 
    name: 'Sentry', 
    icon: 'sentry', 
    exp: 5, 
    projects: 30,
    github: 'https://github.com/yourusername/sentry-integrations',
    project: 'https://your-demo.com/sentry-dashboard'
  },
  { 
    name: 'ELK Stack', 
    icon: 'elk', 
    exp: 3, 
    projects: 12,
    github: '#',
    project: '#'
  },
  { 
    name: 'UptimeRobot', 
    icon: 'uptimerobot', 
    exp: 4, 
    projects: 25,
    github: '#',
    project: '#'
  },
  { 
    name: 'Google Analytics', 
    icon: 'analytics', 
    exp: 5, 
    projects: 40,
    github: '#',
    project: 'https://analytics.google.com' // or your GA dashboard link if public
  },
  { 
    name: 'Cloudflare', 
    icon: 'cloudflare', 
    exp: 4, 
    projects: 22,
    github: '#',
    project: '#'
  }
];

// Skill Icon Component (size consistent with previous tables)
const SkillIcon = ({ icon }) => {
  const icons = {
    grafana: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 6v12M6 12h12" /><path d="M8 8l8 8M16 8l-8 8" /><circle cx="12" cy="12" r="3" /></svg>,
    prometheus: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l-2 4h4l-2-4z" /><circle cx="12" cy="8" r="2" /><path d="M12 10v4" /><path d="M12 14c-3 0-5 2-5 4h10c0-2-2-4-5-4z" /><path d="M7 18v2h10v-2" /><circle cx="9" cy="8" r="1" fill="currentColor" /><circle cx="15" cy="8" r="1" fill="currentColor" /></svg>,
    sentry: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6l-6 6h4l2 6 6-6h-4l-2-6z" /></svg>,
    elk: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="4" height="10" /><rect x="10" y="6" width="4" height="14" /><rect x="17" y="8" width="4" height="12" /><path d="M3 10l4-4 3 3 4-4 3 3 4-4" /></svg>,
    uptimerobot: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12l2 2 4-4" /><path d="M12 6v2M12 16v2M6 12h2M16 12h2" /><circle cx="12" cy="12" r="5" /></svg>,
    analytics: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 16l4-4 3 3 5-7" /><circle cx="7" cy="16" r="1.5" fill="currentColor" /><circle cx="11" cy="12" r="1.5" fill="currentColor" /><circle cx="14" cy="15" r="1.5" fill="currentColor" /><circle cx="19" cy="8" r="1.5" fill="currentColor" /></svg>,
    cloudflare: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15l9-9 9 9" /><path d="M6 18l6-6 6 6" /><path d="M9 21l3-3 3 3" /><circle cx="12" cy="6" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="18" r="1" fill="currentColor" /></svg>,
  };

  return (
    <div className="text-gray-700 transition-colors w-7 h-7 dark:text-gray-300">
      {icons[icon] || icons.grafana}
    </div>
  );
};

export default function MonitoringSkillsTable() {
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
            Monitoring & Analytics
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl dark:text-slate-400">
            Performance monitoring, error tracking, alerting, observability & usage analytics
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
                  Tool
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
              {monitoringSkills.map((skill, index) => (
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