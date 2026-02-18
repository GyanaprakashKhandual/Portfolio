# JSX Fundamentals

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup directly inside your JavaScript code. It is the primary way React components describe what they render — making UI structure visual, readable, and colocated with the logic that drives it.

---

## What is JSX?

JSX is **not** HTML and it is **not** a string. It is a syntactic sugar that gets compiled by tools like Babel or the TypeScript compiler into plain `React.createElement()` calls before it reaches the browser.

```jsx
// What you write
const element = <h1 className="title">Hello, React!</h1>;

// What it compiles to
const element = React.createElement(
  "h1",
  { className: "title" },
  "Hello, React!",
);
```

Both produce the same result — a React element object describing the UI. JSX simply makes it far more readable, especially as your component trees grow in complexity.

---

## JSX Rules You Must Know

JSX looks like HTML but has a strict set of rules. Violating any of them will result in a compile error.

### 1. Return a Single Root Element

A component can only return one top-level element. Wrap siblings in a parent element or a **Fragment**.

```jsx
// ❌ Invalid — two sibling elements at the root
return (
  <h1>Title</h1>
  <p>Description</p>
)

// ✅ Wrapped in a div
return (
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
)

// ✅ Wrapped in a Fragment (renders no extra DOM node)
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
)
```

### 2. Close All Tags

Every tag must be explicitly closed — including self-closing tags like `<img>`, `<input>`, and `<br>`.

```jsx
// ❌ Invalid
<img src="photo.png">
<input type="text">

// ✅ Correct
<img src="photo.png" />
<input type="text" />
```

### 3. Use camelCase for Attributes

HTML attributes are written in camelCase in JSX. This is because JSX is closer to JavaScript than to HTML — and JavaScript doesn't allow hyphens in property names.

| HTML Attribute | JSX Equivalent |
| -------------- | -------------- |
| `class`        | `className`    |
| `for`          | `htmlFor`      |
| `onclick`      | `onClick`      |
| `tabindex`     | `tabIndex`     |
| `stroke-width` | `strokeWidth`  |
| `crossorigin`  | `crossOrigin`  |

```jsx
// ❌ HTML style — won't work correctly
<label class="label" for="email">Email</label>

// ✅ JSX style
<label className="label" htmlFor="email">Email</label>
```

---

## Embedding JavaScript Expressions

Curly braces `{}` let you escape out of JSX and drop back into JavaScript. You can embed any valid JavaScript **expression** inside them.

```jsx
const user = {
  name: "Sarah",
  age: 28,
};

function Profile() {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Birth year: {new Date().getFullYear() - user.age}</p>
      <p>Uppercase: {user.name.toUpperCase()}</p>
    </div>
  );
}
```

> **Expression vs Statement** — Curly braces accept expressions (values that resolve to something), not statements. `if`, `for`, and `while` are statements and cannot go directly inside JSX. Use ternaries or helper functions instead.

---

## Attributes with Dynamic Values

Attributes can also receive dynamic values using curly braces — no quotes needed when using an expression.

```jsx
const avatarUrl = 'https://example.com/avatar.png'
const altText = 'User avatar'

// ✅ Static string — use quotes
<img src="https://example.com/logo.png" />

// ✅ Dynamic value — use curly braces
<img src={avatarUrl} alt={altText} />

// ❌ Don't mix quotes and curly braces
<img src="{avatarUrl}" />  // This passes the literal string "{avatarUrl}"
```

---

## Conditional Rendering in JSX

Since `if` statements can't live inside JSX, React developers use these patterns instead:

### Ternary Operator

```jsx
function StatusBadge({ isActive }) {
  return (
    <span className={isActive ? "badge--active" : "badge--inactive"}>
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}
```

### Logical AND (`&&`)

Render something only when a condition is true. If the condition is `false`, nothing renders.

```jsx
function Notification({ hasMessages, count }) {
  return (
    <div>
      <h1>Inbox</h1>
      {hasMessages && <p>You have {count} new messages.</p>}
    </div>
  );
}
```

> **Gotcha** — Avoid using `0` as the condition with `&&`. Since `0` is falsy but also a valid render value, React will actually render the number `0` on screen. Use an explicit boolean instead: `{count > 0 && <p>...</p>}`.

### Early Return

For complex conditions, returning early from the component is the cleanest option:

```jsx
function UserCard({ user }) {
  if (!user) {
    return <p>No user found.</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

---

## Rendering Lists

Use JavaScript's `.map()` to render arrays of elements. Each item must have a unique `key` prop to help React track changes efficiently.

```jsx
const languages = ["JavaScript", "TypeScript", "Rust", "Go"];

function LanguageList() {
  return (
    <ul>
      {languages.map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
  );
}
```

> **Key Rules:**
>
> - Keys must be **unique among siblings** — not globally unique.
> - Prefer stable, unique IDs from your data over array indices.
> - Using the array index as a key is fine for static lists but causes subtle bugs in dynamic or reorderable lists.

```jsx
// ✅ Prefer — stable unique ID from data
{
  items.map((item) => <li key={item.id}>{item.label}</li>);
}

// ⚠️ Acceptable only for static lists
{
  items.map((item, index) => <li key={index}>{item.label}</li>);
}
```

---

## JSX Spread Attributes

You can spread an object of props onto a component or element using the spread operator `{...props}`. Use this carefully — it can make it unclear which props are being passed.

```jsx
function Button({ label, ...rest }) {
  return <button {...rest}>{label}</button>;
}

// Usage
<Button label="Submit" type="submit" disabled={isLoading} className="btn" />;
```

---

## Fragments

Fragments let you group elements without adding an extra DOM node. Use the shorthand `<>...</>` in most cases, or `<Fragment>` when you need to pass a `key` prop (e.g., inside a `.map()`).

```jsx
import { Fragment } from "react";

// Shorthand — most common
function Layout() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

// Named Fragment — required when using key prop
function ItemList({ items }) {
  return (
    <dl>
      {items.map((item) => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
```

---

## JavaScript in JSX — What's Allowed

| Allowed in `{}`                  | Not Allowed in `{}`                    |
| -------------------------------- | -------------------------------------- |
| Variables                        | `if` / `else` statements               |
| Function calls                   | `for` / `while` loops                  |
| Ternary expressions              | `switch` statements                    |
| Logical operators (`&&`, `\|\|`) | Variable declarations (`let`, `const`) |
| Template literals                | `return` statements                    |
| Math expressions                 | `try` / `catch`                        |

When you need more complex logic, extract it into a variable or a helper function before the `return`:

```jsx
function PriceDisplay({ price, currency, discount }) {
  const finalPrice = discount ? price - (price * discount) / 100 : price;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(finalPrice);

  return (
    <div>
      <span>{formattedPrice}</span>
      {discount && <small>{discount}% off</small>}
    </div>
  );
}
```

---

## JSX and TypeScript

When using TypeScript, JSX files use the `.tsx` extension. You can type props to get full autocompletion and type safety:

```tsx
// Button.tsx

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
};

function Button({
  label,
  onClick,
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant}`}
    >
      {label}
    </button>
  );
}
```

---

## Common JSX Mistakes

```jsx
// ❌ Using 'class' instead of 'className'
<div class="container">...</div>

// ✅
<div className="container">...</div>

// ❌ Forgetting to close self-closing tags
<input type="email">

// ✅
<input type="email" />

// ❌ Using 0 as a conditional guard
{items.length && <List items={items} />}  // Renders "0" when empty

// ✅
{items.length > 0 && <List items={items} />}

// ❌ Putting statements inside curly braces
{if (isLoggedIn) { return <Dashboard /> }}

// ✅
{isLoggedIn ? <Dashboard /> : <Login />}

// ❌ Missing key in list rendering
{items.map((item) => <li>{item.name}</li>)}

// ✅
{items.map((item) => <li key={item.id}>{item.name}</li>)}
```

---

## Summary

JSX is the expressive layer that makes React components readable and maintainable. It bridges the gap between UI structure and JavaScript logic in a natural way. Understanding its rules — single root elements, camelCase attributes, expression-only curly braces, and proper key usage — is fundamental to writing React effectively.

Once JSX feels natural, you'll be able to build and compose components with confidence and clarity.

---

_Next up: [Components and Props](./Components.md) — learn how to build reusable UI building blocks and pass data between them._
