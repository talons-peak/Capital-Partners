# One-pagers with PDF download

Date: 2026-07-15
Status: Approved, ready for implementation plan

## Goal

Give L&E Partners three printable "one-pager" sheets on the site, each with a button that
downloads the sheet as a PDF. The sheets are public and must look polished for two audiences at
once: strangers browsing the site who download it themselves, and the three principals who pull
the PDF to email or hand to a client.

Each sheet must fit **exactly one Letter page**.

## The three sheets

| Route | Sheet | Audience |
|---|---|---|
| `/one-pager/private-equity` | PE firm leave-behind | Private equity clients |
| `/one-pager/executives` | Executive-facing sheet | Operating executives |
| `/one-pager/firm` | General firm overview | Either |

## Approach

**Chosen: a print-first page plus a `@media print` stylesheet, with the button calling
`window.print()`.**

This produces a real vector PDF: selectable and searchable text, true Playfair Display and Inter,
and a crisp SVG wordmark. It adds no dependencies and no infrastructure, and the page itself stays
the single source of truth, so there is no second artifact to keep in sync.

The accepted cost: the browser's print dialog appears (the user chooses "Save as PDF"), and the
download filename is not controllable.

### Alternatives considered

- **Headless Chrome on a Vercel function** (`page.pdf()` returning `Content-Disposition:
  attachment`). Gives a true one-click download, an exact filename, and byte-identical output for
  every visitor. Rejected *for now*, not on merit: it adds a ~50MB chromium binary, 2-5s cold
  starts, and a Node function to maintain on a currently static site. **This remains the upgrade
  path** - it renders the same print stylesheet this design builds, so adopting it later is a
  change of trigger, not a rewrite. Nothing here is throwaway.
- **`html2canvas` + `jsPDF`.** Rejected. It flattens the page to a raster image: text is not
  selectable or searchable, it blurs on zoom, and it costs ~200KB of bundle. Unacceptable for brand
  collateral.
- **`@react-pdf/renderer`.** Rejected. It would mean maintaining two layouts per sheet (the HTML
  page and a separate PDF document) that must be kept visually in sync - six artifacts for three
  sheets. Worth it only when the PDF must differ from the page; here the page *is* the design.
- **Hand-designed static PDFs.** Rejected. L&E ran two copy-revision rounds in the two months to
  July 2026. A hand-made PDF would drift from the site almost immediately, and every wording tweak
  would require a redesign.

## Architecture

New files:

- **`src/components/OnePagerLayout.tsx`** - the shared shell: masthead (SVG wordmark), sheet body,
  a contact band, and the "Download PDF" button. The button is screen-only (`print:hidden`) so it
  never appears in the PDF.
- **`src/content/onePagers.ts`** - the three sheets defined as data. Copy lives in one reviewable
  place, so a future L&E wording change is a data edit rather than a layout edit.
- **`src/pages/OnePager.tsx`** - reads the route param, selects the content, renders the layout.
- **Print rules in `src/index.css`** - a single `@media print` block.

Changes to existing files:

- **`src/App.tsx`** - add the three routes.
- **`src/components/Navbar.tsx`, `src/components/Footer.tsx`** - add `print:hidden` so site chrome
  never prints.
- **`src/components/Footer.tsx`** - link the three sheets (footer only; see Decisions).
- **`src/pages/Todo.tsx`** - log the feature per project convention.

### The animation trap (important)

The one-pagers must **not** use the `Reveal` / `useInView` wrapper the rest of the site uses.

Every other page wraps content in a framer-motion variant whose hidden state is
`opacity: 0; transform: translateY(35px)`, and only animates to visible when scrolled into view.
This was directly observed during the July 2026 verification pass: a headless render of
`/services/executives` produced a DOM containing
`<p class="..." style="opacity: 0; transform: translateY(35px);">`, and the corresponding
screenshot showed a blank intro.

A print render has no scroll, so any `Reveal`-wrapped section would **print blank**. The one-pagers
render statically instead. There is nothing to animate away.

## Content

All copy is **already-approved L&E text, redistributed**. No new marketing prose is written. This
is deliberate: L&E edits wording closely, and inventing copy invites another revision round.

**PE firm leave-behind** - the "consistently brings value..." statement; what the introductions
offer (5 items); roles placed; the 6 sectors; 3 representative searches; principals and contact.

**Executive-facing** - the "We look for entrepreneurial professionals..." statement; the 4
candidate types; the two collaboration paragraphs; the confidentiality line; contact.

**General firm overview** - the Home intro; the three "Why L&E" pillars (Decades-long
relationships / Timing matters / Knowledge is key); the 6 sectors; the three principals with
one-line credentials; contact.

Every sheet closes with the same contact band: the three principals with email and phone, plus
36 East 10th Street, Suite 8E, New York, NY 10003.

**Known trim:** the PE sheet carries **3 of the 6** representative searches. Six will not fit on one
page alongside the rest. The three are chosen to spread across sector and role type:

1. Industrial Distribution / Chief Executive Officer
2. Healthcare / Operating Partner
3. Food and Beverage / Executive Chair (the fullest story, and the one L&E just extended)

If L&E wants all six, something else on that sheet must drop.

## Print mechanics

- `@page { size: Letter; margin: 0 }` with padding handled inside the sheet. Removing the page
  margin box suppresses Chrome's default URL/date/page-number headers, which are the main thing
  that would make a public download look amateur. **To be verified, not assumed** (see Verification).
- `print-color-adjust: exact` (plus `-webkit-` prefix) on the navy bands and gold rules, or browsers
  drop them.
- `break-inside: avoid` on content blocks, and a fixed sheet height, so the output is exactly one
  page.
- The screen version stays a normal, attractive web page. It is not a naked print sheet.

## Verification

Fitting on one page is a claim to be proven, not asserted:

1. Render each of the three routes with headless Chrome to a real PDF
   (`page.pdf({ format: 'Letter', printBackground: true })`).
2. **Assert the page count is exactly 1** for each sheet. If a sheet spills to two pages, cut
   content until it does not.
3. Visually inspect each rendered PDF (navy bands and gold rules present, wordmark crisp, no blank
   blocks, nothing clipped).
4. Confirm no browser-injected URL/date header appears.
5. `typecheck` and `build` clean.

Chrome is available locally at `C:\Program Files\Google\Chrome\Application\chrome.exe`.

## Decisions

- **Linking:** footer only. The sheets are collateral; putting them in the main nav would compete
  with the Inquiries CTA.
- **Indexing:** the sheets are public and indexable (they are not internal like `/todo`).

## Out of scope

- The serverless one-click download and filename control (approach B above). Revisit only if the
  print dialog proves to be a real irritation for L&E.
- Any new copy. If L&E wants wording that does not already exist on the site, that is a separate
  request.
