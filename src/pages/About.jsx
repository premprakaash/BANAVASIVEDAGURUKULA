import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { site, images, academicSubjects } from '../data/site.js';

const curriculum = [
  ['Veda Adhyayana', `${site.shakha} — samhita, pada and krama patha.`],
  ['Sanskrit Bhasha', 'Reading, speaking and writing Sanskrit.'],
  ['Shastra', 'Vyakarana and other shastras for seniors.'],
  ['Prayoga', 'Sandhya, puja and Vedic karma in practice.'],
  ['Yoga & Health', 'Asana, pranayama, play and sattvic food.'],
];

const yugas = [
  ['Kritayuga', 'Kaumudi'],
  ['Tretayuga', 'Baindavi'],
  ['Dwaparayuga', 'Jayanti'],
  ['Kaliyuga', 'Banavasi'],
];

const dynasties = ['Chutu', 'Satavahana', 'Kadamba', 'Rashtrakuta', 'Hoysala', 'Vijayanagara', 'Sode kings'];

export default function About() {
  return (
    <>
      {/* Page hero */}
      <section className="section page-hero">
        <div className="container split split--center">
          <div className="split__text">
            <p className="breadcrumb"><Link to="/">Home</Link> / About</p>
            <h1 className="h1">About our gurukula</h1>
            <p className="lead">Rooted in the parampara, growing in the sacred soil of Banavasi.</p>
          </div>
          <div className="split__media">
            <img className="photo photo--group" src={images.group} alt="Vidyarthis with their Acharyas in front of the gurukula building" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section section--white bordered-top">
        <div className="container story">
          <div className="story__title">
            <SectionTitle eyebrow="OUR STORY" title="Keeping an ancient flame alive" />
          </div>
          <div className="story__body">
            <p className="body-xl">
              {site.fullName} began in {site.foundedYear} when {site.acharyaName} welcomed the first students to learn
              the Vedas in the traditional way. [Add two or three sentences on how the gurukula started.]
            </p>
            <p className="body-xl">
              Today {site.students} vidyarthis live here with their Acharyas. They learn by listening and repeating, by
              serving and observing — as students in India have done for thousands of years.
            </p>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="section section--green motto">
        <div className="container container--narrow">
          <p className="motto__sanskrit">{site.motto}</p>
          <p className="motto__meaning">“{site.mottoMeaning}”</p>
          <p className="motto__source">MANUSMRITI 2.6 · OUR GUIDING MOTTO</p>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section">
        <div className="container cards-2">
          <div className="card">
            <p className="eyebrow">VISION</p>
            <p className="card__statement">Every mantra preserved, every student a living carrier of the Veda.</p>
            <p className="body">To nurture a generation that holds Vedic knowledge with accuracy, understanding and humility.</p>
          </div>
          <div className="card">
            <p className="eyebrow">MISSION</p>
            <ol className="mission-list">
              <li>Teach the Vedas orally, with correct svara.</li>
              <li>Build a strong foundation in Sanskrit and shastra.</li>
              <li>Shape discipline and values through daily sadhana.</li>
              <li>Keep learning free of commerce, supported by the community.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Acharya */}
      <section className="section section--white bordered-top">
        <div className="container split split--center">
          <div className="placeholder placeholder--portrait">[Acharya's photograph]</div>
          <div className="split__text">
            <SectionTitle eyebrow="OUR ACHARYA" title={site.acharyaName} />
            <p className="role">Founder &amp; Pradhana Acharya</p>
            <p className="body-lg">
              [Two or three sentences on where and from whom the Acharya studied, which Veda shakha, and years of
              teaching.]
            </p>
            <div className="mini-stats">
              <div><p className="mini-stats__value">[Shakha]</p><p className="mini-stats__label">Veda shakha</p></div>
              <div><p className="mini-stats__value">[XX] yrs</p><p className="mini-stats__label">Teaching</p></div>
              <div><p className="mini-stats__value">[Pathashala]</p><p className="mini-stats__label">Studied at</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="CURRICULUM" title="What we teach" />
          <div className="curriculum">
            {curriculum.map(([name, text]) => (
              <div className="curriculum__row" key={name}>
                <span className="curriculum__name">{name}</span>
                <span className="curriculum__text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic education */}
      <section id="academics" className="section section--white bordered-top">
        <div className="container">
          <div className="head-row head-row--dark">
            <div>
              <p className="eyebrow">ACADEMIC EDUCATION · <span className="kn">ಲೌಕಿಕ ವಿದ್ಯೆ</span></p>
              <h2 className="h2">Balanced learning beyond the Vedas</h2>
            </div>
            <div>
              <p className="body">
                Along with Vedic education, students are taught essential academic subjects to ensure balanced
                intellectual growth.
              </p>
              <p className="kn kn--muted">
                ವೇದ ವಿದ್ಯೆಯ ಜೊತೆಗೆ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಮತೋಲನಯುತ ಬೆಳವಣಿಗೆಯಿಗಾಗಿ ಲೌಕಿಕ ವಿದ್ಯೆಗಳನ್ನು ಕಲಿಸಲಾಗುತ್ತದೆ.
              </p>
            </div>
          </div>
          <ul className="subjects">
            {academicSubjects.map((s) => (
              <li key={s.en} className="subjects__item">
                <span className="subjects__en">{s.en}</span>
                <span className="kn subjects__kn">{s.kn}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Banavasi heritage */}
      <section id="banavasi" className="section section--dark">
        <div className="container">
          <div className="split">
            <div className="split__text">
              <SectionTitle eyebrow="HERITAGE OF BANAVASI" title="The cradle of Karnataka history" light />
              <p className="body-lg">
                Banavasi in Uttara Kannada was the first kingdom of Kannada and the capital of the Kadamba dynasty. It
                flourished from the 2nd century AD to the 19th century and is counted among the five ancient places of
                Karnataka — there is hardly a Kannadiga who has not heard its name.
              </p>
              <p className="body-lg">
                It is described in the Puranas and celebrated in Kalidasa's <em>Meghaduta</em>, in the heartfelt praise
                of Adikavi Pampa, and in Chamarasa's <em>Prabhulingaleele</em>.
              </p>
            </div>
            <div className="yuga-card">
              <p className="eyebrow eyebrow--light">ONE TOWN, FOUR YUGAS</p>
              {yugas.map(([yuga, name], i) => (
                <div className="yuga-card__row" key={yuga}>
                  <span>{yuga}</span>
                  <strong className={i === 3 ? 'is-gold' : ''}>{name}</strong>
                </div>
              ))}
            </div>
          </div>
          <p className="eyebrow eyebrow--light dynasties__label">DYNASTIES THAT SHAPED THE MADHUKESHWARA TEMPLE COMPLEX</p>
          <div className="dynasties">
            {dynasties.map((d) => (
              <span key={d} className={d === 'Kadamba' ? 'dynasty is-gold' : 'dynasty'}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Madhukeshwara temple */}
      <section className="section section--white">
        <div className="container split">
          <div className="split__text">
            <SectionTitle eyebrow="SHRI MADHUKESHWARA TEMPLE" title="A temple of sculptures" />
            <p className="body-lg">
              Famous for Kadamba art, its shikhara is in the Kadamba-nagara style and it is regarded as one of the
              oldest temples in Karnataka. The Madhukeshwara linga is honey-coloured — reputed to be the only one of its
              kind. Two charming baby-elephant sculptures guard the entrance like twin tusks; a replica is said to be
              kept in the New Parliament House, New Delhi.
            </p>
            <p className="body-lg">
              Beside it stands the Madhumati Parvati temple, whose mantapa was built by Sadashivaraya of Sode. The
              statues of Adi Madhava and Kartikeya date to the Kadamba period (4th century AD).
            </p>
            <p className="body muted">
              <strong className="text-green">Also in the complex:</strong> Triloka Mantapa, Asthana Mantapa, Ashta
              Dikpalakas, Dwibhuja Shanta Narasimha, Sri Rama, Adishesha, Veerabhadra, Basavalingeshwara, Chandeshwara
              and more.
            </p>
          </div>
          <div className="split__media">
            <img className="photo photo--medium" src={images.temple} alt="Madhukeshwara temple complex in Banavasi" />
            <div className="mantapas">
              <p className="eyebrow eyebrow--brown">THE SIX MANTAPAS</p>
              <p className="mantapas__list">Bimba · Ardha · Ghanta · Sabha · Nritya · Nandi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bordered-top">
        <div className="container">
          <SectionTitle eyebrow="GALLERY" title="Life at the gurukula" />
          <div className="gallery">
            <img className="gallery__main" src={images.group} alt="Vidyarthis and Acharyas together" />
            <div className="gallery__side">
              <img src={images.temple} alt="Temple courtyard in Banavasi" />
              <div className="placeholder">[Photo: Veda class]</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
