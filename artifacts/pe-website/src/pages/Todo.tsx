import { type ReactNode } from "react";
import { Seo } from "@/components/Seo";

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
    id: "one-pagers",
    label: "One-pager sheets (printable PDFs)",
    items: [
      { done: true, title: "Three printable one-pager sheets: For Private Equity Firms, For Executives, and a Firm Overview, each at /one-pager/... and linked from the footer" },
      { done: true, title: "Each sheet has a 'Download PDF' button that produces a real, one-page PDF with selectable text, the true brand fonts, and a crisp wordmark (no browser URL or date header)" },
      { done: true, title: "Built entirely from copy already approved for the site; every sheet fits exactly one US Letter page (verified by rendering each to PDF)" },
    ],
  },
  {
    id: "july-2026-revisions",
    label: "July 2026 content revision (L&E changes doc)",
    items: [
      { done: true, title: "Home: reworded the Deep Navy pull-quote to 'The principals of L&E Partners have spent decades building and cultivating our network of operating executives, continually expanding it to cater to our clients' shifting investment interests.'" },
      { done: true, title: "For Private Equity Firms: extended the Food and Beverage / Executive Chair search with the two follow-on Board Director recruitments (one for sales expertise, one to serve as Audit Chair)" },
      { done: true, title: "For Private Equity Firms: added a 'Contact L&E Partners' button at the bottom of the page, matching the For Executives page" },
      { done: true, title: "For Executives: restyled the opening statement to match the For Private Equity Firms treatment - quotation marks, gold rule, and serif type removed" },
      { done: true, title: "For Executives: removed the stray apostrophe in 'L&E Partners team' and reworded the closing sentence to 'continuous hands-on involvement and follow-up ensure...'" },
      { done: true, title: "About: merged Nikki Delp's closing sentence into her bio paragraph; swapped in Sandi Macan's new professional headshot" },
      { done: true, title: "For Executives: replaced the hero banner with L&E's new low-angle office-tower photo (used in full color, as supplied)" },
      { done: true, title: "Contact: intro now reads 'a search or an executive' and ends at 'strict confidence.'; the message placeholder now reads 'Tell us how we can help...'; the confidentiality note now reads 'All conversations and inquiries are strictly confidential.'" },
      { done: true, title: "Brand page: every asset now downloads as both SVG and PNG, and the signature gold ampersand is available as its own downloadable asset" },
    ],
  },
  {
    id: "june-2026-revisions",
    label: "June 2026 content revision (L&E feedback doc)",
    items: [
      { done: true, title: "Brand navy consolidated: dropped #0F172A and applied Deep Navy #1B2841 everywhere navy was used - body text, dark sections, brand SVGs, app icons, and the browser theme color" },
      { done: true, title: "Home: new 'Who We Are' headline and revised intro paragraphs; updated the two audience-card blurbs; rewrote the 'Why L&E' pillars (Decades-long relationships, Timing matters, Knowledge is key)" },
      { done: true, title: "Home: removed the '50+ years' stat (kept the Deep Navy band) and replaced the pull-quote with 'Longstanding relationships with our clients and executives make us a trusted partner.'" },
      { done: true, title: "Home: new sector set - Business & Financial Services, Consumer, Energy & Infrastructure, Healthcare & Life Sciences, Industrial, Technology & Tech-enabled Services (Cleantech removed)" },
      { done: true, title: "About: revised hero copy and new L&E-supplied bios for all three principals; Sandi's title changed to Principal" },
      { done: true, title: "For Private Equity Firms: new offers list; reordered roles and removed EVP/SVP; removed 'How a Search Works', 'Our introductions are driven by', the FAQ, and the bottom CTA; replaced the placeholder Representative Searches with 6 real anonymized engagements" },
      { done: true, title: "For Executives: un-italicized and updated the opening quote; new candidate-types list; new collaboration copy; removed 'What to Expect', Confidentiality, and FAQ; simplified the CTA to a single 'Contact L&E Partners' button" },
      { done: true, title: "Contact: Sandi's title changed to Principal; removed the 'Reach a principal directly' intro line and the 'Send a note' subtext" },
      { done: true, title: "New service-page hero photos: aerial Midtown Manhattan cityscape (For PE Firms) and a black-and-white executives-by-the-window shot (For Executives), both resized and compressed for web" },
    ],
  },
  {
    id: "platform",
    label: "Platform & rebuild",
    items: [
      { done: true, title: "Replaced the old WordPress / GoDaddy site with a custom-built site that loads faster and is easier to maintain" },
      { done: true, title: "Designed around L&E's brand colors and typography for a consistent, editorial feel across every page" },
      { done: true, title: "Magazine-style headlines and consistent brand treatment across every page" },
      { done: true, title: "Subtle scroll-triggered animations and parallax photography for polish without distracting from the content" },
      { done: true, title: "Fully responsive layouts on phones, tablets, and desktops" },
      { done: true, title: "Hosted on Vercel, a modern hosting platform that delivers the site quickly to visitors anywhere in the world, with automatic security certificates and a global content network" },
      { done: true, title: "Source code lives in the talons-peak GitHub repository with a full history of every change" },
      { done: true, title: "Built with safeguards that catch typos and bugs before they reach the live site" },
      { done: true, title: "Clicking from one page to another scrolls back to the top automatically so visitors always start at the beginning of the new page" },
    ],
  },
  {
    id: "ia",
    label: "Information architecture",
    items: [
      { done: true, title: "Removed the standalone Services landing page per L&E's April feedback" },
      { done: true, title: "Created a Services dropdown with For Private Equity Firms / For Executives" },
      { done: true, title: "Reordered nav: Services first, About second, Inquiries CTA on the right" },
      { done: true, title: "Removed unrelated Portfolio and Team pages from the original template" },
      { done: true, title: "Added Privacy Policy, Terms of Use, and Disclosures pages" },
      { done: true, title: "Added public /brand asset library page implementing the brand-spec v1" },
      { done: true, title: "Every page has its own URL that visitors can bookmark, share, or paste into an email - and it loads directly without bouncing through the home page first" },
    ],
  },
  {
    id: "seo",
    label: "SEO & discoverability",
    items: [
      { done: true, title: "Every page has its own browser-tab title, written for the audience that page is meant for" },
      { done: true, title: "Every page has its own short description that shows up under its title in Google search results" },
      { done: true, title: "Each page tells Google its preferred web address, so search results don't get split between trailing-slash and non-trailing-slash versions of the same page" },
      { done: true, title: "When someone pastes an L&E link into LinkedIn, Slack, iMessage, or Telegram, the link automatically expands into a preview card with the title, description, and brand image" },
      { done: true, title: "Same preview-card behavior on X / Twitter" },
      { done: true, title: "Custom social-share image (the L&E wordmark and tagline on a clean white background with the gold accent) used by every preview card" },
      { done: true, title: "Hidden block in the page's source code that tells Google exactly who L&E is - firm name, founding date, NYC address, phone, email, the three principals, and the sectors covered. This is the kind of data that powers Google's knowledge panels and rich search results." },
      { done: true, title: "Standard search-engine instruction file telling Google and other crawlers what to index (everything public) and what to skip (the internal /todo page)" },
      { done: true, title: "Site map listing all 9 public pages with priorities and last-updated dates so Google can find and re-crawl the site efficiently" },
      { done: true, title: "When someone clicks an old WordPress link (/about-us, /contact-us, /services, /for-the-private-equity-firms, /for-the-executives) - whether from an old Google result, a partner site, a saved bookmark, or an email signature - they land on the new equivalent automatically. Existing search ranking and inbound links transfer cleanly." },
      { done: true, title: "Internal pages (the /todo page and the 404 'page not found' page) are explicitly hidden from Google" },
      { done: true, title: "Mobile zoom is enabled (some site templates accidentally disable pinch-to-zoom; we fixed that for accessibility)" },
      { done: true, title: "Brand assets and config files are cached aggressively so repeat visitors don't re-download them on every page change" },
      { done: true, title: "Phone numbers in body text aren't auto-styled as call links by iOS Safari (only the dedicated contact-card phone numbers are tap-to-dial)" },
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
      { done: true, title: "Single source of truth for every brand asset: wordmark, icon, browser-tab icon, iOS home-screen icon, two Android launcher icons, a maskable variant for newer Android phones, and the social preview card. All scalable vector graphics that look sharp at any size." },
      { done: true, title: "Site favicon, apple-touch-icon, web manifest, and OG/Twitter cards all wired to brand assets" },
      { done: true, title: "Branded 404 page that points back to the main routes" },
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
      { done: true, title: "Each principal's photo starts as black-and-white and fades to color when you hover over it" },
    ],
  },
  {
    id: "for-pe",
    label: "For Private Equity Firms",
    items: [
      { done: true, title: "Word-for-word copy supplied by L&E (the offers, roles list, and drivers sections)" },
      { done: true, title: "Single-column vertical layout per L&E's April feedback" },
      { done: true, title: "'How a Search Works' section walking through the 4 phases of a retained engagement (Discovery, Sourcing, Slate, Close)" },
      { done: true, title: "Representative Searches - 8 anonymized engagement examples (placeholder copy)" },
      { done: true, title: "FAQ - 6 common PE-buyer questions answered" },
    ],
  },
  {
    id: "for-execs",
    label: "For Executives",
    items: [
      { done: true, title: "Real copy pulled from the existing l-epartners.com (the entrepreneur quote, the four candidate types, the collaboration paragraph)" },
      { done: true, title: "Single-column vertical layout per L&E's April feedback (executives page)" },
      { done: true, title: "'What to Expect' - 4-phase rhythm narrative" },
      { done: true, title: "Confidentiality section explicitly addressing executives who are still in their current role" },
      { done: true, title: "FAQ - 6 common executive questions answered" },
      { done: true, title: "Soft 'Start a confidential conversation' call-to-action language (less salesy)" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    items: [
      { done: true, title: "Three-audience welcome (PE firm / executive / industry connection)" },
      { done: true, title: "One-business-day response promise" },
      { done: true, title: "Direct office, mobile, and email per principal" },
      { done: true, title: "Contact form with input checks, friendly placeholder examples, and a friendly thank-you message after submission" },
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
        title: "High-resolution professional headshots for Lori and Nikki",
        detail: "Sandi's new headshot is in place. Lori's and Nikki's bio photos are still the small files pulled from the old site (5-6 KB webp, ~200x250 px) - acceptable on desktop but blurry on retina and mobile zoom. Ideally shot by the same photographer as Sandi's for consistent lighting and background.",
        priority: "High",
      },
      {
        done: false,
        title: "Updated testimonials",
        detail: "The June 2026 feedback notes L&E is gathering new testimonials. The home page still shows the 8 short attributed quotes pulled from the old site; swap them when the new set arrives. A paragraph-length (60-80 word) quote from a placed executive would also strengthen the For Executives pull.",
        priority: "Medium",
      },
      {
        done: false,
        title: "Confirm About-page Education lists",
        detail: "L&E's revised bios dropped education from the prose. The structured Education sidebars (Lori: Columbia/Penn; Sandi: Villanova/Johns Hopkins; Nikki: Delaware) were left in place pending confirmation - tell us to remove them if they should go.",
        priority: "Low",
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
        title: "Confirm the one-pager content choices",
        detail: "The three printable one-pagers are live. Two editorial calls to confirm: (1) the For Private Equity Firms sheet shows 3 of the 6 representative searches (Industrial Distribution, Healthcare, Food and Beverage), with their write-ups shortened, so everything fits one page - tell us if you want different searches or all six (which makes it a two-page sheet); (2) the sheets are linked in the footer only, not the main navigation. Both are easy to change.",
        priority: "Low",
      },
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
        title: "Connect the Contact form to a real inbox",
        detail: "Right now the contact form looks and behaves like a working form: visitors can fill it in, it checks their entries, and they see a thank-you message. Behind the scenes, though, the message isn't actually being sent anywhere yet. The fix is to point the form at a small piece of code that emails lori@l-epartners.com whenever someone submits. Until that's done, real visitors who hit Submit aren't actually being heard.",
        priority: "High",
      },
      {
        done: false,
        title: "Tell Google about the new site (Search Console)",
        detail: "Once the site is live at l-epartners.com, we register it with Google Search Console - a free service that confirms L&E owns the domain and lets us hand Google the site map directly. This speeds up indexing and gives L&E a dashboard showing which queries lead people to the site. Optional but recommended: do the same with Bing Webmaster Tools. All the technical groundwork (search-engine instructions, structured data, redirects from old URLs) is already in place; this is just the registration step.",
        priority: "Medium",
      },
      {
        done: false,
        title: "Decide whether to add visitor analytics",
        detail: "No visitor tracking runs on the site today. If L&E wants to see how many people visit, where they come from, and which pages they read, the cleanest option is Vercel Analytics - a one-click toggle that respects privacy (no cookies, no third parties, GDPR-friendly). Other lightweight options are Plausible and Fathom. Google Analytics is the heavier alternative if you ever want detailed visitor cohorts. Worth a brief discussion: do you want any measurement at all?",
        priority: "Low",
      },
      {
        done: false,
        title: "Update the site's URL after the domain cutover",
        detail: "The site currently lives at capital-partners-sand.vercel.app while we preview. When it switches to l-epartners.com (or whatever final domain), a few config files that hard-code the URL need a find-and-replace. Five minutes of housekeeping after the DNS change.",
        priority: "High",
      },
      {
        done: false,
        title: "Connect GitHub to Vercel for automatic publishing",
        detail: "Right now I publish each round of changes manually. To make every change automatically appear on the live site within a minute or two, the talons-peak GitHub account needs to authorize Vercel once - a one-time click in Vercel's settings. After that, every change pushed to GitHub goes live on its own.",
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
      <Seo
        title="Project Status (Internal) | L&E Partners"
        description="Internal project status overview - not linked from the public navigation."
        path="/todo"
        noindex
      />

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
