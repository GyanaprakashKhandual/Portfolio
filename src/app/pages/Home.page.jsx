/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Code2,
  Database,
  Shield,
  TestTube,
  Gauge,
  Terminal,
  ExternalLink,
  Github,
  Users,
  Download,
  Zap,
  Rocket,
  Award,
  MessageSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PortfolioLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const newBubble = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 60 + 40,
      };

      setBubbles((prev) => [...prev.slice(-5), newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "TypeScript", icon: Code2, category: "Language" },
    { name: "React.js", icon: Code2, category: "Frontend" },
    { name: "Express.js", icon: Code2, category: "Backend" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Next.js", icon: Code2, category: "Full Stack" },
    { name: "Selenium", icon: TestTube, category: "Testing" },
    { name: "REST Assured", icon: Terminal, category: "API Testing" },
    { name: "Grafana", icon: Gauge, category: "Monitoring" },
    { name: "Metasploit", icon: Shield, category: "Security" },
    { name: "Burp Suite", icon: Shield, category: "Security" },
  ];

  const stats = [
    { label: "Full Stack Applications", value: "16+", icon: Rocket },
    { label: "Automation Testing", value: "7+", icon: TestTube },
    { label: "API Testing", value: "7+", icon: Terminal },
    { label: "Performance Testing", value: "12+", icon: Gauge },
    { label: "Custom Reports", value: "130+", icon: Award },
    { label: "Lines of Code", value: "7L+", icon: Code2 },
    { label: "Devices Secured", value: "16+", icon: Shield },
    { label: "Github Repo", value: "124+", icon: Github },
  ];

  const projects = [
    {
      name: "Caffetest",
      description:
        "A bug tracking application integrated with Anthropic. It helps in tracking bugs with advanced features like auto bug lock feature according to the test result.",
      users: "400+",
      links: {
        app: "https://caffetest.vercel.app",
        frontend: "https://github.com/GyanaprakashKhandual/Caffetest-app",
        backend: "https://github.com/GyanaprakashKhandual/Caffetest-web",
      },
    },
    {
      name: "Fetch",
      description:
        "An automatic API testing application integrated with Anthropic. It tests complete APIs as per your codebase from the backend automatically.",
      users: "200+",
      links: {
        app: "https://fetch.metronique.vercel.app",
        frontend:
          "https://github.com/GyanaprakashKhandual/Metronique-Fetch-App",
        backend: "https://github.com/GyanaprakashKhandual/Metronique-Fetch-Web",
      },
    },
  ];

  const extensions = [
    {
      name: "Selenium Cucumber",
      description:
        "Helps generate step definition code from raw Cucumber code. Makes test automation faster and more efficient.",
      installs: "6000+",
    },
    {
      name: "Caffetest Tracker",
      description:
        "Integrated bug tracking and reporting directly in VS Code. Seamless workflow integration.",
      installs: "15+",
    },
  ];

  const testimonials = [
    {
      name: "Dharmendra Kumar",
      role: "Product Manager",
      company: "Avidus Interactive",
      feedback:
        "Gyan's expertise in full-stack development and test automation has been invaluable. The quality of work is exceptional.",
      avatar: "DK",
    },
    {
      name: "Adishree Agrwal",
      role: "CEO",
      company: "Avidus Interactive",
      feedback:
        "Working with Gyanu was a game-changer. The AI-integrated solutions delivered exceeded our expectations.",
      avatar: "AA",
    },
    {
      name: "Ankshika Mishra",
      role: "Lead Developer",
      company: "Avidus Interactive",
      feedback:
        "Outstanding technical skills and problem-solving abilities. The automation tools saved us countless hours.",
      avatar: "AM",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Bubble Effects */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed pointer-events-none rounded-full bg-black/5 dark:bg-white/5 blur-xl"
          initial={{ x: bubble.x, y: bubble.y, scale: 0, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: -bubble.size / 2,
            top: -bubble.size / 2,
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I&apos;m{" "}
                <span className="bg-linear-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                  Gyan
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300"
              >
                <p>
                  I am a <strong>Full-Stack Web Developer</strong> specializing
                  in building robust SaaS-level applications integrated with
                  Artificial Intelligence.
                </p>
                <p>
                  As a{" "}
                  <strong>Quality Assurance Automation Test Engineer</strong>{" "}
                  and{" "}
                  <strong>Software Development Engineer in Test (SDET)</strong>,
                  I ensure top-tier quality in every project.
                </p>
                <p>
                  I&apos;m also a <strong>Certified Ethical Hacker</strong>,
                  building secure systems with best-in-class firewall protection
                  to safeguard applications.
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  With 1+ year of experience in QA Engineering, Product Design,
                  and Full-Stack Development, I deliver excellence at every
                  stage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium transition-opacity flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
                <button
                  onClick={() => router.push("/projects")}
                  className="px-6 py-3 border border-black dark:border-white rounded-md font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  View Projects
                </button>
                <button
                  onClick={() =>
                    router.push("https://github.com/GyanaprakashKhandual")
                  }
                  className="px-6 py-3 border border-black dark:border-white rounded-md font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  GitHub
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 rounded-full bg-linear-to-r from-black/10 to-gray-300/10 dark:from-white/10 dark:to-gray-700/10 blur-2xl"
                />
                <img
                  src="https://res.cloudinary.com/dvytvjplt/image/upload/v1765866608/profile_pricture_oemv94.jpg"
                  alt="Gyanu Vakaskaram Varg"
                  className="relative rounded-full w-full h-full object-cover border-4 border-black/10 dark:border-white/10 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proficient in modern technologies across the full development
              stack
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Achievement Stats
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-950 rounded-lg text-center border border-gray-200 dark:border-gray-800"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Core Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered solutions that make a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <div className="flex items-center gap-2 text-sm bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4" />
                    {project.users}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View App
                  </button>
                  <button className="px-4 py-2 border border-black dark:border-white rounded-md text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Frontend
                  </button>
                  <button className="px-4 py-2 border border-black dark:border-white rounded-md text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Backend
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* VS Code Extensions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">VS Code Extensions</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {extensions.map((extension, index) => (
              <motion.div
                key={extension.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-8 h-8" />
                    <h3 className="text-xl font-bold">{extension.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full">
                    <Download className="w-4 h-4" />
                    {extension.installs}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {extension.description}
                </p>
                <button
                  onClick={() =>
                    router.push(
                      "https://marketplace.visualstudio.com/manage/publishers/gyanaprakashkhandual"
                    )
                  }
                  className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Extension
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              What people say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg"
              >
                <MessageSquare className="w-8 h-8 mb-4 text-gray-400" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black dark:bg-white text-white dark:text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-700 mb-8 max-w-2xl mx-auto">
              Ready to take your project to the next level? Let&rsquo;s discuss
              how I can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-md font-medium hover:opacity-80 transition-opacity flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Get In Touch
              </button>
              <button
                onClick={() => router.push("/projects")}
                className="px-8 py-4 border border-white dark:border-black text-white dark:text-black rounded-md font-medium hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
              >
                View All Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Gyana prakash Khandual
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Full-Stack Developer | QA Engineer | Ethical Hacker
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Building secure, scalable, and intelligent web applications.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/about"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/projects"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/skills"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/contact"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="https://github.com/GyanaprakashKhandual"
                    className="text-black dark:text-black hover:text-black dark:hover:text-black transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
                    className="text-black dark:text-black hover:text-black dark:hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
                    className="text-black dark:text-black hover:text-black dark:hover:text-black transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/contact"
                    className="text-black dark:text-black hover:text-black dark:hover:text-black transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2026 Gyana prakash Khandual. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="https://gyanprakash.vercel.app/privacy-policy"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://gyanprakash.vercel.app/terms-and-conditions"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
