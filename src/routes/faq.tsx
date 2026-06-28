import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, FAQSection } from "@/components/site/site-shell";
import { EXTERIOR_DAY_IMAGE, faqs } from "@/lib/site-content";
import { buildPageHead, faqSchema, jsonLdScript, defaultBreadcrumb } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    buildPageHead({
      title: "FAQ — Hotel Woodland Shimla",
      description: "Frequently asked questions about staying at Hotel Woodland Shimla — check-in, dining and more.",
      path: "/faq",
      image: EXTERIOR_DAY_IMAGE,
      scripts: [jsonLdScript(faqSchema(faqs)), jsonLdScript(defaultBreadcrumb("FAQ", "/faq"))],
    }),
  component: () => (
    <SiteShell>
      <PageHero
        image={EXTERIOR_DAY_IMAGE}
        eyebrow="FAQ"
        title="Everything guests usually want to know."
        description="Quick answers on policy, dining, location and arrival."
      />
      <FAQSection />
    </SiteShell>
  ),
});
