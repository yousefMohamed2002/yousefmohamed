import React, { memo } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, DownloadCloud, Linkedin, Github } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const ContactSection = memo(() => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeader
          title="Let's Create Something Amazing"
          subtitle="Get in touch to discuss your next project"
        />

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>yousefmohamedsayed99.9@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h4>Location</h4>
                <p>Cairo, Egypt</p>
              </div>
            </div>
            <div className="contact-item">
              <Calendar size={24} />
              <div>
                <h4>Availability</h4>
                <p>Available for projects</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-actions"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:yousefmohamedsayed99.9@gmail.com"
              className="contact-button primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} /> Send Message
            </motion.a>
            <motion.a
              href="/YousefMohamed (1).pdf"
              className="contact-button secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <DownloadCloud size={18} /> Download Resume
            </motion.a>

            <div className="social-links">
              <motion.a
                href="https://www.linkedin.com/in/yousefmohamedsayed"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/yousefmohamed2002"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;