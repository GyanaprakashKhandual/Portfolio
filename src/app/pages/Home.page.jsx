'use client'
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Homepage() {
    const [isDark, setIsDark] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com',
            color: 'hover:text-gray-800 dark:hover:text-gray-400',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com',
            color: 'hover:text-blue-600 dark:hover:text-blue-400',
        },
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:hello@example.com',
            color: 'hover:text-red-600 dark:hover:text-red-400',
        },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    return (
        <div
            className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'
                } min-h-screen transition-all duration-300`}
        >
            {/* Navbar */}
            <Navbar isDark={isDark} setIsDark={setIsDark} />

            {/* Hero Section */}
            <motion.section
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div variants={containerVariants}>
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            Hey, I'm <span className="text-blue-600">Leo</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className={`text-lg md:text-xl mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}
                        >
                            A passionate Full Stack Developer specializing in creating beautiful, responsive, and user-centric web applications. With 5+ years of experience, I transform ideas into stunning digital solutions.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className={`text-base mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'
                                }`}
                        >
                            I specialize in Next.js, React, and modern CSS frameworks to build scalable applications with exceptional UI/UX. My focus is on clean code, performance optimization, and creating seamless user experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-black text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
                            >
                                View My Work <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all ${isDark
                                        ? 'border-white text-white hover:bg-white hover:text-black'
                                        : 'border-black text-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                Download CV
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="flex gap-6">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`text-2xl transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'
                                            } ${link.color}`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Right - Profile Image */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'
                                } flex items-center justify-center overflow-hidden`}
                        >
                            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`} />
                            <motion.div
                                className="relative w-full h-full flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={`text-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                    <div className="text-6xl mb-4">👨‍💻</div>
                                    <p className="text-xl font-semibold">Leo</p>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Full Stack Developer
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Divider */}
            <div
                className={`${isDark ? 'border-gray-800' : 'border-gray-200'
                    } border-t`}
            />

            {/* Footer */}
            <footer
                className={`${isDark ? 'bg-gray-900' : 'bg-white'
                    } py-12 transition-all duration-300`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <motion.div {...fadeInUp}>
                            <h3 className="text-lg font-bold mb-4">Leo</h3>
                            <p
                                className={`${isDark ? 'text-gray-400' : 'text-gray-600'
                                    } text-sm`}
                            >
                                Full Stack Developer crafting digital experiences with passion.
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul
                                className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                            >
                                <li>
                                    <a href="#projects" className="hover:text-blue-600 transition">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#experience" className="hover:text-blue-600 transition">
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a href="#blogs" className="hover:text-blue-600 transition">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Social */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                            <h4 className="font-semibold mb-4">Social</h4>
                            <ul
                                className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                            >
                                <li>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition flex items-center gap-2"
                                    >
                                        GitHub <ExternalLink className="w-3 h-3" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition flex items-center gap-2"
                                    >
                                        LinkedIn <ExternalLink className="w-3 h-3" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition flex items-center gap-2"
                                    >
                                        YouTube <ExternalLink className="w-3 h-3" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://leetcode.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition flex items-center gap-2"
                                    >
                                        LeetCode <ExternalLink className="w-3 h-3" />
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Contact */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                            <h4 className="font-semibold mb-4">Get In Touch</h4>
                            <p
                                className={`${isDark ? 'text-gray-400' : 'text-gray-600'
                                    } text-sm mb-4`}
                            >
                                Let's collaborate on amazing projects.
                            </p>
                            <a
                                href="mailto:hello@example.com"
                                className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition"
                            >
                                Send Email
                            </a>
                        </motion.div>
                    </div>

                    {/* Copyright */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.4 }}
                        className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'
                            } pt-8 text-center ${isDark ? 'text-gray-500' : 'text-gray-600'
                            } text-sm`}
                    >
                        <p>
                            © 2024 Leo Portfolio. All rights reserved. | Crafted with ❤️
                        </p>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
}