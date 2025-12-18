import BlogPage from "@/app/pages/Blog.page";

export const metadata = {
  title: "Gyan | Techs Blogs",
  description: "This page is all about the blog posts",
};

function page() {
  return (
    <div className="mt-15">
      <BlogPage />
    </div>
  );
}

export default page;
