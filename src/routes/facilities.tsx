import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, AmenitiesSection, ExperienceSection } from "@/components/site/site-shell";
import { LOUNGE_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/facilities")({
  head: () =>
    buildPageHead({
      title: "Facilities — Hotel Woodland Shimla",
      description: "Restaurant, WiFi, garden, terrace, room service and 24x7 support at Hotel Woodland Shimla.",
      path: "/facilities",
      image: LOUNGE_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Facilities", "/facilities"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={LOUNGE_IMAGE}
        eyebrow="Facilities"
        title="Considered comforts for a slower mountain stay."
        description="From dependable WiFi to in-house dining and 24x7 support, the facilities are designed to feel quietly reassuring."
      />
      <AmenitiesSection />
      <ExperienceSection />
    </SiteShell>
  ),
});
