import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const offers = [
  "The ability to partner with industry-specific executives to develop strategies and identify target acquisitions for new portfolio company investments.",
  "The opportunity to meet industry and sector-specific talent to assist with investment thesis development, due diligence, and prospective targeted platform acquisitions resulting in proprietary deal introductions.",
  "The leadership required to work on existing in-house investment opportunities, particularly those lacking backable management.",
];

const roles = [
  "Advisors and Consultants",
  "Chairpersons and C-level Executives (Chief Executive Officer, Chief Financial Officer, Chief Operating Officer, President, et al.)",
  "Operating Partners",
  "Executive Vice Presidents / Senior Vice Presidents",
  "Board Directors",
  "Other portfolio company management searches as required and requested by our clients",
];

const drivers = [
  "Actionable initiatives that require the timely identification of qualified and proven leaders with market sector knowledge and skills to move a transaction forward",
  "Industry leaders with defined and actionable business plans",
  "The directives of our clients in their continuously changing subsectors of key interest",
];

// NOTE: representative searches are illustrative placeholders to communicate
// shape of work. L&E to replace with real anonymized engagements at their
// discretion.
const representativeSearches = [
  {
    role: "Chief Executive Officer",
    sector: "Healthcare Services",
    context: "Mid-market PE-backed specialty care platform; new-investment leadership",
  },
  {
    role: "President & Chief Operating Officer",
    sector: "Industrial / Manufacturing",
    context: "Recapitalization of a precision components manufacturer; lower-middle-market sponsor",
  },
  {
    role: "Operating Partner",
    sector: "Consumer Products",
    context: "Thesis development and platform identification for a generalist PE fund",
  },
  {
    role: "Executive Chairman",
    sector: "Financial Services",
    context: "Specialty finance carve-out from a public parent; growth-equity sponsor",
  },
  {
    role: "Chief Financial Officer",
    sector: "Healthcare",
    context: "Post-acquisition value-creation appointment; sponsor-led integration",
  },
  {
    role: "Independent Board Director",
    sector: "Cleantech / Industrial",
    context: "Independent director for a venture-funded grid-infrastructure platform",
  },
  {
    role: "Executive-in-Residence",
    sector: "Industrial",
    context: "Industry-sector sourcing partnership with a middle-market buyout firm",
  },
  {
    role: "Senior Advisor",
    sector: "Consumer Products",
    context: "Long-term strategic advisor to a PE-backed multi-brand portfolio company",
  },
];

export default function ForPrivateEquity() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="for-pe-page">

      {/* ── PAGE HERO ── */}
      <section className="py-16 md:py-24 border-b border-border bg-white">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Services</p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-8">
            For Private Equity Firms.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-foreground/85 font-light leading-relaxed">
            <strong className="font-semibold">L&amp;E Partners consistently brings value to private equity firms by introducing qualified, high-caliber, C-level executives with industry specialization who can help move businesses forward.</strong>
          </motion.p>
        </Reveal>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="relative h-[280px] md:h-[380px] overflow-hidden" data-testid="hero-image-section">
        <img src="/le/hero-pe.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
      </section>

      {/* ── WHAT THESE INTRODUCTIONS OFFER ── */}
      <section className="py-16 md:py-24 bg-white" data-testid="offers-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-foreground mb-10">
            These introductions offer PE firms:
          </motion.h2>

          <ul className="space-y-6">
            {offers.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex gap-5 items-start text-lg text-muted-foreground font-light leading-relaxed"
                data-testid={`offer-${i}`}
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── METHODOLOGY + ROLES ── */}
      <section className="py-16 md:py-24 bg-muted" data-testid="methodology-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
            Our refined executive search methodology of identifying operating executives, particularly those entering a transition phase of their careers, allows us to continuously generate and introduce to our private equity clients top-tier industry executives, including:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 border-l-2 border-primary pl-8">
            {roles.map((role, i) => (
              <li
                key={i}
                className="text-lg text-foreground/85 font-light leading-relaxed"
                data-testid={`role-${i}`}
              >
                {role}
              </li>
            ))}
          </motion.ul>
        </Reveal>
      </section>

      {/* ── REPRESENTATIVE SEARCHES ── */}
      <section className="py-16 md:py-24 bg-white" data-testid="representative-searches-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Representative Searches</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
              The shape of the work.
            </h2>
            <p className="text-muted-foreground font-light mt-4 leading-relaxed">
              A sample of recent engagements, anonymized — every search is bespoke to the sponsor and the thesis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {representativeSearches.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-7 md:p-8"
                data-testid={`search-${i}`}
              >
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{s.sector}</p>
                <h3 className="text-xl font-serif text-foreground mb-3">{s.role}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.context}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── INTRODUCTIONS ARE DRIVEN BY ── */}
      <section className="py-16 md:py-24 bg-muted" data-testid="drivers-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-foreground mb-10">
            Our introductions are driven by:
          </motion.h2>

          <ul className="space-y-6">
            {drivers.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex gap-5 items-start text-lg text-muted-foreground font-light leading-relaxed"
                data-testid={`driver-${i}`}
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── CTA — navy ── */}
      <section className="py-16 md:py-20 bg-accent" data-testid="cta-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to discuss a search?
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
