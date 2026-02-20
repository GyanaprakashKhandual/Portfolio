"use client";
import React, { useState, useEffect } from "react";
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
    () => findActiveId(items, sidebarItem) ?? null,
  );

  useEffect(() => {
    setActiveItemId(findActiveId(items, sidebarItem) ?? null);
  }, [sidebarItem]);

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
    setMobileSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-primary">
      {/* ── Left sidebar: always sticky, full height ── */}
      <Sidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        header={stack}
        items={items}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
      />

      {/* ── Center column: toolbar + scrollable content + footer ── */}
      <div className="flex flex-col flex-1 h-screen min-w-0 overflow-hidden">
        {/* ── Mobile-only top bar with hamburger ── */}
        <div className="flex items-center h-12 gap-3 px-4 border-b bg-primary border-primary lg:hidden shrink-0">
          <button
            onClick={() => setMobileSidebarOpen((prev) => !prev)}
            className="p-1.5 rounded-md text-muted hover:bg-tertiary transition-colors"
            aria-label="Toggle sidebar"
          >
            {mobileSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
          <span className="text-sm font-medium capitalize truncate text-secondary">
            {stack}
          </span>
        </div>

        {/* ── Toolbar: always sticky between left sidebar and outline sidebar ── */}
        <div className="border-b shrink-0 border-primary">
          <Toolbar />
        </div>

        {/* ── Body row: scrollable article + sticky outline sidebar ── */}
        <div className="flex flex-1 min-w-0 overflow-hidden">
          {/* ── Scrollable article ── */}
          <main className="flex-1 min-w-0 overflow-y-auto">{children}</main>

          {/* ── Right outline sidebar: sticky, full height, always visible ── */}
          <aside className="hidden h-full overflow-y-auto border-l xl:flex shrink-0 border-primary">
            <OutlineSidebar content={content} />
          </aside>
        </div>

        {/* ── Footer toolbar: always present at bottom ── */}
        <div className="border-t shrink-0 border-primary">
          <FooterToolbar />
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
