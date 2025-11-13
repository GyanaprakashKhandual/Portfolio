/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Github, Linkedin, ExternalLink, Code, TestTube, Briefcase, Shield, Wrench, FileText, GitBranch, Calendar, Award } from 'lucide-react';
import { FaCoffee } from 'react-icons/fa';

const MainContent = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const skills = {
        development: ['Express.js', 'Node.js', 'Next.js', 'React.js', 'Framer Motion', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL'],
        testing: ['Selenium', 'Playwright', 'Rest Assured', 'Grafana', 'Nikto', 'Postman', 'DBUnit', 'JMeter', 'Cypress'],
        ethicalHacking: ['Kali Linux', 'Bash Scripting', 'Metasploit', 'Networking', 'Python Scripting', 'Wireshark', 'Nmap', 'Burp Suite'],
        management: ['Qodex.ai', 'Jira', 'Google Workspace', 'Microsoft Workspace', 'Notion', 'Slack', 'Asana', 'ClickUp', 'ChatGPT', 'Claude AI']
    };

    const stats = [
        { label: 'Full-Stack Projects', value: '13+', icon: Code },
        { label: 'Frontend Projects', value: '7+', icon: Briefcase },
        { label: 'Test Automation Projects', value: '43+', icon: TestTube },
        { label: 'Security Test Projects', value: '6+', icon: Shield },
        { label: 'Team Hacking Projects', value: '3', icon: Shield },
        { label: 'Code Lines Written', value: '23.34L+', icon: FileText },
        { label: 'Experience', value: '1+ Year', icon: Calendar },
        { label: 'GitHub Repos', value: '142+', icon: GitBranch },
        { label: 'Reports Generated', value: '500+', icon: FileText },
        { label: 'Certifications', value: '8+', icon: Award }
    ];

    const testimonials = [
        {
            name: 'Mukul Ramdev',
            role: 'Product Manager',
            text: 'Gyanaprakash delivered exceptional work on our testing infrastructure. His attention to detail and automation expertise saved us countless hours.'
        },
        {
            name: 'Ankhisika',
            role: 'Senior Developer',
            text: 'Working with Gyanaprakash was a pleasure. His full-stack skills and testing knowledge made our project seamless from start to finish.'
        },
        {
            name: 'Adishree Agrawal',
            role: 'Team Lead',
            text: 'One of the best QA engineers I\'ve worked with. His AI integration skills and automation frameworks are truly impressive.'
        }
    ];

    return (
        <div className="pt-16">
            <section className="pt-8 pb-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div style={{ opacity }} className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', duration: 0.8 }}
                            className="inline-block"
                        >

                            <img
                                src="https://res.cloudinary.com/dvytvjplt/image/upload/v1751987213/ChatGPT_Image_Jul_8_2025_08_34_59_PM_abltqo.png"
                                alt="GK"
                                className="w-42 h-42 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover   border-4 border-amber-500 mx-auto"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
                        >
                            Hi, I&apos;m{' '}
                            <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                Gyana prakash Khandual
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                        >
                            Full-Stack Developer • AI Integrator • Automation Testing Expert
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto"
                        >
                            21 years old with a year of professional experience in testing and front-end engineering.
                            Building interactive applications and automating testing workflows with AI.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/GyanaprakashKhandual"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <Github className="w-5 h-5" />
                                GitHub
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://caffetest.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <FaCoffee className="w-5 h-5" />
                                Caffetest
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="max-w-4xl mx-auto mt-20"
                    >
                        <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8   border border-amber-200">
                            <div className="flex items-start gap-4 mb-4">
                                <Coffee className="w-8 h-8 text-amber-600 shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">CafeTest</h3>
                                    <p className="text-gray-600 mb-4">
                                        A complete issue tracking, bug tracking, and test management product integrated with Visual Studio Code,
                                        GitHub, and OpenAI. Live issue tracker powered by AI to automate manual testing efforts with in-built
                                        documentation and sheets.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">VS Code Integration</span>
                                        <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">GitHub Integration</span>
                                        <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">OpenAI Powered</span>
                                        <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">Automation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {stats.map((stat, i) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="text-center p-6 bg-white rounded-xl shadow-lg"
                                >
                                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-amber-600" />
                                    <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-gray-900 mb-16"
                    >
                        Skills & Technologies
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Code className="w-8 h-8 text-blue-600" />
                                <h3 className="text-2xl font-bold text-gray-900">Development</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skills.development.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium   cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <TestTube className="w-8 h-8 text-green-600" />
                                <h3 className="text-2xl font-bold text-gray-900">Testing</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skills.testing.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium   cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="w-8 h-8 text-red-600" />
                                <h3 className="text-2xl font-bold text-gray-900">Ethical Hacking</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skills.ethicalHacking.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium   cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-br from-purple-50 to-violet-50 rounded-2xl p-8 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Wrench className="w-8 h-8 text-purple-600" />
                                <h3 className="text-2xl font-bold text-gray-900">Management & AI Tools</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skills.management.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium   cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-gray-900 mb-16"
                    >
                        What People Say
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl p-8 shadow-xl"
                            >
                                <div className="mb-4">
                                    <svg className="w-10 h-10 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600 mb-6 italic">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainContent;