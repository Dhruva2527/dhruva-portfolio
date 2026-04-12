import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const MY_EMAIL = "dhruvakh2006@gmail.com";
/** @param {string} to @param {string} subject @param {string} body */
function buildGmailLink(to, subject, body) {
  return (
    "https://mail.google.com/mail/?view=cm&to=" +
    to +
    "&su=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body)
  );
}

const socials = [
  {
    Icon: Github,
    label: "GitHub",
    href: "https://github.com/Dhruva2527",
    handle: "@Dhruva2527",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhruva-k-h-6712b4387/",
    handle: "/in/dhruva-k-h",
  },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailClick = () => {
    const link = buildGmailLink(MY_EMAIL, "Hello from your portfolio", "");
    window.open(link, "_blank");
  };

  const handleSend = () => {
    const bodyText =
      "Hi Dhruva,\n\nMy name is " +
      name +
      ".\nMy email: " +
      email +
      "\n\n" +
      message;
    const link = buildGmailLink(
      MY_EMAIL,
      subject || "Hello from your portfolio",
      bodyText
    );
    window.open(link, "_blank");
  };

  return (
    <AnimatedSection id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-5">

              {/* Email row */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <button
                    onClick={handleEmailClick}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left"
                  >
                    {MY_EMAIL}
                  </button>
                </div>
              </motion.div>

              {/* Location row */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-foreground font-medium">Hubli, Karnataka, India</p>
                </div>
              </motion.div>

            </div>

            {/* Socials */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-3 flex-wrap">
                {socials.map(({ Icon, label, href, handle }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{handle}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Gmail compose form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none text-sm"
              />
            </div>

            <motion.button
              onClick={handleSend}
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(59,130,246,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 bg-primary text-primary-foreground font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
            >
              <Send className="w-4 h-4" />
              Send Message via Gmail
            </motion.button>

            <p className="text-xs text-center text-muted-foreground">
              Opens Gmail with your message pre-filled — just hit Send!
            </p>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
}