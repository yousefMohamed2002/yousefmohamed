import React, { memo } from "react";
import { motion } from "framer-motion";
import { Award, Star, Code, Zap } from "lucide-react";

const achievements = [
  { number: "3.71", label: "CGPA at FUE", icon: Award, color: "#00f5ff" },
  { number: "7th", label: "Class Rank", icon: Star, color: "#4e00ff" },
  { number: "15+", label: "Projects Completed", icon: Code, color: "#ff00c8" },
  { number: "97.4%", label: "Best Model Accuracy", icon: Zap, color: "#00ffcc" }
];

const AchievementCard = memo(() => {
  return (
    <motion.div
      className="achievements-grid"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {achievements.map((achievement, index) => {
        const IconComponent = achievement.icon;
        return (
          <motion.div
            key={achievement.label}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            viewport={{ once: true }}
            style={{ '--card-color': achievement.color }}
          >
            <div className="achievement-icon">
              <IconComponent size={24} color={achievement.color} />
            </div>
            <div className="achievement-content">
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
});

AchievementCard.displayName = 'AchievementCard';

export default AchievementCard;