export default function BlogPost({ post, PostContent }) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-primary">{post.title}</h1>
        <p className="text-muted">
          {new Date(post.date).toLocaleDateString()} • By {post.author}
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-secondary">
        <PostContent />
      </div>
    </article>
  );
}
