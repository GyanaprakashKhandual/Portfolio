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
      className="relative p-6 transition-all duration-300 bg-white border group dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:scale-110">
          {skill.icon}
        </div>
        <span className="px-3 py-1 text-xs font-medium rounded-full text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800">
          {skill.experience}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {skill.name}
      </h3>

      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {skill.projects}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">Projects</span>
        </div>

        <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800"></div>

        <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
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

      <div className="absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 bg-linear-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 rounded-b-xl group-hover:opacity-100"></div>
    </motion.div>
  );
};

const CategorySection = ({ title, skills, isOpen, onToggle, icon }) => {
  return (
    <motion.div
      initial={false}
      className="overflow-hidden border rounded-xl border-zinc-200 dark:border-zinc-800"
    >
      <motion.button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-6 py-4 transition-colors duration-200 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <div className="flex items-center gap-3">
          {icon}
          <div className="text-left">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {skills.length} skills
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-t border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900"
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

  const iconStyle = "w-6 h-6 text-zinc-700 dark:text-zinc-300";

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
      {
        name: "CSS",
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
              d="M4 4l2 16 6 2 6-2 2-16H4z M8 8h8 M7 12h10 M7 16h10"
            />
          </svg>
        ),
      },
      {
        name: "Bootstrap",
        experience: "4+ years",
        projects: 35,
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
              d="M3 4h18v16H3V4z M8 9h5c1.5 0 2.5 1 2.5 2.5S14.5 14 13 14H8V9z M8 14h6c1.5 0 2.5 1 2.5 2.5S15.5 19 14 19H8v-5z"
            />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        experience: "3+ years",
        projects: 45,
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
              d="M12 6c-2.5 0-4 1.5-4.5 4.5.75-1.5 1.63-2.06 2.63-1.69.57.14 1 .57 1.44 1.01C12.5 10.75 13.63 12 16 12c2.5 0 4-1.5 4.5-4.5-.75 1.5-1.63 2.06-2.63 1.69-.57-.14-1-.57-1.44-1.01C15.5 7.25 14.37 6 12 6zM7.5 12c-2.5 0-4 1.5-4.5 4.5.75-1.5 1.63 2.06 2.63-1.69.57.14 1 .57 1.44 1.01C8 16.75 9.13 18 11.5 18c2.5 0 4-1.5 4.5-4.5-.75 1.5-1.63 2.06-2.63 1.69-.57-.14-1-.57-1.44-1.01C11 13.25 9.87 12 7.5 12z"
            />
          </svg>
        ),
      },
      {
        name: "Framer Motion",
        experience: "2+ years",
        projects: 28,
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
              d="M4 4h16v8l-8 8H4V4z M4 12h8"
            />
          </svg>
        ),
      },
      {
        name: "GSAP",
        experience: "3+ years",
        projects: 22,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "Material UI",
        experience: "3+ years",
        projects: 30,
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
              d="M12 2L2 7v10l10 5 10-5V7L12 2z M12 12l-8-4 M12 12v9 M12 12l8-4"
            />
          </svg>
        ),
      },
      {
        name: "Primer UI",
        experience: "2+ years",
        projects: 15,
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
              d="M3 12h18 M3 6h18 M3 18h18 M7 6v12 M17 6v12"
            />
          </svg>
        ),
      },
      {
        name: "Shadcn UI",
        experience: "2+ years",
        projects: 25,
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
              d="M4 6h16 M4 12h16 M4 18h16 M8 3v18 M16 3v18"
            />
          </svg>
        ),
      },
      {
        name: "React JS",
        experience: "4+ years",
        projects: 60,
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
              d="M12 12a2 2 0 100-4 2 2 0 000 4z M12 3c-1.5 0-3.5.5-5 1.5 M12 3c1.5 0 3.5.5 5 1.5 M7 4.5C4 6.5 2 9 2 12s2 5.5 5 7.5 M17 4.5c3 2 5 4.5 5 7.5s-2 5.5-5 7.5 M12 21c-1.5 0-3.5-.5-5-1.5 M12 21c1.5 0 3.5-.5 5-1.5"
            />
          </svg>
        ),
      },
      {
        name: "Next JS",
        experience: "3+ years",
        projects: 40,
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
              d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"
            />
          </svg>
        ),
      },
      {
        name: "Angular JS",
        experience: "3+ years",
        projects: 25,
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
              d="M12 2L3 6l1.5 13L12 22l7.5-3L21 6 12 2z M12 6v12 M8 10l4-2 4 2 M8 14l4 2 4-2"
            />
          </svg>
        ),
      },
      {
        name: "Three JS",
        experience: "2+ years",
        projects: 18,
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
              d="M12 2L2 7v10l10 5 10-5V7L12 2z M12 7v10 M7 9.5l5 2.5 5-2.5 M7 14.5l5 2.5 5-2.5"
            />
          </svg>
        ),
      },
    ],
    backend: [
      {
        name: "Node JS",
        experience: "4+ years",
        projects: 55,
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
              d="M12 2L2 7v10l10 5 10-5V7L12 2z"
            />
          </svg>
        ),
      },
      {
        name: "Express JS",
        experience: "4+ years",
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        ),
      },
      {
        name: "Nest JS",
        experience: "2+ years",
        projects: 18,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "REST API",
        experience: "4+ years",
        projects: 45,
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
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        name: "Socket.io",
        experience: "2+ years",
        projects: 15,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "Firebase",
        experience: "3+ years",
        projects: 28,
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        ),
      },
      {
        name: "OAuth",
        experience: "3+ years",
        projects: 22,
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
    ],
    database: [
      {
        name: "MongoDB",
        experience: "4+ years",
        projects: 42,
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
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7m0 0c0 2.21-3.582 4-8 4s-8-1.79-8-4m0 0c0-2.21 3.582-4 8-4s8 1.79 8 4"
            />
          </svg>
        ),
      },
      {
        name: "MySQL",
        experience: "4+ years",
        projects: 38,
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
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7"
            />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        experience: "3+ years",
        projects: 32,
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        ),
      },
      {
        name: "Firebase DB",
        experience: "2+ years",
        projects: 20,
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        ),
      },
    ],
    testing: [
      {
        name: "Cypress",
        experience: "2+ years",
        projects: 18,
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        ),
      },
      {
        name: "Selenium",
        experience: "2+ years",
        projects: 15,
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        ),
      },
      {
        name: "Playwright",
        experience: "1+ years",
        projects: 12,
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        ),
      },
      {
        name: "REST Assured",
        experience: "2+ years",
        projects: 14,
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        ),
      },
      {
        name: "Postman",
        experience: "3+ years",
        projects: 30,
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
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        name: "SOAP UI",
        experience: "2+ years",
        projects: 12,
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
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        name: "JMeter",
        experience: "2+ years",
        projects: 10,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "Artillery",
        experience: "1+ years",
        projects: 8,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "K6",
        experience: "1+ years",
        projects: 7,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
    ],
    devops: [
      {
        name: "Vercel",
        experience: "3+ years",
        projects: 35,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "Cloudinary",
        experience: "2+ years",
        projects: 25,
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
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        name: "AWS",
        experience: "2+ years",
        projects: 20,
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
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        ),
      },
      {
        name: "Netlify",
        experience: "3+ years",
        projects: 28,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "DigitalOcean",
        experience: "2+ years",
        projects: 15,
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        ),
      },
      {
        name: "GoDaddy",
        experience: "2+ years",
        projects: 12,
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        ),
      },
    ],
    ai: [
      {
        name: "OpenAI API",
        experience: "2+ years",
        projects: 18,
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12a3 3 0 11 6 0 3 3 0 01-6 0z"
            />
          </svg>
        ),
      },
      {
        name: "Anthropic API",
        experience: "1+ years",
        projects: 12,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "Gemini API",
        experience: "1+ years",
        projects: 10,
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12a3 3 0 11 6 0 3 3 0 01-6 0z"
            />
          </svg>
        ),
      },
      {
        name: "LLaMA Models",
        experience: "1+ years",
        projects: 8,
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
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        name: "Hugging Face",
        experience: "1+ years",
        projects: 9,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
    ],
    security: [
      {
        name: "Metasploit",
        experience: "2+ years",
        projects: 12,
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        name: "OWASP ZAP",
        experience: "2+ years",
        projects: 10,
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        name: "Burp Suite",
        experience: "2+ years",
        projects: 11,
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        name: "Nessus",
        experience: "1+ years",
        projects: 8,
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        ),
      },
      {
        name: "Social Engineering",
        experience: "2+ years",
        projects: 9,
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
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ],
    tools: [
      {
        name: "VS Code",
        experience: "5+ years",
        projects: 100,
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
      },
      {
        name: "Eclipse",
        experience: "2+ years",
        projects: 15,
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
      },
      {
        name: "GitHub",
        experience: "5+ years",
        projects: 80,
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
      },
      {
        name: "Git",
        experience: "5+ years",
        projects: 90,
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        ),
      },
      {
        name: "npm",
        experience: "4+ years",
        projects: 70,
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ),
      },
      {
        name: "Notion",
        experience: "3+ years",
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
      },
      {
        name: "Google Workspace",
        experience: "4+ years",
        projects: 60,
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
      },
      {
        name: "Docker",
        experience: "2+ years",
        projects: 20,
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "Figma",
        experience: "2+ years",
        projects: 22,
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
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Skills & Technologies
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
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
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
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

          <CategorySection
            title="Backend Development"
            skills={skillsData.backend}
            isOpen={expandedCategories.backend}
            onToggle={() => toggleCategory("backend")}
            icon={
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2M5 12a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            }
          />

          <CategorySection
            title="Databases"
            skills={skillsData.database}
            isOpen={expandedCategories.database}
            onToggle={() => toggleCategory("database")}
            icon={
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            }
          />

          <CategorySection
            title="Testing & QA"
            skills={skillsData.testing}
            isOpen={expandedCategories.testing}
            onToggle={() => toggleCategory("testing")}
            icon={
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            }
          />

          <CategorySection
            title="DevOps & Deployment"
            skills={skillsData.devops}
            isOpen={expandedCategories.devops}
            onToggle={() => toggleCategory("devops")}
            icon={
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />

          <CategorySection
            title="AI & Machine Learning"
            skills={skillsData.ai}
            isOpen={expandedCategories.ai}
            onToggle={() => toggleCategory("ai")}
            icon={
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            }
          />

          <CategorySection
            title="Security & Ethical Hacking"
            skills={skillsData.security}
            isOpen={expandedCategories.security}
            onToggle={() => toggleCategory("security")}
            icon={
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            }
          />

          <CategorySection
            title="Tools & Utilities"
            skills={skillsData.tools}
            isOpen={expandedCategories.tools}
            onToggle={() => toggleCategory("tools")}
            icon={
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            }
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 text-sm border rounded-full text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
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
