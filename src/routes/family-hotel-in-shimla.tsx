import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/site-shell";
import { ROOM_FAMILY_SUITE_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/family-hotel-in-shimla")({
  head: () =>
    buildPageHead({
      title: "Family Hotel in Shimla — Hotel Woodland Family Suite & Rooms",
      description:
        "Family hotel in Shimla with dedicated Family Suite for 3–4 guests. Family-friendly amenities, mountain views, restaurant. Book family hotel in Shimla.",
      path: "/family-hotel-in-shimla",
      image: ROOM_FAMILY_SUITE_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Family Hotel in Shimla", item: "/family-hotel-in-shimla" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={ROOM_FAMILY_SUITE_IMAGE}
        eyebrow="Family Accommodation"
        title="Family Hotel in Shimla"
        description="Spacious Family Suite, family-friendly amenities, mountain views. Perfect family hotel in Shimla for your getaway."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Best Family Hotel in Shimla</h2>

          <div className="bg-primary/10 rounded-lg p-8 mb-12">
            <p className="text-lg font-semibold mb-4">
              Hotel Woodland is the best family hotel in Shimla for your family vacation. 
              Dedicated Family Suite, family-friendly rooms, and warm hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Dedicated Family Suite at Hotel</h3>
              <p className="text-muted-foreground mb-4">
                Our Family Suite is the best family hotel room in Shimla designed for 3–4 guests with spacious layout. 
                This family hotel in Shimla has multiple beds and family-friendly amenities. Priced at ₹4,000/night, 
                it's the best family hotel value.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Spacious layout for families</li>
                <li>✓ Multiple beds & comfort</li>
                <li>✓ Best family-friendly atmosphere</li>
                <li>✓ Perfect for group stays</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Best Family-Friendly Amenities</h3>
              <p className="text-muted-foreground mb-4">
                We welcome families with open arms in our family hotel in Shimla. 
                Enjoy our on-site restaurant, room service, WiFi, and warm hospitality that makes your family feel at home.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ On-site restaurant (best family dining)</li>
                <li>✓ Room service</li>
                <li>✓ Free WiFi for families</li>
                <li>✓ Daily housekeeping</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Safe & Central Location</h3>
              <p className="text-muted-foreground mb-4">
                Best family hotel in Shimla location at The Ridge. Safe, accessible, and walking distance from Mall Road, 
                Lakkar Bazaar, and family-friendly attractions like Jakhu Temple.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Safe, central location for families</li>
                <li>✓ Walking distance to attractions</li>
                <li>✓ Easy taxi/vehicle access</li>
                <li>✓ Parking available for families</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Best Affordable Family Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Family Suite at ₹4,000/night is the best family hotel value in Shimla. 
                Family hotel in Shimla that offers excellent value for spacious, comfortable family accommodation.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Best Family Suite: ₹4,000</li>
                <li>✓ Best value per person</li>
                <li>✓ No hidden charges</li>
                <li>✓ Direct booking benefits</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Best Family Activities Near Family Hotel in Shimla</h3>

          <div className="grid md:grid-cols-2 gap-6 bg-muted rounded-lg p-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">🏛️ Jakhu Temple</h4>
              <p className="text-sm text-muted-foreground">
                Best family attraction. Visit sacred Jakhu Temple for panoramic Shimla views. Minutes away from family hotel in taxi.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">🛍️ Mall Road Shopping</h4>
              <p className="text-sm text-muted-foreground">
                Best family activity from family hotel. Walk to Mall Road for shopping, dining, local street food.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">🎨 Lakkar Bazaar</h4>
              <p className="text-sm text-muted-foreground">
                Best for families. Explore wooden handicrafts at famous Lakkar Bazaar. Fun shopping for families.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">🏔️ Kufri Adventure</h4>
              <p className="text-sm text-muted-foreground">
                Best day trip from family hotel in Shimla. Kufri (16 km) — adventure for families, horse riding, hiking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Best Family Hotel in Shimla Today</h2>
          <p className="text-muted-foreground mb-8">
            Plan the perfect family getaway. Comfortable, spacious, and affordable family hotel in Shimla.
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reserve Family Suite Now
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
