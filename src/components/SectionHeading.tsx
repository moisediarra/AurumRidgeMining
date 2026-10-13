interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center }: Props) {
  return (
    <div className={`section-heading ${center ? 'section-heading--center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-heading__sub">{subtitle}</p>}
    </div>
  );
}
