import React, { memo } from "react";
import { motion } from "framer-motion";
import { Sparkles, DownloadCloud } from "lucide-react";

const Header = memo(({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
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

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
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
        </nav>

        <div className="header-actions">
          <motion.a
            href="/YousefMohamed (1).pdf"
            className="resume-button"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <DownloadCloud size={16} /> Resume
          </motion.a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
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

Header.displayName = 'Header';

export default Header;