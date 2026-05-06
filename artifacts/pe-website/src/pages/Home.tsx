import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Quote, Building2, HeartPulse, Landmark, ShoppingBag, Leaf, Handshake, Hourglass, Target } from "lucide-react";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
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

// Verbatim from l-epartners.com - mix of PE-firm clients and placed executives.
const testimonials = [
  {
    quote: "Thank you for everything… you guys are great…we never would have made this work without you.",
    attribution: "CEO of a healthcare company that received growth equity from a PE fund introduced by L&E",
  },
  {
    quote: "Really great to work with the two of you. Keep thinking.",
    attribution: "CoFounder / Partner - PE client that invested in a company brought to its attention by L&E",
  },
  {
    quote: "Hope you have gotten off to a good start this year… we love your guys.",
    attribution: "Managing Director - PE Client",
  },
  {
    quote: "You two are terrific!",
    attribution: "Operating Partner placed by L&E",
  },
  {
    quote: "Thanks again for organizing a very full schedule. Thanks for all your…",
    attribution: "Executive Chairman placed by L&E",
  },
  {
    quote: "I am truly impressed with your efforts on my behalf. I appreciate the…",
    attribution: "Executive-in-Residence placed by L&E",
  },
  {
    quote: "I always appreciate hearing from you, and your update was comprehensive…",
    attribution: "CEO",
  },
  {
    quote: "I enjoyed meeting you both and understanding your business model. I see…",
    attribution: "CEO",
  },
];

const sectors = [
  { icon: <HeartPulse className="w-5 h-5" />, label: "Healthcare" },
  { icon: <Building2 className="w-5 h-5" />, label: "Industrial" },
  { icon: <Landmark className="w-5 h-5" />, label: "Financial Services" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Consumer Products" },
  { icon: <Leaf className="w-5 h-5" />, label: "Cleantech" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  return (
    <div className="selection:bg-primary selection:text-primary-foreground">

      {/* ── HERO ── */}
      <section className="relative flex items-center pt-28 pb-12 md:pb-16" data-testid="hero-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">

            <motion.div initial="hidden" animate="visible" variants={stagger} className="py-10 lg:py-16">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px] bg-primary" />
                <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Executive Search for Private Equity</p>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl xl:text-7xl font-serif font-semibold leading-[0.95] tracking-tight text-foreground mb-8"
              >
                Leadership where it matters most.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-lg"
              >
                Markets shift and transform - but business remains driven by one thing: human talent. At L&amp;E Partners, our job is to facilitate mutually beneficial introductions that connect our private equity clients with high-caliber executives who can create value within our clients' new and existing investments.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/services/private-equity" data-testid="hero-cta-pe">
                  <span className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                    For Private Equity Firms <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/services/executives" data-testid="hero-cta-executives">
                  <span className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer">
                    For Executives
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
              className="relative h-[440px] lg:h-[600px] overflow-hidden"
            >
              <motion.img
                src="/le/hero-home.jpg"
                alt="L&E Partners"
                className="w-full h-full object-cover object-center"
                style={{ y: imgY }}
                data-testid="hero-image"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO COPY (per L&E feedback) ── */}
      <section className="py-16 md:py-24 bg-white" data-testid="intro-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div variants={fadeInUp} className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary" />
                <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Who We Are</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">
                Exclusive to and on retainer with the private equity community.
              </h2>
              <div className="mt-10 h-[1px] w-16 bg-border" />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-7 lg:col-start-6 space-y-7 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                L&amp;E Partners is an executive search firm exclusive to and on retainer with the private equity community, assisting our clients with the introduction of industry-specific executives as per their new and existing portfolio companies, as well as investment thesis development and specific opportunities being diligenced. Our objective is to create and nurture the right interactions that ultimately can lead to maximum investment returns.
              </p>
              <p>
                Collectively, the principals of L&amp;E Partners have cultivated long-term relationships that unite talented, backable CEOs with private equity-driven acquisition strategies. Our success is rooted in providing private equity firms with proven operating executives to confidently invest in new and existing portfolio companies. With these talented operators at their side, our clients are better equipped to source, diligence, and transact new investments.
              </p>
              <p>
                Our approach encompasses a highly focused recruitment process driven by a thorough understanding of diverse industry sectors and an intricate working knowledge of private equity processes. This perspective has made us a unique and dedicated resource for private equity firms looking to expand their reach into the corporate ranks, recognizing the value created by aligning themselves with qualified operating executives.
              </p>
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* ── DUAL AUDIENCE CARDS ── */}
      <section className="py-16 md:py-20 bg-muted" data-testid="audience-cards-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <Link href="/services/private-equity" data-testid="audience-card-pe">
                <div className="bg-white border border-border p-10 md:p-12 group hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                  <div className="w-8 h-[2px] bg-primary mb-6" />
                  <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">For Private Equity Firms</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6 leading-tight">
                    Qualified, high-caliber, C-level industry experts.
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    L&amp;E Partners consistently brings value to private equity firms by introducing C-level executives with industry specialization who can help move businesses forward.
                  </p>
                  <span className="inline-flex items-center gap-3 text-accent text-xs uppercase tracking-widest font-bold group-hover:text-primary transition-colors">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/services/executives" data-testid="audience-card-executives">
                <div className="bg-white border border-border p-10 md:p-12 group hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                  <div className="w-8 h-[2px] bg-primary mb-6" />
                  <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">For Executives</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6 leading-tight">
                    Entrepreneurial professionals with creative vision.
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    L&amp;E Partners looks for entrepreneurial professionals with creative vision, skill, and proven experience within specific industry sectors.
                  </p>
                  <span className="inline-flex items-center gap-3 text-accent text-xs uppercase tracking-widest font-bold group-hover:text-primary transition-colors">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* ── WHY L&E ── */}
      <section className="py-16 md:py-24 bg-white" data-testid="why-le-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Why L&amp;E</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              Relationships, not transactions.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              At the C-suite level, the difference between a placement that lasts and one that doesn't comes down to fit, timing, and trust - and those are cultivated over years, not deals. Executive search at this level is not a matching service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Handshake className="w-6 h-6" />,
                title: "Decades-long relationships",
                desc: "We've known many of the operating executives in our network for a decade or more, and we work with the same private equity sponsors across multiple searches and multiple years.",
              },
              {
                icon: <Hourglass className="w-6 h-6" />,
                title: "Timing matters",
                desc: "We don't push placements to close a transaction. The right operator and the right sponsor sometimes need to wait for the right thesis - and we wait with them.",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Fit is everything",
                desc: "Our success is measured by how well placements stick - by the executives who go on to build the businesses, not by the number of introductions made.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-muted/40 border border-border p-8 md:p-10"
                data-testid={`why-pillar-${i}`}
              >
                <div className="text-primary mb-5">{p.icon}</div>
                <h3 className="text-xl font-serif text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 50 YEARS BAND ── */}
      <section className="bg-accent border-y border-white/10" data-testid="legacy-band">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl py-14 md:py-16">
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left">
              <p className="text-6xl md:text-7xl font-serif font-light text-primary leading-none">50+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/55 font-bold mt-3">Years of Combined Relationships</p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                The principals of L&amp;E Partners have spent decades cultivating the network of operating executives we introduce to our private equity clients today - relationships that are the foundation of every successful placement.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </section>

      {/* ── PULL QUOTE FULL-BLEED ── */}
      <section className="relative h-[340px] md:h-[420px] overflow-hidden" data-testid="pullquote-section">
        <img src="/le/hero-pe.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-accent/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6">Est. 2010</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                "Partnerships are grown, not born."
              </h2>
              <p className="text-white/55 text-sm uppercase tracking-widest mt-6 font-semibold">
                The L&amp;E Partners ethos
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="py-16 md:py-24 bg-white" data-testid="sectors-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Industry Coverage</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-2xl">
              We work across all industry sectors.
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mt-6 text-lg">
              The principals of L&amp;E Partners have built leadership teams across publicly traded, private equity-backed, and venture-funded companies - with particular depth in the sectors below.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border">
            {sectors.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 flex flex-col items-center justify-center text-center gap-3"
                data-testid={`sector-${i}`}
              >
                <div className="text-primary">{s.icon}</div>
                <p className="text-sm font-serif text-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </Reveal>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 bg-muted" data-testid="testimonials-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-14 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">In Their Words</p>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
              Our services have been utilized by many private equity firms and CEOs - both groups clearly recognizing our value.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                variants={fadeInUp}
                className="bg-white border border-border p-8 flex flex-col"
                data-testid={`testimonial-${i}`}
              >
                <Quote className="w-5 h-5 text-primary mb-5" />
                <blockquote className="text-base text-foreground/85 font-light leading-relaxed font-serif italic flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground font-semibold leading-snug">
                  - {t.attribution}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-white border-t border-border" data-testid="cta-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary" />
                <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Get in Touch</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">Let's start a conversation.</h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-muted-foreground font-light space-y-6">
              <p className="text-lg leading-relaxed">
                Whether you're a private equity firm looking for the right operating executive or a senior leader exploring your next chapter, we'd welcome the opportunity to talk.
              </p>
              <Link href="/contact" data-testid="cta-link">
                <span className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
