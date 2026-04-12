import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Eye, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function ResumeSection() {
  const [preview, setPreview] = useState(false);

  return (
    <AnimatedSection id="resume" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]" />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
            >
              <FileText className="w-7 h-7 text-primary" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to know more?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Download my resume for a complete overview of my experience, education, and skills.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/resume_img.jpg"
                download="Dhruva_Kirankumar_Halappa_Resume.jpg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-xl transition-shadow"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => setPreview(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-medium rounded-full hover:bg-secondary/50 transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Online
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal — only shows on "View Online" click */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-full max-w-3xl bg-card rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground text-sm">
                    Resume — Dhruva Kirankumar Halappa
                  </span>
                </div>
                <button
                  onClick={() => setPreview(false)}
                  className="p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 overflow-auto max-h-[80vh]">
                <img
                  src="/resume_img.jpg"
                  alt="Resume"
                  className="w-full object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
