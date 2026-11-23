// Edit gurukula details here — they are used across every page.
export const site = {
  name: 'Veda Gurukula',
  place: 'Banavasi',
  fullName: 'Shri Uma Madhukeshvara Veda Vidya Gurukula',
  motto: 'वेदोऽखिलो धर्ममूलम्',
  mottoMeaning: 'The Veda is the root of all dharma.',
  phone: '[+91 XXXXX XXXXX]',
  email: '[email@vedagurukula.org]',
  address: 'Banavasi, Sirsi Taluk, Uttara Kannada, Karnataka – 581318',
  street: '[Street / landmark]',
  visitingHours: '[Days and time]',
  foundedYear: '[YEAR]',
  acharyaName: '[ACHARYA NAME]',
  shakha: '[SHAKHA]',
  students: '[XX]',
  admissionYear: '[YEAR – YEAR]',
  ageRange: '[AGE RANGE]',
};

// BASE_URL keeps image paths working whether the site is served from "/" or a sub-path.
const base = import.meta.env.BASE_URL;

export const images = {
  logo: `${base}images/logo.jpg`,
  temple: `${base}images/temple.jpg`,
  group: `${base}images/gurukula-group.jpg`,
};
