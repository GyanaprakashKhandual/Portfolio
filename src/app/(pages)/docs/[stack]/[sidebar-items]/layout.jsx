"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import Sidebar from "@/app/components/assets/Left.sidebar";
import OutlineSidebar from "@/app/components/assets/Outline.sidebar";
import sidebarItems from "@/app/script/Sidebar.item";
import { MdContentProvider, useMdContent } from "@/app/context/Markdown.context";
import Toolbar from "@/app/components/assets/Toolbar";
import FooterToolbar from "@/app/components/assets/Footer.toolbar";

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

  useEffect(() => {
  setActiveItemId(findActiveId(items, sidebarItem) ?? null);
}, [sidebarItem]);

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
    setMobileSidebarOpen(false);
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

        {/* ── Content row: toolbar + article + right outline ── */}
        <div className="flex flex-1 min-w-0 overflow-hidden">

          {/* ── Center column: toolbar + article ── */}
          <div className="flex flex-col flex-1 min-w-0">

            {/* ── Toolbar ── */}
            <div className="sticky top-0 z-10 shrink-0">
              <Toolbar />
            </div>

            {/* ── Article / page content ──
                Scrolls independently; outline tracks headings via IntersectionObserver */}
            <main className="flex-1 min-w-0 overflow-y-auto">
              {children}
            </main>

          </div>

          {/* ── Right outline sidebar ──
              OutlineSidebar itself uses `hidden xl:flex` so it only appears at xl+
              sticky top-0 keeps it pinned while the article scrolls              */}
          <div className="sticky top-0 self-start h-screen overflow-y-auto shrink-0">
  <OutlineSidebar content={content} />
</div>
        </div>
        <FooterToolbar/>
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