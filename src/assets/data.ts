import {
  Education,
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
    demoLink: "https://learning-react-rouge.vercel.app/",
    codeLink: "https://github.com/ronrana24/Learning-React",
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
    { id: 8, name: "Go", level: "Intermediate", icon: SiGo },
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
    school: "Chitkara University",
    location: "Rajpura, Punjab, India",
    grade: "B.E. in Computer Science and Engineering",
    startDate: "Jun 2018",
    endDate: "Jun 2022",
  },
  {
    id: 2,
    school: "Government Model Senior Secondary School (GMSSS)",
    location: "Chandigarh, India",
    grade: "Higher Secondary (11th & 12th)",
    startDate: "Apr 2016",
    endDate: "May 2018",
  },
];

export const workExperience: WorkExperienceInterface[] = [
  {
    position: "Software Engineer",
    company: "Spyne",
    location: "Gurgaon, Haryana, India",
    startDate: "March 2025",
    endDate: "Present",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Sails.js",
      "AWS",
      "MySQL",
      "Python",
      "Clickhouse",
      "Grafana",
      "Kafka",
      "React.js",
      "Go",
    ],
    tasks: [
      "Spearheaded an automated alerting system in CUBE APM that tracked logic threshold violations and reduced developer response time by 30%, minimising system downtime.",
      "Engineered a fault-tolerant webhook system incorporating design patterns and message queuing to handle real-time event processing across multiple client integrations, reducing event failure rate by 35%.",
      "Pioneered a real-time streaming pipeline using Apache Kafka and MongoDB, enabling event-driven data distribution to downstream microservices and reducing data latency by 40%.",
      `Among a select group of developers chosen to architect a custom FTP system from scratch, enabling
automated file transmission to remote servers and improving transfer efficiency by 40%.`,
      `Supercharged MongoDB query performance through indexing and aggregation tuning, and
introduced Redis caching to eliminate redundant database calls, improving overall application
performance by 45%.`,
      `Delivered a real-time ClickHouse dashboard to monitor application performance and client data ingestion, improving system observability and reducing manual reporting effort by 40%.`,
      `Coordinated a team of 2+ developers, delegating tasks and providing technical mentorship that improved sprint velocity by 30%, conducting code reviews and knowledge-sharing sessions to ensure on-time delivery.`,
      `Architected and integrated multiple client APIs and crafted scalable, robust RESTful APIs following best practices for performance, fault tolerance, and extensibility across microservices.`,
    ],
  },
  {
    position: "Software Development Engineer 2",
    company: "Chimps At Work (CAW) Studios",
    location: "Hyderabad, Telangana, India",
    startDate: "September 2023",
    endDate: "Present",
    tasks: [
      `Engineered a scalable, end-to-end, role-based document management microservice, leveraging MVC architecture and open source service (Paperless), enabling secure access for 100+ employees and improving operational efficiency and data security.`,
      `Designed and optimised SQL & NoSQL database schemas, reducing query execution time by 35% and improving overall data retrieval efficiency.`,
      `Implemented a multi-threaded data extraction pipeline for FMCSA, boosting processing efficiency by 33% and integrating results into a database for scalable analysis.`,
      `Developed RESTful APIs and GraphQL, integrated backend systems with third-party platforms (payment services and cloud providers), reducing API response time.`,
      `Implement best practices, including OAuth2, JWT, and role-based access control, to ensure application reliability and security across front-end and back-end systems.`,
      `Architected a centralised logging system integrating Sentry for effective monitoring and observability, enabling streamlined issue tracking and resolution.`,
      `Enhanced software reliability by identifying and fixing critical bugs through systematic unit and functional testing.`
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "React.js",
    ],
  },
  {
    position: "Software Development Engineer",
    company: "Chimps At Work (CAW) Studios",
    location: "Hyderabad, Telangana, India",
    startDate: "June 2022",
    endDate: "August 2023",
    tasks: [
      "Built and optimized robust RESTful APIs for seamless integration with third-party services with high performance, scalability and fault tolerance with the DevOps team for service-oriented architecture.",
      `Architected an AWS Lambda-powered serverless communication pipeline with SQS, integrating LeadSquared APIs with event-based asynchronous architectures to enhance customer engagement by 40% and streamlined deployment pipelines using containerization (Docker) and GitHub Actions CICD.`,
      `Strategised with external stakeholders to gather and analyze end-user and business requirements, ensuring software compatibility and optimized performance for enhanced functionality and user satisfaction.`,
      `Designed relational database schemas and optimized Postgresql queries, reducing query execution time by 40% and implemented Redis for caching to improve data retrieval performance for data-intensive applications.`,
      `Developed and deployed multiple cron jobs to automate data extraction, transformation, and loading (ETL) processes, reducing manual effort by 20% and improving data processing efficiency by 17%.`
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Typescript",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
    ],
  },
  {
    position: "Integration Engineer (Intern)",
    company: "Chimps At Work (CAW) Studios | Haptik",
    location: "Hyderabad, Telangana, India",
    startDate: "June 2021",
    endDate: "June 2022",
    tasks: [
      "Designed and implemented RESTful APIs supporting scalable and high-performance backend systems.",
      "Integrated WA Payment into Chatbot, reducing in-store visits by 80% for fibre modem and Jio SIM recharges.",
      "Composed a chatbot feature for scheduling technician visits for Jio Fiber issues, reducing workload by 32,000 hours, cutting customer care calls and accelerating issue resolution time.",
      "Established strong relationships with cross-functional teams and stakeholders and contributed to the technical design of system enhancements."
    ],
    technologies: ["Python", "REST APIs", "SQL", "Postman"],
  },
];
