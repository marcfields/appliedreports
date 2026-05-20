# Deploying appliedreports.com

This is a static **Astro** site. Build output goes to `dist/`.

## Recommended: Vercel (GitHub)

1. Push is on **main**: https://github.com/marcfields/appliedreports
2. Sign in at [vercel.com](https://vercel.com) with GitHub.
3. **Add New Project** → Import `marcfields/appliedreports`.
4. Vercel should detect Astro. Confirm:
   - **Build command:** `bun run build`
   - **Output directory:** `dist`
   - **Install command:** `bun install`
5. Deploy. Each push to `main` redeploys automatically.
6. **Domains:** Project Settings → Domains → add `appliedreports.com` and `www.appliedreports.com`, then set DNS at your registrar per Vercel’s instructions.

`vercel.json` in the repo sets these values.

## Alternatives

**Cloudflare Pages:** Connect the same GitHub repo; build `bun run build`, output `dist`.

**Netlify:** Same settings; or drag-and-drop the `dist/` folder after `bun run build` locally.

## Local check before deploy

```bash
bun install
bun run build
bun run preview
```

Open the URL shown (usually http://localhost:4321).
