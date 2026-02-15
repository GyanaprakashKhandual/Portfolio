'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ doc }) {
  return (
    <div className="p-6 transition duration-200 bg-white border border-gray-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700">
      <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
        {doc.title}
      </h2>
      <p className="mb-2 text-xs text-gray-500 dark:text-slate-400">
        {doc.category}
      </p>
      <p className="mb-4 text-gray-700 dark:text-slate-300">{doc.shortDesc}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {doc.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded dark:bg-slate-900 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
        {doc.techStack.length > 3 && (
          <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded dark:bg-slate-900 dark:text-slate-300">
            +{doc.techStack.length - 3}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <a
          href={`/docs/${doc.slug}`}
          className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-sm font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <ExternalLink className="w-4 h-4" />
          View
        </a>
        <a
          href={doc.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-sm font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
      </div>
    </div>
  );
}