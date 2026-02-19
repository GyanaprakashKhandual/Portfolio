'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="p-6 transition duration-200 border rounded-lg bg-card border-primary hover:border-strong hover:shadow-md">
      <h2 className="mb-2 text-2xl font-bold text-primary">
        {project.title}
      </h2>
      <p className="mb-2 text-xs text-muted">
        {project.category}
      </p>
      <p className="mb-4 text-secondary">{project.shortDesc}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-medium rounded text-primary bg-badge"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-2 py-1 text-xs font-medium rounded text-primary bg-badge">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <a
          href={`/projects/${project.slug}`}
          className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-sm font-semibold btn-primary"
        >
          <ExternalLink className="w-4 h-4" />
          View
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-sm font-semibold btn-primary"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
      </div>
    </div>
  );
}