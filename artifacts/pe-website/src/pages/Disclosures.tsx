import { type ReactNode } from "react";
import { Seo } from "@/components/Seo";

function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-serif text-foreground mt-12 mb-4">{children}</h2>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground font-light leading-relaxed mb-4">{children}</p>;
}

export default function Disclosures() {
  return (
    <div className="pt-28 selection:bg-primary selection:text-primary-foreground" data-testid="disclosures-page">
      <Seo
        title="Disclosures | L&E Partners"
        description="Disclosures regarding L&E Partners' executive search and consulting services, including notes on representative searches, testimonials, confidentiality, and the absence of investment advice."
        path="/disclosures"
      />
      <section className="py-12 md:py-16 border-b border-border bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Disclosures</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-foreground mb-4">
            Disclosures
          </h1>
          <p className="text-sm text-muted-foreground/70 font-light">Last updated: May 6, 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <H2>Our business</H2>
          <P>
            L&amp;E Partners is an executive search and consulting firm that introduces senior operating executives to private equity firms for full-time leadership roles, board appointments, advisory engagements, and investment-thesis development. We are not a registered investment adviser, broker-dealer, or placement agent, and we do not provide investment advice.
          </P>

          <H2>No investment advice</H2>
          <P>
            Nothing on this Site or in any communication from L&amp;E should be construed as investment, legal, tax, or accounting advice. Information regarding industry sectors, transaction types, or representative searches is provided for general illustrative purposes only and does not constitute a recommendation to invest in or to refrain from investing in any security, fund, or asset.
          </P>

          <H2>Representative searches</H2>
          <P>
            Examples of completed engagements that may appear on this Site are anonymized and provided for illustrative purposes. Each example is intended to convey the type and shape of work L&amp;E performs and does not identify any specific client, candidate, or transaction. The presence of an example does not constitute an endorsement by the parties involved or a guarantee of similar outcomes.
          </P>

          <H2>Testimonials</H2>
          <P>
            Testimonials and quotes that appear on this Site are unsolicited statements made by individuals associated with L&amp;E's professional engagements. No compensation has been paid in exchange for any testimonial. Speakers may be identified only by role and context to preserve confidentiality. Testimonials are illustrative and not a guarantee of any particular outcome.
          </P>

          <H2>Confidentiality of engagements</H2>
          <P>
            L&amp;E maintains strict confidentiality regarding the identity of clients, candidates, and the substance of any active or prior engagement. We will not confirm the existence of, or details about, any engagement or relationship without the explicit consent of the parties involved.
          </P>

          <H2>No guarantee of placement</H2>
          <P>
            L&amp;E provides executive search and consulting services on a retained basis. No guarantee is made - express or implied - regarding the placement of any executive, the success of any portfolio investment, or the return on any transaction in connection with our services.
          </P>

          <H2>Third-party content</H2>
          <P>
            The Site may reference third-party publications, organizations, or external links. Such references are provided for context and do not imply endorsement, affiliation, or partnership with L&amp;E. We are not responsible for the content of third-party sites.
          </P>

          <H2>Forward-looking statements</H2>
          <P>
            Any statement on this Site about future plans, opportunities, or expected outcomes reflects current views and is subject to change. Past performance is not indicative of future results.
          </P>

          <H2>Contact us</H2>
          <P>
            Questions about these disclosures may be directed to:<br />
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
