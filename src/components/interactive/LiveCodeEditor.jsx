import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const CODE_LINES = [
  { indent: 0, text: "const developer = {", color: "blue" },
  { indent: 1, text: 'name: "Darshil",', color: "green" },
  { indent: 1, text: 'role: "Full Stack Developer",', color: "green" },
  { indent: 1, text: 'skills: ["Java", "Spring Boot", "React"],', color: "yellow" },
  { indent: 1, text: 'passion: "Building great products",', color: "green" },
  { indent: 1, text: "available: true,", color: "purple" },
  { indent: 1, text: "coffee: Infinite ☕", color: "orange" },
  { indent: 0, text: "};", color: "blue" },
];

export function LiveCodeEditor() {
  const { isDark } = useTheme();
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine < CODE_LINES.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => [...prev, CODE_LINES[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      const resetTimer = setTimeout(() => {
        setDisplayedCode([]);
        setCurrentLine(0);
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentLine]);

  const getColorClass = (color) => {
    const colors = {
      blue: isDark ? "text-blue-400" : "text-blue-600",
      green: isDark ? "text-emerald-400" : "text-emerald-600",
      yellow: isDark ? "text-yellow-400" : "text-yellow-600",
      purple: isDark ? "text-purple-400" : "text-purple-600",
      orange: isDark ? "text-orange-400" : "text-orange-600",
    };
    return colors[color] || "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`rounded-xl overflow-hidden font-mono text-sm ${
        isDark
          ? "bg-slate-900/90 border border-slate-700"
          : "bg-slate-800 border border-slate-600"
      }`}
    >
      {/* Editor header */}
      <div
        className={`flex items-center gap-2 px-4 py-3 ${isDark ? "bg-slate-800/50" : "bg-slate-700"}`}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-400 text-xs ml-2">developer.js</span>
        {isTyping && (
          <motion.div
            className="ml-auto flex items-center gap-1 text-xs text-green-400"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400" />
            typing...
          </motion.div>
        )}
      </div>

      {/* Code content */}
      <div className="p-4 min-h-50">
        {displayedCode.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex"
          >
            <span className="text-slate-500 w-6 text-right mr-4 select-none">
              {i + 1}
            </span>
            <span
              style={{ paddingLeft: `${line.indent * 20}px` }}
              className={getColorClass(line.color)}
            >
              {line.text}
            </span>
          </motion.div>
        ))}

        {/* Cursor */}
        {isTyping && (
          <motion.span
            className="inline-block w-2 h-5 bg-blue-500 ml-2"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
}
