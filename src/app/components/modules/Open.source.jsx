'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Star, ExternalLink, Code, Zap, Brain, Shield, Users, TrendingUp, CheckCircle, Package, X } from 'lucide-react';

const OpenSourceShowcase = () => {
  const [activeTab, setActiveTab] = useState('caffetest');
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const extensions = {
    caffetest: {
      name: 'Caffetest Tracker',
      tagline: 'Intelligent Test Automation Tracking & AI-Powered Test Management',
      author: 'Gyana Prakash Khandual',
      installs: '5',
      rating: '0',
      price: 'Free',
      marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=gyanaprakashkhandual.caffetest-tracker',
      githubUrl: 'https://github.com/GyanaprakashKhandual',
      description: 'Seamlessly bridge your VS Code workspace with Caffetest web application. Write automation tests, track results, and let AI automatically generate test cases and bug reports—all without leaving your editor.',
      icon: '☕',
      features: [
        { icon: Brain, title: 'AI-Powered Documentation', desc: 'Automatically generates professional test cases and bug reports' },
        { icon: TrendingUp, title: 'Real-Time Tracking', desc: 'Monitor test execution history directly within VS Code' },
        { icon: Zap, title: 'Zero Manual Entry', desc: 'Eliminate tedious documentation work completely' },
        { icon: Code, title: 'Framework Support', desc: 'Works with Selenium, Cucumber, JUnit, TestNG, Page Object Model, and more' },
        { icon: Users, title: 'Team Visibility', desc: 'Track what your team is testing in real-time' },
        { icon: Shield, title: 'Duplicate Detection', desc: 'Smart detection prevents redundant test entries' },
        { icon: Zap, title: 'Instant Sync', desc: 'Results appear in your Caffetest dashboard immediately' },
        { icon: CheckCircle, title: 'Visual Test History', desc: 'Beautiful interface showing test status and trends' }
      ],
      highlights: [
        'Track end-to-end testing details',
        'Sync with Caffetest web application',
        'Automatically detect test results',
        'Manage test cases efficiently',
        'Integrate with your testing workflow'
      ]
    },
    selenium: {
      name: 'Selenium-Cucumber',
      tagline: 'Professional Selenium Java Step Definition Generator',
      author: 'Gyana Prakash Khandual',
      installs: '4,952',
      rating: '1',
      price: 'Free',
      marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=gyanaprakashkhandual.selenium-cucumber',
      githubUrl: 'https://github.com/GyanaprakashKhandual/VS-Code-Extension-Step-Definition-Generator',
      description: 'Professional Selenium Java step definition generator for Cucumber BDD testing with advanced features and code formatting.',
      icon: '🥒',
      features: [
        { icon: Brain, title: 'Smart Parameter Detection', desc: 'Automatically detects quoted strings, numbers, and angle bracket parameters' },
        { icon: Code, title: 'Professional Code Formatting', desc: 'Clean, well-structured Java code with proper indentation' },
        { icon: Package, title: 'Complete Method Templates', desc: 'Includes try-catch blocks, documentation, and Selenium patterns' },
        { icon: Shield, title: 'Duplicate Prevention', desc: 'Intelligent duplicate step detection and unique method naming' },
        { icon: Zap, title: 'Selection-based Generation', desc: 'Generate from selected text or entire file' },
        { icon: CheckCircle, title: 'Quick Actions Menu', desc: 'Easy access to all features via status bar' }
      ],
      highlights: [
        'Advanced Step Generation',
        'Multiple Generation Options',
        'Extensive Configuration',
        'Framework Support: Cucumber, TestNG, and JUnit',
        'Custom Import Management',
        'Multiple Formatting Options'
      ]
    }
  };

  const currentExt = extensions[activeTab];

  const menuItems = [
    { id: 'caffetest', label: 'Caffetest Tracker', icon: '☕' },
    { id: 'selenium', label: 'Selenium Cucumber', icon: '🥒' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Draggable Menu */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={{
          top: -100,
          left: -20,
          right: typeof window !== 'undefined' ? window.innerWidth - 260 : 1000,
          bottom: typeof window !== 'undefined' ? window.innerHeight - 320 : 600
        }}
        initial={{ x: 20, y: 100 }}
        className="fixed z-50 w-60"
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
              {isMenuOpen ? <X className="w-4 h-4" /> : <Code className="w-4 h-4" />}
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
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all text-xs ${
                      activeTab === item.id
                        ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
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

      {/* Hero Section */}
      <motion.section
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-4 lg:py-16"
      >
        <div className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200">
          <div className="bg-linear-to-r from-amber-600 to-orange-600 p-6 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-6xl lg:text-8xl bg-white rounded-2xl p-6 shadow-xl"
              >
                {currentExt.icon}
              </motion.div>
              <div className="text-center lg:text-left flex-1">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3">
                  {currentExt.name}
                </h2>
                <p className="text-lg lg:text-2xl text-amber-100 mb-4">
                  {currentExt.tagline}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    <Download className="w-4 h-4 inline mr-2" />
                    {currentExt.installs} installs
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-2" />
                    ({currentExt.rating})
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    {currentExt.price}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-12">
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              {currentExt.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href={currentExt.marketplaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-linear-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition-all"
              >
                <ExternalLink className="w-5 h-5 inline mr-2" />
                View on VS Code Marketplace
              </motion.a>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-amber-600" />
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentExt.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-200"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-600" />
              Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentExt.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-linear-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg border-2 border-amber-200 hover:shadow-xl transition-all"
                  >
                    <div className="bg-linear-to-r from-amber-600 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default OpenSourceShowcase;