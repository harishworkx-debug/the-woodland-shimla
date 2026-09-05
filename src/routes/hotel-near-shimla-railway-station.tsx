import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { MALL_ROAD_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-near-shimla-railway-station")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near Shimla Railway Station | The Woodland Shimla",
      description:
        "Looking for a hotel near Shimla Railway Station? Discover comfortable accommodation at The Woodland Shimla with access to Shimla's major attractions.",
      path: "/hotel-near-shimla-railway-station",
      image: MALL_ROAD_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near Shimla Railway Station", item: "/hotel-near-shimla-railway-station" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={MALL_ROAD_IMAGE}
        eyebrow="Rail access"
        title="Best Hotel Near Shimla Railway Station"
        description="A comfortable and practical stop for guests arriving by rail and wishing to explore the heritage side of Shimla with ease."
        meta={["Toy train", "Transport", "Central access"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title text-5xl sm:text-6xl">Easy arrivals and smooth city exploration</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Travel convenience</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Guests arriving in Shimla by train often value a hotel that keeps transfers straightforward and central sightseeing easy to plan. This location supports that flow without sacrificing comfort.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Nearby sightseeing</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                From the station, it is easy to explore the heritage district, Mall Road, The Ridge and a range of local attractions that define a classic Shimla getaway.
              </p>
            </article>
          </div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            The Woodland Shimla offers a calm, hospitable base for visitors moving through the station area, whether they are arriving for a short stay or settling in for a family trip around Shimla.
          </p>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-surface p-8 text-center sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Arrive in Shimla and settle in comfortably</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero">
              <Link to="/contact">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
