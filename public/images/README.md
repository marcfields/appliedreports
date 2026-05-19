# Site images

Files in `public/images/` are served from `/images/…`.

## Hero (full-bleed cover)

| File | Used on |
|------|---------|
| **`hero.jpg`** | Full-viewport background on the homepage (`HeroCover`) |

Landscape orientation works best (e.g. 1920×1080 or larger). `.webp` is fine if you set `heroImage` in `src/site.ts`.

## Logos

| File | Used on |
|------|---------|
| `applied-reports-company-logo.svg` | Hero masthead (height set in `src/site.ts` → `logos.heroHeightPx`) |
| `applied-reports-logo.svg` | Wordmark only — reserved for other surfaces |

### Favicon and small sizes

You do **not** need separate SVG exports for the hero or page body — one SVG scales cleanly.

You **should** add a simple **mark** (monogram or icon only, not the full stacked company name) for:

| Asset | Size | File (suggested) |
|-------|------|------------------|
| Favicon | 32×32 (SVG or PNG) | `public/favicon.svg` |
| Apple touch icon | 180×180 PNG | `public/apple-touch-icon.png` |
| Open Graph / social | 1200×630 PNG | optional, for link previews |

The full company logo will not read at 16–32px. Replace the placeholder `favicon.svg` when you have a mark.

## After adding files

Restart `bun dev` if it is running, then hard-refresh the browser.
