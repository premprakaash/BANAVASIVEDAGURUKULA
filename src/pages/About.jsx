import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { site, images } from '../data/site.js';
import { strings } from '../i18n/strings.js';
import { useLang, fill } from '../i18n/LanguageContext.jsx';

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  const otherSubjects = strings[lang === 'en' ? 'kn' : 'en'].subjects;

  return (
    <>
      {/* Page hero */}
      <section className="section page-hero">
        <div className="container split split--center">
          <div className="split__text">
            <p className="breadcrumb"><Link to="/">{t.nav.home}</Link> / {a.breadcrumb}</p>
            <h1 className="h1">{a.title}</h1>
            <p className="lead">{a.lead}</p>
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
            <SectionTitle eyebrow={a.storyEyebrow} title={a.storyTitle} />
          </div>
          <div className="story__body">
            <p className="body-xl">
              {fill(a.story1, { fullName: t.common.fullName, year: site.foundedYear, acharya: a.acharyaName })}
            </p>
            <p className="body-xl">{fill(a.story2, { acharya: a.acharyaName })}</p>
            <p className="body-xl">{a.story3}</p>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="section section--green motto">
        <div className="container container--narrow">
          <p className="motto__sanskrit">{site.motto}</p>
          <p className="motto__meaning">“{t.common.mottoMeaning}”</p>
          <p className="motto__source">{a.mottoSource}</p>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section">
        <div className="container cards-2">
          <div className="card">
            <p className="eyebrow">{a.visionEyebrow}</p>
            <p className="card__statement">{a.vision}</p>
            <p className="body">{a.visionText}</p>
          </div>
          <div className="card">
            <p className="eyebrow">{a.objectivesEyebrow}</p>
            <ol className="mission-list">
              {a.objectives.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Acharya */}
      <section id="acharya" className="section section--white bordered-top">
        <div className="container split split--center">
          <figure className="acharya-photo">
            <img src={images.acharya} alt={a.acharyaPhotoAlt} width="800" height="980" />
          </figure>
          <div className="split__text">
            <SectionTitle eyebrow={a.acharyaEyebrow} title={a.acharyaName} />
            <p className="role">{a.acharyaRole}</p>
            <p className="body-lg">{a.acharyaBio}</p>
            <div className="mini-stats">
              {a.acharyaStats.map((s, i) => (
                <div key={i}>
                  <p className="mini-stats__value">{s.value}</p>
                  <p className="mini-stats__label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="quals">
            <p className="eyebrow">{a.qualificationsTitle}</p>
            <ol className="quals__list">
              {a.qualifications.map((q, i) => (
                <li key={i} className="quals__item">
                  <span className="quals__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="quals__title">{q.title}</p>
                    <p className="quals__place">{q.place}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="trustees">
            <p className="eyebrow">{a.trusteesEyebrow}</p>
            <h3 className="trustees__title">{a.trusteesTitle}</h3>
            <ul className="trustees__list">
              {a.trustees.map((tr, i) => (
                <li key={i} className="trustees__item">
                  <span className="trustees__name">{tr.name}</span>
                  <span className="trustees__role">{tr.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vedic curriculum */}
      <section className="section">
        <div className="container">
          <div className="head-row head-row--dark">
            <SectionTitle eyebrow={a.curriculumEyebrow} title={a.curriculumTitle} />
            <p className="body">{a.curriculumText}</p>
          </div>
          <div className="courses">
            {a.courses.map((c, i) => (
              <div className="courses__item" key={i}>
                <p className="courses__years">{c.years}</p>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="syllabus">
            <p className="eyebrow">{a.syllabusTitle}</p>
            <div className="syllabus__scroll">
              <table className="syllabus__table">
                <thead>
                  <tr>
                    {a.syllabusCols.map((c) => (
                      <th key={c} scope="col">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {a.syllabus.map((r, i) => (
                    <tr key={i}>
                      <th scope="row">{r.year}</th>
                      <td>{r.text}</td>
                      <td><span className={i >= 6 ? 'stage stage--higher' : 'stage'}>{r.stage}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Academic education */}
      <section id="academics" className="section section--white bordered-top">
        <div className="container">
          <div className="head-row head-row--dark">
            <div>
              <p className="eyebrow">{a.academicEyebrow}</p>
              <h2 className="h2">{a.academicTitle}</h2>
            </div>
            <div>
              <p className="body">{a.academicText}</p>
            </div>
          </div>
          <ul className="subjects">
            {t.subjects.map((s, i) => (
              <li key={i} className="subjects__item">
                <span className="subjects__en">{s}</span>
                <span className="subjects__kn">{otherSubjects[i]}</span>
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
              <SectionTitle eyebrow={a.heritageEyebrow} title={a.heritageTitle} light />
              <p className="body-lg">{a.heritage1}</p>
              <p className="body-lg">{a.heritage2}</p>
            </div>
            <div className="yuga-card">
              <p className="eyebrow eyebrow--light">{a.yugasTitle}</p>
              {t.yugas.map((y, i) => (
                <div className="yuga-card__row" key={i}>
                  <span>{y.yuga}</span>
                  <strong className={i === 3 ? 'is-gold' : ''}>{y.name}</strong>
                </div>
              ))}
            </div>
          </div>
          <p className="eyebrow eyebrow--light dynasties__label">{a.dynastiesTitle}</p>
          <div className="dynasties">
            {a.dynasties.map((d, i) => (
              <span key={i} className={i === 2 ? 'dynasty is-gold' : 'dynasty'}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Madhukeshwara temple */}
      <section className="section section--white">
        <div className="container split">
          <div className="split__text">
            <SectionTitle eyebrow={a.templeEyebrow} title={a.templeTitle} />
            <p className="body-lg">{a.temple1}</p>
            <p className="body-lg">{a.temple2}</p>
            <p className="body-lg">{a.temple3}</p>
            <p className="body muted">
              <strong className="text-green">{a.alsoLabel}</strong> {a.alsoList}
            </p>
          </div>
          <div className="split__media">
            <img className="photo photo--medium" src={images.temple} alt="Madhukeshwara temple complex in Banavasi" />
            <div className="mantapas">
              <p className="eyebrow eyebrow--brown">{a.mantapasTitle}</p>
              <p className="mantapas__list">{a.mantapas}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bordered-top">
        <div className="container">
          <SectionTitle eyebrow={a.galleryEyebrow} title={a.galleryTitle} />
          <div className="gallery">
            <img className="gallery__main" src={images.group} alt="Vidyarthis and Acharyas together" />
            <div className="gallery__side">
              <img src={images.temple} alt="Temple courtyard in Banavasi" />
              <div className="placeholder">{a.galleryPlaceholder}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
