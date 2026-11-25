import { Link } from 'react-router-dom';
import { site, isSet, whatsappLink } from '../data/site.js';
import { PhoneIcon, WhatsAppIcon, YouTubeIcon, InstagramIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cols">
          <div className="footer__brand">
            <p className="footer__name">Veda Gurukula Banavasi</p>
            <p className="footer__motto">{site.motto}</p>
            <p className="footer__meaning">“{site.mottoMeaning}”</p>
            <div className="social">
              <a href={site.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <YouTubeIcon width={20} height={20} />
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon width={20} height={20} />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="footer__col">
            <p className="footer__label">PAGES</p>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Admissions &amp; Contact</Link>
            <Link to="/contact#donate">Support / Seva</Link>
          </div>
          <div className="footer__col footer__col--wide">
            <p className="footer__label">VISIT</p>
            <p>{site.address}</p>
            <a href={site.phoneHref} className="footer__icon-link">
              <PhoneIcon /> {site.phone}
            </a>
            {isSet(site.email) && <a href={`mailto:${site.email}`}>{site.email}</a>}
          </div>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} {site.fullName}, Banavasi</p>
      </div>
    </footer>
  );
}
