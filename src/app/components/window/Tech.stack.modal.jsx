"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, Monitor, Server, TestTube2, Check } from "lucide-react";

/* ─────────────────────────────────────────────
   Tech Stack Data — categorized
───────────────────────────────────────────── */
const TABS = [
  {
    label: "Language",
    value: "language",
    icon: Code2,
    items: [
      { label: "C", value: "c" },
      { label: "C++", value: "c++" },
      { label: "C#", value: "c#" },
      { label: "Java", value: "java" },
      { label: "JavaScript", value: "javascript" },
      { label: "TypeScript", value: "typescript" },
      { label: "Python", value: "python" },
      { label: "GO", value: "go" },
      { label: "PHP", value: "php" },
      { label: "Kotlin", value: "kotlin" },
    ],
  },
  {
    label: "Frontend",
    value: "frontend",
    icon: Monitor,
    items: [
      { label: "ReactJS", value: "reactjs" },
      { label: "NextJS", value: "nextjs" },
      { label: "VueJS", value: "vuejs" },
      { label: "AngularJS", value: "angularjs" },
      { label: "HTML", value: "html" },
      { label: "CSS", value: "css" },
      { label: "Flutter", value: "flutter" },
    ],
  },
  {
    label: "Backend",
    value: "backend",
    icon: Server,
    items: [
      { label: "NodeJS", value: "nodejs" },
      { label: "ExpressJS", value: "expressjs" },
      { label: "RestAPI", value: "restapi" },
      { label: "GraphQL", value: "graphql" },
      { label: "Spring Boot", value: "spring-boot" },
      { label: "Security", value: "security" },
      { label: "MongoDB", value: "mongodb" },
      { label: "MySQL", value: "mysql" },
      { label: "PostgreSQL", value: "postgresql" },
      { label: "Redis", value: "redis" },
    ],
  },
  {
    label: "Testing",
    value: "testing",
    icon: TestTube2,
    items: [
      { label: "Cypress", value: "cypress" },
      { label: "Selenium", value: "selenium" },
      { label: "Playwright", value: "playwright" },
      { label: "Appium", value: "appium" },
      { label: "Rest Assured", value: "rest-assured" },
    ],
  },
];

/* ─────────────────────────────────────────────
   TechStackModal
───────────────────────────────────────────── */
const TechStackModal = ({ isOpen, onClose, onConfirm }) => {
  const [activeTab, setActiveTab] = useState("language");
  const [selected, setSelected] = useState([]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Reset tab on open
  useEffect(() => {
    if (isOpen) setActiveTab("language");
  }, [isOpen]);

  const toggleItem = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleConfirm = () => {
    if (onConfirm) onConfirm(selected);
    onClose();
  };

  const activeItems = TABS.find((t) => t.value === activeTab)?.items ?? [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-overlay backdrop-blur-[2px]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="fixed z-50 flex flex-col w-full max-w-lg overflow-hidden -translate-x-1/2 -translate-y-1/2 border shadow-2xl bg-card border-primary top-1/2 left-1/2 rounded-xl"
            style={{ maxHeight: "90vh" }}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-primary shrink-0">
              <div>
                <h2 className="text-sm font-semibold text-primary">
                  Select Tech Stack
                </h2>
                <p className="mt-0.5 text-xs text-muted">
                  {selected.length > 0
                    ? `${selected.length} selected`
                    : "Choose the technologies for this project"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-muted hover:text-primary hover:bg-tertiary transition-colors duration-150"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Tabs ── */}
            <div className="flex items-center gap-0.5 px-5 pt-3 shrink-0">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.value;
                const Icon = tab.icon;
                const tabSelectedCount = tab.items.filter((i) =>
                  selected.includes(i.value),
                ).length;

                return (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`
                      relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium
                      rounded-t-md transition-colors duration-150
                      ${
                        isActive
                          ? "text-primary"
                          : "text-muted hover:text-primary hover:bg-tertiary"
                      }
                    `}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                    {tabSelectedCount > 0 && (
                      <span
                        className={`
                          ml-0.5 inline-flex items-center justify-center
                          h-4 min-w-4 px-1 rounded-full text-[10px] font-semibold
                          ${
                            isActive
                              ? "bg-inverse text-inverse"
                              : "bg-badge text-muted"
                          }
                        `}
                      >
                        {tabSelectedCount}
                      </span>
                    )}

                    {/* Animated underline */}
                    {isActive && (
                      <motion.span
                        layoutId="techstack-tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab border separator */}
            <div className="h-px bg-primary shrink-0" />

            {/* ── Items grid ── */}
            <div className="flex-1 px-5 py-4 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="grid grid-cols-2 gap-2 sm:grid-cols-3"
                >
                  {activeItems.map((item) => {
                    const isSelected = selected.includes(item.value);
                    return (
                      <button
                        key={item.value}
                        onClick={() => toggleItem(item.value)}
                        className={`
                          relative flex items-center gap-2 px-3 py-2.5 rounded-lg
                          text-sm font-medium text-left
                          border transition-all duration-150
                          ${
                            isSelected
                              ? "bg-inverse text-inverse border-strong"
                              : "bg-card text-secondary border-primary hover:border-strong hover:bg-tertiary"
                          }
                        `}
                      >
                        {/* Check indicator */}
                        <span
                          className={`
                            flex items-center justify-center w-4 h-4 rounded-full shrink-0
                            border transition-all duration-150
                            ${
                              isSelected
                                ? "bg-inverse border-inverse"
                                : "border-primary"
                            }
                          `}
                        >
                          {isSelected && (
                            <Check className="w-2.5 h-2.5 text-inverse" />
                          )}
                        </span>
                        {item.label}
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-t border-primary shrink-0">
              <button
                onClick={() => setSelected([])}
                disabled={selected.length === 0}
                className="text-xs transition-colors duration-150 text-muted hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Clear all
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-3.5 py-2 text-sm rounded-lg text-muted hover:bg-tertiary transition-colors duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={selected.length === 0}
                  className="px-4 py-2 text-sm font-medium btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Confirm{selected.length > 0 ? ` (${selected.length})` : ""}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TechStackModal;
