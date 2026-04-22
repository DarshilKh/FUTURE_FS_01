import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { LiveCodeEditor } from "../interactive/LiveCodeEditor";
import { CodeRain } from "../background/CodeRain";

const RESUME_URL = "https://www.dropbox.com/scl/fi/1qdtzc8nknhy5ymdchyhs/Darshil-J-Resume.pdf?rlkey=g4p6a6929iyq9xai52nr2knwa&st=5owytvoc&dl=0";

export function HeroSection() {
  const { isDark } = useTheme();
  const { scrollY } = useScroll();

  // ✅ FIX 1 — Fade much later so developer.js stays visible while scrolling
  // Old: [0, 300] — faded way too fast
  // New: [0, 800] — stays fully visible much longer
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  // ✅ Parallax also slower
  const y = useTransform(scrollY, [0, 800], [0, 80]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/DarshilKh", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/darshil-khandelwal-59962b335/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:darshil.khandelwal92@gmail.com",
      label: "Email",
    },
  ];

  const stats = [
    { value: "3+", label: "Years Coding", icon: "⚡" },
    { value: "12+", label: "Projects", icon: "🚀" },
    { value: "9+", label: "CGPA", icon: "🎓" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-16 overflow-hidden"
    >
      <CodeRain />

      <motion.div style={{ y, opacity }} className="w-full relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">

          {/* ✅ FIX 2 — Small Resume pill visible only on mobile, right below navbar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-6 md:hidden"
          >
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-500/25"
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>

          {/* Hero Grid */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

            {/* ===== LEFT — Text Content ===== */}
            <div className="w-full lg:flex-1 order-1 text-center lg:text-left">

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <motion.span
                  className="relative flex h-3 w-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </motion.span>
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Available for opportunities
                </span>
                <motion.span
                  animate={{ rotate: [0, 14, -14, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  👋
                </motion.span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-blue-500 inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  Darshil
                </motion.span>
                <br />
                <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                  Full Stack{" "}
                  <motion.span
                    className="inline-block"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                      background:
                        "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Developer
                  </motion.span>
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                I craft exceptional digital experiences with modern
                technologies. Specializing in{" "}
                <span className="text-blue-500 font-medium">Java</span>,{" "}
                <span className="text-emerald-500 font-medium">
                  Spring Boot
                </span>
                , and{" "}
                <span className="text-cyan-500 font-medium">React</span> to
                build scalable, user-centric applications.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
              >
                <motion.a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border-2 transition-colors ${
                    isDark
                      ? "border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                      : "border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-500"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={18} />
                  Let's Talk
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                <span
                  className={`text-sm ${
                    isDark ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  Connect with me
                </span>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-lg transition-colors ${
                        isDark
                          ? "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800"
                          : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                      }`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ===== RIGHT — Code Editor ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:flex-1 order-2"
            >
              <LiveCodeEditor />

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-3 mt-4"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    whileHover={{ y: -3 }}
                    className={`text-center p-3 rounded-xl ${
                      isDark
                        ? "bg-slate-900/50 border border-slate-800"
                        : "bg-white border border-slate-200 shadow-sm"
                    }`}
                  >
                    <span className="text-lg">{stat.icon}</span>
                    <div className="text-lg font-bold text-blue-500">
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs ${
                        isDark ? "text-slate-500" : "text-slate-500"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          className={`flex flex-col items-center gap-2 ${
            isDark
              ? "text-slate-500 hover:text-slate-300"
              : "text-slate-400 hover:text-slate-600"
          }`}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}