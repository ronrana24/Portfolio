import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary-500">John Doe</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300">
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
            className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-lg text-lg font-medium hover:bg-primary-600 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <FiArrowDown className="animate-bounce text-3xl text-gray-600 dark:text-gray-300" />
        </div>
      </div>
    </section>
  );
}