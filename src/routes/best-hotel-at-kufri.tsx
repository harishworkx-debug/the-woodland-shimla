import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, AttractionsSection } from "@/components/site/site-shell";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/best-hotel-at-kufri")({
  head: () =>
    buildPageHead({
      title: "Best Hotel at Kufri — Hotel Woodland Adventure Base in Shimla",
      description:
        "Best hotel at Kufri for adventure. Hotel Woodland is only 16 km from Kufri. Horse riding, hiking, adventure activities. Book your Kufri adventure hotel.",
      path: "/best-hotel-at-kufri",
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Best Hotel at Kufri", item: "/best-hotel-at-kufri" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Adventure"
        title="Best Hotel at Kufri"
        description="Hotel Woodland — Your perfect adventure base. Only 16 km from Kufri. Comfortable rooms, warm hospitality."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why Hotel Woodland is the Best Choice at Kufri</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Close to Kufri Adventures</h3>
              <p className="text-muted-foreground mb-4">
                Only 16 km from Kufri, Hotel Woodland is the best base for your adventure trip. 
                Easy access to horse riding, hiking, nature walks, and all Kufri attractions.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Just 30–40 min drive to Kufri</li>
                <li>✓ Best hotel for Kufri base</li>
                <li>✓ Comfortable return after adventure</li>
                <li>✓ Warm hospitality after outdoor activities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Prime Location at The Ridge</h3>
              <p className="text-muted-foreground mb-4">
                Centrally located on Shimla's Ridge, Hotel Woodland is the best hotel for both Kufri adventures 
                and exploring Shimla's attractions in one trip.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Best base for multiple days</li>
                <li>✓ Kufri day trip option</li>
                <li>✓ Access to Lakkar Bazaar, Mall Road</li>
                <li>✓ Explore Shimla attractions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Comfortable Rooms & Amenities</h3>
              <p className="text-muted-foreground mb-4">
                After your adventure at Kufri, relax in our comfortable rooms with mountain views. 
                Best hotel amenities: restaurant on-site, WiFi, room service, and warm hospitality.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Mountain view rooms available</li>
                <li>✓ On-site restaurant (best food)</li>
                <li>✓ WiFi & room service</li>
                <li>✓ Best hospitality after adventure</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Best Affordable Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Budget-friendly rooms from ₹2,500/night. Best value for adventure travelers who want 
                comfort without breaking the bank.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Standard Room: ₹2,500/night</li>
                <li>✓ Super Deluxe: ₹3,500/night</li>
                <li>✓ Family Suite: ₹4,000/night</li>
                <li>✓ Best value for location</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What to Do at Kufri (Best Adventures)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🐴 Horse Riding at Kufri</h3>
              <p className="text-sm text-muted-foreground">
                Best adventure activity at Kufri. Ride through mountain trails and enjoy scenic views. 
                Available year-round with local guides.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🥾 Best Hiking & Trekking</h3>
              <p className="text-sm text-muted-foreground">
                Multiple best hiking trails around Kufri. Explore forests, meadows, and mountain vistas. 
                Suitable for beginners to experienced hikers.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🌲 Nature Walks</h3>
              <p className="text-sm text-muted-foreground">
                Peaceful nature walks through pine forests. Observe local flora and fauna. 
                Best for family outings and photography.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🏞️ Scenic Views</h3>
              <p className="text-sm text-muted-foreground">
                Breathtaking panoramic views of Himachal mountains. Camera lovers' paradise. 
                Best skies for sunset and sunrise photography.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🎿 Best Adventure Activities</h3>
              <p className="text-sm text-muted-foreground">
                Skiing (in winter), paragliding, zip-lining. Best for adventure seekers 
                at Kufri.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🦜 Wildlife Sanctuary</h3>
              <p className="text-sm text-muted-foreground">
                Kufri Sanctuary is home to best Himalayan wildlife. Spot deer, monkeys, and birds. 
                Educational best nature experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book the Best Hotel at Kufri Now</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Stay at Hotel Woodland. Rest comfortably. Explore Kufri and Shimla with ease.
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reserve Your Room for Kufri
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
