"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Menu,
  Copy,
  FileText,
  Download,
  SquarePen,
  PanelRight,
  MoreHorizontal,
  EyeOff,
  Eye,
  Settings,
  Sun,
  Moon,
  PanelLeft,
  PanelRightClose,
  Pin,
  PinOff,
  Edit,
  Check,        // ← ADDED: for copy success state
  X,            // ← ADDED: for closing raw modal
} from "lucide-react";
import { Tooltip } from "../ui/Tooltip.ui";
import TechStackModal from "../window/Tech.stack.modal";
import { useTheme } from "@/app/context/Theme.context";
import { useSelector } from "react-redux";
import { selectActiveSlug } from "@/app/lib/feature/tab/tab.slice";
import { useMdContent } from "@/app/context/Markdown.context"; // ← ADDED

/* ─────────────────────────────────────────────
   Visibility + Sticky state (module-level so
   other components can read via context later)
───────────────────────────────────────────── */
const dropdownItems = [
  { label: "Hide Toolbar", key: "toolbar" },
  { label: "Hide Left Sidebar", key: "leftSidebar" },
  { label: "Hide Outline Sidebar", key: "outlineSidebar" },
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
    { icon: PanelRight, label: "Panel" },
  ],
  defaultTab = "preview",
  onTabChange,
  onMenuToggle,
  className = "",
  /* Visibility / sticky callbacks — wire these up in the parent layout */
  onToggleToolbar = () => {},
  onToggleLeftSidebar = () => {},
  onToggleOutlineSidebar = () => {},
}) => {
  const { theme, toggleTheme, mounted } = useTheme();

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [techStackOpen, setTechStackOpen] = useState(false);

  const activeSlug = useSelector(selectActiveSlug);

  // ── ADDED: content from context + action states ──
  const { content } = useMdContent();
  const [copied, setCopied] = useState(false);
  const [rawOpen, setRawOpen] = useState(false);

  /* ── Visibility state ── */
  const [visible, setVisible] = useState({
    toolbar: true,
    leftSidebar: true,
    outlineSidebar: true,
  });

  /* ── Sticky state ── */
  const [sticky, setSticky] = useState({
    sidebar: false,
    outline: false,
    tooltips: true,
  });

  const dropdownRef = useRef(null);
  const settingsRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab.value);
    if (onTabChange) onTabChange(tab);
  };

  /* Close dropdowns when clicking outside */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
      if (settingsRef.current && !settingsRef.current.contains(e.target))
        setSettingsOpen(false);
    };
    if (dropdownOpen || settingsOpen)
      document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen, settingsOpen]);

  /* Toggle visibility + fire parent callback */
  const toggleVisible = (key) => {
    setVisible((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      if (key === "toolbar") onToggleToolbar(!prev[key]);
      if (key === "leftSidebar") onToggleLeftSidebar(!prev[key]);
      if (key === "outlineSidebar") onToggleOutlineSidebar(!prev[key]);
      return next;
    });
    setDropdownOpen(false);
  };

  // ── ADDED: Copy handler ──
  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // ── ADDED: Download handler ──
  const handleDownload = () => {
    if (!content) return;
    const filename = activeSlug ? `${activeSlug}.md` : "document.md";
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── ADDED: action click dispatcher ──
  const handleActionClick = (label) => {
    if (label === "Copy") handleCopy();
    if (label === "Raw") setRawOpen(true);
    if (label === "Download") handleDownload();
  };

  const router = useRouter();
  const toggleSticky = (key) =>
    setSticky((prev) => ({ ...prev, [key]: !prev[key] }));

  /* Theme icon */
  const ThemeIcon = !mounted ? Sun : theme === "dark" ? Sun : Moon;
  const themeLabel = !mounted
    ? "Toggle Theme"
    : theme === "dark"
      ? "Light Mode"
      : "Dark Mode";

  return (
    <>
      <div
        className={`
          w-full h-12 flex items-center
          bg-white dark:bg-black
          border-b border-gray-200 dark:border-gray-800
          px-2 sm:px-4
          shrink-0
          ${className}
        `}
      >
        {/* ── Left: hamburger ── */}
        <div className="flex items-center w-8 shrink-0 sm:w-24">
          <Tooltip content="Open Docs Menu" position="top-right">
            <button
              onClick={() => setTechStackOpen(true)}
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

        {/* ── Center: tabs ── */}
        <div className="absolute flex items-center gap-0.5 sm:gap-1 -translate-x-1/2 left-1/2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => handleTabClick(tab)}
                className={`
                  relative px-2 sm:px-4 py-2.5 text-xs sm:text-sm font-medium
                  transition-colors duration-150 rounded-sm whitespace-nowrap
                  ${
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }
                `}
              >
                {tab.label}
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

        {/* ── Right: actions ── */}
        <div className="flex items-center gap-0.5 ml-auto shrink-0">
          {/* Action icons — hidden on small screens */}
          {/* ── CHANGED: added onClick dispatcher, Copy shows checkmark when copied ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {actions.map(({ icon: Icon, label }) => (
              <Tooltip key={label} content={label === "Copy" && copied ? "Copied!" : label}>
                <button
                  aria-label={label}
                  onClick={() => handleActionClick(label)}
                  className="p-2 text-gray-500 transition-colors duration-150 rounded dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  {label === "Copy" && copied
                    ? <Check className="w-4 h-4 text-gray-900" />
                    : <Icon className="w-4 h-4" />
                  }
                </button>
              </Tooltip>
            ))}
          </div>

          <Tooltip content="Edit On Github">
            <button
            onClick={() => router.push(`https://github.com/GyanaprakashKhandual/Portfolio/blob/main/src/app/note`)}
             className="p-2 text-gray-500 transition-colors duration-150 rounded dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              <Edit className="w-4 h-4" />
            </button>
          </Tooltip>

          {/* ── Theme toggle ── */}
          <Tooltip content={themeLabel}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-gray-500 transition-colors duration-150 rounded dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              <ThemeIcon className="w-4 h-4" />
            </button>
          </Tooltip>

          {/* ── Settings dropdown ── */}
          <div className="relative" ref={settingsRef}>
            <Tooltip content="Settings">
              <button
                onClick={() => {
                  setSettingsOpen((p) => !p);
                  setDropdownOpen(false);
                }}
                aria-label="Settings"
                className={`
                  p-2 rounded transition-colors duration-150
                  ${
                    settingsOpen
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                  }
                `}
              >
                <Settings className="w-4 h-4" />
              </button>
            </Tooltip>

            <AnimatePresence>
              {settingsOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -4 }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                  className="absolute right-0 z-50 py-1.5 mt-1 origin-top-right
                             bg-white dark:bg-gray-950
                             border border-gray-200 dark:border-gray-800
                             rounded-lg shadow-lg shadow-black/10 dark:shadow-black/40
                             top-full w-52"
                >
                  {/* Section label */}
                  <p className="px-3.5 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
                    Sticky
                  </p>

                  {[
                    {
                      key: "sidebar",
                      label: "Sidebar Sticky",
                      Icon: PanelLeft,
                    },
                    {
                      key: "outline",
                      label: "Outline Sticky",
                      Icon: PanelRightClose,
                    },
                    { key: "tooltips", label: "Tooltips Sticky", Icon: Pin },
                  ].map(({ key, label, Icon }) => (
                    <button
                      key={key}
                      onClick={() => toggleSticky(key)}
                      className="flex items-center justify-between gap-2.5 rounded-md
                                 mx-2 px-3 py-2.5 text-sm text-left
                                 w-[calc(100%-1rem)]
                                 text-gray-700 dark:text-gray-300
                                 hover:bg-gray-100 dark:hover:bg-gray-800
                                 hover:text-gray-900 dark:hover:text-white
                                 transition-colors duration-100 cursor-pointer select-none"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
                        {label}
                      </span>
                      {/* Toggle pill */}
                      <span
                        className={`
                          relative inline-flex h-4 w-7 shrink-0 rounded-full
                          border transition-colors duration-200
                          ${
                            sticky[key]
                              ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white"
                              : "bg-gray-200 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                          }
                        `}
                      >
                        <span
                          className={`
                            inline-block h-3 w-3 mt-0.5 rounded-full
                            bg-white dark:bg-gray-900
                            shadow transition-transform duration-200
                            ${sticky[key] ? "translate-x-3.5" : "translate-x-0.5"}
                          `}
                        />
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── More (three-dot) dropdown ── */}
          <div className="relative" ref={dropdownRef}>
            <Tooltip content="More" position="top-left">
              <button
                onClick={() => {
                  setDropdownOpen((p) => !p);
                  setSettingsOpen(false);
                }}
                aria-label="More options"
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
                  initial={{ opacity: 0, scale: 0.95, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -4 }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                  className="absolute right-0 z-50 py-1.5 mt-1 origin-top-right
                             bg-white dark:bg-gray-950
                             border border-gray-200 dark:border-gray-800
                             rounded-lg shadow-lg shadow-black/10 dark:shadow-black/40
                             top-full w-52"
                >
                  {/* Mobile-only action icons in the dropdown */}
                  <div className="md:hidden">
                    <p className="px-3.5 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
                      Actions
                    </p>
                    {actions.map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        onClick={() => { handleActionClick(label); setDropdownOpen(false); }}
                        className="flex items-center gap-2.5 rounded-md
                                   mx-2 px-3 py-2.5 text-sm text-left
                                   w-[calc(100%-1rem)]
                                   text-gray-700 dark:text-gray-300
                                   hover:bg-gray-100 dark:hover:bg-gray-800
                                   hover:text-gray-900 dark:hover:text-white
                                   transition-colors duration-100 cursor-pointer select-none"
                      >
                        {label === "Copy" && copied
                          ? <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          : <Icon className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
                        }
                        {label === "Copy" && copied ? "Copied!" : label}
                      </button>
                    ))}
                    <div className="my-1.5 mx-3 h-px bg-gray-100 dark:bg-gray-800" />
                  </div>

                  {/* Visibility section label */}
                  <p className="px-3.5 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
                    Visibility
                  </p>

                  {dropdownItems.map(({ label, key }) => {
                    const isVisible = visible[key];
                    return (
                      <button
                        key={key}
                        onClick={() => toggleVisible(key)}
                        className="flex items-center justify-between gap-2.5 rounded-md
                                   mx-2 px-3 py-2.5 text-sm text-left
                                   w-[calc(100%-1rem)]
                                   text-gray-700 dark:text-gray-300
                                   hover:bg-gray-100 dark:hover:bg-gray-800
                                   hover:text-gray-900 dark:hover:text-white
                                   active:bg-gray-200 dark:active:bg-gray-700
                                   focus-visible:outline-none focus-visible:ring-2
                                   focus-visible:ring-blue-500
                                   transition-colors duration-100 cursor-pointer select-none"
                      >
                        <span className="flex items-center gap-2.5">
                          {isVisible ? (
                            <EyeOff className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
                          ) : (
                            <Eye className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
                          )}
                          {isVisible ? label : label.replace("Hide", "Show")}
                        </span>
                        <span
                          className={`
                          text-[10px] font-medium px-1.5 py-0.5 rounded
                          ${
                            isVisible
                              ? "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                              : "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                          }
                        `}
                        >
                          {isVisible ? "on" : "off"}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── TechStack Modal ── */}
      <TechStackModal
        isOpen={techStackOpen}
        onClose={() => setTechStackOpen(false)}
        onConfirm={(stack) => console.log("Selected:", stack)}
      />

      {/* ── ADDED: Raw Markdown Modal (like GitHub's Raw view) ── */}
      <AnimatePresence>
        {rawOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setRawOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed z-50 flex flex-col overflow-hidden bg-white border border-gray-200 shadow-2xl inset-4 sm:inset-8 md:inset-16 dark:bg-gray-950 dark:border-gray-800 rounded-xl"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Raw — {activeSlug ? `${activeSlug}.md` : "document.md"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {/* Copy inside modal */}
                  <Tooltip content={copied ? "Copied!" : "Copy raw content"}>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                                 rounded-md border border-gray-200 dark:border-gray-700
                                 text-gray-600 dark:text-gray-400
                                 hover:bg-gray-100 dark:hover:bg-gray-800
                                 transition-colors duration-150"
                    >
                      {copied
                        ? <><Check className="w-3.5 h-3.5 text-gray-900" /> Copied</>
                        : <><Copy className="w-3.5 h-3.5" /> Copy</>
                      }
                    </button>
                  </Tooltip>

                  {/* Download inside modal */}
                  <Tooltip content="Download .md">
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                                 rounded-md border border-gray-200 dark:border-gray-700
                                 text-gray-600 dark:text-gray-400
                                 hover:bg-gray-100 dark:hover:bg-gray-800
                                 transition-colors duration-150"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </Tooltip>

                  {/* Close */}
                  <button
                    onClick={() => setRawOpen(false)}
                    className="p-1.5 ml-1 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200
                               hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Raw content */}
              <div className="flex-1 overflow-auto">
                <pre className="p-4 font-mono text-xs leading-relaxed text-gray-800 break-words whitespace-pre-wrap sm:p-6 sm:text-sm dark:text-gray-200">
                  {content || "No content loaded."}
                </pre>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Toolbar;