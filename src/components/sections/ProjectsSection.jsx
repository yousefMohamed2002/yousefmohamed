import React, { memo } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Database, Shield, ArrowUpRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const projects = [
  {
    id: 1,
    title: "MediBot Customer Care",
    desc: "AI-powered healthcare assistant with NLP, speech recognition, and real-time monitoring for enhanced patient care.",
    tags: ["AI", "NLP", "Speech Recognition", "Flutter", "Firebase"],
    gradient: "from-cyan-400-to-blue-500",
    icon: Brain,
    features: ["Real-time Monitoring", "Voice Commands", "Medical Database"],
    status: "Completed"
  },
  {
    id: 2,
    title: "BoneGuard AI",
    desc: "Advanced YOLOv8 deep learning system for precise X-ray bone fracture detection and medical imaging analysis.",
    tags: ["YOLOv8", "Python", "Computer Vision", "Deep Learning"],
    gradient: "from-purple-400-to-pink-500",
    icon: Cpu,
    features: ["Real-time Detection", "95% Accuracy", "Medical Grade"],
    status: "In Development"
  },
  {
    id: 3,
    title: "HealthPredict Pro",
    desc: "Multi-model predictive system achieving 97.4% (diabetes) and 93.3% (sleep disorders) accuracy rates.",
    tags: ["KNN", "Machine Learning", "Python", "Data Analysis"],
    gradient: "from-green-400-to-teal-500",
    icon: Database,
    features: ["Multi-Model", "High Accuracy", "Real-time Analysis"],
    status: "Completed"
  },
  {
    id: 4,
    title: "CardioRisk Analyzer",
    desc: "Advanced Logistic Regression model with 89.3% accuracy for comprehensive heart attack risk assessment.",
    tags: ["Python", "Logistic Regression", "ML", "Healthcare"],
    gradient: "from-red-400-to-orange-500",
    icon: Shield,
    features: ["Risk Assessment", "89.3% Accuracy", "Preventive Care"],
    status: "Completed"
  }
];

const ProjectsSection = memo(() => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my latest work in AI and software development"
        />

        <div className="projects-grid">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`project-gradient ${project.gradient}`}></div>
                <div className="project-header">
                  <div className="project-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="project-status">{project.status}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-features">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-actions">
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
          
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;