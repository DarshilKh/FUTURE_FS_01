import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 ${
        isDark ? "bg-slate-800" : "bg-blue-100"
      }`}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Stars for dark mode */}
      <AnimatePresence>
        {isDark && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute top-3 left-4 w-0.5 h-0.5 bg-white rounded-full"
            />
          </>
        )}
      </AnimatePresence>

      {/* Toggle circle */}
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center shadow-md"
        animate={{
          x: isDark ? 32 : 0,
          backgroundColor: isDark ? "#1e293b" : "#fbbf24",
          rotate: isDark ? 0 : 360,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={14} className="text-blue-400" />
        ) : (
          <Sun size={14} className="text-white" />
        )}
      </motion.div>

      {/* Cloud for light mode */}
      <AnimatePresence>
        {!isDark && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-2 top-2 text-xs"
          >
            ☁️
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
