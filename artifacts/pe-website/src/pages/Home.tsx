import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
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

const clientTestimonials = [
  {
    quote:
      "Thank you for everything. You guys are great — we never would have made this work without you.",
    attribution: "Managing Director, Middle-Market Private Equity Firm",
  },
  {
    quote:
      "L&E delivered the exact operating partner we needed in a market where everyone says they can but few actually do.",
    attribution: "Partner, Healthcare-Focused Buyout Fund",
  },
];

const executiveTestimonials = [
  {
    quote:
      "Lori and her team understood my background, my motivations, and the kind of platform that would let me do my best work. The match was exceptional.",
    attribution: "Chief Executive Officer, PE-Backed Industrial Platform",
  },
  {
    quote:
      "L&E doesn't push transactions. They make introductions where there's real conviction on both sides — that's a rare thing in this market.",
    attribution: "Operating Partner, Specialty Finance",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  return (
    <div className="selection:bg-primary selection:text-primary-foreground">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-28" data-testid="hero-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

            <motion.div initial="hidden" animate="visible" variants={stagger} className="py-16 lg:py-24">
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
                We introduce industry-specific executives to private equity firms — for new and existing portfolio companies, investment thesis development, and opportunities being diligenced.
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
              className="relative h-[520px] lg:h-[700px] overflow-hidden"
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
      <section className="py-28 md:py-36 bg-white" data-testid="intro-section">
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

      {/* ── PULL QUOTE FULL-BLEED ── */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden" data-testid="pullquote-section">
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

      {/* ── CLIENT TESTIMONIALS ── */}
      <section className="py-24 md:py-32 bg-white" data-testid="client-testimonials-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Client Testimonials</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-2xl">From the private equity firms we serve.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientTestimonials.map((t, i) => (
              <motion.figure
                key={i}
                variants={fadeInUp}
                className="bg-muted/40 border border-border p-10 md:p-12 relative"
                data-testid={`client-testimonial-${i}`}
              >
                <Quote className="w-6 h-6 text-primary mb-6" />
                <blockquote className="text-lg text-foreground/90 font-light leading-relaxed font-serif italic">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  — {t.attribution}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── EXECUTIVE TESTIMONIALS — navy strip ── */}
      <section className="py-24 md:py-32 bg-accent" data-testid="executive-testimonials-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Executive Testimonials</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white max-w-2xl">From the operators we've placed.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {executiveTestimonials.map((t, i) => (
              <motion.figure
                key={i}
                variants={fadeInUp}
                className="border border-white/10 bg-white/5 p-10 md:p-12"
                data-testid={`executive-testimonial-${i}`}
              >
                <Quote className="w-6 h-6 text-primary mb-6" />
                <blockquote className="text-lg text-white/85 font-light leading-relaxed font-serif italic">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 text-xs uppercase tracking-widest text-white/50 font-semibold">
                  — {t.attribution}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-white border-t border-border" data-testid="cta-section">
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
