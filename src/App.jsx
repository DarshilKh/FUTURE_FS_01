import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { useActiveSection } from "./hooks/useActiveSection";
import { SECTION_IDS } from "./constants";

// Layout
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";

// Sections
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ContactSection } from "./components/sections/ContactSection";

// Background
import { AnimatedGrid } from "./components/background/AnimatedGrid";
import { FloatingShapes } from "./components/background/FloatingShapes";
import { MouseParticles } from "./components/background/MouseParticles";

// UI
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { useTheme } from "./context/ThemeContext";

function AppContent() {
  const { isDark } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
      }`}
    >
      {/* Background Elements */}
      <AnimatedGrid />
      <FloatingShapes />
      <MouseParticles />

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <AppContent key="content" />
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
