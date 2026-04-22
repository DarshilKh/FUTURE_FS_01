import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { experiences } from "../../data/experience";

export function ExperienceSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className={`py-24 ${isDark ? "bg-slate-900/30" : "bg-slate-50/50"}`}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="text-blue-500 font-mono text-sm">
            04. Experience
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mt-2 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            My Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
              isDark ? "bg-slate-800" : "bg-slate-300"
            } transform md:-translate-x-1/2`}
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                i % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                    isDark
                      ? "bg-slate-800 border-2 border-blue-500"
                      : "bg-white border-2 border-blue-500 shadow-lg"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {exp.icon}
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                className={`ml-16 md:ml-0 ${
                  i % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16 md:text-left"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`p-6 rounded-xl ${
                    isDark
                      ? "bg-slate-900/80 border border-slate-800 hover:border-blue-500/50"
                      : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
                  } transition-all`}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium mb-3">
                    {exp.period}
                  </span>
                  <h3
                    className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-blue-500 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p
                    className={`text-sm mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className={`px-2 py-1 rounded text-xs ${
                          isDark
                            ? "bg-slate-800 text-slate-400"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div
                className={
                  i % 2 === 0 ? "hidden md:block" : "hidden md:block md:order-1"
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
