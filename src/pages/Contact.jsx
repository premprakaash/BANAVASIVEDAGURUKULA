import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import Donate from '../components/Donate.jsx';
import { site, images, isSet, whatsappLink } from '../data/site.js';
import { useLang, fill } from '../i18n/LanguageContext.jsx';
import { PhoneIcon, WhatsAppIcon, YouTubeIcon, InstagramIcon } from '../components/Icons.jsx';

const emptyForm = { parent: '', student: '', age: '', phone: '', email: '', message: '' };

// The WhatsApp message to the gurukula stays in English so it is easy to read at their end.
function buildMessage(f) {
  return [
    'Namaste! Admission enquiry for Veda Gurukula Banavasi',
    `Parent: ${f.parent}`,
    `Student: ${f.student}${f.age ? ` (age ${f.age})` : ''}`,
    `Phone: ${f.phone}`,
    f.email && `Email: ${f.email}`,
    f.message && `Message: ${f.message}`,
  ]
    .filter(Boolean)
    .join('\n');
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  // Opens WhatsApp to the gurukula with the details filled in.
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappLink(buildMessage(form)), '_blank', 'noopener');
    setSent(true);
    setForm(emptyForm);
  };

  const phoneLink = <a href={site.phoneHref}>{site.phone}</a>;

  return (
    <>
      {/* Page hero */}
      <section className="section section--green contact-hero">
        <div className="container">
          <p className="breadcrumb breadcrumb--light"><Link to="/">{t.nav.home}</Link> / {c.breadcrumb}</p>
          <h1 className="h1 h1--light">{c.title}</h1>
          <p className="lead lead--light">{fill(c.lead, { year: site.admissionYear })}</p>
        </div>
      </section>

      {/* Steps + admissions summary */}
      <section className="section">
        <div className="container split">
          <div className="split__text">
            <SectionTitle eyebrow={c.stepsEyebrow} title={c.stepsTitle} />
            <ol className="steps">
              {c.steps.map((s, i) => (
                <li key={i} className="steps__item">
                  <span className={i === c.steps.length - 1 ? 'steps__num is-last' : 'steps__num'}>{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{fill(s.text, { phone: site.phone, year: site.admissionYear })}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="glance">
            <p className="eyebrow">{fill(c.admissionsTitle, { year: site.admissionYear })}</p>
            {c.admissions.map((a, i) => (
              <div className="glance__row" key={i}>
                <span>{a.label}</span>
                <strong className="glance__value">{fill(a.value, { year: site.admissionYear })}</strong>
              </div>
            ))}
            <img src={images.group} alt="Vidyarthis with their Acharyas" />
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="section section--white bordered-top">
        <div className="container split">
          <form className="form split__text" onSubmit={handleSubmit}>
            <SectionTitle eyebrow={c.formEyebrow} title={c.formTitle} />
            <p className="body form__note">{c.formNote}</p>
            <div className="form__row">
              <label>{c.parent}<input type="text" required value={form.parent} onChange={update('parent')} /></label>
              <label>{c.student}<input type="text" required value={form.student} onChange={update('student')} /></label>
            </div>
            <div className="form__row">
              <label className="form__narrow">{c.age}<input type="number" min="1" max="20" value={form.age} onChange={update('age')} /></label>
              <label>{c.phone}<input type="tel" required value={form.phone} onChange={update('phone')} /></label>
            </div>
            <label>{c.email}<input type="email" value={form.email} onChange={update('email')} /></label>
            <label>{c.message}<textarea rows="4" value={form.message} onChange={update('message')} /></label>
            <button type="submit" className="btn btn--saffron btn--lg form__submit btn--icon">
              <WhatsAppIcon width={20} height={20} /> {c.send}
            </button>
            {sent && (
              <p className="form__success" role="status">
                {fill(c.sent, { phone: phoneLink })}
              </p>
            )}
          </form>
          <div className="visit-card">
            <h3>{c.visitTitle}</h3>
            <div className="visit-card__item">
              <p className="visit-card__label">{c.address}</p>
              <p>
                {t.common.fullName}, {isSet(site.street) && `${site.street}, `}
                {t.common.address}
              </p>
            </div>
            <div className="visit-card__item">
              <p className="visit-card__label">{c.phoneLabel}</p>
              <div className="visit-card__actions">
                <a href={site.phoneHref} className="pill-link"><PhoneIcon /> {site.phone}</a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="pill-link">
                  <WhatsAppIcon /> {t.common.whatsapp}
                </a>
              </div>
            </div>
            {isSet(site.email) && (
              <div className="visit-card__item">
                <p className="visit-card__label">{c.emailLabel}</p>
                <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
              </div>
            )}
            {isSet(site.visitingHours) && (
              <div className="visit-card__item">
                <p className="visit-card__label">{c.hours}</p>
                <p>{site.visitingHours}</p>
              </div>
            )}
            <div className="visit-card__item">
              <p className="visit-card__label">{c.follow}</p>
              <div className="visit-card__actions">
                <a href={site.youtube} target="_blank" rel="noreferrer" className="pill-link"><YouTubeIcon /> YouTube</a>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="pill-link"><InstagramIcon /> Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Donate />
    </>
  );
}
