"use client";

import { useState, useRef, useEffect } from "react";
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
            className="fixed inset-0 z-40 bg-overlay backdrop-blur-[2px]"
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="fixed z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 bg-card border border-primary shadow-2xl rounded-xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-primary sm:px-5 sm:py-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-muted" />
                <span className="text-sm font-semibold text-primary">
                  Leave a comment
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded text-muted hover:text-primary hover:bg-tertiary transition-colors duration-150"
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
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <p className="text-sm font-medium text-primary">
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
                    className="w-full resize-none rounded-lg text-sm px-3 py-2.5 bg-tertiary border border-primary text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-strong transition-shadow duration-150"
                  />
                  <p className="mt-2 text-xs text-muted">
                    Comments are reviewed by the documentation team.
                  </p>
                </>
              )}
            </div>

            {!submitted && (
              <div className="flex items-center justify-end gap-2 px-4 pb-4 sm:px-5">
                <button
                  onClick={onClose}
                  className="px-3 sm:px-3.5 py-2 text-sm rounded-lg text-muted hover:bg-tertiary transition-colors duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!comment.trim()}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-sm font-medium btn-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
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
        className="flex items-center gap-1.5 text-xs text-primary font-medium"
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
              className="h-7 px-2.5 text-xs rounded-md bg-tertiary border border-primary text-primary placeholder-muted focus:outline-none focus:ring-1 focus:ring-strong w-32 sm:w-40 transition-shadow"
            />
            <button
              onClick={handleSubscribe}
              className="h-7 px-2 sm:px-2.5 text-xs font-medium rounded-md btn-primary shrink-0"
            >
              Subscribe
            </button>
            <button
              onClick={() => {
                setExpanded(false);
                setEmail("");
              }}
              className="p-1 transition-colors text-muted hover:text-primary"
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
                className="flex items-center gap-1.5 h-8 px-2 sm:px-3 text-xs font-medium rounded-md text-muted hover:text-primary hover:bg-tertiary border border-primary transition-colors duration-150"
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
          bg-primary
          border-t border-primary
          ${className}
        `}
      >
        <div className="flex items-center justify-between px-3 py-3 border-b border-primary sm:px-6 sm:py-4">
          {prevPage ? (
            <a
              href={prevPage.href}
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted transition-colors duration-150 group hover:text-primary"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-180 transition-transform duration-150 group-hover:-translate-x-0.5 shrink-0" />
              <span>
                <span className="block text-[10px] sm:text-xs text-muted mb-0.5">
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
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-right text-muted transition-colors duration-150 group hover:text-primary"
            >
              <span>
                <span className="block text-[10px] sm:text-xs text-muted mb-0.5">
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
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Updated {lastUpdated}</span>
            </div>
            <a
              href={githubEditUrl}
              className="flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors duration-150"
            >
              <GitBranch className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Edit on GitHub</span>
              <span className="sm:hidden">Edit</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            <span className="hidden mr-1 text-xs text-muted sm:block">
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
                      ? "bg-inverse text-inverse border-strong"
                      : "text-muted border-primary hover:border-strong hover:text-primary"
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
                      ? "bg-inverse text-inverse border-strong"
                      : "text-muted border-primary hover:border-strong hover:text-primary"
                  }
                `}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </Tooltip>

            <div className="w-px h-4 sm:h-5 mx-0.5 sm:mx-1 bg-primary" />

            <Tooltip content="Leave a comment">
              <button
                onClick={() => setCommentOpen(true)}
                className="flex items-center gap-1.5 h-7 sm:h-8 px-2 sm:px-2.5 text-xs font-medium rounded-md text-muted hover:text-primary hover:bg-tertiary border border-primary transition-colors duration-150"
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
                className="flex items-center h-7 sm:h-8 px-2 sm:px-2.5 rounded-md text-muted hover:text-primary hover:bg-tertiary border border-primary transition-colors duration-150"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </Tooltip>

            <Tooltip content="Report an issue">
              <button className="flex items-center h-7 sm:h-8 px-2 sm:px-2.5 rounded-md text-muted hover:text-strong hover:bg-tertiary border border-primary transition-colors duration-150">
                <Flag className="w-3.5 h-3.5" />
              </button>
            </Tooltip>

            <div className="w-px h-4 sm:h-5 mx-0.5 sm:mx-1 bg-primary" />

            <NewsletterWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterToolbar;
