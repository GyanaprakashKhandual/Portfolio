"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import Sidebar from "@/app/components/assets/Left.sidebar";
import OutlineSidebar from "@/app/components/assets/Outline.sidebar";
import sidebarItems from "@/app/script/Sidebar.item";
import {
  MdContentProvider,
  useMdContent,
} from "@/app/context/Markdown.context";
import Toolbar from "@/app/components/assets/Toolbar";

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

function InnerLayout({ children }) {
  const { content } = useMdContent();
  const { stack, "sidebar-items": sidebarItem } = useParams();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const tabSlug = stack?.toLowerCase().trim() ?? "";
  const items = sidebarItems[tabSlug] ?? [];

  const [activeItemId, setActiveItemId] = useState(
    () => findActiveId(items, sidebarItem) ?? null,
  );

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
    setMobileSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      <Sidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        header={stack}
        items={items}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
      />

      <Toolbar />

      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="flex items-center h-12 gap-3 px-4 bg-white border-b border-gray-200 dark:border-gray-800 lg:hidden shrink-0 dark:bg-black">
          <button
            onClick={() => setMobileSidebarOpen((prev) => !prev)}
            className="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            aria-label="Toggle sidebar"
          >
            {mobileSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
          <span className="text-sm font-medium text-gray-700 capitalize truncate dark:text-gray-300">
            {stack}
          </span>
        </div>

        {children}
      </main>

      <OutlineSidebar content={content} />
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
