'use client'
import { ExternalLink, Github, CheckCircle, Play } from 'lucide-react';
import { useState } from 'react';

export const projectMeta = {
  slug: 'pisl-performance-testing',
  title: 'PISL Performance Testing',
  shortDesc: 'End-to-end performance testing platform with real-time analytics',
  description:
    'Comprehensive performance testing solution for PISL web application using Grafana, K6, and advanced custom reporting with SVG visualization.',
  category: 'Testing',
  githubUrl: 'https://github.com/GyanaprakashKhandual/PISL-Infra-Automation-Test.git',
  reportsUrl: 'https://github.com/PISL-Reports',
  techStack: [
    'K6',
    'Grafana',
    'JSON',
    'HTML/CSS',
    'SVG Path Stroke',
    'Premiere Motion',
  ],
};

export default function PISSLPerformanceTestingProject() {
  const [showVideo, setShowVideo] = useState(false);

  const highlights = [
    'End-to-End Performance Testing',
    'Real-time Grafana Dashboards',
    'K6 Load Testing Framework',
    'Custom SVG Report Generation',
    'JSON Data Persistence',
    'Advanced Performance Analytics',
    'Automated Test Execution',
    'Performance Metrics Visualization',
  ];

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <section>
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
          {projectMeta.title}
        </h2>
        <p className="leading-7 text-gray-700 dark:text-slate-300">
          {projectMeta.description}
        </p>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Video Showcase Section */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Performance Testing Demo
        </h3>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black">
          {!showVideo ? (
            <div
              onClick={() => setShowVideo(true)}
              className="relative flex items-center justify-center w-full bg-gray-900 cursor-pointer aspect-video group"
            >
              {/* SVG Animation Background */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 1000 600"
              >
                {/* Animated performance curves */}
                <path
                  d="M 100 500 Q 300 400, 500 300 T 900 200"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-blue-500 animate-pulse"
                />
                <path
                  d="M 100 450 Q 300 350, 500 280 T 900 150"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-cyan-500 animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                />
                <path
                  d="M 100 520 Q 300 420, 500 320 T 900 220"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-purple-500 animate-pulse"
                  style={{ animationDelay: '0.4s' }}
                />
              </svg>

              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 transition-all rounded-full bg-black/50 group-hover:bg-black/70">
                    <Play className="w-12 h-12 text-white fill-white" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">Watch Demo</p>
                <p className="text-sm text-slate-400">Performance Testing in Action</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full bg-black aspect-video">
              <div className="text-center">
                <svg
                  className="w-full h-full max-w-md mx-auto text-blue-500 max-h-md"
                  viewBox="0 0 400 300"
                >
                  {/* Grafana Dashboard Visualization */}
                  <defs>
                    <linearGradient
                      id="perfGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>

                  {/* Grid */}
                  <g stroke="#374151" strokeWidth="1" opacity="0.3">
                    {[0, 50, 100, 150, 200, 250, 300].map((y) => (
                      <line key={`h${y}`} x1="30" y1={y} x2="390" y2={y} />
                    ))}
                    {[30, 80, 130, 180, 230, 280, 330, 380].map((x) => (
                      <line key={`v${x}`} x1={x} y1="0" x2={x} y2="280" />
                    ))}
                  </g>

                  {/* Performance Curve */}
                  <path
                    d="M 30 240 L 80 200 L 130 160 L 180 140 L 230 120 L 280 110 L 330 100 L 380 95"
                    stroke="url(#perfGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="drop-shadow-lg"
                  />

                  {/* Data Points */}
                  {[
                    [30, 240],
                    [80, 200],
                    [130, 160],
                    [180, 140],
                    [230, 120],
                    [280, 110],
                    [330, 100],
                    [380, 95],
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point[0]}
                      cy={point[1]}
                      r="4"
                      fill="#0EA5E9"
                      className="drop-shadow-lg"
                    />
                  ))}

                  {/* Axes */}
                  <line
                    x1="30"
                    y1="280"
                    x2="390"
                    y2="280"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="0"
                    x2="30"
                    y2="280"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />

                  {/* Labels */}
                  <text
                    x="210"
                    y="295"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                  >
                    Time (seconds)
                  </text>
                  <text
                    x="10"
                    y="140"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    transform="rotate(-90 10 140)"
                  >
                    Response Time (ms)
                  </text>
                </svg>
                <button
                  onClick={() => setShowVideo(false)}
                  className="px-4 py-2 mt-4 text-white transition-all rounded-lg bg-black/50 hover:bg-black/70"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Full Description */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Overview
        </h3>
        <div className="space-y-4 leading-7 text-gray-700 dark:text-slate-300">
          <p>
            This comprehensive performance testing project provides end-to-end testing of the PISL web
            application backend. It combines industry-leading tools like K6 and Grafana with custom SVG-based
            reporting to deliver actionable performance insights.
          </p>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">Key Features:</h4>
            <ul className="ml-4 space-y-2">
              <li>• K6 Load Testing Framework - Robust performance and load testing capabilities</li>
              <li>
                • Real-time Grafana Dashboards - Live visualization of performance metrics
              </li>
              <li>• JSON Data Storage - Structured persistence of test results and configurations</li>
              <li>• Custom SVG Report Generation - Beautiful, interactive performance reports</li>
              <li>• Advanced Motion Graphics - Premiere Motion integration for visualization</li>
              <li>• HTML/CSS Reporting - Professional report formatting and presentation</li>
              <li>• Complete Documentation - Comprehensive guides for setup and execution</li>
              <li>• Automated Backend Testing - Full backend infrastructure testing coverage</li>
              <li>• Performance Analytics - Detailed metrics and insights for optimization</li>
              <li>• Scalability Testing - Test application behavior under various load conditions</li>
            </ul>
          </div>

          <p className="mt-4 font-semibold text-black dark:text-white">
            The standout feature is the custom SVG-based report generation that transforms complex
            performance data into visually stunning, interactive reports. Combined with real-time Grafana
            dashboards, it provides a complete picture of your application's performance characteristics.
          </p>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Highlights */}
      <section>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Key Features
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-slate-300">{highlight}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Tech Stack */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {projectMeta.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm font-semibold bg-black dark:bg-white text-white dark:text-black rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Links */}
      <section className="flex flex-wrap gap-3">
        <a
          href={projectMeta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <Github className="w-4 h-4" />
          Testing Code
        </a>
        <a
          href={projectMeta.reportsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <ExternalLink className="w-4 h-4" />
          Reports Repository
        </a>
      </section>
    </div>
  );
}