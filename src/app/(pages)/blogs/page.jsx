import BlogCard from "../../components/assets/Blog.card";
import { getBlogPosts } from "../../lib/Get.Blog.post.lib";

export default function BlogPage() {
  const posts = getBlogPosts();
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
