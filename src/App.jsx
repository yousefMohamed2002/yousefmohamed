import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/ui/Header";
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import { useScrollTracking } from "./hooks/useScrollTracking";
import "./App.css";

export default function ProPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useScrollTracking();

  const handleScrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <div className="portfolio-container">
      <motion.div
        className="portfolio-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={handleScrollToSection}
        />
        <HeroSection scrollToSection={handleScrollToSection} />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </motion.div>
    </div>
  );
}