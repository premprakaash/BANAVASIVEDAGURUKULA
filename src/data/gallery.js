// Gallery photos and videos.
// Files live in the repo's media/gallery/ folder; the "Upload media to R2" GitHub Action copies them
// to the Cloudflare R2 bucket, and the website loads them from MEDIA_BASE_URL (set as a repo variable).
//
// To add an item: put the file (and, for a video, a .jpg poster frame) in media/gallery/,
// then add an entry below. category: 'campus' | 'classes' | 'temple' | 'events'.

const base = (import.meta.env.VITE_MEDIA_BASE_URL || '').replace(/\/+$/, '');

/** True when the R2 media address has been configured for this build. */
export const mediaReady = Boolean(base);

export const mediaUrl = (file) => `${base}/gallery/${file}`;

export const galleryCategories = ['all', 'campus', 'classes', 'temple', 'events'];

export const galleryItems = [
  {
    id: 'agnikarya',
    type: 'image',
    file: 'agnikarya.jpg',
    width: 1280,
    height: 890,
    category: 'classes',
    caption: { en: 'Agnikarya with the Acharya', kn: 'ಆಚಾರ್ಯರೊಂದಿಗೆ ಅಗ್ನಿಕಾರ್ಯ' },
  },
  {
    id: 'national-festival',
    type: 'image',
    file: 'national-festival.jpg',
    width: 1280,
    height: 895,
    category: 'events',
    caption: { en: 'National festival celebration at the gurukula', kn: 'ಗುರುಕುಲದಲ್ಲಿ ರಾಷ್ಟ್ರೀಯ ಹಬ್ಬದ ಆಚರಣೆ' },
  },
  {
    id: 'temple-chanting',
    type: 'video',
    file: 'temple-chanting.mp4',
    poster: 'temple-chanting.jpg',
    width: 478,
    height: 850,
    duration: 89,
    category: 'temple',
    caption: { en: 'Vedic chanting inside the Madhukeshwara Temple', kn: 'ಮಧುಕೇಶ್ವರ ದೇವಾಲಯದಲ್ಲಿ ವೇದ ಪಠಣ' },
  },
  {
    id: 'vidyarthis-acharyas',
    type: 'image',
    file: 'vidyarthis-acharyas.jpg',
    width: 1600,
    height: 1202,
    category: 'campus',
    caption: { en: 'Vidyarthis with their Acharyas', kn: 'ಆಚಾರ್ಯರೊಂದಿಗೆ ವಿದ್ಯಾರ್ಥಿಗಳು' },
  },
  {
    id: 'temple-utsava',
    type: 'video',
    file: 'temple-utsava.mp4',
    poster: 'temple-utsava.jpg',
    width: 640,
    height: 360,
    duration: 60,
    category: 'temple',
    caption: { en: 'Temple utsava procession', kn: 'ದೇವಾಲಯದ ಉತ್ಸವ ಮೆರವಣಿಗೆ' },
  },
  {
    id: 'yoga-day',
    type: 'video',
    file: 'yoga-day.mp4',
    poster: 'yoga-day.jpg',
    width: 478,
    height: 850,
    duration: 93,
    category: 'events',
    caption: { en: 'International Yoga Day', kn: 'ಅಂತರರಾಷ್ಟ್ರೀಯ ಯೋಗ ದಿನ' },
  },
  {
    id: 'prayer-hall',
    type: 'video',
    file: 'prayer-hall.mp4',
    poster: 'prayer-hall.jpg',
    width: 848,
    height: 478,
    duration: 16,
    category: 'classes',
    caption: { en: 'Prayer and chanting in the hall', kn: 'ಸಭಾಂಗಣದಲ್ಲಿ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಪಠಣ' },
  },
  {
    id: 'gurukula-glimpse',
    type: 'video',
    file: 'gurukula-glimpse.mp4',
    poster: 'gurukula-glimpse.jpg',
    width: 478,
    height: 850,
    duration: 75,
    category: 'campus',
    caption: { en: 'A glimpse of gurukula life', kn: 'ಗುರುಕುಲ ಜೀವನದ ಒಂದು ನೋಟ' },
  },
  {
    id: 'yoga-class',
    type: 'video',
    file: 'yoga-class.mp4',
    poster: 'yoga-class.jpg',
    width: 848,
    height: 478,
    duration: 44,
    category: 'classes',
    caption: { en: 'Yoga class', kn: 'ಯೋಗ ತರಗತಿ' },
  },
  {
    id: 'campus-exercise',
    type: 'video',
    file: 'campus-exercise.mp4',
    poster: 'campus-exercise.jpg',
    width: 848,
    height: 478,
    duration: 18,
    category: 'campus',
    caption: { en: 'Exercise on the campus grounds', kn: 'ಗುರುಕುಲದ ಆವರಣದಲ್ಲಿ ವ್ಯಾಯಾಮ' },
  },
  {
    id: 'daily-rituals',
    type: 'video',
    file: 'daily-rituals.mp4',
    poster: 'daily-rituals.jpg',
    width: 478,
    height: 850,
    duration: 18,
    category: 'classes',
    caption: { en: 'Daily rituals in the hall', kn: 'ಸಭಾಂಗಣದಲ್ಲಿ ದೈನಂದಿನ ಅನುಷ್ಠಾನ' },
  },
  {
    id: 'yoga-asana',
    type: 'video',
    file: 'yoga-asana.mp4',
    poster: 'yoga-asana.jpg',
    width: 848,
    height: 478,
    duration: 103,
    category: 'classes',
    caption: { en: 'Yoga asana practice', kn: 'ಯೋಗಾಸನ ಅಭ್ಯಾಸ' },
  },
];
