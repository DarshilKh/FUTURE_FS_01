import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Coffee,
  Heart,
  Zap,
  Rocket,
  Award,
  Github,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function AboutSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quickFacts = [
    { icon: MapPin, label: "Location", value: "New Delhi, India" },
    { icon: GraduationCap, label: "Education", value: "BCA @ GGSIPU" },
    { icon: Coffee, label: "Fuel", value: "∞ Cups of Coffee" },
    { icon: Heart, label: "Passion", value: "Clean Code" },
  ];

  const stats = [
    { value: "3", label: "Years Coding", icon: Zap, suffix: "+" },
    { value: "12", label: "Projects Built", icon: Rocket, suffix: "+" },
    { value: "9", label: "CGPA", icon: Award, suffix: "+" },
    { value: "100", label: "Commits", icon: Github, suffix: "+" },
  ];

  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "MongoDB",
    "Docker",
    "Git",
    "REST APIs",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="text-blue-500 font-mono text-sm">01. About</span>
          <h2
            className={`text-3xl md:text-4xl font-bold mt-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Getting to know me
          </h2>
        </motion.div>

        {/* Main Grid — Photo LEFT | Content RIGHT */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
          
          {/* LEFT — Photo Column (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Photo Card */}
            <div
              className={`relative w-full max-w-xs rounded-3xl overflow-hidden ${
                isDark
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white border border-slate-200 shadow-xl"
              }`}
            >
              {/* Photo */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src="/me.jpg"
                  alt="Darshil Khandelwal"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">👨‍💻</div>';
                  }}
                />
                {/* Gradient overlay at bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${
                    isDark
                      ? "from-slate-900 to-transparent"
                      : "from-white to-transparent"
                  }`}
                />
              </div>

              {/* Info inside card */}
              <div className="px-6 pb-6 -mt-4 relative z-10">
                <h3
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Darshil Khandelwal
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Full Stack Developer
                </p>

                {/* Available badge */}
                <div className="flex items-center gap-2">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-green-500 text-sm font-medium">
                    Available for hire
                  </span>
                </div>
              </div>

              {/* Decorative gradient strip at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            </div>

            {/* Tech badges below photo */}
            <div
              className={`w-full max-w-xs p-5 rounded-2xl ${
                isDark
                  ? "bg-slate-900/50 border border-slate-800"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Tech I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      isDark
                        ? "bg-slate-800 text-slate-300 border border-slate-700"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content Column (3/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* About Text */}
            <div className="space-y-4">
              <p
                className={`text-lg leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                I'm a passionate{" "}
                <span className="text-blue-500 font-semibold">
                  Full Stack Developer
                </span>{" "}
                currently pursuing my Bachelor's in Computer Applications from{" "}
                <span className="text-blue-500 font-semibold">
                  GGSIPU, New Delhi
                </span>
                .
              </p>

              <p
                className={`leading-relaxed ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                My journey in software development started with curiosity and
                has evolved into a deep passion for creating elegant solutions.
                I specialize in building robust backend systems with Java and
                Spring Boot, while crafting intuitive user interfaces with
                React.
              </p>

              <p
                className={`leading-relaxed ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                I believe in writing clean, maintainable code that stands the
                test of time. Always learning, always building.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                    isDark
                      ? "bg-slate-900/50 border border-slate-800 hover:border-blue-500/30"
                      : "bg-white border border-slate-200 shadow-sm hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isDark
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-blue-50 text-blue-500"
                    }`}
                  >
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p
                      className={`text-xs ${
                        isDark ? "text-slate-500" : "text-slate-500"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`font-semibold text-sm ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What I do — key highlights */}
            <div
              className={`p-6 rounded-2xl ${
                isDark
                  ? "bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-slate-800"
                  : "bg-gradient-to-br from-blue-50/50 to-purple-50/50 border border-slate-200"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                What I bring to the table
              </p>
              <div className="space-y-2">
                {[
                  "Clean, scalable backend APIs with Spring Boot & Java",
                  "Modern, responsive UIs with React & Tailwind CSS",
                  "Database design with MySQL & MongoDB",
                  "End-to-end full stack project ownership",
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`flex items-center gap-2 text-sm ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    <ChevronRight
                      size={16}
                      className="text-blue-500 flex-shrink-0"
                    />
                    {point}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}