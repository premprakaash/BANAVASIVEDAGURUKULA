import { useState } from 'react';
import { site, payment, whatsappLink } from '../data/site.js';
import { useLang, fill } from '../i18n/LanguageContext.jsx';
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx';

export default function Donate() {
  const { t } = useLang();
  const d = t.donate;
  const [copied, setCopied] = useState(false);

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(payment.upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="donate" className="section donate">
      <div className="container split split--center">
        <div className="split__text">
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 className="h2">{d.title}</h2>
          <p className="body-lg">{d.text}</p>

          <dl className="pay-details">
            <div>
              <dt>{d.accountName}</dt>
              <dd>
                {t.common.fullName}
                <span className="pay-details__note">{fill(d.shownAs, { name: payment.upiName })}</span>
              </dd>
            </div>
            <div>
              <dt>{d.bank}</dt>
              <dd>{d.bankName}</dd>
            </div>
            <div>
              <dt>{d.upiId}</dt>
              <dd className="pay-details__upi">
                <code>{payment.upiId}</code>
                <button type="button" className="copy-btn" onClick={copyUpi}>
                  {copied ? d.copied : d.copy}
                </button>
              </dd>
            </div>
          </dl>

          <p className="body pay-help">
            {fill(d.help, { phone: <a href={site.phoneHref}>{site.phone}</a> })}
          </p>
        </div>

        <div className="qr-card">
          <p className="qr-card__title">{d.scan}</p>
          <img
            src={payment.qrImage}
            alt={`UPI QR code — ${payment.upiId}`}
            width="280"
            height="280"
          />
          <p className="qr-card__upi">UPI ID: {payment.upiId}</p>
          <a href={payment.upiLink} className="btn btn--green btn--lg qr-card__pay">
            {d.pay}
          </a>
          <p className="qr-card__hint">{d.hint}</p>
          <div className="qr-card__contact">
            <a href={site.phoneHref}>
              <PhoneIcon /> {t.common.call}
            </a>
            <a href={whatsappLink('Namaste! I would like to offer seva to the gurukula.')} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> {t.common.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
