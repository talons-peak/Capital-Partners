import { type ReactNode } from "react";

function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-serif text-foreground mt-12 mb-4">{children}</h2>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground font-light leading-relaxed mb-4">{children}</p>;
}

export default function Privacy() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="privacy-page">
      <section className="py-12 md:py-16 border-b border-border bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Privacy Policy</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground/70 font-light">Last updated: May 6, 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <P>
            L&amp;E Partners ("L&amp;E", "we", "our") respects the privacy of everyone who visits this website or contacts us. This policy describes what information we collect, how we use it, and how we protect it.
          </P>

          <H2>Information we collect</H2>
          <P>
            When you submit our contact form, we collect the information you provide — typically name, organization, email address, phone number (optional), the nature of your inquiry, and the message itself. We also receive standard server-side technical information from your browser, such as IP address, browser type, and the pages you visit on this site, used solely for security and operational purposes.
          </P>

          <H2>How we use your information</H2>
          <P>
            We use the information you submit only to respond to your inquiry and to maintain the relationship that follows. We do not sell, rent, or share your information with third parties for marketing purposes.
          </P>
          <P>
            Because L&amp;E is an executive search firm, we may use professional information you choose to share with us — for example, your résumé or background — to consider you for current and future search engagements with our private equity clients. Any such use is at your discretion and you may withdraw at any time.
          </P>

          <H2>Confidentiality</H2>
          <P>
            All inquiries and the contents of any communication are held in strict confidence. We do not disclose the existence of a relationship with any executive or sponsor without explicit consent.
          </P>

          <H2>Retention</H2>
          <P>
            We retain inquiry information only as long as is reasonably necessary to respond and to maintain ongoing professional relationships. You may request deletion of your information at any time by emailing <a href="mailto:lori@l-epartners.com" className="text-primary hover:text-accent transition-colors">lori@l-epartners.com</a>.
          </P>

          <H2>Cookies and analytics</H2>
          <P>
            This site uses only essential cookies required for the site to function. We do not currently run advertising trackers, analytics scripts that share data with third parties, or behavioral profiling tools. If that ever changes, this policy will be updated and dated accordingly.
          </P>

          <H2>Third-party services</H2>
          <P>
            This site is hosted by Vercel Inc. and uses standard web infrastructure. No third party receives the contents of your contact form except as required by law.
          </P>

          <H2>Your rights</H2>
          <P>
            You may ask us at any time to confirm what information we hold about you, to correct it, or to delete it. Email <a href="mailto:lori@l-epartners.com" className="text-primary hover:text-accent transition-colors">lori@l-epartners.com</a> and we will respond within a reasonable time.
          </P>

          <H2>Changes to this policy</H2>
          <P>
            We may update this policy from time to time. The "Last updated" date at the top reflects the most recent revision. Material changes will be summarized at the top of the page.
          </P>

          <H2>Contact us</H2>
          <P>
            L&amp;E Partners<br />
            36 East 10th Street, Suite 8E<br />
            New York, NY 10003<br />
            <a href="mailto:lori@l-epartners.com" className="text-primary hover:text-accent transition-colors">lori@l-epartners.com</a>
          </P>
        </div>
      </section>
    </div>
  );
}
