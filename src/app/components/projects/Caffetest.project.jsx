import { ExternalLink, Github, CheckCircle } from 'lucide-react';

export const projectMeta = {
  slug: 'caffetest',
  title: 'Caffetest',
  shortDesc: 'AI-powered bug tracking & test management platform',
  description:
    'Bug tracking application integrated with Anthropic OpenAI for intelligent test case generation and bug management.',
  category: 'Development',
  viewAppUrl: 'https://caffetest.vercel.app',
  githubUrl: 'https://github.com/GyanaprakashKhandual/Caffetest-web',
  codeUrl: 'https://github.com/GyanaprakashKhandual/Caffetest-app',
  techStack: [
    'React',
    'Node.js',
    'MongoDB',
    'OpenAI API',
    'WebSocket',
    'Selenium',
  ],
};

export default function CaffetestProject() {
  const highlights = [
    'AI Test Case Generation from Selenium Scripts',
    'Role-Based Access Management',
    'Multi-view Dashboard (Kanban, Split, Card, List)',
    'Real-time Auto-save with Keystroke Detection',
    'Built-in Messaging & Collaboration',
    'Theme Customization (Dark/Light/System)',
    'VS Code Extension Integration',
    'Import/Export & Sharing Features',
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
            CafeTest is a comprehensive bug tracking application integrated with Anthropic OpenAI APIs. 
            It provides enterprise-grade features for managing testing workflows and bug tracking.
          </p>
          
          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">Key Features:</h4>
            <ul className="ml-4 space-y-2">
              <li>• Access Management - Role-based access control for team members</li>
              <li>• Project Management - Create and manage multiple projects with ease</li>
              <li>• Folder Management - Organize test cases in hierarchical folder structures</li>
              <li>• Sprint & Phase Management - Plan and track development cycles</li>
              <li>• Multiple View Options - Kanban, Split, Card, and List views for flexible workflow</li>
              <li>• Auto-save & Keystroke Features - Real-time synchronization of changes</li>
              <li>• Full CRUD Operations - Complete test case, bug, and test report management</li>
              <li>• Document & Excel Integration - Built-in Confluence-like documentation features</li>
              <li>• Theme Support - Dark, Light, and System theme options</li>
              <li>• Inbuilt Messaging - Real-time team communication</li>
              <li>• AI-Powered Test Generation - VS Code extension that auto-generates test cases from Selenium scripts</li>
              <li>• Smart Bug Detection - Automatically categorizes failed tests as bugs</li>
              <li>• Dashboard & Reporting - Comprehensive analytics and insights</li>
              <li>• Import/Export - Seamless data migration and backup</li>
              <li>• Sharing & Ticketing - Collaborative features for team workflows</li>
            </ul>
          </div>

          <p className="mt-4 font-semibold text-black dark:text-white">
            The standout feature is the VS Code integration that uses Anthropic APIs to automatically generate 
            test cases from your Selenium automation scripts and categorize failures as bugs, making it infinitely 
            more powerful than traditional tools like Jira and Zephyr.
          </p>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Highlights */}
      <section>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Key Features
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-3">
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
          {projectMeta.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm font-semibold bg-black dark:bg-white text-white dark:text-black rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Links */}
      <section className="flex gap-3">
        <a
          href={projectMeta.viewAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <ExternalLink className="w-4 h-4" />
          View App
        </a>
        <a
          href={projectMeta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <Github className="w-4 h-4" />
          Frontend
        </a>
        <a
          href={projectMeta.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <Github className="w-4 h-4" />
          Backend
        </a>
      </section>
    </div>
  );
}