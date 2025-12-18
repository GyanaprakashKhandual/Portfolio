"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Calendar,
    Award,
    BookOpen,
    Code,
    Shield,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

/**
 * Education data configuration
 */
const educationData = [
    {
        id: 1,
        degree: "From Standard One to Twelveth Standard",
        institution: "Utkal University, Bhubaneswar, Odisha",
        duration: "June 2021",
        grade: "A++",
        stream: "Science Stream",
        icon: BookOpen,
        color: "bg-black",
    },
    {
        id: 2,
        degree: "Bachelor of Computer Application (BCA)",
        institution: "Utkal University, Bhubaneswar, Odisha",
        duration: "July 2021 - July 2024",
        grade: "A++",
        stream: "Computer Science",
        icon: GraduationCap,
        color: "bg-black",
    },
    {
        id: 3,
        degree: "Software Development Engineering in Test (SDET)",
        institution: "Masai School",
        duration: "July 2024 - December 2024",
        grade: "A++",
        stream: "Quality Assurance & Testing",
        icon: Code,
        color: "bg-black",
    },
    {
        id: 4,
        degree: "Full Stack Web Development",
        institution: "Udemy",
        duration: "January 2025 - April 2025",
        grade: "A++",
        stream: "Web Development",
        icon: Code,
        color: "bg-black",
    },
    {
        id: 5,
        degree: "Ethical Hacking",
        institution: "Udemy",
        duration: "May 2025 - August 2025",
        grade: "A++",
        stream: "Cyber Security",
        icon: Shield,
        color: "bg-black",
    },
];

/**
 * Education Page Component
 * Displays educational qualifications in card format with smooth animations
 */
function EducationPage() {
    const [expandedCard, setExpandedCard] = useState(null);

    /**
     * Toggle card expansion
     * @param {number} id - Card ID to toggle
     */
    const toggleCard = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    /**
     * Container animation variants
     */
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    /**
     * Card animation variants
     */
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="min-h-screen px-4 py-12 bg-white dark:bg-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <GraduationCap className="w-12 h-12 text-black dark:text-white" />
                        <h1 className="text-4xl font-bold text-black md:text-5xl dark:text-white">
                            Education
                        </h1>
                    </div>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        My academic journey and professional certifications
                    </p>
                </motion.div>

                {/* Education Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {educationData.map((edu) => {
                        const Icon = edu.icon;
                        const isExpanded = expandedCard === edu.id;

                        return (
                            <motion.div
                                key={edu.id}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative"
                            >
                                <div className="overflow-hidden transition-all duration-300 bg-white border-2 border-gray-200 dark:bg-black dark:border-gray-800 rounded-xl hover:shadow-sm">
                                    {/* Card Header with Color Bar */}
                                    <div className={`${edu.color} h-2 w-full`} />

                                    {/* Card Content */}
                                    <div className="p-6">
                                        {/* Icon and Grade Badge */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`${edu.color} p-3 rounded-lg`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full dark:bg-gray-900">
                                                <Award className="w-4 h-4 text-yellow-500" />
                                                <span className="text-sm font-bold text-black dark:text-white">
                                                    {edu.grade}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Degree Title */}
                                        <h3 className="mb-2 text-xl font-bold leading-tight text-black dark:text-white">
                                            {edu.degree}
                                        </h3>

                                        {/* Institution */}
                                        <p className="mb-3 font-medium text-gray-600 dark:text-gray-400">
                                            {edu.institution}
                                        </p>

                                        {/* Duration */}
                                        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.duration}</span>
                                        </div>

                                        {/* Expandable Section */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: isExpanded ? "auto" : 0,
                                                opacity: isExpanded ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <BookOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                        Stream:
                                                    </span>
                                                </div>
                                                <p className="text-sm font-medium text-black dark:text-white">
                                                    {edu.stream}
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Expand/Collapse Button */}
                                        <button
                                            onClick={() => toggleCard(edu.id)}
                                            className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 transition-all duration-200 bg-gray-100 rounded-lg dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800"
                                        >
                                            <span className="text-sm font-medium text-black dark:text-white">
                                                {isExpanded ? "Show Less" : "Show More"}
                                            </span>
                                            {isExpanded ? (
                                                <ChevronUp className="w-4 h-4 text-black dark:text-white" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-black dark:text-white" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Summary Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="p-8 border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-xl dark:border-gray-700">
                        <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                            Educational Excellence
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
                            Consistently maintained A++ grade across all academic qualifications and professional certifications,
                            demonstrating dedication to continuous learning and excellence in technology domains including
                            web development, software testing, and cyber security.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default EducationPage;