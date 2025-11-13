'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Zap, Shield, Cloud, Settings, BarChart3, ChevronDown } from 'lucide-react';

const Skill = () => {
  const [expandedCategory, setExpandedCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Code,
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      skills: [
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap',
        'Premiere Motion',
        'GSAP',
        'Material UI',
        'Desi UI',
        'JavaScript',
        'ReactJS',
        'NextJS',
        'AngularJS'
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Server,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      skills: [
        'NodeJS',
        'ExpressJS',
        'Python',
        'REST API',
        'OAuth',
        'MyCrypt',
        'GraphQL',
        'JWT Authentication',
        'Middleware',
        'API Security',
        'Caching',
        'Microservices'
      ]
    },
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: Zap,
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      skills: [
        'JavaScript',
        'Python',
        'Java',
        'C',
        'C++',
        'C#',
        'Bash',
        'SQL',
        'TypeScript',
        'Ruby',
        'PHP'
      ]
    },
    {
      id: 'testing',
      name: 'Test Automation & QA',
      icon: BarChart3,
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      skills: [
        'Cypress',
        'Selenium',
        'Playwright',
        'TestNG',
        'PyTest',
        'REST Assured',
        'Postman',
        'Karate DSL',
        'JUnit',
        'Mocha',
        'Jest',
        'Cucumber'
      ]
    },
    {
      id: 'performance',
      name: 'Performance & Monitoring',
      icon: Cloud,
      color: 'from-red-600 to-rose-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      skills: [
        'MongoDB Playground',
        'Locust',
        'Artillery',
        'Grafana',
        'K6',
        'Load Testing',
        'Stress Testing',
        'Monitoring',
        'Analytics',
        'Metrics Collection'
      ]
    },
    {
      id: 'security',
      name: 'Security & Ethical Hacking',
      icon: Shield,
      color: 'from-slate-600 to-gray-600',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      skills: [
        'Linux',
        'Kali Linux',
        'C Programming',
        'C++',
        'C#',
        'Metasploit',
        'Burp Suite',
        'OWASP',
        'Networking',
        'TCP/IP',
        'Encryption',
        'Vulnerability Assessment'
      ]
    },
    {
      id: 'database',
      name: 'Databases',
      icon: Database,
      color: 'from-indigo-600 to-blue-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      skills: [
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'Firebase',
        'Redis',
        'SQL Queries',
        'NoSQL',
        'Data Modeling',
        'Indexing',
        'Transactions'
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Technologies',
      icon: Settings,
      color: 'from-teal-600 to-cyan-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      skills: [
        'Git & GitHub',
        'VSCode',
        'IntelliJ IDEA',
        'Postman',
        'Insomnia',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
        'Webpack',
        'Babel',
        'npm & yarn'
      ]
    },
    {
      id: 'workspace',
      name: 'Workspace & Collaboration',
      icon: Code,
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      skills: [
        'Google Workspace',
        'Microsoft Office 365',
        'Zoho Workspace',
        'Trello',
        'Jira',
        'Confluence',
        'Slack',
        'Discord',
        'Notion',
        'Asana'
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-yellow-600 to-amber-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      skills: [
        'AWS',
        'Google Cloud',
        'Azure',
        'Docker',
        'Kubernetes',
        'CI/CD Pipeline',
        'Linux Administration',
        'Server Management',
        'Deployment',
        'Infrastructure as Code'
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
            <Code className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
            Technical Skills
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Comprehensive tech stack across multiple domains
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-4 sm:space-y-5">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden border-2 transition-all ${category.borderColor}`}
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                  className={`w-full flex items-center justify-between p-5 sm:p-6 transition-all ${category.bgColor}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={` bg-linear-to-r ${category.color} p-3 sm:p-4 rounded-xl`}>
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  </motion.div>
                </button>

                {/* Skills Grid */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: isExpanded ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white border-t-2 border-gray-100 p-5 sm:p-6">
                    <motion.div
                      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                      variants={container}
                      initial="hidden"
                      animate={isExpanded ? "show" : "hidden"}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={item}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={` bg-linear-to-br ${category.color} text-white px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm text-center shadow-md hover:shadow-lg transition-all`}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t-2 border-amber-200"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Skills Overview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                className={` bg-linear-to-br ${category.color} rounded-xl p-4 sm:p-5 text-white text-center shadow-lg`}
              >
                <p className="text-2xl sm:text-3xl font-bold mb-2">
                  {category.skills.length}
                </p>
                <p className="text-xs sm:text-sm font-semibold opacity-90 line-clamp-2">
                  {category.name.split(' ')[0]}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border-2 border-amber-100">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="font-bold text-amber-600">Total Skills Mastered:</span> {skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0)} across 10 major categories. My expertise spans the entire development lifecycle from frontend design to backend optimization, security implementation, and comprehensive testing strategies.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skill;