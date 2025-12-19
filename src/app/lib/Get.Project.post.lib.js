import dynamic from 'next/dynamic';

// Dynamically import projects
const CaffetestProject = dynamic(() => import('../components/projects/Caffetest.project').then(mod => mod.default));

// Import metadata
import { projectMeta as caffetestMeta } from '../components/projects/Caffetest.project';

// Map of all projects
const projectsMap = {
  'caffetest': { meta: caffetestMeta, component: CaffetestProject },
};

export function getProjects() {
  return Object.values(projectsMap).map(({ meta }) => meta);
}

export function getProjectBySlug(slug) {
  return projectsMap[slug] || null;
}

export function getAllProjectSlugs() {
  return Object.keys(projectsMap);
}

export function getProjectsByCategory(category) {
  return Object.values(projectsMap)
    .filter(({ meta }) => meta.category === category)
    .map(({ meta }) => meta);
}