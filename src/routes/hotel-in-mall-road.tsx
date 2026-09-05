import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { MALL_ROAD_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-in-mall-road")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near Mall Road Shimla | The Woodland Shimla",
      description:
        "Looking for the best hotel near Mall Road Shimla? Explore The Woodland Shimla for a comfortable stay with convenient access to Shimla's shopping, dining and attractions.",
      path: "/hotel-in-mall-road",
      image: MALL_ROAD_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near Mall Road", item: "/hotel-in-mall-road" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={MALL_ROAD_IMAGE}
        eyebrow="Location guide"
        title="Best Hotel Near Mall Road Shimla"
        description="Stay within easy reach of Shimla's most-loved streets, shopping lanes and cultural sights while enjoying a comfortable mountain base."
        meta={["Mall Road", "The Ridge", "Shimla shopping"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h2 className="section-title text-5xl sm:text-6xl">A convenient base for shopping, dining and evening walks</h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Guests choosing a hotel near Mall Road often want a stay that feels central without being overwhelmed by the town's busiest energy. The Woodland Shimla offers that balance, with a comfortable setting and an easy route to the heritage core of Shimla.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Why guests prefer this area</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Mall Road is one of Shimla's defining experiences, bringing together cafes, storefronts, leisurely evening walks and a connection to the heart of the hill station. Staying nearby means guests can step out to explore without planning a long journey back.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">What to see around Mall Road</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                The area around the boulevard is filled with heritage character, local shopping, walkable routes and easy access to central attractions such as The Ridge, Christ Church and Lakkar Bazaar.
              </p>
            </article>
          </div>

          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              The presence of The Ridge nearby adds to the appeal, giving travellers access to open views and some of Shimla's most recognisable landmarks. It is ideal for guests who want a hotel that feels connected to the town while still offering a restful return at the end of the day.
            </p>
            <p>
              The Woodland Shimla supports that experience with comfortable rooms, helpful service and a calm mountain atmosphere that suits both short city breaks and relaxed family stays.
            </p>
          </div>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Plan a stay near Shimla's most loved streets</h2>
          <p className="mt-4 text-base leading-8 text-primary-foreground/80">
            Discover a comfortable place to stay with easy access to Mall Road, The Ridge and the heart of Shimla's heritage district.
          </p>
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
