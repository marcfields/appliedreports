# Deploying appliedreports.com

Static **Astro** site → build output in `dist/`.

Repo: https://github.com/marcfields/appliedreports

---

## Option A — Cloudflare Pages (recommended if DNS is already on Cloudflare)

Everything stays in Cloudflare: build, hosting, SSL, DNS.

### 1. Create the Pages project

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub → select **`marcfields/appliedreports`** → **Begin setup**.
3. Build settings:

   | Setting | Value |
   |--------|--------|
   | Production branch | `main` |
   | Framework preset | Astro (or None) |
   | Build command | `bun run build` |
   | Build output directory | `dist` |

4. **Environment variables** (optional, if Bun isn’t default): add `BUN_VERSION` = `1.2` or use build command `npm run build` after `npm install` if Bun fails.
5. **Save and Deploy**. Note the `*.pages.dev` URL when the first build finishes.

### 2. Custom domain (same Cloudflare account)

1. Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `appliedreports.com` → Continue. Cloudflare usually **creates DNS records automatically** when the zone is on this account.
3. Add `www.appliedreports.com` if you want www (redirect www → apex or serve both — pick one in Pages).

### 3. Manual DNS (if records aren’t auto-created)

In **DNS** → **Records** for `appliedreports.com`:

| Type | Name | Content | Proxy |
|------|------|---------|--------|
| CNAME | `@` | `<your-project>.pages.dev` | Proxied (orange) |
| CNAME | `www` | `<your-project>.pages.dev` | Proxied (orange) |

Cloudflare **CNAME flattening** allows a CNAME on the apex (`@`).

**SSL/TLS** → **Overview** → set mode to **Full** (Pages provides HTTPS; Full is fine with orange-cloud proxy).

### 4. Redirect www → apex (optional)

**Rules** → **Redirect Rules** → single redirect:

- `www.appliedreports.com/*` → `https://appliedreports.com/$1` (301)

---

## Option B — Vercel + Cloudflare DNS

Use Vercel for builds; Cloudflare only for DNS.

### 1. Deploy on Vercel

1. [vercel.com](https://vercel.com) → import **`marcfields/appliedreports`** (see `vercel.json`).
2. **Settings → Domains** → add `appliedreports.com` and `www.appliedreports.com`.
3. Vercel shows the DNS targets to use (copy from the dashboard — they can change).

Typical records:

| Type | Name | Content | Proxy |
|------|------|---------|--------|
| A | `@` | `76.76.21.21` | **DNS only** (grey cloud) |
| CNAME | `www` | `cname.vercel-dns.com` | **DNS only** (grey cloud) |

**Important:** For Vercel, turn **proxy off** (grey cloud) on these records. Orange-cloud + Vercel often causes redirect/SSL loops.

**SSL/TLS** on Cloudflare can stay **Full** with grey-cloud DNS-only records pointing to Vercel.

---

## After deploy

- Confirm **Book a Demo** opens Cal.com in a new tab.
- Spot-check images under `/images/assets/`.
- Purge cache if an old deploy shows: Cloudflare → **Caching** → **Purge Everything** (only if something looks stale).

## Local check

```bash
bun install
bun run build
bun run preview
```
