import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, HomePage } from "@/components/site/site-shell";
import { buildPageHead, jsonLdScript, websiteSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: "Hotel Woodland Shimla — Comfortable Rooms on The Ridge Near Mall Road",
      description:
        "Hotel Woodland offers comfortable, affordable rooms in Shimla on The Ridge. Family-friendly hotel near Mall Road, Lakkar Bazaar & Jakhu Temple. Mountain views, restaurant, WiFi. ₹2,500–₹4,000/night. Book now.",
      path: "/",
      scripts: [jsonLdScript(websiteSchema())],
    }),
  component: () => (
    <SiteShell>
      <HomePage />
    </SiteShell>
  ),
});
