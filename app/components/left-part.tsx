import styles from "./left-part.module.css";
import Image from "next/image";

const LeftPart = () => {
  return (
    <div className={styles["left-part"]}>
      <h1>Rahul Rana</h1>
      <h3>Software Engineer</h3>
      <p>I build servers and create easy accessable digital experience</p>

      <nav>
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Education</li>
        </ul>
      </nav>
      <ul>
        <li><Image src="/icons8-github-48-removebg-preview.png" alt="Github" width={100} height={100} /></li>
        <li><Image src="/icons8-linkedin-50-removebg-preview.png" alt="Github" width={100} height={100} /></li>
      </ul>
    </div>
  );
};
export default LeftPart;
