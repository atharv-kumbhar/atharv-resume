"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import styles from "./portfolio.module.css";

const contactDetails = [
  { icon: <Mail size={18} />, label: "Email", value: "katharv925@gmail.com", href: "mailto:katharv925@gmail.com" },
  { icon: <Phone size={18} />, label: "Phone", value: "+91 7420004493", href: "tel:+917420004493" },
  { icon: <MapPin size={18} />, label: "Location", value: "Pune, India", href: "#top" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.footerPanel}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.footerIntro}>
            <span className={styles.eyebrow}>Contact</span>
            <h2 className={styles.footerTitle}>Looking for a data engineer with strong database logic and business-facing delivery instincts?</h2>
            <p className={styles.sectionText}>
              I am open to roles and conversations around data engineering, business intelligence, and workflow automation.
            </p>
          </div>

          <div className={styles.footerContacts}>
            {contactDetails.map((item) => (
              <a key={item.label} href={item.href} className={styles.footerContactCard}>
                <span className={styles.contactIcon}>{item.icon}</span>
                <span>
                  <strong>{item.label}</strong>
                  {item.value}
                </span>
              </a>
            ))}
          </div>

          <div className={styles.footerActions}>
            <a href="mailto:katharv925@gmail.com" className={styles.primaryButton}>
              Get in Touch
            </a>
            <button type="button" className={styles.backToTop} onClick={scrollToTop}>
              <ArrowUp size={16} />
              Back to top
            </button>
          </div>
        </motion.div>

        <div className={styles.footerMeta}>
          <span>Atharv Kumbhar</span>
          <span>{new Date().getFullYear()} portfolio built with Next.js</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
