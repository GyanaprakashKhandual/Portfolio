"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronRight, Loader2, X } from "lucide-react";

/**
 * Reusable Right Sidebar Component
 * 
 * @param {boolean} isOpen - Sidebar open/close state (controlled from parent)
 * @param {Function} onClose - Callback to close sidebar
 * @param {string} header - Header text for the sidebar
 * @param {string} headerIcon - Icon component for header (optional)
 * @param {Array} items - Array of sidebar items/headings
 *   Example: [
 *     { id: "intro", text: "Introduction", level: 2 },
 *     { id: "usage", text: "Usage", level: 2 },
 *     { id: "api", text: "API Reference", level: 3 }
 *   ]
 * @param {Function} onItemClick - Callback when item is clicked (item) => {}
 * @param {string} activeItemId - Currently active item ID
 * @param {string} content - Markdown content to auto-extract headings (optional)
 * @param {boolean} autoScroll - Enable auto-scroll on scroll (default: true)
 * @param {string} className - Additional CSS classes
 */

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, "")
    .replace(/\-\-+/g, "-");
};

const extractHeadingsFromMarkdown = (markdown) => {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const headings = [];
  const idCounts = {};
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    let id = slugify(text);

    if (idCounts[id] !== undefined) {
      idCounts[id]++;
      id = `${id}-${idCounts[id]}`;
    } else {
      idCounts[id] = 0;
    }

    headings.push({ id, text, level });
  }

  return headings;
};

const RightSidebar = ({
  isOpen = false,
  onClose,
  header = "Contents",
  headerIcon: HeaderIcon = FileText,
  items = [],
  onItemClick,
  activeItemId,
  content,
  autoScroll = true,
  className = "",
}) => {
  const [headings, setHeadings] = useState(items);
  const [activeHeading, setActiveHeading] = useState(activeItemId);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingHeading, setLoadingHeading] = useState(null);

  // Extract headings from markdown content if provided
  useEffect(() => {
    if (content) {
      const extractedHeadings = extractHeadingsFromMarkdown(content);
      setHeadings(extractedHeadings);
      if (extractedHeadings.length > 0 && !activeHeading) {
        setActiveHeading(extractedHeadings[0].id);
      }
    } else if (items && items.length > 0) {
      setHeadings(items);
      if (!activeHeading && items.length > 0) {
        setActiveHeading(items[0].id);
      }
    }
  }, [content, items]);

  // Sync active item with prop
  useEffect(() => {
    if (activeItemId) {
      setActiveHeading(activeItemId);
    }
  }, [activeItemId]);

  // Auto-scroll detection
  useEffect(() => {
    if (!autoScroll || headings.length === 0) return;

    const handleScroll = () => {
      let currentActive = activeHeading;

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 200) {
          currentActive = headings[i].id;
          break;
        }
      }

      setActiveHeading(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings, activeHeading, autoScroll]);

  const handleHeadingClick = useCallback(
    (item) => {
      setIsLoading(true);
      setLoadingHeading(item.id);

      // Call custom click handler if provided
      if (onItemClick) {
        onItemClick(item);
      }

      let element = document.getElementById(item.id);

      if (!element) {
        let retries = 0;
        const retryInterval = setInterval(() => {
          retries++;
          element = document.getElementById(item.id);

          if (element || retries > 5) {
            clearInterval(retryInterval);

            if (element) {
              setActiveHeading(item.id);
              element.scrollIntoView({ behavior: "smooth", block: "start" });
              setTimeout(() => {
                setIsLoading(false);
                setLoadingHeading(null);
              }, 500);
            } else {
              setIsLoading(false);
              setLoadingHeading(null);
            }
          }
        }, 100);
      } else {
        setActiveHeading(item.id);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          setIsLoading(false);
          setLoadingHeading(null);
        }, 500);
      }
    },
    [onItemClick]
  );

  return (
    <>
      {/* Mobile Overlay */}
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

      {/* Right Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`
              fixed top-0 right-0 z-50 h-full w-80
              bg-white dark:bg-black
              border-l border-gray-200 dark:border-gray-800
              flex flex-col
              lg:sticky lg:top-0 lg:z-30
              ${className}
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between h-12 px-6 py-4 border-b border-gray-200 shrink-0 dark:border-gray-800">
              <div className="flex items-center gap-2">
                {HeaderIcon && <HeaderIcon className="w-5 h-5" />}
                <h2 className="text-lg font-bold">{header}</h2>
              </div>
              
              {/* Close button for mobile */}
              <button
                onClick={onClose}
                className="p-1 transition-colors rounded lg:hidden hover:bg-gray-100 dark:hover:bg-gray-900"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {headings.length > 0 ? (
                headings.map((heading) => (
                  <motion.button
                    key={heading.id}
                    onClick={() => handleHeadingClick(heading)}
                    disabled={isLoading}
                    className={`
                      w-full flex items-start gap-2 px-4 py-3 rounded-lg 
                      transition-all text-left text-sm font-medium
                      ${
                        activeHeading === heading.id
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                      }
                      ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                    style={{
                      paddingLeft: `${1 + (heading.level - 2) * 0.75}rem`,
                    }}
                    whileHover={!isLoading ? { x: -4 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    {isLoading && loadingHeading === heading.id ? (
                      <Loader2 className="w-4 h-4 mt-0.5 shrink-0 animate-spin" />
                    ) : (
                      <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                    )}
                    <span className="line-clamp-2">{heading.text}</span>
                  </motion.button>
                ))
              ) : (
                <p className="py-8 text-sm text-center text-gray-500 dark:text-gray-400">
                  No items found
                </p>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default RightSidebar;