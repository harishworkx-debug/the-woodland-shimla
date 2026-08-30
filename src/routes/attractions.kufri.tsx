import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, AttractionsSection } from "@/components/site/site-shell";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/attractions/kufri")({
  head: () =>
    buildPageHead({
      title: "Hotel near Kufri — Base Hotel for Kufri Adventure from Shimla",
      description:
        "Hotel Woodland is the perfect base for Kufri adventure. Only 16 km from Kufri. Horse riding, hiking, adventure activities. Book your Kufri trip hotel.",
      path: "/attractions/kufri",
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Attractions", item: "/nearby-attractions" },
            { name: "Hotel near Kufri", item: "/attractions/kufri" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Adventure Base"
        title="Perfect Base Hotel for Kufri Adventure"
        description="Just 16 km from Kufri. Comfortable rooms on The Ridge. Ideal for adventure trips, hiking, and mountain exploration."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why Stay at Hotel Woodland for Kufri?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Close to Kufri Adventure</h3>
              <p className="text-muted-foreground mb-4">
                Only 16 km from Kufri, Hotel Woodland is the perfect base for your adventure trip. 
                Easy access to horse riding, hiking, nature walks, and all Kufri attractions.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Just 30–40 min drive to Kufri</li>
                <li>✓ Comfortable return after adventure</li>
                <li>✓ Rest & relax at hotel</li>
                <li>✓ Warm hospitality after outdoor activities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Premium Location on The Ridge</h3>
              <p className="text-muted-foreground mb-4">
                Centrally located on Shimla's Ridge, Hotel Woodland gives you access to Shimla's attractions 
                while being close enough to Kufri for day trips.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Shimla base for multiple days</li>
                <li>✓ Kufri day trip option</li>
                <li>✓ Access to Lakkar Bazaar, Mall Road</li>
                <li>✓ Explore Shimla attractions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Comfortable Rooms & Amenities</h3>
              <p className="text-muted-foreground mb-4">
                After your adventure at Kufri, relax in our comfortable rooms with mountain views. 
                Restaurant on-site, WiFi, room service, and warm hospitality.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Mountain view rooms available</li>
                <li>✓ On-site restaurant</li>
                <li>✓ WiFi & room service</li>
                <li>✓ Rest after adventure</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Affordable Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Budget-friendly rooms from ₹2,500/night. Perfect for adventure travelers who want 
                comfort without breaking the bank.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Standard Room: ₹2,500/night</li>
                <li>✓ Super Deluxe: ₹3,500/night</li>
                <li>✓ Family Suite: ₹4,000/night</li>
                <li>✓ Great value for location</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What to Do at Kufri (16 km from Hotel Woodland)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🐴 Horse Riding</h3>
              <p className="text-sm text-muted-foreground">
                Popular adventure activity at Kufri. Ride through mountain trails and enjoy scenic views. 
                Available year-round with local guides.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🥾 Hiking & Trekking</h3>
              <p className="text-sm text-muted-foreground">
                Multiple hiking trails around Kufri. Explore forests, meadows, and mountain vistas. 
                Suitable for beginners to experienced hikers.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🌲 Nature Walks</h3>
              <p className="text-sm text-muted-foreground">
                Peaceful nature walks through pine forests. Observe local flora and fauna. 
                Perfect for family outings and photography.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🏞️ Scenic Views</h3>
              <p className="text-sm text-muted-foreground">
                Breathtaking panoramic views of Himachal mountains. Camera lovers' paradise. 
                Clear skies for sunset and sunrise photography.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🎿 Adventure Activities</h3>
              <p className="text-sm text-muted-foreground">
                Skiing (in winter), paragliding, zip-lining. Adventure seekers will find plenty 
                of activities at Kufri.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🦜 Wildlife Sanctuary</h3>
              <p className="text-sm text-muted-foreground">
                Kufri Sanctuary is home to Himalayan wildlife. Spot deer, monkeys, and birds. 
                Educational nature experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Suggested Itinerary: Shimla + Kufri</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold mb-2">Day 1: Arrive in Shimla, Settle at Hotel Woodland</h3>
              <p className="text-sm text-muted-foreground">
                Check in to Hotel Woodland. Rest, relax, have dinner at our restaurant. Explore The Ridge area.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold mb-2">Day 2: Kufri Adventure Day</h3>
              <p className="text-sm text-muted-foreground">
                Early morning: Travel to Kufri (30–40 min). Horse riding, hiking, or nature walk. 
                Lunch at Kufri. Return to hotel by evening. Dinner & rest.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold mb-2">Day 3: Explore Shimla Attractions</h3>
              <p className="text-muted-foreground">
                Visit Mall Road, Lakkar Bazaar, Jakhu Temple, Gaiety Theatre. Shop, dine, explore. 
                Return to hotel for relaxation.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold mb-2">Day 4: Departure or Extended Stay</h3>
              <p className="text-sm text-muted-foreground">
                Relax at hotel. Visit nearby Naldehra or Mashobra. Or depart Shimla with memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Kufri Adventure Base Now</h2>
          <p className="mb-8 text-lg">
            Stay at Hotel Woodland. Rest comfortably. Explore Kufri and Shimla with ease.
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Reserve Your Room
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
