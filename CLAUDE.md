# capital-partners

Website for **L&E Partners** (l-epartners.com), a boutique NYC executive search firm exclusive to and on retainer with the private equity community. Three principals: Lori Hess (Managing Partner), Sandi Macan (Partner), Nikki Delp (Principal). Replaces an older WordPress / GoDaddy site.

Live preview: https://capital-partners-sand.vercel.app

## Stack

- pnpm workspace monorepo (only `artifacts/pe-website` is the live site at the moment; `artifacts/api-server` is a stub Express + Drizzle scaffold not in use).
- Front end: React 19 + Vite 7 + TypeScript + Tailwind CSS v4
- Routing: wouter (light-weight; no react-router)
- Animations: framer-motion
- Forms: react-hook-form + zod
- UI primitives: Radix + shadcn-style components in `artifacts/pe-website/src/components/ui/`
- Hosting: Vercel (project: `get-latest/capital-partners`)
- pnpm 9.15.9 pinned via `packageManager` field

## Routes

| Path | File | Notes |
|---|---|---|
| `/` | `pages/Home.tsx` | Hero, intro, dual-audience cards, Why L&E, 50-year band, pull-quote, Sectors, Testimonials, CTA |
| `/about` | `pages/About.tsx` | Boutique blurb + 3 principal bios |
| `/services/private-equity` | `pages/ForPrivateEquity.tsx` | L&E-supplied copy, How a Search Works, Representative Searches, FAQ |
| `/services/executives` | `pages/ForExecutives.tsx` | Real l-epartners.com copy, What to Expect, Confidentiality, FAQ |
| `/contact` | `pages/Contact.tsx` | 3 principal contact cards + form (currently console.logs - not wired to a real inbox yet) |
| `/privacy`, `/terms`, `/disclosures` | `pages/{Privacy,Terms,Disclosures}.tsx` | Legal pages |
| `/brand` | `pages/Brand.tsx` | Public brand asset library, follows get-latest brand-spec v1 |
| `/todo` | `pages/Todo.tsx` | **INTERNAL** - project status / outstanding items for L&E walkthroughs. `noindex`. Delete before public launch. |
| `/404` | `pages/not-found.tsx` | Branded 404 |

Header menu lists Services (dropdown: For PE Firms / For Executives), About, Inquiries CTA. Footer adds Brand and the legal pages. `/todo` is reachable but not linked anywhere.

## Brand rules (also rendered on `/brand`)

- **Wordmark:** "L&E Partners" in Playfair Display **Bold (700)**
- **Ampersand specifically:**
  - Color: gold `#CC9A14` (the brand's leading accent), NOT navy
  - Size: **75% of the surrounding cap height**
  - Optically lifted to cap-center (not baseline-aligned)
- **Trailing run** ("E Partners") shifts left by the shrink amount so the wordmark stays tight
- **Body / UI font:** Inter (400 / 500 / 600 / 700)
- **Display font:** Playfair Display (400 / 600 / 700)
- **Palette:**
  - Foreground / Navy: `#0F172A`
  - Accent / Deep Navy: `#1B2841`
  - Primary / Gold: `#CC9A14` (leading accent)
  - Background / White: `#FFFFFF`
  - Muted / Stone: `#F1F4F7`
  - Border / Slate: `#D9DEE6`

## Brand asset workflow

Canonical assets live in `artifacts/pe-website/public/brand/`:

- `logo/` - wordmark light/dark, icon light/dark
- `favicon/favicon.svg`
- `app-icons/` - apple-touch-icon, android-chrome-192/512, maskable-icon
- `social/og-image.svg` (1200x630)

All SVGs use **real Playfair Display Bold path data** baked in (extracted via opentype.js), so they render byte-identically on every browser, OS, email client, and crawler regardless of installed fonts.

To regenerate the brand SVGs after a brand decision change (color, size ratio, layout):

```bash
mkdir -p _tmp_svggen && cd _tmp_svggen
npm init -y
npm install opentype.js@1.3.4
# Static Playfair Display Bold (NOT the variable font - the variable font's
# default instance is regular weight, which mismatches the navbar):
curl -sL "https://cdn.jsdelivr.net/npm/@fontsource/playfair-display@5.2.5/files/playfair-display-latin-700-normal.woff" -o playfair-bold.woff
# Write gen.mjs (see history; preserves AMP_SCALE, optical lift, kerning)
node gen.mjs
# Copy outputs into artifacts/pe-website/public/brand/
cd .. && rm -rf _tmp_svggen
```

The header (`Navbar.tsx`), footer (`Footer.tsx`), and OG card all source from these SVG files. Do not maintain a parallel CSS-rendered wordmark - the SVG is the single source of truth.

## Build / dev commands

From the repo root (`capital-partners/`):

```bash
corepack pnpm install
corepack pnpm --filter @workspace/pe-website run dev        # local dev on $PORT (defaults to 5173)
corepack pnpm --filter @workspace/pe-website run build      # production build to artifacts/pe-website/dist/public
corepack pnpm --filter @workspace/pe-website run typecheck  # tsc --noEmit
```

`vercel.json` at the repo root configures Vercel: build command, install command, output directory, SPA rewrites, WordPress redirects, cache headers.

## Deploy

GitHub auto-deploy is **not** wired (talons-peak GitHub org has not authorized the Vercel app). Deploy manually with the CLI:

```powershell
$env:VERCEL_TOKEN = "<token>"  # see C:\Projects\Business\get-latest\higgins\auth\app-auths.md
vercel deploy --prod --yes --token=$env:VERCEL_TOKEN
```

The project is linked at `get-latest/capital-partners`. To switch to push-based deploys, authorize the Vercel app on the talons-peak GitHub org.

## SEO

- Per-page meta via `components/Seo.tsx` (sets title, description, canonical, OG, Twitter, robots)
- Site-wide JSON-LD ProfessionalService block in `index.html`
- `public/robots.txt` and `public/sitemap.xml`
- 301-style redirects from old WordPress paths in `vercel.json` (`/about-us`, `/contact-us`, `/services`, `/for-the-private-equity-firms`, `/for-the-executives`)
- `/todo` and `/404` are noindex
- The site URL is hard-coded in several places (`vercel.json`, `sitemap.xml`, `robots.txt`, `index.html` JSON-LD). When the production domain (likely `l-epartners.com`) is set, find-and-replace `capital-partners-sand.vercel.app` everywhere AND set `VITE_SITE_URL` env var on Vercel for the runtime SEO component.

## Conventions

- **No em or en dashes** anywhere - in copy, comments, commit messages, anywhere. Use hyphens or restructure. The user is actively scrubbing them as an "AI tell." Saved as a feedback memory.
- TypeScript: framer-motion variants need `as const` on `ease` tuples (e.g. `ease: [0.22, 1, 0.36, 1] as const`).
- Tailwind: project uses Tailwind v4 with the design tokens defined in `src/index.css`. Use semantic class names (`text-primary`, `text-foreground`, `bg-accent`) over hex literals.
- Routing: wouter `<Link href>`. There is a `<ScrollToTop />` component mounted in `App.tsx` so route changes scroll to top automatically.
- Body-copy mentions of "L&E Partners" in headings and paragraphs are plain text. The styled wordmark with the gold "&" is reserved for the navbar, footer, brand page hero, and the SVG assets.
- The `/todo` page is the source of truth for what's shipped and what's still owed. Update it in lockstep with feature work.

## Outstanding items (high priority)

See `/todo` page for full list. Top items:
1. Connect contact form to a real inbox (Resend recommended)
2. L&E to provide: updated Lori bio, fuller Sandi/Nikki bios, professional headshots, real Representative Searches, one executive testimonial, fresh For Executives photo
3. Custom domain cutover (l-epartners.com pointed at Vercel)
4. Wire GitHub auto-deploy
5. Submit to Google Search Console after domain cutover
6. Remove `/todo` page before public launch
