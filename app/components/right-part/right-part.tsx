import About from "./about";
import Experience from "./experience";
import styles from "./right-part.module.css";

const RightPart = () => {
  return (
    <div className={styles["right-part"]}>
      <About />
      <Experience />
    </div>
  );
};

export default RightPart;
