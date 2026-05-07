import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavLink =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] };

const navLinks: NavLink[] = [
  {
    label: "Services",
    children: [
      { label: "For Private Equity Firms", href: "/services/private-equity" },
      { label: "For Executives", href: "/services/executives" },
    ],
  },
  { label: "About", href: "/about" },
];

function Brand({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-foreground" : "text-white";
  return (
    <Link href="/" data-testid="nav-logo">
      <span className={`font-serif text-2xl font-bold tracking-wider cursor-pointer select-none hover:opacity-80 transition-opacity duration-300 ${text}`}>
        L<span className="text-primary">&amp;</span>E Partners
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur shadow-sm border-b border-border"
            : "bg-white border-b border-border"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center py-4">
          <div className="flex flex-col">
            <Brand />
            <span className="hidden md:block text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-semibold mt-1">
              Rethinking How Private Equity Firms Invest in Executives
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-widest uppercase">
            {navLinks.map((link) =>
              "children" in link ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                    className={`flex items-center gap-1 uppercase tracking-widest text-sm font-medium transition-colors cursor-pointer ${
                      link.children.some((c) => location === c.href)
                        ? "text-primary"
                        : "text-foreground/60 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-3 min-w-[260px]"
                      >
                        <div className="bg-white border border-border shadow-md py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              data-testid={`nav-dropdown-${child.href.replace(/\//g, "-")}`}
                            >
                              <span
                                className={`block px-5 py-3 text-xs tracking-widest cursor-pointer transition-colors ${
                                  location === child.href
                                    ? "text-primary bg-muted/50"
                                    : "text-foreground/70 hover:text-primary hover:bg-muted/30"
                                }`}
                              >
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.href} href={link.href} data-testid={`nav-link-${link.label.toLowerCase()}`}>
                  <span
                    className={`transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-primary"
                        : "text-foreground/60 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ),
            )}
            <Link href="/contact" data-testid="nav-cta">
              <span className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground px-6 py-2.5 uppercase text-xs tracking-widest font-semibold transition-all duration-300 cursor-pointer">
                Inquiries
              </span>
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 px-6"
          >
            {navLinks.map((link) =>
              "children" in link ? (
                <div key={link.label} className="flex flex-col items-center gap-4">
                  <span className="text-3xl font-serif text-foreground">{link.label}</span>
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      <span className="text-lg font-light text-foreground/70 hover:text-primary cursor-pointer">
                        {child.label}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span className="text-3xl font-serif text-foreground hover:text-primary transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ),
            )}
            <Link href="/contact">
              <span className="mt-6 bg-accent text-accent-foreground px-10 py-4 uppercase text-xs tracking-widest font-semibold hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                Inquiries
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
