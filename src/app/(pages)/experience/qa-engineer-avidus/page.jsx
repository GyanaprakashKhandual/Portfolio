"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";


export default function QAEngineerPage() {
  const experience = {
    company: "Abydos Interactive",
    position: "Quality Assurance Engineer",
    duration: "January 2025 - September 2025",
    location: "Remote",
    description:
      "Led comprehensive QA and testing initiatives across multiple platforms, ensuring quality excellence and zero-defect delivery.",
    highlights: [
      "Manual testing on applications, web, and mobile platforms",
      "Full-fledged automation testing using BDD Cucumber with CI-CD integration",
      "Performance testing and regression testing with advanced frameworks",
      "API testing using REST-Assured, Grafana, Artillery, and Postman",
      "Backend optimization and database performance tuning",
      "WP2 Optimization for enhanced system performance",
    ],
    skills: [
      "Manual Testing",
      "Automation Testing",
      "BDD Cucumber",
      "CI-CD",
      "API Testing",
      "Performance Testing",
      "Grafana",
      "Postman",
      "REST-Assured",
      "Artillery",
      "Regression Testing",
      "Database Tuning",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      <div className="flex-1">
        <div className="min-h-screen pt-24 pb-16 transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl px-4 mx-auto mb-12 sm:px-6 lg:px-8"
          >
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-4 text-white bg-black rounded-lg shrink-0 dark:bg-white dark:text-black"
              >
                <Briefcase className="w-8 h-8" />
              </motion.div>
              <div className="flex-1">
                <h1 className="mb-3 text-4xl font-bold text-black sm:text-5xl dark:text-white">
                  {experience.position}
                </h1>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {experience.company}
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-12 text-lg text-gray-700 dark:text-gray-300">
              {experience.description}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl px-4 mx-auto space-y-12 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                Key Highlights
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {experience.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-4 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900"
                  >
                    <ArrowRight className="w-5 h-5 mt-1 text-black shrink-0 dark:text-white" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                Tech Stack & Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 text-sm font-medium text-white transition-shadow bg-black border border-black rounded-full dark:bg-white dark:text-black dark:border-white hover:shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900"
            >
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                About This Role
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  In this role, I spearheaded comprehensive quality assurance initiatives across web, mobile, and application platforms. I implemented robust testing strategies that ensured zero-defect delivery and maintained the highest quality standards.
                </p>
                <p>
                  My expertise in both manual and automated testing, combined with advanced performance and API testing capabilities, enabled the team to identify and resolve critical issues early in the development cycle.
                </p>
                <p>
                  The use of BDD Cucumber framework with CI-CD integration streamlined the testing process and improved collaboration between development and QA teams.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}