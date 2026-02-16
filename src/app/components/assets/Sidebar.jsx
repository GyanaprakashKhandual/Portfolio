"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";

/**
 * Reusable Sidebar Component
 * 
 * @param {boolean} isOpen - Sidebar open/close state (controlled from parent)
 * @param {Function} onClose - Callback to close sidebar (optional)
 * @param {string} header - Header text/component for the sidebar
 * @param {Array} items - Array of sidebar items with nested structure
 *   Example: [
 *     {
 *       id: "1",
 *       label: "Parent Item",
 *       children: [
 *         { id: "1.1", label: "Child Item" },
 *         { id: "1.2", label: "Child Item 2", children: [...] }
 *       ]
 *     }
 *   ]
 * @param {Function} onItemClick - Callback when item is clicked (item) => {}
 * @param {string} activeItemId - Currently active item ID
 * @param {string} className - Additional CSS classes
 */
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

  const toggleExpand = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      toggleExpand(item.id);
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
        {/* Item Button */}
        <motion.button
          onClick={() => handleItemClick(item)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`
            w-full flex items-center justify-between px-4 py-2.5 text-sm
            transition-all duration-200 group
            ${
              isActive
                ? "bg-black text-white dark:bg-white dark:text-black font-medium"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
            }
          `}
          style={{ paddingLeft: `${(level + 1) * 16}px` }}
        >
          <span className="flex items-center flex-1 gap-2 text-left">
            {hasChildren && (
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="flex-shrink-0 w-4 h-4" />
              </motion.div>
            )}
            {!hasChildren && <span className="w-4" />}
            <span className="truncate">{item.label}</span>
          </span>
        </motion.button>

        {/* Children Items */}
        <AnimatePresence>
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
      {/* Overlay */}
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

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`
              fixed top-0 left-0 z-50 min-h-full w-80 
              bg-white dark:bg-black 
              border-r border-gray-200 dark:border-gray-800
              flex flex-col
              lg:sticky lg:top-0 lg:z-30
              ${className}
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between h-12 px-6 py-4 border-b border-gray-200 shrink-0 dark:border-gray-800">
              <h2 className="text-lg font-bold text-black dark:text-white">
                {header}
              </h2>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <nav className="py-2">
                {items.map((item) => renderItem(item))}
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;