import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-background" data-testid="footer">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/">
              <span className="font-serif text-3xl font-bold tracking-wider text-white cursor-pointer">
                L-E<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-foreground/50 font-light max-w-xs leading-relaxed">
              A high-conviction private equity firm operating at the intersection of capital and strategic value creation.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground/40 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground/40 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/60 font-light">
              <li>One Liberty Plaza</li>
              <li>New York, NY 10006</li>
              <li className="pt-2">
                <a href="mailto:inquiries@le-partners.com" className="hover:text-primary transition-colors">
                  inquiries@le-partners.com
                </a>
              </li>
              <li>+1 (212) 000-0000</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30 tracking-wider">
            © {new Date().getFullYear()} L-E Partners LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-foreground/30 font-semibold">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
