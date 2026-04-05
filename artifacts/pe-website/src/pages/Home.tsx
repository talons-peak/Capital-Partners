import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, BarChart3, Building2, ChevronRight, Globe, Layers, Shield } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section 
      id={id}
      ref={ref} 
      className={`py-24 md:py-32 ${className}`}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="container mx-auto px-6 md:px-12 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="font-serif text-2xl font-bold tracking-wider text-white">
          L-E<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-white/80">
          <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
          <a href="#track-record" className="hover:text-primary transition-colors">Track Record</a>
          <a href="#sectors" className="hover:text-primary transition-colors">Sectors</a>
          <a href="#team" className="hover:text-primary transition-colors">Team</a>
        </div>
        <a href="#contact" className="border border-white/20 text-white hover:bg-white hover:text-background px-6 py-2 uppercase text-xs tracking-widest font-semibold transition-all duration-300">
          Inquiries
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <img 
            src="/hero.png" 
            alt="L-E Partners Background" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-primary uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-6">Private Equity & Strategic Capital</h2>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tight mb-8">
              Conviction.<br/>
              <span className="text-muted-foreground italic font-normal">Capital.</span><br/>
              Creation.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-12">
              We operate at the intersection of generational capital and strategic value creation. Quietly extraordinary partnerships for the world's most vital enterprises.
            </p>
            
            <a 
              href="#philosophy" 
              className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-semibold group"
            >
              <span className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500" />
              <span>Discover Our Approach</span>
            </a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
            <motion.div 
              className="w-full h-full bg-primary absolute top-0 left-0"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <Section id="philosophy" className="bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <motion.div variants={fadeInUp} className="lg:col-span-5">
            <h2 className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Investment Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">We build enduring value through asymmetric insight.</h3>
            <div className="mt-12 h-[1px] w-24 bg-primary/30" />
          </motion.div>
          
          <motion.div variants={fadeInUp} className="lg:col-span-6 lg:col-start-7 text-lg text-foreground/80 font-light space-y-8">
            <p>
              L-E Partners was founded on a singular premise: that true value creation requires more than capital. It requires operational conviction, deep sector expertise, and the patience to execute long-term strategic transformations.
            </p>
            <p>
              We do not participate in broad market cycles. Instead, we seek out complex, misunderstood, or transitioning assets where our unique operational toolkit can unlock disproportionate value. Our capital is permanent, our focus is absolute, and our partnerships are profound.
            </p>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl mb-2 text-white">Concentrated</h4>
                <p className="text-sm text-foreground/60">We make few investments, allowing for deep, meaningful engagement with every portfolio company.</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-2 text-white">Operational</h4>
                <p className="text-sm text-foreground/60">Our value-creation teams work alongside management to drive fundamental business improvement.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Track Record / Metrics */}
      <Section id="track-record" className="border-t border-white/5">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">By The Numbers</h2>
          <h3 className="text-3xl md:text-4xl font-serif">A legacy of compounding capital.</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "Assets Under Management", value: "$14.2B" },
            { label: "Years of Excellence", value: "25+" },
            { label: "Active Portfolio Companies", value: "18" },
            { label: "Realized Gross IRR", value: "32.4%" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="flex flex-col items-center justify-center p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-primary mb-4">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 font-semibold text-center">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Sectors */}
      <Section id="sectors" className="bg-card">
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Focus Areas</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h3 className="text-4xl md:text-5xl font-serif max-w-2xl">Specialized focus drives outsized returns.</h3>
            <p className="text-foreground/60 max-w-md font-light">We direct our capital explicitly toward sectors where we possess proprietary insight and deep operational networks.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            { title: "Enterprise Technology", desc: "Mission-critical B2B software, data infrastructure, and specialized cyber-defense systems.", icon: <Globe className="w-8 h-8" /> },
            { title: "Advanced Industrials", desc: "Precision manufacturing, industrial automation, and specialized supply chain assets.", icon: <Building2 className="w-8 h-8" /> },
            { title: "Healthcare Services", desc: "Tech-enabled healthcare services, specialized clinical providers, and life sciences infrastructure.", icon: <Shield className="w-8 h-8" /> },
            { title: "Financial Services", desc: "Specialty finance, wealth management platforms, and financial technology infrastructure.", icon: <BarChart3 className="w-8 h-8" /> }
          ].map((sector, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="bg-card p-12 group hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
              <div className="text-primary mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                {sector.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">{sector.title}</h4>
              <p className="text-foreground/60 font-light leading-relaxed mb-8">{sector.desc}</p>
              <div className="flex items-center text-xs uppercase tracking-widest font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Explore Strategy <ChevronRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Portfolio Highlight */}
      <Section className="border-t border-white/5">
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Selected Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Partners in transformation.</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { name: "Aurelius Data", type: "Enterprise Tech", status: "Realized", desc: "Transformed from a regional data provider into a global infrastructure layer.", return: "4.2x MOIC" },
            { name: "Meridian Health", type: "Healthcare", status: "Current", desc: "Consolidated fragmented specialized care providers into a unified national network.", return: "Active" },
            { name: "Vanguard Industrials", type: "Industrials", status: "Current", desc: "Operational turnaround of legacy manufacturing asset focusing on aerospace.", return: "Active" }
          ].map((company, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="border border-white/10 p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm">
                    <Layers className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors" />
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-1 border ${company.status === 'Realized' ? 'border-primary/50 text-primary' : 'border-white/20 text-white/60'}`}>
                    {company.status}
                  </span>
                </div>
                <h4 className="text-2xl font-serif mb-2">{company.name}</h4>
                <div className="text-xs uppercase tracking-widest text-primary mb-6 font-semibold">{company.type}</div>
                <p className="text-foreground/60 font-light text-sm mb-8">{company.desc}</p>
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center text-sm">
                <span className="text-foreground/40 font-medium">Outcome</span>
                <span className="font-serif">{company.return}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section id="team" className="bg-card">
        <motion.div variants={fadeInUp} className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-serif max-w-2xl">Decades of collective conviction.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Jonathan Sterling", title: "Managing Partner", img: "/partner1.png", desc: "Former head of global M&A at Morgan Stanley. 30 years of private equity experience across technology and industrials." },
            { name: "Eleanor Vance", title: "Senior Partner, Operations", img: "/partner2.png", desc: "Three-time Fortune 500 CEO. Leads the firm's strategic value creation group." },
            { name: "Marcus Thorne", title: "Partner, Healthcare", img: "/partner3.png", desc: "MD/Phd turned investor. Pioneered the firm's thesis-driven approach to life sciences infrastructure." }
          ].map((partner, i) => (
            <motion.div key={i} variants={fadeInUp} className="group">
              <div className="relative mb-6 overflow-hidden aspect-[3/4] bg-background">
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
              </div>
              <h4 className="text-2xl font-serif mb-1 group-hover:text-primary transition-colors">{partner.name}</h4>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mb-4 font-semibold">{partner.title}</div>
              <p className="text-sm text-foreground/50 font-light leading-relaxed">{partner.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact / CTA */}
      <section id="contact" className="relative py-32 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif mb-8">Initiate a dialogue.</h2>
            <p className="text-lg text-foreground/60 font-light mb-12">
              L-E Partners partners with exceptional management teams to build enduring businesses. We welcome inquiries from founders, intermediaries, and limited partners.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:inquiries@le-partners.com" className="bg-primary text-primary-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-white transition-colors duration-300 flex items-center gap-3">
                Contact Firm <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="border border-white/20 text-white px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-white/5 transition-colors duration-300">
                LP Portal Login
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-bold tracking-wider text-white/50">
            L-E<span className="text-primary">.</span>
          </div>
          <div className="text-xs text-foreground/40 tracking-wider">
            © {new Date().getFullYear()} L-E Partners LLC. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-widest text-foreground/40 font-semibold">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Disclosures</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
