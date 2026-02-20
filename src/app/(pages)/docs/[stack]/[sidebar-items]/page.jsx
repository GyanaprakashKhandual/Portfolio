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
  // FIX: use sidebarItemParam (URL) first — it always reflects the current page
  const activeSlug = sidebarItemParam || reduxSlug;

  const { setContent } = useMdContent();

  const [localContent, setLocalContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!reduxSlug && sidebarItemParam) {
      dispatch(
        setActiveSidebarItem({ slug: sidebarItemParam, id: "", label: "" }),
      );
    }
  }, [reduxSlug, sidebarItemParam, dispatch]);

  useEffect(() => {
    if (!sidebarItemParam || !stack) return; // FIX: depend on sidebarItemParam, not activeSlug

    const stackSlug = stack.toLowerCase().trim();
    const entry = fileMap[stackSlug]?.[sidebarItemParam]; // FIX: always use URL param for lookup

    if (!entry) {
      setError(`No file mapped for "${stackSlug} → ${sidebarItemParam}"`);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    fetch(`/api/docs?path=${encodeURIComponent(entry.filePath)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`File not found: ${entry.filePath}`);
        return res.text();
      })
      .then((text) => {
        setLocalContent(text);
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setContent("");
        setLoading(false);
      });
  }, [sidebarItemParam, stack]); // FIX: sidebarItemParam in deps, not activeSlug

  if (loading) {
    return (
      <div className="flex flex-col w-full max-w-4xl gap-3 p-8 animate-pulse">
        <div className="w-1/2 h-8 rounded bg-tertiary" />
        <div className="w-full h-4 rounded bg-tertiary" />
        <div className="w-5/6 h-4 rounded bg-tertiary" />
        <div className="w-4/6 h-4 rounded bg-tertiary" />
        <div className="w-full h-32 mt-4 bg-tertiary rounded-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl p-8">
        <div className="px-5 py-4 border border-primary rounded-xl bg-secondary">
          <p className="text-sm font-medium text-primary">
            Could not load document
          </p>
          <p className="mt-1 font-mono text-xs text-muted">{error}</p>
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
