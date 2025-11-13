'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Github, Code, Briefcase, X, Cloud } from 'lucide-react';

// Cloud Component - Personal Bio
const About = () => (
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
      {/* Header Section */}
      <div className="mb-8 sm:mb-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2"
        >
          Gyana prakash Khandual
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base text-gray-600"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            Born: May 8, 2004
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600"></span>
            Age: 21 Years
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            Passionate Runner
          </span>
        </motion.div>
      </div>

      {/* Education Background */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-amber-200"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-amber-600" />
          Academic Foundation
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Bachelor of Science in <span className="font-semibold text-amber-600">Physics Honors</span> — While my academic background is in Physics, I&apos;ve channeled my analytical and logical reasoning into mastering software development. My deep understanding of problem-solving and systematic thinking has equipped me perfectly for this technological journey.
        </p>
      </motion.div>

      {/* Professional Overview */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-6 sm:mb-8"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Code className="w-5 h-5 text-orange-600" />
          Professional Expertise
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold text-amber-600">Full-Stack Developer & AI Innovator:</span> I specialize in building comprehensive web applications with seamless artificial intelligence integration. My approach combines cutting-edge technology with intuitive user experience design.
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold text-orange-600">Automation Engineer:</span> Expert in test automation frameworks with knowledge in ethical hacking and cybersecurity. I ensure every application is robust, secure, and performs optimally.
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold text-amber-600">Builder First Philosophy:</span> Whether it&apos;s software or mechanical engineering, I love building things. My passion drives me to create solutions that genuinely meet user needs and exceed expectations.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Development Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-orange-200"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-orange-600" />
          My Development Approach
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          I build products that users genuinely need. By integrating artificial intelligence strategically and understanding user requirements deeply, I create the perfect product with professional-grade interfaces. Every application I develop mirrors enterprise standards while maintaining simplicity and elegance. User needs drive my innovation; AI amplifies the solution.
        </p>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-amber-600" />
          What Defines Me
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            { title: 'Passionate Builder', desc: 'Creating meaningful solutions' },
            { title: 'AI Enthusiast', desc: 'Integrating intelligence into apps' },
            { title: 'Secure Developer', desc: 'Building with security first' },
            { title: 'User-Focused', desc: 'Solutions tailored to needs' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 4 }}
              className="bg-white rounded-xl p-4 sm:p-5 border border-amber-100 hover:border-amber-300 transition-colors"
            >
              <p className="font-semibold text-amber-600 text-sm sm:text-base">{item.title}</p>
              <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default About;

