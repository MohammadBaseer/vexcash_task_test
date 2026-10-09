
interface BadgeProps {
  text: string;
  colorClass: string; // e.g. "bg-success"
}

export default function Badge({ text, colorClass }: BadgeProps) {
  return <span className={`badge ${colorClass}`}>{text}</span>;
}
