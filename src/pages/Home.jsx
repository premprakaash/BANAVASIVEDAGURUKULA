import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { site, images, isSet } from '../data/site.js';

// Items still marked [placeholder] in site.js are hidden until filled in.
const stats = [
  { value: site.foundedYear, label: 'Year founded' },
  { value: site.students, label: 'Resident vidyarthis' },
  { value: site.shakha, label: 'Veda shakha taught' },
  { value: `${site.ageRange} yrs`, label: 'Admission age (boys)' },
  { value: site.admissionYear, label: 'Academic year' },
  { value: '1800+', label: "Years of Banavasi's history" },
].filter((s) => isSet(s.value));

const foundations = [
  { title: 'Veda Adhyayana', text: 'Oral learning of the Vedas with correct svara, exactly as handed down for generations.' },
  { title: 'Sanskrit & Shastra', text: 'Grammar, literature and the shastras, so students understand every mantra they chant.' },
  { title: 'Daily Sadhana', text: 'Sandhyavandanam, prayer and a disciplined routine that shape character.' },
  { title: 'Seva & Simplicity', text: 'Living together, serving the Guru and the community, close to nature.' },
];

const yugas = [
  { name: 'Kaumudi', yuga: 'Kritayuga' },
  { name: 'Baindavi', yuga: 'Tretayuga' },
  { name: 'Jayanti', yuga: 'Dwaparayuga' },
  { name: 'Banavasi', yuga: 'Kaliyuga', current: true },
];

const day = [
  { time: 'BRAHMA MUHURTA', title: 'Rise & Sandhya', text: 'Snana, sandhyavandanam and prayers.', color: '#1F3B2D' },
  { time: 'MORNING', title: 'Veda Patha', text: 'Recitation with the Acharya.', color: '#3E6B54' },
  { time: 'AFTERNOON', title: 'Sanskrit & Shastra', text: 'Language and meaning of texts.', color: '#6E9A82' },
  { time: 'EVENING', title: 'Yoga, Play & Seva', text: 'Asana, games and shared duties.', color: '#E6B655' },
  { time: 'NIGHT', title: 'Svadhyaya', text: 'Revision of the day, then rest.', color: '#B35A00' },
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
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img className="hero__bg" src={images.group} alt="" />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="hero__motto">{site.motto}</p>
          <h1 className="hero__title">Preserving the Vedas, one student at a time</h1>
          <p className="hero__text">
            A residential Veda gurukula in Banavasi — the ancient capital of the Kadambas — where vidyarthis live and
            learn with their Acharyas in the guru–shishya parampara.
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn--saffron btn--lg">Admissions {site.admissionYear} open</Link>
            <Link to="/about" className="btn btn--outline-light btn--lg">Our story</Link>
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

      {/* Welcome */}
      <section className="section">
        <div className="container split split--center">
          <div className="split__text">
            <SectionTitle eyebrow="WELCOME" title="A living school of the Vedas in the land of the Kadambas" />
            <p className="body-lg">
              {isSet(site.foundedYear) && isSet(site.acharyaName)
                ? `Founded in ${site.foundedYear} by ${site.acharyaName}, our gurukula teaches`
                : 'Our gurukula teaches'} the Vedas the way they have
              always been taught — by listening, repeating and living with the Guru. Alongside Veda patha, students
              study English, Kannada, Mathematics, Science, Social Science, Sanskrit, Yoga and Computer Education.
            </p>
            <Link to="/about" className="text-link">
              Meet our Acharyas <ArrowIcon />
            </Link>
          </div>
          <div className="split__media welcome-media">
            <img className="welcome-media__main" src={images.temple} alt="Madhukeshwara temple complex in Banavasi" />
            <img className="welcome-media__side" src={images.logo} alt="Veda Gurukula Banavasi emblem" />
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="section section--green">
        <div className="container">
          <div className="head-row">
            <h2 className="h2 h2--light">What a vidyarthi learns here</h2>
            <p>Knowledge, discipline and character — taught together, every single day.</p>
          </div>
          <div className="foundations">
            {foundations.map((f, i) => (
              <div className="foundations__item" key={f.title}>
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
            <SectionTitle eyebrow="HERITAGE" title="Banavasi, the cradle of Karnataka history" />
            <p className="body-lg">
              The first kingdom of Kannada and capital of the Kadambas, Banavasi flourished from the 2nd century AD to
              the 19th. It is praised in the Puranas, in Kalidasa's <em>Meghaduta</em> and by Adikavi Pampa, and is home
              to the Madhukeshwara temple with its rare honey-coloured linga.
            </p>
            <div className="chips">
              {yugas.map((y) => (
                <span key={y.name} className={y.current ? 'chip chip--saffron' : 'chip'}>
                  <strong>{y.name}</strong> · {y.yuga}
                </span>
              ))}
            </div>
            <Link to="/about#banavasi" className="text-link">Read the full history →</Link>
          </div>
          <div className="split__media">
            <img className="photo photo--tall" src={images.temple} alt="Stone shikhara and mantapas of the Madhukeshwara temple" />
          </div>
        </div>
      </section>

      {/* Dinacharya */}
      <section className="section section--white">
        <div className="container">
          <SectionTitle eyebrow="DINACHARYA" title="A day at the gurukula" />
          <div className="timeline">
            {day.map((d) => (
              <div className="timeline__item" key={d.time} style={{ borderTopColor: d.color }}>
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
            <h2 className="h2">Admissions open for {site.admissionYear}</h2>
            <p className="body-lg">For boys aged {site.ageRange}. Selection is through a personal interaction — call us on <a href={site.phoneHref}>{site.phone}</a> to plan a visit.</p>
            <p className="kn cta__kn">ಬಾಲಕರಿಗೆ ಪ್ರವೇಶ · ಶೈಕ್ಷಣಿಕ ವರ್ಷ: {site.admissionYear}</p>
          </div>
          <div className="btn-row">
            <Link to="/contact#enquiry" className="btn btn--green btn--lg">Start your enquiry</Link>
            <Link to="/contact" className="btn btn--outline-green btn--lg">Plan a visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
