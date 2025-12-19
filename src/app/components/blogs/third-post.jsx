export const postMeta = {
  slug: "third-post",
  title: "CSS in Next.js",
  excerpt: "Explore different ways to style your Next.js applications.",
  date: "2024-01-05",
  author: "Mike Johnson",
};

export default function ThirdPost() {
  return (
    <>
      <h2>CSS in Next.js</h2>
      <p>
        Next.js provides multiple ways to style your application. Let's explore
        the most popular options.
      </p>

      <h3>Styling Options</h3>
      <ul>
        <li>
          <strong>CSS Modules</strong>: Scoped CSS files for component-level
          styling
        </li>
        <li>
          <strong>Tailwind CSS</strong>: Utility-first CSS framework
        </li>
        <li>
          <strong>Styled Components</strong>: CSS-in-JS solution
        </li>
        <li>
          <strong>Sass/SCSS</strong>: Extended CSS with variables and nesting
        </li>
      </ul>

      <h3>Tailwind CSS Example</h3>
      <pre>
        <code>
          {`<div className="p-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
  Styled with Tailwind CSS
</div>`}
        </code>
      </pre>

      <p>Choose the approach that best fits your project needs!</p>
    </>
  );
}