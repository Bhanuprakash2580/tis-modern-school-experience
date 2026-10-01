import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '#approach', label: 'Our approach' },
  { href: '#campus', label: 'Life at Tulas' },
  { href: '#admissions', label: 'Admissions' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Tulas International School home">
        <span className="brand-mark">T</span>
        <span className="brand-name">TULAS <small>INTERNATIONAL SCHOOL</small></span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`site-nav${isOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}