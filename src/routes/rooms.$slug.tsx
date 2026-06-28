import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, PageHero, AmenitiesSection } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { getRoomBySlug } from "@/lib/site-content";
import { buildPageHead, jsonLdScript, roomSchema, defaultBreadcrumb } from "@/lib/seo";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const room = getRoomBySlug(params.slug);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData }) => {
    const room = loaderData?.room;
    if (!room) return { meta: [{ title: "Room — Hotel Woodland Shimla" }] };
    return buildPageHead({
      title: `${room.name} — Hotel Woodland Shimla`,
      description: room.description,
      path: `/rooms/${room.slug}`,
      image: room.image,
      scripts: [jsonLdScript(roomSchema(room)), jsonLdScript(defaultBreadcrumb(room.name, `/rooms/${room.slug}`))],
    });
  },
  component: RoomDetail,
});

function RoomDetail() {
  const { room } = Route.useLoaderData();
  return (
    <SiteShell>
      <PageHero
        image={room.image}
        eyebrow="Room category"
        title={room.name}
        description={room.tagline}
        meta={[room.size, room.occupancy]}
      />
      <section className="section-shell page-grid">
        <div className="space-y-6">
          <span className="eyebrow">Stay overview</span>
          <h2 className="section-title text-5xl text-foreground sm:text-6xl">{room.name}</h2>
        </div>
        <div className="prose-luxury space-y-5">
          {room.longDescription.map((p) => <p key={p}>{p}</p>)}
          <div className="grid gap-3 sm:grid-cols-2">
            {room.amenities.map((a) => (
              <div key={a} className="rounded-[1.2rem] border border-border bg-surface px-4 py-3 text-sm">{a}</div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Enquire about {room.shortName}</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/rooms">All rooms</Link></Button>
          </div>
        </div>
      </section>
      <AmenitiesSection compact />
    </SiteShell>
  );
}
