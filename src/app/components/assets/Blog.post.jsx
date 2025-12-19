export default function BlogPost({ post, PostContent }) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
        <p className="text-gray-600">
          {new Date(post.date).toLocaleDateString()} • By {post.author}
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <PostContent />
      </div>
    </article>
  );
}
