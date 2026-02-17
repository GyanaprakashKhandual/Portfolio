"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import Sidebar from "@/app/components/assets/Left.sidebar";
import OutlineSidebar from "@/app/components/assets/Outline.sidebar";
import sidebarItems from "@/app/components/data/sidebarItem";
import { MdContentProvider, useMdContent } from "@/app/context/Mdcontext";
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
    () => findActiveId(items, sidebarItem) ?? null
  );

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
    setMobileSidebarOpen(false); // auto-close drawer on mobile after tap
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">

      {/* ── Left sidebar ──
          Desktop (lg+): always visible, rendered inside Sidebar as sticky aside
          Mobile (<lg):  slide-in drawer controlled by mobileSidebarOpen         */}
      <Sidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        header={stack}
        items={items}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
      />

      {/* ── Everything right of the left sidebar ── */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* ── Mobile-only top bar with hamburger ──
            Hidden on lg+ because the sidebar is permanently visible there  */}
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

        {/* ── Toolbar ── */}
        <Toolbar />

        {/* ── Content row: article + right outline ── */}
        <div className="flex flex-1 min-w-0">

          {/* ── Article / page content ──
              Scrolls independently; outline tracks headings via IntersectionObserver */}
          <main className="flex-1 min-w-0 overflow-y-auto">
            {children}
          </main>

          {/* ── Right outline sidebar ──
              OutlineSidebar itself uses `hidden xl:flex` so it only appears at xl+ */}
          <OutlineSidebar content={content} />

        </div>
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