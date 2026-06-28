import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, ReviewsSection } from "@/components/site/site-shell";
import { REVIEW_GUEST_IMAGE, REVIEW_BG_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript, reviewSchema } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () =>
    buildPageHead({
      title: "Guest Reviews — Hotel Woodland Shimla",
      description: "What guests say about staying at Hotel Woodland Shimla — service, location, comfort and warmth.",
      path: "/reviews",
      image: REVIEW_GUEST_IMAGE,
      scripts: [jsonLdScript(reviewSchema()), jsonLdScript(defaultBreadcrumb("Reviews", "/reviews"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={REVIEW_BG_IMAGE}
        eyebrow="Guest reviews"
        title="Stories from past stays."
        description="Trusted reflections from guests who chose Hotel Woodland Shimla."
      />
      <ReviewsSection />
    </SiteShell>
  ),
});
