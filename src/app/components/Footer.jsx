'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaCoffee } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <FaCoffee className="w-6 h-6 text-amber-500" />
                        <span className="text-xl font-bold">Code & Test</span>
                    </div>

                    <div className="flex gap-6">
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="https://github.com/GyanaprakashKhandual"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="mailto:gyanaprakashkhnadual@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </motion.a>
                    </div>

                    <div className="text-gray-400 text-sm text-center md:text-right">
                        © 2025 Gyana prakash Khandual. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;