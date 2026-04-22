import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Globe, Cpu, Terminal, Layout, ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Project3DCard } from "../ui/Project3DCard";
import { projects, projectFilters } from "../../data/projects";

const iconComponents = {
  Globe,
  Cpu,
  Terminal,
  Layout,
};

// How many to show by default
const DEFAULT_VISIBLE = 6;

export function ProjectsSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // For "All" tab — show only 6 by default, else show all
  // For other tabs — always show all filtered results
  const visibleProjects =
    activeFilter === "all" && !showAll
      ? filteredProjects.slice(0, DEFAULT_VISIBLE)
      : filteredProjects;

  // Only show the "Show More" button on "All" tab
  const hasMoreProjects =
    activeFilter === "all" && filteredProjects.length > DEFAULT_VISIBLE;

  // Reset showAll when switching tabs
  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <span className="text-blue-500 font-mono text-sm">03. Projects</span>
          <h2
            className={`text-3xl md:text-4xl font-bold mt-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Featured Work
          </h2>
          <p
            className={`mt-4 max-w-2xl ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A selection of projects that showcase my skills across the full
            stack.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {projectFilters.map((filter) => {
            const Icon = iconComponents[filter.icon];
            return (
              <motion.button
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === filter.key
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : isDark
                    ? "bg-slate-800 text-slate-400 hover:text-white"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={16} />
                {filter.label}

                {/* Show count badge on each tab */}
                <span
                  className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                    activeFilter === filter.key
                      ? "bg-white/20 text-white"
                      : isDark
                      ? "bg-slate-700 text-slate-400"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {filter.key === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === filter.key).length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <Project3DCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button - only on All tab */}
        <AnimatePresence>
          {hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-center mt-12 gap-3"
            >
              {/* Showing count text */}
              <p
                className={`text-sm ${
                  isDark ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Showing{" "}
                <span className="text-blue-500 font-medium">
                  {showAll ? filteredProjects.length : DEFAULT_VISIBLE}
                </span>{" "}
                of{" "}
                <span className="font-medium">{filteredProjects.length}</span>{" "}
                projects
              </p>

              {/* Show More / Show Less Button */}
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium border-2 transition-all ${
                  isDark
                    ? "border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                    : "border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-500"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {showAll ? (
                  <>
                    <ChevronUp size={18} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={18} />
                    Show All {filteredProjects.length} Projects
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}