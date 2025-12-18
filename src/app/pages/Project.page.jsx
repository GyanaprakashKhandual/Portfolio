'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ExternalLink,
    Github,
    Code,
    X,
    ChevronRight,
    CheckCircle
} from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'Caffetest',
        description: 'Bug tracking application integrated with Anthropic OpenAI for intelligent test case generation and bug management.',
        shortDesc: 'AI-powered bug tracking & test management platform',
        viewAppUrl: '#',
        githubUrl: '#',
        codeUrl: '#',
        techStack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'WebSocket', 'Selenium'],
        fullDescription: `CafeTest is a comprehensive bug tracking application integrated with Anthropic OpenAI APIs. It provides enterprise-grade features for managing testing workflows and bug tracking.

Key Features:
• Access Management - Role-based access control for team members
• Project Management - Create and manage multiple projects with ease
• Folder Management - Organize test cases in hierarchical folder structures
• Sprint & Phase Management - Plan and track development cycles
• Multiple View Options - Kanban, Split, Card, and List views for flexible workflow
• Auto-save & Keystroke Features - Real-time synchronization of changes
• Full CRUD Operations - Complete test case, bug, and test report management
• Document & Excel Integration - Built-in Confluence-like documentation features
• Theme Support - Dark, Light, and System theme options
• Inbuilt Messaging - Real-time team communication
• AI-Powered Test Generation - VS Code extension that auto-generates test cases from Selenium scripts
• Smart Bug Detection - Automatically categorizes failed tests as bugs
• Dashboard & Reporting - Comprehensive analytics and insights
• Import/Export - Seamless data migration and backup
• Sharing & Ticketing - Collaborative features for team workflows

The standout feature is the VS Code integration that uses Anthropic APIs to automatically generate test cases from your Selenium automation scripts and categorize failures as bugs, making it infinitely more powerful than traditional tools like Jira and Zephyr.`,
        highlights: [
            'AI Test Case Generation from Selenium Scripts',
            'Role-Based Access Management',
            'Multi-view Dashboard (Kanban, Split, Card, List)',
            'Real-time Auto-save with Keystroke Detection',
            'Built-in Messaging & Collaboration',
            'Theme Customization (Dark/Light/System)',
            'VS Code Extension Integration',
            'Import/Export & Sharing Features'
        ],
        images: [
            '/projects/cafetest-1.jpg',
            '/projects/cafetest-2.jpg',
            '/projects/cafetest-3.jpg'
        ]
    },
    {
        id: 2,
        name: 'Project Demo 2',
        description: 'Demo project placeholder for future projects.',
        shortDesc: 'Coming soon...',
        viewAppUrl: 'https://caffetest.vercel.app',
        githubUrl: 'https://github.com/GyanaprakashKhandual/Caffetest-web',
        codeUrl: 'https://github.com/GyanaprakashKhandual/Caffetest-app',
        techStack: ['Coming Soon'],
        fullDescription: 'This project space is reserved for upcoming projects. More details will be added soon.',
        highlights: [
            'Coming Soon...'
        ]
    }
];

function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [showDetails, setShowDetails] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <div className="min-h-screen pt-8 pb-16 transition-colors duration-300 bg-white dark:bg-black">
            {/* Main Content - Split View */}
            <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                    {/* Left Side - Project List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4 lg:col-span-2"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                onClick={() => {
                                    setSelectedProject(project);
                                    setShowDetails(true);
                                }}
                                whileHover={{ y: -2 }}
                                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${selectedProject.id === project.id
                                        ? 'border-black dark:border-white bg-white dark:bg-white text-black dark:text-black  '
                                        : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white hover:border-gray-400 dark:hover:border-gray-600'
                                    }`}
                            >
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold">{project.name}</h3>
                                    <p className="text-sm opacity-80">{project.shortDesc}</p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.techStack.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 text-xs rounded font-medium ${selectedProject.id === project.id
                                                        ? 'bg-white dark:bg-black text-black dark:text-white'
                                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span
                                                className={`px-2 py-1 text-xs rounded font-medium ${selectedProject.id === project.id
                                                        ? 'bg-white dark:bg-black text-black dark:text-white'
                                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                    }`}
                                            >
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 mt-4">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.viewAppUrl}
                                            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded font-medium text-sm transition-all ${selectedProject.id === project.id
                                                    ? 'bg-black dark:bg-black text-white dark:text-white hover:opacity-80'
                                                    : 'bg-black dark:bg-white text-white dark:text-black hover:shadow-md'
                                                }`}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.githubUrl}
                                            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded font-medium text-sm transition-all ${selectedProject.id === project.id
                                                    ? 'bg-black dark:bg-black text-white dark:text-white hover:opacity-80'
                                                    : 'bg-black dark:bg-white text-white dark:text-black hover:shadow-md'
                                                }`}
                                        >
                                            <Github className="w-4 h-4" />
                                            Backend
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.codeUrl}
                                            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded font-medium text-sm transition-all ${selectedProject.id === project.id
                                                    ? 'bg-black dark:bg-black text-white dark:text-white hover:opacity-80'
                                                    : 'bg-black dark:bg-white text-white dark:text-black hover:shadow-md'
                                                }`}
                                        >
                                            <Github className="w-4 h-4" />
                                            Frontend
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Side - Project Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3"
                    >
                        <div className="sticky p-6 overflow-y-auto bg-white border border-gray-300 rounded-lg top-20 dark:border-gray-700 dark:bg-gray-900">
                            <div className="space-y-6">
                                {/* Project Header */}
                                <div>
                                    <h2 className="mb-2 text-3xl font-bold text-black dark:text-white">
                                        {selectedProject.name}
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                {/* Full Description */}
                                <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
                                    <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                                        Overview
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line dark:text-gray-300">
                                        {selectedProject.fullDescription}
                                    </p>
                                </div>

                                {/* Highlights */}
                                <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
                                    <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                                        Key Features
                                    </h3>
                                    <div className="space-y-3">
                                        {selectedProject.highlights.map((highlight, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                    {highlight}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
                                    <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="px-3 py-1.5 text-sm font-medium rounded-full bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Modal View */}
            <AnimatePresence>
                {showDetails && window.innerWidth < 1024 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowDetails(false)}
                        className="fixed inset-0 z-40 bg-black/50 dark:bg-white/10 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showDetails && window.innerWidth < 1024 && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 left-0 right-0 z-50 w-full rounded-t-2xl border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black max-h-[90vh] overflow-y-auto lg:hidden"
                    >
                        <div className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-black dark:text-white">
                                    {selectedProject.name}
                                </h2>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setShowDetails(false)}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                                >
                                    <X className="w-6 h-6 text-black dark:text-white" />
                                </motion.button>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300">
                                {selectedProject.fullDescription}
                            </p>

                            <div>
                                <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                                    Key Features
                                </h3>
                                <div className="space-y-2">
                                    {selectedProject.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                {highlight}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-sm font-medium rounded-full bg-black dark:bg-white text-white dark:text-black"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ProjectsPage;