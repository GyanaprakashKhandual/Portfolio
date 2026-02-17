import dynamic from "next/dynamic";


const CaffetestProject = dynamic(() =>
  import("../components/projects/web/Caffetest.project").then((mod) => mod.default)
);

const PISLProject = dynamic(() =>
  import("../components/projects/test/PISL.project").then((mod) => mod.default)
);

const ResolProject = dynamic(() =>
  import("../components/projects/test/Resol.project").then((mod) => mod.default)
);

const MjProject = dynamic(() =>
  import("../components/projects/test/Mj.project").then((mod) => mod.default)
);

const RrProject = dynamic(() =>
  import("../components/projects/test/Rr.project").then((mod) => mod.default)
);


import { projectMeta as caffetestMeta } from "../components/projects/web/Caffetest.project";
import { projectMeta as pislMeta } from "../components/projects/test/PISL.project";
import { projectMeta as resolMeta } from "../components/projects/test/Resol.project";
import { projectMeta as mjMeta } from "../components/projects/test/Mj.project";
import { projectMeta as rrMeta } from "../components/projects/test/Rr.project";

// Map of all projects
const projectsMap = {
  caffetest: { meta: caffetestMeta, component: CaffetestProject },
  pisl: { meta: pislMeta, component: PISLProject },
  resol: { meta: resolMeta, component: ResolProject },
  megajwelers: { meta: mjMeta, component: MjProject },
  rrcrop: { meta: rrMeta, component: RrProject }
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
