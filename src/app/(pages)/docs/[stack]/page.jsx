"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import SidebarLayout from "@/app/components/assets/Left.sidebar";
import sidebarItems from "@/app/script/Sidebar.item";

function StackPage() {
  const [activeItemId, setActiveItemId] = useState(null);

  const { stack } = useParams();

  const tabSlug = stack?.toLowerCase().trim() ?? "";
  const items = sidebarItems[tabSlug] ?? [];

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
  };

  return (
    <div className="flex bg-primary">
      <SidebarLayout
        isOpen={true}
        header={stack}
        items={items}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
      />

      <main className="flex-1 p-8">
        {items.length === 0 && (
          <p className="text-sm text-muted">
            No docs found for &quot;{stack}&quot;
          </p>
        )}
      </main>
    </div>
  );
}

export default StackPage;