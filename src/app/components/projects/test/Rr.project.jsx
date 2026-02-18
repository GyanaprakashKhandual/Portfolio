import { ExternalLink, Github, CheckCircle } from "lucide-react";

export const projectMeta = {
  slug: "rr-crop",
  title: "Rr Crop",
  shortDesc:
    "Comprehensive QA testing & automation for task management with advanced project allocation",
  description:
    "End-to-end testing solution for RrCrop - a task management application with integrated access management, project allocation, workman assignment, and staff management system.",
  category: "Testing",
  githubUrl:
    "https://github.com/GyanaprakashKhandual/RR-Crop-Project-Gantt-Chart.git",
  techStack: [
    "Cypress",
    "Page Object Model",
    "Cucumber",
    "BDD",
    "JMeter",
    "Postman",
    "JSON",
    "HTML/CSS",
    "JavaScript",
    "Google Sheets",
    "Zoho Workspace",
  ],
};

export default function RrCropProject() {
  const testingTypes = [
    "Functional Manual Testing",
    "Functional Automation Testing",
    "API Testing with Postman",
    "Performance Testing with JMeter",
    "End-to-End Testing",
    "Multi-theme Testing",
    "Custom API Integration Testing",
    "Access Management Testing",
  ];

  const highlights = [
    "Cypress Automation Framework",
    "Page Object Model Architecture",
    "BDD with Cucumber",
    "JMeter Performance Testing",
    "Postman API Testing with Assertions",
    "Custom HTML/CSS/JS Reports",
    "Multi-theme Compatibility",
    "Complex Workflow Testing",
  ];

  const coreFeatures = [
    "Task Management System",
    "Project Allocation",
    "Workman Assignment",
    "Staff Management",
    "Access Control & Permissions",
    "Multi-theme Support",
    "Custom API Integration",
    "Gantt Chart Visualization",
    "Resource Planning",
    "Team Collaboration",
    "Progress Tracking",
    "Reporting & Analytics",
  ];

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <section>
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
          {projectMeta.title}
        </h2>
        <p className="leading-7 text-gray-700 dark:text-slate-300">
          {projectMeta.description}
        </p>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Full Description */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Overview
        </h3>
        <div className="space-y-4 leading-7 text-gray-700 dark:text-slate-300">
          <p>
            RrCrop is an advanced task management application designed for
            complex project allocation and resource management. I performed
            comprehensive QA testing across all layers of the application,
            ensuring reliable functionality for task scheduling, team
            collaboration, and performance under heavy loads.
          </p>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Testing Coverage:
            </h4>
            <ul className="ml-4 space-y-2">
              {testingTypes.map((test, i) => (
                <li key={i}>• {test}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Core Features Tested:
            </h4>
            <ul className="ml-4 space-y-2">
              {coreFeatures.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Testing Technologies & Frameworks:
            </h4>
            <ul className="ml-4 space-y-2">
              <li>• Cypress - Modern JavaScript-based automation framework</li>
              <li>
                • Page Object Model - Maintainable automation architecture
              </li>
              <li>• Cucumber & BDD - Behavior-driven testing approach</li>
              <li>• JMeter - Advanced performance and load testing</li>
              <li>• Postman - API testing with comprehensive assertions</li>
              <li>
                • Custom HTML/CSS/JavaScript Reports - Interactive dashboards
              </li>
              <li>• JSON - Test data and configuration management</li>
              <li>• Google Sheets - Centralized test data repository</li>
              <li>• Zoho Workspace - Integrated testing environment</li>
            </ul>
          </div>

          <p className="mt-4 font-semibold text-black dark:text-white">
            The testing strategy encompasses end-to-end functional testing
            across multiple themes, rigorous API validation using Postman with
            detailed assertions, and comprehensive performance testing with
            JMeter to ensure optimal response times under various load
            conditions. The Cypress automation framework, combined with Page
            Object Model architecture, provides robust and maintainable test
            suites that validate complex task allocation workflows and team
            resource management scenarios.
          </p>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Highlights */}
      <section>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Key Testing Features
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-slate-300">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Tech Stack */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {projectMeta.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-semibold bg-black dark:bg-white text-white dark:text-black rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Testing Domains */}
      <section>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Testing Domains
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              title: "Task Management",
              desc: "Task creation, assignment, tracking, and completion workflows",
            },
            {
              title: "Project Allocation",
              desc: "Resource distribution, project setup, team assignment",
            },
            {
              title: "Workman Management",
              desc: "Workman assignment, skill mapping, availability tracking",
            },
            {
              title: "Staff Management",
              desc: "Staff roles, permissions, performance metrics",
            },
            {
              title: "Access Control",
              desc: "Role-based access, permissions hierarchy, security policies",
            },
            {
              title: "API Integration",
              desc: "Custom API endpoints, data synchronization, third-party integration",
            },
            {
              title: "Multi-theme Testing",
              desc: "Theme switching, UI consistency, responsive design",
            },
            {
              title: "Performance & Load",
              desc: "JMeter load testing, response times, concurrent users",
            },
          ].map((domain) => (
            <div
              key={domain.title}
              className="p-4 bg-white border border-gray-200 rounded-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                {domain.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                {domain.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Key Capabilities */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Testing Capabilities
        </h3>
        <div className="space-y-3">
          {[
            "End-to-end functional testing with Cypress automation",
            "Comprehensive API testing and validation with Postman assertions",
            "Performance benchmarking and load testing with JMeter",
            "Multi-theme compatibility verification across the application",
            "Complex workflow testing including Gantt chart functionality",
            "Custom API integration testing and validation",
            "Interactive HTML/CSS/JavaScript custom reports",
            "Data-driven testing with Google Sheets integration",
          ].map((capability, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-900"
            >
              <CheckCircle className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-slate-300">
                {capability}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Links */}
      <section className="flex flex-wrap gap-3">
        <a
          href={projectMeta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <Github className="w-4 h-4" />
          Test Repository
        </a>
        <a
          href={projectMeta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <ExternalLink className="w-4 h-4" />
          Automation Tests
        </a>
      </section>
    </div>
  );
}
