import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ButtonProp extends ChildrenProps {
  onClick?: () => void;
}

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  // id: number;
  //   title: string;
  //   description: string;
  //   image: string;
  //   tags: string[];
  //   demoLink: string;
  //   codeLink: string;
}

export interface Skill {
  id: number;
  name: string;
  level: string;
  icon: IconType;
}

export interface HeaderProps {
  className?: any;
  text: string;
}

export interface Education {
  id: number;
  school: string;
  location: string;
  grade: string;
  startDate: string;
  endDate: string;
}

export interface WorkExperienceInterface {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string,
}
