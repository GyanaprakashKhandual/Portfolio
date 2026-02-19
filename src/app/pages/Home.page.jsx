/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Code2,
  Shield,
  TestTube,
  Gauge,
  Terminal,
  ExternalLink,
  Github,
  Users,
  Download,
  Rocket,
  Award,
  MessageSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/Theme.context";
import { FaDocker } from "react-icons/fa";
import {
  SiExpress,
  SiGrafana,
  SiMetasploit,
  SiMongodb,
  SiSelenium,
  SiTypescript,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";

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
    { name: "TypeScript", icon: SiTypescript, category: "Language" },
    { name: "React.js", icon: GrReactjs, category: "Frontend" },
    { name: "Express.js", icon: SiExpress, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, category: "Database" },
    { name: "Next.js", icon: RiNextjsLine, category: "Full Stack" },
    { name: "Selenium", icon: SiSelenium, category: "Testing" },
    { name: "REST Assured", icon: Terminal, category: "API Testing" },
    { name: "Grafana", icon: SiGrafana, category: "Monitoring" },
    { name: "Metasploit", icon: SiMetasploit, category: "Security" },
    { name: "Docker", icon: FaDocker, category: "Devops" },
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
      installs: "6661+",
    },
    {
      name: "Caffetest Tracker",
      description:
        "Integrated bug tracking and reporting directly in VS Code. Seamless workflow integration.",
      installs: "224+",
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
        "Working with Gyan was a game-changer. The AI-integrated solutions delivered exceeded our expectations.",
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
      className="min-h-screen overflow-hidden text-primary bg-primary"
    >
      {/* Bubble Effects */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed rounded-full pointer-events-none bg-overlay blur-xl"
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
                <span className="text-transparent bg-gradient-to-r from-black to-gray-600 bg-clip-text">
                  Gyan
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 text-base text-secondary sm:text-lg"
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
                <p className="text-sm text-muted sm:text-base">
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
                <button className="flex items-center gap-2 px-6 py-3 font-medium btn-primary">
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
                <button
                  onClick={() => router.push("/projects")}
                  className="px-6 py-3 font-medium btn-secondary"
                >
                  View Projects
                </button>
                <button
                  onClick={() =>
                    router.push("https://github.com/GyanaprakashKhandual")
                  }
                  className="px-6 py-3 font-medium btn-secondary"
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
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-black/10 to-gray-300/10 blur-2xl"
                />
                <img
                  src="https://res.cloudinary.com/dvytvjplt/image/upload/v1765866608/profile_pricture_oemv94.jpg"
                  alt="Gyana prakash Khandual"
                  className="relative object-cover w-full h-full border-4 rounded-full shadow-image border-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-primary">
              Technical Expertise
            </h2>
            <p className="max-w-2xl mx-auto text-muted">
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
                className="p-6 text-center transition-shadow rounded-lg bg-card border-primary hover:shadow-md"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="mb-1 font-semibold text-primary">
                  {skill.name}
                </h3>
                <p className="text-xs text-muted">{skill.category}</p>
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
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-primary">
              Achievement Stats
            </h2>
            <p className="text-muted">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 text-center rounded-lg border-primary bg-tertiary"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="mb-2 text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-primary">
              Core Projects
            </h2>
            <p className="text-muted">
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
                className="p-8 transition-shadow rounded-lg bg-card border-primary hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-badge">
                    <Users className="w-4 h-4 text-muted" />
                    {project.users}
                  </div>
                </div>
                <p className="mb-6 text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => window.open(project.links.app, "_blank")}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium btn-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View App
                  </button>

                  <button
                    onClick={() =>
                      window.open(project.links.frontend, "_blank")
                    }
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium btn-secondary"
                  >
                    <Github className="w-4 h-4" />
                    Frontend
                  </button>

                  <button
                    onClick={() => window.open(project.links.backend, "_blank")}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium btn-secondary"
                  >
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
            <h3 className="mb-4 text-2xl font-bold text-primary">
              VS Code Extensions
            </h3>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {extensions.map((extension, index) => (
              <motion.div
                key={extension.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 transition-shadow rounded-lg bg-card border-primary hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-bold text-primary">
                      {extension.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-badge">
                    <Download className="w-4 h-4 text-muted" />
                    {extension.installs}
                  </div>
                </div>
                <p className="mb-6 text-muted">{extension.description}</p>
                <button
                  onClick={() =>
                    router.push(
                      "https://marketplace.visualstudio.com/manage/publishers/gyanaprakashkhandual",
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium btn-primary"
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
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-primary">
              Client Testimonials
            </h2>
            <p className="text-muted">What people say about working with me</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 rounded-lg border-primary bg-tertiary"
              >
                <MessageSquare className="w-8 h-8 mb-4 text-muted" />
                <p className="mb-6 italic text-secondary">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full text-avatar bg-avatar">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted">
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
      <section className="px-4 py-16 text-inverse bg-inverse sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-inverse-muted">
              Ready to take your project to the next level? Let&rsquo;s discuss
              how I can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="flex items-center gap-2 px-8 py-4 font-medium rounded-md text-inverse bg-primary hover:opacity-80"
              >
                Get In Touch
              </button>
              <button
                onClick={() => router.push("/projects")}
                className="px-8 py-4 font-medium border rounded-md text-inverse border-inverse hover:bg-primary hover:text-primary"
              >
                View All Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-primary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 mb-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Gyana prakash Khandual
              </h3>
              <p className="mb-4 text-muted">
                Full-Stack Developer | QA Engineer | Ethical Hacker
              </p>
              <p className="text-sm text-muted">
                Building secure, scalable, and intelligent web applications.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-primary">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a
                    href="https://gyanprakash.vercel.app/about"
                    className="transition-colors hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.vercel.app/projects"
                    className="transition-colors hover:text-primary"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.vercel.app/skills"
                    className="transition-colors hover:text-primary"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.vercel.app/contact"
                    className="transition-colors hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-primary">Connect</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a
                    href="https://github.com/GyanaprakashKhandual"
                    className="transition-colors hover:text-primary"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
                    className="transition-colors hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
                    className="transition-colors hover:text-primary"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://gyanprakash.vercel.app/contact"
                    className="transition-colors hover:text-primary"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-primary sm:flex-row">
            <p className="text-sm text-muted">
              © 2026 Gyana prakash Khandual. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="transition-colors hover:text-primary"
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
