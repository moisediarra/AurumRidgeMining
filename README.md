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
vercel.json            # Vercel build settings + SPA rewrite
```

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
- Images: drop photos in `public/` and reference them as `/my-photo.jpg`.
