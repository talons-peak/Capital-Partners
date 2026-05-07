import { useState, type ReactNode } from "react";
import { Check, Copy, Download, AlertCircle } from "lucide-react";
import { Seo } from "@/components/Seo";

// Public brand asset library page implementing the get-latest brand-spec v1.
// Section order is fixed: Intro -> Primary Marks -> Web & App Icons ->
// Colors -> Typography -> Usage Rules -> Contact / Exceptions.

type AssetStatus = "available" | "pending";

type AssetCard = {
  title: string;
  meta: string;
  note: string;
  previewSurface: "light" | "dark";
  preview: ReactNode;
  downloads?: { label: string; href: string }[];
  status?: AssetStatus;
};

const COLORS = [
  { name: "Foreground / Navy", hex: "#0F172A", rgb: "rgb(15, 23, 42)", role: "Primary text, dark sections, icon backgrounds" },
  { name: "Accent / Deep Navy", hex: "#1B2841", rgb: "rgb(27, 40, 65)", role: "Dark surfaces (CTA bands, footer, accent strips)" },
  { name: "Primary / Gold", hex: "#CC9A14", rgb: "rgb(204, 154, 20)", role: "The brand-leading accent. Gold rules, eyebrow labels, key icons" },
  { name: "Background / White", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", role: "Default page surface" },
  { name: "Muted / Stone", hex: "#F1F4F7", rgb: "rgb(241, 244, 247)", role: "Section alternation, low-emphasis surfaces" },
  { name: "Border / Slate", hex: "#D9DEE6", rgb: "rgb(217, 222, 230)", role: "Card borders, dividers" },
];

function Section({ id, label, title, blurb, children }: { id: string; label: string; title: string; blurb?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-12 md:py-16 border-b border-border" data-testid={`section-${id}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-8">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-2">{label}</p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground leading-tight">{title}</h2>
          {blurb && <p className="text-muted-foreground font-light mt-3 max-w-2xl">{blurb}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function AssetGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{children}</div>;
}

function AssetCardView({ card }: { card: AssetCard }) {
  const surface = card.previewSurface === "dark" ? "bg-foreground" : "bg-muted/40";
  return (
    <article className="border border-border bg-white" data-testid="asset-card">
      <div
        className={`relative ${surface} flex items-center justify-center overflow-hidden`}
        style={{ height: "140px" }}
      >
        {card.status === "pending" ? (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/70">
            <AlertCircle className="w-5 h-5" />
            <p className="text-[10px] uppercase tracking-widest font-semibold">Pending designer asset</p>
          </div>
        ) : (
          card.preview
        )}
      </div>
      <div className="p-5">
        <h3 className="text-sm font-serif text-foreground">{card.title}</h3>
        <p className="text-xs text-muted-foreground/70 font-mono mt-1">{card.meta}</p>
        <p className="text-xs text-muted-foreground font-light mt-2 leading-relaxed">{card.note}</p>
        {card.downloads && card.status !== "pending" && (
          <div className="flex flex-wrap gap-2 mt-4">
            {card.downloads.map((d) => (
              <a
                key={d.label}
                href={d.href}
                download
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold border border-border text-foreground/80 hover:border-primary hover:text-primary px-2.5 py-1.5 transition-colors"
              >
                <Download className="w-3 h-3" />
                {d.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ColorSwatch({ name, hex, rgb, role }: { name: string; hex: string; rgb: string; role: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      type="button"
      onClick={onCopy}
      className="text-left border border-border bg-white hover:border-primary focus:border-primary focus:outline-none transition-colors group"
      style={{ cursor: "copy" }}
      data-testid={`swatch-${hex}`}
      aria-label={`Copy ${hex}`}
    >
      <div className="h-24" style={{ backgroundColor: hex }} />
      <div className="p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-sm font-serif text-foreground">{name}</p>
          <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60 group-hover:text-primary inline-flex items-center gap-1">
            {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
          </span>
        </div>
        <p className="text-xs font-mono text-muted-foreground">{hex}</p>
        <p className="text-xs font-mono text-muted-foreground/60">{rgb}</p>
        <p className="text-xs text-muted-foreground/70 font-light mt-2 leading-relaxed">{role}</p>
      </div>
    </button>
  );
}

function NativeIconPreview({ src, size }: { src: string; size: number }) {
  return <img src={src} width={size} height={size} alt="" style={{ width: `${size}px`, height: `${size}px`, imageRendering: "pixelated" }} />;
}

const primaryMarks: AssetCard[] = [
  {
    title: "Wordmark",
    meta: "SVG · vector",
    note: "The primary horizontal lockup. Use on light surfaces in any external context where space allows.",
    previewSurface: "light",
    preview: <img src="/brand/logo/wordmark-light.svg" alt="L&E Partners wordmark" style={{ height: "36px" }} />,
    downloads: [
      { label: "SVG", href: "/brand/logo/wordmark-light.svg" },
    ],
  },
  {
    title: "Wordmark · Dark surface",
    meta: "SVG · vector",
    note: "Reversed wordmark for navy and other dark surfaces. Preserve clear space on all sides.",
    previewSurface: "dark",
    preview: <img src="/brand/logo/wordmark-dark.svg" alt="L&E Partners wordmark, dark" style={{ height: "36px" }} />,
    downloads: [
      { label: "SVG", href: "/brand/logo/wordmark-dark.svg" },
    ],
  },
  {
    title: "Icon",
    meta: "SVG · 64×64 viewBox",
    note: "Symbol-only mark for avatars, app tiles, and compact contexts where the wordmark is too wide.",
    previewSurface: "light",
    preview: <img src="/brand/logo/icon-light.svg" alt="L&E icon" style={{ width: "72px", height: "72px" }} />,
    downloads: [
      { label: "SVG", href: "/brand/logo/icon-light.svg" },
    ],
  },
  {
    title: "Icon · Dark surface",
    meta: "SVG · 64×64 viewBox",
    note: "Gold-on-navy reversal of the icon mark.",
    previewSurface: "dark",
    preview: <img src="/brand/logo/icon-dark.svg" alt="L&E icon, dark" style={{ width: "72px", height: "72px" }} />,
    downloads: [
      { label: "SVG", href: "/brand/logo/icon-dark.svg" },
    ],
  },
  {
    title: "Original logo · PNG",
    meta: "PNG · 431×52",
    note: "The original L&E Partners wordmark in the brand blue, pulled from l-epartners.com. Use until designer-produced PNG fallbacks for the new wordmark are produced.",
    previewSurface: "light",
    preview: <img src="/brand/logo/logo-light.png" alt="L&E Partners original logo" style={{ height: "26px" }} />,
    downloads: [
      { label: "PNG", href: "/brand/logo/logo-light.png" },
    ],
  },
];

const webAndAppIcons: AssetCard[] = [
  {
    title: "Favicon",
    meta: "SVG · scalable",
    note: "Modern browser tab icon. Scales to any density without loss.",
    previewSurface: "light",
    preview: <img src="/brand/favicon/favicon.svg" alt="favicon" style={{ width: "32px", height: "32px" }} />,
    downloads: [{ label: "SVG", href: "/brand/favicon/favicon.svg" }],
  },
  {
    title: "Apple touch icon",
    meta: "SVG · 180×180 viewBox",
    note: "iOS home screen icon. Used when an L&E URL is added to the iOS home screen.",
    previewSurface: "light",
    preview: <img src="/brand/app-icons/apple-touch-icon.svg" alt="apple touch icon" style={{ width: "60px", height: "60px" }} />,
    downloads: [{ label: "SVG", href: "/brand/app-icons/apple-touch-icon.svg" }],
  },
  {
    title: "Android icon · 192",
    meta: "SVG · 192×192 viewBox",
    note: "Android launcher and PWA install prompt.",
    previewSurface: "light",
    preview: <img src="/brand/app-icons/android-chrome-192x192.svg" alt="android 192" style={{ width: "60px", height: "60px" }} />,
    downloads: [{ label: "SVG", href: "/brand/app-icons/android-chrome-192x192.svg" }],
  },
  {
    title: "Android icon · 512",
    meta: "SVG · 512×512 viewBox",
    note: "High-resolution Android launcher and store listings.",
    previewSurface: "light",
    preview: <img src="/brand/app-icons/android-chrome-512x512.svg" alt="android 512" style={{ width: "60px", height: "60px" }} />,
    downloads: [{ label: "SVG", href: "/brand/app-icons/android-chrome-512x512.svg" }],
  },
  {
    title: "Maskable icon",
    meta: "SVG · 512×512 viewBox",
    note: "PWA maskable launcher icon with extra safe-zone padding for Android adaptive icons.",
    previewSurface: "light",
    preview: <img src="/brand/app-icons/maskable-icon-512x512.svg" alt="maskable icon" style={{ width: "60px", height: "60px" }} />,
    downloads: [{ label: "SVG", href: "/brand/app-icons/maskable-icon-512x512.svg" }],
  },
  {
    title: "Open Graph card",
    meta: "SVG · 1200×630",
    note: "Social preview card for link unfurls on LinkedIn, X, and other platforms.",
    previewSurface: "light",
    preview: <img src="/brand/social/og-image.svg" alt="og image" style={{ width: "120px", height: "63px", objectFit: "contain" }} />,
    downloads: [{ label: "SVG", href: "/brand/social/og-image.svg" }],
  },
];

// PNG raster sizes (16/32/48/64/96) are SVG-only on this build. NativeIconPreview
// is preserved for future PNG ports - it renders icons at their actual pixel
// dimensions per the brand-spec rule about not upscaling small raster files.
void NativeIconPreview;

const doRules = [
  "Prefer the SVG wordmark whenever the rendering surface supports it.",
  "Preserve clear space equal to the height of the 'L' on every side.",
  "Use the light variant on surfaces lighter than the gold accent. Use the dark variant on the brand navy and any surface darker than 50% gray.",
  "Treat gold as the leading accent color. Reach for it before other tints.",
  "Scale the wordmark and icon proportionally only.",
];

const dontRules = [
  "Do not recolor the mark beyond the approved light, dark, and gold-on-navy variants.",
  "Do not stretch, skew, rotate, or otherwise distort either mark.",
  "Do not recreate the wordmark by setting 'L&E Partners' in another font.",
  "Do not crop, occlude, or add outlines, shadows, or gradients to the icon.",
  "Do not place artwork with baked-in dark backgrounds onto white tiles, or vice versa.",
];

export default function Brand() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="brand-page">
      <Seo
        title="Brand | L&E Partners"
        description="The L&E Partners brand asset library: marks, wordmarks, colors, typography, and platform icons, with usage rules. Approved files for partner introductions, decks, email signatures, and partner-facing communications."
        path="/brand"
      />

      {/* 1. INTRO */}
      <section className="py-12 md:py-16 border-b border-border bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-3">Brand</p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-foreground mb-5">
                L<span className="text-primary">&amp;</span>E Partners brand assets
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Marks, wordmarks, colors, typography, and platform icons. Use the approved files below and follow the usage rules at the bottom of the page. The brand should feel quiet, precise, and trustworthy. It is the visual face of a thirty-year boutique relationship business; the design should never overshadow the people or the work.
              </p>
            </div>
            <div className="md:col-span-4 flex items-center justify-center md:justify-end">
              <span
                className="font-serif font-bold text-primary select-none leading-none"
                style={{ fontSize: "180px" }}
                aria-hidden="true"
                data-testid="ampersand-hero"
              >
                &amp;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THE AMPERSAND - signature glyph */}
      <section className="py-12 md:py-16 border-b border-border bg-muted/40">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div
              className="md:col-span-4 bg-white border border-border flex items-center justify-center"
              style={{ height: "200px" }}
            >
              <span
                className="font-serif font-bold text-primary select-none leading-none"
                style={{ fontSize: "140px" }}
                data-testid="ampersand-feature"
                aria-label="L&E Partners ampersand"
              >
                &amp;
              </span>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-2">Signature Glyph</p>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground leading-tight mb-3">The ampersand.</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                The ampersand at the heart of the L<span className="text-primary">&amp;</span>E Partners wordmark is the brand's most distinctive shorthand: Playfair Display, bold weight, in the L&amp;E gold. Use it on its own as a section divider, a watermark, or a single-glyph mark wherever the full wordmark would be too heavy. It carries the firm's identity without ever needing to introduce it.
              </p>
              <p className="text-xs font-mono text-muted-foreground/70 bg-white border border-border inline-block px-3 py-2">
                font-family: 'Playfair Display'; font-weight: 700; color: #CC9A14;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY MARKS */}
      <Section
        id="primary-marks"
        label="Primary Marks"
        title="The wordmark and icon."
        blurb="Use the wordmark in any context where space allows. Use the icon for compact and avatar contexts."
      >
        <AssetGrid>
          {primaryMarks.map((m) => <AssetCardView key={m.title} card={m} />)}
        </AssetGrid>
      </Section>

      {/* 3. WEB & APP ICONS */}
      <Section
        id="web-app-icons"
        label="Web & App Icons"
        title="Favicon and platform icons."
        blurb="Browser, mobile, and PWA exports. Small sizes render at native pixel dimensions."
      >
        <AssetGrid>
          {webAndAppIcons.map((m) => <AssetCardView key={m.title} card={m} />)}
        </AssetGrid>
      </Section>

      {/* 4. COLORS */}
      <Section
        id="colors"
        label="Colors"
        title="Approved palette."
        blurb="Click any tile to copy its hex value. Gold leads; navy carries; neutrals support."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COLORS.map((c) => <ColorSwatch key={c.hex} {...c} />)}
        </div>
        <p className="text-xs text-muted-foreground/70 font-light mt-6 max-w-3xl">
          Gold is the leading accent and the only color that should cross a navy field. Navy and white form the structural surfaces. Stone and slate are quiet neutrals used for section alternation and dividers, never as a hero color.
        </p>
      </Section>

      {/* 5. TYPOGRAPHY */}
      <Section
        id="typography"
        label="Typography"
        title="Two families. That's it."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <article className="border border-border bg-white p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3">Display / Headings</p>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "44px", lineHeight: 1.1 }} className="text-foreground mb-5">
              Playfair Display
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
              All page titles, section headlines, principal names, and editorial pull-quotes. Use weights 600 (semibold) and 400 (regular italic) only.
            </p>
            <p className="text-xs font-mono text-muted-foreground/70">font-family: 'Playfair Display', Georgia, serif</p>
          </article>

          <article className="border border-border bg-white p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3">Body / UI</p>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "32px", lineHeight: 1.2 }} className="text-foreground mb-5">
              Inter Regular &amp; Medium
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
              Body copy, navigation, eyebrows, form labels, and all UI surfaces. Use weights 400, 500, 600, and 700 only.
            </p>
            <p className="text-xs font-mono text-muted-foreground/70">font-family: Inter, sans-serif</p>
          </article>
        </div>
      </Section>

      {/* 6. USAGE RULES */}
      <Section
        id="usage-rules"
        label="Usage Rules"
        title="Do and don't."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <article className="border border-border bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <Check className="w-4 h-4 text-primary" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Do</p>
            </div>
            <ul className="space-y-3">
              {doRules.map((r, i) => (
                <li key={i} className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                  <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-border bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <AlertCircle className="w-4 h-4 text-foreground/60" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60 font-bold">Don't</p>
            </div>
            <ul className="space-y-3">
              {dontRules.map((r, i) => (
                <li key={i} className="text-sm text-foreground/80 font-light leading-relaxed flex gap-3">
                  <span className="w-1 h-1 bg-foreground/40 rounded-full mt-2 flex-shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      {/* 7. CONTACT / EXCEPTIONS */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-2">Contact / Exceptions</p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground leading-tight mb-3">
            Questions, press, or special usage.
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl">
            For partnerships, press inquiries, or any request that falls outside these rules, write to{" "}
            <a href="mailto:lori@l-epartners.com" className="text-primary hover:text-accent transition-colors">lori@l-epartners.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
