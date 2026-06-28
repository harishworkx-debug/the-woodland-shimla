import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell, PageHero, GallerySection, InstagramGrid } from "@/components/site/site-shell";
import { Lightbox } from "@/components/site/lightbox";
import { HERO_EXTERIOR_IMAGE } from "@/lib/site-content";
import { buildPageHead, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    buildPageHead({
      title: "Gallery — Hotel Woodland Shimla",
      description: "A visual journey through Hotel Woodland Shimla — rooms, dining, terraces and the hillside setting near The Ridge.",
      path: "/gallery",
      image: HERO_EXTERIOR_IMAGE,
      scripts: [jsonLdScript(defaultBreadcrumb("Gallery", "/gallery"))],
    }),
  component: GalleryPage,
});

function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string }>();
  return (
    <SiteShell>
      <PageHero
        image={HERO_EXTERIOR_IMAGE}
        eyebrow="Gallery"
        title="A visual journey through the hotel."
        description="Rooms, dining, exteriors and quieter atmospheric moments."
      />
      <GallerySection onImageOpen={setLightbox} />
      <InstagramGrid onImageOpen={setLightbox} />
      <Lightbox open={Boolean(lightbox)} image={lightbox} onClose={() => setLightbox(undefined)} />
    </SiteShell>
  );
}
