import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import nightImg from "@/assets/night-img.jpeg";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import woodlandLogo from "@/assets/woodland-logo.png";
import outside from "@/assets/outside.jpeg";
import outside1 from "@/assets/outside1.jpeg";
import garden from "@/assets/garden.jpeg";


import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ADDRESS_LINES,
  BREAKFAST_IMAGE,
  CHEF_STORY_IMAGE,
  DINING_RESTAURANT_IMAGE,
  EMAIL_PLACEHOLDER,
  EXTERIOR_DAY_IMAGE,
  HERO_EXTERIOR_IMAGE,
  MAP_EMBED_SRC,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  WHATSAPP_DISPLAY,
  WHATSAPP_TEL,
  amenities,
  attractions,
  blogPosts,
  distances,
  faqs,
  footerLinks,
  galleryImages,
  navigationItems,
  offers,
  reviews,
  roomTypes,
  rooms,
  stats,
} from "@/lib/site-content";
import {
  MagneticButton,
  ParallaxMedia,
  Reveal,
  ScrollProgressBar,
  useCursorGlow,
  useGsapReveal,
  useHeroParallax,
  useLenisSmoothScroll,
} from "@/lib/experience";
import { Lightbox } from "@/components/site/lightbox";

export function SiteShell({ children }: { children: React.ReactNode }) {
  useLenisSmoothScroll();
  const cursor = useCursorGlow();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <ScrollProgressBar />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 hidden md:block"
        style={{
          background: `radial-gradient(420px circle at ${cursor.x}px ${cursor.y}px, color-mix(in oklab, var(--luxury) 16%, transparent), transparent 65%)`,
        }}
      />
      <SiteHeader />
      <main className="relative z-10">{children}</main>
      <FloatingCTA />
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const navClass = scrolled ? "nav-shell" : "bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <div className={cn("container-shell rounded-full transition-all duration-500", navClass)}>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-2 py-2 sm:px-3">
          <Link to="/" className="flex min-w-0 items-center gap-3 rounded-full px-3 py-2">
            <img
              src={woodlandLogo}
              alt="Hotel Woodland Shimla logo"
              className="h-11 w-11 shrink-0 rounded-full object-contain"
            />
            <div className="min-w-0">
              <div className="truncate font-sans text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                The Woodland 
              </div>
              <div className="truncate text-lg font-semibold text-foreground">Shimla</div>
            </div>
          </Link>

          <nav className="hidden items-center justify-center gap-1 lg:flex">
            {navigationItems.slice(0, 8).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-4 py-2 text-sm text-foreground/80 transition hover:bg-panel hover:text-foreground"
                activeProps={{ className: "bg-panel text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="group relative ml-1">
              {/* <button className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground/80 transition hover:bg-panel hover:text-foreground">
                More <ChevronDown className="h-4 w-4" />
              </button> */}
              <div className="pointer-events-none absolute right-0 top-full mt-2 w-60 translate-y-2 rounded-[1.5rem] border border-border bg-panel p-2 opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                {navigationItems.slice(8).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-2xl px-4 py-3 text-sm text-foreground/80 transition hover:bg-surface hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <MagneticButton>
              <Button asChild variant="hero" size="sm" className="hidden lg:inline-flex">
                <a href={`tel:${PHONE_TEL}`}>Book Now</a>
              </Button>
            </MagneticButton>
            <Button
              variant="nav"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="container-shell mt-3 lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
              <div className="grid gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-[1.2rem] px-4 py-3 text-sm text-foreground/80 transition hover:bg-surface hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="hero" className="mt-2 w-full justify-center">
                  <a href={`tel:${PHONE_TEL}`}>Book Direct</a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 bg-primary text-primary-foreground">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow text-primary-foreground/70">A woodland address in old Shimla</span>
            <h2 className="max-w-3xl text-5xl sm:text-6xl">Book direct for the warmest arrival.</h2>
            <p className="max-w-2xl text-base leading-8 text-primary-foreground/72 sm:text-lg">
              Hotel Woodland Shimla blends a trusted hillside setting, refined room comfort and
              a slower boutique rhythm close to The Ridge. For tailored stay planning, connect
              with the team directly.
            </p>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-primary-foreground/55">Call</div>
              <a href={`tel:${PHONE_TEL}`} className="mt-3 block text-lg text-primary-foreground">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-primary-foreground/55">WhatsApp</div>
              <a href={`https://wa.me/${WHATSAPP_TEL.replace("+", "")}`} className="mt-3 block text-lg text-primary-foreground">
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            {/* <div>
              <div className="text-xs uppercase tracking-[0.24em] text-primary-foreground/55">Email placeholder</div>
              <a href={`mailto:${EMAIL_PLACEHOLDER}`} className="mt-3 block text-lg text-primary-foreground">
                {EMAIL_PLACEHOLDER}
              </a>
            </div> */}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
          <FooterColumn title="Explore" links={footerLinks.explore} />
          <FooterColumn title="Stay" links={footerLinks.stay} />
          <FooterColumn title="Info" links={footerLinks.policies} />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-5 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 {SITE_NAME}. Crafted for direct bookings and premium hospitality storytelling.</div>
          <div className="flex items-center gap-4">
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="story-link">
              Google Maps
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
              <FaInstagram />
            </a>
            <a href={`https://wa.me/${WHATSAPP_TEL.replace("+", "")}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.24em] text-primary-foreground/55">{title}</div>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/80 transition hover:text-primary-foreground">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 hidden md:block">
      <MagneticButton>
        <Button asChild variant="hero" className="shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
          <Link to="/contact">Plan Your Stay</Link>
        </Button>
      </MagneticButton>
    </div>
  );
}

export function PageHero({
  image,
  eyebrow,
  title,
  description,
  align = "left",
  meta,
}: {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  meta?: string[];
}) {
  const { y, opacity } = useHeroParallax();
  const splitRef = useGsapReveal();

  return (
    <section className="relative isolate min-h-[82vh] overflow-hidden pt-28 sm:pt-32">
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y, opacity }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="section-shell relative flex min-h-[70vh] items-end pb-12 sm:pb-18">
        <div
          ref={splitRef}
          className={cn(
            "max-w-4xl space-y-6 text-white",
            align === "center" && "mx-auto text-center",
          )}
        >
          <div data-split-line className="eyebrow text-white/70">
            {eyebrow}
          </div>
          <h1 className="display-title text-[3.6rem] sm:text-[5rem] lg:text-[7rem]">
            <span data-split-line className="block">{title}</span>
          </h1>
          <p data-split-line className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
            {description}
          </p>
          {meta?.length ? (
            <div data-split-line className={cn("flex flex-wrap gap-3 pt-2", align === "center" && "justify-center")}>
              {meta.map((item) => (
                <span key={item} className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/74">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string }>();

  return (
    <>
      <HomeHero />
      <section className="section-shell page-grid">
        <Reveal>
          <div className="space-y-6">
            <span className="eyebrow">A trusted stay near The Ridge</span>
            <h2 className="section-title text-5xl text-foreground sm:text-6xl">
              British-era surroundings, modern hospitality, and a boutique pace.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="prose-luxury space-y-5">
            <p>
              Hotel Woodland Shimla is imagined as a warm mountain address where heritage-town
              access meets a more intimate way of staying. Close to The Ridge, the hotel offers
              guests an elegant base for discovering old Shimla without sacrificing comfort.
            </p>
            <p>
              The experience is built around thoughtful service, timber-toned rooms, a relaxed
              dining rhythm and the reassurance of a property that values hospitality over excess.
            </p>
            <Button asChild variant="dark" size="lg">
              <Link to="/about">Discover the story</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <TwoColumnShowcase
        image={nightImg}
        alt="Hotel Woodland Shimla exterior"
        eyebrow="About the hotel"
        title="A woodland stay crafted for quiet comfort and easy city access."
        description="Set above the energy of the town, Woodland frames Shimla as a place to slow down. The architecture, hillside placement and intimate room count create a more personal sense of arrival than generic hotel blocks."
        cta={{ label: "Explore about", to: "/about" }}
      />

      <RoomsShowcase />
      <AmenitiesSection compact />
      <DiningSection preview />
      <GallerySection preview onImageOpen={setLightbox} />
      <ExperienceSection />
      <AttractionsSection preview />
      <ReviewsSection />
      <OffersSection compact />
      <SisterPropertySection />
      <InstagramGrid onImageOpen={setLightbox} />
      <MapSection />

      <Lightbox open={Boolean(lightbox)} image={lightbox} onClose={() => setLightbox(undefined)} />
    </>
  );
}

function HomeHero() {
  const [index, setIndex] = useState(0);
  const slides = useMemo(() => [HERO_EXTERIOR_IMAGE, EXTERIOR_DAY_IMAGE, HERO_EXTERIOR_IMAGE], []);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % slides.length), 4800);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-24">
      {slides.map((slide, slideIndex) => (
        <motion.img
          key={slideIndex}
          src={slide}
          alt={slideIndex === 0 ? "Hotel Woodland Shimla exterior hero image" : "Hotel Woodland Shimla exterior view"}
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ opacity: slideIndex === index ? 1 : 0, scale: slideIndex === index ? 1 : 1.06 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      <div className="hero-overlay absolute inset-0" />
      <div className="section-shell relative flex min-h-[88vh] flex-col justify-end gap-10 pb-8 sm:pb-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div className="max-w-4xl text-white">
            <Reveal>
              <div className="eyebrow text-white/74">Luxury boutique hospitality in Shimla</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="display-title mt-5 text-[4.1rem] sm:text-[5.8rem] lg:text-[8rem]">
                Hotel Woodland Shimla
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Elegant rooms, warm mountain hospitality, trusted location near The Ridge and a
                slower boutique rhythm designed to turn first-time stays into repeat escapes.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton>
                  <Button asChild variant="hero" size="lg">
                    <Link to="/rooms">Explore Rooms</Link>
                  </Button>
                </MagneticButton>
                <Button asChild variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white">
                  <Link to="/contact">Book Direct</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <BookingWidget />
          </Reveal>
        </div>

        <div className="flex items-center justify-between gap-4 text-white/70">
          <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.18em] sm:text-sm">
            <span>Luxury comfort</span>
            <span>Boutique scale</span>
            <span>Near The Ridge</span>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] sm:text-sm">
            <span>Scroll</span>
            <div className="h-10 w-px bg-white/25" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BookingWidget() {
  return (
    <div className="glass-panel rounded-[2rem] p-5 text-panel-foreground">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-luxury/15 text-luxury">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Book Direct</div>
          <div className="text-xl">Preferred stay planning</div>
        </div>
      </div>
      <div className="grid gap-3">
        <BookingField icon={<CalendarDays className="h-4 w-4" />} label="Arrival" value="Select date" />
        <BookingField icon={<CalendarDays className="h-4 w-4" />} label="Departure" value="Select date" />
        <BookingField icon={<Users className="h-4 w-4" />} label="Guests" value="2 Adults" />
        <BookingField icon={<ChevronDown className="h-4 w-4" />} label="Room Type" value={roomTypes[0]} />
      </div>
      <Button asChild variant="hero" size="lg" className="mt-5 w-full justify-center">
        <Link to="/contact">Check Availability</Link>
      </Button>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        Booking engine integration is intentionally left as a clean placeholder for future live
        connectivity.
      </p>
    </div>
  );
}

function BookingField({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[1.4rem] border border-border bg-background/70 px-4 py-3">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="mt-2 text-sm text-foreground">{value}</div>
    </div>
  );
}

export function TwoColumnShowcase({
  image,
  alt,
  eyebrow,
  title,
  description,
  cta,
  reverse,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  cta?: { label: string; to: string };
  reverse?: boolean;
}) {
  return (
    <section className="section-shell">
      <div className={cn("grid items-center gap-8 lg:grid-cols-2 lg:gap-14", reverse && "lg:[&>*:first-child]:order-2")}>
        <Reveal>
          <div className="image-mask luxury-shadow aspect-[0.92]">
            <ParallaxMedia src={image} alt={alt} className="h-full w-full" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-title text-5xl text-foreground sm:text-6xl">{title}</h2>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
            {cta ? (
              <Button asChild variant="dark" size="lg">
                <Link to={cta.to}>{cta.label}</Link>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function RoomsShowcase() {
  return (
    <section className="section-shell">
      <Reveal className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="eyebrow">Luxury rooms showcase</span>
          <h2 className="section-title text-5xl sm:text-6xl">Rooms shaped for rest, warmth and quiet mountain evenings.</h2>
        </div>
        <Button asChild variant="outline" size="lg">
          <Link to="/rooms">View all rooms</Link>
        </Button>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {rooms.map((room, index) => (
          <Reveal key={room.slug} delay={index * 0.08}>
            <RoomCard room={room} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function RoomCard({ room }: { room: (typeof rooms)[number] }) {
  return (
    <div className="interactive-card glass-panel group overflow-hidden rounded-[2rem]">
      <div className="image-mask aspect-[0.95] rounded-none rounded-t-[2rem]">
        <img src={room.image} alt={room.alt} className="image-mask-inner" loading="lazy" />
      </div>
      <div className="space-y-5 p-5">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{room.size}</div>
          <h3 className="text-4xl">{room.name}</h3>
          <p className="text-sm leading-7 text-muted-foreground">{room.tagline}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-foreground/75">
          {room.highlights.map((item) => (
            <div key={item.label} className="rounded-[1.1rem] border border-border bg-background/70 p-3">
              <item.icon className="mb-2 h-4 w-4 text-luxury" />
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
              <div className="mt-1">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Stay detail</div>
            <div className="mt-1 text-sm text-foreground">{room.occupancy}</div>
          </div>
          <Button asChild variant="dark">
            <Link to="/rooms/$roomSlug" params={{ roomSlug: room.slug }}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AmenitiesSection({ compact = false }: { compact?: boolean }) {
  const list = compact ? amenities.slice(0, 9) : amenities;
  return (
    <section className="section-shell">
      <Reveal className="mb-10 max-w-3xl space-y-4">
        <span className="eyebrow">Hotel facilities</span>
        <h2 className="section-title text-5xl sm:text-6xl">Elegant essentials that make the stay feel easy.</h2>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((amenity, index) => (
          <Reveal key={amenity.title} delay={index * 0.04}>
            <div className="glass-panel interactive-card h-full rounded-[1.8rem] p-5">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-luxury/12 text-luxury">
                <amenity.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-3xl">{amenity.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{amenity.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function DiningSection({ preview = false }: { preview?: boolean }) {
  return (
    <section className="section-shell">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14">
        <Reveal>
          <div className="space-y-5">
            <span className="eyebrow">Dining at Woodland</span>
            <h2 className="section-title text-5xl sm:text-6xl">Comfort-led dining with Indian and Chinese favourites.</h2>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Dining here is less about spectacle and more about reassurance — warm service,
              familiar flavours, family-friendly ease and an atmosphere that suits relaxed mountain
              evenings.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Breakfast service",
                "Indian cuisine",
                "Chinese cuisine",
                "Dinner service",
              ].map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-border bg-surface p-4 text-sm text-foreground/82">
                  {item}
                </div>
              ))}
            </div>
            <Button asChild variant="dark" size="lg">
              <Link to="/dining">{preview ? "Explore dining" : "Reserve your meal"}</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-5">
            <div className="image-mask aspect-[1.18] luxury-shadow">
              <img src={preview ? EXTERIOR_DAY_IMAGE : HERO_EXTERIOR_IMAGE} alt="Woodland dining preview placeholder awaiting restaurant photography replacement" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="image-mask aspect-[0.96]">
                <img src={outside} alt="Placeholder restaurant image for future Woodland dining photography replacement" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="image-mask aspect-[0.96]">
                <img src={outside1} alt="Placeholder food or chef image for future Woodland dining photography replacement" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function GallerySection({
  preview = false,
  onImageOpen,
}: {
  preview?: boolean;
  onImageOpen?: (image: { src: string; alt: string }) => void;
}) {
  const items = preview ? galleryImages.slice(0, 32) : galleryImages;
  return (
    <section className="section-shell">
      <Reveal className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title text-5xl sm:text-6xl">A visual story of rooms, hillside light and the Woodland mood.</h2>
        </div>
        {preview ? (
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">Open full gallery</Link>
          </Button>
        ) : null}
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={`${item.src}-${index}`} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => onImageOpen?.({ src: item.src, alt: item.alt })}
              className={cn(
                "group relative block w-full overflow-hidden rounded-[1.7rem] text-left",
                index % 5 === 0 ? "sm:col-span-2" : "",
              )}
            >
              <div className={cn("image-mask", index % 5 === 0 ? "aspect-[1.8]" : "aspect-[0.95]")}> 
                <img src={item.src} alt={item.alt} className="image-mask-inner" loading="lazy" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/72">{item.category}</div>
                  <div className="mt-1 text-lg">{item.alt.replace("Placeholder image for ", "")}</div>
                </div>
                <ArrowRight className="h-5 w-5 translate-x-0 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 rounded-[2.5rem] bg-primary px-6 py-10 text-primary-foreground sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
        <Reveal>
          <div className="space-y-5">
            <span className="eyebrow text-primary-foreground/60">Why Woodland</span>
            <h2 className="section-title text-5xl sm:text-6xl">A stay built on trust, location and warmth rather than excess.</h2>
            <p className="max-w-2xl text-base leading-8 text-primary-foreground/74 sm:text-lg">
              Woodland’s appeal lies in its balance: close enough to the heritage heart of Shimla,
              quiet enough to feel restorative, and warm enough to feel like a return rather than a
              transaction.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["History", "A property setting that feels rooted in old Shimla’s character."],
              ["Hospitality", "Thoughtful support that favours reassurance over formality."],
              ["Nature", "Mountain weather, hillside views and slower mornings."],
              ["Location", "Easy access to The Ridge, Mall Road and cultural landmarks."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5">
                <div className="text-2xl">{title}</div>
                <p className="mt-3 text-sm leading-7 text-primary-foreground/72">{description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AttractionsSection({ preview = false }: { preview?: boolean }) {
  const list = preview ? attractions.slice(0, 4) : attractions;
  return (
    <section className="section-shell">
      <Reveal className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="eyebrow">Nearby attractions</span>
          <h2 className="section-title text-5xl sm:text-6xl">Stay close to Shimla’s heritage and hill-station icons.</h2>
        </div>
        <Button asChild variant="outline" size="lg">
          <Link to="/nearby-attractions">View attractions</Link>
        </Button>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {list.map((attraction, index) => (
          <Reveal key={attraction.slug} delay={index * 0.06}>
            <div className="glass-panel interactive-card overflow-hidden rounded-[2rem]">
              <div className="image-mask aspect-[1.18] rounded-none rounded-t-[2rem]">
                <img src={attraction.image} alt={attraction.alt} className="image-mask-inner" loading="lazy" />
              </div>
              <div className="space-y-4 p-5">
                <div className="space-y-2">
                  <h3 className="text-4xl">{attraction.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{attraction.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-[1.1rem] border border-border bg-background/70 p-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Distance</div>
                    <div className="mt-1">{attraction.distance}</div>
                  </div>
                  <div className="rounded-[1.1rem] border border-border bg-background/70 p-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Travel time</div>
                    <div className="mt-1">{attraction.travelTime}</div>
                  </div>
                </div>
                <Button asChild variant="dark">
                  <Link to="/location">Map & route</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="section-shell">
      <Reveal className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="eyebrow">Guest reviews</span>
          <h2 className="section-title text-5xl sm:text-6xl">Warm words from travellers who chose direct comfort.</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous review">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()} aria-label="Next review">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </Reveal>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {reviews.map((review) => (
            <div key={review.name} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_60%] xl:flex-[0_0_42%]">
              <div className="glass-panel h-full rounded-[2rem] p-6">
                <div className="mb-5 flex items-center gap-4">
                  <img src={review.image} alt={`Placeholder guest portrait for ${review.name}`} className="h-16 w-16 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="text-xl text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location} · {review.stay}</div>
                  </div>
                </div>
                <div className="mb-5 flex gap-1 text-luxury">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-foreground/82">“{review.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <CounterCard value={stat.value} suffix={stat.suffix} label={stat.label} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CounterCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const started = performance.now();
    const duration = 1000;
    const step = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      setDisplay(value * progress);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  const current = value % 1 === 0 ? Math.round(display).toString() : display.toFixed(1);

  return (
    <div className="rounded-[1.8rem] border border-border bg-surface p-5">
      <div className="text-4xl text-foreground sm:text-5xl">{current}{suffix}</div>
      <div className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function OffersSection({ compact = false }: { compact?: boolean }) {
  const list = compact ? offers.slice(0, 3) : offers;
  return (
    <section className="section-shell">
      <Reveal className="mb-10 max-w-2xl space-y-4">
        <span className="eyebrow">Offers & packages</span>
        <h2 className="section-title text-5xl sm:text-6xl">Curated stay ideas for weekends, families and longer hill escapes.</h2>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-4">
        {list.map((offer, index) => (
          <Reveal key={offer.title} delay={index * 0.05}>
            <div className="glass-panel interactive-card h-full rounded-[2rem] p-5">
              <div className="text-xs uppercase tracking-[0.24em] text-luxury">{offer.label}</div>
              <h3 className="mt-4 text-4xl">{offer.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{offer.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-foreground/82">
                {offer.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-luxury" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="dark" className="mt-6">
                <Link to="/contact">Enquire offer</Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function InstagramGrid({ onImageOpen }: { onImageOpen?: (image: { src: string; alt: string }) => void }) {
  return (
    <section className="section-shell">
      <Reveal className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="eyebrow">Instagram-style gallery</span>
          <h2 className="section-title text-5xl sm:text-6xl">The everyday beauty of the property, room by room and light by light.</h2>
        </div>
        <Button asChild variant="outline" size="lg">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Follow the mood</a>
        </Button>
      </Reveal>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {galleryImages.slice(0, 10).map((item, index) => (
          <button key={`${item.src}-${index}`} type="button" onClick={() => onImageOpen?.({ src: item.src, alt: item.alt })} className="group overflow-hidden rounded-[1.4rem]">
            <div className="image-mask aspect-square rounded-[1.4rem]">
              <img src={item.src} alt={item.alt} className="image-mask-inner" loading="lazy" />
            </div> 
          </button>
        ))}
      </div>
    </section>
  );
}

export function SisterPropertySection() {
  const images = [
    { src: "https://www.thewoodlandhotels.com/assets/exterior-day-dhkRYqUU.jpg", alt: "The Woodland Kandaghat exterior" },
    { src: "https://www.thewoodlandhotels.com/assets/terrace-view-BKRq2NLZ.jpg", alt: "Terrace view at Kandaghat" },
    { src: "https://www.thewoodlandhotels.com/assets/restaurant-sunset-DeMLL-yt.jpg", alt: "Restaurant at sunset" },
    { src: "https://www.thewoodlandhotels.com/assets/lounge-view-CffJuhMy.jpg", alt: "Valley lounge view" },
  ];

  return (
    <section className="section-shell">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://www.thewoodlandhotels.com/assets/exterior-night-C4Jr-vbU.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/95" />

        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.05fr_1fr] lg:p-16">
          <Reveal className="flex flex-col justify-center gap-6">
            <span className="eyebrow text-primary-foreground/70">Our sister property</span>
            <h2 className="section-title text-5xl text-primary-foreground sm:text-6xl">
              The Woodland Kandaghat — a boutique retreat between Shimla &amp; Chail.
            </h2>
            <p className="max-w-xl text-base leading-8 text-primary-foreground/80 sm:text-lg">
              Tucked into Himalayan pines on NH-5, our second home offers layered valley views,
              fresh Indian cuisine and the same warm Woodland hospitality — just a scenic drive away.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-[0.22em] text-primary-foreground/70">
              <span>12+ years</span>
              <span>10K+ guests</span>
              <span>4.7★ rated</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <a href="https://www.thewoodlandhotels.com" target="_blank" rel="noreferrer">
                  Visit Kandaghat website
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              >
                <a href="tel:+919418021100">Call +91 94180 21100</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`image-mask rounded-[1.4rem] ${index === 0 ? "aspect-[4/5]" : index === 3 ? "aspect-[4/5]" : "aspect-square"}`}
                >
                  <img src={image.src} alt={image.alt} className="image-mask-inner" loading="lazy" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


export function MapSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 rounded-[2.5rem] bg-surface p-6 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
        <Reveal>
          <div className="space-y-6">
            <span className="eyebrow">Location</span>
            <h2 className="section-title text-5xl sm:text-6xl">Stay close to the landmarks that shape Shimla.</h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              From The Ridge to Mall Road and cultural landmarks nearby, the hotel is positioned
              for travellers who want a more walkable, story-rich Shimla stay.
            </p>
            <div className="grid gap-3">
              <div className="flex items-start gap-3 rounded-[1.4rem] border border-border bg-background px-4 py-4 text-sm leading-7 text-foreground/82">
                <MapPin className="mt-1 h-4 w-4 text-luxury" />
                <span>{ADDRESS_LINES.join(", ")}</span>
              </div>
              {distances.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-[1.4rem] border border-border bg-background px-4 py-4 text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="dark" size="lg">
              <a href={MAPS_URL} target="_blank" rel="noreferrer">Open Google Maps</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
            <iframe
              src={MAP_EMBED_SRC}
              title="Hotel Woodland Shimla map"
              width="100%"
              height="100%"
              className="min-h-[420px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactPanel() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="space-y-5">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title text-5xl sm:text-6xl">Reserve directly with the hotel team.</h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Share your stay dates, room preference and travel details. The form below is a styled
              placeholder ready for future booking engine or enquiry integration.
            </p>
            <div className="grid gap-3">
              <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} />
              <ContactCard icon={<FaWhatsapp className="h-5 w-5" />} label="WhatsApp" value={WHATSAPP_DISPLAY} href={`https://wa.me/${WHATSAPP_TEL.replace("+", "")}`} />
              <ContactCard icon={<Mail className="h-5 w-5" />} label="Email placeholder" value={EMAIL_PLACEHOLDER} href={`mailto:${EMAIL_PLACEHOLDER}`} />
              <ContactCard icon={<Clock3 className="h-5 w-5" />} label="Business Hours" value="Daily, reservation assistance during hotel operating hours" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactInput label="Full name" placeholder="Your name" />
              <ContactInput label="Phone" placeholder="Mobile number" />
              <ContactInput label="Arrival" placeholder="Check-in date" />
              <ContactInput label="Departure" placeholder="Check-out date" />
              <ContactInput label="Guests" placeholder="Adults / children" />
              <ContactInput label="Room type" placeholder="Preferred room" />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea
                className="min-h-36 w-full rounded-[1.3rem] border border-border bg-background px-4 py-4 text-sm text-foreground"
                placeholder="Tell the team about your stay requirements, special occasions or arrival planning."
              />
            </div>
            <Button variant="hero" size="lg" className="mt-5 w-full justify-center">
              Send Enquiry Placeholder
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-[1.4rem] border border-border bg-surface px-4 py-4">
      <div className="mt-1 text-luxury">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-base text-foreground">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {content}
    </a>
  ) : (
    content
  );
}

function ContactInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        className="h-12 w-full rounded-[1.2rem] border border-border bg-background px-4 text-sm text-foreground"
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-shell">
      <Reveal className="mb-10 max-w-3xl space-y-4">
        <span className="eyebrow">Frequently asked questions</span>
        <h2 className="section-title text-5xl sm:text-6xl">Everything guests usually want to know before confirming a stay.</h2>
      </Reveal>
      <div className="grid gap-4">
        {faqs.map((faq, index) => {
          const active = open === index;
          return (
            <Reveal key={faq.question} delay={index * 0.04}>
              <button
                type="button"
                onClick={() => setOpen(active ? null : index)}
                className="glass-panel w-full rounded-[1.7rem] p-5 text-left"
                aria-expanded={active}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-2xl text-foreground sm:text-3xl">{faq.question}</div>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border">
                    <ChevronDown className={cn("h-5 w-5 transition-transform", active && "rotate-180")} />
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pr-8 pt-4 text-sm leading-8 text-muted-foreground"
                    >
                      {faq.answer}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function BlogGrid() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <div className="glass-panel overflow-hidden rounded-[2rem]">
            <div className="image-mask aspect-[1.06] rounded-none rounded-t-[2rem]">
              <img src={blogPosts[0].image} alt={blogPosts[0].alt} className="image-mask-inner" loading="lazy" />
            </div>
            <div className="space-y-4 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-luxury">Featured post</div>
              <h2 className="text-4xl">{blogPosts[0].title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{blogPosts[0].excerpt}</p>
              <Button asChild variant="dark">
                <Link to="/blog/$slug" params={{ slug: blogPosts[0].slug }}>Read article</Link>
              </Button>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <div className="glass-panel interactive-card overflow-hidden rounded-[2rem]">
                <div className="image-mask aspect-[1.18] rounded-none rounded-t-[2rem]">
                  <img src={post.image} alt={post.alt} className="image-mask-inner" loading="lazy" />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl">{post.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
                  <Button asChild variant="outline">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>Open article</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DirectionsSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["By Air", "Shimla Airport is approximately 26 KM away. Private transfer planning can be coordinated in advance."],
          ["By Rail", "Shimla Railway Station is around 7.5 KM from the hotel and connects beautifully with the toy-train heritage route."],
          ["By Road", "Lakkar Bazaar Bus Station is just 550m away, making the final approach especially convenient for road travellers."],
        ].map(([title, description], index) => (
          <Reveal key={title} delay={index * 0.05}>
            <div className="glass-panel h-full rounded-[2rem] p-5">
              <h3 className="text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PolicyContent({ title, intro, sections }: { title: string; intro: string; sections: { heading: string; body: string[] }[] }) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="space-y-4">
            <span className="eyebrow">Policy information</span>
            <h1 className="section-title text-5xl sm:text-6xl">{title}</h1>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">{intro}</p>
          </div>
        </Reveal>
        <div className="mt-10 space-y-8">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.04}>
              <article className="glass-panel rounded-[2rem] p-6">
                <h2 className="text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-8 text-muted-foreground sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NotFoundLuxury() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary pt-28 text-primary-foreground">
      <div className="section-shell flex min-h-[75vh] flex-col items-center justify-center text-center">
        <motion.div
          className="mb-8 text-[8rem] sm:text-[10rem]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          ⛰
        </motion.div>
        <div className="eyebrow text-primary-foreground/60">404</div>
        <h1 className="mt-4 text-6xl sm:text-7xl">The path disappears into the hills.</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/74 sm:text-lg">
          The page you were looking for is not available. Return to Hotel Woodland Shimla and begin again from the main story.
        </p>
        <Button asChild variant="hero" size="lg" className="mt-8">
          <Link to="/">Back Home</Link>
        </Button>
      </div>
    </section>
  );
}
