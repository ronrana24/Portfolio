import { HeaderProps } from "../interfaces";

export default function SubHeading({ className, text }: HeaderProps) {
  return <span className={`section__subtitle ${className}`}>{text}</span>;
}
