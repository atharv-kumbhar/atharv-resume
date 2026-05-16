"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./portfolio.module.css";

const navLinks = [
  { name: "Capabilities", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`${styles.navShell} ${scrolled ? styles.navScrolled : ""}`}
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.container}>
          <div className={styles.navRow}>
            <Link href="/" className={styles.brand}>
              <span className={styles.brandMark}>AK</span>
              <span className={styles.brandText}>
                <strong>Atharv Kumbhar</strong>
                <small>Data Engineering Portfolio</small>
              </span>
            </Link>

            <div className={styles.navDesktop}>
              <div className={styles.navLinks}>
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className={styles.navLink}>
                    {link.name}
                  </Link>
                ))}
              </div>
              <a href="mailto:katharv925@gmail.com" className={styles.navAction}>
                Let&apos;s Talk
              </a>
            </div>

            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className={styles.drawerBackdrop}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close navigation overlay"
            />
            <motion.div
              className={styles.drawer}
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28 }}
            >
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <a href="mailto:katharv925@gmail.com" className={styles.drawerAction}>
                Let&apos;s Talk
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
