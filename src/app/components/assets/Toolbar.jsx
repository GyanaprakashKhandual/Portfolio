"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Copy,
  FileText,
  Download,
  SquarePen,
  PanelRight,
  MoreHorizontal,
  EyeOff,
} from "lucide-react";
import { Tooltip } from "../ui/Tooltip.ui";

const dropdownItems = [
  { label: "Hide Navbar" },
  { label: "Hide Toolbar" },
  { label: "Hide Left Sidebar" },
  { label: "Hide Right Sidebar" },
];

const Toolbar = ({
  tabs = [
    { label: "Preview", value: "preview" },
    { label: "Code", value: "code" },
    { label: "Blame", value: "blame" },
  ],
  actions = [
    { icon: Copy, label: "Copy" },
    { icon: FileText, label: "Raw" },
    { icon: Download, label: "Download" },
    { icon: SquarePen, label: "Edit" },
    { icon: PanelRight, label: "Panel" },
  ],
  defaultTab = "preview",
  onTabChange,
  onMenuToggle,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab.value);
    if (onTabChange) onTabChange(tab);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div
      className={`
        w-full h-12 flex items-center sticky top-0
        bg-white dark:bg-black
        border-b border-gray-200 dark:border-gray-800
        px-4
        shrink-0
        ${className}
      `}
    >
      {/* ── Left: hamburger ── */}
      <div className="flex items-center w-24 shrink-0">
        <Tooltip content="Toggle Sidebar">
          <button
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
          className="p-1.5 rounded text-gray-500 dark:text-gray-400
                     hover:text-gray-900 dark:hover:text-gray-100
                     hover:bg-gray-100 dark:hover:bg-gray-900
                     transition-colors duration-150"
        >
          <Menu className="w-5 h-5" />
        </button>
        </Tooltip>
      </div>

      {/* ── Center: tabs (absolutely centered in the bar) ── */}
      <div className="absolute flex items-center gap-1 -translate-x-1/2 left-1/2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab)}
              className={`
                relative px-4 py-2.5 text-sm font-medium
                transition-colors duration-150 rounded-sm
                ${
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }
              `}
            >
              {tab.label}

              {/* Animated underline indicator */}
              {isActive && (
                <motion.span
                  layoutId="toolbar-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Right: action icon buttons + three-dot menu ── */}
      <div className="flex items-center gap-0.5 ml-auto shrink-0">
        {actions.map(({ icon: Icon, label }) => (
          // eslint-disable-next-line react/jsx-key
          <Tooltip content={label}>
            <button
            key={label}
            aria-label={label}
            title={label}
            className="p-2 text-gray-500 transition-colors duration-150 rounded dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <Icon className="w-4 h-4" />
          </button>
          </Tooltip>
        ))}

        {/* Three-dot dropdown */}
        <div className="relative" ref={dropdownRef}>
          <Tooltip content="More">
            <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            aria-label="More options"
            title="More options"
            className={`
              p-2 rounded transition-colors duration-150
              ${
                dropdownOpen
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
              }
            `}
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
          </Tooltip>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                // initial={{ opacity: 0, scale: 0.95, y: -4 }}
                // animate={{ opacity: 1, scale: 1, y: 0 }}
                // exit={{ opacity: 0, scale: 0.95, y: -4 }}
                // transition={{ duration: 0.12, ease: "easeOut" }}
                className="absolute right-0 z-50 py-1 mt-1 origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg top-full w-52 dark:bg-gray-950 dark:border-gray-800 shadow-black/10 dark:shadow-black/40"
              >
                {dropdownItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2.5 rounded-md
      mx-2 px-3 py-2.5 text-sm text-left
      w-[calc(100%-1rem)]
      text-gray-700 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-gray-800
      hover:text-gray-900 dark:hover:text-white
      active:bg-gray-200 dark:active:bg-gray-700
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-blue-500
      transition-colors duration-100
      cursor-pointer select-none"
                  >
                    <EyeOff className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
