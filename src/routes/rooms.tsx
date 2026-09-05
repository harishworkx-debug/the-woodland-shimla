import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { SiteShell, PageHero, RoomsShowcase, AmenitiesSection } from "@/components/site/site-shell";
import { ROOM_SUPER_DELUXE_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/rooms")({
  head: () =>
    buildPageHead({
      title: "Hotel Rooms in Shimla | The Woodland Shimla",
      description: "Choose a comfortable hotel room in Shimla at The Woodland with family-friendly layouts, mountain-facing comfort and convenient access to The Ridge and Mall Road.",
      path: "/rooms",
      image: ROOM_SUPER_DELUXE_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Rooms", "/rooms"))],
    }),
  component: RoomsLayout,
});

function RoomsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/rooms/$slug");
  if (isChild) return <Outlet />;
  return (
    <SiteShell>
      <PageHero
        image={ROOM_SUPER_DELUXE_IMAGE}
        eyebrow="Rooms & suites"
        title="Three room stories, one warm mountain stay."
        description="Each room category is crafted around comfort, calm and an inviting boutique atmosphere."
        meta={["King beds", "Bathtub options", "Family layouts"]}
      />
      <RoomsShowcase />
      <AmenitiesSection compact />
    </SiteShell>
  );
}
