"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/app/components/assets/Left.sidebar";
import sidebarItems from "@/app/components/data/sidebarItem";

// This is  app/docs/[stack]/page.jsx
// URL: /docs/cypress  →  stack = "cypress"
function StackPage() {
  const [activeItemId, setActiveItemId] = useState(null);

  const { stack } = useParams(); // comes from folder name [stack]

  const tabSlug = stack?.toLowerCase().trim() ?? "";
  const items = sidebarItems[tabSlug] ?? [];

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
  };

  return (
    <div className="flex bg-white">
      <Sidebar
        isOpen={true}
        header={stack}
        items={items}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
      />

      <main className="flex-1 p-8">
        {items.length === 0 && (
          <p className="text-sm text-gray-400">
            No docs found for &quot;{stack}&quot;
          </p>
        )}
      </main>
    </div>
  );
}

export default StackPage;