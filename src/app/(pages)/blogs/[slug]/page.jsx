// app/(pages)/blogs/[slug]/page.jsx
import { getPostBySlug, getAllPostSlugs } from "../../../script/Get.Blog.post.lib";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.meta) {
    return {
      title: "Post Not Found",
      description: "This post does not exist",
    };
  }

  return {
    title: post.meta.title || "Post",
    description: post.meta.excerpt || "",
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.meta) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Post not found</h1>
        <p className="mt-2 text-gray-600">
          The post you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <a href="/blogs" className="inline-block mt-4 text-gray-900 cursor-pointer">
          ← Back to all posts
        </a>
      </div>
    );
  }

  // Get the actual blog post component (the full article)
  const PostComponent = post.component;

  // Render ONLY the PostComponent - this is your K6 blog post with all the content
  return <PostComponent />;
}