import { type ReactNode } from "react";
import { Camera, FileText, Image, Quote, ServerCog, Globe, Users, MessageSquare, Sparkles, Check } from "lucide-react";

// Temporary internal page — not linked from nav. URL: /todo
// Use this when walking L&E through outstanding items.

type Item = {
  id: string;
  category: "Content from L&E" | "Decisions for L&E" | "Production / Hosting";
  priority: "High" | "Medium" | "Low";
  icon: ReactNode;
  title: string;
  detail: string;
  rationale?: string;
};

const items: Item[] = [
  {
    id: "lori-bio",
    category: "Content from L&E",
    priority: "High",
    icon: <FileText className="w-5 h-5" />,
    title: "Updated bio for Lori Hess",
    detail:
      "L&E's April 2026 feedback marked Lori's bio with a placeholder \"X\" — meaning revised copy is forthcoming. The site currently uses Lori's existing l-epartners.com bio.",
    rationale:
      "L&E to send the new copy whenever it's ready; trivial to swap.",
  },
  {
    id: "headshots",
    category: "Content from L&E",
    priority: "High",
    icon: <Camera className="w-5 h-5" />,
    title: "High-resolution professional headshots",
    detail:
      "Current bio photos were pulled from the live site and are tiny (5–6 KB webp files, ~200×250 px). They look acceptable on desktop but get blurry at retina display sizes and on mobile zoom.",
    rationale:
      "Worth investing in proper headshots for all three principals — same photographer, same lighting, neutral background. Would lift the perceived professionalism of the About page significantly.",
  },
  {
    id: "principal-bios",
    category: "Content from L&E",
    priority: "High",
    icon: <Users className="w-5 h-5" />,
    title: "Beef up Sandi and Nikki bios",
    detail:
      "Lori's bio is dense with proof points (Charterhouse, Cross Country Healthcare, Rice & Dore, Houlihan Lokey). Sandi's and Nikki's bios are thinner — they list sectors but don't anchor the same depth.",
    rationale:
      "PE buyers will want to know what each partner specifically delivers. A few sentences from Sandi and Nikki on representative wins (anonymized if needed) would balance the team page.",
  },
  {
    id: "real-searches",
    category: "Content from L&E",
    priority: "High",
    icon: <FileText className="w-5 h-5" />,
    title: "Replace illustrative Representative Searches with real engagements",
    detail:
      "/services/private-equity has 8 anonymized search examples. They're plausible placeholders I wrote (e.g., \"CEO — PE-backed healthcare services platform\") to demonstrate the format L&E might want.",
    rationale:
      "L&E should swap these with real recent engagements, anonymized however confidentiality requires (sector + role + sponsor type + transaction stage is usually enough). This is the single highest-impact piece of social proof for PE buyers.",
  },
  {
    id: "exec-testimonial",
    category: "Content from L&E",
    priority: "Medium",
    icon: <Quote className="w-5 h-5" />,
    title: "One paragraph-length executive testimonial",
    detail:
      "The home page has 8 short attributed testimonials from the live site. None are paragraph-length narratives.",
    rationale:
      "A 60–80 word quote from an executive L&E placed, describing the experience of working with the firm, would significantly strengthen the For Executives audience pull. Even one is enough.",
  },
  {
    id: "for-execs-photo",
    category: "Content from L&E",
    priority: "Medium",
    icon: <Image className="w-5 h-5" />,
    title: "New photo for /services/executives",
    detail:
      "L&E's April feedback called for a photo change on this page. Current photo is a placeholder pulled from the live site.",
    rationale:
      "Any high-quality editorial image that suggests \"senior leadership\" works. L&E to provide.",
  },
  {
    id: "resume-upload",
    category: "Decisions for L&E",
    priority: "Medium",
    icon: <FileText className="w-5 h-5" />,
    title: "Decide on résumé upload in the Contact form",
    detail:
      "The old site had a 1 GB file upload field. The new site removed it.",
    rationale:
      "The For Executives page now says \"no résumé required\" — that low-friction stance is deliberately welcoming to in-seat executives nervous about putting anything in writing. Adding the upload back implicitly contradicts that. Recommendation: keep it removed; if an executive wants to share a CV, they can email it directly to lori@l-epartners.com after the first call. Final call is L&E's.",
  },
  {
    id: "differentiation",
    category: "Decisions for L&E",
    priority: "Low",
    icon: <Sparkles className="w-5 h-5" />,
    title: "Differentiation from expert networks (AlphaSights / GLG / Guidepoint)",
    detail:
      "The site previously used language (\"introductions\", \"thesis development\", \"due diligence\") that overlapped with how expert networks describe their service. Added a \"Why L&E — Relationships, not transactions\" section to the home page with three pillars (Decades-long relationships / Timing matters / Fit is everything) framing L&E as a relationship-driven boutique rather than a matching service.",
    rationale:
      "L&E to confirm the framing reads correctly. Optional further moves: replace some \"introduction\" language with \"placement\" where it's accurate; add one explicit \"we are not an expert network\" line if the firm is comfortable being that direct (some prefer not to name the contrast).",
  },
  {
    id: "fifty-years",
    category: "Decisions for L&E",
    priority: "Low",
    icon: <Sparkles className="w-5 h-5" />,
    title: "Confirm the \"50+ Years of Combined Relationships\" stat",
    detail:
      "Added a stat band on the home page using the figure from the old l-epartners.com home copy. The April 2026 feedback removed the explicit \"50 years\" line from the prose, so this is being added back as a separate visual element rather than in the body copy.",
    rationale:
      "Easy to remove if L&E feels the figure is dated or imprecise.",
  },
  {
    id: "industries",
    category: "Decisions for L&E",
    priority: "Low",
    icon: <Globe className="w-5 h-5" />,
    title: "Industry-specific landing pages (future)",
    detail:
      "Currently the home Sectors section lists Healthcare, Industrial, Financial Services, Consumer Products, Cleantech as labels only.",
    rationale:
      "Optional future enhancement: dedicated sub-pages per industry with sector-specific copy and representative searches. Useful for SEO and inbound search but not necessary for launch.",
  },
  {
    id: "domain",
    category: "Production / Hosting",
    priority: "High",
    icon: <Globe className="w-5 h-5" />,
    title: "Custom domain",
    detail:
      "The site is currently served at capital-partners-sand.vercel.app. The current production site is at l-epartners.com (WordPress on GoDaddy).",
    rationale:
      "When L&E approves the new site, point l-epartners.com (or a subdomain like new.l-epartners.com for staging) at Vercel. Vercel provides one-click DNS instructions; takes ~10 minutes.",
  },
  {
    id: "github-vercel",
    category: "Production / Hosting",
    priority: "Medium",
    icon: <ServerCog className="w-5 h-5" />,
    title: "Wire GitHub → Vercel auto-deploy",
    detail:
      "Vercel project is created and deploying via CLI. Auto-deploy on git push isn't connected because the talons-peak GitHub org needs to authorize the Vercel app.",
    rationale:
      "One-time setup in the Vercel dashboard: project Settings → Git → Connect Git Repository → authorize talons-peak. After that, every git push to main auto-deploys.",
  },
  {
    id: "remove-todo",
    category: "Production / Hosting",
    priority: "Low",
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Remove this /todo page before launch",
    detail:
      "This page is unlinked from the nav but reachable at /todo by anyone who knows the URL.",
    rationale:
      "Delete the route + page file once the L&E presentation is done.",
  },
];

const priorityStyle: Record<Item["priority"], string> = {
  High: "border-red-300 bg-red-50 text-red-700",
  Medium: "border-amber-300 bg-amber-50 text-amber-700",
  Low: "border-slate-300 bg-slate-50 text-slate-600",
};

function Item({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 items-start leading-relaxed">
      <Check className="w-3.5 h-3.5 text-primary mt-1.5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function Todo() {
  const categories = Array.from(new Set(items.map((i) => i.category)));

  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="todo-page">
      <section className="py-12 md:py-16 border-b border-border bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Internal · Not Linked</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-foreground mb-6">
            Project status
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
            What we shipped for L&amp;E and what's still pending before public launch. Use this when walking the team through the new site.
          </p>
          <p className="text-sm text-muted-foreground/60 font-light mt-3">
            This page is not linked from the navigation. Delete it before going live.
          </p>
        </div>
      </section>

      {/* ── WHAT WE SHIPPED ── */}
      <section className="py-12 md:py-16 bg-white border-b border-border" data-testid="shipped-section">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex items-center gap-3 mb-3">
            <Check className="w-5 h-5 text-primary" />
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Delivered</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">What we built for L&amp;E</h2>
          <p className="text-muted-foreground font-light mb-10 max-w-3xl">
            A complete rebuild of l-epartners.com — new platform, new design, new copy throughout, plus a migration off the old WordPress / GoDaddy hosting stack onto modern serverless infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

            <div>
              <h3 className="text-base font-serif text-foreground mb-4 pb-2 border-b border-border">Platform &amp; rebuild</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                {[
                  "Replaced WordPress / GoDaddy with a custom React + Vite + TypeScript SPA",
                  "Built on Tailwind CSS v4 with a custom navy / gold / serif design system",
                  "Editorial typography hierarchy and consistent brand treatment across all pages",
                  "Framer Motion reveal animations and parallax effects for visual polish",
                  "Fully responsive layouts — mobile, tablet, and desktop",
                  "Hosted on Vercel: HTTPS, edge CDN, sub-100ms TTFB, automatic certificates",
                  "Migrated off Replit; clean Git history at github.com/talons-peak/Capital-Partners",
                  "Type-safe codebase that passes strict TypeScript checks",
                ].map((s) => <Item key={s}>{s}</Item>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-serif text-foreground mb-4 pb-2 border-b border-border">Information architecture</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                {[
                  "Removed the standalone Services landing page (per April 2026 feedback)",
                  "Created a Services dropdown menu with For Private Equity Firms / For Executives",
                  "Reordered nav: Services first, About second, Inquiries CTA on the right",
                  "Removed unrelated Portfolio and Team pages from the original template",
                  "Added Privacy Policy, Terms of Use, and Disclosures pages",
                  "All deep-links work (e.g., /services/private-equity loads correctly on direct visit)",
                ].map((s) => <Item key={s}>{s}</Item>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-serif text-foreground mb-4 pb-2 border-b border-border">Brand &amp; identity</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                {[
                  "Consistent L&E ampersand styling site-wide",
                  "Persistent header subtitle: 'Rethinking How Private Equity Firms Invest in Executives'",
                  "Pulled all real L&E imagery from the live site (logo, three bio photos, three editorial heroes)",
                  "Pull-quote: 'Partnerships are grown, not born' — the L&E ethos",
                  "50+ Years of Combined Relationships stat band",
                ].map((s) => <Item key={s}>{s}</Item>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-serif text-foreground mb-4 pb-2 border-b border-border">Home page</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                {[
                  "Full L&E intro: 'Markets shift and transform — but business remains driven by one thing: human talent'",
                  "Three intro paragraphs from the April 2026 feedback (verbatim)",
                  "Dual-audience cards routing to PE Firms / Executives",
                  "'Why L&E — Relationships, not transactions' three-pillar positioning",
                  "Sectors section: Healthcare, Industrial, Financial Services, Consumer Products, Cleantech",
                  "Testimonials grid with all 8 attributed quotes from the old site",
                ].map((s) => <Item key={s}>{s}</Item>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-serif text-foreground mb-4 pb-2 border-b border-border">About page</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                {[
                  "Boutique-search-firm blurb (per L&E feedback)",
                  "Lori Hess full bio with Charterhouse / Cross Country Healthcare / Rice & Dore detail",
                  "Sandi Macan and Nikki Delp bios with sector and education detail",
                  "Per-principal photo with grayscale-to-color hover treatment",
                ].map((s) => <Item key={s}>{s}</Item>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-serif text-foreground mb-4 pb-2 border-b border-border">For Private Equity Firms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                {[
                  "Verbatim L&E-supplied copy (offers, roles, drivers)",
                  "Vertical (single-column) layout per April 2026 feedback",
                  "'How a Search Works' — 4-phase retained engagement breakdown",
                  "Representative Searches — 8 anonymized engagement examples (placeholder copy)",
                ].map((s) => <Item key={s}>{s}</Item>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-serif text-foreground mb-4 pb-2 border-b border-border">For Executives</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                {[
                  "Real copy pulled from l-epartners.com (entrepreneur quote, candidate types, collaboration paragraph)",
                  "Vertical layout per April 2026 feedback",
                  "'What to Expect' — 4-phase rhythm narrative",
                  "Confidentiality section explicitly addressing in-seat executives",
                  "'Start a confidential conversation' CTA framing",
                ].map((s) => <Item key={s}>{s}</Item>)}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-serif text-foreground mb-4 pb-2 border-b border-border">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                {[
                  "Three-audience welcome (PE firm / executive / industry connection)",
                  "One-business-day response promise",
                  "Direct office, mobile, and email per principal",
                  "Form with validation, friendly placeholders, friendly response toast",
                  "'Confidential by Default' sidebar block",
                ].map((s) => <Item key={s}>{s}</Item>)}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-muted border-b border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">Outstanding items</h2>
          <p className="text-muted-foreground font-light mt-2 max-w-3xl">
            What's still needed from L&amp;E, decisions to confirm, and production / hosting tasks before launch.
          </p>
        </div>
      </section>

      {categories.map((cat) => {
        const catItems = items.filter((i) => i.category === cat);
        return (
          <section key={cat} className="py-12 md:py-16 even:bg-muted" data-testid={`todo-category-${cat.toLowerCase().replace(/\W+/g, "-")}`}>
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">{cat}</h2>
              <div className="space-y-5">
                {catItems.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white border border-border p-6 md:p-8"
                    data-testid={`todo-item-${item.id}`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="text-primary mt-0.5 flex-shrink-0">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-lg font-serif text-foreground">{item.title}</h3>
                          <span
                            className={`text-[10px] uppercase tracking-widest px-2 py-1 border font-semibold ${priorityStyle[item.priority]}`}
                          >
                            {item.priority}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                          {item.detail}
                        </p>
                        {item.rationale && (
                          <p className="text-sm text-foreground/75 font-light leading-relaxed border-l-2 border-primary/40 pl-4 italic">
                            {item.rationale}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
