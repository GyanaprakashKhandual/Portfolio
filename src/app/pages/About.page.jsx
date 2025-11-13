'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code, Briefcase, X } from 'lucide-react';

import About from '../components/modules/About';
import Experience from '../components/modules/Experience';
import Education from '../components/modules/Education';
import Skill from '../components/modules/Skill';
import Github from '../components/modules/Github';
import { FaGithub } from 'react-icons/fa6';

const AboutPage = () => {
    const [activeSection, setActiveSection] = useState('personal');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { id: 'personal', label: 'About', icon: User, component: About },
        { id: 'education', label: 'Education', icon: GraduationCap, component: Education },
        { id: 'github', label: 'GitHub', icon: FaGithub, component: Github },
        { id: 'skills', label: 'Skills', icon: Code, component: Skill },
        { id: 'experience', label: 'Experience', icon: Briefcase, component: Experience }
    ];

    const renderContent = () => {
        const activeItem = menuItems.find(item => item.id === activeSection);
        const Component = activeItem?.component;
        return Component ? <Component /> : null;
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-amber-50 to-orange-50 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                dragConstraints={{
                    top: -100,
                    left: -20,
                    right: window.innerWidth - 260,
                    bottom: window.innerHeight - 320
                }}
                initial={{ x: -20, y: 100 }}
                className="fixed z-50 w-25"
            >
                <motion.div
                    layout
                    className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-amber-200"
                >
                    <div className="bg-linear-to-r from-amber-600 to-orange-600 px-3 py-2 flex justify-between items-center cursor-move">
                        <h3 className="text-white font-bold text-xs">Menu</h3>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:bg-white/20 p-0.5 rounded transition-colors"
                        >
                            {isMenuOpen ? <X className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-1.5 space-y-1.5">
                                {menuItems.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            whileHover={{ scale: 1.02, x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all text-xs ${activeSection === item.id
                                                ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            <IconComponent className="w-3.5 h-3.5" />
                                            <span className="font-medium">{item.label}</span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-1.5 text-[10px] text-gray-500 bg-white/80 rounded-lg px-2 py-1"
                >
                    Drag me anywhere!
                </motion.div>
            </motion.div>

            <div className="max-w-7xl mx-auto pt-8 lg:pt-16">
                <div className="">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;