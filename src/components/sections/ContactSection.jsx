import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { FloatingShapes } from "../background/FloatingShapes";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../constants";

const contactIconComponents = {
  Mail,
  Phone,
  MapPin,
};

const socialIconComponents = {
  Github,
  Linkedin,
  Mail,
};

const socialHoverColors = {
  Github: "hover:bg-[#333333]",
  Linkedin: "hover:bg-[#0A66C2]",
  Mail: "hover:bg-red-500",
};

export function ContactSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      <FloatingShapes />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-blue-500 font-mono text-sm">05. Contact</span>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Work Together
          </h2>
          <p
            className={`mt-4 max-w-lg mx-auto text-sm sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a project in mind? Reach out directly — I'd love to connect!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="space-y-3 sm:space-y-4 mb-10 sm:mb-12"
        >
          {CONTACT_INFO.map((item, i) => {
            const Icon = contactIconComponents[item.icon];

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl transition-all ${
                  isDark
                    ? "bg-slate-900/50 border border-slate-800 hover:border-blue-500/50"
                    : "bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md"
                }`}
              >
                {/* Icon */}
                <motion.div
                  className={`shrink-0 p-2.5 sm:p-4 rounded-xl ${
                    isDark
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-blue-50 text-blue-500"
                  }`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </motion.div>

                {/* Text — truncate long values */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs ${
                      isDark ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`font-medium text-sm sm:text-base truncate ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight
                  size={16}
                  className={`shrink-0 ${
                    isDark ? "text-slate-600" : "text-slate-400"
                  }`}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p
            className={`text-sm mb-5 sm:mb-6 ${
              isDark ? "text-slate-500" : "text-slate-500"
            }`}
          >
            Or find me on social media
          </p>
          <div className="flex justify-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((social, i) => {
              const Icon = socialIconComponents[social.icon];
              const hoverColor = socialHoverColors[social.icon];

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  title={`Open ${social.name}`}
                  className={`p-3 sm:p-4 rounded-xl transition-all ${
                    isDark
                      ? `bg-slate-800 text-slate-400 hover:text-white ${hoverColor}`
                      : `bg-slate-100 text-slate-600 hover:text-white ${hoverColor}`
                  }`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Availability Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className={`p-5 sm:p-8 rounded-2xl text-center ${
            isDark
              ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
          }`}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="text-yellow-500" size={20} />
            </motion.div>
            <span
              className={`font-semibold text-base sm:text-xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Currently Available!
            </span>
          </div>
          <p
            className={`text-xs sm:text-sm mb-5 sm:mb-6 max-w-md mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I'm actively looking for new opportunities. Let's build something
            amazing together!
          </p>
          <div className="flex items-center justify-center gap-2">
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-green-500 text-xs sm:text-sm font-medium">
              Response within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}