import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { RIDGE_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-near-scandal-point-shimla")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near Scandal Point Shimla | The Woodland",
      description:
        "Discover a comfortable stay near Scandal Point Shimla with easy access to The Ridge, Mall Road and central Shimla attractions.",
      path: "/hotel-near-scandal-point-shimla",
      image: RIDGE_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near Scandal Point", item: "/hotel-near-scandal-point-shimla" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={RIDGE_IMAGE}
        eyebrow="Central Shimla"
        title="Best Hotel Near Scandal Point Shimla"
        description="Stay near one of Shimla's best-known landmarks and enjoy an easy route to open promenades, shopping streets and local sightseeing."
        meta={["Scandal Point", "The Ridge", "Mall Road"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title text-5xl sm:text-6xl">A central place to pause between discovery and rest</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Explore central Shimla</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Scandal Point sits within the heart of the old town, where visitors can move around the heritage core with relative ease. Staying nearby helps travellers see more in less time.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Comfort built for the day</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                After spending time among the promenades and shopping streets, guests can return to a comfortable and welcoming room that feels far from the rush of the town.
              </p>
            </article>
          </div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            The Woodland Shimla is designed for travellers who want a mountain stay that remains practical and well placed for the central attractions shaping a classic Shimla visit.
          </p>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Stay near the heart of Shimla</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero">
              <Link to="/contact">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
              <Link to="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
