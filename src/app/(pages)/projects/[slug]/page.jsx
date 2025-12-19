// app/(pages)/projects/[slug]/page.jsx
import { getProjectBySlug, getAllProjectSlugs } from '../../../lib/Get.Project.post.lib';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project || !project.meta) {
      return {
        title: 'Project Not Found',
        description: 'This project does not exist',
      };
    }

    return {
      title: project.meta.title || 'Project',
      description: project.meta.shortDesc || '',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Project',
      description: '',
    };
  }
}

export default async function ProjectPage({ params }) {
  try {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project || !project.meta) {
      return (
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-red-600">Project not found</h1>
          <p className="mt-2 text-gray-600 dark:text-slate-400">
            The project you're looking for doesn't exist.
          </p>
          <a
            href="/projects"
            className="inline-block mt-4 text-gray-900 cursor-pointer dark:text-gray-100"
          >
            ← Back to all projects
          </a>
        </div>
      );
    }

    const ProjectComponent = project.component;

    return (
      <div className="max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 mb-8 text-gray-900 cursor-pointer dark:text-gray-100"
        >
          ← Back to all projects
        </a>
        
        <ProjectComponent />
      </div>
    );
  } catch (error) {
    console.error('Error rendering project:', error);
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Error loading project</h1>
        <p className="mt-2 text-gray-600 dark:text-slate-400">
          An error occurred while loading the project.
        </p>
        <a
          href="/projects"
          className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to all projects
        </a>
      </div>
    );
  }
}