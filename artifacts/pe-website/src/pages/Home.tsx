import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, BarChart3, Building2, Globe, Shield } from "lucide-react";
import { Link } from "wouter";

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

const stats = [
  { value: "$14.2B", label: "Assets Under Management" },
  { value: "25+", label: "Years of Excellence" },
  { value: "18", label: "Active Portfolio Companies" },
  { value: "32.4%", label: "Realized Gross IRR" },
];

const sectors = [
  { icon: <Globe className="w-6 h-6" />, title: "Enterprise Technology", desc: "Mission-critical B2B software and data infrastructure." },
  { icon: <Building2 className="w-6 h-6" />, title: "Advanced Industrials", desc: "Precision manufacturing and industrial automation." },
  { icon: <Shield className="w-6 h-6" />, title: "Healthcare Services", desc: "Tech-enabled healthcare and life sciences infrastructure." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Financial Services", desc: "Specialty finance and wealth management platforms." },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  return (
    <div className="selection:bg-primary selection:text-primary-foreground">

      {/* ── HERO — Full-height editorial with boardroom image ── */}
      <section className="relative min-h-screen flex items-center pt-20" data-testid="hero-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

            {/* Left: Typography */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="py-16 lg:py-24"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px] bg-primary" />
                <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Private Equity &amp; Strategic Capital</p>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-7xl xl:text-8xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-8"
              >
                Conviction.<br />
                <em className="text-foreground/35 font-normal not-italic">Capital.</em><br />
                Creation.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-lg"
              >
                We operate at the intersection of generational capital and strategic value creation — quietly extraordinary partnerships for the world's most vital enterprises.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/about" data-testid="hero-cta-about">
                  <span className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                    Our Philosophy <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/portfolio" data-testid="hero-cta-portfolio">
                  <span className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer">
                    View Portfolio
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Boardroom image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative h-[520px] lg:h-[700px] overflow-hidden"
            >
              <motion.img
                src="/boardroom.png"
                alt="L-E Partners Boardroom"
                className="w-full h-full object-cover object-center"
                style={{ y: imgY }}
                data-testid="hero-image"
              />
              {/* Navy overlay band at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
              {/* Gold accent bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS — Navy strip ── */}
      <section className="bg-accent" data-testid="stats-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="py-12 px-8 flex flex-col items-center justify-center text-center"
                data-testid={`stat-${i}`}
              >
                <div className="text-4xl md:text-5xl font-serif font-light text-primary mb-3">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-28 md:py-36 bg-white" data-testid="philosophy-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div variants={fadeInUp} className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary" />
                <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Investment Philosophy</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">
                We build enduring value through asymmetric insight.
              </h2>
              <div className="mt-10 h-[1px] w-16 bg-border" />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-6 lg:col-start-7 space-y-7 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                L-E Partners was founded on a singular premise: true value creation requires more than capital. It requires operational conviction, deep sector expertise, and the patience to execute long-term strategic transformations.
              </p>
              <p>
                We seek out complex, misunderstood, or transitioning assets where our unique operational toolkit unlocks disproportionate value for investors, management teams, and the businesses themselves.
              </p>
              <Link href="/about" data-testid="philosophy-learn-more">
                <span className="inline-flex items-center gap-3 text-accent text-sm uppercase tracking-widest font-bold group cursor-pointer mt-4 hover:text-primary transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* ── BOARDROOM FULL-BLEED — context section ── */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden" data-testid="boardroom-section">
        <img
          src="/boardroom.png"
          alt="L-E Partners executive environment"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-accent/75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6">Est. 1999</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                "We do not participate in broad market cycles. We build exceptional businesses."
              </h2>
              <p className="mt-6 text-white/60 text-sm font-light tracking-widest uppercase">Jonathan Sterling — Managing Partner</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTORS GRID ── */}
      <section className="py-28 md:py-36 bg-muted" data-testid="sectors-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Focus Areas</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Specialized focus drives outsized returns.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-10 md:p-12 group border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                data-testid={`sector-${i}`}
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                <div className="text-accent mb-6 group-hover:text-primary transition-colors">{s.icon}</div>
                <h3 className="text-2xl font-serif mb-3 text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── PORTFOLIO CTA ── */}
      <section className="py-28 md:py-36 bg-white border-t border-border" data-testid="portfolio-cta-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary" />
                <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Selected Portfolio</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">Partners in transformation.</h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-muted-foreground font-light space-y-6">
              <p className="text-lg leading-relaxed">
                From enterprise technology to advanced industrials, our portfolio represents the highest-conviction opportunities identified across decades of sector expertise.
              </p>
              <Link href="/portfolio" data-testid="portfolio-cta-link">
                <span className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                  View All Portfolio Companies <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
