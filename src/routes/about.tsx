import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, TwoColumnShowcase, AmenitiesSection, ReviewsSection, MapSection } from "@/components/site/site-shell";
import { EXTERIOR_DAY_IMAGE, HERO_EXTERIOR_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildPageHead({
      title: "About — Hotel Woodland Shimla",
      description: "Discover the boutique story behind Hotel Woodland Shimla — heritage location, warm hospitality, and a slower mountain rhythm near The Ridge.",
      path: "/about",
      image: HERO_EXTERIOR_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("About", "/about"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={HERO_EXTERIOR_IMAGE}
        eyebrow="About the hotel"
        title="A woodland address in old Shimla."
        description="Hotel Woodland Shimla brings together heritage-town access and a quieter, more curated stay near The Ridge."
        meta={["Boutique hospitality", "Near The Ridge", "Family-owned care"]}
      />
      <TwoColumnShowcase
        image={EXTERIOR_DAY_IMAGE}
        alt="Hotel Woodland Shimla hillside view"
        eyebrow="The story"
        title="Built for guests who value calm hospitality over scale."
        description="From the timber-toned interiors to the trusted location, every detail is shaped around an unhurried, considered Shimla stay."
        cta={{ label: "View rooms", to: "/rooms" }}
      />
      <AmenitiesSection />
      <ReviewsSection />
      <MapSection />
    </SiteShell>
  ),
});
