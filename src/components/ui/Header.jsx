import React, { memo } from "react";
import { motion } from "framer-motion";
import { Sparkles, DownloadCloud } from "lucide-react";

const Header = memo(({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
        {/* ===== Logo Section ===== */}
        <div className="logo">
          <motion.div
            className="logo-circle"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={24} />
          </motion.div>
          <div className="logo-text">
            <h1>Yousef Mohamed</h1>
            <p>AI Developer • ML Engineer • Flutter Developer</p>
          </div>
        </div>

        {/* ===== Navigation ===== */}
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </motion.a>
          ))}

         

        {/* ===== Header Actions for Mobile ===== */}
        <div className="header-actions">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </motion.header>
  );
});

Header.displayName = "Header";
export default Header;
