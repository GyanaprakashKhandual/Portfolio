"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react";
import Image from "next/image";
import { Google } from "@mui/icons-material";

export default function AuthModal({ isOpen, onClose }) {
  const handleGoogleLogin = () => {
    // Add your Google authentication logic here
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    // Add your GitHub authentication logic here
    console.log("GitHub login clicked");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-md overflow-hidden bg-white shadow-2xl dark:bg-black rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-6 text-center"
                >
                  <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                    Welcome Back
                  </h2>
                  <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                    Sign in to continue to your account
                  </p>
                </motion.div>

                {/* Divider Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    Continue with
                  </span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                </motion.div>

                {/* Auth Buttons */}
                <div className="space-y-3">
                  {/* Google Button */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center w-full gap-3 px-6 py-3 text-base font-medium text-black transition-colors bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-900 dark:text-white dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                  >
                    <Google/>
                    <span>Continue with Google</span>
                  </motion.button>

                  {/* GitHub Button */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGithubLogin}
                    className="flex items-center justify-center w-full gap-3 px-6 py-3 text-base font-medium text-white transition-colors bg-black border-2 border-black rounded-lg dark:bg-white dark:text-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100"
                  >
                    <Github className="w-5 h-5" />
                    <span>Continue with GitHub</span>
                  </motion.button>
                </div>

                {/* Footer Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-6 text-center"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    By continuing, you agree to our{" "}
                    <a
                      href="/terms"
                      className="hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}