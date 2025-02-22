// import Frontend from './Frontend';
// import Coursework from './Coursework';
import "./style.css";
import { skills } from "../../../assets/data";
import SkillBox from "./SkillBox";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        {Object.keys(skills).map((key, index) => (
          <SkillBox
            skills={skills[key]}
            key={index}
            heading={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
