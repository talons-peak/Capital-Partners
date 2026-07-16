// Content for the three printable one-pager sheets (/one-pager/:slug).
// Every string here is copy already approved by L&E and published elsewhere on
// the site - redistributed, not rewritten. See
// docs/superpowers/specs/2026-07-15-one-pagers-design.md.

export type ContactPerson = {
  name: string;
  title: string;
  office: string;
  mobile: string;
  email: string;
};

export const TEAM: ContactPerson[] = [
  { name: "Lori Hess", title: "Founder & Managing Partner", office: "(646) 858-0034", mobile: "(917) 446-3126", email: "lori@l-epartners.com" },
  { name: "Sandi Macan", title: "Principal", office: "(646) 858-0036", mobile: "(610) 420-3142", email: "sandi@l-epartners.com" },
  { name: "Nikki Delp", title: "Principal", office: "(646) 777-1574", mobile: "(610) 500-4164", email: "nikki@l-epartners.com" },
];

export const ADDRESS = ["36 East 10th Street, Suite 8E", "New York, NY 10003"];

export const SECTORS = [
  "Business & Financial Services",
  "Consumer",
  "Energy & Infrastructure",
  "Healthcare & Life Sciences",
  "Industrial",
  "Technology & Tech-enabled Services",
];

export type Search = { sector: string; role: string; context: string };

export type OnePager = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  seoTitle: string;
  seoDescription: string;
  // Optional blocks, rendered by OnePagerLayout in a fixed order when present.
  bullets?: { heading: string; items: string[] };
  roles?: { heading: string; items: string[] };
  paragraphs?: { heading: string; items: string[] };
  pillars?: { heading: string; items: { title: string; desc: string }[] };
  sectors?: { heading: string };
  searches?: { heading: string; items: Search[] };
  note?: string;
};

const PRIVATE_EQUITY: OnePager = {
  slug: "private-equity",
  eyebrow: "For Private Equity Firms",
  title: "A boutique search partner to the private equity community.",
  lead: "L&E Partners consistently brings value to private equity firms by introducing qualified, high-caliber, C-level executives with industry specialization who can help move businesses forward.",
  seoTitle: "For Private Equity Firms | One-Pager | L&E Partners",
  seoDescription:
    "A printable overview of how L&E Partners introduces industry-specific C-level operating executives and board directors to private equity firms, with representative searches and direct contacts.",
  bullets: {
    heading: "What these introductions offer",
    items: [
      "The opportunity to meet industry and sector-specific talent to assist with investment thesis development ahead of an investment transaction in the market.",
      "The ability to partner with proven industry and sector-specific operators to assist with specific transaction due diligence, increasing the likelihood of a successful transaction.",
      "The leadership required to work on existing in-house investment opportunities, particularly those lacking backable management.",
      "A stable of backable industry-specific C-suite executives and board directors.",
      "The introductions made not only provide expertise pre-deal, but are also considered to be board candidates should the acquisition move forward.",
    ],
  },
  roles: {
    heading: "Roles we place",
    items: [
      "Advisors and Consultants",
      "Board Directors",
      "Chairpersons and C-level Executives",
      "Operating Partners",
      "Other portfolio company management searches as required and requested by our clients",
    ],
  },
  sectors: { heading: "Sectors" },
  searches: {
    heading: "Representative searches",
    items: [
      {
        sector: "Industrial Distribution",
        role: "Chief Executive Officer",
        context:
          "Retained to identify a Chief Executive Officer for an acquired B2B distribution business previously run by the founding family. Required prior success leading, growing, and exiting an acquisitive PE-backed company, and the ability to work with the prior CEO and founding family.",
      },
      {
        sector: "Healthcare",
        role: "Operating Partner",
        context:
          "Retained to identify a Healthcare Operating Partner for a private equity client as the firm's existing Operating Partner, whom we placed 14 years ago, prepares to retire. The chosen executive brings C-level experience across multiple healthcare services sectors and has been involved in multiple sale processes, as both buyer and seller.",
      },
      {
        sector: "Food and Beverage",
        role: "Executive Chair",
        context:
          "Retained to identify a Board Director for a marketer of branded specialty beverages. The chosen candidate brought decades of brand management experience and was appointed Executive Chair two years later. We have since been asked to recruit two additional Board Directors, one for sales expertise and one to serve as Audit Chair.",
      },
    ],
  },
};

const EXECUTIVES: OnePager = {
  slug: "executives",
  eyebrow: "For Executives",
  title: "Exploring leadership and board opportunities with private equity.",
  lead: "We look for entrepreneurial professionals with vision, skill, and proven experience in building businesses who are interested in exploring leadership and board opportunities with the private equity community.",
  seoTitle: "For Executives | One-Pager | L&E Partners",
  seoDescription:
    "A printable overview for senior operating executives exploring leadership and board opportunities with private equity-backed companies through L&E Partners. Every conversation held in strict confidence.",
  bullets: {
    heading: "These executives may be",
    items: [
      "A current, recently exited, or retired CEO, President, COO, CFO, or chairperson",
      "A business owner",
      "A board director",
      "An advisor or consultant who is well-connected within an industry",
    ],
  },
  paragraphs: {
    heading: "How we collaborate",
    items: [
      "Keeping our clients' interests in mind at all times, the L&E Partners team collaborates with such executives to develop a customized set of private equity firms for introduction.",
      "We prepare our executives with an in-depth understanding of the cultures of select private equity firms and their specific investment criteria, as well as their respective internal processes. Our continuous hands-on involvement and follow-up ensure that promising relationships have the highest likelihood of being realized.",
    ],
  },
  sectors: { heading: "Sectors we serve" },
  note: "All conversations and inquiries are strictly confidential.",
};

const FIRM: OnePager = {
  slug: "firm",
  eyebrow: "The Firm",
  title: "A boutique executive search firm, exclusive to private equity.",
  lead: "L&E Partners is a boutique executive search firm exclusive to and on retainer with the private equity community. We introduce industry-specific operating executives to PE sponsors for new and existing portfolio companies, investment thesis development, and opportunities being diligenced.",
  seoTitle: "Firm Overview | One-Pager | L&E Partners",
  seoDescription:
    "A printable overview of L&E Partners: a boutique NYC executive search firm on retainer with the private equity community, the way we work, the sectors we cover, and our principals.",
  paragraphs: {
    heading: "Who we are",
    items: [
      "We've spent decades building relationships with both PE firms and C-level executives. We bring a deep understanding of M&A processes and the profile of executives private equity firms partner with throughout the investment process.",
    ],
  },
  pillars: {
    heading: "Why L&E",
    items: [
      {
        title: "Decades-long relationships",
        desc: "We've come to know the individual characteristics of our private equity clients over the years, and tailor the introductions of executives, resulting in more successful placements.",
      },
      {
        title: "Timing matters",
        desc: "Our clients are often engaged in highly competitive investment processes with tight deadlines. We work in a timely fashion to identify and introduce industry-specific executives, who are critical to our clients' diligence.",
      },
      {
        title: "Knowledge is key",
        desc: "We work closely with our clients throughout the lifecycle of an investment to understand the required knowledge and expertise they are looking for in an advisor.",
      },
    ],
  },
  sectors: { heading: "Sectors" },
};

export const ONE_PAGERS: Record<string, OnePager> = {
  "private-equity": PRIVATE_EQUITY,
  executives: EXECUTIVES,
  firm: FIRM,
};

export const ONE_PAGER_SLUGS = Object.keys(ONE_PAGERS);
