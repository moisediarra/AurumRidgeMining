# Aurum Ridge Mining — React + TypeScript demo site

Example website for a (fictional) gold mining company, built with **React 18 + TypeScript + Vite**, ready to deploy on **Vercel**.

## Sections
Hero with live (simulated) gold-price ticker · animated key figures · About · Operations with status filter · Sustainability · Investors (production chart + reports) · Careers · Contact form with validation · Footer.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # preview the production build
```

## Project structure
```
src/
  data/content.ts      # ALL texts, figures, mines, jobs — edit here
  components/          # One component per section
  App.tsx              # Page composition
  styles.css           # Design tokens + styles (no CSS framework)
public/images/         # Site photography (WebP) + og-image.jpg for link previews
vercel.json            # Vercel build settings + SPA rewrite
```

## Photography
All photos are from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license) (free for commercial use, no attribution required — credited here as a courtesy). They are stock images and do not show real Aurum Ridge sites. To swap one, replace the file in `public/images/` and update its entry (`photos` or `operations[].image`) in `src/data/content.ts`.

| File | Used in | Photographer |
| --- | --- | --- |
| `hero-open-pit-*.webp`, `og-image.jpg` | Hero, link previews | [Leonie Clough](https://unsplash.com/photos/CH2yRJCocRg) |
| `about-pit.webp` | About | [Matthew de Livera](https://unsplash.com/photos/4Gf51uY0YQE) |
| `about-underground.webp` | About | [Munkh-Erdene Eenee](https://unsplash.com/photos/HA_akXkTrd0) |
| `op-kesse.webp` | Operations — Kesse Hill | [Abdul Basit](https://unsplash.com/photos/1O_HNWeY0O4) |
| `op-tano.webp` | Operations — Tano River | [Jandira Sonnendeck](https://unsplash.com/photos/0DUxxHkRucs) |
| `op-sikasso.webp` | Operations — Sikasso Belt | [Shane McLendon](https://unsplash.com/photos/9jPJrfLTBi0) |
| `op-birim.webp` | Operations — Birim North | [Badibanga Roger](https://unsplash.com/photos/-2aCPUaYOGQ) |
| `sustain-forest.webp` | Sustainability | [Ato Aikins](https://unsplash.com/photos/Mw6MYQaB0L4) |
| `sustain-seedling.webp` | Sustainability | [Jonathan Kemper](https://unsplash.com/photos/CbZh3kaPxrE) |
| `investors-gold.webp` | Investors | [Jingming Pan](https://unsplash.com/photos/iYsrkq5qq0Q) |
| `careers-engineer.webp` | Careers | [Joseph Okon](https://unsplash.com/photos/hSD_Igxu4r0) |

## Deploy on Vercel

### Option A — via GitHub (recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<you>/aurum-ridge-mining.git
   git push -u origin main
   ```
2. On https://vercel.com/new, import the repository.
3. Vercel detects **Vite** automatically (build: `npm run build`, output: `dist`). Click **Deploy**.
4. Every push to `main` redeploys automatically; pull requests get preview URLs.

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Next steps (ideas)
- Real gold price: add `api/gold-price.ts` (Vercel Function) that calls a price API with a secret key stored in Vercel env vars, then fetch it in `GoldTicker.tsx`.
- Real contact form: add `api/contact.ts` sending email via Resend/SendGrid.
- Multi-page: add `react-router-dom` (the SPA rewrite in `vercel.json` is already in place).
- Real site photos: replace the stock images in `public/images/` with photography of your own operations.
