import { company } from '../data/content';
import GoldTicker from './GoldTicker';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__strata" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <div className="container hero__content">
        <p className="eyebrow">West African gold producer · GSE: {company.ticker}</p>
        <h1>{company.tagline}</h1>
        <p className="hero__intro">{company.intro}</p>
        <div className="hero__actions">
          <a href="#operations" className="btn btn--gold">Explore our operations</a>
          <a href="#investors" className="btn btn--ghost">Investor centre</a>
        </div>
        <GoldTicker />
      </div>
    </section>
  );
}
