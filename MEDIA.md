# Gallery media on Cloudflare R2

Gallery photos and videos are kept in `media/gallery/` in this repo and served to visitors from a Cloudflare R2 bucket.

- **Upload media to R2** (`.github/workflows/media-r2.yml`) copies `media/` to the bucket whenever files in `media/` change on `main`. You can also start it by hand: **Actions → Upload media to R2 → Run workflow**.
- The website reads the media address at runtime from **`/opt/gurukula/.env` on the server** (served as `/config.js`), falling back to `VITE_MEDIA_BASE_URL` in the repo's `.env`.

Until one of them is filled in, the Gallery page shows "Photos and videos are coming soon".

## One-time setup

### 1. Create the bucket
Cloudflare dashboard → **R2 Object Storage** → **Create bucket**, e.g. `banavasi-gurukula-media`.

### 2. Make it public
Open the bucket → **Settings** → **Public access**, then choose one:
- **Custom domain (recommended):** connect `media.banavasivedagurukula.org`. This needs the domain's DNS on Cloudflare.
- **R2.dev subdomain:** click **Allow access**. You get an address like `https://pub-xxxxxxxx.r2.dev`.

### 3. Create an API token for uploads
R2 → **Manage R2 API Tokens** → **Create API token**:
- Permissions: **Object Read & Write**
- Apply to the bucket from step 1 only

Copy the **Access Key ID** and **Secret Access Key**; Cloudflare shows the secret only once. Your **Account ID** is on the R2 overview page.

### 4. Add the secrets and the variable in GitHub
Repo → **Settings → Secrets and variables → Actions**

**Secrets** tab → New repository secret:

| Name | Value |
|---|---|
| `R2_ACCOUNT_ID` | Cloudflare account ID |
| `R2_ACCESS_KEY_ID` | Access Key ID from step 3 |
| `R2_SECRET_ACCESS_KEY` | Secret Access Key from step 3 |
| `R2_BUCKET` | bucket name, e.g. `banavasi-gurukula-media` |

### 4b. Set the public address in the server's `.env`
On the VPS, edit `/opt/gurukula/.env` (setup: `deploy/gurukula/README.md`):

```
MEDIA_BASE_URL=https://pub-xxxxxxxx.r2.dev
```

Then run `cd /opt/gurukula && docker compose up -d`. The website reads it from `/config.js`, with no rebuild.
(Alternatively, `VITE_MEDIA_BASE_URL` in the repo's `.env` is used if the server value is empty.)

### 5. Run it
1. **Actions → Upload media to R2 → Run workflow**, which uploads the files.
2. Set `MEDIA_BASE_URL` in `/opt/gurukula/.env` on the server and run `docker compose up -d`.

Check one file in the browser, e.g. `https://media.banavasivedagurukula.org/gallery/yoga-class.mp4`.

## Adding photos or videos later
1. Put the file in `media/gallery/` with a short lowercase name, e.g. `vasanta-utsava.jpg`.
   - Videos: MP4 (H.264). Keep each under about 20 MB, compressing it if needed.
   - Also add a `.jpg` poster frame with the same name, e.g. `vasanta-utsava.jpg` for `vasanta-utsava.mp4`.
2. Add an entry to `src/data/gallery.js`: file, size, category (`campus`, `classes`, `temple` or `events`), and the caption in English and Kannada.
3. Commit and push to `main`. Both workflows run: media goes to R2 and the site redeploys.
