"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Bell,
  ChevronRight,
  GitBranch,
  Clock,
  Flag,
  Share2,
  X,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Tooltip } from "../ui/Tooltip.ui";

const CommentModal = ({ isOpen, onClose }) => {
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 120);
    }
    if (!isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setComment("");
      setSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const handleSubmit = () => {
    if (!comment.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/30 dark:bg-black/60 backdrop-blur-[2px]"
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="fixed z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-2xl top-1/2 left-1/2 dark:bg-gray-950 dark:border-gray-800 rounded-xl shadow-black/10 dark:shadow-black/50"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 sm:px-5 sm:py-4 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Leave a comment
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded text-gray-400 dark:text-gray-500
                           hover:text-gray-700 dark:hover:text-gray-300
                           hover:bg-gray-100 dark:hover:bg-gray-800
                           transition-colors duration-150"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-4 py-4 sm:px-5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-2 py-6 text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Comment submitted — thank you!
                  </p>
                </motion.div>
              ) : (
                <>
                  <textarea
                    ref={textareaRef}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Was this page helpful? Share your thoughts or suggestions…"
                    rows={4}
                    className="w-full resize-none rounded-lg text-sm
                               px-3 py-2.5
                               bg-gray-50 dark:bg-gray-900
                               border border-gray-200 dark:border-gray-700
                               text-gray-900 dark:text-gray-100
                               placeholder:text-gray-400 dark:placeholder:text-gray-600
                               focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400
                               transition-shadow duration-150"
                  />
                  <p className="mt-2 text-xs text-gray-400 dark:text-gray-600">
                    Comments are reviewed by the documentation team.
                  </p>
                </>
              )}
            </div>

            {!submitted && (
              <div className="flex items-center justify-end gap-2 px-4 pb-4 sm:px-5">
                <button
                  onClick={onClose}
                  className="px-3 sm:px-3.5 py-2 text-sm rounded-lg
                             text-gray-600 dark:text-gray-400
                             hover:bg-gray-100 dark:hover:bg-gray-800
                             transition-colors duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!comment.trim()}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-sm font-medium rounded-lg
                             bg-gray-900 dark:bg-white
                             text-white dark:text-gray-900
                             hover:bg-gray-700 dark:hover:bg-gray-200
                             disabled:opacity-40 disabled:cursor-not-allowed
                             transition-colors duration-150"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const NewsletterWidget = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim() || !email.includes("@")) return;
    setSubscribed(true);
    setExpanded(false);
  };

  if (subscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium"
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        Subscribed!
      </motion.div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="flex items-center gap-1.5 overflow-hidden"
          >
            <input
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="your@email.com"
              className="h-7 px-2.5 text-xs rounded-md
                         bg-gray-100 dark:bg-gray-900
                         border border-gray-200 dark:border-gray-700
                         text-gray-900 dark:text-gray-100
                         placeholder:text-gray-400 dark:placeholder:text-gray-600
                         focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-400
                         w-32 sm:w-40 transition-shadow"
            />
            <button
              onClick={handleSubscribe}
              className="h-7 px-2 sm:px-2.5 text-xs font-medium rounded-md
                         bg-gray-900 dark:bg-white text-white dark:text-gray-900
                         hover:bg-gray-700 dark:hover:bg-gray-200
                         transition-colors duration-150 shrink-0"
            >
              Subscribe
            </button>
            <button
              onClick={() => {
                setExpanded(false);
                setEmail("");
              }}
              className="p-1 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="trigger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Tooltip content="Subscribe to newsletter">
              <button
                onClick={() => setExpanded(true)}
                className="flex items-center gap-1.5 h-8 px-2 sm:px-3 text-xs font-medium rounded-md
                           text-gray-600 dark:text-gray-400
                           hover:text-gray-900 dark:hover:text-gray-100
                           hover:bg-gray-100 dark:hover:bg-gray-900
                           border border-gray-200 dark:border-gray-800
                           transition-colors duration-150"
              >
                <Bell className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FooterToolbar = ({
  pageTitle = "Getting Started",
  lastUpdated = "Feb 14, 2025",
  githubEditUrl = "#",
  prevPage = { label: "Introduction", href: "#" },
  nextPage = { label: "Configuration", href: "#" },
  className = "",
}) => {
  const [liked, setLiked] = useState(null);
  const [likeCount, setLikeCount] = useState(24);
  const [commentOpen, setCommentOpen] = useState(false);

  const handleVote = (dir) => {
    if (liked === dir) {
      setLiked(null);
      setLikeCount((c) => (dir === "up" ? c - 1 : c + 1));
    } else {
      if (liked === "up") setLikeCount((c) => c - 1);
      if (liked === "down") setLikeCount((c) => c + 1);
      setLiked(dir);
      if (dir === "up") setLikeCount((c) => c + 1);
    }
  };

  return (
    <>
      <CommentModal
        isOpen={commentOpen}
        onClose={() => setCommentOpen(false)}
      />

      <div
        className={`
          w-full flex flex-col
          bg-white dark:bg-black
          border-t border-gray-200 dark:border-gray-800
          ${className}
        `}
      >
        <div className="flex items-center justify-between px-3 py-3 border-b border-gray-100 sm:px-6 sm:py-4 dark:border-gray-800/60">
          {prevPage ? (
            <a
              href={prevPage.href}
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 transition-colors duration-150 group dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-180 transition-transform duration-150 group-hover:-translate-x-0.5 shrink-0" />
              <span>
                <span className="block text-[10px] sm:text-xs text-gray-400 dark:text-gray-600 mb-0.5">
                  Previous
                </span>
                <span className="line-clamp-1 max-w-25 sm:max-w-40">
                  {prevPage.label}
                </span>
              </span>
            </a>
          ) : (
            <div />
          )}

          {nextPage ? (
            <a
              href={nextPage.href}
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-right text-gray-500 transition-colors duration-150 group dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <span>
                <span className="block text-[10px] sm:text-xs text-gray-400 dark:text-gray-600 mb-0.5">
                  Next
                </span>
                <span className="line-clamp-1 max-w-25 sm:max-w-40">
                  {nextPage.label}
                </span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-150 group-hover:translate-x-0.5 shrink-0" />
            </a>
          ) : (
            <div />
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-2 sm:gap-3 px-3 sm:px-6 py-2.5 sm:py-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Updated {lastUpdated}</span>
            </div>
            <a
              href={githubEditUrl}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600
                         hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-150"
            >
              <GitBranch className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Edit on GitHub</span>
              <span className="sm:hidden">Edit</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            <span className="hidden mr-1 text-xs text-gray-400 dark:text-gray-600 sm:block">
              Was this helpful?
            </span>

            <Tooltip content="Helpful">
              <button
                onClick={() => handleVote("up")}
                className={`
                  flex items-center gap-1.5 h-7 sm:h-8 px-2 sm:px-2.5 rounded-md text-xs font-medium
                  border transition-all duration-150
                  ${
                    liked === "up"
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white"
                      : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
                  }
                `}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{likeCount}</span>
              </button>
            </Tooltip>

            <Tooltip content="Not helpful">
              <button
                onClick={() => handleVote("down")}
                className={`
                  flex items-center h-7 sm:h-8 px-2 sm:px-2.5 rounded-md
                  border transition-all duration-150
                  ${
                    liked === "down"
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white"
                      : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
                  }
                `}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </Tooltip>

            <div className="w-px h-4 sm:h-5 mx-0.5 sm:mx-1 bg-gray-200 dark:bg-gray-800" />

            <Tooltip content="Leave a comment">
              <button
                onClick={() => setCommentOpen(true)}
                className="flex items-center gap-1.5 h-7 sm:h-8 px-2 sm:px-2.5 text-xs font-medium rounded-md
                           text-gray-500 dark:text-gray-400
                           hover:text-gray-900 dark:hover:text-gray-100
                           hover:bg-gray-100 dark:hover:bg-gray-900
                           border border-gray-200 dark:border-gray-800
                           hover:border-gray-400 dark:hover:border-gray-600
                           transition-colors duration-150"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Comment</span>
              </button>
            </Tooltip>

            <Tooltip content="Share this page">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                }}
                className="flex items-center h-7 sm:h-8 px-2 sm:px-2.5 rounded-md
                           text-gray-500 dark:text-gray-400
                           hover:text-gray-900 dark:hover:text-gray-100
                           hover:bg-gray-100 dark:hover:bg-gray-900
                           border border-gray-200 dark:border-gray-800
                           hover:border-gray-400 dark:hover:border-gray-600
                           transition-colors duration-150"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </Tooltip>

            <Tooltip content="Report an issue">
              <button
                className="flex items-center h-7 sm:h-8 px-2 sm:px-2.5 rounded-md
                           text-gray-500 dark:text-gray-400
                           hover:text-red-600 dark:hover:text-red-400
                           hover:bg-red-50 dark:hover:bg-red-950/40
                           border border-gray-200 dark:border-gray-800
                           hover:border-red-200 dark:hover:border-red-900
                           transition-colors duration-150"
              >
                <Flag className="w-3.5 h-3.5" />
              </button>
            </Tooltip>

            <div className="w-px h-4 sm:h-5 mx-0.5 sm:mx-1 bg-gray-200 dark:bg-gray-800" />

            <NewsletterWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterToolbar;
