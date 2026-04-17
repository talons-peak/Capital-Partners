import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

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

const partners = [
  {
    name: "Jonathan Sterling",
    title: "Managing Partner & Co-Founder",
    img: "/partner1.png",
    sector: "Technology & Industrials",
    career: "Former Head of Global M&A, Morgan Stanley",
    bio: "Jonathan founded L-E Partners in 1999 following a distinguished career in investment banking. As Managing Partner, he oversees firm strategy, investor relations, and the Technology portfolio. He has led over $8B in transactions across 18 countries and serves on 7 portfolio company boards.",
    education: ["MBA, Wharton School", "BA Economics, Princeton University"],
    board: ["Nexus Cloud Infrastructure", "Aurelius Data Systems (prior)"],
  },
  {
    name: "Eleanor Vance",
    title: "Senior Partner, Value Creation",
    img: "/partner2.png",
    sector: "Operations & Healthcare",
    career: "Three-time Fortune 500 CEO",
    bio: "Eleanor joined L-E Partners in 2007 after serving as CEO of three Fortune 500 companies. She leads the firm's Value Creation Group, embedding operational executives within portfolio companies to drive performance improvement.",
    education: ["MBA, Harvard Business School", "BSc Engineering, MIT"],
    board: ["Meridian Health Partners", "Vanguard Precision Industrials"],
  },
  {
    name: "Marcus Thorne",
    title: "Partner, Healthcare & Life Sciences",
    img: "/partner3.png",
    sector: "Healthcare & Life Sciences",
    career: "MD/PhD, Former SVP at Johnson & Johnson",
    bio: "Marcus brings a rare combination of clinical training and investment experience to L-E Partners. He pioneered the firm's thesis-driven approach to healthcare services, identifying structural inefficiencies in specialty care before the market recognized the opportunity.",
    education: ["MD/PhD, Johns Hopkins", "BA Biology, Duke University"],
    board: ["Helix Life Sciences (prior)", "Meridian Health Partners"],
  },
  {
    name: "Priya Krishnamurthy",
    title: "Partner, Financial Services",
    img: "/partner1.png",
    sector: "Financial Services & FinTech",
    career: "Former Partner, KKR Financial Holdings",
    bio: "Priya leads the Financial Services vertical at L-E Partners, focusing on wealth management, specialty finance, and financial technology infrastructure. Prior to L-E, she spent 12 years at KKR and before that at Goldman Sachs' Financial Institutions Group.",
    education: ["MBA, Stanford GSB", "BS Finance, NYU Stern"],
    board: ["Stratford Capital Management (prior)"],
  },
];

const advisors = [
  { name: "Sir Richard Hollings", role: "Senior Advisor, Europe" },
  { name: "Dr. Janet Wu", role: "Senior Advisor, Asia Pacific" },
  { name: "Robert Ashworth III", role: "Senior Advisor, Government Affairs" },
];

export default function Team() {
  return (
    <div className="pt-24 selection:bg-primary selection:text-primary-foreground" data-testid="team-page">

      {/* ── PAGE HERO ── */}
      <section className="py-24 md:py-32 border-b border-border bg-white">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Leadership</p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-10 max-w-4xl">
            Decades of collective conviction.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Our partners bring extraordinary backgrounds across investment banking, operations, medicine, and academia — united by a shared commitment to building exceptional businesses.
          </motion.p>
        </Reveal>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-28 md:py-36 bg-white" data-testid="partners-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="space-y-24 md:space-y-32">
            {partners.map((p, i) => (
              <Reveal key={p.name}>
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
                  data-testid={`partner-${i}`}
                >
                  {/* Image — alternating sides */}
                  <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:col-start-9 lg:row-start-1" : ""}`}>
                    <div className="relative overflow-hidden aspect-[3/4] bg-muted group">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      />
                      {/* Gold top bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-6"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-[2px] bg-primary" />
                      <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">{p.sector}</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-2 text-foreground">{p.name}</h2>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-2">{p.title}</p>
                    <p className="text-sm text-accent font-light mb-8 italic">{p.career}</p>

                    <div className="h-[1px] w-12 bg-border mb-8" />

                    <p className="text-muted-foreground font-light leading-relaxed text-lg mb-10">{p.bio}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-semibold mb-3">Education</p>
                        <ul className="space-y-2">
                          {p.education.map((e) => (
                            <li key={e} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-semibold mb-3">Boards</p>
                        <ul className="space-y-2">
                          {p.board.map((b) => (
                            <li key={b} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {i < partners.length - 1 && <div className="mt-16 h-[1px] bg-border" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORS — navy ── */}
      <section className="py-24 bg-accent" data-testid="advisors-section">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Advisory Board</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Senior Advisors</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((a, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border border-white/10 p-8 hover:border-primary/40 transition-colors bg-white/5"
              >
                <div className="w-8 h-[2px] bg-primary mb-6" />
                <h3 className="text-xl font-serif mb-1 text-white">{a.name}</h3>
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">{a.role}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
