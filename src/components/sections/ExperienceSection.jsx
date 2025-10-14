import React, { memo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const experience = [
  {
    period: "2025 ( 1 months ) ",
    role: "ML Engineer Intern",
    company: "Codveda Technologies",
    description: [
      "Developed advanced machine learning models for healthcare applications.",
      "Collaborated with cross-functional teams to integrate AI solutions into existing systems.",
      "Optimized model performance for deployment in real-world healthcare scenarios."
    ],
    achievements: [
      "Implemented predictive models improving diagnosis efficiency by 15%.",
      "Deployed models with PyTorch and TensorFlow pipelines."
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV"]
  },
  {
    period: "2024 - 2025",
    role: "Flutter & Mobile Developer",
    company: "Self-Driven Projects",
    description: [
      "Designed and developed healthcare mobile applications, including 'MediBot'.",
      "Integrated Firebase for authentication, data storage, and real-time monitoring."
    ],
    achievements: [
      "Developed a comprehensive health management app used for tracking patient vitals.",
      "Implemented BLE connectivity for medical devices integration."
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Bluetooth Low Energy"]
  },
  {
    period: "2024 - 2025",
    role: "AI Researcher - Drug Interaction Chatbot",
    company: "Graduation Project - Future University",
    description: [
      "Created a medical chatbot for analyzing drug-to-drug interactions using NLP and LLMs.",
      "Built a knowledge base with Weaviate and ChromaDB for reliable healthcare recommendations."
    ],
    achievements: [
      "Enabled instant drug interaction analysis with 95% accuracy.",
      "Integrated LLaMA API for natural language understanding."
    ],
    technologies: ["Python", "NLP", "Weaviate", "ChromaDB", "LLaMA API"]
  }
];

const ExperienceSection = memo(() => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeader
          title="Professional Journey"
          subtitle="Showcasing my experience in AI, ML, and mobile development"
        />

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>

                <ul className="timeline-description">
                  {exp.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                {exp.achievements && (
                  <ul className="timeline-achievements">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}><strong>✔</strong> {ach}</li>
                    ))}
                  </ul>
                )}

                <div className="timeline-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;
