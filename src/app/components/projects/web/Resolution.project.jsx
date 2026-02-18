import { ExternalLink, Github, CheckCircle } from "lucide-react";

export const projectMeta = {
  slug: "resolution-pro",
  title: "Resolution Pro",
  shortDesc: "AI-powered meeting document sharing & management platform",
  description:
    "A full-stack web application for seamless meeting document sharing, real-time collaboration, and intelligent meeting management — built to replace scattered emails and disorganized drives.",
  category: "Productivity",
  viewAppUrl: "https://resolutionpro.vercel.app",
  githubUrl: "https://github.com/GyanaprakashKhandual/Resolution-web",
  codeUrl: "https://github.com/GyanaprakashKhandual/Resolution-app",
  techStack: [
    "React",
    "Node.js",
    "MongoDB",
    "Anthropic API",
    "WebSocket",
    "Express",
    "AWS S3",
    "JWT",
  ],
};

export default function ResolutionProject() {
  const highlights = [
    "AI-Powered Meeting Summaries & Action Items",
    "Real-time Document Sharing & Collaboration",
    "Role-Based Access Control (Host, Member, Viewer)",
    "Multi-format Document Support (PDF, DOCX, PPT)",
    "Live Meeting Rooms with Participant Management",
    "Automated Agenda Builder & Timer",
    "Version History & Document Diff Viewer",
    "Integrated Calendar & Scheduling System",
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
            Resolution Pro is a comprehensive meeting document sharing and
            management platform integrated with Anthropic APIs. It provides
            enterprise-grade features for organizing, distributing, and
            collaborating on meeting materials in real time — making every
            meeting more productive and every decision more traceable.
          </p>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Key Features:
            </h4>
            <ul className="ml-4 space-y-2">
              <li>
                • Access Management - Role-based permissions for hosts, members,
                and view-only guests
              </li>
              <li>
                • Meeting Rooms - Create and host virtual meeting spaces with
                participant controls
              </li>
              <li>
                • Document Sharing - Instantly share PDFs, Word docs, and
                presentations in-meeting
              </li>
              <li>
                • Agenda Builder - Drag-and-drop agenda creation with built-in
                timers per topic
              </li>
              <li>
                • Multiple View Options - Grid, List, Timeline, and Kanban views
                for document browsing
              </li>
              <li>
                • Auto-save & Version History - Real-time sync with full
                revision trail
              </li>
              <li>
                • Full CRUD Operations - Complete document, meeting, and
                participant management
              </li>
              <li>
                • Calendar Integration - Built-in scheduling with invite and
                RSVP support
              </li>
              <li>• Theme Support - Dark, Light, and System theme options</li>
              <li>
                • Inbuilt Messaging - Real-time chat and annotation during
                meetings
              </li>
              <li>
                • AI-Powered Summaries - Anthropic API generates meeting
                summaries and action item lists automatically
              </li>
              <li>
                • Smart Resolution Tracking - Automatically extracts decisions
                and assigns follow-ups
              </li>
              <li>
                • Dashboard & Analytics - Meeting frequency, document usage, and
                team engagement insights
              </li>
              <li>
                • Import/Export - One-click export of meeting minutes, agendas,
                and action items
              </li>
              <li>
                • Sharing & Ticketing - Share meeting recaps externally with
                secure expiring links
              </li>
            </ul>
          </div>

          <p className="mt-4 font-semibold text-black dark:text-white">
            The standout feature is the AI-powered resolution engine that uses
            Anthropic APIs to automatically extract decisions, action items, and
            owners from meeting discussions — turning messy conversations into
            structured, actionable outcomes and making it infinitely more
            powerful than traditional tools like Confluence and Notion.
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
