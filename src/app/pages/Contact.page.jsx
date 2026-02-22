"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "Gmail",
    icon: Mail,
    url: "mailto:gyanaprakashkhnadual@gmail.com",
    handle: "gyanaprakashkhnadual@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/",
    handle: "@Gyan",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/GyanaprakashKhandual",
    handle: "@GyanaprakashKhandual",
  },
];

function AlertBox({ type, message, icon: Icon }) {
  const styles = {
    success: {
      bg: "bg-tertiary",
      border: "border-primary",
      icon: "text-primary",
      text: "text-primary",
    },
    error: {
      bg: "bg-tertiary",
      border: "border-strong",
      icon: "text-primary",
      text: "text-primary",
    },
    warning: {
      bg: "bg-tertiary",
      border: "border-strong",
      icon: "text-primary",
      text: "text-primary",
    },
    info: {
      bg: "bg-tertiary",
      border: "border-primary",
      icon: "text-primary",
      text: "text-primary",
    },
  };

  const style = styles[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-3 p-4 border rounded-lg ${style.bg} ${style.border}`}
    >
      <Icon className={`w-5 h-5 shrink-0 ${style.icon}`} />
      <p className={`text-sm font-medium ${style.text}`}>{message}</p>
    </motion.div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-5 h-5 border-2 rounded-full border-inverse border-t-transparent animate-spin"></div>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("warning");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatus("info");
    setStatusMessage("Validating your information...");

    try {
      setTimeout(() => {
        setStatusMessage("Sending your message...");
      }, 1000);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          "Your message has been sent successfully! I'll get back to you soon.",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Failed to send email. Please try again later.",
        );
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "An error occurred while sending your message. Please try again.",
      );
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 mx-auto mb-16 max-w-7xl sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-secondary sm:text-xl">
            Have a question or project in mind? I'd love to hear from you. Let's
            connect and create something amazing together.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 mb-8 transition-all border rounded-lg shadow-sm bg-card border-primary hover:shadow-md"
            >
              <div className="mb-6">
                <div className="flex items-center justify-center w-20 h-20 mb-4 text-2xl font-bold rounded-full text-inverse bg-inverse">
                  GK
                </div>
                <h3 className="mb-1 text-2xl font-bold text-primary">
                  Gyana prakash Khandual
                </h3>
                <p className="text-sm text-muted">Product Designer & SDET</p>
              </div>

              <div className="pb-8 mb-8 space-y-4 border-b border-primary">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-muted">
                      Location
                    </p>
                    <p className="text-primary">Bangalore, Karnataka, India</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-muted">
                      Phone
                    </p>
                    <a
                      href="tel:7606939833"
                      className="transition-colors text-primary hover:text-strong"
                    >
                      +91 7606939833
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-muted">
                      Email
                    </p>
                    <a
                      href="mailto:gyanaprakashkhnadual@gmail.com"
                      className="text-sm break-all transition-colors text-primary hover:text-strong"
                    >
                      gyanaprakashkhnadual@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>

              <div>
                <p className="mb-4 text-xs font-semibold tracking-wider uppercase text-muted">
                  Connect With Me
                </p>
                <div className="space-y-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 p-3 transition-all border rounded-lg text-primary border-primary bg-tertiary hover:bg-inverse hover:text-inverse"
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold tracking-wider uppercase">
                            {social.name}
                          </p>
                          <p className="text-xs truncate text-muted">
                            {social.handle}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 border rounded-lg shadow-sm bg-card border-primary"
            >
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-primary"
                  >
                    Full Name <span className="text-strong">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg text-primary placeholder-muted bg-card border-primary focus:outline-none focus:ring-2 focus:ring-strong"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-primary"
                  >
                    Email Address <span className="text-strong">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg text-primary placeholder-muted bg-card border-primary focus:outline-none focus:ring-2 focus:ring-strong"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-semibold text-primary"
                  >
                    Subject <span className="text-strong">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg text-primary placeholder-muted bg-card border-primary focus:outline-none focus:ring-2 focus:ring-strong"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-semibold text-primary"
                  >
                    Message <span className="text-strong">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border rounded-lg resize-none text-primary placeholder-muted bg-card border-primary focus:outline-none focus:ring-2 focus:ring-strong"
                    placeholder="Tell me more about your project..."
                  />
                </motion.div>

                {status === "success" && (
                  <AlertBox
                    type="success"
                    message={statusMessage}
                    icon={CheckCircle}
                  />
                )}

                {status === "error" && (
                  <AlertBox
                    type="error"
                    message={statusMessage}
                    icon={AlertCircle}
                  />
                )}

                {status === "warning" && (
                  <AlertBox
                    type="warning"
                    message={statusMessage}
                    icon={AlertCircle}
                  />
                )}

                {status === "info" && (
                  <AlertBox type="info" message={statusMessage} icon={Info} />
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <LoadingSpinner />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-muted">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactPage;
