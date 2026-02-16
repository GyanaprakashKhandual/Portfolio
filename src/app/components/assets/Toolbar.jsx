"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  Settings,
  FileText,
  Download,
  Edit,
  ChevronDown,
  MoreHorizontal,
  Menu,
  PanelRight,
} from "lucide-react";

/**
 * Secondary Navigation Bar Component (GitHub-style)
 * 
 * @param {Array} tabs - Array of tab objects: [{ label: "Preview", value: "preview" }]
 * @param {string} fileInfo - File information text (e.g., "64 lines (43 loc) · 1.39 KB")
 * @param {Array} actions - Array of action button objects
 * @param {string} defaultTab - Default active tab
 * @param {Function} onTabChange - Callback when tab changes
 * @param {Function} onHamburgerClick - Callback when hamburger menu is clicked (optional)
 * @param {Function} onSidebarClick - Callback when sidebar icon is clicked (optional)
 * @param {string} className - Additional CSS classes
 */
const SecondaryNavBar = ({
  tabs = [],
  fileInfo = "",
  actions = [],
  defaultTab,
  onTabChange,
  onHamburgerClick,
  onSidebarClick,
  className = "",
}) => {
  // Normalize tabs to object format
  const normalizedTabs = tabs.map((tab) =>
    typeof tab === "string" ? { label: tab, value: tab.toLowerCase() } : tab
  );

  const getInitialTab = () => {
    if (defaultTab) {
      const foundTab = normalizedTabs.find(
        (tab) => tab.value === defaultTab || tab.label === defaultTab
      );
      if (foundTab) return foundTab.value;
    }
    return normalizedTabs[0]?.value || "";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab.value);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 ${className}`}
    >
      <div className="flex items-center justify-between h-12 max-w-full px-4 mx-auto sm:px-6 lg:px-8">
        {/* Hamburger Menu - Left Side */}
        <button
          onClick={onHamburgerClick}
          className="flex-shrink-0 p-2 mr-2 text-gray-600 transition-all rounded dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
          aria-label="Menu"
          title="Menu"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Left Side - Tabs */}
        <div className="flex items-center gap-1">
          {normalizedTabs.map((tab, index) => (
            <motion.button
              key={tab.value}
              onClick={() => handleTabClick(tab)}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`
                relative px-4 py-2 text-sm font-medium transition-all duration-200
                ${
                  activeTab === tab.value
                    ? "text-black dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }
              `}
            >
              {tab.label}

              {/* Active indicator line */}
              {activeTab === tab.value && (
                <motion.div
                  layoutId="secondaryNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}

          {/* File Info */}
          {fileInfo && (
            <div className="hidden ml-4 text-xs text-gray-500 sm:block dark:text-gray-500">
              {fileInfo}
            </div>
          )}
        </div>

        {/* Right Side - Action Buttons */}
        <div className="flex items-center gap-1">
          {actions.map((action, index) => {
            const Icon = action.icon;
            
            return (
              <motion.button
                key={action.label || index}
                onClick={action.onClick}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                title={action.label}
                className={`
                  p-2 text-gray-600 dark:text-gray-400 
                  hover:text-black dark:hover:text-white 
                  hover:bg-gray-200 dark:hover:bg-gray-800 
                  rounded transition-all duration-200
                  ${action.className || ""}
                `}
              >
                {Icon && <Icon className="w-4 h-4" />}
              </motion.button>
            );
          })}

          {/* Sidebar Icon - Right Side */}
          <button
            onClick={onSidebarClick}
            className="flex-shrink-0 p-2 ml-2 text-gray-600 transition-all rounded dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle Sidebar"
            title="Toggle Sidebar"
          >
            <PanelRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavBar;