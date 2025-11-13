'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Brain, Github, Globe, MessageSquare, FileText, Shield, 
  Layout, Grid, List, Layers, Image, Code, Bug, TestTube, 
  Folder, CheckCircle, Sparkles, Cloud, Database, Settings,
  Users, BarChart, Download, ExternalLink, ChevronLeft, ChevronRight
} from 'lucide-react';
import { FaCoffee } from 'react-icons/fa';

const CaffetestShowcase = () => {
  const [activeView, setActiveView] = useState(0);

  const views = [
    {
      title: 'Kanban View',
      image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224515/Screenshot_2025-10-23_163532_vw9zpf.png',
      description: 'Drag-and-drop task management with visual workflow'
    },
    {
      title: 'List View',
      image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224493/Screenshot_2025-10-23_175516_fibjzj.png',
      description: 'Detailed list view for comprehensive issue tracking'
    },
    {
      title: 'Card View',
      image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224479/Screenshot_2025-10-23_175546_netcwr.png',
      description: 'Clean card-based interface for quick overview'
    },
    {
      title: 'Split View',
      image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224445/Screenshot_2025-10-23_175838_jj2h0n.png',
      description: 'Multi-panel view for efficient multitasking'
    },
    {
      title: 'AI Chatbot',
      image: 'https://res.cloudinary.com/dvytvjplt/image/upload/v1761224342/Screenshot_2025-10-23_182638_feiea1.png',
      description: 'Intelligent assistant for voice-controlled test management'
    }
  ];

  const coreFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      desc: 'OpenAI integration automatically generates test cases and bug reports from your automation scripts'
    },
    {
      icon: Code,
      title: 'VS Code Integration',
      desc: 'Write automation tests in VS Code and sync instantly with Caffetest for seamless workflow'
    },
    {
      icon: MessageSquare,
      title: 'Voice Test Management',
      desc: 'Control everything with AI chatbot - filter bugs, generate reports, assign priorities by voice'
    },
    {
      icon: Bug,
      title: 'Auto Bug Creation',
      desc: 'Failed tests automatically create bugs and assign to correct projects and test types'
    },
    {
      icon: Github,
      title: 'GitHub Integration',
      desc: 'Extract test cases directly from GitHub repositories for instant synchronization'
    },
    {
      icon: Globe,
      title: 'Google Workspace',
      desc: 'Import bugs and test cases from Google Sheets and manage documents seamlessly'
    }
  ];

  const advancedFeatures = [
    {
      icon: Layout,
      title: 'Multiple Views',
      desc: 'Card, Sheet, Split, and Canvas views for flexible project visualization',
      items: ['Kanban Board', 'List View', 'Card Grid', 'Split Panel', 'Canvas Mode']
    },
    {
      icon: Shield,
      title: 'Access Control',
      desc: 'Granular permissions and role-based access for team security',
      items: ['Role Management', 'Permission Control', 'Team Hierarchy', 'Audit Logs']
    },
    {
      icon: TestTube,
      title: 'Test Management',
      desc: 'Complete test lifecycle management with automation support',
      items: ['Test Cases', 'Test Execution', 'Results Tracking', 'Auto-generation', 'Framework Support']
    },
    {
      icon: FileText,
      title: 'Document Management',
      desc: 'Built-in document storage and organization system',
      items: ['File Upload', 'Cloud Storage', 'Version Control', 'Quick Access']
    },
    {
      icon: Database,
      title: 'Sheet Management',
      desc: 'Powerful spreadsheet-like interface for data management',
      items: ['Data Import', 'Export Options', 'Bulk Operations', 'Custom Fields']
    },
    {
      icon: BarChart,
      title: 'Smart Reporting',
      desc: 'AI-generated reports and analytics for insights',
      items: ['Custom Reports', 'Analytics Dashboard', 'Export Formats', 'Scheduled Reports']
    }
  ];

  const integrations = [
    { name: 'VS Code', icon: Code, color: 'from-blue-500 to-blue-600' },
    { name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-900' },
    { name: 'Google Workspace', icon: Globe, color: 'from-red-500 to-yellow-500' },
    { name: 'OpenAI', icon: Brain, color: 'from-green-500 to-emerald-600' },
    { name: 'Cloud Storage', icon: Cloud, color: 'from-purple-500 to-purple-600' }
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Write Automation Scripts',
      desc: 'Create your automation tests in VS Code using Selenium, Cucumber, or any framework',
      icon: Code
    },
    {
      step: '2',
      title: 'Auto Sync & Generate',
      desc: 'Extension sends data to backend, OpenAI generates professional test cases automatically',
      icon: Zap
    },
    {
      step: '3',
      title: 'Execute & Track',
      desc: 'Run tests and monitor results in real-time with multiple view options',
      icon: TestTube
    },
    {
      step: '4',
      title: 'Smart Bug Creation',
      desc: 'Failed tests auto-create bugs assigned to correct projects and categories',
      icon: Bug
    },
    {
      step: '5',
      title: 'Voice Management',
      desc: 'Use AI chatbot to filter, assign, prioritize, and generate reports instantly',
      icon: MessageSquare
    }
  ];

  const nextView = () => {
    setActiveView((prev) => (prev + 1) % views.length);
  };

  const prevView = () => {
    setActiveView((prev) => (prev - 1 + views.length) % views.length);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-full mx-auto py-8 lg:py-16">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white overflow-hidden border-2 border-amber-200 mb-8"
        >
          <div className="bg-linear-to-r from-amber-600 to-orange-600 p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl lg:text-8xl bg-white rounded-2xl p-6   "
              >
                <FaCoffee className='text-blue-900 w-8 h-8'/>
              </motion.div>
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                  Caffetest
                </h1>
                <p className="text-xl lg:text-2xl text-amber-100 mb-6">
                  AI-Powered Test Management & Issue Tracking Platform
                </p>
                <p className="text-base lg:text-lg text-amber-50 leading-relaxed">
                  Full-stack web application with VS Code, GitHub, Google Workspace & OpenAI integration. 
                  The world&apos;s first voice-controlled test manager with intelligent automation.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 lg:p-8 bg-linear-to-br from-amber-50 to-orange-50">
            {[
              { icon: Zap, label: 'Auto Test Generation', value: 'AI-Powered' },
              { icon: Brain, label: 'Smart Bug Detection', value: 'Intelligent' },
              { icon: Layout, label: 'Multiple Views', value: '5+ Layouts' },
              { icon: MessageSquare, label: 'Voice Control', value: 'ChatBot' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl p-4   border-2 border-amber-200 text-center"
              >
                <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-600 mb-1">{stat.label}</div>
                <div className="text-lg font-bold bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Views Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl    overflow-hidden border-2 border-amber-200 mb-8"
        >
          <div className="p-6 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Layout className="w-8 h-8 text-amber-600" />
              Interactive Interface Views
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Multiple views for every workflow - switch seamlessly between Kanban, List, Card, Split, and AI Chat
            </p>

            <div className="relative">
              {/* Image Display */}
              <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border-2 border-amber-200   mb-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeView}
                    src={views[activeView].image}
                    alt={views[activeView].title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevView}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full   transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-600" />
                </button>
                <button
                  onClick={nextView}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full   transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-amber-600" />
                </button>
              </div>

              {/* View Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {views[activeView].title}
                </h3>
                <p className="text-gray-600">
                  {views[activeView].description}
                </p>
              </div>

              {/* View Selector */}
              <div className="flex flex-wrap justify-center gap-3">
                {views.map((view, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveView(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                      activeView === index
                        ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white  '
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {view.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl    overflow-hidden border-2 border-amber-200 mb-8"
        >
          <div className="p-6 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-amber-600" />
              Revolutionary Features
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Game-changing capabilities that transform how you manage tests and track issues
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-linear-to-br from-white to-amber-50 p-6 rounded-2xl   border-2 border-amber-200    transition-all"
                  >
                    <div className="bg-linear-to-r from-amber-600 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl    overflow-hidden border-2 border-amber-200 mb-8"
        >
          <div className="p-6 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Zap className="w-8 h-8 text-amber-600" />
              How It Works
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Seamless automation from code to test case to bug tracking - all powered by AI
            </p>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-linear-to-r from-amber-300 via-orange-300 to-amber-300" 
                   style={{ top: '4rem', zIndex: 0 }}></div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
                {workflowSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="bg-white border-4 border-amber-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4  ">
                        <span className="text-2xl font-bold bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                          {step.step}
                        </span>
                      </div>
                      <div className="bg-linear-to-br from-white to-amber-50 p-6 rounded-2xl   border-2 border-amber-200 h-full">
                        <div className="bg-linear-to-r from-amber-600 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2 text-lg">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advanced Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl    overflow-hidden border-2 border-amber-200 mb-8"
        >
          <div className="p-6 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Settings className="w-8 h-8 text-amber-600" />
              Complete Feature Suite
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Everything you need for comprehensive test and issue management
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-linear-to-br from-amber-50 to-orange-50 p-6 rounded-2xl   border-2 border-amber-200"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-linear-to-r from-amber-600 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-3xl    overflow-hidden border-2 border-amber-200"
        >
          <div className="p-6 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3 justify-center">
              <Globe className="w-8 h-8 text-amber-600" />
              Powerful Integrations
            </h2>
            <p className="text-gray-600 mb-10 text-lg text-center">
              Seamlessly connected with industry-leading tools and platforms
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {integrations.map((integration, index) => {
                const IconComponent = integration.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center"
                  >
                    <div className={`bg-linear-to-r ${integration.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3  `}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">
                      {integration.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-12 text-center"
            >
              <div className="bg-linear-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-amber-300">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                  Ready to Transform Your Testing Workflow?
                </h3>
                <p className="text-gray-700 mb-6 text-lg max-w-2xl mx-auto">
                  Experience the future of test management with AI-powered automation, voice control, and seamless integrations
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-linear-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold   text-lg"
                >
                  <Sparkles className="w-5 h-5 inline mr-2" />
                  Get Started Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CaffetestShowcase;