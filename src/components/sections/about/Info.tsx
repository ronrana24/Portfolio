import { motion } from "framer-motion";

const cardVariant = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const Info = () => {
  return (
    <div className="about__info grid">
      <motion.div
        className="about__box"
        variants={cardVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 Year Working</span>
      </motion.div>

      <motion.div
        className="about__box"
        variants={cardVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">80 + Tasks</span>
      </motion.div>

      <motion.div
        className="about__box"
        variants={cardVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <i className="bx bx-support about__icon"></i>

        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </motion.div>
    </div>
  );
};

export default Info;
