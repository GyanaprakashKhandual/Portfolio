"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

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
      setExpandedItems({});
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
            w-full flex items-center justify-between px-4 py-2.5 text-sm
            transition-colors duration-150 group
            ${
              isActive
                ? "bg-black text-white dark:bg-white dark:text-black font-medium"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
            }
          `}
          style={{ paddingLeft: `${(level + 1) * 16}px` }}
        >
          <span className="flex items-center flex-1 gap-2 text-left">
            {hasChildren ? (
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            ) : (
              <span className="flex-shrink-0 w-4" />
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
            className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 lg:hidden"
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
              fixed top-[80px] left-0 z-50 w-72
              bg-white dark:bg-black
              border-r border-gray-200 dark:border-gray-800
              flex flex-col
              min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)]
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
          sticky
          w-72 shrink-0
          min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)]
          bg-white dark:bg-black
          border-r border-gray-200 dark:border-gray-800
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
      <div className="flex items-center h-12 px-6 py-4 border-b border-gray-200 shrink-0 dark:border-gray-800">
        <h2 className="text-lg font-bold text-black capitalize dark:text-white">
          {header}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="py-2">{items.map((item) => renderItem(item))}</nav>
      </div>
    </>
  );
}

export default Sidebar;
