import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
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

const candidateTypes = [
  "An existing, recently departed, or retired chairperson, CEO, President, COO, or CFO",
  "A business owner / manager",
  "A board director",
  "An advisor or consultant who is well-connected within an industry",
];

export default function ForExecutives() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="for-executives-page">

      {/* ── PAGE HERO ── */}
      <section className="py-12 md:py-20 border-b border-border bg-white">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Services</p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-10">
            For Executives.
          </motion.h1>
          <motion.blockquote variants={fadeInUp} className="text-xl text-foreground/85 font-light leading-relaxed font-serif italic border-l-2 border-primary pl-6">
            "We look for entrepreneurial professionals with creative vision, skill, and proven experience in building businesses who are interested in exploring leadership opportunities with the private equity community."
          </motion.blockquote>
        </Reveal>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="relative h-[280px] md:h-[380px] overflow-hidden" data-testid="hero-image-section">
        <img src="/le/hero-executives.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
      </section>

      {/* ── CANDIDATE TYPES ── */}
      <section className="py-16 md:py-24 bg-white" data-testid="candidate-types-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-foreground mb-12">
            These entrepreneurs may be:
          </motion.h2>

          <ul className="space-y-6">
            {candidateTypes.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex gap-5 items-start text-lg text-muted-foreground font-light leading-relaxed"
                data-testid={`candidate-type-${i}`}
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── HOW WE COLLABORATE ── */}
      <section className="py-16 md:py-24 bg-muted" data-testid="collaboration-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeInUp} className="space-y-7 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              The L&amp;E Partners team collaborates with entrepreneurs to evaluate proprietary investment opportunities and develop strategic approaches toward private equity participation.
            </p>
            <p>
              The firm provides in-depth understanding of private equity cultures, investment criteria, and internal processes, with continuous involvement ensuring successful relationship development.
            </p>
          </motion.div>
        </Reveal>
      </section>

      {/* ── CONFIDENTIALITY ── */}
      <section className="py-14 md:py-20 bg-white border-t border-border" data-testid="confidentiality-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeInUp} className="flex gap-6 items-start">
            <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-3">Discretion Is the Default</p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Many of the executives we speak with are still in seat. Every conversation we have is held in strict confidence. There is no obligation, no formal application, and no résumé required to begin a dialogue — just a quiet introduction and a careful read of where your experience might fit.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </section>

      {/* ── CTA — navy ── */}
      <section className="py-16 md:py-20 bg-accent" data-testid="cta-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-white mb-4">
            Start a confidential conversation.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60 font-light mb-10 max-w-xl mx-auto">
            A short note is enough — we'll take it from there.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact" data-testid="cta-link">
              <span className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-accent transition-colors duration-300 cursor-pointer">
                Reach Out in Confidence <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </div>
  );
}
