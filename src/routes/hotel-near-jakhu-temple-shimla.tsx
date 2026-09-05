import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { JAKHU_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-near-jakhu-temple-shimla")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near Jakhoo Temple Shimla | The Woodland",
      description:
        "Find a comfortable hotel near Jakhoo Temple Shimla with easy access to the temple, ropeway and central Shimla attractions.",
      path: "/hotel-near-jakhu-temple-shimla",
      image: JAKHU_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near Jakhoo Temple", item: "/hotel-near-jakhu-temple-shimla" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={JAKHU_IMAGE}
        eyebrow="Temple district"
        title="Best Hotel Near Jakhoo Temple Shimla"
        description="Pick a comfortable base for temple visits, ropeway rides and easy exploration of Shimla's surrounding viewpoints."
        meta={["Jakhoo Temple", "Jakhoo Hill", "Ropeway"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title text-5xl sm:text-6xl">A peaceful base for hill views and temple visits</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Jakhoo Temple and its surroundings</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Jakhoo Temple is one of the most recognisable spiritual and scenic landmarks in Shimla. A stay near this side of town can make early temple visits and sightseeing more relaxed.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Nearby attractions</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                The area around Jakhoo also offers access to viewpoints, quieter roads and the wider heritage district, making it a favourite for guests who like a little more elevation and scenery.
              </p>
            </article>
          </div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            The Woodland Shimla provides a comfortable and practical base for travellers exploring the hilltop route, central attractions and the broader Shimla area. It is especially suitable for guests who want a mix of city access and mountain calm.
          </p>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Stay close to the temple and the city</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero">
              <Link to="/contact">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
              <Link to="/nearby-attractions">Explore Attractions</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
