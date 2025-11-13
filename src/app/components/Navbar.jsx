'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    const navItems = [
        { name: 'About', href: '/about-me' },
        { name: 'Web Projects', href: '/web-projects' },
        { name: 'Open Source', href: '/open-source' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Contact', href: '/contact' }
    ];

    const handleNavigation = (href) => {
        router.push(href);
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-xl font-bold text-gray-900 cursor-pointer"
                        onClick={() => router.push('/')}
                    >
                        <Coffee className="w-6 h-6 text-amber-600" />
                        <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            Code & Test
                        </span>
                    </motion.div>

                    <div className="hidden lg:flex items-center gap-6">
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.name}
                                onClick={() => handleNavigation(item.href)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -2 }}
                                className="text-gray-600 hover:text-amber-600 transition-colors font-medium text-sm"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-900"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="lg:hidden border-t border-gray-200 bg-white"
                >
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavigation(item.href)}
                            className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                            {item.name}
                        </button>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;