"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertCircle,
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
    handle: "@gyan",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/GyanaprakashKhandual",
    handle: "@gyan",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://github.com/GyanaprakashKhandual",
    handle: "@gyan",
  },
];

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
    setLoading(true);
    setStatus(null);

    try {
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
        setStatusMessage(data.message || "Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Failed to send email. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("An error occurred. Please try again.");
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
    <div className="min-h-screen pt-24 pb-16 transition-colors duration-300 bg-white dark:bg-black">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 mx-auto mb-16 max-w-7xl sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl dark:text-white">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 sm:text-xl dark:text-gray-300">
            Have a question or project in mind? I&apos;d love to hear from you.
            Let&apos;s connect and create something amazing together.
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Side - Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            {/* Profile Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 mb-8 transition-all bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-900 hover:shadow-md"
            >
              <div className="mb-6">
                <div className="flex items-center justify-center w-20 h-20 mb-4 text-2xl font-bold text-white bg-black rounded-full dark:bg-white dark:text-black">
                  GK
                </div>
                <h3 className="mb-1 text-2xl font-bold text-black dark:text-white">
                  Gyana prakash Khandual
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Product Designer & SDET
                </p>
              </div>

              {/* Contact Details */}
              <div className="pb-8 mb-8 space-y-4 border-b border-gray-300 dark:border-gray-700">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                      Location
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <Phone className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                      Phone
                    </p>
                    <a
                      href="tel:7606939882"
                      className="text-gray-800 transition-colors dark:text-gray-200 hover:text-black dark:hover:text-white"
                    >
                      +91 7606939833
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <Mail className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                      Email
                    </p>
                    <a
                      href="mailto:gyanaprakashk@gmail.com"
                      className="text-sm text-gray-800 break-all transition-colors dark:text-gray-200 hover:text-black dark:hover:text-white"
                    >
                      gyanaprakashkhnadual@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <p className="mb-4 text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
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
                        className="flex items-center gap-3 p-3 text-black transition-all border border-gray-300 rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black dark:text-white"
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold tracking-wider uppercase">
                            {social.name}
                          </p>
                          <p className="text-xs text-gray-600 truncate dark:text-gray-400 group-hover:text-gray-300">
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

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="space-y-6">
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-black dark:text-white"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black placeholder-gray-500 transition-all bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-black dark:text-white"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black placeholder-gray-500 transition-all bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-semibold text-black dark:text-white"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black placeholder-gray-500 transition-all bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    placeholder="What's this about?"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-semibold text-black dark:text-white"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 text-black placeholder-gray-500 transition-all bg-white border border-gray-300 rounded-lg resize-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    placeholder="Tell me more about your project..."
                  />
                </motion.div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 border border-green-300 rounded-lg bg-green-50 dark:bg-green-900/20 dark:border-green-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 dark:text-green-400" />
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      {statusMessage}
                    </p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 border border-red-300 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-700"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 dark:text-red-400" />
                    <p className="text-sm font-medium text-red-700 dark:text-red-300">
                      {statusMessage}
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition-all bg-black rounded-lg dark:bg-white dark:text-black hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                  I&apos;ll get back to you as soon as possible.
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
