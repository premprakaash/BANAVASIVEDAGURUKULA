import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { images } from '../data/site.js';
import { useLang } from '../i18n/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="brand">
          <span className="brand__emblem">
            <img src={images.logo} alt="" />
          </span>
          <span className="brand__text">
            <span className="brand__name">{t.common.brand}</span>
            <span className="brand__place">{t.common.place}</span>
          </span>
        </Link>

        <div className="header__tools">
          <LanguageToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        <nav id="main-nav" aria-label="Main" className={open ? 'nav is-open' : 'nav'}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'nav__link is-active' : 'nav__link')}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact#enquiry" className="btn btn--saffron nav__cta">
            {t.nav.apply}
          </Link>
        </nav>
      </div>
    </header>
  );
}
