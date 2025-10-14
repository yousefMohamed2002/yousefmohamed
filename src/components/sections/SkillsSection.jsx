import React, { memo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const skills = [
  { name: "Python ", level: 98, icon: "🐍", category: "Programming" },
  { name: "Machine Learning", level: 95, icon: "🤖", category: "AI/ML" },
  { name: "Deep Learning", level: 91, icon: "🧠", category: "AI/ML" },
  { name: "Flutter Development", level: 90, icon: "📱", category: "Mobile" },
  // { name: "React & Frontend", level: 88, icon: "⚛️", category: "Web" },
  { name: "Natural Language Processing", level: 85, icon: "💬", category: "AI/ML" }
];

const SkillsSection = memo(() => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeader
          title="Technical Expertise"
          subtitle="My technical skills and proficiency levels"
        />

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <div className="skill-meta">
                  <span className="skill-icon">{skill.icon}</span>
                  <div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;