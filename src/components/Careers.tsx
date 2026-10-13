import { jobs, photos } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Careers() {
  return (
    <section className="section" id="careers">
      <div className="container careers">
        <figure className="careers__media">
          <img
            src={photos.careersEngineer.src}
            alt={photos.careersEngineer.alt}
            width={photos.careersEngineer.width}
            height={photos.careersEngineer.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <strong>92%</strong>
            of our 4,200 people are hired from the countries where we operate.
          </figcaption>
        </figure>
        <div>
          <SectionHeading
            eyebrow="Careers"
            title="Build your career underground — or above it"
            subtitle="From geology to data engineering, we invest in people for the long run."
          />
          <ul className="jobs">
            {jobs.map((j) => (
              <li className="job" key={j.title}>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.location}</p>
                </div>
                <span className="job__dept">{j.department}</span>
                <a href="#contact" className="btn btn--small">Apply</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
