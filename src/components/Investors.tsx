import { reports } from '../data/content';
import SectionHeading from './SectionHeading';

const production = [
  { year: '2021', oz: 298 },
  { year: '2022', oz: 331 },
  { year: '2023', oz: 365 },
  { year: '2024', oz: 389 },
  { year: '2025', oz: 412 },
];

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function Investors() {
  const max = Math.max(...production.map((p) => p.oz));

  return (
    <section className="section section--sand" id="investors">
      <div className="container investors">
        <div>
          <SectionHeading eyebrow="Investors" title="Five years of consistent growth" />
          <div className="chart" role="img" aria-label="Annual gold production 2021 to 2025">
            {production.map((p) => (
              <div className="chart__col" key={p.year}>
                <span className="chart__val">{p.oz}k</span>
                <div className="chart__bar" style={{ height: `${(p.oz / max) * 100}%` }} />
                <span className="chart__year">{p.year}</span>
              </div>
            ))}
          </div>
          <p className="chart__caption">Attributable gold production, thousand ounces.</p>
        </div>

        <div>
          <h3 className="list-title">Latest reports & news</h3>
          <ul className="reports">
            {reports.map((r) => (
              <li key={r.title}>
                <a href="#investors">
                  <span className="reports__type">{r.type}</span>
                  <span className="reports__title">{r.title}</span>
                  <time dateTime={r.date}>{fmtDate(r.date)}</time>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
