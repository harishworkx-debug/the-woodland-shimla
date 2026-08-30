import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { RIDGE_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/location")({
  head: () =>
    buildPageHead({
      title: "Hotel near The Ridge Shimla — Hotel Woodland Location & Directions",
      description: "Hotel Woodland located on The Ridge, Shimla. Walking distance to Mall Road, Lakkar Bazaar, Jakhu Temple. Directions by air, rail, road. Book now.",
      path: "/location",
      image: RIDGE_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Location", "/location"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={RIDGE_IMAGE}
        eyebrow="Location"
        title="A trusted hill-station address."
        description="A short walk from The Ridge, with Mall Road, Lakkar Bazaar and Jakhu Temple all close by."
      />
      <DirectionsSection />
      <MapSection />
      <AttractionsSection preview />
    </SiteShell>
  ),
});
