"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Search, Filter, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { Briefcase } from "lucide-react";

const generateSlug = (label) =>
  label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const Sidebar = ({
  isOpen = false,
  onClose,
  header = "Menu",
  items = [],
  onItemClick,
  activeItemId,
  className = "",
}) => {
  const [expandedItems, setExpandedItems] = useState({});
  const router = useRouter();
  const { stack } = useParams();

  const toggleExpand = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      toggleExpand(item.id);
    } else {
      const sidebarItemSlug = item.slug ?? generateSlug(item.label);
      router.push(`/docs/${stack}/${sidebarItemSlug}`);
    }

    if (onItemClick) {
      onItemClick(item);
    }
  };

  const renderItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id];
    const isActive = activeItemId === item.id;

    return (
      <div key={item.id}>
        <button
          onClick={() => handleItemClick(item)}
          className={`
            w-full flex items-center justify-between px-4 py-2 sm:py-2.5 text-xs sm:text-sm
            transition-colors duration-150 group
            ${
              isActive
                ? "bg-inverse text-inverse font-medium"
                : "text-secondary hover:bg-tertiary"
            }
          `}
          style={{ paddingLeft: `${(level + 1) * 14}px` }}
        >
          <span className="flex items-center flex-1 gap-1.5 sm:gap-2 text-left">
            {hasChildren ? (
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted" />
              </motion.div>
            ) : (
              <span className="shrink-0 w-3.5 sm:w-4" />
            )}
            <span className="truncate">{item.label}</span>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {item.children.map((child) => renderItem(child, level + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-overlay lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`
              lg:hidden sidebar-scrollbar
              fixed top-14 sm:top-20 left-0 z-50
              w-64 sm:w-72
              bg-primary
              border-r border-primary
              flex flex-col
              min-h-[calc(100vh-56px)] max-h-[calc(100vh-56px)]
              sm:min-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-80px)]
              overflow-hidden
              ${className}
            `}
          >
            <SidebarInner
              header={header}
              items={items}
              renderItem={renderItem}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      <aside
        className={`
          hidden lg:flex flex-col sidebar-scrollbar
          sticky top-0 bottom-0
          w-56 xl:w-72 shrink-0
          min-h-screen max-h-screen
          bg-primary
          border-r border-primary
          overflow-hidden
          ${className}
        `}
      >
        <SidebarInner header={header} items={items} renderItem={renderItem} />
      </aside>
    </>
  );
};

function SidebarInner({ header, items, renderItem }) {
  return (
    <>
      <div className="flex items-center h-10 px-4 py-3 border-b border-primary sm:h-12 sm:px-6 sm:py-4 shrink-0">
        <h2 className="text-base font-bold capitalize truncate text-primary sm:text-lg">
          {header}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="py-1 sm:py-2">
          {items.map((item) => renderItem(item))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
