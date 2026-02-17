"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebarActiveSlug, setActiveSidebarItem } from "../../../../lib/feature/sidebar/leftSidebarSlice";
import fileMap from "@/app/components/data/fileMap";
import MarkdownRenderer from "@/app/components/assets/Markdown.render";

export default function SidebarItemPage() {
  const { stack, "sidebar-items": sidebarItemParam } = useParams();
  const dispatch = useDispatch();

  // Get active slug from Redux — falls back to URL param on direct load / refresh
  const reduxSlug = useSelector(selectSidebarActiveSlug);
  const activeSlug = reduxSlug || sidebarItemParam;

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // On direct URL load (refresh / shared link), Redux is empty — sync it from URL
    if (!reduxSlug && sidebarItemParam) {
      dispatch(
        setActiveSidebarItem({
          slug: sidebarItemParam,
          id: "",
          label: "",
        })
      );
    }
  }, [reduxSlug, sidebarItemParam, dispatch]);

  useEffect(() => {
    if (!activeSlug || !stack) return;

    const stackSlug = stack.toLowerCase().trim();
    const entry = fileMap[stackSlug]?.[activeSlug];

    if (!entry) {
      setError(`No file mapped for "${stackSlug}/${activeSlug}"`);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    // Fetch .md file — files must be inside /public so Next.js can serve them
    // e.g. public/note/test/cypress/basic/Intro.md  →  filePath: "/note/test/cypress/basic/Intro.md"
    fetch(entry.filePath)
      .then((res) => {
        if (!res.ok) throw new Error(`File not found: ${entry.filePath}`);
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [activeSlug, stack]);

  // ── Loading skeleton ─────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex flex-col w-full max-w-4xl gap-3 p-8 animate-pulse">
        <div className="w-1/2 h-8 bg-gray-200 rounded dark:bg-gray-800" />
        <div className="w-full h-4 bg-gray-100 rounded dark:bg-gray-900" />
        <div className="w-5/6 h-4 bg-gray-100 rounded dark:bg-gray-900" />
        <div className="w-4/6 h-4 bg-gray-100 rounded dark:bg-gray-900" />
        <div className="w-full h-32 mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl" />
      </div>
    );
  }

  // ── Error state ──────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="w-full max-w-4xl p-8">
        <div className="px-5 py-4 border border-red-200 rounded-xl bg-red-50 dark:bg-red-950/20 dark:border-red-800">
          <p className="text-sm font-medium text-red-700 dark:text-red-400">
            Could not load document
          </p>
          <p className="mt-1 font-mono text-xs text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  // ── Render markdown ──────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-4xl p-8">
      <MarkdownRenderer content={content} />
    </div>
  );
}