import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug } from "@/lib/site-content";
import { buildPageHead, blogSchema, defaultBreadcrumb, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Journal — Hotel Woodland Shimla" }] };
    return buildPageHead({
      title: `${post.title} — Journal`,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.image,
      scripts: [
        jsonLdScript(blogSchema({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.image, datePublished: post.date })),
        jsonLdScript(defaultBreadcrumb(post.title, `/blog/${post.slug}`)),
      ],
    });
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <SiteShell>
      <PageHero
        image={post.image}
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        meta={[post.date, post.readTime]}
      />
      <article className="section-shell mx-auto max-w-3xl space-y-6 prose-luxury">
        {post.content.map((p) => <p key={p}>{p}</p>)}
        <div className="pt-6">
          <Button asChild variant="dark"><Link to="/blog">Back to journal</Link></Button>
        </div>
      </article>
    </SiteShell>
  );
}
