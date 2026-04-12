import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// ✅ Correct order
const roles = ["Software Engineer", "Problem Solver", "Full Stack Developer"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /** @type {React.MutableRefObject<number | null>} */
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          // pause before deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
          return;
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const speed = isDeleting ? 40 : 80;

    timeoutRef.current = setTimeout(handleTyping, speed);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-foreground/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-foreground/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -50, 80, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-foreground/3 rounded-full blur-3xl"
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono">
            Available for opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Dhruva K Halappa
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 h-10 flex items-center justify-center"
        >
          <span className="font-mono">
            {text}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-primary ml-1"
            />
          </span>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["IEEE AESS KLEIT", "OSCode KLEIT", "Placement Coordinator"].map(
            (title, i) => (
              <span
                key={i}
                className="px-4 py-1.5 text-sm bg-secondary/60 border rounded-full hover:text-primary transition"
              >
                {title}
              </span>
            )
          )}
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/80 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border rounded-full hover:bg-secondary/50 transition"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-5">
          <a href="https://github.com/Dhruva2527" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruva-k-h-6712b4387"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
         <a href="https://mail.google.com/mail/?view=cm&to=dhruvakh2006@gmail.com" target="_blank" rel="noreferrer">
            <Mail />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown />
      </motion.a>
    </section>
  );
}