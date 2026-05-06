import { type ReactNode } from "react";
import { Seo } from "@/components/Seo";

function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-serif text-foreground mt-12 mb-4">{children}</h2>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground font-light leading-relaxed mb-4">{children}</p>;
}

export default function Terms() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="terms-page">
      <Seo
        title="Terms of Use | L&E Partners"
        description="Terms governing access to and use of the L&E Partners website."
        path="/terms"
      />
      <section className="py-12 md:py-16 border-b border-border bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Terms of Use</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-foreground mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground/70 font-light">Last updated: May 6, 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <P>
            These Terms of Use ("Terms") govern your access to and use of the L&amp;E Partners website at l-epartners.com (the "Site"). By using the Site you agree to these Terms. If you do not agree, please do not use the Site.
          </P>

          <H2>Informational purpose</H2>
          <P>
            The Site is provided for general informational purposes about L&amp;E Partners ("L&amp;E", "we") and the executive search services we offer to private equity firms and senior operating executives. Nothing on the Site constitutes an offer of services, a solicitation, an offer of employment, or an offer to enter into any engagement. Engagements with L&amp;E are formed only through written agreement.
          </P>

          <H2>Intellectual property</H2>
          <P>
            All content on the Site - including text, graphics, photos, logos, and the Site design itself - is the property of L&amp;E Partners or its licensors and is protected by U.S. and international intellectual property laws. You may view and print pages for personal, non-commercial use; you may not reproduce, modify, distribute, or otherwise exploit Site content without our prior written consent.
          </P>

          <H2>No warranties</H2>
          <P>
            The Site is provided on an "as is" and "as available" basis. While we make reasonable efforts to keep the Site accurate and current, we make no warranties - express or implied - regarding accuracy, reliability, completeness, or availability. We may modify, suspend, or discontinue any part of the Site at any time without notice.
          </P>

          <H2>No professional advice</H2>
          <P>
            Information on the Site is not legal, financial, investment, tax, or professional advice. You should consult appropriate professionals before acting on anything you read here.
          </P>

          <H2>Limitation of liability</H2>
          <P>
            To the maximum extent permitted by law, L&amp;E Partners and its principals, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
          </P>

          <H2>External links</H2>
          <P>
            The Site may contain links to third-party websites or resources. Those sites are operated by parties unaffiliated with L&amp;E and we are not responsible for their content, privacy practices, or terms.
          </P>

          <H2>Governing law</H2>
          <P>
            These Terms are governed by the laws of the State of New York, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Site will be resolved in the state or federal courts located in New York County, New York.
          </P>

          <H2>Changes to these Terms</H2>
          <P>
            We may revise these Terms from time to time. The "Last updated" date at the top reflects the most recent revision. Continued use of the Site after a revision constitutes acceptance of the revised Terms.
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
