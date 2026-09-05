import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { RIDGE_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-near-shimla")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near Shimla | The Woodland Shimla",
      description:
        "Discover a comfortable mountain stay in Shimla with convenient access to major attractions, dining and sightseeing.",
      path: "/hotel-near-shimla",
      image: RIDGE_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near Shimla", item: "/hotel-near-shimla" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={RIDGE_IMAGE}
        eyebrow="Shimla stay"
        title="Best Hotel Near Shimla"
        description="A comfortable mountain stay for travellers exploring the holiday town, landmark streets and scenic viewpoints of Shimla."
        meta={["Central Shimla", "Attractions", "Comfortable stay"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title text-5xl sm:text-6xl">A well-placed base for exploring Shimla</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Explore the town with ease</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                A hotel in Shimla works best when it is comfortable and connected to the sights that matter most. The Woodland Shimla brings both together in a central and welcoming setting.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Designed for a better holiday rhythm</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Whether travelling as a couple, family or leisure guest, a well-placed stay helps visitors enjoy the hill station at a comfortable pace without tiring travel plans.
              </p>
            </article>
          </div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            The Woodland Shimla offers an easygoing mountain stay for guests looking to move between historic landmarks, local shopping streets and the distinctive atmosphere of Himachal Pradesh's famous hill station.
          </p>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Book a practical and comfortable Shimla stay</h2>
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
