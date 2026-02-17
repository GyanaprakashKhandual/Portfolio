import BlogSidebar from "../../components/assets/Blog.sidebar";
import { getAllPostSlugs, getPostBySlug } from "../../script/Get.Blog.post.lib";

export default function BlogLayout({ children }) {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const post = getPostBySlug(slug);
    return {
      slug,
      meta: post.meta,
    };
  });

  return (
    <div className="flex min-h-screen mt-20 bg-white border-t border-gray-200 dark:bg-slate-950">
      <BlogSidebar posts={posts} />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
