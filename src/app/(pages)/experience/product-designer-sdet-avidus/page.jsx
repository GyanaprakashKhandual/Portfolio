"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight, Users, Zap } from "lucide-react";

export default function ProductDesignerSDETPage() {
  const experience = {
    company: "Avidus Interactive",
    position: "Product Designer & SDET",
    duration: "October 2025 - Present",
    location: "Remote",
    description:
      "Architect complete product design and quality assurance strategy. Single QA engineer managing company-wide testing infrastructure while designing innovative product interfaces.",
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
      "Security Testing",
      "Team Leadership",
      "System Design",
      "Figma",
      "Automation Testing",
      "CI-CD Pipeline",
      "Performance Optimization",
    ],
  };

  const achievements = [
    {
      title: "Zero Complaint Operations",
      description: "Managed 7 cross-functional teams with zero customer complaints",
      icon: Zap,
    },
    {
      title: "Single-Handed QA",
      description: "One engineer managing company-wide testing infrastructure",
      icon: Users,
    },
  ];

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
                Major Achievements
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {achievements.map((achievement, i) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900"
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="w-6 h-6 text-black dark:text-white shrink-0" />
                        <div>
                          <h3 className="mb-2 font-bold text-black dark:text-white">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
                  This is a unique hybrid role that combines product design expertise with quality assurance and SDET capabilities. I architect the complete user experience while ensuring the highest quality standards across all platforms.
                </p>
                <p>
                  As the sole QA engineer managing company-wide testing infrastructure, I have successfully led seven cross-functional teams to achieve zero-complaint operations. This demonstrates my ability to design scalable testing systems and maintain quality at scale.
                </p>
                <p>
                  My product design contributions ensure that quality is built-in from the inception, creating accessible, user-centric interfaces while maintaining robust backend systems with security and performance as core principles.
                </p>
                <p>
                  This role showcases my versatility in bridging the gap between product vision and quality assurance excellence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}