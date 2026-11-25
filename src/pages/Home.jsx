import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { site, images, isSet } from '../data/site.js';
import { useLang, fill } from '../i18n/LanguageContext.jsx';

const dayColors = ['#1F3B2D', '#3E6B54', '#6E9A82', '#E6B655', '#B35A00'];

const iconProps = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
const facilityIcons = [
  <svg key="home" {...iconProps}><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>,
  <svg key="meal" {...iconProps}><path d="M3 12h18" /><path d="M5 12a7 7 0 0 0 14 0" /><path d="M12 5v3" /><path d="M9 6c0-1 1-2 1-3" /><path d="M15 6c0-1-1-2-1-3" /></svg>,
  <svg key="book" {...iconProps}><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" /><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" /></svg>,
  <svg key="river" {...iconProps}><path d="M2 16c2 0 2-1.5 4-1.5S8 16 10 16s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5" /><path d="M2 20c2 0 2-1.5 4-1.5S8 20 10 20s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5" /><path d="M7 11V7l5-4 5 4v4" /></svg>,
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const { t } = useLang();
  const h = t.home;

  // Items still marked [placeholder] in site.js are hidden until filled in.
  const stats = [
    { value: site.foundedYear, label: h.stats.founded },
    { value: site.students, label: h.stats.students },
    { value: h.stats.shakhaValue, label: h.stats.shakha },
    { value: fill(h.stats.ageValue, { age: site.ageRange }), label: h.stats.age },
    { value: site.admissionYear, label: h.stats.year },
  ].filter((s) => isSet(s.value));

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img className="hero__bg" src={images.group} alt="" />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="hero__motto">{site.motto}</p>
          <h1 className="hero__title">{h.heroTitle}</h1>
          <p className="hero__text">{h.heroText}</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn--saffron btn--lg">
              {fill(h.heroAdmission, { year: site.admissionYear })}
            </Link>
            <Link to="/about" className="btn btn--outline-light btn--lg">{h.heroStory}</Link>
          </div>
        </div>
      </section>

      {/* Stats card */}
      <section className="stats-wrap">
        <div className="stats">
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <p className="stats__value">{s.value}</p>
              <p className="stats__label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="recog" aria-label={h.recogEyebrow}>
        <div className="container recog__inner">
          <div className="recog__text">
            <p className="eyebrow">{h.recogEyebrow}</p>
            <p className="body">{h.recogText}</p>
          </div>
          <ul className="recog__bodies">
            {h.recogBodies.map((r, i) => (
              <li key={i} className="recog__body">
                <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" /><path d="m9 12 2 2 4-4" /></svg>
                <span>
                  <strong>{r.name}</strong>
                  <span className="recog__place">{r.place}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Welcome */}
      <section className="section">
        <div className="container split split--center">
          <div className="split__text">
            <SectionTitle eyebrow={h.welcomeEyebrow} title={h.welcomeTitle} />
            <p className="body-lg">{h.welcomeText}</p>
            <Link to="/about#acharya" className="text-link">
              {h.welcomeLink} <ArrowIcon />
            </Link>
          </div>
          <div className="split__media">
            <img
              className="photo-deity"
              src={images.deity}
              alt="Shri Uma Madhukeshwara Devaru (decorated), Banavasi"
              width="439"
              height="653"
            />
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="section section--green">
        <div className="container">
          <div className="head-row">
            <h2 className="h2 h2--light">{h.foundationsTitle}</h2>
            <p>{h.foundationsText}</p>
          </div>
          <div className="foundations">
            {h.foundations.map((f, i) => (
              <div className="foundations__item" key={i}>
                <p className="foundations__num">{String(i + 1).padStart(2, '0')}</p>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="section">
        <div className="container split split--center">
          <div className="split__text">
            <SectionTitle eyebrow={h.heritageEyebrow} title={h.heritageTitle} />
            <p className="body-lg">{h.heritageText}</p>
            <div className="chips">
              {t.yugas.map((y, i) => (
                <span key={i} className={i === 3 ? 'chip chip--saffron' : 'chip'}>
                  <strong>{y.name}</strong> · {y.yuga}
                </span>
              ))}
            </div>
            <Link to="/about#banavasi" className="text-link">{h.heritageLink}</Link>
          </div>
          <div className="split__media">
            <img className="photo photo--tall" src={images.temple} alt="Stone shikhara and mantapas of the Madhukeshwara temple" />
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section section--white bordered-top">
        <div className="container">
          <SectionTitle eyebrow={h.facilitiesEyebrow} title={h.facilitiesTitle} />
          <ul className="facilities">
            {h.facilities.map((f, i) => (
              <li key={i} className="facilities__item">
                <span className="facilities__icon" aria-hidden="true">{facilityIcons[i]}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dinacharya */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle eyebrow={h.dayEyebrow} title={h.dayTitle} />
          <div className="timeline">
            {h.day.map((d, i) => (
              <div className="timeline__item" key={i} style={{ borderTopColor: dayColors[i] }}>
                <p className="timeline__time">{d.time}</p>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2 className="h2">{fill(h.ctaTitle, { year: site.admissionYear })}</h2>
            <p className="body-lg">
              {fill(h.ctaText, {
                age: site.ageRange,
                phone: <a href={site.phoneHref}>{site.phone}</a>,
              })}
            </p>
          </div>
          <div className="btn-row">
            <Link to="/contact#enquiry" className="btn btn--green btn--lg">{h.ctaEnquiry}</Link>
            <Link to="/contact" className="btn btn--outline-green btn--lg">{h.ctaVisit}</Link>
            <Link to="/contact#donate" className="btn btn--outline-green btn--lg">{t.nav.seva}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
