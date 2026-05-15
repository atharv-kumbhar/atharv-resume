"use client";

import { motion } from "framer-motion";
import { Database, Layout, BarChart3, Cloud } from "lucide-react";

const skillGroups = [
  {
    title: "SQL & PL/SQL",
    icon: <Database size={24} />,
    skills: ["Joins", "Subqueries", "Views", "Constraints", "Analytical Functions", "Functions", "Stored Procedures", "Cursors", "Triggers"]
  },
  {
    title: "Power BI",
    icon: <BarChart3 size={24} />,
    skills: ["Data Modeling", "DAX", "Visualization", "KPI Design", "Dashboard Optimization"]
  },
  {
    title: "Power Apps",
    icon: <Layout size={24} />,
    skills: ["Custom Apps", "SharePoint Integration", "Power Fx", "Role-based UI"]
  },
  {
    title: "Big Data",
    icon: <Cloud size={24} />,
    skills: ["Databricks", "PySpark", "Scala"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Technical <span className="accent-text">Skills</span></h2>
          <p>A comprehensive toolkit for data engineering and business intelligence.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ color: "var(--accent-primary)", background: "rgba(0, 163, 255, 0.1)", padding: "0.75rem", borderRadius: "12px" }}>
                  {group.icon}
                </span>
                <h3 style={{ fontSize: "1.25rem" }}>{group.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span key={skill} style={{ 
                    fontSize: "0.8rem", 
                    padding: "0.3rem 0.8rem", 
                    background: "var(--bg-tertiary)", 
                    borderRadius: "6px",
                    color: "var(--text-secondary)"
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
