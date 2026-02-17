"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Copy, FileText, Download, Edit } from "lucide-react";
import Sidebar from "@/app/components/assets/Left.sidebar";
import sidebarItems from "@/app/components/data/sidebarItem";
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

export default function SidebarLayout({ children }) {
  const { stack, "sidebar-items": sidebarItem } = useParams();
  const [activeTab, setActiveTab] = useState("preview");
  const [content, setContent] = useState("Preview Content");
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const tabSlug = stack?.toLowerCase().trim() ?? "";
  const items = sidebarItems[tabSlug] ?? [];

  const [activeItemId, setActiveItemId] = useState(
    () => findActiveId(items, sidebarItem) ?? null,
  );

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
  };

  return (
  <div className="flex min-h-screen bg-white">  {/* ← add pt-[80px] */}
    <Sidebar
      isOpen={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      header={stack}
      items={items}
      activeItemId={activeItemId}
      onItemClick={handleItemClick}
    />

    <div className="flex flex-col flex-1 min-w-0">
      <Toolbar
      />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  </div>
);
}
