import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Phone, Mail } from "lucide-react";

import {
  Hero,
  Services,
  Work,
  Process,
  Reviews,
  Areas,
  Quote,
} from "@/components/site/sections";
import {
  LOGO,
  EMAIL,
  EMAIL_HREF,
  FB,
  IG,
  PHONE,
  PHONE_HREF,
  WHATSAPP,
} from "@/components/site/content";

/**
 * The £450 "one-page" version of the site.
 *
 * This deliberately re-uses the exact same section components as the homepage,
 * but everything lives on a single scrolling page: the header/footer navigation
 * scrolls to sections (via #hash anchors) instead of linking to dedicated pages,
 * and there are no deeper pages behind it. That's the whole point — it lets the
 * client feel the difference against the full six-page site.
 */
export const Route = createFileRoute("/one-page")({
  component: OnePagePage,
  head: () => ({
    meta: [
      { title: "One-page site demo — Spotlessly Clean" },
      { name: "robots", content: "noindex" },
      {
        name: "description",
        content:
          "Demo of the single-page website option for Spotlessly Clean Ltd.",
      },
    ],
  }),
});

/** Anchor nav for the single page — each item scrolls to a section id. */
const ONE_PAGE_NAV = [
  { label: "Services", hash: "services" },
  { label: "Our work", hash: "work" },
  { label: "How it works", hash: "process" },
  { label: "Reviews", hash: "reviews" },
  { label: "Contact", hash: "quote" },
];

function OnePageHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Spotlessly Clean Ltd" className="h-14 w-auto md:h-16" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {ONE_PAGE_NAV.map((n) => (
            <a
              key={n.label}
              href={`#${n.hash}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 sm:flex">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="Message us on WhatsApp"
              title="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <MessageCircle className="size-[18px]" style={{ color: "var(--accent)" }} />
            </a>
            <a
              href={PHONE_HREF}
              aria-label={`Call us on ${PHONE}`}
              title="Call us"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="size-[18px]" style={{ color: "var(--accent)" }} />
            </a>
            <a
              href={EMAIL_HREF}
              aria-label={`Email us at ${EMAIL}`}
              title="Email us"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="size-[18px]" style={{ color: "var(--accent)" }} />
            </a>
          </div>
          <a
            href="#quote"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 sm:inline-block"
          >
            Get a quote
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/70 bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-[1240px] flex-col gap-1 px-6 py-4">
            {ONE_PAGE_NAV.map((n) => (
              <a
                key={n.label}
                href={`#${n.hash}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-foreground transition-colors hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Get a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function OnePageFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <a href="#top">
          <img src={LOGO} alt="Spotlessly Clean Ltd" className="h-16 w-auto" />
        </a>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {ONE_PAGE_NAV.map((n) => (
            <a key={n.label} href={`#${n.hash}`} className="hover:text-foreground">
              {n.label}
            </a>
          ))}
          <a href={IG} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Instagram
          </a>
          <a href={FB} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Facebook
          </a>
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Spotlessly Clean Ltd
        </p>
      </div>
    </footer>
  );
}

function OnePagePage() {
  return (
    <div className="min-h-screen bg-paper text-foreground">
      <OnePageHeader />
      <main>
        <Hero onePage />
        <Services onePage />
        <Work />
        <Process />
        <Reviews />
        <Areas />
        <Quote onePage />
      </main>
      <OnePageFooter />
    </div>
  );
}
