import React from "react";
import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-foreground font-bold font-mono"
        >
          <Code2 className="w-5 h-5 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dhruva K Halappa
          </span>
        </motion.a>

        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> using React & Tailwind CSS
        </p>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}