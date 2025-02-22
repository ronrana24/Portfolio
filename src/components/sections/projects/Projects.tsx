import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Project } from "../../common/interfaces";
import "./style.css"; // Import the custom CSS file

// Replace the sample array with your actual data
const projects: Project[] = [
  {
    id: 1,
    image: "/path/to/image1.jpg",
    title: "React Projects",
    description: "Description for project one.",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Tilt options={{ max: 15, scale: 1.05 }}>
                <div className="project-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
