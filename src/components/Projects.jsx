// src/components/Projects.jsx
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const Projects = () => {
  const projects = portfolio.projects;

  return (
    <section id="projects" className="section fade-up">
      <div className="section-header mb-10">
        <motion.h2
          className="text-4xl font-bold text-primaryAccent mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-secondaryText text-base max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore my featured software development work and embedded IoT engineering projects.
        </motion.p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.name}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="project-image-wrapper">
              <img
                src={proj.image}
                alt={proj.name}
                className="project-image"
                loading="lazy"
              />
              {proj.category && (
                <span className="project-badge-overlay">
                  {proj.category}
                </span>
              )}
            </div>

            <div className="project-content">
              <h3 className="project-title">
                {proj.name}
              </h3>
              
              <p className="project-desc">
                {proj.description}
              </p>

              <div className="project-tech-stack">
                {proj.techStack.map((tech, ti) => (
                  <span key={ti} className="project-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {proj.repo && (
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Code
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
