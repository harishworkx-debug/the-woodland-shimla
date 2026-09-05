import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { GAIETY_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-near-christ-church-shimla")({
  head: () =>
    buildPageHead({
      title: "Best Hotel Near Christ Church Shimla | The Woodland",
      description:
        "Explore a comfortable stay near Christ Church and central Shimla attractions at The Woodland Shimla.",
      path: "/hotel-near-christ-church-shimla",
      image: GAIETY_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Near Christ Church", item: "/hotel-near-christ-church-shimla" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={GAIETY_IMAGE}
        eyebrow="Heritage district"
        title="Best Hotel Near Christ Church Shimla"
        description="A central Shimla stay with easy access to heritage landmarks, walks and comfortable rooms after a day of sightseeing."
        meta={["Christ Church", "The Ridge", "Central Shimla"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title text-5xl sm:text-6xl">A walkable address for Shimla's heritage core</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Explore on foot</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                The heritage side of Shimla is best enjoyed slowly, and staying near Christ Church makes it easier to explore surrounding landmarks without a heavy schedule.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-3xl">Comfort when you return</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                The Woodland Shimla gives travellers a comfortable place to pause, rest and recharge after a day of walking through old Shimla's quieter streets and historic corners.
              </p>
            </article>
          </div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            For guests wanting to be close to some of Shimla's most recognised heritage spaces, this area offers both accessibility and a well-paced hill-station experience.
          </p>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Stay close to Shimla's heritage heart</h2>
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
