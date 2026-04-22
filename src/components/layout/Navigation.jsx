import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { ThemeToggle } from "../ui/ThemeToggle";
import { NAV_ITEMS } from "../../constants";

const RESUME_URL =
  "https://www.dropbox.com/scl/fi/1qdtzc8nknhy5ymdchyhs/Darshil-J-Resume.pdf?rlkey=g4p6a6929iyq9xai52nr2knwa&st=nzs75scr&dl=0";

export function Navigation({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg"
              : "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.a
              href="#home"
              className="text-xl font-bold flex items-center gap-1 flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <span className={isDark ? "text-white" : "text-slate-900"}>
                Darshil
              </span>
              <span className="text-blue-500">.</span>
            </motion.a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? "text-blue-500"
                      : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              {/* Desktop Resume Button */}
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Resume
              </motion.a>

              {/* Mobile Hamburger */}
              <motion.button
                className={`md:hidden p-2 rounded-lg ${
                  isDark
                    ? "text-slate-400 hover:bg-slate-800"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col ${
                isDark ? "bg-slate-950" : "bg-white"
              }`}
            >
              {/* Panel Header */}
              <div
                className={`flex items-center justify-between px-6 py-4 border-b ${
                  isDark ? "border-slate-800" : "border-slate-200"
                }`}
              >
                <span
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Darshil<span className="text-blue-500">.</span>
                </span>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-lg ${
                    isDark
                      ? "text-slate-400 hover:bg-slate-800"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={22} />
                </motion.button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors text-base font-medium ${
                      activeSection === item.name.toLowerCase()
                        ? isDark
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                        : isDark
                        ? "text-slate-400 hover:text-white hover:bg-slate-800"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Active dot */}
                    {activeSection === item.name.toLowerCase() && (
                      <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    )}
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Bottom — Resume Button (prominent) */}
              <div
                className={`p-4 border-t ${
                  isDark ? "border-slate-800" : "border-slate-200"
                }`}
              >
                <motion.a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-base transition-colors"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>

                {/* Small note */}
                <p
                  className={`text-center text-xs mt-2 ${
                    isDark ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Opens in new tab
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}