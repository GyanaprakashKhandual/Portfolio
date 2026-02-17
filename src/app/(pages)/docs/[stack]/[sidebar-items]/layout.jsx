"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/app/components/assets/Left.sidebar";
import OutlineSidebar from "@/app/components/assets/Outline.sidebar";
import sidebarItems from "@/app/components/data/sidebarItem";
import { MdContentProvider, useMdContent } from "@/app/context/Mdcontext";

const generateSlug = (label) =>
  label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const findActiveId = (items, slug) => {
  for (const item of items) {
    const itemSlug = item.slug ?? generateSlug(item.label);
    if (itemSlug === slug) return item.id;
    if (item.children) {
      const found = findActiveId(item.children, slug);
      if (found) return found;
    }
  }
  return null;
};

// Inner layout reads MD content from context to pass to OutlineSidebar
function InnerLayout({ children }) {
  const { content } = useMdContent();
  const { stack, "sidebar-items": sidebarItem } = useParams();

  const tabSlug = stack?.toLowerCase().trim() ?? "";
  const items = sidebarItems[tabSlug] ?? [];

  const [activeItemId, setActiveItemId] = useState(
    () => findActiveId(items, sidebarItem) ?? null
  );

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      {/* ── Left sidebar ── */}
      <Sidebar
        isOpen={true}
        header={stack}
        items={items}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
      />

      {/* ── Main content ── */}
      <div className="flex flex-1 min-w-0">
        <main className="flex-1 min-w-0 overflow-auto">
          {children}
        </main>

        {/* ── Right outline sidebar ── */}
        <OutlineSidebar content={content} />
      </div>
    </div>
  );
}

export default function SidebarLayout({ children }) {
  return (
    <MdContentProvider>
      <InnerLayout>{children}</InnerLayout>
    </MdContentProvider>
  );
}