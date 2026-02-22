import ProjectCard from "../../components/modules/Project.card";
import { getProjects } from "../../script/Get.Project.post.lib";

export const metadata = {
  title: "Gyan | Projects",
  description: "Explore my amazing projects and portfolio",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-primary">
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg text-gray-600 dark:text-slate-400">
            No projects available yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}