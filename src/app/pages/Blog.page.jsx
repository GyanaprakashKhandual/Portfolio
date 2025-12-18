"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          {/* Icon Container */}
          <motion.div
            variants={itemVariants}
            animate="animate"
            className="mb-8"
          >
            <motion.div
              variants={floatingVariants}
              className="flex items-center justify-center w-24 h-24 border-2 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
            >
              <BookOpen
                className="w-12 h-12 text-zinc-700 dark:text-zinc-300"
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6 text-center">
            <h1 className="mb-4 text-5xl font-bold text-transparent md:text-6xl bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text">
              Blog Coming Soon
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mb-8 text-center"
          >
            <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m currently working on bringing you insightful articles,
              tutorials, and insights from my journey in full-stack development,
              AI integration, and cybersecurity.
            </p>
          </motion.div>

          {/* Status Box */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-md p-6 mb-8 border rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-400 mt-1.5"></div>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">
                  No Active Blogs Yet
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  I don&apos;t have any specific blog posts planned for
                  immediate publication. However, I&apos;m actively planning to
                  launch this blog section with high-quality content in the
                  future.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Coming */}
          <motion.div
            variants={itemVariants}
            className="grid w-full max-w-2xl grid-cols-1 gap-4 mb-8 md:grid-cols-2"
          >
            {[
              {
                title: "Web Development",
                description:
                  "Deep dives into React, Next.js, and modern frontend architectures",
              },
              {
                title: "Backend Insights",
                description:
                  "Server design patterns, APIs, and database optimization techniques",
              },
              {
                title: "AI & Automation",
                description:
                  "Integrating AI models and building intelligent applications",
              },
              {
                title: "Security & Hacking",
                description:
                  "Cybersecurity tips, pentesting techniques, and ethical hacking",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 transition-all duration-300 bg-white border rounded-lg border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg dark:bg-zinc-900/50"
              >
                <h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 font-semibold text-white transition-shadow duration-300 rounded-lg bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:shadow-lg"
            >
              Get Notified
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-semibold transition-all duration-300 border-2 rounded-lg text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg"
            >
              Back to Home
            </motion.a>
          </motion.div>

          {/* Footer Message */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Follow my social media for updates and announcements</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
