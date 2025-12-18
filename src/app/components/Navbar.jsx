'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Coffee, Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

export default function Navbar() {
    const router = useRouter();
    const [isDark, setIsDark] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/work' },
        { name: 'Experience', path: '/experience' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' },
        { name: 'Help', path: '/help' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const handleNavigation = (path) => {
        router.push(path);
        setIsMobileMenuOpen(false);
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo Section */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => handleNavigation('/')}
                        >
                            <FaCoffee className="w-6 h-6 sm:w-7 sm:h-7 text-black dark:text-white" />
                            <span className="text-xl sm:text-2xl font-bold text-black dark:text-white ml-2">
                                Gyan&#39;s
                            </span>
                        </motion.div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavigation(link.path)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>

                        {/* Right Section - Theme Toggle & Mobile Menu */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Theme Toggle Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleTheme}
                                className="p-2 rounded-md bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Toggle theme"
                            >
                                <AnimatePresence mode="wait">
                                    {isDark ? (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Sun className="w-5 h-5 text-black dark:text-white" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Moon className="w-5 h-5 text-black dark:text-white" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleMobileMenu}
                                className="lg:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5 text-black dark:text-white" />
                                ) : (
                                    <Menu className="w-5 h-5 text-black dark:text-white" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-sm z-40 lg:hidden"
                            onClick={toggleMobileMenu}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 z-50 lg:hidden"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-center gap-2">
                                    <Coffee className="w-6 h-6 text-black dark:text-white" />
                                    <span className="text-xl font-bold text-black dark:text-white">
                                        GVV
                                    </span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={toggleMobileMenu}
                                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                                >
                                    <X className="w-5 h-5 text-black dark:text-white" />
                                </motion.button>
                            </div>

                            {/* Mobile Menu Links */}
                            <div className="p-4 sm:p-6 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        onClick={() => handleNavigation(link.path)}
                                        className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-colors"
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Mobile Menu Footer */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-800">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Theme
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleTheme}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        {isDark ? (
                                            <>
                                                <Sun className="w-4 h-4" />
                                                <span className="text-sm font-medium">Light</span>
                                            </>
                                        ) : (
                                            <>
                                                <Moon className="w-4 h-4" />
                                                <span className="text-sm font-medium">Dark</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}