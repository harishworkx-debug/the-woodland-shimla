import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PolicyContent } from "@/components/site/site-shell";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    buildPageHead({
      title: "Privacy Policy — Hotel Woodland Shimla",
      description: "How Hotel Woodland Shimla collects, uses and protects guest information.",
      path: "/privacy-policy",
      scripts: [jsonLdScript(defaultBreadcrumb("Privacy Policy", "/privacy-policy"))],
    }),
  component: () => (
    <SiteShell>
      <PolicyContent
        title="Privacy Policy"
        intro="This placeholder policy outlines how guest details and enquiry information are handled by Hotel Woodland Shimla."
        sections={[
          { heading: "Information we collect", body: ["We collect the details guests share for stay enquiries, reservations and direct contact. This typically includes name, phone, email and travel dates."] },
          { heading: "How information is used", body: ["Guest information is used solely to plan, confirm and support the stay, and to respond to direct queries received by the hotel team."] },
          { heading: "Storage & protection", body: ["The hotel takes reasonable measures to keep guest information confidential. Information is not sold or shared with unrelated third parties."] },
          { heading: "Updates", body: ["This placeholder may be updated as the hotel formalises its privacy practices. Guests are encouraged to confirm any specifics directly with the team."] },
        ]}
      />
    </SiteShell>
  ),
});
