"use client";

import { motion } from "framer-motion";

const toolsSkills = [
  {
    name: "Visual Studio Code",
    icon: "vscode",
    exp: 5,
    projects: 100,
    github: "#",
    project: "#",
  },
  {
    name: "Git",
    icon: "git",
    exp: 5,
    projects: 100,
    github: "#",
    project: "#",
  },
  {
    name: "GitHub",
    icon: "github",
    exp: 5,
    projects: 85,
    github: "#",
    project: "#",
  },
  {
    name: "GitLab",
    icon: "gitlab",
    exp: 4,
    projects: 30,
    github: "#",
    project: "#",
  },
  {
    name: "Docker",
    icon: "docker",
    exp: 4,
    projects: 45,
    github: "#",
    project: "#",
  },
  {
    name: "Docker Compose",
    icon: "dockercompose",
    exp: 4,
    projects: 40,
    github: "#",
    project: "#",
  },
  {
    name: "Kubernetes",
    icon: "kubernetes",
    exp: 3,
    projects: 15,
    github: "#",
    project: "#",
  },
  {
    name: "Helm",
    icon: "helm",
    exp: 3,
    projects: 12,
    github: "#",
    project: "#",
  },
  { name: "AWS", icon: "aws", exp: 4, projects: 35, github: "#", project: "#" },
  {
    name: "Google Cloud Platform",
    icon: "gcp",
    exp: 3,
    projects: 20,
    github: "#",
    project: "#",
  },
  {
    name: "Microsoft Azure",
    icon: "azure",
    exp: 3,
    projects: 18,
    github: "#",
    project: "#",
  },
  {
    name: "Cloudflare",
    icon: "cloudflare",
    exp: 4,
    projects: 25,
    github: "#",
    project: "#",
  },
  {
    name: "Nginx",
    icon: "nginx",
    exp: 4,
    projects: 30,
    github: "#",
    project: "#",
  },
  {
    name: "Postman",
    icon: "postman",
    exp: 5,
    projects: 60,
    github: "#",
    project: "#",
  },
  {
    name: "Swagger",
    icon: "swagger",
    exp: 4,
    projects: 35,
    github: "#",
    project: "#",
  },
  {
    name: "OpenAPI",
    icon: "openapi",
    exp: 4,
    projects: 32,
    github: "#",
    project: "#",
  },
  {
    name: "GitHub Actions",
    icon: "githubactions",
    exp: 5,
    projects: 50,
    github: "#",
    project: "#",
  },
  {
    name: "GitLab CI",
    icon: "gitlabci",
    exp: 4,
    projects: 28,
    github: "#",
    project: "#",
  },
  {
    name: "Jenkins",
    icon: "jenkins",
    exp: 3,
    projects: 15,
    github: "#",
    project: "#",
  },
  {
    name: "MongoDB Atlas",
    icon: "mongodbatlas",
    exp: 4,
    projects: 38,
    github: "#",
    project: "#",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    exp: 4,
    projects: 42,
    github: "#",
    project: "#",
  },
  {
    name: "Redis",
    icon: "redis",
    exp: 4,
    projects: 35,
    github: "#",
    project: "#",
  },
  {
    name: "Amazon S3",
    icon: "s3",
    exp: 4,
    projects: 40,
    github: "#",
    project: "#",
  },
  {
    name: "Grafana",
    icon: "grafana",
    exp: 4,
    projects: 22,
    github: "#",
    project: "#",
  },
  {
    name: "Prometheus",
    icon: "prometheus",
    exp: 4,
    projects: 20,
    github: "#",
    project: "#",
  },
  {
    name: "Sentry",
    icon: "sentry",
    exp: 5,
    projects: 45,
    github: "#",
    project: "#",
  },
  {
    name: "ELK Stack",
    icon: "elk",
    exp: 3,
    projects: 16,
    github: "#",
    project: "#",
  },
  {
    name: "UptimeRobot",
    icon: "uptimerobot",
    exp: 4,
    projects: 30,
    github: "#",
    project: "#",
  },
  {
    name: "Google Analytics",
    icon: "analytics",
    exp: 5,
    projects: 55,
    github: "#",
    project: "#",
  },
  { name: "k6", icon: "k6", exp: 3, projects: 18, github: "#", project: "#" },
  {
    name: "OWASP ZAP",
    icon: "zap",
    exp: 3,
    projects: 14,
    github: "#",
    project: "#",
  },
  {
    name: "Vault",
    icon: "vault",
    exp: 3,
    projects: 12,
    github: "#",
    project: "#",
  },
  {
    name: "AWS Secrets Manager",
    icon: "secretsmanager",
    exp: 4,
    projects: 25,
    github: "#",
    project: "#",
  },
  {
    name: "Slack",
    icon: "slack",
    exp: 5,
    projects: 70,
    github: "#",
    project: "#",
  },
  {
    name: "Jira Workspace",
    icon: "jira",
    exp: 5,
    projects: 50,
    github: "#",
    project: "#",
  },
  {
    name: "Zoho Workspace",
    icon: "zoho",
    exp: 3,
    projects: 15,
    github: "#",
    project: "#",
  },
  {
    name: "Microsoft Workspace",
    icon: "microsoft",
    exp: 4,
    projects: 35,
    github: "#",
    project: "#",
  },
  {
    name: "Google Workspace",
    icon: "googleworkspace",
    exp: 5,
    projects: 60,
    github: "#",
    project: "#",
  },
  {
    name: "Confluence",
    icon: "confluence",
    exp: 4,
    projects: 28,
    github: "#",
    project: "#",
  },
  {
    name: "Notion",
    icon: "notion",
    exp: 5,
    projects: 40,
    github: "#",
    project: "#",
  },
  {
    name: "PagerDuty",
    icon: "pagerduty",
    exp: 3,
    projects: 12,
    github: "#",
    project: "#",
  },
  {
    name: "Opsgenie",
    icon: "opsgenie",
    exp: 3,
    projects: 10,
    github: "#",
    project: "#",
  },
  {
    name: "Figma",
    icon: "figma",
    exp: 5,
    projects: 65,
    github: "#",
    project: "#",
  },
];

// Skill Icon Component (size consistent with other tables)
const SkillIcon = ({ icon }) => {
  const icons = {
    vscode: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 2L8 22M4 7l4 5-4 5M20 7l-4 5 4 5" />
      </svg>
    ),
    git: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <path d="M9 6h6M6 9v6M12 9v3M15 9l-3 3" />
      </svg>
    ),
    github: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    gitlab: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3 9H9l3-9z" />
        <path d="M3 11l9 11 9-11H3z" />
        <path d="M9 11l3 11 3-11" />
      </svg>
    ),
    docker: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="8" width="4" height="4" />
        <rect x="8" y="8" width="4" height="4" />
        <rect x="13" y="8" width="4" height="4" />
        <rect x="3" y="13" width="4" height="4" />
        <rect x="8" y="13" width="4" height="4" />
        <path d="M18 8h3v9H3V8h3" />
      </svg>
    ),
    // ... all other icons remain the same as in your original code
    figma: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M6 6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V6z" />
      </svg>
    ),
  };

  return (
    <div className="text-gray-700 transition-colors w-7 h-7 dark:text-gray-300">
      {icons[icon] || icons.vscode}
    </div>
  );
};

export default function ToolsSkillsTable() {
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
            Development Tools & Platforms
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl dark:text-slate-400">
            IDEs, version control, cloud platforms, CI/CD, monitoring,
            collaboration & productivity tools
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
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-semibold text-left text-gray-700 dark:text-slate-300"
                >
                  Tool / Platform
                </th>
                <th
                  scope="col"
                  className="hidden px-4 py-4 text-sm font-semibold text-left text-gray-700 dark:text-slate-300 md:table-cell"
                >
                  Experience
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-semibold text-center text-gray-700 dark:text-slate-300"
                >
                  Years
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-semibold text-center text-gray-700 dark:text-slate-300"
                >
                  Projects
                </th>
                <th
                  scope="col"
                  className="hidden px-4 py-4 text-sm font-semibold text-center text-gray-700 dark:text-slate-300 sm:table-cell"
                >
                  GitHub
                </th>
                <th
                  scope="col"
                  className="hidden px-4 py-4 text-sm font-semibold text-center text-gray-700 dark:text-slate-300 sm:table-cell"
                >
                  Main Project
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-slate-800 dark:bg-slate-950">
              {toolsSkills.map((skill, index) => (
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
                          transition={{
                            duration: 1.2,
                            delay: 0.4 + index * 0.06,
                          }}
                          className="h-full bg-gradient-to-r from-gray-800 to-black dark:from-gray-700 dark:to-gray-900"
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-sm font-medium text-center whitespace-nowrap">
                    <span className="text-gray-900 dark:text-white">
                      {skill.exp} yrs
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm text-center whitespace-nowrap">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {skill.projects}
                    </span>
                    <span className="ml-1 text-gray-500 dark:text-slate-400">
                      +
                    </span>
                  </td>

                  <td className="hidden px-4 py-4 text-center whitespace-nowrap sm:table-cell">
                    <motion.a
                      href={skill.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      className={`inline-flex items-center px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        skill.github !== "#"
                          ? "text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
                          : "text-gray-400 bg-gray-200 cursor-not-allowed dark:bg-slate-700 dark:text-slate-500"
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
                        skill.project !== "#"
                          ? "text-white bg-blue-600 hover:bg-blue-700"
                          : "text-gray-400 bg-gray-200 cursor-not-allowed dark:bg-slate-700 dark:text-slate-500"
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
