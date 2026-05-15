"use client";

import { motion } from "framer-motion";
import { Globe, Code, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ padding: "4rem 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--glass-border)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>ATHARV<span className="accent-text">.</span></h2>
            <p style={{ fontSize: "0.9rem", maxWidth: "300px" }}>
              Building efficient, data-driven solutions with SQL, Power BI, and Power Apps.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <SocialLink href="https://linkedin.com" icon={<Globe size={20} />} />
            <SocialLink href="https://github.com" icon={<Code size={20} />} />
            <SocialLink href="mailto:katharv925@gmail.com" icon={<Mail size={20} />} />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{ 
              background: "var(--bg-tertiary)", 
              border: "1px solid var(--glass-border)", 
              color: "var(--text-primary)",
              padding: "0.75rem",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem" }}>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Atharv Kumbhar. All rights reserved. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, color: "var(--accent-primary)" }}
    style={{ color: "var(--text-secondary)", transition: "color 0.3s ease" }}
  >
    {icon}
  </motion.a>
);

export default Footer;
