import { type ReactNode } from "react";

// Temporary internal page - not linked from nav. URL: /todo
// Use this when walking L&E through outstanding items.

type Priority = "High" | "Medium" | "Low";

type ChecklistItem = {
  done: boolean;
  title: string;
  detail?: string;
  priority?: Priority;
};

type ChecklistGroup = {
  id: string;
  label: string;
  defaultOpen?: boolean;
  items: ChecklistItem[];
};

const delivered: ChecklistGroup[] = [
  {
    id: "platform",
    label: "Platform & rebuild",
    items: [
      { done: true, title: "Replaced WordPress / GoDaddy with a custom React + Vite + TypeScript SPA" },
      { done: true, title: "Built on Tailwind CSS v4 with a custom navy / gold / serif design system" },
      { done: true, title: "Editorial typography hierarchy and consistent brand treatment across all pages" },
      { done: true, title: "Framer Motion reveal animations and parallax effects for visual polish" },
      { done: true, title: "Fully responsive layouts (mobile, tablet, desktop)" },
      { done: true, title: "Hosted on Vercel: HTTPS, edge CDN, sub-100ms TTFB, automatic certificates" },
      { done: true, title: "Migrated off Replit; clean Git history at github.com/talons-peak/Capital-Partners" },
      { done: true, title: "Type-safe codebase that passes strict TypeScript checks" },
      { done: true, title: "Scroll-to-top on every route change so deep links land at the page top" },
    ],
  },
  {
    id: "ia",
    label: "Information architecture",
    items: [
      { done: true, title: "Removed the standalone Services landing page (per April 2026 feedback)" },
      { done: true, title: "Created a Services dropdown with For Private Equity Firms / For Executives" },
      { done: true, title: "Reordered nav: Services first, About second, Inquiries CTA on the right" },
      { done: true, title: "Removed unrelated Portfolio and Team pages from the original template" },
      { done: true, title: "Added Privacy Policy, Terms of Use, and Disclosures pages" },
      { done: true, title: "Added public /brand asset library page implementing the brand-spec v1" },
      { done: true, title: "All deep links work (e.g. /services/private-equity loads correctly on direct visit)" },
    ],
  },
  {
    id: "brand",
    label: "Brand & identity",
    items: [
      { done: true, title: "Consistent L&E ampersand styling site-wide" },
      { done: true, title: "Persistent header subtitle: 'Rethinking How Private Equity Firms Invest in Executives'" },
      { done: true, title: "Pulled all real L&E imagery from the live site (logo, three bio photos, three editorial heroes)" },
      { done: true, title: "Pull-quote: 'Partnerships are grown, not born' (the L&E ethos)" },
      { done: true, title: "50+ Years of Combined Relationships stat band" },
      { done: true, title: "Canonical /public/brand/ asset directory with full SVG coverage (wordmark, icon, favicon, apple-touch-icon, android 192/512, maskable, OG image)" },
      { done: true, title: "Site favicon, apple-touch-icon, web manifest, and OG/Twitter cards all wired to brand assets" },
    ],
  },
  {
    id: "home",
    label: "Home page",
    items: [
      { done: true, title: "Full L&E intro paragraph: 'Markets shift and transform...'" },
      { done: true, title: "Three intro paragraphs from the April 2026 feedback (verbatim)" },
      { done: true, title: "Dual-audience cards routing to PE Firms / Executives" },
      { done: true, title: "'Why L&E - Relationships, not transactions' three-pillar positioning" },
      { done: true, title: "Sectors section: Healthcare, Industrial, Financial Services, Consumer Products, Cleantech" },
      { done: true, title: "Testimonials grid with all 8 attributed quotes from the old site" },
    ],
  },
  {
    id: "about",
    label: "About page",
    items: [
      { done: true, title: "Boutique-search-firm blurb (per L&E feedback)" },
      { done: true, title: "Lori Hess full bio with Charterhouse / Cross Country Healthcare / Rice & Dore detail" },
      { done: true, title: "Sandi Macan and Nikki Delp bios with sector and education detail" },
      { done: true, title: "Per-principal photo with grayscale-to-color hover treatment" },
    ],
  },
  {
    id: "for-pe",
    label: "For Private Equity Firms",
    items: [
      { done: true, title: "Verbatim L&E-supplied copy (offers, roles, drivers)" },
      { done: true, title: "Vertical (single-column) layout per April 2026 feedback" },
      { done: true, title: "'How a Search Works' - 4-phase retained engagement breakdown" },
      { done: true, title: "Representative Searches - 8 anonymized engagement examples (placeholder copy)" },
      { done: true, title: "FAQ - 6 common PE-buyer questions answered" },
    ],
  },
  {
    id: "for-execs",
    label: "For Executives",
    items: [
      { done: true, title: "Real copy pulled from l-epartners.com (entrepreneur quote, candidate types, collaboration paragraph)" },
      { done: true, title: "Vertical layout per April 2026 feedback" },
      { done: true, title: "'What to Expect' - 4-phase rhythm narrative" },
      { done: true, title: "Confidentiality section explicitly addressing in-seat executives" },
      { done: true, title: "FAQ - 6 common executive questions answered" },
      { done: true, title: "'Start a confidential conversation' CTA framing" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    items: [
      { done: true, title: "Three-audience welcome (PE firm / executive / industry connection)" },
      { done: true, title: "One-business-day response promise" },
      { done: true, title: "Direct office, mobile, and email per principal" },
      { done: true, title: "Form with validation, friendly placeholders, friendly response toast" },
      { done: true, title: "'Confidential by Default' sidebar block" },
    ],
  },
];

const outstanding: ChecklistGroup[] = [
  {
    id: "content-from-le",
    label: "Content from L&E",
    defaultOpen: true,
    items: [
      {
        done: false,
        title: "Updated bio for Lori Hess",
        detail: "L&E's April 2026 feedback marked Lori's bio with a placeholder 'X' meaning revised copy is forthcoming. Current site uses Lori's existing l-epartners.com bio. Trivial swap when ready.",
        priority: "High",
      },
      {
        done: false,
        title: "High-resolution professional headshots",
        detail: "Current bio photos pulled from the live site are tiny (5-6 KB webp, ~200x250 px). Acceptable on desktop but blurry on retina and mobile zoom. Recommend professional headshots for all three principals (same photographer, same lighting, neutral background).",
        priority: "High",
      },
      {
        done: false,
        title: "Beef up Sandi and Nikki bios",
        detail: "Lori's bio is dense with proof points (Charterhouse, Cross Country Healthcare, Rice & Dore, Houlihan Lokey). Sandi's and Nikki's are thinner. PE buyers want to know what each partner specifically delivers.",
        priority: "High",
      },
      {
        done: false,
        title: "Replace illustrative Representative Searches with real engagements",
        detail: "/services/private-equity has 8 anonymized search examples (sector + role + sponsor type + transaction stage). Single highest-impact piece of social proof for PE buyers. Ours are plausible placeholders; L&E's real ones are more credible.",
        priority: "High",
      },
      {
        done: false,
        title: "One paragraph-length executive testimonial",
        detail: "Home has 8 short attributed testimonials from the live site. None are paragraph-length. A 60-80 word quote from an executive L&E placed describing the working experience would significantly strengthen the For Executives audience pull.",
        priority: "Medium",
      },
      {
        done: false,
        title: "New photo for /services/executives",
        detail: "L&E's April feedback called for a photo change on this page. Current photo is a placeholder pulled from the live site.",
        priority: "Medium",
      },
      {
        done: false,
        title: "Designer-produced PNG fallbacks for brand assets",
        detail: "The /brand library has full SVG coverage: wordmark (light + dark), icon (light + dark), favicon, apple-touch-icon, android 192 + 512, maskable-icon, and a 1200x630 OG image. All use Playfair text with serif fallback - they render with system serif on platforms that don't load the Playfair web font. PNG raster fallbacks for the favicon sizes (16/32/48/64/96) and PNG versions of the wordmark and icon are still pending designer-produced exports. Modern browsers handle the SVG fine; PNGs matter mostly for legacy clients and email signature use.",
        priority: "Medium",
      },
    ],
  },
  {
    id: "decisions-from-le",
    label: "Decisions for L&E",
    defaultOpen: true,
    items: [
      {
        done: false,
        title: "Decide on resume upload in the Contact form",
        detail: "Old site had a 1 GB file upload field. New site removed it. The For Executives page now says 'no resume required'; that low-friction stance is deliberately welcoming to in-seat executives. Adding the upload back implicitly contradicts that. Recommendation: keep it removed; if an executive wants to share a CV they can email lori@l-epartners.com after the first call. Final call is L&E's.",
        priority: "Medium",
      },
      {
        done: false,
        title: "Differentiation framing vs expert networks",
        detail: "Added 'Why L&E - Relationships, not transactions' section to the home page positioning L&E against transactional matching services without naming AlphaSights / GLG / Guidepoint. L&E to confirm the framing reads correctly. Optional further moves: replace some 'introduction' language with 'placement' where accurate; add an explicit 'we are not an expert network' line if comfortable being that direct.",
        priority: "Low",
      },
      {
        done: false,
        title: "Confirm the '50+ Years of Combined Relationships' stat",
        detail: "Added a stat band on the home page using the figure from old l-epartners.com home copy. April 2026 feedback removed the explicit '50 years' line from the prose, so this is being added back as a separate visual element. Easy to remove if L&E feels the figure is dated.",
        priority: "Low",
      },
      {
        done: false,
        title: "Industry-specific landing pages (future)",
        detail: "Currently the home Sectors section lists Healthcare, Industrial, Financial Services, Consumer Products, Cleantech as labels only. Optional future enhancement: dedicated sub-pages per industry with sector-specific copy and representative searches. Useful for SEO but not necessary for launch.",
        priority: "Low",
      },
    ],
  },
  {
    id: "production",
    label: "Production / Hosting / Engineering",
    defaultOpen: true,
    items: [
      {
        done: false,
        title: "Custom domain",
        detail: "Site currently served at capital-partners-sand.vercel.app. Production l-epartners.com still on WordPress / GoDaddy. When L&E approves the new site, point l-epartners.com (or new.l-epartners.com for staging) at Vercel. ~10 min DNS change.",
        priority: "High",
      },
      {
        done: false,
        title: "Wire up the Contact form for real submissions",
        detail: "The contact form currently validates input and shows a success toast, but submissions are only console.logged - nothing reaches L&E. Need to wire it to a real intake. Recommended: a small Vercel serverless function that uses Resend (token already in your auth file) to email lori@l-epartners.com with the form payload. Alternatives: Formspree, Web3Forms, or a Loops webhook. Until this is done, real visitors who submit the form won't actually be heard.",
        priority: "High",
      },
      {
        done: false,
        title: "Wire GitHub to Vercel auto-deploy",
        detail: "Vercel project is created and deploying via CLI. Auto-deploy on git push isn't connected because the talons-peak GitHub org needs to authorize the Vercel app. One-time setup: project Settings -> Git -> Connect Git Repository -> authorize talons-peak. After that every git push to main auto-deploys.",
        priority: "Medium",
      },
      {
        done: false,
        title: "Remove this /todo page before public launch",
        detail: "This page is unlinked from nav but reachable at /todo. Delete the route + page file once the L&E presentation is done.",
        priority: "Low",
      },
    ],
  },
];

const priorityStyle: Record<Priority, string> = {
  High: "border-red-300 bg-red-50 text-red-700",
  Medium: "border-amber-300 bg-amber-50 text-amber-700",
  Low: "border-slate-300 bg-slate-50 text-slate-600",
};

function Checkbox({ checked }: { checked: boolean }) {
  return checked ? (
    <span className="w-4 h-4 border border-primary bg-primary flex-shrink-0 inline-flex items-center justify-center mt-0.5" aria-label="Done">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6.5L5 9.5L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  ) : (
    <span className="w-4 h-4 border border-border bg-white flex-shrink-0 inline-block mt-0.5" aria-label="Not done" />
  );
}

function Row({ item }: { item: ChecklistItem }) {
  return (
    <li className="py-3 border-b border-border last:border-b-0">
      <div className="flex items-start gap-3">
        <Checkbox checked={item.done} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-sm leading-snug ${item.done ? "text-foreground/75" : "text-foreground"}`}>
              {item.title}
            </span>
            {item.priority && (
              <span className={`text-[9px] uppercase tracking-widest px-1.5 py-0.5 border font-bold ${priorityStyle[item.priority]}`}>
                {item.priority}
              </span>
            )}
          </div>
          {item.detail && (
            <p className="text-xs text-muted-foreground/80 font-light leading-relaxed mt-1.5">
              {item.detail}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

function Group({ group, sectionTone }: { group: ChecklistGroup; sectionTone: "delivered" | "outstanding" }) {
  const total = group.items.length;
  const done = group.items.filter((i) => i.done).length;
  const counterText = sectionTone === "delivered" ? `${total} item${total === 1 ? "" : "s"}` : `${done} of ${total} done`;
  return (
    <details
      className="border border-border bg-white group"
      open={group.defaultOpen}
      data-testid={`group-${group.id}`}
    >
      <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-foreground/40 text-sm font-mono group-open:rotate-90 transition-transform inline-block w-3">›</span>
          <h3 className="text-base font-serif text-foreground truncate">{group.label}</h3>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70 font-semibold flex-shrink-0">
          {counterText}
        </span>
      </summary>
      <ul className="px-5 pb-3 border-t border-border">
        {group.items.map((item, i) => <Row key={i} item={item} />)}
      </ul>
    </details>
  );
}

export default function Todo() {
  const deliveredCount = delivered.reduce((acc, g) => acc + g.items.filter((i) => i.done).length, 0);
  const outstandingCount = outstanding.reduce((acc, g) => acc + g.items.filter((i) => !i.done).length, 0);
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="todo-page">

      <section className="py-12 md:py-16 border-b border-border bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Internal · Not Linked</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-foreground mb-5">
            Project status
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
            What we shipped for L&amp;E and what's still pending before public launch. Click any section to expand.
          </p>
          <p className="text-sm text-muted-foreground/60 font-light mt-3">
            This page is not linked from the navigation. Delete it before going live.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-muted/40 border-b border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-3">
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Delivered</p>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">
              {deliveredCount} items
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">What we built for L&amp;E.</h2>
          <div className="space-y-3">
            {delivered.map((g) => <Group key={g.id} group={g} sectionTone="delivered" />)}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-3">
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Outstanding</p>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">
              {outstandingCount} pending
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">Still to do.</h2>
          <div className="space-y-3">
            {outstanding.map((g) => <Group key={g.id} group={g} sectionTone="outstanding" />)}
          </div>
        </div>
      </section>
    </div>
  );
}
