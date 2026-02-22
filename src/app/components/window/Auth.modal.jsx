"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react";
import Image from "next/image";
import { Google } from "@mui/icons-material";

export default function AuthModal({ isOpen, onClose }) {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-overlay backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-md overflow-hidden shadow-2xl bg-card rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-6 text-center"
                >
                  <h2 className="mb-2 text-2xl font-bold text-primary sm:text-3xl">
                    Welcome Back
                  </h2>
                  <p className="text-sm text-muted sm:text-base">
                    Sign in to continue to your account
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="flex-1 h-px bg-primary" />
                  <span className="text-xs text-muted">Continue with</span>
                  <div className="flex-1 h-px bg-primary" />
                </motion.div>

                <div className="space-y-3">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center w-full gap-3 px-6 py-3 text-base font-medium btn-secondary"
                  >
                    <Google />
                    <span>Continue with Google</span>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGithubLogin}
                    className="flex items-center justify-center w-full gap-3 px-6 py-3 text-base font-medium btn-primary"
                  >
                    <Github className="w-5 h-5" />
                    <span>Continue with GitHub</span>
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-6 text-center"
                >
                  <p className="text-xs text-muted">
                    By continuing, you agree to our{" "}
                    <a href="/terms" className="hover:text-primary">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="hover:text-primary">
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
