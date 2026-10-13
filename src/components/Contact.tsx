import { useState, type ChangeEvent, type FormEvent } from 'react';
import { company } from '../data/content';
import SectionHeading from './SectionHeading';

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: '', email: '', topic: 'General enquiry', message: '' };

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Please enter a valid email.';
  if (f.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
  return e;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // Demo only: plug in an API route (e.g. /api/contact on Vercel) or a service like Formspree here.
    setSent(true);
    setForm(initial);
  };

  return (
    <section className="section section--dark" id="contact">
      <div className="container contact">
        <div>
          <SectionHeading eyebrow="Contact" title="Talk to our team" />
          <ul className="contact__info">
            <li><strong>Head office</strong>{company.address}</li>
            <li><strong>Email</strong><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><strong>Phone</strong>{company.phone}</li>
          </ul>
        </div>

        {sent ? (
          <div className="form-success" role="status">
            <h3>Thank you!</h3>
            <p>Your message has been received. Our team will respond within two business days.</p>
            <button className="btn btn--ghost" onClick={() => setSent(false)}>Send another</button>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <label>
              Name
              <input value={form.name} onChange={update('name')} aria-invalid={!!errors.name} />
              {errors.name && <span className="form__err">{errors.name}</span>}
            </label>
            <label>
              Email
              <input type="email" value={form.email} onChange={update('email')} aria-invalid={!!errors.email} />
              {errors.email && <span className="form__err">{errors.email}</span>}
            </label>
            <label>
              Topic
              <select value={form.topic} onChange={update('topic')}>
                <option>General enquiry</option>
                <option>Investor relations</option>
                <option>Careers</option>
                <option>Community & sustainability</option>
                <option>Suppliers</option>
              </select>
            </label>
            <label>
              Message
              <textarea rows={5} value={form.message} onChange={update('message')} aria-invalid={!!errors.message} />
              {errors.message && <span className="form__err">{errors.message}</span>}
            </label>
            <button type="submit" className="btn btn--gold">Send message</button>
          </form>
        )}
      </div>
    </section>
  );
}
