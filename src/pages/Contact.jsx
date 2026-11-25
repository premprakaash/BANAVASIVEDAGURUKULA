import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { site, images, admissions, isSet, whatsappLink } from '../data/site.js';
import { PhoneIcon, WhatsAppIcon, YouTubeIcon, InstagramIcon } from '../components/Icons.jsx';

const steps = [
  { title: 'Send an enquiry', text: `Call or WhatsApp ${site.phone}, or fill in the form below.` },
  { title: 'Visit with family', text: 'See how the vidyarthis live and learn at the gurukula.' },
  { title: 'Interaction / interview', text: 'Selection is through a personal interaction with the student and parents.' },
  { title: 'Documents & joining', text: `Submit the required documents and begin the academic year ${site.admissionYear}.` },
];

const emptyForm = { parent: '', student: '', age: '', phone: '', email: '', message: '' };

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
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  // Sends the enquiry to the gurukula's WhatsApp with the details filled in.
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappLink(buildMessage(form)), '_blank', 'noopener');
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <>
      {/* Page hero */}
      <section className="section section--green contact-hero">
        <div className="container">
          <p className="breadcrumb breadcrumb--light"><Link to="/">Home</Link> / Admissions &amp; Contact</p>
          <h1 className="h1 h1--light">Admissions &amp; Contact</h1>
          <p className="lead lead--light">
            Admissions open for boys for the academic year {site.admissionYear}. We are happy to answer every question.
          </p>
          <p className="kn kn--light contact-hero__kn">ಬಾಲಕರಿಗೆ ಪ್ರವೇಶ · ಶೈಕ್ಷಣಿಕ ವರ್ಷ: {site.admissionYear}</p>
        </div>
      </section>

      {/* Steps + admissions summary */}
      <section className="section">
        <div className="container split">
          <div className="split__text">
            <SectionTitle eyebrow="HOW TO JOIN" title="Admission in four steps" />
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="steps__item">
                  <span className={i === steps.length - 1 ? 'steps__num is-last' : 'steps__num'}>{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="glance">
            <p className="eyebrow">ADMISSIONS {site.admissionYear}</p>
            <p className="kn glance__kn-title">ಪ್ರವೇಶ ಮಾಹಿತಿ</p>
            {admissions.map((a) => (
              <div className="glance__row" key={a.label}>
                <span>{a.label}</span>
                <span className="glance__value">
                  <strong>{a.value}</strong>
                  <span className="kn glance__kn">{a.kn}</span>
                </span>
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
            <SectionTitle eyebrow="ENQUIRY" title="Write to us" />
            <p className="body form__note">Your enquiry opens in WhatsApp with these details filled in — just press send.</p>
            <div className="form__row">
              <label>Parent's name<input type="text" required value={form.parent} onChange={update('parent')} /></label>
              <label>Student's name<input type="text" required value={form.student} onChange={update('student')} /></label>
            </div>
            <div className="form__row">
              <label className="form__narrow">Student's age<input type="number" min="1" max="20" value={form.age} onChange={update('age')} /></label>
              <label>Phone / WhatsApp<input type="tel" required value={form.phone} onChange={update('phone')} /></label>
            </div>
            <label>Email (optional)<input type="email" value={form.email} onChange={update('email')} /></label>
            <label>Message<textarea rows="4" value={form.message} onChange={update('message')} /></label>
            <button type="submit" className="btn btn--saffron btn--lg form__submit btn--icon">
              <WhatsAppIcon width={20} height={20} /> Send enquiry on WhatsApp
            </button>
            {sent && (
              <p className="form__success" role="status">
                Thank you! If WhatsApp did not open, call us on {site.phone}.
              </p>
            )}
          </form>
          <div className="visit-card">
            <h3>Visit the gurukula</h3>
            <div className="visit-card__item">
              <p className="visit-card__label">ADDRESS</p>
              <p>
                {site.fullName}, {isSet(site.street) && `${site.street}, `}
                {site.address}
              </p>
            </div>
            <div className="visit-card__item">
              <p className="visit-card__label">PHONE / WHATSAPP</p>
              <div className="visit-card__actions">
                <a href={site.phoneHref} className="pill-link"><PhoneIcon /> {site.phone}</a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="pill-link"><WhatsAppIcon /> WhatsApp</a>
              </div>
            </div>
            {isSet(site.email) && (
              <div className="visit-card__item">
                <p className="visit-card__label">EMAIL</p>
                <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
              </div>
            )}
            {isSet(site.visitingHours) && (
              <div className="visit-card__item">
                <p className="visit-card__label">VISITING HOURS</p>
                <p>{site.visitingHours}</p>
              </div>
            )}
            <div className="visit-card__item">
              <p className="visit-card__label">FOLLOW US</p>
              <div className="visit-card__actions">
                <a href={site.youtube} target="_blank" rel="noreferrer" className="pill-link"><YouTubeIcon /> YouTube</a>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="pill-link"><InstagramIcon /> Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
