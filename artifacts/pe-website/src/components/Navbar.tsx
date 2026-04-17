import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Sectors", href: "/about#sectors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 flex justify-between items-center transition-all duration-400 ${
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur shadow-sm border-b border-border"
            : "bg-white border-b border-border"
        }`}
      >
        <Link href="/" data-testid="nav-logo">
          <span className="font-serif text-2xl font-bold tracking-wider text-foreground cursor-pointer select-none">
            L<span className="text-primary">-</span>E<span className="text-primary">.</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase">
          {navLinks.map((link) => (
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
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" data-testid="nav-cta">
            <span className="hidden md:inline-block bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground px-6 py-2.5 uppercase text-xs tracking-widest font-semibold transition-all duration-300 cursor-pointer">
              Inquiries
            </span>
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
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
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-3xl font-serif text-foreground hover:text-primary transition-colors cursor-pointer">
                  {link.label}
                </span>
              </Link>
            ))}
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
