import { useState } from 'react';
import { site, payment, whatsappLink } from '../data/site.js';
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx';

export default function Donate() {
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
          <p className="eyebrow">
            SUPPORT THE GURUKULA · <span className="kn">ಸೇವೆ</span>
          </p>
          <h2 className="h2">Offer your seva</h2>
          <p className="body-lg">
            Your contribution helps the gurukula continue Vedic education in the guru–shishya parampara. Scan the QR
            code with any UPI app — Google Pay, PhonePe, Paytm or BHIM — or pay to the UPI ID.
          </p>
          <p className="kn kn--muted">ಯಾವುದೇ UPI ಆ್ಯಪ್ ಮೂಲಕ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಸೇವೆ ಸಲ್ಲಿಸಬಹುದು.</p>

          <dl className="pay-details">
            <div>
              <dt>Account name</dt>
              <dd>
                {payment.payeeName}
                <span className="pay-details__note">Shown in your UPI app as “{payment.upiName}”</span>
              </dd>
            </div>
            <div>
              <dt>Bank</dt>
              <dd>{payment.bank}</dd>
            </div>
            <div>
              <dt>UPI ID</dt>
              <dd className="pay-details__upi">
                <code>{payment.upiId}</code>
                <button type="button" className="copy-btn" onClick={copyUpi}>
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </dd>
            </div>
          </dl>

          <p className="body pay-help">
            For any questions about your contribution, call or WhatsApp{' '}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </div>

        <div className="qr-card">
          <p className="qr-card__title">SCAN &amp; PAY</p>
          <img
            src={payment.qrImage}
            alt={`UPI QR code to pay ${payment.payeeName}, UPI ID ${payment.upiId}`}
            width="280"
            height="280"
          />
          <p className="qr-card__upi">UPI ID: {payment.upiId}</p>
          <a href={payment.upiLink} className="btn btn--green btn--lg qr-card__pay">
            Pay with UPI app
          </a>
          <p className="qr-card__hint">“Pay with UPI app” works on phones with a UPI app installed.</p>
          <div className="qr-card__contact">
            <a href={site.phoneHref} aria-label={`Call ${site.phone}`}><PhoneIcon /> Call</a>
            <a href={whatsappLink('Namaste! I would like to offer seva to the gurukula.')} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
