import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
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

const offers = [
  "The opportunity to meet industry and sector-specific talent to assist with investment thesis development ahead of an investment transaction in the market.",
  "The ability to partner with proven industry and sector-specific operators to assist with specific transaction due diligence, increasing the likelihood of a successful transaction.",
  "The leadership required to work on existing in-house investment opportunities, particularly those lacking backable management.",
  "A stable of backable industry-specific C-suite executives and board directors.",
  "The introductions made not only provide expertise pre-deal, but are also considered to be board candidates should the acquisition move forward.",
];

const roles = [
  "Advisors and Consultants",
  "Board Directors",
  "Chairpersons and C-level Executives",
  "Operating Partners",
  "Other portfolio company management searches as required and requested by our clients",
];

// Representative Searches: real anonymized engagements supplied by L&E in the
// June 2026 feedback document.
const representativeSearches = [
  {
    sector: "Industrial Distribution",
    role: "Chief Executive Officer",
    context: "Retained to identify a Chief Executive Officer for an acquired B2B distribution business that had been previously run by the founding family. Required experience included prior success leading, growing, and successfully exiting an acquisitive PE-backed company, and the ability to work with the prior CEO / founding family member.",
  },
  {
    sector: "Consumer Products",
    role: "Chief Executive Officer",
    context: "Retained to identify a Chief Executive Officer for a leading horticulture products company. Identified the chosen candidate who brought significant experience from the organic food sector and thus understood the environmental importance of organic products and the mindset of consumers that buy organic products. This placement led to additional search engagements both for the private equity owner's other portfolio companies as well as for other senior leadership executives for this company, hired by and working alongside the placed CEO.",
  },
  {
    sector: "Logistics",
    role: "Senior Operating Executive",
    context: "Asked by a sector-focused private equity firm to identify a Senior Operating Executive with deep expertise in transportation and logistics who would be interested to serve as an Operating Partner to the firm, helping to drive value creation across the portfolio, including serving as Chairman and Board Director within multiple portfolio companies, and assist with new portfolio company identification and diligence. The placed executive brings over 25 years of leadership experience in the transportation and logistics industry, including as the former CEO of a publicly traded, Fortune 500, leading third-party logistics company.",
  },
  {
    sector: "Tech-Enabled Services",
    role: "Board Director",
    context: "Retained to identify a Diligence Advisor and potential Board Director for a private equity client as per their evaluation of an investment in a tech-enabled services business. During the process, we introduced the former CIO of a Fortune 50 company, who eventually joined this client as an Operating Advisor. We also met the retired Global CTO of a Fortune 50 company whom we later introduced to another client who then appointed him to the Board of their portfolio company, also a tech-enabled services company. This Board Director has been credited with helping the portfolio company close the deal to bring on a new client, the company's largest to date.",
  },
  {
    sector: "Healthcare",
    role: "Operating Partner",
    context: "Retained to identify a Healthcare Operating Partner for a private equity client as the firm's existing Healthcare Operating Partner whom we placed 14 years ago is preparing to fully retire. Chosen executive brings C-level experience across multiple healthcare services sectors, is familiar with private equity, and has been involved with multiple sale processes, as both buyer and seller.",
  },
  {
    sector: "Food and Beverage",
    role: "Executive Chair",
    context: "Retained to identify a Board Director for a private equity client's portfolio company, a marketer of branded specialty beverages. The chosen candidate brought decades of brand management experience with leading food and beverage companies, including experience selling through multiple channels. Candidate started as a Board Director and two years later was appointed Executive Chair. This candidate initially worked quite closely with the CEO / founder to meaningfully professionalize and grow the business.",
  },
];

export default function ForPrivateEquity() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="for-pe-page">
      <Seo
        title="For Private Equity Firms | L&E Partners"
        description="L&E Partners introduces qualified, high-caliber, C-level operating executives to private equity firms. A retained-search engagement model covering CEO, CFO, COO, Operating Partner, and Board placements across healthcare, industrial, financial services, consumer products, and cleantech."
        path="/services/private-equity"
      />

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
        <img src="/le/hero-pe-city.jpg" alt="" className="w-full h-full object-cover object-center" />
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
              A sample of recent engagements, anonymized - every search is bespoke to the sponsor and the thesis.
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

    </div>
  );
}
