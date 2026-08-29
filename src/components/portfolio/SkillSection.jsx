import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Globe, Palette, Bot } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Frontend Development",
    Icon: Code2,
    subtitle: "Building responsive and interactive UIs",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    Icon: Server,
    subtitle: "Creating robust server-side applications",
    skills: ["Node.js", "PHP", "TypeScript", "Python", "JavaScript"],
  },
  {
    title: "Database & Storage",
    Icon: Database,
    subtitle: "Managing and optimizing data storage",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "DevOps & Deployment",
    Icon: Globe,
    subtitle: "Automating and optimizing deployments",
    skills: ["Vercel", "GitHub", "Git", ],
  },
  {
    title: "UI/UX Design",
    Icon: Palette,
    subtitle: "Modern UI/UX experiences",
    skills: ["Figma", "Canva",],
  },
  {
    title: "AI Agents",
    Icon: Bot,
    subtitle: "Building AI agents to automate tasks",
    skills: ["Langchain", "OpenAI API", "Prompt Engineering"],
  },
];

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title="My Tech Stack"
          subtitle="I've worked with a variety of technologies and frameworks to create robust and scalable applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
              className="p-6 rounded-xl bg-card border border-border transition-all"
            >
              {/* Icon */}
              <div className="mb-4">
                <cat.Icon className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
              </div>

              {/* Title + subtitle */}
              <h3 className="text-base font-bold text-foreground mb-1">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{cat.subtitle}</p>

              {/* Skills as dot list in 2 columns */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                    <span className="text-xs text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
