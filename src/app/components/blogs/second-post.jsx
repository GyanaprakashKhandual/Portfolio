export const postMeta = {
  slug: "second-post",
  title: "React Hooks Guide",
  excerpt: "Master React Hooks and write cleaner, more efficient components.",
  date: "2024-01-10",
  author: "Jane Smith",
};

export default function SecondPost() {
  return (
    <>
      <h2>React Hooks Guide</h2>
      <p>
        React Hooks allow you to use state and other React features in
        functional components.
      </p>

      <h3>Common Hooks</h3>
      <ul>
        <li>
          <strong>useState</strong>: Manage component state
        </li>
        <li>
          <strong>useEffect</strong>: Handle side effects
        </li>
        <li>
          <strong>useContext</strong>: Access context values
        </li>
        <li>
          <strong>useReducer</strong>: Manage complex state logic
        </li>
      </ul>

      <h3>Example: Using useState</h3>
      <pre>
        <code>
          {`const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>
);`}
        </code>
      </pre>

      <p>Learn more in the official documentation!</p>
    </>
  );
}
