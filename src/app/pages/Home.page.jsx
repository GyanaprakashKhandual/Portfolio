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
import { useTheme } from "../scripts/Theme.context";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { isDark } = useTheme();
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
      className="min-h-screen overflow-hidden text-black bg-white dark:bg-black dark:text-white"
    >
      {/* Bubble Effects */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed rounded-full pointer-events-none bg-black/5 dark:bg-white/5 blur-xl"
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
      <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h1
                className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-linear-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text">
                  Gyan
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 text-base text-gray-700 sm:text-lg dark:text-gray-300"
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
                <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
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
                <button className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-opacity bg-black rounded-md dark:bg-white dark:text-black">
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
                <button
                  onClick={() => router.push("/projects")}
                  className="px-6 py-3 font-medium transition-colors border border-black rounded-md dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  View Projects
                </button>
                <button
                  onClick={() =>
                    router.push("https://github.com/GyanaprakashKhandual")
                  }
                  className="px-6 py-3 font-medium transition-colors border border-black rounded-md dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
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
                  className="relative object-cover w-full h-full border-4 rounded-full shadow-2xl border-black/10 dark:border-white/10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Technical Expertise
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Proficient in modern technologies across the full development
              stack
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 text-center transition-shadow bg-white border border-gray-200 rounded-lg dark:bg-black dark:border-gray-800 hover:shadow-lg"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3" />
                <h3 className="mb-1 font-semibold">{skill.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Achievement Stats
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 text-center border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-950 dark:border-gray-800"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Core Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered solutions that make a difference
            </p>
          </motion.div>

          <div className="grid gap-8 mb-16 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 transition-shadow bg-white border border-gray-200 rounded-lg dark:bg-black dark:border-gray-800 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <div className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-900">
                    <Users className="w-4 h-4" />
                    {project.users}
                  </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-opacity bg-black rounded-md dark:bg-white dark:text-black hover:opacity-80">
                    <ExternalLink className="w-4 h-4" />
                    View App
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border border-black rounded-md dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                    <Github className="w-4 h-4" />
                    Frontend
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border border-black rounded-md dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
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
            className="mb-8 text-center"
          >
            <h3 className="mb-4 text-2xl font-bold">VS Code Extensions</h3>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {extensions.map((extension, index) => (
              <motion.div
                key={extension.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 transition-shadow bg-white border border-gray-200 rounded-lg dark:bg-black dark:border-gray-800 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-8 h-8" />
                    <h3 className="text-xl font-bold">{extension.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-900">
                    <Download className="w-4 h-4" />
                    {extension.installs}
                  </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {extension.description}
                </p>
                <button
                  onClick={() =>
                    router.push(
                      "https://marketplace.visualstudio.com/manage/publishers/gyanaprakashkhandual"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-opacity bg-black rounded-md dark:bg-white dark:text-black hover:opacity-80"
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
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Client Testimonials
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              What people say about working with me
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-950 dark:border-gray-800"
              >
                <MessageSquare className="w-8 h-8 mb-4 text-gray-400" />
                <p className="mb-6 italic text-gray-700 dark:text-gray-300">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 font-bold text-white bg-black rounded-full dark:bg-white dark:text-black">
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
      <section className="px-4 py-16 text-white bg-black sm:py-24 sm:px-6 lg:px-8 dark:bg-white dark:text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-300 dark:text-gray-700">
              Ready to take your project to the next level? Let&rsquo;s discuss
              how I can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="flex items-center gap-2 px-8 py-4 font-medium text-black transition-opacity bg-white rounded-md dark:bg-black dark:text-white hover:opacity-80"
              >
                <Zap className="w-5 h-5" />
                Get In Touch
              </button>
              <button
                onClick={() => router.push("/projects")}
                className="px-8 py-4 font-medium text-white transition-colors border border-white rounded-md dark:border-black dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
              >
                View All Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-200 sm:px-6 lg:px-8 dark:border-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 mb-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold">
                Gyana prakash Khandual
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Full-Stack Developer | QA Engineer | Ethical Hacker
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Building secure, scalable, and intelligent web applications.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/about"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/projects"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/skills"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/contact"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="https://github.com/GyanaprakashKhandual"
                    className="text-black transition-colors dark:text-black hover:text-black dark:hover:text-black"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
                    className="text-black transition-colors dark:text-black hover:text-black dark:hover:text-black"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
                    className="text-black transition-colors dark:text-black hover:text-black dark:hover:text-black"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.verlce.app/contact"
                    className="text-black transition-colors dark:text-black hover:text-black dark:hover:text-black"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-gray-800 sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2026 Gyana prakash Khandual. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="https://gyanprakash.vercel.app/privacy-policy"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="https://gyanprakash.vercel.app/terms-and-conditions"
                className="transition-colors hover:text-black dark:hover:text-white"
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
