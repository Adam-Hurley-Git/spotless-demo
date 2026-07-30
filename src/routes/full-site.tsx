import { createFileRoute } from "@tanstack/react-router";

import {
  Areas,
  Hero,
  Work,
  Process,
  Quote,
  Reviews,
  Services,
  SiteLayout,
} from "@/components/site/sections";

export const Route = createFileRoute("/full-site")({
  component: FullSiteHome,
  head: () => ({
    meta: [
      { title: "Spotlessly Clean — Cleaning Services in Cardiff" },
      {
        name: "description",
        content:
          "Reliable domestic, deep, end of tenancy and commercial cleaning in Cardiff and surrounding areas. 100% recommended. Get a same-day quote.",
      },
      {
        property: "og:title",
        content: "Spotlessly Clean — Cleaning Services in Cardiff",
      },
      {
        property: "og:description",
        content:
          "Regular cleans, deep cleans, end of tenancy and commercial cleaning across Cardiff.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/full-site" },
    ],
    links: [{ rel: "canonical", href: "/full-site" }],
  }),
});

function FullSiteHome() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Work />
      <Process />
      <Reviews />
      <Areas />
      <Quote />
    </SiteLayout>
  );
}
