import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/site-shell";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";
import { ATTRACTIONS_HEADER_IMAGE } from "@/lib/site-content";

export const Route = createFileRoute("/hotel-at-kufri")({
  head: () =>
    buildPageHead({
      title: "Hotel at Kufri — Adventure Base Hotel Woodland in Shimla",
      description:
        "Hotel at Kufri base. Hotel Woodland only 16 km from Kufri adventure. Horse riding, hiking, nature activities. Book hotel at Kufri.",
      path: "/hotel-at-kufri",
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel at Kufri", item: "/hotel-at-kufri" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={ATTRACTIONS_HEADER_IMAGE}
        eyebrow="Adventure Base"
        title="Hotel at Kufri"
        description="Hotel Woodland — 16 km from Kufri. Perfect base for adventure. Comfortable rooms, mountain views, warm hospitality."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Hotel at Kufri — Your Adventure Base</h2>

          <div className="bg-primary/10 rounded-lg p-8 mb-8">
            <p className="text-lg mb-4">
              Hotel Woodland at Shimla is your perfect hotel at Kufri base. Located just <strong>16 km from Kufri</strong>, 
              our hotel at The Ridge provides comfortable accommodation and warm hospitality for your Kufri adventure trips.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-muted rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">16 km</h3>
              <p className="text-sm font-semibold mb-2">Distance to Kufri</p>
              <p className="text-xs text-muted-foreground">30-40 min drive from hotel at Kufri base</p>
            </div>

            <div className="bg-muted rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">₹2,500</h3>
              <p className="text-sm font-semibold mb-2">Hotel Room Price</p>
              <p className="text-xs text-muted-foreground">Starting from Standard Room at hotel</p>
            </div>

            <div className="bg-muted rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">5★</h3>
              <p className="text-sm font-semibold mb-2">Guest Rating</p>
              <p className="text-xs text-muted-foreground">Hotel Woodland at Kufri base</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Why Hotel at Kufri Location?</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Close to Kufri Adventures</h4>
                <p className="text-muted-foreground">
                  Stay at our hotel at Kufri base for easy access to horse riding, hiking, and adventure activities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Rest After Adventure</h4>
                <p className="text-muted-foreground">
                  Come back to hotel at Kufri and relax in comfort after your day of activities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Perfect Location on The Ridge</h4>
                <p className="text-muted-foreground">
                  Hotel at Shimla's Ridge — also explore Mall Road, Lakkar Bazaar, and other attractions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Affordable Hotel Pricing</h4>
                <p className="text-muted-foreground">
                  Hotel at Kufri base doesn't mean expensive. Rooms from ₹2,500 at our hotel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Hotel at Kufri Now</h2>
          <p className="mb-8">Reserve your room at our hotel at Kufri base for your adventure trip.</p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Reserve Hotel at Kufri
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
