"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Clock, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../scripts/Theme.context";

export default function ComingSoon() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white dark:bg-black">
      <div className="w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative inline-block mb-6"
          >
            <Wrench className="w-16 h-16 text-black sm:w-20 sm:h-20 dark:text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-4 text-4xl font-bold text-black sm:text-5xl md:text-6xl dark:text-white"
          >
            Coming Soon
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-4 text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl dark:text-gray-200"
          >
            We&apos;re Working On It
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mb-8 text-base text-gray-600 sm:text-lg dark:text-gray-400"
          >
            This page is under construction. We&apos;re crafting something
            amazing for you. Check back soon!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoHome}
            className="flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white transition-colors bg-black rounded-md sm:px-8 dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-black transition-colors bg-gray-100 rounded-md sm:px-8 dark:bg-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-black rounded-full dark:bg-white"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 bg-black rounded-full dark:bg-white"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 bg-black rounded-full dark:bg-white"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Stay tuned for updates!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
