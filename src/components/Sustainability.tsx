import { pillars } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Sustainability() {
  return (
    <section className="section" id="sustainability">
      <div className="container">
        <SectionHeading
          eyebrow="Sustainability"
          title="Measured, reported, independently verified"
          subtitle="Our ESG commitments are tied to executive pay and audited every year."
          center
        />
        <div className="pillars">
          {pillars.map((p, i) => (
            <article className="pillar" key={p.title}>
              <span className="pillar__num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p className="pillar__metric">{p.metric}</p>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
