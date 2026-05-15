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
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="section" style={{ minHeight: "85vh", display: "flex", alignItems: "center", paddingTop: "6rem", position: "relative" }}>
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} style={{ marginBottom: "1rem" }}>
            <h2 className="accent-text" style={{ fontSize: "1.25rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              Atharv Kumbhar
            </h2>
          </motion.div>
          
          <motion.h1 
            variants={item}
            style={{ fontSize: "clamp(3rem, 8vw, 5rem)", marginBottom: "1.5rem", lineHeight: "1.1", fontWeight: "800" }}
          >
            SQL & PL/SQL <br /> 
            <span className="accent-text">Expert.</span>
          </motion.h1>

          <motion.p 
            variants={item}
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", marginBottom: "2.5rem", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: "1.4" }}
          >
            I build scalable database solutions and high-performance visual analytics with SQL, Power BI, and Power Apps.
          </motion.p>

          <motion.div
            variants={item}
            style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}
          >
            <ContactInfo icon={<Mail size={16} />} label="katharv925@gmail.com" />
            <ContactInfo icon={<Phone size={16} />} label="7420004493" />
            <ContactInfo icon={<MapPin size={16} />} label="Pune, India" />
          </motion.div>

          <motion.div
            variants={item}
            style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                padding: "1rem 2rem", 
                borderRadius: "100px", 
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--accent-primary)",
                color: "#fff",
                fontWeight: "600",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              View Work <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#skills"
              whileHover={{ x: 5 }}
              style={{ color: "var(--text-primary)", fontWeight: "600", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
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
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
    <span style={{ color: "var(--accent-primary)", background: "rgba(108, 142, 242, 0.05)", padding: "0.4rem", borderRadius: "8px" }}>{icon}</span>
    <span>{label}</span>
  </div>
);

export default Hero;
