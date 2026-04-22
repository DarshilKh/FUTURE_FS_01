import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function Project3DCard({ project, index }) {
  const { isDark } = useTheme();
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    setRotateX(-mouseY / 10);
    setRotateY(mouseX / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // ✅ Safe open — ensures URL starts with https://
  const openLink = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    if (!url) return;

    // Ensure it's an absolute URL
    const fullUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;

    window.open(fullUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      className={`rounded-2xl overflow-hidden cursor-pointer transition-shadow ${
        isDark
          ? "bg-slate-900 border border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10"
          : "bg-white border border-slate-200 shadow-sm hover:shadow-xl"
      }`}
    >
      {/* Project Image */}
      <div
        className={`h-44 bg-gradient-to-br ${project.color} relative overflow-hidden group`}
      >
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-7xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring" }}
        >
          {project.image}
        </motion.span>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: ["100%", "-100%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
        >
          {/* GitHub — always shown */}
          <motion.button
            onClick={(e) => openLink(e, project.github)}
            className="p-3 bg-white/20 rounded-full text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="View on GitHub"
          >
            <Github size={20} />
          </motion.button>

          {/* Live — only shown if hasLive */}
          {project.hasLive && project.live && (
            <motion.button
              onClick={(e) => openLink(e, project.live)}
              className="p-3 bg-white/20 rounded-full text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="View Live"
            >
              <ExternalLink size={20} />
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-start justify-between mb-2">
          <h3
            className={`text-lg font-semibold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.hasLive && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 font-medium">
                Live
              </span>
            )}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
            </motion.div>
          </div>
        </div>
        <p
          className={`text-sm mb-4 line-clamp-2 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 rounded text-xs font-medium ${
                isDark
                  ? "bg-slate-800 text-slate-400"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}