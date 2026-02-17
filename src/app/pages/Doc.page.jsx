"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Layers, Zap } from "lucide-react";

const techs = [
  "C",
  "C++",
  "C#",
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "GO",
  "PHP",
  "NodeJS",
  "ExpressJS",
  "RestAPI",
  "GraphQL",
  "Spring Boot",
  "Security",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "ReactJS",
  "NextJS",
  "VueJS",
  "AngularJS",
  "HTML",
  "CSS",
  "Flutter",
  "Kotlin",
  "Cypress",
  "Selenium",
  "Playwright",
  "Appium",
  "Rest Assured",
];

const features = [
  {
    icon: BookOpen,
    title: "Basic to Advanced",
    description:
      "Every topic starts from zero and builds up to production-level depth — no experience required to get started.",
  },
  {
    icon: Code2,
    title: "Real Code Examples",
    description:
      "Every concept comes with clean, copy-ready code examples you can run immediately in your own projects.",
  },
  {
    icon: Layers,
    title: "Complete Coverage",
    description:
      "Languages, frameworks, databases, testing tools, and APIs — all documented in one place.",
  },
  {
    icon: Zap,
    title: "Practice Exercises",
    description:
      "Reinforce what you learn with exercises and challenges crafted for each topic and difficulty level.",
  },
];

function DocPageInner() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/docs/javascript");
  };

  const handleTechClick = (tech) => {
    const slug = tech.toLowerCase().replace(/\s+/g, "-");
    router.push(`/docs/${slug}`);
  };

  return (
    <div className="min-h-screen text-black bg-white dark:bg-black dark:text-white">
      {/* ── Hero ── */}
      <section className="flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-800"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          33 technologies documented
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Everything you need to master{" "}
          <span className="relative inline-block">
            modern tech
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mt-5 text-base leading-relaxed text-gray-500 sm:text-lg dark:text-gray-400"
        >
          Comprehensive documentation for every major language, framework,
          database, and testing tool — from basic syntax to advanced production
          patterns, with exercises included.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
          >
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("tech-grid")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors duration-200 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-gray-800"
          >
            Browse Topics
          </button>
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-gray-100 dark:border-gray-900" />

      {/* ── Features ── */}
      <section className="max-w-5xl px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex flex-col gap-3 p-5 transition-colors duration-200 border border-gray-100 rounded-xl dark:border-gray-900 bg-gray-50 dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700"
              >
                <div className="flex items-center justify-center bg-white border border-gray-200 rounded-lg w-9 h-9 dark:bg-black dark:border-gray-800">
                  <Icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </p>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-gray-100 dark:border-gray-900" />

      {/* ── Tech Grid ── */}
      <section id="tech-grid" className="max-w-5xl px-6 py-16 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Pick a technology
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Click any topic below to jump straight into the documentation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {techs.map((tech, i) => (
            <motion.button
              key={tech}
              onClick={() => handleTechClick(tech)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent"
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="px-6 py-16 border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Ready to dive in?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Choose any technology from the tab bar above or click a topic below
            to start reading. All content is free and updated regularly.
          </p>
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-6 py-3 mt-6 text-sm font-semibold text-white transition-opacity duration-200 bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
          >
            Start with JavaScript
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default function DocPage() {
  return (
    <Suspense fallback={null}>
      <DocPageInner />
    </Suspense>
  );
}
