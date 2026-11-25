# Veda Gurukula Banavasi — Website (Design B · Modern Heritage)

A 3-page React website built with Vite and React Router:

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About the Gurukula (story, motto, Acharya, curriculum, Banavasi & Madhukeshwara history, gallery) |
| `/contact` | Admissions & Contact (steps, enquiry form, visit details) |

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production files in dist/
npm run preview    # preview the production build
```

## Edit the content

- **Gurukula details** (phone, email, Acharya name, founding year, etc.): `src/data/site.js`. Every page reads from here, so you only fill each `[PLACEHOLDER]` once.
- **Photos**: `public/images/` — replace `logo.jpg`, `temple.jpg`, `gurukula-group.jpg` or add new ones and point to them in `site.js`.
- **Colours & fonts**: the variables at the top of `src/index.css`.
- **Page text (English and Kannada)**: `src/i18n/strings.js` — every sentence on the site, in an `en` block and a `kn` block. Edit the matching line in each to change or correct a translation. Words in `{curly braces}` (phone, year, age) are filled in automatically.
- **Language toggle**: the EN / ಕನ್ನಡ switch in the header changes the whole site and remembers the visitor's choice. Links can open a language directly with `?lang=kn` or `?lang=en` (e.g. `https://banavasivedagurukula.org/?lang=kn`).
- **Layout**: `src/pages/Home.jsx`, `About.jsx`, `Contact.jsx`.

## CI/CD (GitHub Actions)

`.github/workflows/ci-cd.yml` runs on every push and pull request to `main`:

1. **Build** — installs with `npm ci` and runs `npm run build`. Pull requests stop here, so a broken build is caught before merging.
2. **Deploy** — on pushes to `main`, the build is uploaded over SSH to the Hostinger VPS and served at
   **https://banavasivedagurukula.org**

One-time server and secrets setup: see **[DEPLOYMENT.md](DEPLOYMENT.md)**.
You can also re-run a deploy by hand from the **Actions** tab (“Run workflow”).

## Enquiry form

The form currently shows a thank-you message only. Connect it to a backend, Formspree, EmailJS or Google Forms in `handleSubmit` inside `src/pages/Contact.jsx`.

## Deploying

The site uses clean URLs (`/about`, `/contact`). On static hosting, send all routes to `index.html`:
- **Netlify**: the included `public/_redirects` file handles this.
- **Vercel**: the included `vercel.json` handles this.
- **Apache / Hostinger**: the included `public/.htaccess` handles this.
