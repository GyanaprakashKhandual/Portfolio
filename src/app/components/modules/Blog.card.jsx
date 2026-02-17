import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <div className="p-6 transition duration-200 bg-white border border-gray-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700">
        <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
          {post.title}
        </h2>
        <p className="mb-3 text-sm text-gray-600 dark:text-slate-400">
          {new Date(post.date).toLocaleDateString()} • By {post.author}
        </p>
        <p className="mb-4 text-gray-700 dark:text-slate-300">{post.excerpt}</p>
        <button className="px-4 py-2 font-semibold text-white transition duration-200 bg-black rounded-lg cursor-pointer dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
          Read More
        </button>
      </div>
    </Link>
  );
}