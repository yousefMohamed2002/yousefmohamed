import React, { memo } from "react";
import { motion } from "framer-motion";

const SectionHeader = memo(({ title, subtitle }) => {
  return (
    <div className="section-header">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
      <div className="section-line"></div>
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;