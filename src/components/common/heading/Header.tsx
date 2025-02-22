import { HeaderProps } from "../interfaces";

export default function Header({ className, text }: HeaderProps) {
  return <h2 className={`section__title ${className}`}>{text}</h2>;
}
