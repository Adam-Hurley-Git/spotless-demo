import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook } from "lucide-react";

import { SiteLayout } from "@/components/site/sections";
import { REVIEWS, FB } from "@/components/site/content";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Reviews — Spotlessly Clean, Cardiff" },
      {
        name: "description",
        content:
          "100% recommended on Facebook. Read real, five-star reviews from Cardiff customers for Spotlessly Clean's regular, deep and end of tenancy cleaning.",
      },
      { property: "og:title", content: "Reviews — Spotlessly Clean" },
      {
        property: "og:description",
        content:
          "Real five-star reviews from Spotlessly Clean customers across Cardiff.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

function ReviewsPage() {
  return (
    <SiteLayout>
      {/* Intro */}
      <section className="mx-auto max-w-[1240px] px-6 pt-14 pb-6 md:pt-20">
        <p className="eyebrow">Reviews</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.97]">
          100% recommended,
          <br />
          <span className="text-muted-foreground">word for word.</span>
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every recommendation left on our Facebook page is a five-star one. These are
            real reviews from real Cardiff customers, reproduced exactly as they were
            written — nothing edited, nothing cherry-picked.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Get a free quote
            </Link>
            <a
              href={FB}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Facebook className="size-4" /> Read on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="mx-auto max-w-[1240px] px-6 py-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
          {[
            ["100%", "Recommended on Facebook"],
            ["★★★★★", "Every review, five stars"],
            ["Insured", "Friendly & fully insured"],
            ["Cardiff", "& surrounding areas"],
          ].map(([k, v]) => (
            <div key={v} className="bg-paper px-5 py-6">
              <dt className="text-2xl tracking-tight">{k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* All reviews */}
      <section className="mx-auto max-w-[1240px] px-6 py-14 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
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
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          More recommendations are added all the time —{" "}
          <a
            href={FB}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            read every review on our Facebook page
          </a>
          .
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1240px] px-6 pb-20 md:pb-28">
        <div className="rounded-[2rem] bg-ink px-8 py-16 text-paper md:px-16 md:py-20">
          <h2 className="max-w-2xl text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.0]">
            Join the list of happy Cardiff homes.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-paper/60">
            See what all the five stars are about. Send us a message for a free,
            no-obligation quote and find out for yourself.
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
