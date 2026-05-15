"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "8rem", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ maxWidth: "850px" }}
        >
          <motion.div variants={item}>
            <span className="badge" style={{ marginBottom: "2rem", display: "inline-block" }}>
              <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-secondary)", marginRight: "8px" }} />
              Available for Data Engineering Roles
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)", marginBottom: "2rem", lineHeight: "1.05", fontWeight: "800" }}
          >
            Crafting <span className="accent-text">Data</span> <br /> 
            into Decisions<span className="accent-text">.</span>
          </motion.h1>

          <motion.p 
            variants={item}
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", marginBottom: "3rem", color: "var(--text-secondary)", maxWidth: "700px", lineHeight: "1.5" }}
          >
            I&apos;m <span style={{ color: "var(--text-primary)", fontWeight: "600" }}>Atharv Kumbhar</span>, a SQL & PL/SQL expert 
            dedicated to building scalable database solutions and high-performance visual analytics.
          </motion.p>

          <motion.div
            variants={item}
            style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}
          >
            <ContactInfo icon={<Mail size={18} />} label="katharv925@gmail.com" />
            <ContactInfo icon={<Phone size={18} />} label="7420004493" />
            <ContactInfo icon={<MapPin size={18} />} label="Pune, India" />
          </motion.div>

          <motion.div
            variants={item}
            style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                padding: "1.2rem 2.8rem", 
                borderRadius: "100px", 
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "var(--accent-primary)",
                color: "#fff",
                fontWeight: "600",
                fontSize: "1.1rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Explore Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              href="#skills"
              whileHover={{ x: 5 }}
              style={{ color: "var(--text-primary)", fontWeight: "600", fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              My Skills
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "1rem" }}>
    <span style={{ color: "var(--accent-primary)", background: "rgba(108, 142, 242, 0.05)", padding: "0.5rem", borderRadius: "10px" }}>{icon}</span>
    <span>{label}</span>
  </div>
);

export default Hero;
