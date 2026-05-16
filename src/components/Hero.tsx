"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import styles from "./portfolio.module.css";

const heroStats = [
  { label: "Data foundations", value: "SQL / PL-SQL" },
  { label: "Analytics delivery", value: "Power BI / DAX" },
  { label: "Platform exposure", value: "Databricks / PySpark" },
];

const contactItems = [
  { icon: <Mail size={16} />, label: "Email", value: "katharv925@gmail.com", href: "mailto:katharv925@gmail.com" },
  { icon: <Phone size={16} />, label: "Phone", value: "+91 7420004493", href: "tel:+917420004493" },
  { icon: <MapPin size={16} />, label: "Base", value: "Pune, India", href: "#contact" },
];

const deliverySignals = [
  "Designs schema logic, stored procedures, triggers, and reporting views with maintainability in mind.",
  "Builds dashboards and workflow apps that help operations teams move faster with less manual checking.",
  "Works comfortably around pipeline support, issue triage, and data quality follow-through.",
];

const Hero = () => {
  return (
    <section id="top" className={`${styles.section} ${styles.heroSection}`}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroCopy}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.eyebrow}>Data Engineer / BI Developer / Workflow Automation</span>
            <h1 className={styles.heroTitle}>
              Clean data systems.
              <br />
              Clear decisions.
              <br />
              Calm delivery.
            </h1>
            <p className={styles.heroLead}>
              I build database workflows, operational dashboards, and business-facing apps that turn fragmented
              processes into reliable reporting and smoother day-to-day execution.
            </p>

            <div className={styles.heroActions}>
              <motion.a
                href="#projects"
                className={styles.primaryButton}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Projects
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className={styles.secondaryButton}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Conversation
              </motion.a>
            </div>

            <div className={styles.contactRow}>
              {contactItems.map((item) => (
                <a key={item.label} href={item.href} className={styles.contactCard}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <span>
                    <strong>{item.label}</strong>
                    {item.value}
                  </span>
                </a>
              ))}
            </div>

            <div className={styles.heroStatGrid}>
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.heroStatCard}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.1, duration: 0.55 }}
                >
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.heroPanel}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.heroPanelHeader}>
              <span className={styles.softBadge}>Currently building from support into full-stack data delivery</span>
              <div className={styles.panelPill}>mPHATEK Systems / Pune</div>
            </div>

            <div className={styles.panelBlock}>
              <p className={styles.panelLabel}>Current role</p>
              <h2 className={styles.panelTitle}>Support Jr. Engineer working across data pipelines, issue resolution, and automation.</h2>
              <p className={styles.panelText}>
                My portfolio sits at the intersection of database engineering, reporting clarity, and operational tooling.
                The goal is always the same: make the system easier to trust and easier to use.
              </p>
            </div>

            <div className={styles.signalList}>
              {deliverySignals.map((signal, index) => (
                <motion.div
                  key={signal}
                  className={styles.signalItem}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.12, duration: 0.45 }}
                >
                  <span className={styles.signalBullet} />
                  <p>{signal}</p>
                </motion.div>
              ))}
            </div>

            <div className={styles.stackPanel}>
              <div>
                <p className={styles.panelLabel}>Preferred stack</p>
                <div className={styles.stackChips}>
                  {["Oracle SQL", "PL/SQL", "Power BI", "Power Apps", "Databricks", "PySpark"].map((item) => (
                    <span key={item} className={styles.stackChip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
