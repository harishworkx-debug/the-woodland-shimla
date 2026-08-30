import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/site-shell";
import { ROOM_FAMILY_SUITE_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/family-hotel")({
  head: () =>
    buildPageHead({
      title: "Family Hotel in Shimla — Hotel Woodland Family Suite",
      description:
        "Family-friendly hotel in Shimla with dedicated Family Suite. Perfect for families with mountain views, restaurant, WiFi. Book family accommodation near Mall Road.",
      path: "/family-hotel",
      image: ROOM_FAMILY_SUITE_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Family Hotel", item: "/family-hotel" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={ROOM_FAMILY_SUITE_IMAGE}
        eyebrow="For Families"
        title="Perfect Family Hotel in Shimla"
        description="Spacious Family Suite, family-friendly amenities, mountain views. Your ideal Shimla family getaway."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why Hotel Woodland for Family Stays?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Dedicated Family Suite</h3>
              <p className="text-muted-foreground mb-4">
                Our Family Suite is designed for 3–4 guests with spacious layout, multiple beds, and family-friendly amenities. 
                Priced at ₹4,000/night, it's perfect for extended family getaways.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Spacious layout for 3–4 guests</li>
                <li>✓ Multiple beds & comfort</li>
                <li>✓ Family-friendly atmosphere</li>
                <li>✓ Perfect for group stays</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Family-Friendly Amenities</h3>
              <p className="text-muted-foreground mb-4">
                We welcome families with open arms. Enjoy our on-site restaurant, room service, WiFi, and warm hospitality 
                that makes your family feel at home.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ On-site restaurant</li>
                <li>✓ Room service</li>
                <li>✓ Free WiFi</li>
                <li>✓ Daily housekeeping</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Safe, Central Location</h3>
              <p className="text-muted-foreground mb-4">
                Located on The Ridge, our hotel is safe, accessible, and walking distance from Mall Road, Lakkar Bazaar, 
                and family-friendly attractions like Jakhu Temple.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Safe, central location</li>
                <li>✓ Walking distance to attractions</li>
                <li>✓ Easy taxi/vehicle access</li>
                <li>✓ Parking available</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Affordable Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Family Suite at ₹4,000/night offers excellent value for spacious, comfortable family accommodation 
                in Shimla's premium location.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ ₹4,000 for 3–4 guests</li>
                <li>✓ Great value per person</li>
                <li>✓ No hidden charges</li>
                <li>✓ Direct booking benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Popular Family Activities Near Hotel Woodland</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Jakhu Temple</h3>
              <p className="text-sm text-muted-foreground">
                Visit the sacred Jakhu Temple for panoramic Shimla views. Just minutes away by taxi.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Mall Road Shopping</h3>
              <p className="text-sm text-muted-foreground">
                Walk to Mall Road for shopping, dining, and local street food. Family-friendly area.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Lakkar Bazaar</h3>
              <p className="text-sm text-muted-foreground">
                Explore wooden handicrafts and traditional Shimla items. Fun for all ages.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Kufri Adventure</h3>
              <p className="text-sm text-muted-foreground">
                Day trip to Kufri (16 km) for adventure activities. Horse riding, hiking, and nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Family Suite Today</h2>
          <p className="text-muted-foreground mb-8">
            Plan the perfect family getaway to Shimla. Comfortable, spacious, and affordable.
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reserve Family Suite
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
