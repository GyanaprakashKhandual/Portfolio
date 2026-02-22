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
    <div className="min-h-screen text-primary bg-primary">
      {/* ── Hero ── */}
      <section className="flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium bg-tertiary text-muted rounded-full border border-primary"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          33 technologies documented
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-primary"
        >
          Everything you need to master{" "}
          <span className="relative inline-block">
            modern tech
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mt-5 text-base leading-relaxed text-muted sm:text-lg"
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
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold btn-primary"
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
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold btn-secondary"
          >
            Browse Topics
          </button>
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-primary" />

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
                className="flex flex-col gap-3 p-5 transition-colors duration-200 border border-primary rounded-xl bg-tertiary hover:border-strong hover:shadow-md"
              >
                <div className="flex items-center justify-center border rounded-lg bg-card border-primary w-9 h-9">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm font-semibold text-primary">
                  {feature.title}
                </p>
                <p className="text-xs leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-primary" />

      {/* ── Tech Grid ── */}
      <section id="tech-grid" className="max-w-5xl px-6 py-16 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            Pick a technology
          </h2>
          <p className="mt-2 text-sm text-muted">
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
              className="px-4 py-2 text-sm font-medium transition-all duration-200 border rounded-lg text-secondary bg-tertiary border-primary hover:bg-inverse hover:text-inverse hover:border-strong"
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="px-6 py-16 border-t border-primary">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            Ready to dive in?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Choose any technology from the tab bar above or click a topic below
            to start reading. All content is free and updated regularly.
          </p>
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-6 py-3 mt-6 text-sm font-semibold btn-primary"
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
