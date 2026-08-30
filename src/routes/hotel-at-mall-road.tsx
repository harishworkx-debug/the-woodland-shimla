import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, MapSection, DirectionsSection, AttractionsSection } from "@/components/site/site-shell";
import { MALL_ROAD_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/hotel-at-mall-road")({
  head: () =>
    buildPageHead({
      title: "Hotel at Mall Road Shimla — Best Hotel Woodland Near Mall Road",
      description:
        "Hotel Woodland at The Ridge, walking distance from Shimla's Mall Road. Comfortable rooms with mountain views, restaurant, WiFi. Book your stay at Mall Road.",
      path: "/hotel-at-mall-road",
      image: MALL_ROAD_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel at Mall Road", item: "/hotel-at-mall-road" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={MALL_ROAD_IMAGE}
        eyebrow="Location"
        title="Best Hotel at Shimla's Mall Road"
        description="Walking distance from shopping, dining, and attractions. Stay on The Ridge, explore Shimla easily."
      />

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Hotel Woodland at Mall Road?</h2>

          <div className="space-y-6 text-base text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Prime Location at The Ridge Near Mall Road</h3>
              <p>
                Hotel Woodland's location at The Ridge is just a 5–10 minute walk from Shimla's iconic Mall Road. 
                Access the best shopping, dining, and cultural attractions without staying in the crowded bazaar area.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Comfortable Rooms with Mountain Views</h3>
              <p>
                Choose from our Standard Room (₹2,500), Super Deluxe (₹3,500), or Family Suite (₹4,000). 
                Many rooms offer mountain and valley views, perfect for a memorable Shimla stay at Mall Road location.
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
              <h3 className="text-xl font-semibold text-foreground mb-2">Close to Lakkar Bazaar & Attractions at Mall Road Area</h3>
              <p>
                Beyond Mall Road, visit Lakkar Bazaar (1.2 km), Jakhu Temple, Gaiety Theatre, and more. 
                Our location at The Ridge makes exploring Shimla's heritage easy.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Stay at Hotel Near Mall Road?</h2>
          <p className="text-muted-foreground mb-6">
            Book your hotel at Mall Road, Shimla today. Comfortable rooms, excellent location, warm hospitality.
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Your Stay at Mall Road
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
