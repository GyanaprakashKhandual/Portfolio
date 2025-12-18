import ProjectsPage from "@/app/pages/Project.page";

export const metadata = {
  title: "Gyan | Project Works",
  description: "This page is all about my professional project works",
};

function page() {
  return (
    <div className="mt-15 max-h-15">
      <ProjectsPage />
    </div>
  );
}

export default page;
