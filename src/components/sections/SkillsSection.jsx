import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Layout, Database } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { GlowingSkillBar } from "../ui/GlowingSkillBar";
import { skillCategories } from "../../data/skills";

const iconComponents = {
  Terminal,
  Layout,
  Database,
};

export function SkillsSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className={`py-24 ${isDark ? "bg-slate-900/30" : "bg-slate-50/50"}`}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="text-blue-500 font-mono text-sm">02. Skills</span>
          <h2
            className={`text-3xl md:text-4xl font-bold mt-2 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = iconComponents[category.icon];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.15 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl ${
                  isDark
                    ? "bg-slate-900/80 border border-slate-800 hover:border-slate-700"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`p-2.5 rounded-xl text-white ${category.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <h3
                    className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                {category.skills.map((skill, skillIndex) => (
                  <GlowingSkillBar
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    delay={categoryIndex * 0.15 + skillIndex * 0.1 + 0.3}
                    isInView={isInView}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
