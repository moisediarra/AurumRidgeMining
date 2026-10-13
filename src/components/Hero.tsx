import { company, photos } from '../data/content';
import GoldTicker from './GoldTicker';

export default function Hero() {
  const { hero } = photos;

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <img
          src={hero.src}
          srcSet={hero.srcSet}
          sizes="100vw"
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
        />
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
