import { Skill } from "../../common/interfaces";
import SkillName from "./SkillName";
import "./style.css";

export default function SkillGroup({ skills }: { skills: Skill[] }) {
  return (
    <div className="skills__group">
      {skills && skills.length >= 0
        ? skills.map((item) => <SkillName key={item.id} skill={item} />)
        : null}
    </div>
  );
}
