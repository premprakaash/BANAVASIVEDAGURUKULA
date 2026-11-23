import { site } from '../data/site.js';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <span>{site.fullName} · Banavasi, Sirsi – 581318</span>
        <span>
          {site.phone} · {site.email}
        </span>
      </div>
    </div>
  );
}
