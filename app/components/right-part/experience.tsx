import Capsule from "./capsule";
import data from "./experience-data.json";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <section>
      <ol className={styles["block"]}>
        {data.map((experience, index) => (
          <li className={styles["experience-list"]} key={index}>
            <div>
              <header>
                {experience.from} - {experience.to}
              </header>
              <div>
                <h3>
                  <span>{experience.designation}</span>
                  <div>{experience.company}</div>
                  <div>{experience.project}</div>
                </h3>
                <p>{experience.description}</p>
                <ul>
                  {experience.techStack.map((tech, index) => (
                    <li key={index}>
                      <Capsule tech={tech} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div>
        <a>View Full Resume</a>
      </div>
    </section>
  );
};

export default Experience;
