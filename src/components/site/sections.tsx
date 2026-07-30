import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import {
  ADDRESS,
  AREAS,
  EMAIL,
  EMAIL_HREF,
  EXTRAS,
  FB,
  GALLERY,
  HERO_IMG,
  HOME_SERVICES,
  IG,
  LOGO,
  NAV,
  PHONE,
  PHONE_HREF,
  REVIEWS,
  TRUST,
  WHATSAPP,
  type NavItem,
} from "./content";

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function NavLink({
  item,
  className,
  onClick,
}: {
  item: NavItem;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to={item.to}
      hash={item.hash}
      onClick={onClick}
      className={className}
    >
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Spotlessly Clean Ltd" className="h-14 w-auto md:h-16" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              item={n}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 sm:inline-block"
          >
            Get a quote
          </Link>
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
            {NAV.map((n) => (
              <NavLink
                key={n.label}
                item={n}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-foreground transition-colors hover:bg-secondary"
              />
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1240px] px-6 pt-14 pb-6 md:pt-24">
      <p className="eyebrow">Cardiff · Domestic &amp; commercial</p>
      <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7.5vw,5.6rem)] leading-[0.95]">
        Spotless spaces,
        <br />
        <span className="text-muted-foreground">happy places.</span>
      </h1>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
          Spotlessly Clean Ltd is a trusted Cardiff cleaning service run by Dan. Weekly,
          fortnightly and monthly cleans, deep cleans, end of tenancy, Airbnb, ovens,
          upholstery and office work — friendly, professional and fully insured.
        </p>
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Free, no-obligation quote
          </Link>
          <Link
            to="/"
            hash="work"
            className="rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            See our work
          </Link>
        </div>
      </div>

      <figure className="mt-12 overflow-hidden rounded-[2rem]">
        <img
          src={HERO_IMG}
          alt="Immaculately cleaned living room in a Cardiff home"
          className="h-[46vh] w-full object-cover md:h-[64vh]"
        />
      </figure>

      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
        {[
          ["100%", "Recommended on Facebook"],
          ["Insured", "Friendly & fully insured"],
          ["7 days", "Cleans to suit your schedule"],
          ["Cardiff", "& surrounding areas"],
        ].map(([k, v]) => (
          <div key={v} className="bg-paper px-5 py-6">
            <dt className="text-2xl tracking-tight">{k}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services (home summary — full detail lives on /services)            */
/* ------------------------------------------------------------------ */

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] px-6 py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">What we clean</p>
          <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]">
            Professional cleaning you can rely on.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Every job is quoted on what the space actually needs — no fixed packages,
          no upselling.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {HOME_SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="group overflow-hidden rounded-[1.75rem] border border-border bg-card"
          >
            <div className="overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-start gap-5 p-7">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-2">
          {EXTRAS.map((e) => (
            <li
              key={e}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {e}
            </li>
          ))}
        </ul>
        <Link
          to="/services"
          className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
        >
          View all services &amp; pricing
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Work gallery                                                        */
/* ------------------------------------------------------------------ */

export function Work() {
  return (
    <section id="work" className="border-y border-border bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Our work</p>
            <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]">
              Real homes, cleaned by Dan.
            </h2>
          </div>
          <a
            href={IG}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline underline-offset-4 hover:text-muted-foreground"
          >
            More on Instagram
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {GALLERY.map((g) => (
            <figure key={g.src} className="overflow-hidden rounded-[1.5rem]">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

const STEPS = [
  ["Message us", "Send a DM on Instagram or Facebook with your postcode and what you need."],
  ["Get a quote", "Free, no-obligation price and a time that suits you."],
  ["We clean", "Dan turns up on time with everything needed and works through the checklist."],
  ["Enjoy it", "Come back to a spotless space. Book it again whenever you like."],
];

export function Process() {
  return (
    <section id="process" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <p className="eyebrow" style={{ color: "var(--accent)" }}>
          How it works
        </p>
        <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]">
          Four steps from message to spotless.
        </h2>
        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {STEPS.map(([t, b], i) => (
            <li key={t} className="rounded-2xl border border-paper/10 bg-paper/5 p-7">
              <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                0{i + 1}
              </span>
              <h3 className="mt-5 text-lg">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{b}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {TRUST.map(([t, b]) => (
            <div key={t} className="rounded-2xl bg-paper/5 p-7">
              <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-paper/90">
                {t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Reviews                                                             */
/* ------------------------------------------------------------------ */

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-[1240px] px-6 py-20 md:py-28">
      <p className="eyebrow">Reviews</p>
      <div className="mt-4 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]">100% recommended.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every recommendation left on our Facebook page is a five-star one. These are
            real ones, word for word.
          </p>
          <a
            href={FB}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-muted-foreground"
          >
            Read all reviews on Facebook
          </a>
        </div>

        <div className="grid gap-5">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10"
            >
              <div className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                ★★★★★
              </div>
              <blockquote className="mt-5 text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.5] tracking-tight">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                {r.name} — recommends Spotlessly Clean Cleaning Services
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Areas                                                               */
/* ------------------------------------------------------------------ */

export function Areas() {
  return (
    <section id="areas" className="border-y border-border bg-secondary/60 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-6 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05]">
            Based in Cardiff, covering the surrounding areas.
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2">
          {AREAS.map((a) => (
            <li
              key={a}
              className="rounded-full border border-border bg-paper px-4 py-2 text-sm"
            >
              {a}
            </li>
          ))}
          <li className="rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
            Not listed? Ask anyway
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Quote CTA                                                           */
/* ------------------------------------------------------------------ */

export function Quote() {
  return (
    <section id="quote" className="mx-auto max-w-[1240px] px-6 py-20 md:py-28">
      <div className="rounded-[2rem] bg-ink px-8 py-16 text-paper md:px-16 md:py-24">
        <h2 className="max-w-2xl text-[clamp(2.1rem,5vw,4rem)] leading-[0.98]">
          Get in touch for a free, no obligation quote.
        </h2>
        <p className="mt-5 max-w-md leading-relaxed text-paper/60">
          Send a message with your postcode, the type of clean and how often you would
          like it. We will come back with a price the same day where we can.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85"
          >
            Get a quote
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-paper/25 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-paper/10"
          >
            WhatsApp Dan
          </a>
          <a
            href={PHONE_HREF}
            className="rounded-full border border-paper/25 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-paper/10"
          >
            Call Dan
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-paper/60">
          <a href={PHONE_HREF} className="transition-colors hover:text-paper">
            {PHONE}
          </a>
          <a href={EMAIL_HREF} className="transition-colors hover:text-paper">
            {EMAIL}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={IG}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-paper/25 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-paper/10"
          >
            Message on Instagram
          </a>
          <a
            href={FB}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-paper/25 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-paper/10"
          >
            Message on Facebook
          </a>
        </div>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-paper/45">
          {ADDRESS}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <Link to="/">
          <img src={LOGO} alt="Spotlessly Clean Ltd" className="h-16 w-auto" />
        </Link>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <NavLink key={n.label} item={n} className="hover:text-foreground" />
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
