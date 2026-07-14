import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";

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
  "A current, recently exited, or retired CEO, President, COO, CFO, or chairperson",
  "A business owner",
  "A board director",
  "An advisor or consultant who is well-connected within an industry",
];

export default function ForExecutives() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="for-executives-page">
      <Seo
        title="For Executives | L&E Partners"
        description="L&E Partners works with senior operating executives - chairpersons, CEOs, presidents, COOs, CFOs, board directors, and advisors - exploring leadership opportunities with private equity-backed companies. Every conversation held in strict confidence; no resume required to begin."
        path="/services/executives"
      />

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
          <motion.p variants={fadeInUp} className="text-xl text-foreground/85 font-light leading-relaxed">
            <strong className="font-semibold">We look for entrepreneurial professionals with vision, skill, and proven experience in building businesses who are interested in exploring leadership and board opportunities with the private equity community.</strong>
          </motion.p>
        </Reveal>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="relative h-[280px] md:h-[380px] overflow-hidden" data-testid="hero-image-section">
        <img src="/le/hero-executives-meeting.jpg" alt="" className="w-full h-full object-cover object-top" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
      </section>

      {/* ── CANDIDATE TYPES ── */}
      <section className="py-16 md:py-24 bg-white" data-testid="candidate-types-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-foreground mb-12">
            These executives may be:
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
              Keeping our clients' interests in mind at all times, the L&amp;E Partners team collaborates with such executives to develop a customized set of private equity firms for introduction.
            </p>
            <p>
              We prepare our executives with an in-depth understanding of the cultures of select private equity firms and their specific investment criteria, as well as their respective internal processes. Our continuous hands-on involvement and follow-up ensure that promising relationships have the highest likelihood of being realized.
            </p>
          </motion.div>
        </Reveal>
      </section>

      {/* ── CTA - navy ── */}
      <section className="py-16 md:py-20 bg-accent" data-testid="cta-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
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
