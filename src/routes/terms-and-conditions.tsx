import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PolicyContent } from "@/components/site/site-shell";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    buildPageHead({
      title: "Terms & Conditions — Hotel Woodland Shimla",
      description: "Stay terms, reservation guidance and hotel policies for guests of Hotel Woodland Shimla.",
      path: "/terms-and-conditions",
      scripts: [jsonLdScript(defaultBreadcrumb("Terms & Conditions", "/terms-and-conditions"))],
    }),
  component: () => (
    <SiteShell>
      <PolicyContent
        title="Terms & Conditions"
        intro="A placeholder summary of the stay terms guests can expect when booking and visiting Hotel Woodland Shimla."
        sections={[
          { heading: "Reservations", body: ["Reservations are confirmed in coordination with the hotel team. Direct booking is encouraged for the most accurate room placement."] },
          { heading: "Check-in & check-out", body: ["Standard check-in is 12 PM and check-out is 12 PM. Adjustments are subject to availability and team discretion."] },
          { heading: "House policy", body: ["Pets are not allowed and extra beds are not available. Guests are requested to respect quiet hours and shared spaces."] },
          { heading: "Cancellations", body: ["Cancellation specifics are confirmed at the time of reservation. Guests are encouraged to coordinate changes directly with the team."] },
        ]}
      />
    </SiteShell>
  ),
});
