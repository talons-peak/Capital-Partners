import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground" data-testid="footer">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/">
              <span className="font-serif text-3xl font-bold tracking-wider text-white cursor-pointer">
                L<span className="text-white/40">&amp;</span>E Partners
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/50 font-light max-w-xs leading-relaxed">
              A boutique executive search firm exclusive to and on retainer with the private equity community.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/35 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "For Private Equity Firms", href: "/services/private-equity" },
                { label: "For Executives", href: "/services/executives" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-white/55 hover:text-primary transition-colors cursor-pointer">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/35 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/55 font-light">
              <li>36 East 10th Street, Suite 8E</li>
              <li>New York, NY 10003</li>
              <li className="pt-2">
                <a href="mailto:lori@l-epartners.com" className="hover:text-primary transition-colors">
                  lori@l-epartners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 tracking-wider">
            © {new Date().getFullYear()} L&amp;E Partners LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-white/30 font-semibold">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
