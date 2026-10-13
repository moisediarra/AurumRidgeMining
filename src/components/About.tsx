import SectionHeading from './SectionHeading';

const values = [
  { title: 'Safety first', text: 'Every shift starts and ends with zero harm as the target — no exceptions.' },
  { title: 'Local by default', text: 'We hire, train and buy locally, and promote national leaders into every senior role.' },
  { title: 'Radical transparency', text: 'Reserves, royalties and ESG data published openly, audited independently.' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div>
          <SectionHeading
            eyebrow="About us"
            title="Three decades in the Birimian greenstone belt"
          />
          <p>
            Founded in Accra in 1996, Aurum Ridge has grown from a single exploration licence into a
            multi-asset producer. Our geologists know the Birimian gold belts of Ghana and Mali rock by
            rock — and our operating model is built around the communities who live alongside our mines.
          </p>
          <p>
            We follow the World Gold Council's Responsible Gold Mining Principles and report against
            GRI and TCFD standards.
          </p>
        </div>
        <ul className="values">
          {values.map((v) => (
            <li key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
