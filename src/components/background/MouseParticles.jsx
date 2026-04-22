import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export function MouseParticles() {
  const { isDark } = useTheme();
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (Math.random() > 0.85) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
        };
        setParticles((prev) => [...prev.slice(-15), newParticle]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles((prev) => prev.slice(-10));
    }, 1000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Mouse glow */}
      <motion.div
        className={`fixed w-64 h-64 rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-blue-500/10" : "bg-blue-400/10"
        }`}
        animate={{
          x: mousePos.x - 128,
          y: mousePos.y - 128,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`fixed rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0, y: -20 }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
}
