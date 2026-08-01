import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

// The site is currently paused. This holding page is rendered for every route
// (see RootComponent and notFoundComponent below) so no page of the app is
// reachable. To bring the site back, revert the commit that introduced this.
function PausedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
          This site is no longer available
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Thanks for visiting. If you need to get in touch, you can reach us by email at{" "}
          <a
            href="mailto:hurleyadam10@gmail.com"
            className="text-foreground underline underline-offset-4"
          >
            hurleyadam10@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Spotlessly Clean — Cleaning Services in Cardiff" },
      {
        name: "description",
        content:
          "Reliable domestic, commercial and end of tenancy cleaning across Cardiff and surrounding areas.",
      },
      { property: "og:site_name", content: "Spotlessly Clean Cleaning Services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=DM+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Spotlessly Clean Cleaning Services",
          description:
            "Quality, reliable and professional cleaning services based in Cardiff, covering surrounding areas.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "26 Dulverton Avenue",
            addressLocality: "Cardiff",
            addressCountry: "GB",
          },
          areaServed: "Cardiff and surrounding areas",
          sameAs: [
            "https://www.instagram.com/spotlesslyclean.ltd/",
            "https://www.facebook.com/profile.php?id=61588053458427",
          ],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: PausedPage,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  // Site is paused: render the holding page for every route instead of the
  // normal <Outlet /> so none of the app's pages are reachable.
  return <PausedPage />;
}
