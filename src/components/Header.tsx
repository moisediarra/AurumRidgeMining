import { useEffect, useState } from 'react';
import { company, navLinks } from '../data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
            <path d="M8 50 L26 16 L36 34 L43 24 L58 50 Z" fill="currentColor" />
          </svg>
          <span>{company.name}</span>
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
