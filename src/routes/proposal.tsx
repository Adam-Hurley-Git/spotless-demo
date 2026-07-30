import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * The proposal is now the landing page (/). This route only exists to keep any
 * previously shared /proposal links working — it redirects to the root.
 */
export const Route = createFileRoute("/proposal")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
