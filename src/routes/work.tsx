import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/sections";
import { GALLERY, IG, SERVICES } from "@/components/site/content";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Our Work — Spotlessly Clean, Cardiff" },
      {
        name: "description",
        content:
          "See real homes across Cardiff cleaned by Dan — kitchens, bathrooms, deep cleans and end of tenancy finishes. Browse the gallery and follow along on Instagram.",
      },
      { property: "og:title", content: "Our Work — Spotlessly Clean" },
      {
        property: "og:description",
        content:
          "A gallery of real cleans by Spotlessly Clean across Cardiff and the surrounding areas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
});

function WorkPage() {
  return (
    <SiteLayout>
      {/* Intro */}
      <section className="mx-auto max-w-[1240px] px-6 pt-14 pb-6 md:pt-20">
        <p className="eyebrow">Our work</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.97]">
          Real homes,
          <br />
          <span className="text-muted-foreground">cleaned by Dan.</span>
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every photo here is a real Cardiff home or space cleaned by Dan — no stock
            images. From weekly cleans that keep on top of a busy household to deep cleans
            and end of tenancy resets, this is the standard you can expect every visit.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Get a free quote
            </Link>
            <a
              href={IG}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1240px] px-6 py-14 md:py-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
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
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          There's plenty more where these came from —{" "}
          <a
            href={IG}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            see the latest cleans on Instagram
          </a>
          .
        </p>
      </section>

      {/* What you're looking at */}
      <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">The kind of work we do</p>
              <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]">
                Cleans of every shape and size.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A snapshot of what Dan is booked for most — each one quoted on what the
              space actually needs.
            </p>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li
                key={s.slug}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 md:py-28">
        <div className="rounded-[2rem] bg-ink px-8 py-16 text-paper md:px-16 md:py-20">
          <h2 className="max-w-2xl text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.0]">
            Want your place looking like this?
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-paper/60">
            Send Dan a message with your postcode and what you need, and he'll come back
            with a free, no-obligation price — usually the same day.
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
