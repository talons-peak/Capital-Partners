import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ImageIcon } from "lucide-react";
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

// NOTE: Page copy is a placeholder — L&E feedback (April 2026) only specified
// "Change layout to fully vertical" and "Change photo" for this page; final copy
// is pending from L&E. Replace the body copy below when received.

export default function ForExecutives() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="for-executives-page">

      {/* ── PAGE HERO ── */}
      <section className="py-24 md:py-32 border-b border-border bg-white">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Services</p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-10">
            For Executives.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-foreground/85 font-light leading-relaxed">
            <strong className="font-semibold">L&amp;E Partners introduces senior operating executives to private equity firms — for new and existing portfolio companies, investment thesis development, and opportunities being diligenced.</strong>
          </motion.p>
        </Reveal>
      </section>

      {/* ── PHOTO PLACEHOLDER ── */}
      <section className="py-16 md:py-24 bg-muted" data-testid="photo-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            className="relative aspect-[16/9] bg-muted-foreground/10 border border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted-foreground/70"
          >
            <ImageIcon className="w-10 h-10" />
            <p className="text-xs uppercase tracking-widest font-semibold">Photo placeholder — pending from L&amp;E</p>
          </motion.div>
        </Reveal>
      </section>

      {/* ── PLACEHOLDER COPY ── */}
      <section className="py-24 md:py-32 bg-white" data-testid="copy-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeInUp} className="space-y-7 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              We work with proven operating executives — current and emerging C-level leaders, operating partners, board directors, and senior advisors — who bring deep industry expertise to private equity-backed platforms.
            </p>
            <p>
              For senior executives entering a transition phase of their careers, we offer a long-term partnership: a confidential conversation, a careful read of where your skills fit best, and patient introductions to private equity clients whose portfolios match your sector and your stage.
            </p>
            <p>
              We do not push transactions. We make introductions where there is real conviction on both sides — and the resulting partnerships speak for themselves.
            </p>
            <p className="text-sm italic text-muted-foreground/60 pt-4 border-t border-border">
              Note: final copy for this page pending from L&amp;E.
            </p>
          </motion.div>
        </Reveal>
      </section>

      {/* ── CTA — navy ── */}
      <section className="py-24 bg-accent" data-testid="cta-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-white mb-8">
            Interested in connecting?
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link href="/contact" data-testid="cta-link">
              <span className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-accent transition-colors duration-300 cursor-pointer">
                Contact L&amp;E Partners <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </div>
  );
}
