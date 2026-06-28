import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { SiteShell, PageHero, BlogGrid } from "@/components/site/site-shell";
import { BLOG_HERITAGE_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    buildPageHead({
      title: "Journal — Hotel Woodland Shimla",
      description: "Editorial notes on Shimla travel, heritage stays, dining and slow mountain experiences.",
      path: "/blog",
      image: BLOG_HERITAGE_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Journal", "/blog"))],
    }),
  component: BlogLayout,
});

function BlogLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/blog/$slug");
  if (isChild) return <Outlet />;
  return (
    <SiteShell>
      <PageHero
        image={BLOG_HERITAGE_IMAGE}
        eyebrow="Journal"
        title="Notes from the hill station."
        description="A small editorial space covering Shimla travel, food and slow stays."
      />
      <BlogGrid />
    </SiteShell>
  );
}
