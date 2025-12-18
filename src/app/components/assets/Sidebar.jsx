"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Code,
    Database,
    Cloud,
    Wrench,
    TestTube,
    Shield,
    Zap,
    Lock,
    ChevronRight,
} from "lucide-react";

/**
 * Menu items configuration
 * Defines the sidebar navigation structure with sections and items
 */
const menuItems = [
    {
        header: "Development",
        items: [
            { name: "Frontend", path: "/skills/frontend-tech-stacks", icon: Code },
            { name: "Backend", path: "/skills/backend", icon: Database },
            { name: "Database", path: "/skills/database", icon: Database },
            { name: "Cloud", path: "/skills/cloud", icon: Cloud },
            { name: "Tools", path: "/skills/tools", icon: Wrench },
        ],
    },
    {
        header: "Testing",
        items: [
            { name: "Functional", path: "/skills/testing/functional", icon: TestTube },
            { name: "Security", path: "/skills/testing/security", icon: Shield },
            { name: "API", path: "/skills/testing/api", icon: Zap },
            { name: "Performance", path: "/skills/testing/performance", icon: Zap },
            { name: "Tools", path: "/skills/testing/tools", icon: Wrench },
        ],
    },
    {
        header: "Cyber Security",
        items: [{ name: "Security", path: "/skills/cybersecurity", icon: Lock }],
    },
];

/**
 * Sidebar Component
 * Responsive navigation sidebar with collapsible functionality
 * Features hamburger menu toggle and smooth animations
 */
function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);

    /**
     * Toggle sidebar open/close state
     */
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    /**
     * Handle navigation to different routes
     * @param {string} path - The route path to navigate to
     */
    const handleNavigation = (path) => {
        window.location.href = path;
        if (window.innerWidth < 1024) {
            setIsOpen(false);
        }
    };

    /**
     * Animation variants for sidebar width transition
     */
    const sidebarVariants = {
        open: { width: "16rem" },
        closed: { width: "2.5rem" },
    };

    /**
     * Animation variants for mobile overlay
     */
    const overlayVariants = {
        open: { opacity: 1 },
        closed: { opacity: 0, pointerEvents: "none" },
    };

    /**
     * Check if the current path is active
     * @param {string} path - The path to check
     * @returns {boolean} True if path matches current pathname
     */
    const isActive = (path) => pathname === path;

    return (
        <div className="flex w-full max-h-15">
            {/* Mobile overlay - appears when sidebar is open on mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={overlayVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        onClick={toggleSidebar}
                        className="fixed inset-0 z-20 bg-black/50 dark:bg-white/10 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar container */}
            <motion.aside
                variants={sidebarVariants}
                initial="open"
                animate={isOpen ? "open" : "closed"}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="top-0 left-0 z-30 h-screen pb-8 overflow-x-hidden overflow-y-auto bg-white border-b border-gray-300 max-h-15 mt-15 dark:border-gray-700 dark:bg-black lg:relative lg:sticky lg:top-0 lg:h-auto lg:max-h-screen"
            >
                {/* Sidebar header with hamburger menu and title */}
                <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-6 bg-white border-t border-b border-gray-300 dark:bg-black dark:border-gray-700">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleSidebar}
                        className="p-2 text-black transition-all bg-transparent rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Toggle sidebar"
                    >
                        <Menu className="w-5 h-5" />
                    </motion.button>
                    {isOpen && (
                        <h2 className="text-lg font-bold text-black dark:text-white">
                            Skills
                        </h2>
                    )}
                </div>

                {/* Navigation menu */}
                <nav className="px-4 py-8 space-y-8">
                    {menuItems.map((section, sectionIndex) => (
                        <motion.div
                            key={sectionIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sectionIndex * 0.1 }}
                            className="space-y-3"
                        >
                            {/* Section header - shows first character when closed */}
                            <h3 className="px-4 text-xs font-bold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                                {isOpen ? section.header : section.header.charAt(0)}
                            </h3>

                            {/* Menu items list */}
                            <div className="space-y-1">
                                {section.items.map((item, itemIndex) => {
                                    const Icon = item.icon;
                                    const active = isActive(item.path);

                                    return (
                                        <motion.div
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: sectionIndex * 0.1 + itemIndex * 0.05,
                                            }}
                                            className="relative"
                                        >
                                            {/* Navigation button with icon and label */}
                                            <motion.button
                                                onClick={() => handleNavigation(item.path)}
                                                whileHover={{ x: 4 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${active
                                                    ? "bg-black dark:bg-white text-white dark:text-black shadow-md"
                                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                                    }`}
                                                tooltip-data={item.name}
                                                tooltip-placement="right"
                                            >
                                                {/* Icon - always visible */}
                                                <Icon className="flex-shrink-0 w-5 h-5" />

                                                {/* Label and chevron - only visible when sidebar is open */}
                                                {isOpen && (
                                                    <>
                                                        <span className="flex-1 text-sm font-medium text-left">
                                                            {item.name}
                                                        </span>
                                                        {active && (
                                                            <ChevronRight className="flex-shrink-0 w-4 h-4" />
                                                        )}
                                                    </>
                                                )}
                                            </motion.button>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </nav>
            </motion.aside>
        </div>
    );
}

export default Sidebar;