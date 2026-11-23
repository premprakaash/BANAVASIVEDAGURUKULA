export default function SectionTitle({ eyebrow, title, light = false, center = false }) {
  return (
    <div className={center ? 'section-title is-center' : 'section-title'}>
      {eyebrow && <p className={light ? 'eyebrow eyebrow--light' : 'eyebrow'}>{eyebrow}</p>}
      <h2 className={light ? 'h2 h2--light' : 'h2'}>{title}</h2>
    </div>
  );
}
