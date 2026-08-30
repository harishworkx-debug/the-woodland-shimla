import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, AttractionsSection, MapSection } from "@/components/site/site-shell";
import { ATTRACTIONS_HEADER_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/nearby-attractions")({
  head: () =>
    buildPageHead({
      title: "Attractions near Hotel Woodland — Mall Road, Lakkar Bazaar, Jakhu Temple, Kufri",
      description: "Hotel Woodland near attractions: The Ridge, Mall Road, Lakkar Bazaar, Jakhu Temple, Gaiety Theatre, Kufri, Naldehra. Walk or short drive from hotel.",
      path: "/nearby-attractions",
      image: ATTRACTIONS_HEADER_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Nearby Attractions", "/nearby-attractions"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={ATTRACTIONS_HEADER_IMAGE}
        eyebrow="Around the hotel"
        title="Shimla, in walkable reach."
        description="The town's most loved heritage and cultural landmarks are minutes from the hotel."
      />
      <AttractionsSection />
      <MapSection />
    </SiteShell>
  ),
});
