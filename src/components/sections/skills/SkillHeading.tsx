import "./style.css"

export default function SkillHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: any;
}) {
  return <h3 className={`skills__title ${className}`}>{children}</h3>;
}
