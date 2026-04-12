import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20 rounded-full mb-4 tracking-wider uppercase"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}