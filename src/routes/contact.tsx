import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, ContactPanel, MapSection, DirectionsSection } from "@/components/site/site-shell";
import { LOUNGE_IMAGE } from "@/lib/site-content";
import { buildPageHead, hotelContactSchema, jsonLdScript, defaultBreadcrumb } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildPageHead({
      title: "Contact — Hotel Woodland Shimla",
      description: "Reach Hotel Woodland Shimla for direct booking, stay enquiries and arrival planning by phone, WhatsApp or email.",
      path: "/contact",
      image: LOUNGE_IMAGE,
      scripts: [jsonLdScript(hotelContactSchema()), jsonLdScript(defaultBreadcrumb("Contact", "/contact"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={LOUNGE_IMAGE}
        eyebrow="Contact"
        title="Reserve directly with the team."
        description="Phone, WhatsApp and email — choose what feels easiest to plan your Shimla stay."
      />
      <ContactPanel />
      <DirectionsSection />
      <MapSection />
    </SiteShell>
  ),
});
