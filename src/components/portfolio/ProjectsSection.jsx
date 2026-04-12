import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Hotel Management System",
    description:
      "A full-stack hotel management system built with Python featuring room booking, guest management, billing, staff management, and an admin dashboard. Includes a complete frontend, backend, and database integration.",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhruva2527/hotel-management-system",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },

  // ─────────────────────────────────────────────────────────────────
  // FUTURE PROJECTS — remove the /* and */ around the one you want to add
  // ─────────────────────────────────────────────────────────────────

  /*
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS featuring smooth animations, dark mode, and a fully responsive layout.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/Dhruva2527",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
  },
  */

  /*
  {
    title: "Student Result Management System",
    description:
      "A web app to manage and display student exam results with role-based login for admin, teachers, and students.",
    tech: ["Python", "Django", "SQLite", "Bootstrap"],
    github: "https://github.com/Dhruva2527",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
  */

  /*
  {
    title: "Weather App",
    description:
      "A real-time weather forecasting app using OpenWeatherMap API with a clean UI showing temperature, humidity, and weekly forecast.",
    tech: ["React", "OpenWeatherMap API", "Tailwind CSS"],
    github: "https://github.com/Dhruva2527",
    image: "https://images.unsplash.com/photo-1504608524841-42584120d487?w=600&q=80",
  },
  */

  /*
  {
    title: "Chat Application",
    description:
      "A real-time chat application with rooms, private messaging, and online status indicators using WebSockets.",
    tech: ["Node.js", "Socket.io", "React", "MongoDB"],
    github: "https://github.com/Dhruva2527",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
  },
  */

  /*
  {
    title: "Expense Tracker",
    description:
      "A personal finance tracker with income/expense logging, category filters, monthly charts, and PDF export.",
    tech: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/Dhruva2527",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  */

  /*
  {
    title: "Face Recognition Attendance System",
    description:
      "An automated attendance system using OpenCV and face recognition to mark student presence in real time.",
    tech: ["Python", "OpenCV", "face_recognition", "SQLite"],
    github: "https://github.com/Dhruva2527",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  },
  */
];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills and creativity."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/40 transition-all hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs bg-secondary rounded-lg border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}