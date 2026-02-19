import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <div className="p-6 transition duration-200 border rounded-lg bg-card border-primary hover:border-strong hover:shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-primary">{post.title}</h2>
        <p className="mb-3 text-sm text-muted">
          {new Date(post.date).toLocaleDateString()} • By {post.author}
        </p>
        <p className="mb-4 text-secondary">{post.excerpt}</p>
        <button className="px-4 py-2 font-semibold cursor-pointer btn-primary">
          Read More
        </button>
      </div>
    </Link>
  );
}
