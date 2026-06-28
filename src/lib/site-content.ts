import {
  Bath,
  BedDouble,
  Car,
  ChefHat,
  Clock3,
  Coffee,
  ConciergeBell,
  Droplets,
  Flower2,
  Home,
  Hotel,
  Landmark,
  LucideIcon,
  MapPinned,
  Mountain,
  ParkingCircle,
  ShieldCheck,
  Sparkles,
  Trees,
  Tv,
  Utensils,
  Wifi,
} from "lucide-react";

export type Room = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  alt: string;
  size: string;
  occupancy: string;
  pricing: string;
  description: string;
  longDescription: string[];
  amenities: string[];
  highlights: { label: string; value: string; icon: LucideIcon }[];
};

export type Amenity = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Attraction = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  distance: string;
  travelTime: string;
  description: string;
};

export type Offer = {
  title: string;
  label: string;
  description: string;
  inclusions: string[];
};

export type Review = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  stay: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const SITE_NAME = "Hotel Woodland Shimla";
export const SITE_DOMAIN = "shimla.thewoodlandhotels.com";
export const PHONE_DISPLAY = "01772 2811002";
export const PHONE_TEL = "+911772811002";
export const WHATSAPP_DISPLAY = "+91 94180 21100";
export const WHATSAPP_TEL = "+919418021100";
export const EMAIL_PLACEHOLDER = "reservations@hotelwoodlandshimla.com";
export const MAPS_URL = "https://maps.app.goo.gl/LrED3A4tA6d8ppR26";
export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109390.1002262419!2d77.07220355073251!3d31.041830755417653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057896ee5cee79%3A0x92278c6499e1fbae!2sHotel%20Woodland!5e0!3m2!1sen!2sin!4v1782618017768!5m2!1sen!2sin";
export const ADDRESS_LINES = [
  "Daisy Bank Estate",
  "The Ridge",
  "Shimla",
  "Himachal Pradesh 171001",
];

// Uploaded hotel photography — replace these URLs only when newer approved hotel photos are available.
export const HERO_EXTERIOR_IMAGE =
  "/__l5e/assets-v1/1ff45c48-5b07-41bb-ab15-79aa28a1cd1d/woodland-exterior-hero.png";
export const EXTERIOR_DAY_IMAGE =
  "/__l5e/assets-v1/6e7b46ec-35dd-4318-a992-ff2d99b7c546/woodland-exterior-hillside.png";
export const ROOM_SUPER_DELUXE_IMAGE =
  "/__l5e/assets-v1/98c79ee1-c59d-4343-8358-fc8ac1dcec4d/woodland-room-super-deluxe.png";
export const ROOM_STANDARD_IMAGE =
  "/__l5e/assets-v1/2fffeb33-ba29-41c4-97e8-60b04a262a85/woodland-room-standard.png";
export const ROOM_FAMILY_SUITE_IMAGE =
  "/__l5e/assets-v1/d1c28788-907f-431b-9972-d01ce2fd4c4f/woodland-room-family-suite.png";
export const LOUNGE_IMAGE =
  "/__l5e/assets-v1/d3aca02a-0bc1-47f0-9ebc-b696eb07403f/woodland-lounge.png";

// Premium placeholders for future replacement — replace these once approved brand photography is ready.
export const DINING_RESTAURANT_IMAGE =
  "/__l5e/assets-v1/c184a76a-6533-4bc0-97a0-2c38f59c268f/dining-restaurant.jpg";
export const CHEF_STORY_IMAGE =
  "/__l5e/assets-v1/a2dca6a0-6c8b-487d-8cfe-3b9e38bf1665/chef-story.jpg";
export const GARDEN_TERRACE_IMAGE =
  "/__l5e/assets-v1/4a805f91-69ea-4946-92d2-4cc344795184/garden-terrace.jpg";
export const BREAKFAST_IMAGE =
  "/__l5e/assets-v1/e486c2e6-0365-4f35-8af6-85b6c8941605/breakfast-table.jpg";
export const VALLEY_VIEW_IMAGE =
  "/__l5e/assets-v1/5f7c0cb5-bb3c-4293-8cb3-c08529f9dd4b/valley-morning.jpg";
export const RIDGE_IMAGE = "/__l5e/assets-v1/8fafe7ff-0ed3-4afe-b4af-a23d00269171/shimla-ridge.jpg";
export const MALL_ROAD_IMAGE = "/__l5e/assets-v1/4d6238f3-7d8c-4b32-a358-201e08cd6ff8/mall-road.jpg";
export const JAKHU_IMAGE = "/__l5e/assets-v1/54152a07-4bc2-4665-95ca-0093e0165088/jakhu-temple.jpg";
export const GAIETY_IMAGE = "/__l5e/assets-v1/e0364e1c-c5dc-4bce-b64f-ff9fce9a8486/gaiety-theatre.jpg";
export const LAKKAR_IMAGE = "/__l5e/assets-v1/153eb3d1-427d-49dd-8e64-a99306a6c399/lakkar-bazaar.jpg";
export const REVIEW_GUEST_IMAGE =
  "/__l5e/assets-v1/e1e0b381-6d06-4f97-a26b-71f0aac0a96a/review-guest.jpg";
export const BLOG_HERITAGE_IMAGE =
  "/__l5e/assets-v1/647a24fa-db21-488c-bd9c-04f2dfbed9bd/blog-heritage.jpg";
export const BLOG_FOOD_IMAGE =
  "/__l5e/assets-v1/b4b67434-227b-44f8-976b-095624343d08/blog-food.jpg";
export const BLOG_GUIDE_IMAGE =
  "/__l5e/assets-v1/b9c9770e-eaf0-490f-bcc9-6c499e5e1fa4/blog-guide.jpg";

export const navigationItems = [
  { label: "About", to: "/about" },
  { label: "Rooms", to: "/rooms" },
  { label: "Dining", to: "/dining" },
  { label: "Gallery", to: "/gallery" },
  { label: "Facilities", to: "/facilities" },
  { label: "Attractions", to: "/nearby-attractions" },
  { label: "Offers", to: "/packages-offers" },
  { label: "Reviews", to: "/reviews" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const roomTypes = ["Super Deluxe", "Standard Room", "Family Suite"];

export const rooms: Room[] = [
  {
    slug: "super-deluxe",
    name: "Super Deluxe",
    shortName: "Super Deluxe",
    tagline: "Refined mountain comfort with warm timber detailing and a soaking tub.",
    image: ROOM_SUPER_DELUXE_IMAGE,
    alt: "Super Deluxe room with king bed at Hotel Woodland Shimla",
    size: "Approx. 144 sq ft",
    occupancy: "2 guests",
    pricing: "Pricing placeholder — connect booking engine later",
    description:
      "Designed for slower mornings and longer stays, the Super Deluxe room pairs rich wood finishes, premium bedding and a calm Shimla palette with the comfort of an attached bathtub.",
    longDescription: [
      "The Super Deluxe room is ideal for couples and discerning leisure travellers seeking a more indulgent stay just moments from The Ridge.",
      "Layered textures, soft lighting, a king bed, electric kettle and an inviting bathing experience make this the most balanced choice for guests who want both location and ease.",
    ],
    amenities: ["King bed", "Bathtub", "Valley-facing atmosphere", "Electric kettle", "Premium bedding", "Hot & cold water"],
    highlights: [
      { label: "Bed", value: "King Bed", icon: BedDouble },
      { label: "Bath", value: "Bathtub", icon: Bath },
      { label: "View", value: "Valley View", icon: Mountain },
      { label: "Refreshments", value: "Electric Kettle", icon: Coffee },
    ],
  },
  {
    slug: "standard-room",
    name: "Standard Room",
    shortName: "Standard",
    tagline: "A polished comfort stay with cozy textures and boutique warmth.",
    image: ROOM_STANDARD_IMAGE,
    alt: "Standard room with wood feature wall at Hotel Woodland Shimla",
    size: "Comfort stay",
    occupancy: "2 guests",
    pricing: "Pricing placeholder — connect booking engine later",
    description:
      "The Standard Room offers a quieter, intimate stay with premium bedding, handcrafted wood elements and an inviting window-side seating moment.",
    longDescription: [
      "This room category is designed for guests who value elegant essentials, central access and dependable comfort after a day walking the town's historic promenades.",
      "It brings together tactile materials, warm lighting and a boutique atmosphere that feels personal rather than transactional.",
    ],
    amenities: ["Premium bedding", "Attached bath", "Window seating", "Daily housekeeping", "WiFi", "Room service"],
    highlights: [
      { label: "Style", value: "Premium Bedding", icon: Sparkles },
      { label: "Comfort", value: "Boutique Warmth", icon: Home },
      { label: "Entertainment", value: "In-room TV", icon: Tv },
      { label: "Service", value: "Room Service", icon: ConciergeBell },
    ],
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    shortName: "Family Suite",
    tagline: "A practical, spacious layout for shared mountain getaways.",
    image: ROOM_FAMILY_SUITE_IMAGE,
    alt: "Family suite with multiple beds at Hotel Woodland Shimla",
    size: "Family layout",
    occupancy: "3–4 guests",
    pricing: "Pricing placeholder — connect booking engine later",
    description:
      "The Family Suite is tailored for longer hill stays with multiple beds, a generous floor plan and an easy-going atmosphere for families and small groups.",
    longDescription: [
      "It balances privacy and togetherness, giving guests a restful place to recharge after exploring Shimla's cultural landmarks and markets.",
      "With mountain-facing character, dependable service and a calm palette, the suite is especially well suited for parents travelling with children.",
    ],
    amenities: ["Multiple beds", "Mountain view", "Family-friendly layout", "Hot & cold water", "WiFi", "Luggage support"],
    highlights: [
      { label: "Stay", value: "Multiple Beds", icon: Hotel },
      { label: "View", value: "Mountain View", icon: Mountain },
      { label: "Family", value: "Flexible Layout", icon: Home },
      { label: "Comfort", value: "Hot Water", icon: Droplets },
    ],
  },
];

export const amenities: Amenity[] = [
  { title: "Restaurant", description: "Indian and Chinese cuisine served in a warm, relaxed dining room.", icon: Utensils },
  { title: "High-Speed WiFi", description: "Reliable connectivity across rooms and shared spaces.", icon: Wifi },
  { title: "Parking", description: "Convenient on-site parking support for arriving guests.", icon: ParkingCircle },
  { title: "Garden", description: "Green corners that soften the urban hill-station pace.", icon: Flower2 },
  { title: "Terrace", description: "Open-air pockets for morning light and evening air.", icon: Trees },
  { title: "Laundry", description: "Helpful support for longer stays and family travel.", icon: Sparkles },
  { title: "Room Service", description: "Responsive service for relaxed in-room dining and requests.", icon: ConciergeBell },
  { title: "Mountain View", description: "A hillside setting that brings Shimla’s landscape into the stay.", icon: Mountain },
  { title: "24x7 Security", description: "A dependable stay supported by round-the-clock care.", icon: ShieldCheck },
  { title: "Luggage Storage", description: "Simple arrivals and departures for city explorers.", icon: Hotel },
  { title: "Hot & Cold Water", description: "All-season comfort designed for mountain weather.", icon: Droplets },
  { title: "Family Friendly", description: "Welcoming room types and service for group travel.", icon: Home },
];

export const attractions: Attraction[] = [
  {
    slug: "the-ridge",
    title: "The Ridge",
    image: RIDGE_IMAGE,
    alt: "Placeholder image representing The Ridge in Shimla",
    distance: "Walkable from the hotel",
    travelTime: "Approx. 8–10 min",
    description:
      "Shimla’s social heart, loved for open views, colonial ambience and sunset promenades.",
  },
  {
    slug: "mall-road",
    title: "Mall Road",
    image: MALL_ROAD_IMAGE,
    alt: "Placeholder image representing Mall Road in Shimla",
    distance: "Close to The Ridge",
    travelTime: "Approx. 10–12 min",
    description:
      "For cafés, shopping, people-watching and the timeless rhythm of Shimla evenings.",
  },
  {
    slug: "jakhu-temple",
    title: "Jakhu Temple",
    image: JAKHU_IMAGE,
    alt: "Placeholder image representing Jakhu Temple in Shimla",
    distance: "Hilltop excursion",
    travelTime: "Approx. 20–25 min",
    description:
      "A spiritual high point framed by deodar forests, mountain air and panoramic views.",
  },
  {
    slug: "hanuman-statue",
    title: "Hanuman Statue",
    image: JAKHU_IMAGE,
    alt: "Placeholder image representing the Hanuman Statue in Shimla",
    distance: "Near Jakhu Temple",
    travelTime: "Approx. 20–25 min",
    description:
      "An iconic skyline presence and one of the most memorable vantage experiences in town.",
  },
  {
    slug: "gaiety-theatre",
    title: "Gaiety Theatre",
    image: GAIETY_IMAGE,
    alt: "Placeholder image representing Gaiety Theatre in Shimla",
    distance: "Central heritage district",
    travelTime: "Approx. 12 min",
    description:
      "A cultural landmark celebrated for its heritage architecture and living performance history.",
  },
  {
    slug: "lakkar-bazaar",
    title: "Lakkar Bazaar",
    image: LAKKAR_IMAGE,
    alt: "Placeholder image representing Lakkar Bazaar in Shimla",
    distance: "550m",
    travelTime: "Approx. 8 min",
    description:
      "A character-rich market known for wooden crafts, local energy and old Shimla charm.",
  },
];

export const offers: Offer[] = [
  {
    title: "Weekend Escape",
    label: "Best for quick resets",
    description:
      "Two-night hill station break with breakfast, a slower check-out rhythm and warm hospitality from arrival to departure.",
    inclusions: ["Preferred room placement", "Breakfast for two", "Late morning departure request"],
  },
  {
    title: "Family Vacation",
    label: "Designed for togetherness",
    description:
      "A practical family stay with roomier accommodation, dining convenience and a location close to Shimla’s most loved attractions.",
    inclusions: ["Family Suite recommendation", "Dining support", "Sightseeing assistance"],
  },
  {
    title: "Mountain Getaway",
    label: "For longer unwinds",
    description:
      "An extended-stay idea built around slower mornings, local discovery and the calming cadence of the hills.",
    inclusions: ["Flexible stay planning", "Housekeeping comfort", "Local route guidance"],
  },
  {
    title: "Early Booking",
    label: "Plan ahead, stay better",
    description:
      "Reserve in advance for a smoother travel plan, better room choice and a more curated pre-arrival experience.",
    inclusions: ["Priority room suggestions", "Arrival support", "Advance assistance"],
  },
];

export const reviews: Review[] = [
  {
    name: "Aarav Mehta",
    location: "New Delhi",
    rating: 5,
    quote:
      "The location is exactly what you hope for in Shimla — close to the buzz, yet the hotel feels warm, calm and genuinely cared for. The team made the stay feel personal.",
    stay: "Stayed in Super Deluxe",
    image: REVIEW_GUEST_IMAGE,
  },
  {
    name: "Naina Kapoor",
    location: "Chandigarh",
    rating: 5,
    quote:
      "What stood out most was the feeling of trust. The room was comfortable, the hospitality was prompt, and the atmosphere felt welcoming rather than overly commercial.",
    stay: "Stayed in Standard Room",
    image: REVIEW_GUEST_IMAGE,
  },
  {
    name: "Rahul Sood",
    location: "Gurugram",
    rating: 4,
    quote:
      "A lovely choice for a family trip. Easy access to The Ridge, helpful service, and rooms that felt spacious enough for a relaxed two-night stay with children.",
    stay: "Stayed in Family Suite",
    image: REVIEW_GUEST_IMAGE,
  },
];

export const faqs = [
  {
    question: "What are the check-in and check-out timings?",
    answer: "Check-in is at 12 PM and check-out is at 12 PM. Early arrival or delayed departure requests can be discussed in advance, subject to availability.",
  },
  {
    question: "Is Hotel Woodland Shimla near The Ridge and Mall Road?",
    answer: "Yes. The hotel is positioned near The Ridge area, making it convenient for guests who want to explore Shimla’s heritage core on foot or with short local transfers.",
  },
  {
    question: "Does the hotel have parking?",
    answer: "Yes, parking support is available. Guests are encouraged to coordinate before arrival so the team can guide access smoothly.",
  },
  {
    question: "Are pets allowed or extra beds available?",
    answer: "Pets are not allowed, and extra beds are not available according to the current policy set.",
  },
  {
    question: "What dining options are available at the hotel?",
    answer: "The in-house dining experience serves Indian and Chinese cuisine, along with breakfast and dinner formats suited to leisure travellers and families.",
  },
  {
    question: "How can I contact the hotel for direct booking assistance?",
    answer: "You can call 01772 2811002 or message the hotel on WhatsApp at +91 94180 21100 for reservation support and stay planning.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "a-boutique-stay-near-the-ridge",
    category: "Stay Guide",
    title: "Why a boutique stay near The Ridge changes the Shimla experience",
    excerpt:
      "From walkable heritage charm to quieter evenings back at the hotel, location defines how Shimla feels. Here’s why proximity matters.",
    image: BLOG_HERITAGE_IMAGE,
    alt: "Editorial placeholder image for a heritage stay blog story",
    date: "June 2026",
    readTime: "4 min read",
    content: [
      "A well-placed hotel changes the pace of a hill-station trip. When the town’s most iconic promenades, cafés and heritage landmarks are close by, the day becomes lighter, more intuitive and more memorable.",
      "At Hotel Woodland Shimla, guests can move between town discovery and private rest without feeling rushed. That balance is one of the defining luxuries of a boutique city retreat.",
      "The best Shimla stays are not only about views. They are about rhythm — waking slowly, stepping into the town with ease, and returning to a room that feels genuinely restful at night.",
    ],
  },
  {
    slug: "where-to-eat-in-shimla-after-a-day-of-sightseeing",
    category: "Dining",
    title: "Where to eat in Shimla after a full day of walking, shopping and sightseeing",
    excerpt:
      "Warm, familiar food has its own kind of luxury after a long hill day. Discover the calm appeal of returning to an in-house dining room.",
    image: BLOG_FOOD_IMAGE,
    alt: "Editorial placeholder image for a dining blog story",
    date: "June 2026",
    readTime: "3 min read",
    content: [
      "Shimla days often begin with a walk and end with an appetite. After moving through ridges, bazaars and hill roads, travellers value meals that are warm, comforting and easy.",
      "Hotel dining becomes more than convenience in that moment. It becomes part of the recovery ritual — a dependable table, familiar service and the ease of staying in.",
      "At Woodland, the menu focuses on Indian and Chinese cuisine, making it suited to family trips, casual dinners and a slower end to a busy day in town.",
    ],
  },
  {
    slug: "first-time-shimla-travel-guide",
    category: "Local Guide",
    title: "A first-time visitor’s guide to seeing Shimla beautifully and without rush",
    excerpt:
      "A short guide for travellers who want to experience The Ridge, Mall Road, Jakhu and local markets with the right pace.",
    image: BLOG_GUIDE_IMAGE,
    alt: "Editorial placeholder image for a Shimla travel guide blog story",
    date: "June 2026",
    readTime: "5 min read",
    content: [
      "For first-time visitors, the most rewarding Shimla itineraries are the ones that leave room for pause. A hill station should feel inhaled, not consumed.",
      "Start with The Ridge and Mall Road, move toward cultural landmarks like Gaiety Theatre, then give yourself time for Lakkar Bazaar and a higher-altitude visit to Jakhu.",
      "A centrally placed hotel helps every part of that sequence feel smoother. Instead of overplanning transport, guests can focus on atmosphere, food, conversation and the character of the town.",
    ],
  },
];

export const galleryImages = [
  { src: HERO_EXTERIOR_IMAGE, alt: "Hotel Woodland Shimla exterior hero view", category: "Exterior" },
  { src: EXTERIOR_DAY_IMAGE, alt: "Hillside exterior of Hotel Woodland Shimla", category: "Exterior" },
  { src: ROOM_SUPER_DELUXE_IMAGE, alt: "Super Deluxe room interior", category: "Rooms" },
  { src: ROOM_STANDARD_IMAGE, alt: "Standard room interior", category: "Rooms" },
  { src: ROOM_FAMILY_SUITE_IMAGE, alt: "Family Suite room interior", category: "Rooms" },
  { src: LOUNGE_IMAGE, alt: "Guest lounge seating area", category: "Facilities" },
  { src: DINING_RESTAURANT_IMAGE, alt: "Placeholder image for restaurant interior replacement", category: "Dining" },
  { src: BREAKFAST_IMAGE, alt: "Placeholder image for breakfast table replacement", category: "Dining" },
  { src: GARDEN_TERRACE_IMAGE, alt: "Placeholder image for garden and terrace replacement", category: "Terrace" },
  { src: VALLEY_VIEW_IMAGE, alt: "Placeholder image for valley view replacement", category: "Views" },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years of hospitality" },
  { value: 3, suffix: "", label: "Distinct room categories" },
  { value: 4.7, suffix: "★", label: "Guest-led reputation" },
  { value: 24, suffix: "/7", label: "Security and support" },
];

export const distances = [
  { label: "Lakkar Bazaar Bus Station", value: "550m" },
  { label: "Shimla Railway Station", value: "7.5 KM" },
  { label: "Shimla Airport", value: "26 KM" },
];

export const footerLinks = {
  explore: [
    { label: "About", to: "/about" },
    { label: "Rooms", to: "/rooms" },
    { label: "Dining", to: "/dining" },
    { label: "Gallery", to: "/gallery" },
  ],
  stay: [
    { label: "Facilities", to: "/facilities" },
    { label: "Offers", to: "/packages-offers" },
    { label: "Reviews", to: "/reviews" },
    { label: "FAQ", to: "/faq" },
  ],
  policies: [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "Location", to: "/location" },
    { label: "Contact", to: "/contact" },
  ],
};

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
