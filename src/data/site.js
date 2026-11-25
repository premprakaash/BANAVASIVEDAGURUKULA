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
  street: '[Street / landmark]',
  visitingHours: '[Days and time]',
  foundedYear: '[YEAR]',
  acharyaName: '[ACHARYA NAME]',
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

// Academic education (ಲೌಕಿಕ ವಿದ್ಯೆ) taught alongside Vedic education
export const academicSubjects = [
  { en: 'English', kn: 'ಇಂಗ್ಲಿಷ್' },
  { en: 'Kannada', kn: 'ಕನ್ನಡ' },
  { en: 'Mathematics', kn: 'ಗಣಿತ' },
  { en: 'Science', kn: 'ವಿಜ್ಞಾನ' },
  { en: 'Social Science', kn: 'ಸಮಾಜ ಶಾಸ್ತ್ರ' },
  { en: 'Sanskrit', kn: 'ಸಂಸ್ಕೃತ' },
  { en: 'Yoga', kn: 'ಯೋಗ' },
  { en: 'Computer Education', kn: 'ಕಂಪ್ಯೂಟರ್ ಶಿಕ್ಷಣ' },
];

// Admissions (ಪ್ರವೇಶ ಮಾಹಿತಿ)
export const admissions = [
  { label: 'Admission for', value: 'Boys', kn: 'ಬಾಲಕರಿಗೆ ಪ್ರವೇಶ' },
  { label: 'Age', value: '9 – 14 years (as per Gurukula norms)', kn: 'ಗುರುಕುಲ ನಿಯಮಾನುಸಾರ ವಯೋಮಿತಿ: 9 – 14 ವರ್ಷ' },
  { label: 'Selection', value: 'Interaction / interview', kn: 'ಸಂದರ್ಶನ / ಸಂವಾದದ ಮೂಲಕ ಆಯ್ಕೆ' },
  { label: 'Documents', value: 'Submitted at admission', kn: 'ಅಗತ್ಯ ದಾಖಲೆಗಳ ಸಲ್ಲಿಕೆ' },
  { label: 'Academic year', value: '2026 – 2027', kn: 'ಶೈಕ್ಷಣಿಕ ವರ್ಷ: 2026 – 2027' },
];

// BASE_URL keeps image paths working whether the site is served from "/" or a sub-path.
const base = import.meta.env.BASE_URL;

export const images = {
  logo: `${base}images/logo.jpg`,
  temple: `${base}images/temple.jpg`,
  group: `${base}images/gurukula-group.jpg`,
};
