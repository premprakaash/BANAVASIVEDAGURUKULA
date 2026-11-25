import { useLang } from '../i18n/LanguageContext.jsx';

const options = [
  { code: 'en', label: 'EN', title: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ', title: 'ಕನ್ನಡ' },
];

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label={t.nav.language}>
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          lang={o.code}
          title={o.title}
          aria-pressed={lang === o.code}
          className={lang === o.code ? 'lang-toggle__btn is-active' : 'lang-toggle__btn'}
          onClick={() => setLang(o.code)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
