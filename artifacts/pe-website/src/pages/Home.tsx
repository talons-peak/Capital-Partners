import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, BarChart3, Building2, Globe, Shield } from "lucide-react";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
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
  { icon: <Shield className="w-6 h-6" />, title: "Healthcare Services", desc: "Tech-enabled healthcare services and life sciences." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Financial Services", desc: "Specialty finance and wealth management platforms." },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div className="selection:bg-primary selection:text-primary-foreground">
      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background z-10" />
          <img
            src="/hero.png"
            alt="L-E Partners hero"
            className="w-full h-full object-cover object-center scale-110"
          />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center mt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-primary uppercase tracking-[0.35em] text-xs md:text-sm font-bold mb-8">
              Private Equity &amp; Strategic Capital
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-semibold leading-[0.88] tracking-tight mb-8"
            >
              Conviction.<br />
              <span className="text-foreground/40 italic font-normal">Capital.</span><br />
              Creation.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/65 font-light leading-relaxed mb-14"
            >
              We operate at the intersection of generational capital and strategic value creation — quietly extraordinary partnerships for the world's most vital enterprises.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/about" data-testid="hero-cta-about">
                <span className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-background transition-colors duration-300 cursor-pointer">
                  Our Philosophy <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/portfolio" data-testid="hero-cta-portfolio">
                <span className="inline-flex items-center gap-3 border border-white/25 text-white px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                  View Portfolio
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="w-[1px] h-14 bg-white/15 overflow-hidden relative">
            <motion.div
              className="w-full h-full bg-primary absolute top-0"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-white/8 bg-card" data-testid="stats-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="py-12 px-8 flex flex-col items-center justify-center text-center"
                data-testid={`stat-${i}`}
              >
                <div className="text-4xl md:text-5xl font-serif font-light text-primary mb-3">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground/50 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── BRIEF PHILOSOPHY ── */}
      <section className="py-28 md:py-36" data-testid="philosophy-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div variants={fadeInUp} className="lg:col-span-4">
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Investment Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                We build enduring value through asymmetric insight.
              </h2>
              <div className="mt-10 h-[1px] w-16 bg-primary/40" />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-7 lg:col-start-6 space-y-7 text-lg text-foreground/70 font-light leading-relaxed">
              <p>
                L-E Partners was founded on a singular premise: true value creation requires more than capital. It requires operational conviction, deep sector expertise, and the patience to execute long-term strategic transformations.
              </p>
              <p>
                We seek out complex, misunderstood, or transitioning assets where our operational toolkit unlocks disproportionate value. Our capital is permanent, our focus is absolute, and our partnerships are profound.
              </p>
              <Link href="/about" data-testid="philosophy-learn-more">
                <span className="inline-flex items-center gap-3 text-primary text-sm uppercase tracking-widest font-semibold group cursor-pointer mt-4">
                  <span className="w-10 h-[1px] bg-primary group-hover:w-16 transition-all duration-500" />
                  Learn More
                </span>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* ── SECTORS GRID ── */}
      <section className="bg-card border-t border-white/5 py-28 md:py-36" data-testid="sectors-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-14">
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Focus Areas</p>
            <h2 className="text-4xl md:text-5xl font-serif">Specialized focus drives outsized returns.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 border border-white/8">
            {sectors.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-card p-10 md:p-14 group hover:bg-white/[0.025] transition-colors relative overflow-hidden"
                data-testid={`sector-${i}`}
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                <div className="text-primary mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{s.icon}</div>
                <h3 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-foreground/55 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── PORTFOLIO CTA ── */}
      <section className="py-28 md:py-36 border-t border-white/5" data-testid="portfolio-cta-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Selected Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">Partners in transformation.</h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-foreground/60 font-light space-y-6">
              <p className="text-lg leading-relaxed">
                From enterprise technology to advanced industrials, our portfolio companies represent the highest-conviction opportunities we have identified across decades of sector expertise.
              </p>
              <Link href="/portfolio" data-testid="portfolio-cta-link">
                <span className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-background transition-colors duration-300 cursor-pointer">
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
