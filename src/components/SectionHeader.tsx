type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        {eyebrow ? <div className="eyebrow" style={{ color: "var(--brand-red)" }}>{eyebrow}</div> : null}
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
