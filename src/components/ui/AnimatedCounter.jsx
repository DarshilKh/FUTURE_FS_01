import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export function AnimatedCounter({ value, label, icon: Icon, suffix = "" }) {
  const { isDark } = useTheme();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const target = parseInt(value);
      const duration = 2000;
      const steps = 60;
      const stepValue = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`p-6 rounded-2xl text-center group cursor-default ${
        isDark
          ? "bg-slate-900/50 border border-slate-800 hover:border-blue-500/50"
          : "bg-white border border-slate-200 shadow-sm hover:border-blue-300"
      }`}
    >
      <motion.div
        className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
          isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-500"
        } group-hover:scale-110 transition-transform`}
        whileHover={{ rotate: [0, -10, 10, 0] }}
      >
        <Icon size={24} />
      </motion.div>
      <div className="text-3xl font-bold text-blue-500 mb-1">
        {isInView ? (value.includes(".") ? value : count) : 0}
        {suffix}
      </div>
      <div
        className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
      >
        {label}
      </div>
    </motion.div>
  );
}
