import { site, isSet } from '../data/site.js';
import { useLang } from '../i18n/LanguageContext.jsx';
import { PhoneIcon, YouTubeIcon, InstagramIcon } from './Icons.jsx';

export default function TopBar() {
  const { t } = useLang();
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <span>
          {t.common.fullName} · {t.common.location}
        </span>
        <span className="topbar__links">
          <a href={site.phoneHref}>
            <PhoneIcon width={15} height={15} /> {site.phone}
          </a>
          {isSet(site.email) && <a href={`mailto:${site.email}`}>{site.email}</a>}
          <a href={site.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
            <YouTubeIcon width={17} height={17} />
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon width={16} height={16} />
          </a>
        </span>
      </div>
    </div>
  );
}
