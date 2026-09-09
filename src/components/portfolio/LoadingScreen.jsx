import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, User, Globe } from "lucide-react";

/**
 * Full-screen intro loader.
 * Shows once on mount, counts a progress bar up to 100%,
 * then wipes away to reveal the actual site underneath.
 *
 * Usage (see Home.jsx):
 *   const [loading, setLoading] = useState(true);
 *   <AnimatePresence>
 *     {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
 *   </AnimatePresence>
 *   {!loading && <RestOfSite />}
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Lock scroll while the loader is up
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Animate progress 0 -> 100 with slightly irregular steps (feels less mechanical)
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 6; // 6–24% per tick
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        // small pause at 100% before wiping out
        setTimeout(() => setExiting(true), 350);
      }
      setProgress(Math.floor(current));
    }, 220);

    return () => clearInterval(interval);
  }, []);

  // Once the exit animation finishes, tell the parent to unmount us
  const handleExitComplete = () => {
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!exiting && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* subtle grid, same as the hero section */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          {/* soft glow behind the text, same tone as the hero blobs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[28rem] h-[28rem] bg-foreground/5 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* icon row */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6 text-muted-foreground"
            >
              <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                <User className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </span>
            </motion.div>

            {/* heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-2xl sm:text-4xl font-bold text-foreground mb-2 font-mono"
            >
              Welcome to my{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Portfolio Website
              </span>
            </motion.h1>

            {/* subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-muted-foreground mb-6 font-mono"
            >
              Turning Ideas Into Interactive Experiences
            </motion.p>

            {/* url pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="px-3 py-1 rounded-full bg-secondary/60 border border-border text-[11px] sm:text-xs text-muted-foreground font-mono mb-8"
            >
              dhruvasportfolio.vercel.app
            </motion.div>

            {/* progress bar */}
            <div className="w-56 sm:w-72 h-[2px] bg-border rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>

            {/* percentage */}
            <span className="text-xs text-muted-foreground/70 font-mono tabular-nums">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
