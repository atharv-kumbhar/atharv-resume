"use client";

import { motion } from "framer-motion";
import styles from "./portfolio.module.css";

const BackgroundGraphics = () => {
  return (
    <div className={styles.backgroundWrap} aria-hidden="true">
      <div className={styles.backgroundGrid} />

      <motion.div
        className={`${styles.backgroundOrb} ${styles.backgroundOrbOne}`}
        animate={{ x: [0, 40, 0], y: [0, 32, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.backgroundOrb} ${styles.backgroundOrbTwo}`}
        animate={{ x: [0, -36, 0], y: [0, 28, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.backgroundOrb} ${styles.backgroundOrbThree}`}
        animate={{ x: [0, 24, 0], y: [0, -26, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`${styles.backgroundBeam} ${styles.backgroundBeamOne}`}
        animate={{ x: ["-8%", "14%", "-8%"], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.backgroundBeam} ${styles.backgroundBeamTwo}`}
        animate={{ x: ["12%", "-10%", "12%"], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default BackgroundGraphics;
