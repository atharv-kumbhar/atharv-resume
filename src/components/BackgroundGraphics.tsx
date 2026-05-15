"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundGraphics = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("BackgroundGraphics mounted");
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100%", 
      zIndex: -1, /* Stay behind content */
      pointerEvents: "none", 
      overflow: "hidden",
      backgroundColor: "var(--bg-primary)", /* Move background here to ensure animations are above it */
      backgroundImage: "radial-gradient(var(--glass-border) 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }}>
      {/* Dynamic Data Flow Packets - BOOSTED BRIGHTNESS */}
      <DataPacket delay={0} duration={8} startX="10%" />
      <DataPacket delay={3} duration={6} startX="40%" />
      <DataPacket delay={6} duration={10} startX="70%" />
      <DataPacket delay={1.5} duration={7} startX="85%" />

      {/* Floating Ambient Nodes - HIGH OPACITY */}
      <AmbientNode delay={0} x="5%" y="15%" color="rgba(108, 142, 242, 0.4)" />
      <AmbientNode delay={5} x="80%" y="10%" color="rgba(107, 212, 161, 0.4)" />
      <AmbientNode delay={10} x="70%" y="80%" color="rgba(108, 142, 242, 0.4)" />
      <AmbientNode delay={2.5} x="10%" y="70%" color="rgba(107, 212, 161, 0.4)" />
    </div>
  );
};

const DataPacket = ({ delay, duration, startX }: { delay: number; duration: number; startX: string }) => (
  <motion.div
    initial={{ y: "-20vh", opacity: 0 }}
    animate={{ 
      y: "120vh", 
      opacity: [0, 1, 1, 0] 
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    style={{
      position: "absolute",
      left: startX,
      width: "3px",
      height: "80px",
      background: "linear-gradient(to bottom, transparent, var(--accent-primary), transparent)",
      boxShadow: "0 0 15px var(--accent-primary)",
      zIndex: 10,
    }}
  />
);

const AmbientNode = ({ x, y, delay, color }: { x: string; y: string; delay: number; color: string }) => (
  <motion.div
    animate={{ 
      scale: [1, 1.4, 1],
      opacity: [0.6, 0.9, 0.6],
    }}
    transition={{ 
      duration: 8, 
      delay, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: "500px",
      height: "500px",
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      borderRadius: "50%",
      filter: "blur(90px)",
      zIndex: 1,
    }}
  />
);

export default BackgroundGraphics;
