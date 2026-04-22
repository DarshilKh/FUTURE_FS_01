import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export function FloatingShapes() {
  const { isDark } = useTheme();

  const shapes = useMemo(
    () => [
      { type: "cube", size: 60, x: "10%", y: "20%", duration: 20, delay: 0 },
      { type: "sphere", size: 40, x: "85%", y: "15%", duration: 25, delay: 2 },
      { type: "pyramid", size: 50, x: "75%", y: "70%", duration: 22, delay: 1 },
      { type: "ring", size: 70, x: "15%", y: "75%", duration: 28, delay: 3 },
      { type: "cube", size: 35, x: "90%", y: "45%", duration: 24, delay: 4 },
      { type: "sphere", size: 45, x: "5%", y: "50%", duration: 26, delay: 2 },
    ],
    [],
  );

  const renderShape = (shape) => {
    switch (shape.type) {
      case "cube":
        return (
          <div
            className="relative preserve-3d"
            style={{
              width: shape.size,
              height: shape.size,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className={`absolute inset-0 border-2 rounded-lg ${
                isDark
                  ? "border-blue-500/20 bg-blue-500/5"
                  : "border-blue-400/30 bg-blue-400/10"
              }`}
              style={{ transform: "translateZ(20px)" }}
            />
            <div
              className={`absolute inset-0 border-2 rounded-lg ${
                isDark
                  ? "border-purple-500/20 bg-purple-500/5"
                  : "border-purple-400/30 bg-purple-400/10"
              }`}
              style={{ transform: "rotateY(90deg) translateZ(20px)" }}
            />
          </div>
        );
      case "sphere":
        return (
          <div
            className={`rounded-full ${
              isDark
                ? "bg-linear-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20"
                : "bg-linear-to-br from-cyan-400/30 to-blue-400/20 border border-cyan-400/30"
            }`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case "pyramid":
        return (
          <div
            className={
              isDark ? "border-b-emerald-500/30" : "border-b-emerald-400/40"
            }
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid`,
            }}
          />
        );
      case "ring":
        return (
          <div
            className={`rounded-full border-4 ${
              isDark ? "border-pink-500/20" : "border-pink-400/30"
            }`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  );
}
