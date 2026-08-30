import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/site-shell";
import { ROOM_STANDARD_IMAGE } from "@/lib/site-content";
import { buildPageHead, breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/budget-hotel")({
  head: () =>
    buildPageHead({
      title: "Budget Hotel in Shimla — Affordable Rooms from ₹2,500",
      description:
        "Affordable, budget-friendly hotel in Shimla on The Ridge. Comfortable Standard Rooms from ₹2,500/night. Clean, safe, near Mall Road. Book budget accommodation.",
      path: "/budget-hotel",
      image: ROOM_STANDARD_IMAGE,
      scripts: [
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Budget Hotel", item: "/budget-hotel" },
          ])
        ),
      ],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={ROOM_STANDARD_IMAGE}
        eyebrow="Affordable Stay"
        title="Budget Hotel in Shimla"
        description="Comfortable, clean rooms from ₹2,500/night. Prime location on The Ridge. Perfect value for money."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Affordable Shimla Hotel — Amazing Value</h2>

          <div className="bg-muted rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Our Budget Hotel Options</h3>
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
                <a
                  href="/#booking"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Book Now
                </a>
              </div>

              <div className="bg-background rounded-lg p-6 text-center border-2 border-primary">
                <div className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded w-fit mx-auto mb-2">
                  Best Value
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
                <a
                  href="/#booking"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Book Now
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
                <a
                  href="/#booking"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-6">Why Choose Hotel Woodland for Budget Stay?</h3>

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
                  Get the best location value in Shimla. Walking distance to Mall Road, Lakkar Bazaar, and attractions. 
                  No compromise on location for the price.
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
                <h4 className="text-lg font-semibold mb-1">Clean & Safe Rooms</h4>
                <p className="text-muted-foreground">
                  Standard Room offers premium bedding, clean attached bathroom, and comfortable ambiance. 
                  Safe, secure stay at affordable prices.
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
                  Transparent pricing: ₹2,500–₹4,000 per night includes WiFi, housekeeping, and basic amenities. 
                  Book with confidence, no surprises.
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
                  Book directly with us and enjoy better rates than online portals. 
                  Direct booking = more savings for you.
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
                  WiFi, daily housekeeping, room service, and access to our on-site restaurant. 
                  All included in your budget room rate.
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
                  Affordable doesn't mean cold service. Our team provides warm, personalized hospitality to every guest, 
                  regardless of room type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Budget Hotel Room Today</h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Comfortable, affordable, and perfectly located. Hotel Woodland gives you the best value for your Shimla stay.
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Budget Room Now
          </a>
        </div>
      </section>
    </SiteShell>
  ),
});
