import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, HomePage } from "@/components/site/site-shell";
import { buildPageHead, jsonLdScript, websiteSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: "Hotel Woodland Shimla — Luxury Boutique Stay Near The Ridge",
      description:
        "A boutique luxury hotel in Shimla near The Ridge & Mall Road. Elegant rooms, warm mountain hospitality, in-house dining and direct booking.",
      path: "/",
      scripts: [jsonLdScript(websiteSchema())],
    }),
  component: () => (
    <SiteShell>
      <HomePage />
    </SiteShell>
  ),
});
