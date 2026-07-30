import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/sections";
import { STEPS, TRUST, FAQS, WHATSAPP } from "@/components/site/content";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How It Works — Spotlessly Clean, Cardiff" },
      {
        name: "description",
        content:
          "How booking a clean with Spotlessly Clean works, from first message to a spotless space — plus FAQs on insurance, products, pets, cancellations and the areas we cover in Cardiff.",
      },
      { property: "og:title", content: "How It Works — Spotlessly Clean" },
      {
        property: "og:description",
        content:
          "Four simple steps from message to spotless, and answers to the questions we're asked most.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
});

function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* Intro */}
      <section className="mx-auto max-w-[1240px] px-6 pt-14 pb-6 md:pt-20">
        <p className="eyebrow">How it works</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.97]">
          Four steps from
          <br />
          <span className="text-muted-foreground">message to spotless.</span>
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Booking a clean is refreshingly simple. No call centres, no lengthy contracts
            and no rotating cast of strangers — just a trusted team, a clear price and a
            time that suits you.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Get a free quote
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Steps (full detail) */}
      <section className="mx-auto max-w-[1240px] px-6 py-14 md:py-20">
        <div className="grid gap-5">
          {STEPS.map((s, i) => (
            <article
              key={s.title}
              className="rounded-[1.75rem] border border-border bg-card p-8 md:grid md:grid-cols-[0.5fr_1.5fr] md:gap-8 md:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.05]">
                  {s.title}
                </h2>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mt-0">
                {s.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Why book us */}
      <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="eyebrow">Why book us</p>
          <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]">
            The same careful standard, every time.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {TRUST.map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="text-sm font-medium uppercase tracking-[0.12em]">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]">
              Frequently asked questions.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Anything not covered here? Just ask when you get in touch — we're happy
              to talk it through.
            </p>
          </div>
          <div className="grid gap-4">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:bg-secondary/40"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left text-base font-medium md:p-7"
                  >
                    {f.q}
                    <span
                      className={`shrink-0 font-mono text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:px-7 md:pb-7">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1240px] px-6 pb-20 md:pb-28">
        <div className="rounded-[2rem] bg-ink px-8 py-16 text-paper md:px-16 md:py-20">
          <h2 className="max-w-2xl text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.0]">
            Ready to get started?
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-paper/60">
            Send a message with your postcode, the type of clean and how often you'd like
            it. We'll come back with a free, no-obligation price the same day where we
            can.
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
