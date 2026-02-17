"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function OutlineSidebar({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const pathname = usePathname();
  const observerRef = useRef(null);

  useEffect(() => {
    if (!content) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHeadings([]);
      return;
    }

    const lines = content.split("\n");
    const parsed = [];

    lines.forEach((line) => {
      const match = line.match(/^(#{1,3})\s+(.+)/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = slugify(text);
        parsed.push({ level, text, id });
      }
    });

    setHeadings(parsed);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;

    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (hash) setActiveId(hash);
  }, [pathname]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.history.pushState(null, "", `${pathname}#${id}`);
    setActiveId(id);

    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:flex flex-col sticky w-64 shrink-0 min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] overflow-y-auto pl-6 pr-2 py-6 border-l border-gray-200 dark:border-gray-800">
      <p className="px-1 mb-3 text-xs font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
        On this page
      </p>

      <nav className="flex flex-col gap-0.5">
        {headings.map(({ id, text, level }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`
              text-left text-[13px] leading-5 px-2 py-1 rounded-md
              transition-colors duration-150 w-full truncate
              ${level === 1 ? "pl-2 font-medium" : ""}
              ${level === 2 ? "pl-4" : ""}
              ${level === 3 ? "pl-7 text-[12px]" : ""}
              ${
                activeId === id
                  ? "text-black dark:text-white font-medium bg-gray-100 dark:bg-gray-900"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50"
              }
            `}
          >
            <span className="flex items-center gap-2">
              {activeId === id && (
                <span className="w-0.5 h-3.5 rounded-full bg-black dark:bg-white shrink-0" />
              )}
              <span className={`truncate ${activeId === id ? "" : "pl-2.5"}`}>
                {text}
              </span>
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
