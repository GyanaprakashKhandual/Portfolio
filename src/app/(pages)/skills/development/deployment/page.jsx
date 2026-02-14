'use client';

import { motion } from 'framer-motion';

const deploymentSkills = [
  { 
    name: 'AWS', 
    icon: 'aws', 
    exp: 4, 
    projects: 18,
    github: 'https://github.com/yourusername/aws-projects',
    project: 'https://your-demo.com/aws-deployment'
  },
  { 
    name: 'Render', 
    icon: 'render', 
    exp: 3, 
    projects: 12,
    github: '#',
    project: '#'
  },
  { 
    name: 'Netlify', 
    icon: 'netlify', 
    exp: 4, 
    projects: 25,
    github: '#',
    project: 'https://your-netlify-site.netlify.app'
  },
  { 
    name: 'DigitalOcean', 
    icon: 'digitalocean', 
    exp: 3, 
    projects: 10,
    github: '#',
    project: '#'
  },
  { 
    name: 'GoDaddy', 
    icon: 'godaddy', 
    exp: 2, 
    projects: 8,
    github: '#',
    project: '#'
  },
  { 
    name: 'Hostinger', 
    icon: 'hostinger', 
    exp: 2, 
    projects: 6,
    github: '#',
    project: '#'
  },
  { 
    name: 'GitHub Pages', 
    icon: 'githubpages', 
    exp: 5, 
    projects: 30,
    github: 'https://github.com/yourusername/your-repo',
    project: 'https://yourusername.github.io'
  },
  { 
    name: 'Docker', 
    icon: 'docker', 
    exp: 4, 
    projects: 22,
    github: '#',
    project: '#'
  },
  { 
    name: 'Kubernetes', 
    icon: 'kubernetes', 
    exp: 3, 
    projects: 9,
    github: '#',
    project: '#'
  },
  { 
    name: 'Linux', 
    icon: 'linux', 
    exp: 5, 
    projects: 35,
    github: '#',
    project: '#'
  },
  { 
    name: 'Nginx', 
    icon: 'nginx', 
    exp: 4, 
    projects: 20,
    github: '#',
    project: '#'
  },
  { 
    name: 'Apache', 
    icon: 'apache', 
    exp: 3, 
    projects: 15,
    github: '#',
    project: '#'
  },
  { 
    name: 'GitHub Actions', 
    icon: 'githubactions', 
    exp: 4, 
    projects: 28,
    github: 'https://github.com/yourusername/.github/workflows',
    project: '#'
  },
  { 
    name: 'GitLab CI', 
    icon: 'gitlabci', 
    exp: 3, 
    projects: 12,
    github: '#',
    project: '#'
  },
  { 
    name: 'Jenkins', 
    icon: 'jenkins', 
    exp: 3, 
    projects: 11,
    github: '#',
    project: '#'
  },
  { 
    name: 'Subdomains', 
    icon: 'subdomain', 
    exp: 4, 
    projects: 24,
    github: '#',
    project: '#'
  },
  { 
    name: 'Cloudflare', 
    icon: 'cloudflare', 
    exp: 4, 
    projects: 19,
    github: '#',
    project: '#'
  }
];

// Skill Icon Component
const SkillIcon = ({ icon }) => {
  const icons = {
    aws: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l4-4 4 4 4-4 4 4 2-2" /><path d="M3 16l4-4 4 4 4-4 4 4 2-2" /><rect x="2" y="6" width="20" height="12" rx="2" /></svg>,
    render: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 6v12M6 12h12" /><path d="M9 9l6 6M15 9l-6 6" /></svg>,
    netlify: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" /><path d="M12 12l6-3M12 12l-6-3M12 12v7" /></svg>,
    digitalocean: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 15v-3h3M12 12H9M12 12V9" /></svg>,
    godaddy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M8 9h8M8 13h5" /><circle cx="18" cy="9" r="1" /></svg>,
    hostinger: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8M12 8v8" /></svg>,
    githubpages: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
    docker: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="4" height="4" /><rect x="8" y="8" width="4" height="4" /><rect x="13" y="8" width="4" height="4" /><rect x="3" y="13" width="4" height="4" /><rect x="8" y="13" width="4" height="4" /><path d="M18 8h3v9H3V8h3" /></svg>,
    kubernetes: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 6l3 3-3 3-3-3 3-3zM12 12l3 3-3 3-3-3 3-3z" /></svg>,
    linux: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="2" /><path d="M10 10c-1 2-2 4-2 6h8c0-2-1-4-2-6" /><path d="M8 16v4M16 16v4M10 20h4" /><circle cx="9" cy="8" r="0.5" fill="currentColor" /><circle cx="15" cy="8" r="0.5" fill="currentColor" /></svg>,
    nginx: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l8 16 8-16" /><path d="M4 20h16" /><path d="M8 12h8" /></svg>,
    apache: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l9-9 9 9" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>,
    githubactions: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12l2 2 4-4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>,
    gitlabci: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 9H9l3-9z" /><path d="M3 11l9 11 9-11H3z" /><path d="M9 11l3 11 3-11" /></svg>,
    jenkins: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="9" r="3" /><path d="M12 12v8M8 16l4 4 4-4" /><rect x="6" y="4" width="12" height="4" /></svg>,
    subdomain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z" /><path d="M2 7l10 5M22 7l-10 5M12 12v10" /><circle cx="12" cy="12" r="2" /></svg>,
    cloudflare: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15l9-9 9 9" /><path d="M6 18l6-6 6 6" /><path d="M9 21l3-3 3 3" /></svg>,
  };

  return (
    <div className="text-gray-700 transition-colors w-7 h-7 dark:text-gray-300">
      {icons[icon] || icons.aws}
    </div>
  );
};

export default function DeploymentSkillsTable() {
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
            Deployment Tech Stack
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl dark:text-slate-400">
            Expertise in cloud platforms, containerization, CI/CD pipelines and infrastructure management
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
              {deploymentSkills.map((skill, index) => (
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