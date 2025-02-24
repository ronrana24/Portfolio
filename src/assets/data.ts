import {
  Education,
  Project,
  Skill,
  WorkExperienceInterface,
} from "../components/common/interfaces";
import { FaReact, FaNode } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiExpress,
  SiDjango,
  SiGin,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiAmazon,
  SiRabbitmq,
  SiCelery,
  SiDocker,
  SiGithub,
} from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "React Projects",
    description: "A web application that contains multiple React.js projects",
    image: "",
    tags: ["React.js"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
];

export const skills: { [key: string]: Skill[] } = {
  frontend: [
    { id: 1, name: "HTML", level: "Advanced", icon: SiHtml5 },
    { id: 2, name: "CSS", level: "Advanced", icon: SiCss3 },
    { id: 3, name: "JavaScript", level: "Advanced", icon: SiJavascript },
    { id: 4, name: "TypeScript", level: "Intermediate", icon: SiTypescript },
    { id: 5, name: "React.js", level: "Intermediate", icon: FaReact },
  ],
  backend: [
    { id: 6, name: "Node.js", level: "Advanced", icon: FaNode },
    { id: 7, name: "Python", level: "Intermediate", icon: SiPython },
    { id: 8, name: "Go", level: "Beginner", icon: SiGo },
  ],
  framework: [
    { id: 9, name: "Express", level: "Advanced", icon: SiExpress },
    { id: 10, name: "Django", level: "Intermediate", icon: SiDjango },
    { id: 11, name: "Gin", level: "Beginner", icon: SiGin },
  ],
  database: [
    { id: 12, name: "MongoDB", level: "Advanced", icon: SiMongodb },
    { id: 13, name: "MySQL", level: "Intermediate", icon: SiMysql },
    { id: 14, name: "PostgreSQL", level: "Intermediate", icon: SiPostgresql },
  ],
  aws: [
    { id: 15, name: "Lambda", level: "Intermediate", icon: SiAmazon },
    { id: 16, name: "S3", level: "Intermediate", icon: SiAmazon },
    { id: 17, name: "SNS", level: "Beginner", icon: SiAmazon },
    { id: 18, name: "SQS", level: "Beginner", icon: SiAmazon },
    { id: 19, name: "API Gateway", level: "Intermediate", icon: SiAmazon },
  ],
  Other: [
    { id: 20, name: "RabbitMQ", level: "Intermediate", icon: SiRabbitmq },
    { id: 21, name: "Celery", level: "Beginner", icon: SiCelery },
    { id: 22, name: "Docker", level: "Intermediate", icon: SiDocker },
    { id: 23, name: "Git/GitHub", level: "Advanced", icon: SiGithub },
  ],
};

export const education: Education[] = [
  {
    id: 1,
    school: "Government Model Senior Secondary School (GMSSS)",
    location: "Chandigarh, India",
    grade: "Higher Secondary (11th & 12th)",
    startDate: "Apr 2016",
    endDate: "May 2018",
  },
  {
    id: 2,
    school: "Chitkara University",
    location: "Rajpura, Punjab, India",
    grade: "B.E. in Computer Science and Engineering",
    startDate: "Jun 2018",
    endDate: "Jun 2022",
  },
];

export const workExperience: WorkExperienceInterface[] = [
  {
    position: "Software Development Engineer 2",
    company: "Chimps At Work (CAW) Studios",
    location: "Hyderadbad",
    startDate: "September 2023",
    endDate: "Present",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nihil dolorem, illo veniam voluptatum nostrum at rerum quisquam sapiente beatae animi dolores unde commodi! Officiis, consequatur quibusdam. Natus, ipsum illo!",
  },
  {
    position: "Software Development Engineer",
    company: "Chimps At Work (CAW) Studios",
    location: "Hyderadbad",
    startDate: "June 2022",
    endDate: "August 2023",
  },
  {
    position: "Integration Engineer (Intern)",
    company: "Chimps At Work (CAW) Studios | Haptik",
    location: "Hyderadbad",
    startDate: "June 2021",
    endDate: "June 2022",
  },
];

// export const projects: Project[] = [
//   {
//     id: 1,
//     image:
//       "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png",
//     title: "React Projects",
//     description: "I have created multiple",
//   },
// ];
