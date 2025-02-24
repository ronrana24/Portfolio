import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown } from "react-icons/fi";
import "./style.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">John Doe</span>
          </h1>
          
          <div className="hero-subtitle">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Tech Blogger',
                2000
              ]}
              wrapper="div"
              repeat={Infinity}
            />
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="hero-button"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <div className="hero-arrow-container">
          <FiArrowDown className="hero-arrow" />
        </div>
      </div>
    </section>
  );
}
