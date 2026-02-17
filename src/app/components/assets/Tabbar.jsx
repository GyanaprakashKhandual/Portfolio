"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

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

  const normalizedTabs = tabs.map((tab) =>
    typeof tab === "string" ? { label: tab, value: tab.toLowerCase() } : tab,
  );

  const getInitialTab = () => {
    if (useQueryParams && searchParams) {
      const paramValue = searchParams.get(queryParamName);
      const foundTab = normalizedTabs.find((tab) => tab.value === paramValue);
      if (foundTab) return foundTab.value;
    }

    if (defaultTab) {
      const foundTab = normalizedTabs.find(
        (tab) => tab.value === defaultTab || tab.label === defaultTab,
      );
      if (foundTab) return foundTab.value;
    }

    return normalizedTabs[0]?.value || "";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [searchParams, useQueryParams, queryParamName, activeTab, normalizedTabs]);

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
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10,
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

    const slug = tab.label.toLowerCase().replace(/\s+/g, "-");
    if (router) {
      router.push(`/docs/${slug}`);
    }

    if (useQueryParams && router && pathname) {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(queryParamName, tab.value);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    if (onTabChange) {
      onTabChange(tab);
    }

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
    <div
      className={`relative w-full bg-white border-b border-gray-200 dark:bg-black dark:border-gray-800 ${className}`}
    >
      <div className="relative flex justify-center max-w-full mx-auto align-middle">
        <AnimatePresence>
          {showLeftArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 z-10 flex items-center w-16 h-full pointer-events-none bg-linear-to-r from-white via-white to-transparent dark:from-black dark:via-black"
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
                transition-all duration-300 shrink-0
                ${
                  activeTab === tab.value
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                }
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {tab.label}

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

        <AnimatePresence>
          {showRightArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 right-0 z-10 flex items-center justify-end w-16 h-full pointer-events-none bg-linear-to-l from-white via-white to-transparent dark:from-black dark:via-black"
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

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TabBar;
