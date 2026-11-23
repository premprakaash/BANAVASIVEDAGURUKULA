import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { site, images } from '../data/site.js';

const steps = [
  { title: 'Send an enquiry', text: 'Use the form or call us — we reply within [X] days.' },
  { title: 'Visit with family', text: 'Spend a day and see how students live and learn.' },
  { title: 'Meet the Acharya', text: 'A gentle conversation with the student and parents.' },
  { title: 'Join the gurukula', text: 'Begin on an auspicious day at the start of the year.' },
];

const glance = [
  ['Age', '[X – Y] years'],
  ['Eligibility', '[Upanayana done]'],
  ['Year begins', '[MONTH]'],
  ['Fees', '[Free / details]'],
];

const emptyForm = { parent: '', student: '', age: '', phone: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to a backend, Formspree, EmailJS or Google Forms.
    console.log('Enquiry', form);
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
          <p className="lead lead--light">Begin your child's journey into Vedic learning. We are happy to answer every question.</p>
        </div>
      </section>

      {/* Steps + glance */}
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
            <p className="eyebrow">AT A GLANCE</p>
            {glance.map(([k, v]) => (
              <div className="glance__row" key={k}>
                <span>{k}</span>
                <strong>{v}</strong>
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
            <div className="form__row">
              <label>Parent's name<input type="text" required value={form.parent} onChange={update('parent')} /></label>
              <label>Student's name<input type="text" required value={form.student} onChange={update('student')} /></label>
            </div>
            <div className="form__row">
              <label className="form__narrow">Student's age<input type="number" min="1" value={form.age} onChange={update('age')} /></label>
              <label>Phone / WhatsApp<input type="tel" required value={form.phone} onChange={update('phone')} /></label>
            </div>
            <label>Email<input type="email" value={form.email} onChange={update('email')} /></label>
            <label>Message<textarea rows="4" value={form.message} onChange={update('message')} /></label>
            <button type="submit" className="btn btn--saffron btn--lg form__submit">Send enquiry</button>
            {sent && (
              <p className="form__success" role="status">
                Thank you! Your enquiry has been received. We will get back to you soon.
              </p>
            )}
          </form>
          <div className="visit-card">
            <h3>Visit the gurukula</h3>
            <div className="visit-card__item">
              <p className="visit-card__label">ADDRESS</p>
              <p>{site.fullName}, {site.street}, {site.address}</p>
            </div>
            <div className="visit-card__item">
              <p className="visit-card__label">PHONE / WHATSAPP</p>
              <p>{site.phone}</p>
            </div>
            <div className="visit-card__item">
              <p className="visit-card__label">EMAIL</p>
              <p>{site.email}</p>
            </div>
            <div className="visit-card__item">
              <p className="visit-card__label">VISITING HOURS</p>
              <p>{site.visitingHours}</p>
            </div>
            <div className="placeholder placeholder--dark">[Google Map]</div>
          </div>
        </div>
      </section>
    </>
  );
}
