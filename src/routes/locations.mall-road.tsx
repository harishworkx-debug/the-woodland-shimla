import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { MALL_ROAD_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/locations/mall-road")({
  head: () =>
    buildPageHead({
      title: "Hotel near Mall Road Shimla — Hotel Woodland on The Ridge",
      description:
        "Hotel Woodland is walking distance from Shimla's famous Mall Road. Comfortable rooms with mountain views, restaurant, WiFi. Book your stay near Mall Road.",
      path: "/locations/mall-road",
      image: MALL_ROAD_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Locations", item: "/locations" },
            { name: "Hotel near Mall Road", item: "/locations/mall-road" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={MALL_ROAD_IMAGE}
        eyebrow="Location"
        title="Hotel near Shimla's famous Mall Road"
        description="Walking distance from shopping, dining, and attractions. Stay on The Ridge, explore Shimla easily."
      />

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Hotel Woodland for Mall Road?</h2>

          <div className="space-y-6 text-base text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Perfect Location on The Ridge</h3>
              <p>
                Located on The Ridge, Hotel Woodland is just a 5–10 minute walk from Shimla's iconic Mall Road. 
                Access the best shopping, dining, and cultural attractions without staying in the crowded bazaar area.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Comfortable Rooms with Mountain Views</h3>
              <p>
                Choose from our Standard Room (₹2,500), Super Deluxe (₹3,500), or Family Suite (₹4,000). 
                Many rooms offer mountain and valley views, perfect for a memorable Shimla stay.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">On-Site Restaurant & Amenities</h3>
              <p>
                Enjoy meals at our restaurant, access WiFi throughout the hotel, and benefit from our friendly room service. 
                Free WiFi and daily housekeeping included in all rooms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Close to Lakkar Bazaar & Attractions</h3>
              <p>
                Beyond Mall Road, visit Lakkar Bazaar (1.2 km), Jakhu Temple, Gaiety Theatre, and more. 
                Our central location makes exploring Shimla's heritage easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
      <DirectionsSection />
      <AttractionsSection preview />

      <section className="py-16 px-4 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stay Near Mall Road?</h2>
          <p className="text-muted-foreground mb-6">
            Book your hotel near Shimla's Mall Road today. Comfortable rooms, excellent location, warm hospitality.
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
