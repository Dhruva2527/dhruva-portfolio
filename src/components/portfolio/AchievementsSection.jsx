import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Star, FileCheck, ChevronDown, ChevronUp, ExternalLink, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    Icon: Trophy,
    title: "1st Place — VIBE-A-THON 2025",
    description: "Secured 1st position at the 8-hour hackathon challenge organized by IEEE Computer Society, KLE Institute of Technology, in collaboration with OS-Code.",
    year: "2025",
    certificateUrl: "/cert_kle1stwin.jpg",
  },
  {
    Icon: Award,
    title: "Achievement — Techradiance Grand Finale, IIT Hyderabad",
    description: "Recognized for outstanding performance at the Techradiance Grand Finale organized by elan & nvision, IIT Hyderabad on 15-16 April 2023.",
    year: "2023",
    certificateUrl: "/cert_hyd_hack.jpg",
  },
  {
    Icon: Star,
    title: "AI Skills Passport — EY & Microsoft",
    description: "Completed the AI Skills Passport course offered by EY and Microsoft, covering sustainability, business & entrepreneurship, and technology sections.",
    year: "2025",
    certificateUrl: "/cert_ai_skill_passport.jpg",
  },
  {
    Icon: FileCheck,
    title: "Cybersecurity Analyst Job Simulation — Tata (Forage)",
    description: "Completed practical tasks in IAM fundamentals, IAM strategy assessment, crafting custom IAM solutions, and platform integration.",
    year: "2025",
    certificateUrl: "/cert_cybersecurity.jpg",
  },
  {
    Icon: Award,
    title: "GenAI Powered Data Analytics Simulation — Tata (Forage)",
    description: "Completed practical tasks in exploratory data analysis, predicting delinquency with AI, business report storytelling, and implementing AI-driven collections strategy.",
    year: "2025",
    certificateUrl: "/cert_gen_ai.jpg",
  },
  {
    Icon: Trophy,
    title: "INVENTRA-2K25 — KLE College of Engineering, Chikodi",
    description: "Awarded participation at the 24-hour National Level Hackathon 'Dare to Invent' for presenting a remarkable idea on the given theme.",
    year: "2025",
    certificateUrl: "/cert_chikodi_hack.jpg",
  },
  {
    Icon: Star,
    title: "Hack to Future-2025 — Gogte Institute of Technology",
    description: "Successfully participated in the hackathon organized by CSE Department (ACE-CSI) in association with CodeChef, KLS GIT Club Chapter.",
    year: "2025",
    certificateUrl: "/cert_gogte_hack.jpg",
  },
  {
    Icon: Award,
    title: "EKAIVA Hackathon — SDMCET, Dharwad",
    description: "Attended EKAIVA Hackathon 2025 at SDMCET, Dharwad, organized by Agamya Cyber Tech in association with CySecK and IEEE KLEIT Computer Society.",
    year: "2025",
    certificateUrl: "/cert_sdm_hack.jpg",
  },
  {
    Icon: FileCheck,
    title: "Agamya Tech Summit 2025",
    description: "Attended the Agamya Tech Summit 2025 at SDMCET, Dharwad, organized by Agamya Cyber Tech in association with SDMCET.",
    year: "2025",
    certificateUrl: "/cert_sdm_tech_summit.jpg",
  },
  {
    Icon: Trophy,
    title: "InnovateX2025 — KLS Arts & Science Institute, Hubballi",
    description: "Participated in the 6-hour InnovateX2025 Hackathon organized by Institution's Innovation Council (IIC) on 19th November 2025.",
    year: "2025",
    certificateUrl: "/cert_kls_hackk.jpg",
  },
  {
    Icon: Star,
    title: "1st Prize — KLEIT Techie Show (Semester I)",
    description: "Won First prize in the project exhibition organized by Department of Basic Science, KLE Institute of Technology, academic year 2024-25.",
    year: "2024",
    certificateUrl: "/cert_sem1project.jpg",
  },
  {
    Icon: Award,
    title: "Prize — KLEIT Techie Show (Semester II)",
    description: "Won a prize in the project exhibition organized by Department of Basic Science, KLE Institute of Technology, academic year 2024-25.",
    year: "2024",
    certificateUrl: "/cert_sem2project.jpg",
  },
];

const INITIAL_COUNT = 6;

function CertificateModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full max-w-2xl bg-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-border/50">
          <div>
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{item.year}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5">
          {item.certificateUrl ? (
            <img
              src={item.certificateUrl}
              alt={item.title}
              className="w-full rounded-xl object-contain max-h-[60vh]"
            />
          ) : (
            <div className="w-full h-64 rounded-xl bg-secondary/50 border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <item.Icon className="w-10 h-10 text-primary/40" />
              <p className="text-sm font-medium">Certificate not available</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const visible = showAll ? achievements : achievements.slice(0, INITIAL_COUNT);

  return (
    <AnimatedSection id="achievements" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Achievements"
          title="Milestones & Certifications"
          subtitle="Recognitions and certifications that reflect my growth and dedication."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setSelected(item)}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="text-xs text-primary/70 group-hover:text-primary transition-colors font-medium flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {achievements.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => setShowAll((v) => !v)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium"
            >
              {showAll ? (
                <><ChevronUp className="w-4 h-4" />Show Less</>
              ) : (
                <><ChevronDown className="w-4 h-4" />Show More ({achievements.length - INITIAL_COUNT} more)</>
              )}
            </motion.button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {selected && <CertificateModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </AnimatedSection>
  );
}
