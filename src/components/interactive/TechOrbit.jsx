import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { techStack } from "../../data/skills";

export function TechOrbit() {
  const { isDark } = useTheme();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative w-64 h-64 md:w-72 md:h-72 mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Center logo — YOUR PHOTO instead of 💻 */}
      <motion.div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl overflow-hidden z-10 border-4 ${
          isDark ? "border-slate-700" : "border-slate-200 shadow-lg"
        }`}
        animate={{ rotate: isPaused ? 0 : 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="/me.jpg"
          alt="Darshil"
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            // Fallback if image not found
            e.target.style.display = "none";
            e.target.parentElement.innerHTML = "👨‍💻";
            e.target.parentElement.style.fontSize = "2.5rem";
            e.target.parentElement.style.display = "flex";
            e.target.parentElement.style.alignItems = "center";
            e.target.parentElement.style.justifyContent = "center";
          }}
        />
      </motion.div>

      {/* Orbit ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-dashed ${
          isDark ? "border-slate-700" : "border-slate-300"
        }`}
      />

      {/* Orbiting tech icons */}
      {techStack.map((tech, i) => {
        const angle = (i * 360) / techStack.length;
        return (
          <motion.div
            key={tech.name}
            className="absolute top-1/2 left-1/2"
            animate={{
              rotate: isPaused ? angle : angle + 360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "0 0" }}
          >
            <motion.div
              className={`absolute -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full cursor-pointer ${
                isDark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-slate-200 shadow-md"
              }`}
              style={{ left: 100 }}
              whileHover={{ scale: 1.2 }}
              animate={{
                rotate: isPaused ? -angle : -(angle + 360),
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="text-lg">{tech.icon}</span>
              <span
                className={`text-xs font-medium ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {tech.name}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Pause indicator */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-blue-500 flex items-center gap-1"
          >
            <Pause size={12} /> Paused
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}