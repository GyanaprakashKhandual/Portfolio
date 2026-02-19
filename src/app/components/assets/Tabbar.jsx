"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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

    if (useQueryParams && router && pathname) {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(queryParamName, tab.value);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    } else {
      router.push(`/docs/${slug}`);
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
      className={`relative w-full bg-primary border-b border-primary ${className}`}
    >
      <div className="relative flex justify-center max-w-full mx-auto align-middle">
        <AnimatePresence>
          {showLeftArrow && (
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 z-10 flex items-center w-8 h-full pointer-events-none sm:w-12 lg:w-16 bg-gradient-to-r from-primary via-primary to-transparent"
            >
              <button
                onClick={() => scroll("left")}
                className="p-1 ml-1 transition-all border rounded-full shadow-sm pointer-events-auto bg-primary border-primary sm:p-2 sm:ml-2 hover:bg-tertiary hover:scale-110 active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          ref={scrollContainerRef}
          className="flex w-full gap-1 px-3 py-2 overflow-x-auto sm:gap-2 sm:px-4 md:px-6 lg:px-8 sm:py-3 scrollbar-hide"
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
                relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium whitespace-nowrap rounded-lg
                transition-all duration-300 shrink-0
                ${
                  activeTab === tab.value
                    ? "bg-inverse text-inverse font-medium"
                    : "bg-tertiary text-secondary hover:bg-badge hover:text-primary"
                }
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {tab.label}

              {activeTab === tab.value && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-strong rounded-full"
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
              className="absolute top-0 right-0 z-10 flex items-center justify-end w-8 h-full pointer-events-none sm:w-12 lg:w-16 bg-gradient-to-l from-primary via-primary to-transparent"
            >
              <button
                onClick={() => scroll("right")}
                className="p-1 mr-1 transition-all border rounded-full shadow-sm pointer-events-auto bg-primary border-primary sm:p-2 sm:mr-2 hover:bg-tertiary hover:scale-110 active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
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

const TabBarWithSuspense = (props) => (
  <Suspense fallback={null}>
    <TabBar {...props} />
  </Suspense>
);

export default TabBarWithSuspense;
