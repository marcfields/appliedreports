# Site images (local, committed)

All marketing visuals live under **`public/images/`** and are served at **`/images/…`**.

The site only references files on disk (`src/site.ts`). Nothing loads from Figma at runtime.

## Layout

| Path | Role |
|------|------|
| `applied-reports-company-logo.svg` | Header wordmark |
| `assets/otto-product-demo.png` | Otto in Word product visual (navy section) |
| `assets/hero-overlay.jpg` | Hero blueprint overlay (20% opacity) |
| `assets/demo-banner.jpg` | Managing-partner banner photo |
| `assets/footer-labs.jpg` | Footer background |
| `assets/arc-logo.png` | Arc wordmark on footer |
| `assets/icon-*.png` | Report-type grid + Otto + Built-for icons |

## When the design changes

1. Open [ReportBolt — Desktop - 1](https://www.figma.com/design/cJd2TTnVlX1NiZk4h28iKn/ReportBolt?node-id=779-561).
2. Select the layer (icon, photo, or frame).
3. **Export** → PNG (icons @2x) or JPG (photos) → save into `public/images/assets/` using the **same filename** as in `src/site.ts`.
4. `bun dev` → hard refresh (`Cmd+Shift+R`).
5. `git add public/images/assets/` and commit.

**ESA / composite icons:** export the whole `icon-esa` frame as one PNG, not individual vector parts.

## Verify

```bash
ls public/images/assets/
open http://localhost:4321/images/assets/icon-pca.png
```

404 → file missing or dev server not running from repo root.

## Headline fonts (separate)

GT Sectra files go in `public/fonts/gt-sectra-display/` (see that folder’s README). Not stored in git by default.

## Optional one-time download script

`scripts/download-local-assets.sh` can bootstrap files into `public/images/assets/`. Prefer manual Figma export for future updates.
