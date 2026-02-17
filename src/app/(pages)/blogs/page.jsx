import BlogCard from "../../components/modules/Blog.card";
import { getBlogPosts } from "../../script/Get.Blog.post.lib";

export default function BlogPage() {
  const posts = getBlogPosts();
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-[calc(100vh - 80px)] max-h-[calc(100vh - 80px)] p-1 bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
