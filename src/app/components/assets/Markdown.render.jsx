"use client";

/**
 * MarkdownRenderer.jsx
 *
 * Renders raw markdown string into styled HTML.
 * Uses `react-markdown` + `rehype-highlight` for syntax highlighting.
 *
 * Install dependencies:
 *   npm install react-markdown rehype-highlight highlight.js remark-gfm
 */

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // swap to github-dark.css for dark mode

export default function MarkdownRenderer({ content }) {
  if (!content) {
    return (
      <p className="text-sm italic text-gray-400">No content available.</p>
    );
  }

  return (
    <div className="w-full max-w-4xl markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // ── Headings ──────────────────────────────────────────────────────
          h1: ({ children }) => (
            <h1 className="pb-2 mt-8 mb-4 text-3xl font-bold text-gray-900 border-b border-gray-200 dark:text-white dark:border-gray-700">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="pb-1 mt-8 mb-3 text-2xl font-semibold text-gray-900 border-b border-gray-100 dark:text-white dark:border-gray-800">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-4 mb-2 text-lg font-medium text-gray-800 dark:text-gray-100">
              {children}
            </h4>
          ),

          // ── Paragraph ─────────────────────────────────────────────────────
          p: ({ children }) => (
            <p className="text-gray-700 dark:text-gray-300 leading-7 mb-4 text-[15px]">
              {children}
            </p>
          ),

          // ── Lists ─────────────────────────────────────────────────────────
          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300 text-[15px]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300 text-[15px]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-7">{children}</li>
          ),

          // ── Inline code ───────────────────────────────────────────────────
          code: ({ inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code
                  className="bg-gray-100 dark:bg-gray-800 text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded text-[13px] font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            // Block code — handled by rehype-highlight via <pre>
            return (
              <code className={`${className ?? ""} text-[13px]`} {...props}>
                {children}
              </code>
            );
          },

          // ── Code block wrapper ────────────────────────────────────────────
          pre: ({ children }) => (
            <pre className="bg-gray-950 dark:bg-gray-900 rounded-xl overflow-x-auto p-4 mb-6 text-[13px] leading-relaxed border border-gray-800">
              {children}
            </pre>
          ),

          // ── Blockquote ────────────────────────────────────────────────────
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-500 pl-4 pr-3 py-2 my-4 rounded-r-lg text-gray-700 dark:text-gray-300 italic text-[15px]">
              {children}
            </blockquote>
          ),

          // ── Table ─────────────────────────────────────────────────────────
          table: ({ children }) => (
            <div className="mb-6 overflow-x-auto">
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg text-[14px]">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-100 dark:bg-gray-800">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2.5 text-left font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">
              {children}
            </td>
          ),

          // ── Horizontal rule ───────────────────────────────────────────────
          hr: () => (
            <hr className="my-8 border-gray-200 dark:border-gray-700" />
          ),

          // ── Links ─────────────────────────────────────────────────────────
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline transition-colors dark:text-blue-400 underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300"
            >
              {children}
            </a>
          ),

          // ── Images ────────────────────────────────────────────────────────
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="max-w-full my-4 border border-gray-200 rounded-lg dark:border-gray-700"
            />
          ),

          // ── Bold / Italic ─────────────────────────────────────────────────
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900 dark:text-white">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-700 dark:text-gray-300">
              {children}
            </em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}