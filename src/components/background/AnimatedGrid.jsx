import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export function AnimatedGrid() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)"
            : "linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-150 h-150 rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -left-40 w-125 h-125 rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
