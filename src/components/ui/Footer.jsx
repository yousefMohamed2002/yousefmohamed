import React, { memo } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <motion.div
              className="logo-circle small"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={16} />
            </motion.div>
            <span>Yousef Mohamed</span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Building the future with AI, one line of code at a time
          </motion.p>
          <motion.div
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} All rights reserved. Crafted with precision and innovation.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;