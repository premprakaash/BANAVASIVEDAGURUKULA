import { Link } from 'react-router-dom';
import { site, isSet, whatsappLink } from '../data/site.js';
import { useLang, fill } from '../i18n/LanguageContext.jsx';
import { PhoneIcon, WhatsAppIcon, YouTubeIcon, InstagramIcon } from './Icons.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cols">
          <div className="footer__brand">
            <p className="footer__name">{t.common.footerName}</p>
            <p className="footer__motto">{site.motto}</p>
            <p className="footer__meaning">“{t.common.mottoMeaning}”</p>
            <div className="social">
              <a href={site.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <YouTubeIcon width={20} height={20} />
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon width={20} height={20} />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label={t.common.whatsapp}>
                <WhatsAppIcon width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="footer__col">
            <p className="footer__label">{t.footer.pages}</p>
            <Link to="/">{t.nav.home}</Link>
            <Link to="/about">{t.nav.about}</Link>
            <Link to="/contact">{t.nav.contact}</Link>
            <Link to="/contact#donate">{t.nav.seva}</Link>
          </div>
          <div className="footer__col footer__col--wide">
            <p className="footer__label">{t.footer.visit}</p>
            <p>{t.common.address}</p>
            <a href={site.phoneHref} className="footer__icon-link">
              <PhoneIcon /> {site.phone}
            </a>
            {isSet(site.email) && <a href={`mailto:${site.email}`}>{site.email}</a>}
          </div>
        </div>
        <p className="footer__copy">
          {fill(t.common.copyright, { year: new Date().getFullYear(), name: t.common.fullName })}
        </p>
      </div>
    </footer>
  );
}
