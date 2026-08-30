import {
  ADDRESS_LINES,
  EMAIL_PLACEHOLDER,
  MAPS_URL,
  PHONE_DISPLAY,
  SITE_NAME,
  WHATSAPP_DISPLAY,
  type Room,
} from "@/lib/site-content";

export function buildPageHead({
  title,
  description,
  path,
  image,
  scripts = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  scripts?: { type: string; children: string }[];
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      ...(image ? [{ property: "og:image", content: image }] : []),
      { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(image ? [{ name: "twitter:image", content: image }] : []),
    ],
    links: [{ rel: "canonical", href: path }],
    scripts,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["WebSite", "Hotel", "LocalBusiness"],
    name: SITE_NAME,
    alternateName: "Hotel Woodland",
    description:
      "Hotel Woodland in Shimla — comfortable, affordable rooms on The Ridge near Mall Road. Family-friendly hotel with mountain views, restaurant, and WiFi. Perfect for families, couples, and weekend getaways.",
    url: "https://shimla.thewoodlandhotels.com",
    telephone: PHONE_DISPLAY,
    email: EMAIL_PLACEHOLDER,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_LINES[0],
      addressLocality: ADDRESS_LINES[2],
      addressRegion: "Himachal Pradesh",
      postalCode: "171001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.102489",
      longitude: "77.179176",
    },
    sameAs: [MAPS_URL],
    amenityFeature: [
      "Restaurant",
      "WiFi",
      "Garden",
      "Terrace",
      "Room Service",
      "Mountain View",
      "Parking",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    priceRange: "₹2,500–₹4,000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function faqSchema(
  faqs: {
    question: string;
    answer: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "120",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Aarav Mehta" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Warm, personal hospitality with a comfortable stay close to Shimla’s heritage core.",
      },
    ],
  };
}

export function roomSchema(room: Room) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: `${room.name} — ${SITE_NAME}`,
    description: room.description,
    occupancy: { "@type": "QuantitativeValue", value: room.occupancy },
    bed: room.highlights[0]?.value,
    amenityFeature: room.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    isPartOf: {
      "@type": "Hotel",
      name: SITE_NAME,
      url: "/rooms",
    },
  };
}

export function blogSchema({
  title,
  description,
  path,
  image,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    mainEntityOfPage: path,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

export function defaultBreadcrumb(name: string, path: string) {
  return breadcrumbSchema([
    { name: "Home", item: "/" },
    { name, item: path },
  ]);
}

export function hotelContactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE_NAME,
    telephone: PHONE_DISPLAY,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_DISPLAY,
        contactType: "reservations",
      },
      {
        "@type": "ContactPoint",
        telephone: WHATSAPP_DISPLAY,
        contactType: "customer service",
      },
    ],
  };
}

export function locationPageSchema(locationName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE_NAME,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_LINES[0],
      addressLocality: ADDRESS_LINES[2],
      addressRegion: "Himachal Pradesh",
      postalCode: "171001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.102489",
      longitude: "77.179176",
    },
    areaServed: locationName,
    telephone: PHONE_DISPLAY,
    email: EMAIL_PLACEHOLDER,
    url: MAPS_URL,
  };
}
