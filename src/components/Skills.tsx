"use client";

import { motion } from "framer-motion";
import { BarChart3, Cloud, Database, Layout } from "lucide-react";
import styles from "./portfolio.module.css";

const capabilityGroups = [
  {
    title: "Database Engineering",
    icon: <Database size={20} />,
    summary: "Structured SQL and PL/SQL work focused on stability, logic clarity, and maintainable reporting layers.",
    skills: ["Joins", "Subqueries", "Views", "Constraints", "Analytical Functions", "Stored Procedures", "Triggers", "Cursors"],
  },
  {
    title: "Business Intelligence",
    icon: <BarChart3 size={20} />,
    summary: "Power BI dashboards designed for operational reviews, KPI visibility, and stakeholder-ready storytelling.",
    skills: ["Data Modeling", "DAX", "Dashboard Design", "KPI Tracking", "Interactive Filtering", "Performance Tuning"],
  },
  {
    title: "Workflow Apps",
    icon: <Layout size={20} />,
    summary: "Business-facing Power Apps experiences that reduce manual work and improve process transparency.",
    skills: ["Power Apps", "Power Fx", "SharePoint Integration", "Validation Logic", "Role-based UI", "Patch Workflows"],
  },
  {
    title: "Pipeline Support",
    icon: <Cloud size={20} />,
    summary: "Hands-on exposure to maintaining and troubleshooting production data pipelines and job execution flows.",
    skills: ["Databricks", "PySpark", "Scala", "Support Tickets", "ETL Monitoring", "Issue Triage"],
  },
];

const workingStyle = [
  "I prefer systems that are readable, testable, and easy for the next engineer to own.",
  "I design with both technical teams and business users in mind, so outputs feel useful instead of merely correct.",
  "I care about supportability: fewer manual hand-offs, fewer hidden failure points, and cleaner reporting logic.",
];

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>Capabilities</span>
          <h2 className={styles.sectionTitle}>A portfolio built around data reliability, business clarity, and usable delivery.</h2>
          <p className={styles.sectionText}>
            The stack is practical by design: strong database logic, thoughtful reporting layers, and workflow tools that help teams move.
          </p>
        </motion.div>

        <div className={styles.capabilityGrid}>
          {capabilityGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className={styles.capabilityCard}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={styles.capabilityHeader}>
                <span className={styles.capabilityIcon}>{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <p className={styles.capabilityText}>{group.summary}</p>
              <div className={styles.chipWrap}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.chip}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.workingStyleCard}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <div>
            <span className={styles.eyebrow}>Working style</span>
            <h3 className={styles.subsectionTitle}>How I like to build</h3>
          </div>
          <div className={styles.signalList}>
            {workingStyle.map((item) => (
              <div key={item} className={styles.signalItem}>
                <span className={styles.signalBullet} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
