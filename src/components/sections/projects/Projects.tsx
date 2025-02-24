import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import "./style.css";
import { projects } from "../../../assets/data";

// Replace the sample array with your actual data

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <div className="project-card">
                  {/* Project Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  ) : null}

                  {/* Project Title */}
                  <h3 className="project-title">{project.title}</h3>
                  <p>{project.description}</p>

                  {/* Technology Tags */}
                  <div className="tech-tags">
                    {project.tags.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
