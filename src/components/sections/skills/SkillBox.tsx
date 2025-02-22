import { Skill } from "../../common/interfaces";
import SkillGroup from "./SkillGroup";
import SkillHeading from "./SkillHeading";
import "./style.css";

export default function SkillBox({
  skills,
  heading,
}: {
  skills: Skill[];
  heading: string;
}) {
  const groups: Skill[][] = [];
  for (let i = 0; i < skills.length; i += 5) {
    groups.push(skills.slice(i, i + 5));
  }

  return (
    <div className="skills__content">
      <SkillHeading>{heading}</SkillHeading>
      <div className="skills__box">
        {groups.map((group, index) => (
          <div key={index} className="skills__group">
            <SkillGroup  skills={group} />
          </div>
        ))}
      </div>
    </div>
  );
}
