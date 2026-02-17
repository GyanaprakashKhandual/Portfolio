"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSidebarActiveSlug,
  setActiveSidebarItem,
} from "../../../../lib/feature/sidebar/left.sidebar.slice";
import fileMap from "@/app/script/File.map.doc";
import MarkdownRenderer from "@/app/components/assets/Markdown.render";
import { useMdContent } from "@/app/context/Markdown.context";

export default function SidebarItemPage() {
  const { stack, "sidebar-items": sidebarItemParam } = useParams();
  const dispatch = useDispatch();

  const reduxSlug = useSelector(selectSidebarActiveSlug);

  // ✅ Bug 2 fix: URL param is source of truth, Redux is fallback
  const activeSlug = sidebarItemParam || reduxSlug;

  const { setContent } = useMdContent();

  const [localContent, setLocalContent] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Bug 1 fix: start false
  const [error, setError] = useState("");

  // Sync Redux from URL on direct load / page refresh
  useEffect(() => {
    if (!reduxSlug && sidebarItemParam) {
      dispatch(
        setActiveSidebarItem({ slug: sidebarItemParam, id: "", label: "" })
      );
    }
  }, [reduxSlug, sidebarItemParam, dispatch]);

  // ✅ Bug 3 fix: added setContent to deps
  // ✅ Bug 4 fix: ignore flag prevents stale fetch overwrites
  useEffect(() => {
    if (!activeSlug || !stack) return;
    let ignore = false;

    const stackSlug = stack.toLowerCase().trim();
    const entry = fileMap[stackSlug]?.[activeSlug];

    if (!entry) {
      setError(`No file mapped for "${stackSlug} → ${activeSlug}"`);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");
    setLocalContent("");

    fetch(`/api/docs?path=${encodeURIComponent(entry.filePath)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`File not found: ${entry.filePath}`);
        return res.text();
      })
      .then((text) => {
        if (ignore) return;
        setLocalContent(text);
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        if (ignore) return;
        setError(err.message);
        setContent("");
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [activeSlug, stack, setContent]);

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

  return (
    <div className="w-full max-w-4xl p-8">
      <MarkdownRenderer content={localContent} />
    </div>
  );
}