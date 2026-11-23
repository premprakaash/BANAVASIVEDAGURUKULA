import { Link } from 'react-router-dom';
import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cols">
          <div className="footer__brand">
            <p className="footer__name">Veda Gurukula Banavasi</p>
            <p className="footer__motto">{site.motto}</p>
            <p className="footer__meaning">“{site.mottoMeaning}”</p>
          </div>
          <div className="footer__col">
            <p className="footer__label">PAGES</p>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Admissions &amp; Contact</Link>
          </div>
          <div className="footer__col footer__col--wide">
            <p className="footer__label">VISIT</p>
            <p>{site.address}</p>
            <p>{site.phone}</p>
            <p>{site.email}</p>
          </div>
        </div>
        <p className="footer__copy">© {site.foundedYear} Veda Gurukula, Banavasi</p>
      </div>
    </footer>
  );
}
