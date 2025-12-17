'use client'
import React, { useState } from 'react';
import { Coffee, Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ isDark, setIsDark }) {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Projects', href: '#projects' },
        { name: 'Work', href: '#work' },
        { name: 'Experience', href: '#experience' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Health', href: '#health' },
        { name: 'Contact', href: '#contact' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <nav
            className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'
                } shadow-lg transition-all duration-300`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-3 cursor-pointer"
                    >
                        <Coffee className="w-8 h-8" />
                        <span className="text-2xl font-bold">Leo</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <motion.div
                        className="hidden md:flex items-center space-x-8"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                variants={itemVariants}
                                className={`${isDark
                                        ? 'hover:text-blue-400 transition-colors'
                                        : 'hover:text-blue-600 transition-colors'
                                    } text-sm font-medium`}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Theme Switcher & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-lg transition-all ${isDark
                                    ? 'bg-gray-800 hover:bg-gray-700'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-600" />
                            )}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden border-t ${isDark ? 'border-gray-700' : 'border-gray-200'
                            }`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    whileHover={{ x: 5 }}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isDark
                                            ? 'hover:bg-gray-800'
                                            : 'hover:bg-gray-100'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}