// Edit gurukula details here — they are used across every page.
// A value still in [brackets] is treated as "not provided yet" and hidden where possible.
export const site = {
  name: 'Veda Gurukula',
  place: 'Banavasi',
  fullName: 'Shri Uma Madhukeshvara Veda Vidya Gurukula',
  motto: 'वेदोऽखिलो धर्ममूलम्',
  mottoMeaning: 'The Veda is the root of all dharma.',
  phone: '+91 81068 29861',
  phoneHref: 'tel:+918106829861',
  whatsappNumber: '918106829861',
  email: '[email@vedagurukula.org]',
  address: 'Banavasi, Sirsi Taluk, Uttara Kannada, Karnataka – 581318',
  // Google Maps: the gurukula's place (plus code G2M8+WW5, near Madhukeshwara Temple)
  mapEmbed:
    'https://maps.google.com/maps?q=Uma+Madhukeshvara+Veda+Vidya+Gurukula,+G2M8%2BWW5,+near+Madhukeshwara+Temple,+Banavasi,+Karnataka+581318&z=16&output=embed',
  mapLink: 'https://maps.app.goo.gl/LFSEqXAYoLThxtPZA',
  visitingHours: '[Days and time]',
  foundedYear: '2020',
  acharyaName: 'Acharya Madhusoodan D. Bhat', // shown text comes from strings.js (EN + Kannada)
  veda: 'Krishna Yajurveda',
  shakha: 'Taittiriya Shakha',
  students: '[XX]',
  admissionYear: '2026 – 2027',
  ageRange: '9–14',
  youtube: 'https://www.youtube.com/@umamadhusoodan',
  instagram: 'https://www.instagram.com/banavasigurukula',
};

/** True when a value has been filled in (not a [placeholder]). */
export const isSet = (value) => Boolean(value) && !String(value).trim().startsWith('[');

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Payment / seva details (from the gurukula's Union Bank BharatQR)
export const payment = {
  upiId: '37525901@ubin',
  upiName: 'MADHUKESHVARA VEDA VIDY',
  payeeName: 'Shri Uma Madhukeshvara Veda Vidya Gurukula',
  bank: 'Union Bank of India',
  qrImage: `${import.meta.env.BASE_URL}images/upi-qr.svg`,
  upiLink: 'upi://pay?pa=37525901@ubin&pn=MADHUKESHVARA%20VEDA%20VIDY&cu=INR',
};

// BASE_URL keeps image paths working whether the site is served from "/" or a sub-path.
const base = import.meta.env.BASE_URL;

export const images = {
  logo: `${base}images/logo.jpg`,
  temple: `${base}images/temple.jpg`,
  deity: `${base}images/madhukeshwara-deity.jpg`,
  acharya: `${base}images/acharya.jpg`,
  group: `${base}images/gurukula-group.jpg`,
};
