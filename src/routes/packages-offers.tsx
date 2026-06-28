import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, OffersSection } from "@/components/site/site-shell";
import { EXTERIOR_DAY_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/packages-offers")({
  head: () =>
    buildPageHead({
      title: "Packages & Offers — Hotel Woodland Shimla",
      description: "Weekend escapes, family vacations, mountain getaways and early-booking offers tailored to direct guests.",
      path: "/packages-offers",
      image: EXTERIOR_DAY_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Packages & Offers", "/packages-offers"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={EXTERIOR_DAY_IMAGE}
        eyebrow="Packages & offers"
        title="Stays curated around how you travel."
        description="From weekend escapes to longer mountain unwinds, each idea is shaped around real guest rhythms."
      />
      <OffersSection />
    </SiteShell>
  ),
});
