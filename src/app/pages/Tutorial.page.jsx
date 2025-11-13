'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Rocket, Clock, Sparkles, Video, FileText, Code, Zap } from 'lucide-react';

const TutorialPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2025-01-01T00:00:00');
      const now = new Date();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingFeatures = [
    {
      icon: Video,
      title: 'Video Tutorials',
      desc: 'Step-by-step video guides for all features'
    },
    {
      icon: FileText,
      title: 'Documentation',
      desc: 'Comprehensive written guides and examples'
    },
    {
      icon: Code,
      title: 'Code Samples',
      desc: 'Ready-to-use code snippets and templates'
    },
    {
      icon: Zap,
      title: 'Quick Start Guides',
      desc: 'Get up and running in minutes'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-full mx-auto"
        >
          {/* Hero Section */}
          <div className="bg-white overflow-hidden border-2 border-amber-200 mb-8">
            <div className="bg-linear-to-r from-amber-600 to-orange-600 p-8 lg:p-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="bg-white rounded-full p-6 lg:p-8 shadow-xl">
                  <BookOpen className="w-16 h-16 lg:w-24 lg:h-24 text-amber-600" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-4"
              >
                Tutorials Coming Soon!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-amber-100 mb-8"
              >
                Comprehensive guides will be available once all products are launched
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl"
              >
                <Clock className="w-6 h-6" />
                <span className="text-lg font-semibold">Stay tuned for updates!</span>
              </motion.div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-linear-to-br from-amber-50 to-orange-50 p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center gap-3">
                <Rocket className="w-8 h-8 text-amber-600" />
                Launch Countdown
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto">
                {[
                  { label: 'Days', value: 60 },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 text-center"
                  >
                    <motion.div
                      key={item.value}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2"
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-gray-600 font-medium text-sm lg:text-base">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* What's Coming Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200"
          >
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3 justify-center">
                <Sparkles className="w-8 h-8 text-amber-600" />
                What to Expect
              </h2>

              <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                Once all products are launched, you&apos;ll get access to comprehensive tutorials covering everything you need to know
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {upcomingFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-linear-to-br from-white to-amber-50 p-6 lg:p-8 rounded-2xl shadow-lg border-2 border-amber-200 hover:shadow-xl transition-all"
                    >
                      <div className="bg-linear-to-r from-amber-600 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-white" />
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

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-12 text-center"
              >
                <div className="bg-linear-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-amber-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Get Notified
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                    We&apos;re working hard to bring you the best learning experience. Check back soon for comprehensive tutorials and guides!
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-linear-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg cursor-pointer"
                  >
                    <Rocket className="w-5 h-5 inline mr-2" />
                    Coming Soon
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TutorialPage;