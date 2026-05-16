"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import styles from "./portfolio.module.css";

const experiencePoints = [
  "Monitor and maintain data pipelines built with Databricks, PySpark, and Scala.",
  "Troubleshoot ETL failures, data inconsistencies, and operational issues before they cascade downstream.",
  "Resolve support tickets related to scheduling, pipeline health, and production reliability.",
  "Collaborate with senior data engineers to tighten scripts, reduce friction, and improve overall system behavior.",
];

const experienceTools = ["Databricks", "PySpark", "Scala", "ETL support", "Issue handling", "Pipeline monitoring"];

const Experience = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>Experience</span>
          <h2 className={styles.sectionTitle}>Hands-on work in support engineering with direct exposure to live data operations.</h2>
          <p className={styles.sectionText}>
            The role sharpened the habits that matter in production environments: diagnosis, calm execution, and disciplined follow-through.
          </p>
        </motion.div>

        <div className={styles.experienceGrid}>
          <motion.article
            className={styles.experienceCard}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
          >
            <div className={styles.experienceTimeline}>
              <span className={styles.timelineDot} />
            </div>

            <div className={styles.experienceBody}>
              <div className={styles.experienceMeta}>
                <div>
                  <span className={styles.roleTag}>
                    <Briefcase size={16} />
                    Support Jr. Engineer
                  </span>
                  <h3 className={styles.experienceTitle}>mPHATEK Systems Pvt Ltd, Pune</h3>
                </div>
                <span className={styles.dateBadge}>Jul 2025 to Present</span>
              </div>

              <div className={styles.experienceList}>
                {experiencePoints.map((point) => (
                  <div key={point} className={styles.signalItem}>
                    <span className={styles.signalBullet} />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.aside
            className={styles.sidePanel}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className={styles.eyebrow}>What this role built</span>
            <h3 className={styles.subsectionTitle}>Reliability mindset</h3>
            <p className={styles.sectionText}>
              This work taught me to think beyond implementation and focus on what happens after go-live: support load, failure handling, and team trust.
            </p>
            <div className={styles.chipWrap}>
              {experienceTools.map((tool) => (
                <span key={tool} className={styles.chip}>
                  {tool}
                </span>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
