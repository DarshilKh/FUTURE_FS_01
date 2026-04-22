import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export function GlowingSkillBar({ skill, color, delay, isInView }) {
  const { isDark } = useTheme();

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span
          className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
        >
          {skill.name}
        </span>
        <motion.span
          className={`text-sm ${isDark ? "text-slate-500" : "text-slate-500"}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div
        className={`h-3 rounded-full overflow-hidden relative ${
          isDark ? "bg-slate-800" : "bg-slate-200"
        }`}
      >
        <motion.div
          className={`h-full rounded-full relative ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-r from-transparent to-white/40 blur-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
