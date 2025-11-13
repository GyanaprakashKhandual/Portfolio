'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Github, Code, Briefcase, X, Cloud } from 'lucide-react';

const Education = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-amber-200 relative overflow-hidden"
    >
        {/* Cloud decorative elements */}
        <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 right-0 opacity-10 text-amber-600"
        >
            <Cloud className="w-24 h-24 sm:w-32 sm:h-32" />
        </motion.div>
        <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 left-0 opacity-10 text-orange-600"
        >
            <Cloud className="w-20 h-20 sm:w-28 sm:h-28" />
        </motion.div>

        <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
                Education & Certifications
            </h2>

            <div className="space-y-6 sm:space-y-8">
                {/* Bachelor of Science */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 sm:p-7 border-l-4 border-amber-600   hover:shadow-xl transition-shadow"
                >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Bachelor of Science - Physics Honours</h3>
                            <p className="text-amber-600 font-semibold text-sm sm:text-base mt-1">University</p>
                        </div>
                        <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                            July 2021 - July 2024
                        </span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Completed my undergraduate degree in Physics with honors, establishing a strong foundation in analytical thinking, problem-solving, and scientific methodology that directly translates to software development.
                    </p>
                </motion.div>

                {/* Software Development Engineering and Testing */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 sm:p-7 border-l-4 border-orange-600   hover:shadow-xl transition-shadow"
                >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Software Development Engineering & Test Automation</h3>
                            <p className="text-orange-600 font-semibold text-sm sm:text-base mt-1">Professional Certification</p>
                        </div>
                        <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                            July 2024 - January 2025
                        </span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Intensive 6-month program covering full-stack development practices, test automation frameworks, and quality assurance methodologies. Gained hands-on experience in building robust applications and ensuring software quality.
                    </p>
                </motion.div>

                {/* Full Stack Development - Udemy */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 sm:p-7 border-l-4 border-amber-600   hover:shadow-xl transition-shadow"
                >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Full Stack Web Development</h3>
                            <p className="text-amber-600 font-semibold text-sm sm:text-base mt-1">Udemy Certification</p>
                        </div>
                        <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                            4 Months Course
                        </span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Comprehensive course covering frontend technologies, backend development, databases, and modern development frameworks. Mastered full-stack development principles and best practices for building scalable web applications.
                    </p>
                </motion.div>

                {/* Ethical Hacking - Udemy */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-6 sm:p-7 border-l-4 border-orange-600   hover:shadow-xl transition-shadow"
                >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Ethical Hacking & Cybersecurity</h3>
                            <p className="text-orange-600 font-semibold text-sm sm:text-base mt-1">Udemy Certification</p>
                        </div>
                        <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                            3 Months Course
                        </span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        In-depth course on security principles, penetration testing, vulnerability assessment, and cybersecurity best practices. Equipped with knowledge to build secure applications and identify potential security threats.
                    </p>
                </motion.div>

                {/* Master in Computer Application - IGNOU */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-7 border-l-4 border-amber-600   hover:shadow-xl transition-shadow border-2"
                >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Master in Computer Applications (MCA)</h3>
                            <p className="text-amber-600 font-semibold text-sm sm:text-base mt-1">IGNOU Distance Learning - Currently Pursuing</p>
                        </div>
                        <span className="inline-block bg-linear-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                            🎓 In Progress
                        </span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Advanced postgraduate program in Computer Applications from Indira Gandhi National Open University (IGNOU). Focusing on advanced computer science concepts, software engineering, and specialized domains to complement my practical experience with theoretical depth.
                    </p>
                </motion.div>
            </div>

            {/* Summary */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t-2 border-amber-200"
            >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-amber-600" />
                    Educational Summary
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    My educational journey combines a strong physics foundation with cutting-edge technology certifications. I continuously upgrade my skills through industry-recognized courses while pursuing advanced computer science education. This multi-faceted approach ensures I stay at the forefront of technological innovation while maintaining academic rigor.
                </p>
            </motion.div>
        </div>
    </motion.div>
);


export default Education;