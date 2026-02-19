"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractText(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children?.props?.children) return extractText(children.props.children);
  return "";
}

export default function MarkdownRenderer({ content }) {
  if (!content) {
    return <p className="text-sm italic text-muted">No content available.</p>;
  }

  return (
    <div className="w-full max-w-4xl markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => {
            const id = slugify(extractText(children));
            return (
              <h1
                id={id}
                className="flex items-center gap-2 pb-2 mt-8 mb-4 text-3xl font-bold border-b text-primary border-primary group scroll-mt-24"
              >
                {children}
                <a
                  href={`#${id}`}
                  className="text-2xl font-normal transition-opacity opacity-0 text-muted group-hover:opacity-60"
                  aria-label="Link to section"
                >
                  #
                </a>
              </h1>
            );
          },
          h2: ({ children }) => {
            const id = slugify(extractText(children));
            return (
              <h2
                id={id}
                className="flex items-center gap-2 pb-1 mt-8 mb-3 text-2xl font-semibold border-b text-primary border-primary group scroll-mt-24"
              >
                {children}
                <a
                  href={`#${id}`}
                  className="text-xl font-normal transition-opacity opacity-0 text-muted group-hover:opacity-60"
                  aria-label="Link to section"
                >
                  #
                </a>
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = slugify(extractText(children));
            return (
              <h3
                id={id}
                className="flex items-center gap-2 mt-6 mb-2 text-xl font-semibold text-primary group scroll-mt-24"
              >
                {children}
                <a
                  href={`#${id}`}
                  className="text-lg font-normal transition-opacity opacity-0 text-muted group-hover:opacity-60"
                  aria-label="Link to section"
                >
                  #
                </a>
              </h3>
            );
          },
          h4: ({ children }) => {
            const id = slugify(extractText(children));
            return (
              <h4
                id={id}
                className="mt-4 mb-2 text-lg font-medium text-primary scroll-mt-24"
              >
                {children}
              </h4>
            );
          },

          p: ({ children }) => (
            <p className="text-secondary leading-7 mb-4 text-[15px]">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-6 mb-4 space-y-1 text-secondary text-[15px]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-6 mb-4 space-y-1 text-secondary text-[15px]">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-7">{children}</li>,

          code: ({ inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code
                  className="bg-tertiary text-strong px-1.5 py-0.5 rounded text-[13px] font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={`${className ?? ""} text-[13px]`} {...props}>
                {children}
              </code>
            );
          },

          pre: ({ children }) => (
            <pre className="bg-inverse rounded-xl overflow-x-auto p-4 mb-6 text-[13px] leading-relaxed border border-strong">
              {children}
            </pre>
          ),

          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-strong bg-tertiary pl-4 pr-3 py-2 my-4 rounded-r-lg text-secondary italic text-[15px]">
              {children}
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="mb-6 overflow-x-auto">
              <table className="min-w-full border border-primary rounded-lg text-[14px]">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-tertiary">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2.5 text-left font-semibold text-primary border-b border-primary">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2.5 text-secondary border-b border-primary">
              {children}
            </td>
          ),

          hr: () => <hr className="my-8 border-primary" />,

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors text-strong underline-offset-2 hover:text-primary"
            >
              {children}
            </a>
          ),

          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="max-w-full my-4 border rounded-lg border-primary"
            />
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-primary">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-secondary">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
