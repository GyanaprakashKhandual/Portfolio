import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Cloud, ChevronDown, Code, Zap, Lightbulb, Award } from 'lucide-react';

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(0);

  const experiences = [
    {
      id: 0,
      title: 'Frontend Developer & QA Automation Engineer',
      company: 'Avidus Interactive',
      location: 'Startup Environment',
      duration: 'January 2025 - Present',
      currentlyWorking: true,
      startDate: 'January 2025',
      endDate: 'Present',
      period: '1 Year +',
      roles: [
        'Full-Stack Frontend Development',
        'Test Automation Engineering',
        'Quality Assurance Analyst',
        'Project Management Support'
      ],
      description: 'As a Frontend Developer and Complete Automation Test Engineer, I leverage cutting-edge technology and AI integration to deliver high-impact solutions at rapid velocity. My role encompasses comprehensive testing, frontend development, and strategic project oversight in a dynamic startup environment.',

      workEthics: {
        title: 'Professional Work Ethics',
        points: [
          'Priority-Based Task Management: Handle all available testing projects first; when testing bandwidth is free, transition seamlessly to frontend development tasks',
          'Always Busy, Always Productive: Maintain consistently packed schedule with strategic task prioritization',
          'Quality First Approach: Never compromise on code quality or testing rigor regardless of timeline pressure'
        ]
      },

      specialAbilities: {
        title: 'Special Abilities & Achievements',
        highlights: [
          {
            icon: Zap,
            title: 'AI-Powered Development',
            desc: 'Leverage artificial intelligence to generate 40,000+ lines of production-ready code daily, dramatically accelerating development velocity in startup environments'
          },
          {
            icon: Code,
            title: 'Full Application Testing',
            desc: 'Complete comprehensive application testing suite in a single day with precision and thoroughness'
          },
          {
            icon: Lightbulb,
            title: 'Full-Stack Development Sprint',
            desc: 'Deliver complete full-stack applications including frontend, backend, and testing within 3 days through efficient workflow and AI integration'
          },
          {
            icon: Award,
            title: 'Real-Time Custom Reporting',
            desc: 'Developed proprietary real-time tracking-based testing reports that are independent, custom-generated, and company-compliant'
          }
        ]
      },

      innovation: {
        title: 'Innovation & Tools Development',
        initiatives: [
          {
            name: 'VSCode Extension',
            desc: 'Custom-built Visual Studio Code extension enabling integrated development and testing workflows for improved team efficiency'
          },
          {
            name: 'Chrome Extension',
            desc: 'Developed chrome extension for streamlined browser-based testing and real-time debugging capabilities'
          },
          {
            name: 'Internal Testing Platform',
            desc: 'Built proprietary website platform enabling team collaboration on build, test, and deployment workflows in optimized speed environment'
          }
        ]
      },

      automation: {
        title: 'Automation & Process Optimization',
        strategy: 'Root Cause Analysis & Automation: I systematically identify repetitive tasks and bottlenecks in our workflow, then develop targeted automation solutions to eliminate manual work. This approach has significantly reduced redundant operations and increased team productivity, allowing us to focus on high-value development activities.',
        achievements: [
          'Identified recurring workflow patterns and designed automated solutions',
          'Eliminated manual repetitive tasks through custom tool development',
          'Created flexible, scalable testing environment for rapid team collaboration',
          'Established standardized processes that other teams now adopt'
        ]
      },

      technologies: [
        'ReactJS',
        'NextJS',
        'Cypress',
        'Selenium',
        'Playwright',
        'Postman',
        'REST API Testing',
        'Artificial Intelligence',
        'VSCode Extension API',
        'Chrome Extension API',
        'Real-Time Reporting',
        'Custom Automation Tools'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className=" bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-amber-200 relative overflow-hidden"
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
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
            Professional Experience
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Driving innovation through AI-powered development and automation
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden border-2 border-amber-200 shadow-lg"
            >
              {/* Job Header */}
              <button
                onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                className="w-full  bg-linear-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 p-6 sm:p-7 transition-all text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      {exp.currentlyWorking && (
                        <span className="inline-block  bg-linear-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                          🎯 Currently Working
                        </span>
                      )}
                    </div>

                    <p className="text-amber-600 font-semibold text-base sm:text-lg mb-2">
                      {exp.company}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-600 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-600" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedJob === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-amber-600" />
                  </motion.div>
                </div>
              </button>

              {/* Expanded Content */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: expandedJob === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-white border-t-2 border-amber-200 p-6 sm:p-8 space-y-8">
                  {/* Overview */}
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Roles */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-amber-600" />
                      Key Roles & Responsibilities
                    </h4>
                    <motion.div
                      className="space-y-3"
                      variants={container}
                      initial="hidden"
                      animate={expandedJob === index ? "show" : "hidden"}
                    >
                      {exp.roles.map((role, idx) => (
                        <motion.div
                          key={idx}
                          variants={item}
                          className="flex gap-3 items-start bg-amber-50 p-3 rounded-lg border border-amber-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                          <p className="text-gray-700 text-sm sm:text-base">{role}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Work Ethics */}
                  <div className=" bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      {exp.workEthics.title}
                    </h4>
                    <motion.div
                      className="space-y-3"
                      variants={container}
                      initial="hidden"
                      animate={expandedJob === index ? "show" : "hidden"}
                    >
                      {exp.workEthics.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          variants={item}
                          className="text-gray-700 text-sm sm:text-base"
                        >
                          <span className="font-semibold text-blue-600">{point.split(':')[0]}:</span>
                          {point.split(':')[1]}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Special Abilities */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-600" />
                      {exp.specialAbilities.title}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {exp.specialAbilities.highlights.map((highlight, idx) => {
                        const IconComponent = highlight.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={expandedJob === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className=" bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-100 hover:border-amber-300 transition-all"
                          >
                            <div className="flex items-start gap-3">
                              <div className=" bg-linear-to-br from-amber-600 to-orange-600 p-3 rounded-lg shrink-0">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900 mb-1">{highlight.title}</h5>
                                <p className="text-gray-700 text-xs sm:text-sm">{highlight.desc}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Innovation & Tools */}
                  <div className=" bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-purple-600" />
                      {exp.innovation.title}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {exp.innovation.initiatives.map((init, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={expandedJob === index ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white rounded-lg p-4 border border-purple-200"
                        >
                          <h5 className="font-bold text-purple-600 mb-2">{init.name}</h5>
                          <p className="text-gray-700 text-xs sm:text-sm">{init.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Automation & Optimization */}
                  <div className=" bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-green-600" />
                      {exp.automation.title}
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                      {exp.automation.strategy}
                    </p>
                    <motion.div
                      className="space-y-2"
                      variants={container}
                      initial="hidden"
                      animate={expandedJob === index ? "show" : "hidden"}
                    >
                      {exp.automation.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          variants={item}
                          className="flex gap-3 items-start bg-white p-3 rounded-lg border border-green-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-600 mt-2 shrink-0" />
                          <p className="text-gray-700 text-sm sm:text-base">{achievement}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={expandedJob === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className=" bg-linear-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t-2 border-amber-200"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-amber-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Career Impact</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              My approach to professional development focuses on identifying bottlenecks and creating scalable automation solutions. By combining strong development skills with AI integration, I&apos;ve demonstrated the ability to deliver enterprise-grade applications rapidly while maintaining quality standards. My work ethics emphasize continuous optimization, team collaboration, and innovative problem-solving to drive meaningful business impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className=" bg-linear-to-br from-amber-100 to-orange-100 rounded-xl p-4 text-center border border-amber-300">
                <p className="text-2xl sm:text-3xl font-bold text-amber-600">40K+</p>
                <p className="text-gray-700 font-semibold text-xs sm:text-sm">Lines of Code Daily</p>
              </div>
              <div className=" bg-linear-to-br from-blue-100 to-cyan-100 rounded-xl p-4 text-center border border-blue-300">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">1 Day</p>
                <p className="text-gray-700 font-semibold text-xs sm:text-sm">Complete App Testing</p>
              </div>
              <div className=" bg-linear-to-br from-purple-100 to-pink-100 rounded-xl p-4 text-center border border-purple-300">
                <p className="text-2xl sm:text-3xl font-bold text-purple-600">3 Days</p>
                <p className="text-gray-700 font-semibold text-xs sm:text-sm">Full-Stack Application</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;