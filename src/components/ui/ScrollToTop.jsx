import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ScrollToTop = memo(() => {
  return (
    <motion.button
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUpRight size={20} />
    </motion.button>
  );
});

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;