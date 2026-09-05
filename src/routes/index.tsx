import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, HomePage } from "@/components/site/site-shell";
import { buildPageHead, jsonLdScript, websiteSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: "Best Hotel in Shimla | The Woodland Shimla",
      description:
        "Discover The Woodland Shimla, a comfortable hotel near The Ridge with scenic surroundings, convenient access to Shimla attractions, dining and family-friendly amenities.",
      path: "/",
      scripts: [jsonLdScript(websiteSchema())],
    }),
  component: () => (
    <SiteShell>
      <HomePage />
    </SiteShell>
  ),
});
