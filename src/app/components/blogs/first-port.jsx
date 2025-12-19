export const postMeta = {
  slug: "first-post",
  title: "Getting Started with Next.js",
  excerpt:
    "Learn the basics of Next.js and how to build amazing web applications.",
  date: "2024-01-15",
  author: "John Doe",
};

export default function FirstPost() {
  return (
    <>
      <h2>Getting Started with Next.js</h2>
      <p>
        Next.js is a powerful React framework for building web applications. In
        this post, we'll explore the basics.
      </p>

      <h3>What is Next.js?</h3>
      <p>
        Next.js is built on top of React and provides additional features like:
      </p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>Built-in CSS support</li>
      </ul>

      <h3>Getting Started</h3>
      <p>To create a new Next.js project, run:</p>
      <pre>
        <code>
          {`npx create-next-app@latest my-app
cd my-app
npm run dev`}
        </code>
      </pre>
      <p>That's it! Your app is now running on localhost:3000.</p>
    </>
  );
}
