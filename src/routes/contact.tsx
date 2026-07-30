import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";

import { SiteLayout } from "@/components/site/sections";
import {
  SERVICES,
  AREAS,
  IG,
  FB,
  PHONE,
  PHONE_HREF,
  WHATSAPP,
  EMAIL,
  EMAIL_HREF,
  ADDRESS,
} from "@/components/site/content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Get a Quote — Spotlessly Clean, Cardiff" },
      {
        name: "description",
        content:
          "Get a free, no-obligation cleaning quote in Cardiff. Message us on WhatsApp, Instagram or Facebook, call, email, or send the quote form.",
      },
      { property: "og:title", content: "Contact & Get a Quote — Spotlessly Clean" },
      {
        property: "og:description",
        content:
          "Free, no-obligation cleaning quotes across Cardiff. Get in touch today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const FREQUENCIES = [
  "One-off",
  "Weekly",
  "Fortnightly",
  "Monthly",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-2xl border border-border bg-paper px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/30";
const labelClass = "text-sm font-medium text-foreground";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string | null)?.trim() ?? "";

    const name = get("name");
    const service = get("service");
    const frequency = get("frequency");

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Postcode: ${get("postcode")}`,
      `Type of clean: ${service}`,
      `Frequency: ${frequency}`,
      "",
      "Details:",
      get("message"),
    ];

    const subject = `Quote request — ${service || "cleaning"}${name ? ` (${name})` : ""}`;
    const mailto = `${EMAIL_HREF}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <SiteLayout>
      {/* Intro */}
      <section className="mx-auto max-w-[1240px] px-6 pt-14 pb-6 md:pt-20">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.97]">
          Let's get you a
          <br />
          <span className="text-muted-foreground">free, no-obligation quote.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          The quickest way to reach us is a message on WhatsApp, Instagram or Facebook —
          or fill in the form below and it'll land straight in our inbox. Same-day replies
          wherever possible.
        </p>
      </section>

      {/* Quick contact tiles */}
      <section className="mx-auto max-w-[1240px] px-6 py-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
          >
            <MessageCircle className="size-6" style={{ color: "var(--accent)" }} />
            <div>
              <p className="text-sm font-medium">WhatsApp</p>
              <p className="text-sm text-muted-foreground">Fastest reply</p>
            </div>
          </a>
          <a
            href={PHONE_HREF}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
          >
            <Phone className="size-6" style={{ color: "var(--accent)" }} />
            <div>
              <p className="text-sm font-medium">Call us</p>
              <p className="text-sm text-muted-foreground">{PHONE}</p>
            </div>
          </a>
          <a
            href={EMAIL_HREF}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
          >
            <Mail className="size-6" style={{ color: "var(--accent)" }} />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="truncate text-sm text-muted-foreground">{EMAIL}</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
            <MapPin className="size-6" style={{ color: "var(--accent)" }} />
            <div>
              <p className="text-sm font-medium">Based in Cardiff</p>
              <p className="text-sm text-muted-foreground">& surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + aside */}
      <section className="mx-auto max-w-[1240px] px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.05]">
              Request a quote
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us a little about your space. The more detail you give, the more accurate
              your quote.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-border bg-secondary/60 p-8 text-center">
                <p className="text-lg">Thanks — your email is ready to send.</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your email app should have opened with the details filled in. If it didn't,
                  message us on{" "}
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    WhatsApp
                  </a>{" "}
                  or email{" "}
                  <a href={EMAIL_HREF} className="underline underline-offset-4">
                    {EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-paper"
                >
                  Edit the form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Mobile number"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="postcode" className={labelClass}>
                      Postcode
                    </label>
                    <input
                      id="postcode"
                      name="postcode"
                      autoComplete="postal-code"
                      placeholder="e.g. CF23"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="service" className={labelClass}>
                      Type of clean
                    </label>
                    <select id="service" name="service" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="frequency" className={labelClass}>
                      How often
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Choose frequency
                      </option>
                      {FREQUENCIES.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className={labelClass}>
                    Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Number of bedrooms and bathrooms, anything specific you'd like included, and a rough idea of dates or times that suit you."
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                  >
                    Send quote request
                  </button>
                  <span className="text-xs text-muted-foreground">
                    Opens your email app, pre-filled. No obligation.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Aside */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-[1.75rem] border border-border bg-card p-8">
              <p className="eyebrow">Prefer to message?</p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                >
                  <MessageCircle className="size-4" /> WhatsApp us
                </a>
                <a
                  href={IG}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
                <a
                  href={FB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Facebook className="size-4" /> Facebook
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-ink p-8 text-paper">
              <p className="eyebrow" style={{ color: "var(--accent)" }}>
                Areas covered
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {AREAS.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-paper/20 px-3 py-1.5 text-xs text-paper/80"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-paper/45">
                {ADDRESS}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
