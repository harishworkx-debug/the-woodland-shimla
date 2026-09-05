import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero } from "@/components/site/site-shell";
import { MALL_ROAD_IMAGE, RIDGE_IMAGE, JAKHU_IMAGE, LAKKAR_IMAGE, GAIETY_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/shimla-travel-guide")({
  head: () =>
    buildPageHead({
      title: "Shimla Travel Guide | Places to Visit, Stay & Travel Tips",
      description:
        "Explore the Shimla travel guide for top attractions, the best time to visit, travel tips and where to stay near The Ridge and major sights.",
      path: "/shimla-travel-guide",
      image: RIDGE_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Shimla Travel Guide", item: "/shimla-travel-guide" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={RIDGE_IMAGE}
        eyebrow="Travel guide"
        title="Shimla Travel Guide"
        description="Plan a memorable Shimla trip with sightseeing ideas, practical travel advice and a comfortable place to stay near the town's most-loved attractions."
        meta={["The Ridge", "Mall Road", "Kufri"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-5xl space-y-10">
          <div>
            <h2 className="section-title text-5xl sm:text-6xl">Best Places to Visit in Shimla</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: "The Ridge", image: RIDGE_IMAGE, body: "A central promenade with open views, colonial atmosphere and a strong sense of old Shimla." },
              { title: "Mall Road", image: MALL_ROAD_IMAGE, body: "One of the best places for shopping, local cafés, evening walks and a lively hill-station atmosphere." },
              { title: "Jakhoo Temple", image: JAKHU_IMAGE, body: "A scenic spiritual stop with a strong sense of place and panoramic surroundings." },
              { title: "Christ Church", image: GAIETY_IMAGE, body: "A heritage landmark and one of the town's most recognisable architectural stops." },
              { title: "Lakkar Bazaar", image: LAKKAR_IMAGE, body: "A market known for wooden crafts, local charm and easy access from central Shimla." },
              { title: "Kufri", image: MALL_ROAD_IMAGE, body: "A mountain-facing excursion that suits travellers hoping for snowy landscapes and a broader hill experience." },
            ].map((place) => (
              <article key={place.title} className="glass-panel overflow-hidden rounded-[2rem]">
                <img src={place.image} alt={place.title} className="h-56 w-full object-cover" loading="lazy" />
                <div className="space-y-3 p-5">
                  <h3 className="text-3xl">{place.title}</h3>
                  <p className="text-sm leading-8 text-muted-foreground">{place.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h2 className="text-3xl">Best Time to Visit Shimla</h2>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                The best time to visit Shimla depends on the experience you want. Spring and early summer are ideal for pleasant weather and sightseeing, while the winter months bring a cooler, more atmospheric hill-town feel.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h2 className="text-3xl">How to Reach Shimla</h2>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Shimla is well connected by road and rail, with the railway station acting as a convenient arrival point for visitors exploring the town and nearby attractions.
              </p>
            </article>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h2 className="text-3xl">Where to Stay in Shimla</h2>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                For travellers looking for a comfortable base near central attractions, The Woodland Shimla offers a welcoming hill-station stay close to The Ridge and the town's heritage core.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h2 className="text-3xl">Shimla Travel Tips</h2>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Dress in layers, plan walking routes carefully, and leave time to enjoy the slower rhythm of the town. A hotel near The Ridge makes it easier to move through Shimla without rushing.
              </p>
            </article>
          </div>

          <article className="glass-panel rounded-[2rem] p-6">
            <h2 className="text-3xl">Where to Stay Near The Ridge</h2>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">
              For guests wanting easy access to the best of Shimla, The Woodland Shimla is a practical choice. Its central setting helps travellers move between The Ridge, Mall Road, shopping streets and local heritage stops with less hassle and more comfort.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Plan your Shimla stay with confidence</h2>
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
