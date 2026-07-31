import { createFileRoute } from "@tanstack/react-router";
import { Check, Minus, ArrowUpRight } from "lucide-react";

import { LOGO } from "@/components/site/content";

/**
 * Landing page = the client proposal / comparison page.
 *
 * Presents the two website options side by side — a £450 single-page site and
 * the £799 full six-page site — each linking out to a live demo (opened in a new
 * tab). It intentionally sells both while making the value of the full site clear.
 *
 * The full site itself lives at /full-site; the £450 demo at /one-page.
 * This page is standalone chrome (its own header/footer) rather than the cleaning
 * site's layout, because it's a page *about* the website, not part of it. It is
 * marked noindex so it never shows up in search.
 */
export const Route = createFileRoute("/")({
  component: ProposalPage,
  head: () => ({
    meta: [
      { title: "Website Proposal — Spotlessly Clean" },
      { name: "robots", content: "noindex" },
      {
        name: "description",
        content:
          "Two website options for Spotlessly Clean Ltd — a single-page site and a full six-page site.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* ------------------------------------------------------------------ */
/* Option content                                                      */
/* ------------------------------------------------------------------ */

const ONE_PAGE_INCLUDES = [
  "One clean, scrolling page with every key section",
  "Services overview and what's included",
  "Photo gallery of real work",
  "Customer reviews",
  "Contact details with WhatsApp, call and email",
  "Menu that scrolls straight to each section",
  "Fully mobile-friendly and fast",
];

const FULL_SITE_INCLUDES = [
  "Six dedicated pages, each with its own purpose",
  "Full services & pricing page with checklists",
  "Larger work gallery with more photos",
  "'How it works' page with a full FAQ",
  "Dedicated reviews page",
  "Contact page with a quote request form",
  "Separate SEO on each page (titles and descriptions)",
  "Easy to add more pages later",
];

type Row = {
  label: string;
  one: string | boolean;
  full: string | boolean;
};

const COMPARISON: Row[] = [
  { label: "Number of pages", one: "1", full: "6" },
  { label: "All core sections", one: true, full: true },
  { label: "Mobile-friendly & fast", one: true, full: true },
  { label: "Photo gallery", one: "6 photos", full: "18+ photos" },
  { label: "Services detail", one: "Overview", full: "Full detail + pricing" },
  { label: "'How it works' FAQ page", one: false, full: true },
  { label: "Dedicated reviews page", one: false, full: true },
  { label: "Contact form", one: false, full: true },
  { label: "SEO", one: "Single page", full: "Every page" },
  { label: "Easy to expand later", one: "Limited", full: true },
  { label: "Price", one: "£450", full: "£799" },
];

/* ------------------------------------------------------------------ */
/* Cell renderer for the comparison table                              */
/* ------------------------------------------------------------------ */

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <Check
        className="mx-auto size-4"
        style={{ color: "var(--accent)" }}
        aria-label="Included"
      />
    );
  }
  if (value === false) {
    return (
      <Minus
        className="mx-auto size-4 text-muted-foreground/40"
        aria-label="Not included"
      />
    );
  }
  return <span className="text-foreground">{value}</span>;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function ProposalPage() {
  return (
    <div className="min-h-screen bg-paper text-foreground">
      {/* Header */}
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
          <img src={LOGO} alt="Spotlessly Clean Ltd" className="h-12 w-auto md:h-14" />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
            Website proposal
          </span>
        </div>
      </header>

      <main>
        {/* Intro */}
        <section className="mx-auto max-w-[1240px] px-6 pt-14 pb-4 md:pt-20">
          <p className="eyebrow">Prepared for Spotlessly Clean</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.97]">
            Two ways to launch
            <br />
            <span className="text-muted-foreground">your new website.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Two options, both built and live so you can see exactly what you'd be getting.
            They differ in scope — how many pages the site has and how much it's set up to
            do. Have a look through each, and the breakdown below, and let me know which
            fits.
          </p>
        </section>

        {/* Option cards */}
        <section className="mx-auto max-w-[1240px] px-6 py-10 md:py-14">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* One-page — £450 */}
            <article className="flex flex-col rounded-[2rem] border border-border bg-card p-8 md:p-10">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">One-page site</p>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-[clamp(2.5rem,6vw,3.5rem)] leading-none tracking-tight">
                  £450
                </span>
                <span className="text-sm text-muted-foreground">one-off</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Everything on a single, scrolling page — services, gallery, reviews and
                contact all in one place. Quick to launch, clean and professional, and easy
                to share.
              </p>

              <ul className="mt-7 grid gap-2.5">
                {ONE_PAGE_INCLUDES.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: "var(--accent)" }}
                    />
                    <span className="text-foreground/90">{inc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex-1" />
              <a
                href="/one-page"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                View the one-page demo
                <ArrowUpRight className="size-4" />
              </a>
            </article>

            {/* Full website — £799 */}
            <article className="flex flex-col rounded-[2rem] border border-border bg-card p-8 md:p-10">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">Full website</p>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-[clamp(2.5rem,6vw,3.5rem)] leading-none tracking-tight">
                  £799
                </span>
                <span className="text-sm text-muted-foreground">one-off</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A six-page site with a dedicated page for each part of the business —
                services, work, how it works, reviews and contact — with room to add more
                later.
              </p>

              <ul className="mt-7 grid gap-2.5">
                {FULL_SITE_INCLUDES.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: "var(--accent)" }}
                    />
                    <span className="text-foreground/90">{inc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex-1" />
              <a
                href="/full-site"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                View the full site
                <ArrowUpRight className="size-4" />
              </a>
            </article>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-y border-border bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <p className="eyebrow">Side by side</p>
            <h2 className="mt-4 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.04]">
              What you get with each.
            </h2>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 pr-4 text-left font-medium text-muted-foreground">
                      Feature
                    </th>
                    <th className="px-4 py-4 text-center font-medium">
                      One-page
                      <span className="block font-mono text-xs font-normal text-muted-foreground">
                        £450
                      </span>
                    </th>
                    <th className="px-4 py-4 text-center font-medium">
                      Full site
                      <span className="block font-mono text-xs font-normal text-muted-foreground">
                        £799
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <td className="py-3.5 pr-4 text-left text-foreground/90">
                        {row.label}
                      </td>
                      <td className="px-4 py-3.5 text-center text-muted-foreground">
                        <Cell value={row.one} />
                      </td>
                      <td className="px-4 py-3.5 text-center text-muted-foreground">
                        <Cell value={row.full} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mx-auto max-w-[1240px] px-6 py-16 md:py-24">
          <div className="rounded-[2rem] border border-border bg-card px-8 py-14 text-center md:px-16 md:py-20">
            <h2 className="mx-auto max-w-2xl text-[clamp(1.75rem,4vw,3rem)] leading-[1.02]">
              Have a look at both, then take your pick.
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
              Both are live and ready. Open each in a new tab, click around, and let me know
              which one you'd like — happy to talk either through.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/one-page"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                One-page demo — £450
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="/full-site"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Full site — £799
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1240px] px-6 py-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Spotlessly Clean Ltd — website proposal
          </p>
        </div>
      </footer>
    </div>
  );
}
