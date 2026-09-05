import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { LAKKAR_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-near-lakkar-bazaar-shimla")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near Lakkar Bazaar Shimla | The Woodland",
      description:
        "Stay near Lakkar Bazaar Shimla and explore traditional wooden handicrafts, shopping and nearby attractions from The Woodland Shimla.",
      path: "/hotel-near-lakkar-bazaar-shimla",
      image: LAKKAR_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near Lakkar Bazaar", item: "/hotel-near-lakkar-bazaar-shimla" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={LAKKAR_IMAGE}
        eyebrow="Market district"
        title="Best Hotel Near Lakkar Bazaar Shimla"
        description="A practical hotel choice for guests who want to explore Shimla's woodcraft heritage, shopping streets and nearby landmarks with ease."
        meta={["Lakkar Bazaar", "Shopping", "Handicrafts"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title text-5xl sm:text-6xl">Stay close to the heart of old Shimla</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Craft and market charm</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Lakkar Bazaar is known for its focus on woodcraft, local products and a lively market atmosphere. Guests staying nearby can enjoy that character without needing to travel far for shopping and exploration.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Easy city access</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                The hotel's location makes it simple to move between the market lanes, heritage sights and the wider Shimla district while enjoying a restful base to return to.
              </p>
            </article>
          </div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            The Woodland Shimla offers the comfort of a boutique stay with the practical benefit of being close to some of the town's most visited areas, making it an approachable choice for travellers who value both ease and atmosphere.
          </p>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Head out to the market and return to comfort</h2>
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
