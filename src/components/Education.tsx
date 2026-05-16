"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import styles from "./portfolio.module.css";

const educationItems = [
  {
    degree: "Business Intelligence",
    institution: "Shivaji University",
    year: "2024",
    note: "Focused on data analytics, reporting, and decision-support systems.",
  },
  {
    degree: "Bachelor of Pharmacy",
    institution: "Shivaji University",
    year: "2019 to 2023",
    note: "Built a disciplined analytical base and transitioned that rigor into data work.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Ligade Patil Junior College of Science, Karad",
    year: "2018",
    note: "Science and mathematics background that supported the later move into structured problem solving.",
  },
];

const Education = () => {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>Education</span>
          <h2 className={styles.sectionTitle}>A background that moved from analytical science into business intelligence and data delivery.</h2>
          <p className={styles.sectionText}>
            The transition matters because it shaped how I work: structured thinking, careful analysis, and an eye for practical outcomes.
          </p>
        </motion.div>

        <div className={styles.educationGrid}>
          {educationItems.map((item, index) => (
            <motion.article
              key={item.degree}
              className={styles.educationCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className={styles.educationIcon}>
                <GraduationCap size={20} />
              </span>
              <div className={styles.educationMeta}>
                <span className={styles.dateBadge}>{item.year}</span>
                <h3>{item.degree}</h3>
                <strong>{item.institution}</strong>
              </div>
              <p>{item.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
