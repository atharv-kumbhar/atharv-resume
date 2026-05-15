"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Business Intelligence",
      institution: "Shivaji University",
      year: "2024",
      description: "Advanced study in data analytics, modeling, and business reporting tools."
    },
    {
      degree: "Bachelor of Pharmacy",
      institution: "Shivaji University",
      year: "2019–2023",
      description: "Undergraduate degree focusing on pharmaceutical sciences and analytical methods."
    },
    {
      degree: "HSC (12th Grade)",
      institution: "Ligade Patil Junior College of Science, Karad",
      year: "2018",
      description: "Concentration in Science and Mathematics."
    }
  ];

  return (
    <section id="education" className="section">
      <div className="divider" />
      <div className="container" style={{ marginTop: "3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <div className="section-icon"><GraduationCap size={20} /></div>
          <h2 style={{ fontSize: "2rem" }}>Academic <span className="accent-text">Background</span></h2>
          <p style={{ fontSize: "0.95rem" }}>The foundation of my technical expertise.</p>
        </motion.div>

        <motion.div 
          style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
              }}
              className="glass-card education-item"
              style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
            >
              <div style={{ 
                background: "rgba(0, 163, 255, 0.1)", 
                padding: "1rem", 
                borderRadius: "16px",
                color: "var(--accent-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <GraduationCap size={28} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ fontSize: "1.2rem" }}>{item.degree}</h3>
                  <span style={{ fontSize: "0.9rem", color: "var(--accent-primary)", fontWeight: "600" }}>{item.year}</span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>{item.institution}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
