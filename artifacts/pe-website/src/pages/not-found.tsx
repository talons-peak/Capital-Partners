import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function NotFound() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="not-found-page">
      <Seo
        title="Page not found | L&E Partners"
        description="The page you were looking for could not be found."
        path="/404"
        noindex
      />
      <section className="py-24 md:py-36 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6">404</p>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-[0.9] tracking-tight text-foreground mb-8">
            Page not found.
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-xl mx-auto">
            The page you were looking for has been moved or no longer exists. Try one of the options below.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" data-testid="not-found-home">
              <span className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                Home <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/services/private-equity" data-testid="not-found-pe">
              <span className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer">
                For Private Equity Firms
              </span>
            </Link>
            <Link href="/services/executives" data-testid="not-found-execs">
              <span className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer">
                For Executives
              </span>
            </Link>
            <Link href="/contact" data-testid="not-found-contact">
              <span className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-8 py-4 uppercase text-xs tracking-widest font-bold hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
