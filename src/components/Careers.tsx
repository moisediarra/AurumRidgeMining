import { jobs } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Careers() {
  return (
    <section className="section" id="careers">
      <div className="container">
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
    </section>
  );
}
