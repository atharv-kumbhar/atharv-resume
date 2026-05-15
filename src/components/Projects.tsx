"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, BarChart, Smartphone, Folder } from "lucide-react";

const projects = [
  {
    title: "Complaint Management System",
    type: "Backend Automation",
    icon: <Database size={20} />,
    tech: ["Oracle SQL", "PL/SQL", "Scheduler"],
    description: "Automated complaint tracking, technician assignment, and escalation workflows with real-time audit trails.",
    features: ["Automated technician assignment", "Escalation logic (2-day inactivity)", "Status audit via triggers", "Analytical views for reporting"]
  },
  {
    title: "Inventory & Supplier Management",
    type: "Process Optimization",
    icon: <Database size={20} />,
    tech: ["SQL", "PL/SQL", "Materialized Views"],
    description: "Robust inventory system managing purchase orders, supplier performance, and automated reorder alerts.",
    features: ["Auto stock updates on PO receipt", "Price/Quantity change logging", "Window functions for supplier insights", "Power BI-ready analytics"]
  },
  {
    title: "Power BI Performance Analysis",
    type: "Data Visualization",
    icon: <BarChart size={20} />,
    tech: ["Power BI", "Excel", "DAX"],
    description: "Enhanced provider performance analytics by integrating external classification data and operational KPIs.",
    features: ["Dynamic slicing and filtering", "Calculated KPIs using DAX", "Stakeholder-ready visuals", "Strict deadline delivery"]
  },
  {
    title: "Maintenance Spend Analysis",
    type: "Business Intelligence",
    icon: <BarChart size={20} />,
    tech: ["Power BI", "DAX", "Time-series"],
    description: "Interactive dashboard tracking purchase workflows, approval efficiency, and supplier performance.",
    features: ["Request-to-order conversion metrics", "Anomaly detection visuals", "Automated refresh cycles", "Cost saving actionable insights"]
  },
  {
    title: "Quality Management App",
    type: "App Development",
    icon: <Smartphone size={20} />,
    tech: ["Power Apps", "SharePoint", "Power Fx"],
    description: "Modern UI-based app for quality management workflows with role-based access and real-time validations.",
    features: ["Role-based visibility", "SharePoint attachment validation", "Delegation-aware patterns", "Dynamic status filters"]
  },
  {
    title: "Purchase Order Management App",
    type: "App Development",
    icon: <Smartphone size={20} />,
    tech: ["Power Apps", "SharePoint", "Patch()"],
    description: "Custom solution for managing Purchase and Quote Orders with automated form handling and submission.",
    features: ["Auto-generated Request IDs", "Gallery-based line item entry", "One-click submission (Patch)", "Real-time integrity checks"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="divider" />
      <div className="container" style={{ marginTop: "3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <div className="section-icon"><Folder size={20} /></div>
          <h2 style={{ fontSize: "2rem" }}>Featured <span className="accent-text">Projects</span></h2>
          <p style={{ fontSize: "0.95rem" }}>A selection of my recent database automation work.</p>
        </motion.div>

        <motion.div 
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}
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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="glass-card"
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-primary)" }}>
                  {project.icon}
                  <span style={{ fontSize: "0.8rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em" }}>{project.type}</span>
                </div>
              </div>

              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{project.title}</h3>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>{project.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", background: "rgba(255,255,255,0.05)", borderRadius: "4px", color: "var(--accent-secondary)" }}>{t}</span>
                ))}
              </div>

              <div style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "1.5rem" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-primary)", marginBottom: "0.75rem" }}>Key Features:</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {project.features.slice(0, 3).map((f, i) => (
                    <li key={i} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                      <span style={{ color: "var(--accent-primary)" }}>•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
