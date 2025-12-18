"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  TestTube,
  Database,
  Shield,
  Users,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    company: "Abydos Interactive",
    position: "Quality Assurance Engineer",
    duration: "January 2025 - September 2025",
    description:
      "Led comprehensive QA and testing initiatives across multiple platforms",
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
    ],
  },
  {
    company: "Avidus Interactive",
    position: "Product Designer & SDET",
    duration: "October 2025 - Present",
    description:
      "Architect complete product design and quality assurance strategy",
    highlights: [
      "Designed complete front-end UI for web and mobile applications from scratch",
      "Collaborated with UI/UX designers and front-end developers",
      "Created accessible and user-centric product interfaces",
      "Designed backend systems with security and performance focus",
      "Managed quality assurance across entire organization",
      "Led seven cross-functional teams to zero-complaint operations",
      "Single QA engineer managing company-wide testing and infrastructure",
    ],
    skills: [
      "Product Design",
      "UI/UX Design",
      "SDET",
      "Frontend Architecture",
      "Backend Design",
      "Security",
      "Team Leadership",
      "System Design",
    ],
  },
];

function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState(0);

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 transition-colors duration-300 bg-white dark:bg-black">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl px-4 mx-auto mb-16 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl dark:text-white">
            My Experience
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 sm:text-xl dark:text-gray-300">
            A journey of quality assurance excellence, product design
            innovation, and team leadership across dynamic organizations
          </p>
        </div>
      </motion.div>

      {/* Experience Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl px-4 mx-auto space-y-6 sm:px-6 lg:px-8"
      >
        {experiences.map((exp, index) => {
          return (
            <motion.div key={index} variants={itemVariants} className="group">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? -1 : index)
                }
                className="relative overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer dark:border-gray-700 dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-md"
              >
                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start flex-1 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 text-white bg-black rounded-lg shrink-0 dark:bg-white dark:text-black"
                      >
                        <Briefcase className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-xl font-bold text-black sm:text-2xl dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="mb-2 text-sm text-gray-700 sm:text-base dark:text-gray-300">
                          {exp.company}
                        </p>
                        <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </motion.div>
                  </div>

                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>

                  {/* Expanded Content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: expandedIndex === index ? 1 : 0,
                      height: expandedIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-gray-300 dark:border-gray-700">
                      <h4 className="mb-4 text-sm font-semibold tracking-wider text-black uppercase dark:text-white">
                        Key Highlights
                      </h4>
                      <ul className="mb-6 space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <ArrowRight className="w-4 h-4 mt-1 text-black shrink-0 dark:text-white" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <h4 className="mb-3 text-sm font-semibold tracking-wider text-black uppercase dark:text-white">
                        Tech Stack & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-6xl px-4 mx-auto mt-20 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:gap-6">
          {[
            { label: "Years Active", value: "1+" },
            { label: "Teams Managed", value: "7" },
            { label: "Platforms", value: "3+" },
            { label: "Zero Complaints", value: "✓" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-6 text-center transition-shadow bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-900 hover:shadow-md"
            >
              <p className="mb-2 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                {stat.value}
              </p>
              <p className="text-xs text-gray-700 sm:text-sm dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Competencies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-6xl px-4 mx-auto mt-16 sm:px-6 lg:px-8"
      >
        <h2 className="mb-8 text-2xl font-bold text-center text-black sm:text-3xl dark:text-white">
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { name: "Automation Testing", icon: Code },
            { name: "API Testing", icon: Database },
            { name: "Performance Testing", icon: Shield },
            { name: "Team Management", icon: Users },
          ].map((tech, i) => {
            const TechIcon = tech.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 text-center transition-all bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-md"
              >
                <TechIcon className="w-8 h-8 mx-auto mb-3 text-black dark:text-white" />
                <p className="font-semibold text-black dark:text-white">
                  {tech.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default ExperiencePage;
