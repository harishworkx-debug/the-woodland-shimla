import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { RIDGE_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-near-the-ridge-shimla")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near The Ridge Shimla | The Woodland Shimla",
      description:
        "Stay near The Ridge in Shimla with comfortable accommodation, convenient access to attractions and a relaxing mountain setting at The Woodland Shimla.",
      path: "/hotel-near-the-ridge-shimla",
      image: RIDGE_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near The Ridge", item: "/hotel-near-the-ridge-shimla" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={RIDGE_IMAGE}
        eyebrow="Shimla location"
        title="Best Hotel Near The Ridge Shimla"
        description="A convenient hill-station stay near Shimla's heritage core, with easy access to scenic promenades, shopping and local sightseeing."
        meta={["The Ridge", "Christ Church", "Mall Road"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title text-5xl sm:text-6xl">Stay close to the heart of Shimla</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">The Ridge and beyond</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                The Ridge is one of the best places to start a Shimla day, with open views, a strong sense of the town's history and walkable access to nearby landmarks. Staying nearby keeps key sightseeing moments close at hand.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Walkable local routes</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                From The Ridge, guests can easily move toward Mall Road, Scandal Point, Christ Church and Lakkar Bazaar. It is a practical way to experience Shimla's heritage without relying heavily on transport.
              </p>
            </article>
          </div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            The Woodland Shimla suits guests who want a stay that is central yet comfortable. The location brings convenience to city exploration while the hotel itself keeps the experience calm, warm and restorative.
          </p>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-surface p-8 text-center sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Choose a central Shimla stay</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            For guests wanting convenient access to The Ridge, Mall Road and nearby heritage attractions, The Woodland Shimla offers a welcoming base.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero">
              <Link to="/contact">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/rooms">Check Rooms</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
