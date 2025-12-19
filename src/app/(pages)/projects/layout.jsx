import ProjectSidebar from "@/app/components/assets/Project.sidebar";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "../../lib/Get.Project.post.lib";

export default function ProjectsLayout({ children }) {
  const slugs = getAllProjectSlugs();
  const projects = slugs.map((slug) => {
    const project = getProjectBySlug(slug);
    return {
      slug,
      title: project.meta.title,
      shortDesc: project.meta.shortDesc,
      category: project.meta.category,
      techStack: project.meta.techStack,
    };
  });

  return (
    <div className="flex min-h-screen mt-20 bg-white border-t border-gray-200 dark:bg-slate-950">
      <ProjectSidebar projects={projects} />
      <main className="flex-1 w-full min-h-[calc(100vh-80px)]">{children}</main>
    </div>
  );
}
