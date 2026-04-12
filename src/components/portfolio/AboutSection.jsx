import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Coffee } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    Icon: GraduationCap,
    text: "BTech Computer Science and Engineering - KLE Institute of Technology, Hubli",
  },
  { Icon: MapPin, text: "Based in Hubli, Karnataka, India" },
  { Icon: Briefcase, text: "Currently seeking internship opportunities" },
  { Icon: Coffee, text: "Fueled by curiosity and caffeine" },
];

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Passionate About Technology"
          subtitle="A brief introduction to who I am and what drives me."
        />

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex flex-col items-center mx-auto md:mx-0"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 scale-110"
              />

              {/* IMAGE FIXED */}
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 relative z-10">
                <img
                  src="/profile.jpg"
                  alt="Dhruva K Halappa"
                  className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
                />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-150 -z-10" />
            </div>

            <p className="mt-4 text-sm font-semibold text-foreground">
              Dhruva K Halappa
            </p>
            <p className="text-xs text-muted-foreground">
              CSE Student & Developer
            </p>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 flex-1"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I’m a Computer Science and Engineering student passionate about
              software development, problem-solving, and building real-world
              technology solutions. I enjoy transforming ideas into scalable
              applications and exploring modern tools that enhance user
              experience and performance.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I actively engage in technical communities,
              collaborate on projects, and contribute to innovation-driven
              initiatives. These experiences have strengthened my teamwork,
              communication, and leadership skills. I am keen to explore
              opportunities in software and web development where I can learn,
              grow, and make a meaningful impact.
            </p>

            {/* HIGHLIGHTS */}
            <div className="space-y-3 pt-2">
              {highlights.map(({ Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}