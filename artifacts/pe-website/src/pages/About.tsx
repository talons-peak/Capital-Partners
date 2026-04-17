import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Building2, Globe, Shield, Target, Layers, TrendingUp, Users } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
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

function GoldLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-[2px] bg-primary" />
      <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">{children}</p>
    </div>
  );
}

const principles = [
  { icon: <Target className="w-6 h-6" />, title: "High Conviction", desc: "We make fewer, larger bets — concentrating capital where our proprietary insight is most pronounced." },
  { icon: <Layers className="w-6 h-6" />, title: "Operational Depth", desc: "Our value-creation teams embed alongside management to drive fundamental business transformation." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Sector Specialization", desc: "Each partner carries 20+ years of domain expertise, not generalist capital allocation." },
  { icon: <Users className="w-6 h-6" />, title: "Aligned Partnerships", desc: "We co-invest alongside management teams, ensuring complete alignment of interest and incentive." },
];

const sectors = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Enterprise Technology",
    tagline: "Infrastructure, not speculation",
    desc: "Mission-critical B2B software, data infrastructure, and specialized cyber-defense platforms. We target businesses that form the invisible backbone of the global economy — complex to build, nearly impossible to displace.",
    examples: ["ERP & workflow automation", "Data infrastructure & analytics", "Cybersecurity platforms", "Industry-specific SaaS"],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Advanced Industrials",
    tagline: "Manufacturing the future",
    desc: "Precision manufacturing, industrial automation, and specialized supply chain assets at the intersection of legacy industry and modern technology. We identify businesses where disciplined operational improvement creates substantial value.",
    examples: ["Aerospace components", "Process automation", "Defense manufacturing", "Specialty chemicals"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Healthcare Services",
    tagline: "At the nexus of care and capital",
    desc: "Tech-enabled healthcare services, specialized clinical providers, and life sciences infrastructure. We invest in businesses solving structural inefficiencies in healthcare delivery and outcomes.",
    examples: ["Specialty care platforms", "Healthcare technology", "Life sciences tools", "Patient access & RCM"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Financial Services",
    tagline: "Capital meets innovation",
    desc: "Specialty finance, wealth management platforms, and financial technology infrastructure. We focus on businesses benefiting from structural shifts in how capital is deployed, managed, and accessed.",
    examples: ["Specialty lending", "Wealth management platforms", "Insurance infrastructure", "Payments & settlement"],
  },
];

export default function About() {
  return (
    <div className="pt-24 selection:bg-primary selection:text-primary-foreground" data-testid="about-page">

      {/* ── PAGE HERO ── */}
      <section className="py-24 md:py-32 border-b border-border bg-white">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp}><GoldLabel>About L-E Partners</GoldLabel></motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-10 max-w-4xl">
            Conviction over consensus.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Founded in 1999, L-E Partners is a sector-focused private equity firm dedicated to creating lasting enterprise value through operational excellence and deep domain expertise.
          </motion.p>
        </Reveal>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-28 md:py-36 bg-muted" id="philosophy">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div variants={fadeInUp} className="lg:col-span-5">
              <GoldLabel>Investment Philosophy</GoldLabel>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">We build enduring value through asymmetric insight.</h2>
              <div className="mt-10 h-[1px] w-16 bg-border" />
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-6 lg:col-start-7 space-y-7 text-lg text-muted-foreground font-light leading-relaxed">
              <p>L-E Partners was founded on a singular premise: true value creation requires more than capital. It demands operational conviction, deep sector expertise, and the patience to execute multi-year strategic transformations.</p>
              <p>We do not participate in broad market cycles. Instead, we seek out complex, misunderstood, or transitioning assets where our unique operational toolkit unlocks disproportionate value for investors, management teams, and the businesses themselves.</p>
              <p>Our model is simple: make fewer investments, understand them more deeply, and stay involved longer. The result is a portfolio of businesses that are genuinely better companies because of our partnership — not just better-leveraged ones.</p>
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-28 md:py-36 bg-white border-t border-border">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-16">
            <GoldLabel>Core Principles</GoldLabel>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">How we work.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border border-border bg-white p-10 group hover:border-accent/30 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                data-testid={`principle-${i}`}
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                <div className="text-accent mb-6 group-hover:text-primary transition-colors">{p.icon}</div>
                <h3 className="text-2xl font-serif mb-3 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── TRACK RECORD — Navy dark strip ── */}
      <section className="py-28 md:py-36 bg-accent" id="track-record" data-testid="track-record-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Track Record</p>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">A legacy of compounding capital.</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { value: "$14.2B", label: "Assets Under Management" },
              { value: "25+", label: "Years of Excellence" },
              { value: "18", label: "Active Portfolio Companies" },
              { value: "32.4%", label: "Realized Gross IRR" },
              { value: "47", label: "Total Investments" },
              { value: "29", label: "Successful Exits" },
              { value: "3.8x", label: "Average Net MOIC" },
              { value: "$2.1B", label: "Capital Distributed" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-accent py-12 px-8 flex flex-col items-center justify-center text-center"
                data-testid={`metric-${i}`}
              >
                <div className="text-4xl md:text-5xl font-serif font-light text-primary mb-3">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="text-center text-xs text-white/25 mt-6 font-light tracking-wide">
            Past performance is not indicative of future results. Figures as of December 31, 2024.
          </motion.p>
        </Reveal>
      </section>

      {/* ── SECTORS ── */}
      <section className="py-28 md:py-36 bg-white" id="sectors" data-testid="sectors-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-16">
            <GoldLabel>Focus Areas</GoldLabel>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h2 className="text-4xl md:text-5xl font-serif max-w-2xl text-foreground">Specialized focus drives outsized returns.</h2>
              <p className="text-muted-foreground max-w-md font-light md:text-right">
                We direct our capital toward sectors where we possess proprietary insight and deep operational networks built over decades.
              </p>
            </div>
          </motion.div>

          <div className="space-y-px bg-border border border-border">
            {sectors.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white grid grid-cols-1 md:grid-cols-12 group hover:bg-muted/50 transition-colors"
                data-testid={`sector-detail-${i}`}
              >
                <div className="md:col-span-3 p-10 md:p-12 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
                  <div>
                    <div className="text-accent mb-5 group-hover:text-primary transition-colors">{s.icon}</div>
                    <h3 className="text-2xl font-serif mb-1 text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold">{s.tagline}</p>
                  </div>
                </div>
                <div className="md:col-span-5 p-10 md:p-12 md:border-r border-border">
                  <p className="text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                </div>
                <div className="md:col-span-4 p-10 md:p-12">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-semibold mb-5">Focus Areas</p>
                  <ul className="space-y-2">
                    {s.examples.map((ex, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground font-light">
                        <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
