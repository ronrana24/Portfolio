import { Skill } from "../../common/interfaces";
import "./style.css";

export default function SkillName({ skill }: { skill: Skill }) {   
    return (
    <div className="skills__data">
      {skill.icon && <skill.icon className="bx bxl-bootstrap" />}
      <div>
        <h3 className="skills__name">{skill.name}</h3>
        <span className="skills__level">{skill.level}</span>
      </div>
    </div>
  );
}
