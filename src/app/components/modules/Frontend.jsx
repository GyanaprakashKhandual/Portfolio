'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-6 transition-all duration-300 bg-white border group dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:scale-110">
                    {skill.icon}
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800">
                    {skill.experience}
                </span>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {skill.name}
            </h3>

            <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        {skill.projects}
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-400">Projects</span>
                </div>

                <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800"></div>

                <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-xs">Expert</span>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 rounded-b-xl group-hover:opacity-100"></div>
        </motion.div>
    );
};

const SkillsShowcase = () => {
    const skills = [
        {
            name: 'HTML',
            experience: '5+ years',
            projects: 50,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5l2 14 6 2 6-2 2-14H4z M8 3h8 M7 8h10 M7.5 12h9 M8 16h8" />
                </svg>
            )
        },
        {
            name: 'CSS',
            experience: '5+ years',
            projects: 50,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l2 16 6 2 6-2 2-16H4z M8 8h8 M7 12h10 M7 16h10" />
                </svg>
            )
        },
        {
            name: 'Bootstrap',
            experience: '4+ years',
            projects: 35,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18v16H3V4z M8 9h5c1.5 0 2.5 1 2.5 2.5S14.5 14 13 14H8V9z M8 14h6c1.5 0 2.5 1 2.5 2.5S15.5 19 14 19H8v-5z" />
                </svg>
            )
        },
        {
            name: 'Tailwind CSS',
            experience: '3+ years',
            projects: 45,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6c-2.5 0-4 1.5-4.5 4.5.75-1.5 1.63-2.06 2.63-1.69.57.14 1 .57 1.44 1.01C12.5 10.75 13.63 12 16 12c2.5 0 4-1.5 4.5-4.5-.75 1.5-1.63 2.06-2.63 1.69-.57-.14-1-.57-1.44-1.01C15.5 7.25 14.37 6 12 6zM7.5 12c-2.5 0-4 1.5-4.5 4.5.75-1.5 1.63-2.06 2.63-1.69.57.14 1 .57 1.44 1.01C8 16.75 9.13 18 11.5 18c2.5 0 4-1.5 4.5-4.5-.75 1.5-1.63 2.06-2.63 1.69-.57-.14-1-.57-1.44-1.01C11 13.25 9.87 12 7.5 12z" />
                </svg>
            )
        },
        {
            name: 'Framer Motion',
            experience: '2+ years',
            projects: 28,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v8l-8 8H4V4z M4 12h8" />
                </svg>
            )
        },
        {
            name: 'GSAP',
            experience: '3+ years',
            projects: 22,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            name: 'Material UI',
            experience: '3+ years',
            projects: 30,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7v10l10 5 10-5V7L12 2z M12 12l-8-4 M12 12v9 M12 12l8-4" />
                </svg>
            )
        },
        {
            name: 'Primer UI',
            experience: '2+ years',
            projects: 15,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18 M3 6h18 M3 18h18 M7 6v12 M17 6v12" />
                </svg>
            )
        },
        {
            name: 'Shadcn UI',
            experience: '2+ years',
            projects: 25,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16 M4 12h16 M4 18h16 M8 3v18 M16 3v18" />
                </svg>
            )
        },
        {
            name: 'React JS',
            experience: '4+ years',
            projects: 60,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a2 2 0 100-4 2 2 0 000 4z M12 3c-1.5 0-3.5.5-5 1.5 M12 3c1.5 0 3.5.5 5 1.5 M7 4.5C4 6.5 2 9 2 12s2 5.5 5 7.5 M17 4.5c3 2 5 4.5 5 7.5s-2 5.5-5 7.5 M12 21c-1.5 0-3.5-.5-5-1.5 M12 21c1.5 0 3.5-.5 5-1.5" />
                </svg>
            )
        },
        {
            name: 'Next JS',
            experience: '3+ years',
            projects: 40,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            name: 'Angular JS',
            experience: '3+ years',
            projects: 25,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L3 6l1.5 13L12 22l7.5-3L21 6 12 2z M12 6v12 M8 10l4-2 4 2 M8 14l4 2 4-2" />
                </svg>
            )
        },
        {
            name: 'Three JS',
            experience: '2+ years',
            projects: 18,
            icon: (
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7v10l10 5 10-5V7L12 2z M12 7v10 M7 9.5l5 2.5 5-2.5 M7 14.5l5 2.5 5-2.5" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black mt-15">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 text-sm border rounded-full text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>All skills actively maintained and updated</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SkillsShowcase;