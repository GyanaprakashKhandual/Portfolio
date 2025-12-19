import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <div className="p-6 transition bg-white rounded-lg shadow-md hover:shadow-lg">
        <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
        <p className="mb-3 text-sm text-gray-600">
          {new Date(post.date).toLocaleDateString()} • By {post.author}
        </p>
        <p className="mb-4 text-gray-700">{post.excerpt}</p>
        <span className="font-semibold text-blue-600 hover:underline">
          Read More →
        </span>
      </div>
    </Link>
  );
}
