"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleScroll();
    handleResize();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "0.75rem 0" : "1.25rem 0",
          background: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
          transition: "all 0.3s ease",
          willChange: "padding, background, backdrop-filter",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/">
            <span style={{ fontSize: "1.25rem", fontWeight: "700", letterSpacing: "-0.02em", cursor: "pointer" }}>
              ATHARV<span className="accent-text">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "2rem" }}>
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
            </div>
          )}

          {/* Mobile Toggle */}
          {isMobile && (
            <div style={{ cursor: "pointer", color: "var(--text-primary)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80%",
              maxWidth: "300px",
              background: "var(--bg-primary)",
              zIndex: 1100,
              boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }} onClick={() => setMobileMenuOpen(false)}>
              <X size={28} style={{ cursor: "pointer" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  <span style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--text-primary)" }}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>
    <span style={{ 
      fontSize: "0.9rem", 
      fontWeight: "500", 
      color: "var(--text-secondary)",
      cursor: "pointer",
      transition: "var(--transition-smooth)"
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
    >
      {children}
    </span>
  </Link>
);

export default Navbar;
