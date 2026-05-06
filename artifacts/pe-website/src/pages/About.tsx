import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

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

function GoldLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-[2px] bg-primary" />
      <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">{children}</p>
    </div>
  );
}

// NOTE: Lori's bio is a placeholder pulled from the live site at l-epartners.com.
// L&E to provide updated copy — flagged "X" in the April 2026 feedback document.
const principals = [
  {
    name: "Lori Hess",
    title: "Founder & Managing Partner",
    img: "/partner1.png",
    bio: [
      "Lori has spent the majority of her career working within or with the private equity community. From 1994 to 2007 she was with Charterhouse Group Inc., a middle-market private equity firm in New York, where she developed the firm's Healthcare vertical and played key roles in significant acquisitions and an IPO.",
      "Prior to founding L&E Partners in November 2010, Lori led the U.S. Private Equity Practice at Rice & Dore. Earlier in her career she held positions at Avon Products, Sterling Health, and Houlihan Lokey Howard & Zukin.",
      "Lori holds an MBA from Columbia Business School and a BA in Economics from the University of Pennsylvania.",
    ],
    education: ["MBA, Columbia Business School", "BA Economics, University of Pennsylvania"],
  },
  {
    name: "Sandi Macan",
    title: "Partner",
    img: "/partner2.png",
    bio: [
      "Sandi Macan has been an executive recruiter for the past thirty years, identifying senior-level management for a variety of industries. She has collaborated with executives and investors to build leadership teams across healthcare, cleantech, industrial, financial services, and consumer products sectors for publicly traded, private equity-backed, and venture-funded companies.",
      "Sandi joined L&E Partners in 2021 and became Partner in 2023.",
    ],
    education: ["MBA, Villanova University", "BA Political Science, Johns Hopkins University"],
  },
  {
    name: "Nikki Delp",
    title: "Principal",
    img: "/partner3.png",
    bio: [
      "Nikki Delp has been an executive recruiter since 2018, working across various industries including industrial, healthcare, and consumer products for publicly traded, private equity-backed, and venture-funded companies. Since 2020 she has concentrated on private equity work.",
      "Nikki brings marketing and communications expertise to her recruitment role and joined L&E Partners in 2023.",
    ],
    education: ["BA Mass Communication, University of Delaware"],
  },
];

export default function About() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="about-page">

      {/* ── PAGE HERO ── */}
      <section className="py-24 md:py-32 border-b border-border bg-white">
        <Reveal className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div variants={fadeInUp}><GoldLabel>About L&amp;E Partners</GoldLabel></motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-10 max-w-4xl">
            A boutique partner to private equity.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
            L&amp;E Partners is a boutique executive search firm that develops targeted CEO introductions for a select group of private equity firms. Our objective is to create and nurture the right interactions that ultimately can lead to maximum investment returns.
          </motion.p>
        </Reveal>
      </section>

      {/* ── PRINCIPALS ── */}
      <section className="py-24 md:py-32 bg-white" data-testid="principals-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <Reveal className="mb-16">
            <motion.div variants={fadeInUp}>
              <GoldLabel>Principals</GoldLabel>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">Our team.</h2>
            </motion.div>
          </Reveal>

          <div className="space-y-24 md:space-y-32">
            {principals.map((p, i) => (
              <Reveal key={p.name}>
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
                  data-testid={`principal-${i}`}
                >
                  <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:col-start-9 lg:row-start-1" : ""}`}>
                    <div className="relative overflow-hidden aspect-[3/4] bg-muted group">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-6"}`}>
                    <h2 className="text-4xl md:text-5xl font-serif mb-2 text-foreground">{p.name}</h2>
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-6">{p.title}</p>
                    <div className="h-[1px] w-12 bg-border mb-8" />

                    <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-lg mb-8">
                      {p.bio.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>

                    {p.education.length > 0 && (
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
                    )}
                  </div>
                </motion.div>

                {i < principals.length - 1 && <div className="mt-16 h-[1px] bg-border" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
