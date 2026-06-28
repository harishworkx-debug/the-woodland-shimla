import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, AttractionsSection, MapSection } from "@/components/site/site-shell";
import { RIDGE_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/nearby-attractions")({
  head: () =>
    buildPageHead({
      title: "Nearby Attractions — Hotel Woodland Shimla",
      description: "The Ridge, Mall Road, Jakhu Temple, Gaiety Theatre and Lakkar Bazaar — all within easy reach of Hotel Woodland Shimla.",
      path: "/nearby-attractions",
      image: RIDGE_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Nearby Attractions", "/nearby-attractions"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={RIDGE_IMAGE}
        eyebrow="Around the hotel"
        title="Shimla, in walkable reach."
        description="The town's most loved heritage and cultural landmarks are minutes from the hotel."
      />
      <AttractionsSection />
      <MapSection />
    </SiteShell>
  ),
});
