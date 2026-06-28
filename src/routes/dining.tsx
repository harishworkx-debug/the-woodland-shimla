import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, DiningSection, ReviewsSection } from "@/components/site/site-shell";
import { DINING_RESTAURANT_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/dining")({
  head: () =>
    buildPageHead({
      title: "Dining — Hotel Woodland Shimla",
      description: "Indian and Chinese cuisine, all-day comfort food and a calm in-house dining experience at Hotel Woodland Shimla.",
      path: "/dining",
      image: DINING_RESTAURANT_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Dining", "/dining"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={DINING_RESTAURANT_IMAGE}
        eyebrow="Dining"
        title="A warm in-house dining story."
        description="Indian and Chinese cuisine served with the unhurried mood of a mountain stay."
      />
      <DiningSection />
      <ReviewsSection />
    </SiteShell>
  ),
});
