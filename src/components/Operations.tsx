import { useMemo, useState } from 'react';
import { operations, type OperationStatus } from '../data/content';
import SectionHeading from './SectionHeading';

type Filter = 'All' | OperationStatus;
const filters: Filter[] = ['All', 'Production', 'Development', 'Exploration'];

export default function Operations() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = useMemo(
    () => (filter === 'All' ? operations : operations.filter((o) => o.status === filter)),
    [filter],
  );

  return (
    <section className="section section--dark" id="operations">
      <div className="container">
        <SectionHeading
          eyebrow="Operations"
          title="A pipeline from discovery to doré"
          subtitle="Two producing mines, one project in construction and a growing exploration portfolio."
        />

        <div className="filters" role="tablist" aria-label="Filter operations">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`chip ${filter === f ? 'chip--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="ops-grid">
          {visible.map((op) => (
            <article className="op-card" key={op.id}>
              <div className="op-card__media">
                <img
                  src={op.image.src}
                  alt={op.image.alt}
                  width={op.image.width}
                  height={op.image.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className={`badge badge--${op.status.toLowerCase()}`}>{op.status}</span>
              </div>
              <div className="op-card__body">
                <span className="op-card__loc">{op.location}</span>
                <h3>{op.name}</h3>
                <p>{op.description}</p>
                <dl className="op-card__facts">
                  <div>
                    <dt>Output</dt>
                    <dd>{op.output}</dd>
                  </div>
                  <div>
                    <dt>Reserves</dt>
                    <dd>{op.reserves}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
