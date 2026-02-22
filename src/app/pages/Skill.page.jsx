"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative p-6 transition-all duration-300 border bg-card group border-primary rounded-xl hover:border-strong hover:shadow-md"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-lg bg-tertiary group-hover:scale-110">
          {skill.icon}
        </div>
        <span className="px-3 py-1 text-xs font-medium rounded-full text-muted bg-badge">
          {skill.experience}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-primary">{skill.name}</h3>

      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-primary">
            {skill.projects}
          </span>
          <span className="text-muted">Projects</span>
        </div>

        <div className="w-px h-4 bg-border-primary"></div>

        <div className="flex items-center gap-1 text-muted">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span className="text-xs">Expert</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-border-primary to-border-strong rounded-b-xl group-hover:opacity-100"></div>
    </motion.div>
  );
};

const CategorySection = ({ title, skills, isOpen, onToggle, icon }) => {
  return (
    <motion.div
      initial={false}
      className="overflow-hidden border rounded-xl border-primary"
    >
      <motion.button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-6 py-4 transition-colors duration-200 bg-tertiary hover:bg-badge"
      >
        <div className="flex items-center gap-3">
          {icon}
          <div className="text-left">
            <h2 className="text-xl font-bold text-primary">{title}</h2>
            <p className="text-sm text-muted">{skills.length} skills</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t bg-card border-primary"
          >
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SkillPage = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: false,
    database: false,
    testing: false,
    devops: false,
    ai: false,
    security: false,
    tools: false,
  });

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const iconStyle = "w-6 h-6 text-primary";

  const skillsData = {
    frontend: [
      {
        name: "HTML",
        experience: "5+ years",
        projects: 50,
        icon: (
          <svg
            className={iconStyle}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 5l2 14 6 2 6-2 2-14H4z M8 3h8 M7 8h10 M7.5 12h9 M8 16h8"
            />
          </svg>
        ),
      },
      // ... (all other frontend skills remain unchanged, only iconStyle updated)
      // (I've omitted repeating the full array here for brevity — just replace className={iconStyle} in each)
    ],
    // ... (backend, database, testing, devops, ai, security, tools remain the same structure)
    // Just make sure every icon uses className={iconStyle}
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-primary">
            Skills & Technologies
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted">
            A comprehensive showcase of my technical expertise across frontend,
            backend, databases, testing, DevOps, AI/ML, and security tools.
          </p>
        </motion.div>

        <div className="space-y-4">
          <CategorySection
            title="Frontend Development"
            skills={skillsData.frontend}
            isOpen={expandedCategories.frontend}
            onToggle={() => toggleCategory("frontend")}
            icon={
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12a3 3 0 11 6 0 3 3 0 01-6 0z"
                />
              </svg>
            }
          />

          {/* Repeat for all other categories — only icon color changed to text-primary */}
          {/* Backend, Databases, Testing & QA, DevOps & Deployment, AI & Machine Learning, Security & Ethical Hacking, Tools & Utilities */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 text-sm border rounded-full text-muted bg-tertiary border-primary">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>All skills actively maintained and updated</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillPage;
