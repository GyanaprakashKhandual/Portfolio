"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

/**
 * Reusable TabBar Component
 * 
 * @param {Array} tabs - Array of tab objects or strings
 *   - If objects: [{ label: "All", value: "all" }, { label: "Today", value: "today" }]
 *   - If strings: ["All", "Today", "Upcoming"]
 * @param {string} defaultTab - Default active tab (optional)
 * @param {Function} onTabChange - Callback when tab changes (tab) => {}
 * @param {boolean} useQueryParams - Enable URL query parameter sync (default: false)
 * @param {string} queryParamName - Name of query param (default: "tab")
 * @param {boolean} enableApiIntegration - Enable API calls on tab change (default: false)
 * @param {Function} onApiCall - API callback function (tabValue) => Promise
 * @param {string} className - Additional CSS classes
 */
const TabBar = ({
  tabs = [],
  defaultTab,
  onTabChange,
  useQueryParams = false,
  queryParamName = "tab",
  enableApiIntegration = false,
  onApiCall,
  className = "",
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  // Normalize tabs to object format
  const normalizedTabs = tabs.map((tab) =>
    typeof tab === "string" ? { label: tab, value: tab.toLowerCase() } : tab
  );

  // Get initial active tab from query params or default
  const getInitialTab = () => {
    if (useQueryParams && searchParams) {
      const paramValue = searchParams.get(queryParamName);
      const foundTab = normalizedTabs.find((tab) => tab.value === paramValue);
      if (foundTab) return foundTab.value;
    }
    
    if (defaultTab) {
      const foundTab = normalizedTabs.find(
        (tab) => tab.value === defaultTab || tab.label === defaultTab
      );
      if (foundTab) return foundTab.value;
    }
    
    return normalizedTabs[0]?.value || "";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [isLoading, setIsLoading] = useState(false);

  // Sync with query params when they change
  useEffect(() => {
    if (useQueryParams && searchParams) {
      const paramValue = searchParams.get(queryParamName);
      if (paramValue && paramValue !== activeTab) {
        const foundTab = normalizedTabs.find((tab) => tab.value === paramValue);
        if (foundTab) {
          setActiveTab(foundTab.value);
        }
      }
    }
  }, [searchParams, useQueryParams, queryParamName]);

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleTabClick = async (tab) => {
    setActiveTab(tab.value);

    // Generate slug from tab label and navigate to /docs/{slug}
    const slug = tab.label.toLowerCase().replace(/\s+/g, '-');
    if (router) {
      router.push(`/docs/${slug}`);
    }

    // Update URL query params
    if (useQueryParams && router && pathname) {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(queryParamName, tab.value);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    // Call onChange callback
    if (onTabChange) {
      onTabChange(tab);
    }

    // Make API call if enabled
    if (enableApiIntegration && onApiCall) {
      setIsLoading(true);
      try {
        await onApiCall(tab.value);
      } catch (error) {
        console.error("Tab API call failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full bg-white border-b border-gray-200 dark:bg-black dark:border-gray-800 ${className}`}>
      <div className="relative flex justify-center max-w-full mx-auto align-middle">
        {/* Left Gradient Overlay */}
        <AnimatePresence>
          {showLeftArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 z-10 flex items-center w-16 h-full pointer-events-none bg-gradient-to-r from-white via-white to-transparent dark:from-black dark:via-black"
            >
              <button
                onClick={() => scroll("left")}
                className="p-2 ml-2 transition-all bg-white border border-gray-200 rounded-full shadow-sm pointer-events-auto dark:bg-black dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950 hover:scale-110 active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scrollable Tab Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide sm:px-6 lg:px-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {normalizedTabs.map((tab, index) => (
            <motion.button
              key={tab.value}
              onClick={() => handleTabClick(tab)}
              disabled={isLoading}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className={`
                relative px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg
                transition-all duration-300 flex-shrink-0
                ${
                  activeTab === tab.value
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                }
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {tab.label}
              
              {/* Active indicator line */}
              {activeTab === tab.value && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Right Gradient Overlay */}
        <AnimatePresence>
          {showRightArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 right-0 z-10 flex items-center justify-end w-16 h-full pointer-events-none bg-gradient-to-l from-white via-white to-transparent dark:from-black dark:via-black"
            >
              <button
                onClick={() => scroll("right")}
                className="p-2 mr-2 transition-all bg-white border border-gray-200 rounded-full shadow-sm pointer-events-auto dark:bg-black dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950 hover:scale-110 active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TabBar;