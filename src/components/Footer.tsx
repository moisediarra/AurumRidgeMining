import { company, navLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">{company.name}</p>
          <p className="footer__note">
            Fictional company — demo website built with React + TypeScript. Photos from{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>.
          </p>
        </div>
        <nav className="footer__nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
