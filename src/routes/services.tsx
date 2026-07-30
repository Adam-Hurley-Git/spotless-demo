import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SiteLayout } from "@/components/site/sections";
import { SERVICES, EXTRAS, PRICING, TRUST } from "@/components/site/content";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services & Pricing — Spotlessly Clean, Cardiff" },
      {
        name: "description",
        content:
          "Regular, deep, end of tenancy, office, oven, Airbnb, after-builders and upholstery cleaning in Cardiff. See what's included and how our transparent pricing works.",
      },
      { property: "og:title", content: "Services & Pricing — Spotlessly Clean" },
      {
        property: "og:description",
        content:
          "Everything Spotlessly Clean cleans, what's included, and how our no-upsell pricing works.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <SiteLayout>
      {/* Intro */}
      <section className="mx-auto max-w-[1240px] px-6 pt-14 pb-6 md:pt-20">
        <p className="eyebrow">Services &amp; pricing</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.97]">
          Everything we clean,
          <br />
          <span className="text-muted-foreground">and exactly what you get.</span>
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            From a regular weekly slot to a full end of tenancy clean, every job is carried
            out to the same careful standard. No fixed packages and no upselling —
            just the clean your space actually needs.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Get a free quote
            </Link>
            <Link
              to="/work"
              className="rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="mx-auto max-w-[1240px] px-6 py-14 md:py-20">
        <div className="grid gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 overflow-hidden rounded-[1.75rem] border border-border bg-card md:grid md:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <h2 className="mt-3 text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.05]">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
                <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="mt-0.5 size-4 shrink-0"
                        style={{ color: "var(--accent)" }}
                      />
                      <span className="text-foreground/90">{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Link
                    to="/contact"
                    className="inline-block rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    Quote this clean →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {EXTRAS.map((e) => (
            <li
              key={e}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {e}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">How pricing works</p>
              <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]">
                Clear prices, quoted before we start.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Every home is different, so we price on the size and condition of the space
              rather than forcing it into a package. You'll always know the price before any
              work begins — no surprises, no hidden extras.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border bg-card">
            {PRICING.map((p, i) => (
              <div
                key={p.name}
                className={`flex flex-col gap-2 p-7 sm:flex-row sm:items-center sm:justify-between md:px-10 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="sm:max-w-md">
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-sm tracking-tight text-foreground sm:text-right">
                  {p.guide}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Guide prices only, to give you a rough idea — your quote is always confirmed in
            writing first.
          </p>
        </div>
      </section>

      {/* Why book us */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 md:py-24">
        <p className="eyebrow">Why book us</p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {TRUST.map(([t, b]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-sm font-medium uppercase tracking-[0.12em]">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1240px] px-6 pb-20 md:pb-28">
        <div className="rounded-[2rem] bg-ink px-8 py-16 text-paper md:px-16 md:py-20">
          <h2 className="max-w-2xl text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.0]">
            Not sure which clean you need?
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-paper/60">
            Tell us a little about your space and we'll recommend the right option and send
            a free, no-obligation price.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85"
          >
            Get your free quote
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
