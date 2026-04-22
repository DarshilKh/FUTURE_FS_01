import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export function CodeRain() {
  const { isDark } = useTheme();
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const chars = [
      "0",
      "1",
      "{",
      "}",
      "<",
      ">",
      "/",
      "=",
      ";",
      "(",
      ")",
      "const",
      "let",
      "=>",
    ];
    const cols = [];

    for (let i = 0; i < 15; i++) {
      cols.push({
        id: i,
        x: Math.random() * 100,
        chars: Array(5)
          .fill(0)
          .map(() => chars[Math.floor(Math.random() * chars.length)]),
        speed: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      });
    }
    setColumns(cols);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {columns.map((col) => (
        <motion.div
          key={col.id}
          className="absolute flex flex-col gap-4 font-mono text-xs"
          style={{ left: `${col.x}%` }}
          initial={{ y: "-100%" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: col.speed,
            repeat: Infinity,
            delay: col.delay,
            ease: "linear",
          }}
        >
          {col.chars.map((char, i) => (
            <span
              key={i}
              className={isDark ? "text-blue-500/40" : "text-blue-600/30"}
              style={{ opacity: 1 - i * 0.15 }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
