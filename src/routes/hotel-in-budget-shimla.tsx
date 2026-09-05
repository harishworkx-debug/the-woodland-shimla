import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/site-shell";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";
import { ROOM_STANDARD_IMAGE } from "@/lib/site-content";

export const Route = createFileRoute("/hotel-in-budget-shimla")({
  head: () =>
    buildPageHead({
      title: "Hotel in Budget Shimla — Affordable Hotel Woodland from ₹2,500",
      description:
        "Affordable hotel in budget Shimla at The Ridge. Clean, safe rooms from ₹2,500/night. Family-friendly, near Mall Road. Book budget hotel in Shimla.",
      path: "/hotel-in-budget-shimla",
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel in Budget", item: "/hotel-in-budget-shimla" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={ROOM_STANDARD_IMAGE}
        eyebrow="Budget Accommodation"
        title="Hotel in Budget Shimla"
        description="Affordable, clean rooms from ₹2,500/night at The Ridge. Perfect hotel in budget for families & couples."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Budget Hotel in Shimla — Amazing Value</h2>

          <div className="bg-muted rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Hotel in Budget Shimla — Room Options</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-primary mb-2">₹2,500</h4>
                <p className="font-semibold mb-3">Standard Room</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4 text-left">
                  <li>✓ Premium bedding</li>
                  <li>✓ Attached bathroom</li>
                  <li>✓ WiFi included</li>
                  <li>✓ Window seating</li>
                  <li>✓ Room service</li>
                </ul>
                <a href="/#booking" className="text-primary font-semibold text-sm hover:underline">
                  Book in Budget
                </a>
              </div>

              <div className="bg-background rounded-lg p-6 text-center border-2 border-primary">
                <div className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded w-fit mx-auto mb-2">
                  Best in Budget
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">₹3,500</h4>
                <p className="font-semibold mb-3">Super Deluxe</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4 text-left">
                  <li>✓ King bed</li>
                  <li>✓ Bathtub</li>
                  <li>✓ Valley views</li>
                  <li>✓ Premium bedding</li>
                  <li>✓ Electric kettle</li>
                </ul>
                <a href="/#booking" className="text-primary font-semibold text-sm hover:underline">
                  Book Best Deal
                </a>
              </div>

              <div className="bg-background rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-primary mb-2">₹4,000</h4>
                <p className="font-semibold mb-3">Family Suite</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4 text-left">
                  <li>✓ 3–4 guests</li>
                  <li>✓ Multiple beds</li>
                  <li>✓ Spacious layout</li>
                  <li>✓ Family-friendly</li>
                  <li>✓ WiFi included</li>
                </ul>
                <a href="/#booking" className="text-primary font-semibold text-sm hover:underline">
                  Book Family
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-6">Why Hotel in Budget Shimla at Hotel Woodland?</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Prime Location on The Ridge</h4>
                <p className="text-muted-foreground">
                  Budget hotel in Shimla doesn't mean bad location. Hotel in budget at The Ridge, walking distance to Mall Road.
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
                <h4 className="text-lg font-semibold mb-1">Clean & Safe Rooms in Budget</h4>
                <p className="text-muted-foreground">
                  Budget hotel in Shimla with premium bedding. Hotel in budget at Hotel Woodland means clean, comfortable, safe stay.
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
                <h4 className="text-lg font-semibold mb-1">No Hidden Charges</h4>
                <p className="text-muted-foreground">
                  Budget hotel in Shimla: transparent pricing. Hotel in budget from ₹2,500 includes WiFi, housekeeping, basics.
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
                <h4 className="text-lg font-semibold mb-1">Direct Booking Discounts</h4>
                <p className="text-muted-foreground">
                  Budget hotel in Shimla booking direct. Hotel in budget gets you better rates than online portals.
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
                <h4 className="text-lg font-semibold mb-1">Included Amenities</h4>
                <p className="text-muted-foreground">
                  Budget hotel in Shimla doesn't skimp amenities. Hotel in budget includes WiFi, room service, restaurant.
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
                <h4 className="text-lg font-semibold mb-1">Warm Hospitality</h4>
                <p className="text-muted-foreground">
                  Budget hotel in Shimla with warmth. Hotel in budget at Hotel Woodland = same hospitality as luxury rooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Hotel in Budget Shimla Today</h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Comfortable, affordable, and perfectly located. Budget hotel in Shimla at Hotel Woodland gives best value.
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Budget Hotel Now
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
