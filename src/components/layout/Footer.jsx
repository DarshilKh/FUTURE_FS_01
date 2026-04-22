import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { NAV_ITEMS, SOCIAL_LINKS } from "../../constants";

const iconComponents = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-12 border-t ${
        isDark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl">🚀</span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                Darshil
              </span>
              <span className="text-blue-500">.</span>
            </motion.a>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Full Stack Developer passionate about creating beautiful,
              functional, and user-friendly applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className={`text-sm transition-colors inline-flex items-center gap-1 ${
                      isDark
                        ? "text-slate-400 hover:text-blue-400"
                        : "text-slate-600 hover:text-blue-500"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <ChevronRight size={14} />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4
              className={`font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Let's Connect
            </h4>
            <p
              className={`text-sm mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Ready to start a project together? Let's talk!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={16} />
              Get In Touch
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t ${isDark ? "border-slate-800" : "border-slate-200"}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              className={`text-sm flex items-center gap-2 ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              © {currentYear} Darshil. Built with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              using React & Framer Motion
            </motion.p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconComponents[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`transition-colors ${
                      isDark
                        ? "text-slate-500 hover:text-white"
                        : "text-slate-400 hover:text-slate-900"
                    }`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.a
          href="#home"
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 ${
            isDark
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown size={20} className="rotate-180" />
        </motion.a>
      </div>
    </footer>
  );
}
