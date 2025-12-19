// app/(pages)/blogs/[slug]/page.jsx
import { getPostBySlug, getAllPostSlugs } from "../../../lib/Get.Blog.post.lib";
import BlogPost from "../../../components/assets/Blog.card";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params; // AWAIT params here
    const post = getPostBySlug(slug);

    if (!post) {
      return {
        title: "Post Not Found",
        description: "This post does not exist",
      };
    }

    return {
      title: post.meta.title || "Post",
      description: post.meta.excerpt || "",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post",
      description: "",
    };
  }
}

export default async function PostPage({ params }) {
  try {
    const { slug } = await params; // AWAIT params here

    const post = getPostBySlug(slug);

    if (!post) {
      return (
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-red-600">Post not found</h1>
          <p className="mt-2 text-gray-600">
            The post you're looking for doesn't exist.
          </p>
          <a
            href="/blogs"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            ← Back to all posts
          </a>
        </div>
      );
    }

    const PostComponent = post.component;

    return <BlogPost post={post.meta} PostContent={PostComponent} />;
  } catch (error) {
    console.error("Error rendering post:", error);
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Error loading post</h1>
        <p className="mt-2 text-gray-600">
          An error occurred while loading the post.
        </p>
        <a
          href="/blogs"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          ← Back to all posts
        </a>
      </div>
    );
  }
}
