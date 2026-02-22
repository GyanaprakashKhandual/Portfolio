"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Bell,
  ChevronRight,
  GitBranch,
  Clock,
  Flag,
  Share2,
  X,
  Send,
  CheckCircle2,
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
  Check,
  Layers, // ← Slate icon (new import only)
  Flame,
  Trees,
  Gem,
  Snowflake,
  Crown,
  Waves,
  Heart,
  Wrench,
  Flower,
  Sword,
} from "lucide-react";
import { Tooltip } from "../ui/Tooltip.ui";
import TechStackModal from "../window/Tech.stack.modal";
import { useTheme } from "@/app/context/Theme.context";
import { useSelector } from "react-redux";
import { selectActiveSlug } from "@/app/lib/feature/tab/tab.slice";
import { useMdContent } from "@/app/context/Markdown.context";
import { FaCoffee } from "react-icons/fa";

// ─── Theme icon resolver ───────────────────────────────────────────────────────
// Maps the icon string from THEMES registry → actual Lucide component.
// Add new entries here whenever you add a new theme to the registry.
const THEME_ICON_MAP = {
  Sun,
  Moon,
  Layers,
  Flame,
  Trees,
  Gem,
  Sword,
     Snowflake,
    //  Crown,
    //  Waves,
    //  Heart,
    //  Wrench,
    //  Flower,
  // Trees, Flower2, etc. — add as you import them above
};

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
  onToggleToolbar = () => {},
  onToggleLeftSidebar = () => {},
  onToggleOutlineSidebar = () => {},
  onStickyChange = () => {},
}) => {
  const { theme, toggleTheme, setThemeById, themes, mounted } = useTheme();
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [techStackOpen, setTechStackOpen] = useState(false);
  const activeSlug = useSelector(selectActiveSlug);
  const { content } = useMdContent();
  const [copied, setCopied] = useState(false);
  const [rawOpen, setRawOpen] = useState(false);
  const [visible, setVisible] = useState({
    toolbar: true,
    leftSidebar: true,
    outlineSidebar: true,
  });
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

  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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

  const handleActionClick = (label) => {
    if (label === "Copy") handleCopy();
    if (label === "Raw") setRawOpen(true);
    if (label === "Download") handleDownload();
  };

  const router = useRouter();

  const toggleSticky = (key) => {
    setSticky((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      // Wire sidebar/outline sticky back to the layout
      if (key === "sidebar" || key === "outline") {
        onStickyChange(key, !prev[key]);
      }
      return next;
    });
  };

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
          bg-primary
          border-b border-primary
          px-2 sm:px-4
          shrink-0
          ${className}
        `}
      >
        <div className="flex items-center w-8 shrink-0 sm:w-24">
          <Tooltip content="Open Docs Menu" position="top-right">
            <button
              onClick={() => setTechStackOpen(true)}
              aria-label="Toggle sidebar"
              className="p-1.5 rounded text-muted hover:text-primary hover:bg-tertiary transition-colors duration-150"
            >
              <Menu className="w-5 h-5" />
            </button>
          </Tooltip>
        </div>
        <div className="flex flex-1 items-center justify-center gap-0.5 sm:gap-1">
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
                      ? "text-primary font-medium"
                      : "text-muted hover:text-primary"
                  }
                `}
              >
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="toolbar-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-strong rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-0.5 shrink-0">
          <div className="hidden md:flex items-center gap-0.5">
            {actions.map(({ icon: Icon, label }) => (
              <Tooltip
                key={label}
                content={label === "Copy" && copied ? "Copied!" : label}
              >
                <button
                  aria-label={label}
                  onClick={() => handleActionClick(label)}
                  className="p-2 transition-colors duration-150 rounded text-muted hover:text-primary hover:bg-tertiary"
                >
                  {label === "Copy" && copied ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </button>
              </Tooltip>
            ))}
          </div>
          <Tooltip content="Edit On Github">
            <button
              onClick={() =>
                router.push(
                  `https://github.com/GyanaprakashKhandual/Portfolio/blob/main/src/app/note`,
                )
              }
              className="p-2 transition-colors duration-150 rounded text-muted hover:text-primary hover:bg-tertiary"
            >
              <Edit className="w-4 h-4" />
            </button>
          </Tooltip>
          <Tooltip content={themeLabel}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 transition-colors duration-150 rounded text-muted hover:text-primary hover:bg-tertiary"
            >
              <ThemeIcon className="w-4 h-4" />
            </button>
          </Tooltip>
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
                      ? "bg-tertiary text-primary"
                      : "text-muted hover:text-primary hover:bg-tertiary"
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
                             bg-card
                             border border-primary
                             rounded-lg shadow-lg shadow-black/10
                             top-full w-48 sm:w-52"
                >
                  <p className="px-3.5 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">
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
                                 mx-2 px-3 py-2.5 text-xs sm:text-sm text-left
                                 w-[calc(100%-1rem)]
                                 text-secondary
                                 hover:bg-tertiary hover:text-primary
                                 transition-colors duration-100 cursor-pointer select-none"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-muted shrink-0" />
                        {label}
                      </span>
                      <span
                        className={`
                          relative inline-flex h-4 w-7 shrink-0 rounded-full
                          border transition-colors duration-200
                          ${
                            sticky[key]
                              ? "bg-inverse border-strong"
                              : "bg-tertiary border-primary"
                          }
                        `}
                      >
                        <span
                          className={`
                            inline-block h-3 w-3 mt-0.5 rounded-full
                            bg-primary
                            shadow transition-transform duration-200
                            ${sticky[key] ? "translate-x-3.5" : "translate-x-0.5"}
                          `}
                        />
                      </span>
                    </button>
                  ))}

                  {/* ── Theme Picker ── added below Sticky, no existing line touched ── */}
                  {mounted && themes && themes.length > 0 && (
                    <>
                      <div className="my-1.5 mx-3 h-px bg-primary" />
                      <p className="px-3.5 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">
                        Theme
                      </p>
                      {themes.map(({ id, label, icon }) => {
                        const IconComponent = THEME_ICON_MAP[icon] ?? Sun;
                        const isActive = theme === id;
                        return (
                          <button
                            key={id}
                            onClick={() => setThemeById(id)}
                            className="flex items-center justify-between gap-2.5 rounded-md
                                       mx-2 px-3 py-2.5 text-xs sm:text-sm text-left
                                       w-[calc(100%-1rem)]
                                       text-secondary
                                       hover:bg-tertiary hover:text-primary
                                       transition-colors duration-100 cursor-pointer select-none"
                          >
                            <span className="flex items-center gap-2.5">
                              <IconComponent className="w-3.5 h-3.5 text-muted shrink-0" />
                              {label}
                            </span>
                            {isActive && (
                              <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
                      ? "bg-tertiary text-primary"
                      : "text-muted hover:text-primary hover:bg-tertiary"
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
                  className="max-h-48 absolute right-0 z-50 py-1.5 mt-1 origin-top-right
                             bg-card
                             border border-primary
                             rounded-lg shadow-lg shadow-black/10
                             top-full w-48 sm:w-52"
                >
                  <div className="md:hidden">
                    <p className="px-3.5 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">
                      Actions
                    </p>
                    {actions.map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        onClick={() => {
                          handleActionClick(label);
                          setDropdownOpen(false);
                        }}
                        className="flex items-center gap-2.5 rounded-md
                                   mx-2 px-3 py-2.5 text-xs sm:text-sm text-left
                                   w-[calc(100%-1rem)]
                                   text-secondary
                                   hover:bg-tertiary hover:text-primary
                                   transition-colors duration-100 cursor-pointer select-none"
                      >
                        {label === "Copy" && copied ? (
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        ) : (
                          <Icon className="w-3.5 h-3.5 text-muted shrink-0" />
                        )}
                        {label === "Copy" && copied ? "Copied!" : label}
                      </button>
                    ))}
                    <div className="my-1.5 mx-3 h-px bg-primary" />
                  </div>
                  <p className="px-3.5 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">
                    Visibility
                  </p>
                  {dropdownItems.map(({ label, key }) => {
                    const isVisible = visible[key];
                    return (
                      <button
                        key={key}
                        onClick={() => toggleVisible(key)}
                        className="flex items-center justify-between gap-2.5 rounded-md
                                   mx-2 px-3 py-2.5 text-xs sm:text-sm text-left
                                   w-[calc(100%-1rem)]
                                   text-secondary
                                   hover:bg-tertiary hover:text-primary
                                   transition-colors duration-100 cursor-pointer select-none"
                      >
                        <span className="flex items-center gap-2.5">
                          {isVisible ? (
                            <EyeOff className="w-3.5 h-3.5 text-muted shrink-0" />
                          ) : (
                            <Eye className="w-3.5 h-3.5 text-muted shrink-0" />
                          )}
                          {isVisible ? label : label.replace("Hide", "Show")}
                        </span>
                        <span
                          className={`
                          text-[10px] font-medium px-1.5 py-0.5 rounded
                          ${
                            isVisible
                              ? "bg-tertiary text-muted"
                              : "bg-inverse text-inverse"
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
      <TechStackModal
        isOpen={techStackOpen}
        onClose={() => setTechStackOpen(false)}
        onConfirm={(stack) => console.log("Selected:", stack)}
      />
      <AnimatePresence>
        {rawOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setRawOpen(false)}
              className="fixed inset-0 z-50 bg-overlay backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed z-50 flex flex-col overflow-hidden border shadow-2xl bg-card border-primary inset-2 sm:inset-4 md:inset-8 lg:inset-16 rounded-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 border-b border-primary sm:px-4 sm:py-3 shrink-0">
                <div className="flex items-center min-w-0 gap-2">
                  <FileText className="w-4 h-4 text-muted shrink-0" />
                  <span className="text-xs font-medium truncate text-primary sm:text-sm">
                    Raw — {activeSlug ? `${activeSlug}.md` : "document.md"}
                  </span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Tooltip content={copied ? "Copied!" : "Copy raw content"}>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium
                                 rounded-md border border-primary
                                 text-muted
                                 hover:bg-tertiary hover:text-primary
                                 transition-colors duration-150"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-primary" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy
                        </>
                      )}
                    </button>
                  </Tooltip>
                  <Tooltip content="Download .md">
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium
                                 rounded-md border border-primary
                                 text-muted
                                 hover:bg-tertiary hover:text-primary
                                 transition-colors duration-150"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </Tooltip>
                  <button
                    onClick={() => setRawOpen(false)}
                    className="p-1.5 ml-1 rounded-md text-muted hover:text-primary hover:bg-tertiary transition-colors duration-150"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-auto">
                <pre className="p-3 font-mono text-xs leading-relaxed break-words whitespace-pre-wrap text-secondary sm:p-4 md:p-6 sm:text-sm">
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
