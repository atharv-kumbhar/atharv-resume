"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="divider" />
      <div className="container" style={{ marginTop: "3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <div className="section-icon"><Briefcase size={20} /></div>
          <h2 style={{ fontSize: "2rem" }}>Work <span className="accent-text">Experience</span></h2>
          <p style={{ fontSize: "0.95rem" }}>My professional journey in data engineering.</p>
        </motion.div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ position: "relative", paddingLeft: "3rem" }}
          >
            <div style={{ 
              position: "absolute", 
              left: "1.5rem", 
              top: "2rem", 
              bottom: "2rem", 
              width: "2px", 
              background: "linear-gradient(to bottom, var(--accent-primary), transparent)" 
            }} />
            <div style={{ 
              position: "absolute", 
              left: "1.05rem", 
              top: "2rem", 
              width: "1rem", 
              height: "1rem", 
              borderRadius: "50%", 
              background: "var(--accent-primary)",
              boxShadow: "0 0 15px var(--accent-primary)"
            }} />
            
            <div style={{ marginBottom: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>Support Jr. Engineer</h3>
                <p style={{ color: "var(--accent-primary)", fontWeight: "500" }}>mPHATEK Systems Pvt Ltd, Pune</p>
              </div>
              <span className="badge">Jul 2025 – Present</span>
            </div>

            <ul style={{ listStyle: "none", marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <ExperienceItem text="Monitored and maintained large-scale data pipelines using Databricks, PySpark, and Scala." />
              <ExperienceItem text="Solved data errors and system issues by troubleshooting ETL workflows and ensuring smooth data processing." />
              <ExperienceItem text="Handled support tickets related to pipeline failures, data inconsistencies, and job scheduling." />
              <ExperienceItem text="Collaborated with senior data engineers to optimize PySpark scripts and improve pipeline performance." />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ text }: { text: string }) => (
  <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
    <div style={{ marginTop: "0.5rem", width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-secondary)", flexShrink: 0 }} />
    <span style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>{text}</span>
  </li>
);

export default Experience;
