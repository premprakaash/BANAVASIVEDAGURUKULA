import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang, fill } from '../i18n/LanguageContext.jsx';
import { galleryItems, galleryCategories, mediaUrl, mediaReady } from '../data/gallery.js';

const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

function PlayIcon({ size = 22 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" />
    </svg>
  );
}

function Lightbox({ items, index, onClose, onMove, lang, g }) {
  const item = items[index];
  const closeRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onMove]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption[lang]} onClick={onClose}>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" aria-label={g.close} onClick={onClose}>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12" /><path d="M18 6 6 18" /></svg>
        </button>
        <div className="lightbox__media">
          {item.type === 'video' ? (
            <video
              key={item.id}
              src={mediaUrl(item.file)}
              poster={mediaUrl(item.poster)}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          ) : (
            <img key={item.id} src={mediaUrl(item.file)} alt={item.caption[lang]} />
          )}
        </div>
        <div className="lightbox__bar">
          <button type="button" className="lightbox__btn" aria-label={g.prev} onClick={() => onMove(-1)}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
          </button>
          <p className="lightbox__caption">
            {item.caption[lang]}
            <span>
              {index + 1} / {items.length}
            </span>
          </p>
          <button type="button" className="lightbox__btn" aria-label={g.next} onClick={() => onMove(1)}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t, lang } = useLang();
  const g = t.gallery;
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null); // index into `shown`
  const lastFocus = useRef(null);

  const shown = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter]
  );

  const openItem = (i, e) => {
    lastFocus.current = e.currentTarget;
    setOpen(i);
  };
  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus();
  }, []);
  const move = useCallback(
    (step) => setOpen((i) => (i === null ? i : (i + step + shown.length) % shown.length)),
    [shown.length]
  );

  return (
    <>
      <section className="section section--green contact-hero">
        <div className="container">
          <p className="breadcrumb breadcrumb--light">
            <Link to="/">{t.nav.home}</Link> / {g.breadcrumb}
          </p>
          <h1 className="h1 h1--light">{g.title}</h1>
          <p className="lead lead--light">{g.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {!mediaReady ? (
            <p className="body-lg gallery__empty">{g.empty}</p>
          ) : (
            <>
              <div className="gallery-filters" role="group" aria-label={g.title}>
                {galleryCategories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={filter === c}
                    className={filter === c ? 'chip-btn is-active' : 'chip-btn'}
                    onClick={() => setFilter(c)}
                  >
                    {g.filters[c]}
                  </button>
                ))}
                <span className="gallery-filters__count">{fill(g.count, { n: shown.length })}</span>
              </div>

              <ul className="gallery-grid">
                {shown.map((item, i) => (
                  <li key={item.id} className="gallery-grid__item">
                    <button type="button" className="gallery-tile" onClick={(e) => openItem(i, e)}>
                      <span className="gallery-tile__media">
                        <img
                          src={mediaUrl(item.type === 'video' ? item.poster : item.file)}
                          alt=""
                          width={item.width}
                          height={item.height}
                          loading="lazy"
                          decoding="async"
                        />
                        {item.type === 'video' && (
                          <span className="gallery-tile__play">
                            <PlayIcon />
                            <span className="sr-only">{g.play}</span>
                          </span>
                        )}
                        <span className="gallery-tile__badge">
                          {item.type === 'video' ? `${g.video} · ${formatTime(item.duration)}` : g.photo}
                        </span>
                      </span>
                      <span className="gallery-tile__caption">
                        {item.caption[lang]}
                        <span className="gallery-tile__cat">{g.filters[item.category]}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {open !== null && shown[open] && (
        <Lightbox items={shown} index={open} onClose={close} onMove={move} lang={lang} g={g} />
      )}
    </>
  );
}
