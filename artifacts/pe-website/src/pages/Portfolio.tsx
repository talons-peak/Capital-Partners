import { useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Building2, Globe, Shield } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

type Status = "All" | "Current" | "Realized";

const companies = [
  {
    name: "Aurelius Data Systems",
    sector: "Enterprise Technology",
    icon: <Globe className="w-5 h-5" />,
    status: "Realized",
    vintage: 2015,
    outcome: "4.2x MOIC",
    desc: "Transformed from a regional data management provider into a global infrastructure platform serving 340+ enterprise clients across 28 countries. Acquired by a strategic buyer in 2022.",
    highlights: ["340+ enterprise clients", "28 countries", "Acquired 2022"],
  },
  {
    name: "Meridian Health Partners",
    sector: "Healthcare Services",
    icon: <Shield className="w-5 h-5" />,
    status: "Current",
    vintage: 2020,
    outcome: "Active",
    desc: "Consolidating fragmented specialized care providers into a unified national network focused on musculoskeletal and orthopedic excellence. Currently operates 47 facilities across 12 states.",
    highlights: ["47 facilities", "12 states", "2,800 clinicians"],
  },
  {
    name: "Vanguard Precision Industrials",
    sector: "Advanced Industrials",
    icon: <Building2 className="w-5 h-5" />,
    status: "Current",
    vintage: 2019,
    outcome: "Active",
    desc: "Operational turnaround and strategic repositioning of a legacy aerospace component manufacturer. Refocused on next-generation defense platforms and commercial aviation.",
    highlights: ["Tier-1 defense supplier", "FAA/AS9100 certified", "35% margin improvement"],
  },
  {
    name: "Stratford Capital Management",
    sector: "Financial Services",
    icon: <BarChart3 className="w-5 h-5" />,
    status: "Realized",
    vintage: 2012,
    outcome: "3.7x MOIC",
    desc: "Built a leading wealth management platform through organic growth and 8 strategic acquisitions. Grew AUM from $2.1B to $18.4B over the hold period. IPO in 2019.",
    highlights: ["$18.4B AUM at exit", "8 acquisitions", "NYSE IPO 2019"],
  },
  {
    name: "Nexus Cloud Infrastructure",
    sector: "Enterprise Technology",
    icon: <Globe className="w-5 h-5" />,
    status: "Current",
    vintage: 2021,
    outcome: "Active",
    desc: "Building the connective tissue for enterprise AI deployment — managed infrastructure and workflow orchestration for Fortune 500 technology transformations.",
    highlights: ["$180M ARR", "93% gross retention", "72 enterprise customers"],
  },
  {
    name: "Helix Life Sciences",
    sector: "Healthcare Services",
    icon: <Shield className="w-5 h-5" />,
    status: "Realized",
    vintage: 2016,
    outcome: "5.1x MOIC",
    desc: "Contract research organization providing specialized clinical trial services to mid-size biotech. Expanded into decentralized trial capabilities and sold to a global CRO in 2023.",
    highlights: ["Sold 2023", "12 therapeutic areas", "Global CRO acquirer"],
  },
];

const sectorColors: Record<string, string> = {
  "Enterprise Technology": "text-blue-700 bg-blue-50 border-blue-100",
  "Healthcare Services": "text-emerald-700 bg-emerald-50 border-emerald-100",
  "Advanced Industrials": "text-amber-700 bg-amber-50 border-amber-100",
  "Financial Services": "text-violet-700 bg-violet-50 border-violet-100",
};

export default function Portfolio() {
  const [filter, setFilter] = useState<Status>("All");
  const filtered = filter === "All" ? companies : companies.filter((c) => c.status === filter);

  return (
    <div className="pt-24 selection:bg-primary selection:text-primary-foreground" data-testid="portfolio-page">

      {/* ── PAGE HERO ── */}
      <section className="py-24 md:py-32 border-b border-border bg-white">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Portfolio</p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-10 max-w-4xl">
            Partners in transformation.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            We invest in companies with exceptional management teams and identifiable paths to value creation — then stay involved long enough to see it through.
          </motion.p>
        </Reveal>
      </section>

      {/* ── SUMMARY STATS — navy strip ── */}
      <section className="bg-accent">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: "47", label: "Total Investments" },
              { value: "29", label: "Realizations" },
              { value: "3.8x", label: "Avg. Net MOIC" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className="py-10 px-8 flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-serif font-light text-primary mb-2">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FILTER + COMPANIES ── */}
      <section className="py-28 md:py-36 bg-muted" data-testid="companies-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {/* Filter */}
          <div className="flex gap-2 mb-14" data-testid="portfolio-filter">
            {(["All", "Current", "Realized"] as Status[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-testid={`filter-${f.toLowerCase()}`}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-semibold border transition-all duration-200 ${
                  filter === f
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground bg-white hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-border p-8 flex flex-col group hover:border-accent/30 hover:shadow-md transition-all duration-300"
                data-testid={`company-card-${i}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-10 h-10 flex items-center justify-center border rounded-sm ${sectorColors[c.sector]}`}>
                    {c.icon}
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 border font-semibold ${
                    c.status === "Realized"
                      ? "border-primary/40 text-primary bg-primary/5"
                      : "border-accent/20 text-accent/70 bg-accent/5"
                  }`}>
                    {c.status}
                  </span>
                </div>

                <h3 className="text-xl font-serif mb-1 text-foreground group-hover:text-accent transition-colors">{c.name}</h3>
                <p className={`text-[10px] uppercase tracking-widest font-semibold mb-5 ${sectorColors[c.sector].split(" ")[0]}`}>
                  {c.sector}
                </p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-1">{c.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {c.highlights.map((h) => (
                    <span key={h} className="text-[10px] bg-muted border border-border px-3 py-1 text-muted-foreground tracking-wide">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="pt-5 border-t border-border flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Vintage</p>
                    <p className="text-sm font-serif text-foreground">{c.vintage}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Outcome</p>
                    <p className="text-sm font-serif text-primary font-semibold">{c.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH QUOTE — Navy ── */}
      <section className="py-20 bg-accent">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Our Approach</p>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">We don't time markets. We build businesses.</h2>
            <p className="text-white/55 font-light leading-relaxed">
              Every investment represents a thesis — a specific, detailed belief about how operational improvement, strategic repositioning, or market expansion will drive value.
            </p>
          </motion.div>
        </Reveal>
      </section>
    </div>
  );
}
