"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Folder, Layout } from "lucide-react";
import styles from "./portfolio.module.css";

const featuredProjects = [
  {
    title: "Complaint Management System",
    category: "Database automation",
    icon: <Database size={18} />,
    description:
      "A structured backend workflow for complaint tracking, technician assignment, escalation management, and audit visibility.",
    highlights: [
      "Automated assignment and escalation logic",
      "Trigger-based audit tracking for status movement",
      "Reporting-friendly views for operational monitoring",
    ],
    stack: ["Oracle SQL", "PL/SQL", "Scheduler"],
  },
  {
    title: "Inventory and Supplier Management",
    category: "Process optimization",
    icon: <Database size={18} />,
    description:
      "A robust data model for purchase flow visibility, supplier review, stock movement, and reorder readiness.",
    highlights: [
      "Inventory updates tied to purchase events",
      "Change logging for pricing and quantity revisions",
      "Analytics-ready structures for supplier comparisons",
    ],
    stack: ["SQL", "PL/SQL", "Materialized Views"],
  },
  {
    title: "Maintenance Spend Analysis",
    category: "Business intelligence",
    icon: <BarChart3 size={18} />,
    description:
      "An operational dashboard built to surface approval bottlenecks, purchase movement, and supplier-level spending patterns.",
    highlights: [
      "Interactive KPI views for review meetings",
      "Time-aware analysis for approvals and delays",
      "Actionable reporting designed for non-technical stakeholders",
    ],
    stack: ["Power BI", "DAX", "Time-series analysis"],
  },
  {
    title: "Quality Management App",
    category: "Workflow app",
    icon: <Layout size={18} />,
    description:
      "A role-aware Power Apps interface that improved quality workflow visibility with clean validation and SharePoint-backed data handling.",
    highlights: [
      "Role-based visibility and routing",
      "Attachment validation and dynamic filters",
      "Interface logic shaped for practical day-to-day use",
    ],
    stack: ["Power Apps", "SharePoint", "Power Fx"],
  },
];

const additionalWork = [
  "Power BI performance analysis dashboard",
  "Purchase order management app",
];

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>Selected work</span>
          <h2 className={styles.sectionTitle}>Projects shaped around operational clarity, automation, and data-backed decision making.</h2>
          <p className={styles.sectionText}>
            These are not visual exercises. Each project is anchored in a workflow problem, a reporting need, or a process that needed tighter control.
          </p>
        </motion.div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className={styles.projectHeader}>
                <span className={styles.projectCategory}>
                  {project.icon}
                  {project.category}
                </span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectFeatureList}>
                {project.highlights.map((feature) => (
                  <div key={feature} className={styles.signalItem}>
                    <span className={styles.signalBullet} />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <div className={styles.chipWrap}>
                {project.stack.map((item) => (
                  <span key={item} className={styles.chip}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.additionalWorkCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className={styles.additionalWorkHeader}>
            <span className={styles.projectCategory}>
              <Folder size={18} />
              Additional work
            </span>
            <p className={styles.sectionText}>Also delivered across analytics and workflow tooling.</p>
          </div>
          <div className={styles.chipWrap}>
            {additionalWork.map((item) => (
              <span key={item} className={styles.chip}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
