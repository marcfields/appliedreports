# Bundled assets

## `otto-product-demo.png`

Imported in `OttoFeatureIntro.astro` — **this is the file the build uses** (not `public/` alone).

### Why it looks soft

The page displays the image at up to **640px** wide. On Retina screens the browser needs roughly **2×** that in source pixels (~**1280px** wide) to stay sharp. A **750px** source file cannot supply enough detail at full size on 2× displays.

### Replace with a sharper asset (recommended)

1. In [Figma — Desktop frame](https://www.figma.com/design/cJd2TTnVlX1NiZk4h28iKn/ReportBolt?node-id=779-561), select the Otto product screenshot frame.
2. Export **PNG @2×** (or export width **1500px** if the design frame is 750px wide).
3. Overwrite **`src/assets/otto-product-demo.png`** with that file.
4. Optionally copy the same file to `public/images/assets/otto-product-demo.png` for a stable `/images/assets/…` URL.
5. Run `bun dev` or `bun run build` and hard-refresh.

Aim for **≥1500px wide** PNG (or high-quality WebP). Astro will generate responsive WebP variants from whatever you commit.

### Display size only (no new export)

If you only shrink the layout, text stays sharper relative to the image but the screenshot itself will still be soft on Retina until you replace the source.
