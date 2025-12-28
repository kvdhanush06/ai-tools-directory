# AI Tools Directory (Astro + Netlify)

## Quickstart
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
npm run test
```

## Deploy on Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Node: 20

## AdSense (after approval)
Set Netlify environment variables:
- `PUBLIC_ADSENSE_CLIENT` = `ca-pub-...`
- `PUBLIC_ADSENSE_SLOT_HOME_TOP` etc. (see `src/components/AdSlot.astro` usage)

Update `public/ads.txt` with your real `ca-pub-...` ID.
