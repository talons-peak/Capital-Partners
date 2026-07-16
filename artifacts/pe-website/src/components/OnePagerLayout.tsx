import { Link } from "wouter";
import { ArrowLeft, Download } from "lucide-react";
import { Seo } from "@/components/Seo";
import { TEAM, ADDRESS, SECTORS, type OnePager } from "@/content/onePagers";

// Screen + print shell for a single one-pager sheet. The whole page is designed
// to fit one Letter page; the print rules live in index.css under @media print.
// No framer-motion reveals here on purpose: those start at opacity:0 until
// scrolled into view and would print blank.

function SectionHeading({ children }: { children: string }) {
  return <p className="op-eyebrow text-primary uppercase tracking-[0.18em] font-bold mb-1.5">{children}</p>;
}

export default function OnePagerLayout({ data }: { data: OnePager }) {
  return (
    <div className="op-screen min-h-screen bg-muted/40 pt-28 pb-10 print:bg-white">
      {/* Controls - screen only */}
      <div className="op-controls mx-auto max-w-[8.5in] px-4 mb-5 flex items-center justify-between print:hidden">
        <Link href="/" data-testid="op-back">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> Back to site
          </span>
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          data-testid="op-download"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>

      <Seo title={data.seoTitle} description={data.seoDescription} path={`/one-pager/${data.slug}`} />

      <article className="op-sheet mx-auto bg-white text-foreground" data-testid={`one-pager-${data.slug}`}>
        {/* Masthead */}
        <header className="flex items-end justify-between">
          <img src="/brand/logo/wordmark-light.svg" alt="L&E Partners" className="op-wordmark w-auto" />
          <p className="op-eyebrow text-primary uppercase tracking-[0.22em] font-bold">{data.eyebrow}</p>
        </header>
        <div className="op-rule bg-primary mt-3" />

        {/* Title + lead */}
        <h1 className="op-title font-serif font-semibold leading-[1.08] tracking-tight mt-5">{data.title}</h1>
        <p className="op-lead font-medium text-foreground/90 leading-snug mt-3">{data.lead}</p>

        {/* Body blocks - fixed order; each sheet fills only what it needs */}
        <div className="op-body mt-5 space-y-4">
          {data.bullets && (
            <section className="op-block">
              <SectionHeading>{data.bullets.heading}</SectionHeading>
              <ul className="op-list grid grid-cols-1 gap-x-8 gap-y-1">
                {data.bullets.items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start leading-snug text-foreground/85">
                    <span className="op-dot bg-primary rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {data.paragraphs && (
            <section className="op-block">
              <SectionHeading>{data.paragraphs.heading}</SectionHeading>
              <div className="space-y-2 leading-snug text-foreground/85">
                {data.paragraphs.items.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          )}

          {data.pillars && (
            <section className="op-block">
              <SectionHeading>{data.pillars.heading}</SectionHeading>
              <div className="grid grid-cols-3 gap-6">
                {data.pillars.items.map((p, i) => (
                  <div key={i}>
                    <h3 className="op-pillar-title font-serif text-foreground leading-tight mb-1">{p.title}</h3>
                    <p className="op-fine text-foreground/70 leading-snug">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.roles && (
            <section className="op-block">
              <SectionHeading>{data.roles.heading}</SectionHeading>
              <ul className="op-list grid grid-cols-2 gap-x-8 gap-y-1">
                {data.roles.items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start leading-snug text-foreground/85">
                    <span className="op-dot bg-primary rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {data.searches && (
            <section className="op-block">
              <SectionHeading>{data.searches.heading}</SectionHeading>
              <div className="grid grid-cols-3 gap-6">
                {data.searches.items.map((s, i) => (
                  <div key={i}>
                    <p className="op-micro text-primary uppercase tracking-widest font-bold">{s.sector}</p>
                    <h3 className="op-pillar-title font-serif text-foreground leading-tight mb-1">{s.role}</h3>
                    <p className="op-fine text-foreground/70 leading-snug">{s.context}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.sectors && (
            <section className="op-block">
              <SectionHeading>{data.sectors.heading}</SectionHeading>
              <ul className="op-sectors flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground/85">
                {SECTORS.map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    {i > 0 && <span className="op-sep bg-primary/60 rounded-full" aria-hidden="true" />}
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {data.note && (
            <p className="op-note border-l-2 border-primary pl-3 italic text-foreground/70 leading-snug">{data.note}</p>
          )}
        </div>

        {/* Contact band */}
        <footer className="op-contact bg-accent text-white mt-6">
          <div className="grid grid-cols-3 gap-6">
            {TEAM.map((p) => (
              <div key={p.email}>
                <p className="op-contact-name font-serif leading-tight">{p.name}</p>
                <p className="op-micro text-primary uppercase tracking-widest font-bold mt-0.5">{p.title}</p>
                <div className="op-fine text-white/75 mt-1.5 space-y-0.5">
                  <p>Office {p.office}</p>
                  <p>Mobile {p.mobile}</p>
                  <p>{p.email}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="op-fine text-white/55 mt-4 pt-3 border-t border-white/15 flex flex-wrap justify-between gap-2">
            <span>{ADDRESS.join(", ")}</span>
            <span>l-epartners.com</span>
          </div>
        </footer>
      </article>
    </div>
  );
}
