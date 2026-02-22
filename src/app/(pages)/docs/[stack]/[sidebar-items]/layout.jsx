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

  const [showToolbar, setShowToolbar] = useState(true);
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showOutlineSidebar, setShowOutlineSidebar] = useState(true);

  const [sidebarSticky, setSidebarSticky] = useState(true);
  const [outlineSticky, setOutlineSticky] = useState(true);

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

      {/* LEFT SIDEBAR */}
      {showLeftSidebar && (
        <div
          className={`hidden lg:flex flex-col shrink-0 ${
            sidebarSticky ? "sticky top-0 h-screen" : "relative"
          }`}
        >
          <Sidebar
            isOpen={mobileSidebarOpen}
            onClose={() => setMobileSidebarOpen(false)}
            header={stack}
            items={items}
            activeItemId={activeItemId}
            onItemClick={handleItemClick}
          />
        </div>
      )}

      {/* MOBILE SIDEBAR */}
      <div className="lg:hidden">
        <Sidebar
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
          header={stack}
          items={items}
          activeItemId={activeItemId}
          onItemClick={handleItemClick}
        />
      </div>

      {/* CENTER COLUMN */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

        {/* TOOLBAR (TOP, BETWEEN SIDEBARS) */}
        {showToolbar && (
          <div className="sticky top-0 z-30 shrink-0">
            <Toolbar
              onToggleToolbar={(v) => setShowToolbar(v)}
              onToggleLeftSidebar={(v) => setShowLeftSidebar(v)}
              onToggleOutlineSidebar={(v) => setShowOutlineSidebar(v)}
              onStickyChange={(key, val) => {
                if (key === "sidebar") setSidebarSticky(val);
                if (key === "outline") setOutlineSticky(val);
              }}
            />
          </div>
        )}

        {/* MOBILE TOP BAR */}
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

        {/* CONTENT (UNDER TOOLBAR) */}
        <div className="flex flex-1 min-w-0 overflow-hidden">
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden sidebar-scrollbar">
            <main
              id="main-scroll-area"
              className="flex-1 overflow-y-auto"
            >
              {children}

              <div className="shrink-0">
                <FooterToolbar />
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* RIGHT OUTLINE SIDEBAR */}
      {showOutlineSidebar && (
        <div
          className={`hidden xl:flex shrink-0 border-l border-primary ${
            outlineSticky ? "sticky top-0 h-screen" : "relative"
          } overflow-y-auto`}
        >
          <OutlineSidebar
            content={content}
            scrollContainerId="main-scroll-area"
          />
        </div>
      )}
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