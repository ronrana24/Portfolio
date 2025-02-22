import "./style.css"

export default function SkillHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: any;
}) {
  return <h3 className={`skills__title ${className}`}>{children}</h3>;
}
