import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteShell, PageHero } from "@/components/site/site-shell";
import { DINING_RESTAURANT_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";
import food from "@/assets/food.jpg";

export const Route = createFileRoute("/restaurant")({
  head: () =>
    buildPageHead({
      title: "Restaurant in Shimla | The Woodland Shimla",
      description:
        "Enjoy pure vegetarian dining in Shimla at The Woodland Shimla, with freshly prepared meals, in-house restaurant dining and 24-hour room service.",
      path: "/restaurant",
      image: DINING_RESTAURANT_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Restaurant", item: "/restaurant" },
          ]),
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={DINING_RESTAURANT_IMAGE}
        eyebrow="Dining"
        title="Restaurant at The Woodland Shimla"
        description="Warm, fresh and comforting dining for family meals, relaxed evenings and quiet room service moments."
        meta={["Pure vegetarian", "Room service", "Family dining"]}
      />

      <section className="section-shell">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="glass-panel rounded-[2rem] p-6">
              <h2 className="text-3xl">Pure Vegetarian Dining in Shimla</h2>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                The dining experience at The Woodland Shimla stays rooted in simple, satisfying meals that suit family travel and slow evenings in the hills. The menu is designed to feel comforting and accessible.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-6">
              <h2 className="text-3xl">Freshly Prepared Meals</h2>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                Meals are prepared with care for guests seeking familiar flavours, a relaxed pace and a dining experience that complements a mountain stay.
              </p>
            </article>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <img src={food} alt="Dining at The Woodland Shimla" className="h-full w-full rounded-[2rem] object-cover" loading="lazy" />
            <div className="space-y-5">
              <h2 className="text-3xl">24-Hour Room Service</h2>
              <p className="text-sm leading-8 text-muted-foreground">
                For guests who prefer a quieter night in or a more flexible meal timing, room service offers a simple way to unwind without leaving the room.
              </p>
              <h2 className="text-3xl">Family Dining</h2>
              <p className="text-sm leading-8 text-muted-foreground">
                The restaurant setting suits families, couples and travellers seeking a comfortable meal close to their accommodation after exploring Shimla.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-4xl sm:text-5xl">Enjoy a relaxed dining experience in Shimla</h2>
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
