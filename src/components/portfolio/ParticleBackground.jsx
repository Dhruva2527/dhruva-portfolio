import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function ParticleBackground() {
  const particles = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [p.y + "%", (p.y - 20) + "%", p.y + "%"],
            x: [p.x + "%", (p.x + (Math.random() * 10 - 5)) + "%", p.x + "%"],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: p.x + "%",
            top: p.y + "%",
            width: p.size + "px",
            height: p.size + "px",
          }}
          className="rounded-full bg-foreground/20"
        />
      ))}
    </div>
  );
}