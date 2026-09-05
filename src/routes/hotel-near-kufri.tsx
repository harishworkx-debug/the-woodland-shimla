import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { MALL_ROAD_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-near-kufri")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near Kufri | The Woodland Shimla",
      description:
        "Plan your Shimla and Kufri trip with a comfortable stay at The Woodland Shimla and easy access to mountain attractions and sightseeing.",
      path: "/hotel-near-kufri",
      image: MALL_ROAD_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near Kufri", item: "/hotel-near-kufri" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={MALL_ROAD_IMAGE}
        eyebrow="Mountain getaway"
        title="Best Hotel Near Kufri"
        description="A comfortable Shimla base for travellers planning a Kufri day trip, family sightseeing and mountain breaks."
        meta={["Kufri", "Snow season", "Family travel"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title text-5xl sm:text-6xl">A practical base for a Kufri trip from Shimla</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Kufri day trips</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Kufri is a favourite for visitors seeking mountain air, open landscapes and seasonal snow play. A Shimla hotel near the town allows more flexible planning for day-long outings.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Family-friendly comfort</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Travellers with children or mixed-age groups often value the ease of returning to a comfortable hotel after a full day in the hills, with warm dining and a restful evening waiting ahead.
              </p>
            </article>
          </div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            The Woodland Shimla gives guests a dependable place to recharge between sightseeing days, making it easier to enjoy both Shimla and the nearby Kufri experience without feeling rushed.
          </p>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Plan your Shimla and Kufri stay</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero">
              <Link to="/contact">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
              <Link to="/shimla-travel-guide">Shimla Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
