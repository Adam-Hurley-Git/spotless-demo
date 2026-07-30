/**
 * Shared site content for Spotlessly Clean Ltd.
 *
 * Keeping copy, contact details and imagery in one place means the home page
 * and the dedicated pages (Services & Pricing, Contact) never drift apart.
 *
 * NOTE FOR DAN: guide prices below are indicative starting points so the
 * pricing page isn't empty — update the numbers in PRICING to your real rates.
 */

/*
 * Real photos of Dan's work, served from /public/images so they load on any
 * host (Vercel, Netlify, etc.). The original Lovable build referenced images
 * via internal "/__l5e/..." URLs that only resolve inside Lovable's own
 * hosting, which is why every image 404'd once deployed elsewhere.
 */
const IMG = "/images";

export const LOGO = `${IMG}/spotlessly-logo.svg`;
export const HERO_IMG = `${IMG}/sc-hero.jpg`;

const kitchenImg = `${IMG}/sc-kitchen.jpg`;
const bathroomImg = `${IMG}/sc-bathroom.jpg`;
const deepImg = `${IMG}/sc-deep.jpg`; // grimy "before" shot for deep cleans
const tenancyImg = `${IMG}/sc-tenancy.jpg`;
const officeImg = `${IMG}/sc-office.jpg`;
const ovenImg = `${IMG}/sc-oven.jpg`; // real dirty-oven interior
const buildersImg = `${IMG}/sc-builders.jpg`;
const hallImg = `${IMG}/sc-hall.jpg`;
const bedroomImg = `${IMG}/sc-bedroom.jpg`;
const showerImg = `${IMG}/sc-shower.jpg`;
const loungeImg = `${IMG}/sc-lounge.jpg`;
const diningImg = `${IMG}/sc-dining.jpg`;
const bath2Img = `${IMG}/sc-bath2.jpg`;

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const IG = "https://www.instagram.com/spotlesslyclean.ltd/";
export const FB = "https://www.facebook.com/profile.php?id=61588053458427";
export const PHONE = "+44 7881 766083";
export const PHONE_HREF = "tel:+447881766083";
export const WHATSAPP = "https://wa.me/447881766083";
export const EMAIL = "raymond_dan_97@outlook.com";
export const EMAIL_HREF = "mailto:raymond_dan_97@outlook.com";
export const ADDRESS = "26 Dulverton Avenue, Cardiff, United Kingdom";

/* ------------------------------------------------------------------ */
/* Navigation — a mix of real pages and in-page section anchors        */
/* ------------------------------------------------------------------ */

export type NavItem = {
  label: string;
  /** route to navigate to */
  to: string;
  /** optional in-page section id on that route */
  hash?: string;
};

export const NAV: NavItem[] = [
  { label: "Services & pricing", to: "/services" },
  { label: "Our work", to: "/", hash: "work" },
  { label: "How it works", to: "/", hash: "process" },
  { label: "Reviews", to: "/", hash: "reviews" },
  { label: "Contact", to: "/contact" },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  title: string;
  /** short line used in cards */
  body: string;
  img: string;
  /** longer paragraph used on the services page */
  detail: string;
  /** what's included checklist */
  includes: string[];
};

/**
 * The first four are the headline services shown on the home page.
 * The full list (all of them) is shown on the Services & Pricing page.
 */
export const SERVICES: Service[] = [
  {
    slug: "regular",
    title: "Weekly, fortnightly & monthly cleans",
    body: "A regular slot that keeps on top of the whole house — kitchens, bathrooms, floors, dusting and surfaces.",
    img: kitchenImg,
    detail:
      "The same trusted clean on a schedule that suits you. Dan keeps on top of the whole home so it never gets away from you — ideal for busy households, families and anyone who would simply rather spend their weekend on something else.",
    includes: [
      "Kitchen surfaces, hob and outside of appliances",
      "Bathrooms, sinks, toilets and showers sanitised",
      "Dusting, skirtings and surfaces throughout",
      "Floors vacuumed and mopped",
      "Beds made and tidying on request",
      "Same day and time each visit, same trusted cleaner",
    ],
  },
  {
    slug: "deep",
    title: "Deep cleans",
    body: "Top to bottom, inside and behind. Skirtings, appliances, tiles, limescale and everything usually skipped.",
    img: deepImg,
    detail:
      "A thorough reset for the whole property. Deep cleans reach the places a regular clean doesn't — inside appliances, behind and under where we can, tiles, grout and built-up limescale. A great starting point before going onto a regular slot.",
    includes: [
      "Inside the oven, fridge and microwave",
      "Limescale removed from taps, tiles and glass",
      "Skirtings, door frames, handles and switches",
      "Behind and under furniture where accessible",
      "Detailed bathroom and kitchen degreasing",
      "Windows cleaned internally",
    ],
  },
  {
    slug: "end-of-tenancy",
    title: "Moving in / end of tenancy",
    body: "Landlord-ready cleans for moving in or out, carried out to the standard inventory checks expect.",
    img: tenancyImg,
    detail:
      "Moving is stressful enough. Whether you're handing keys back and want your deposit protected, or moving into a place you'd like properly freshened first, Dan cleans to the standard letting agents and inventory clerks look for.",
    includes: [
      "Whole property cleaned top to bottom",
      "Inside the oven and all kitchen appliances",
      "Cupboards and drawers cleaned inside and out",
      "Bathrooms descaled and sanitised",
      "Internal windows, sills and frames",
      "Left ready for inventory / check-out",
    ],
  },
  {
    slug: "office-commercial",
    title: "Office & commercial",
    body: "Offices, shops and workspaces cleaned around your hours so your team walks into a fresh space.",
    img: officeImg,
    detail:
      "Reliable cleaning for offices, shops, studios and other workspaces, scheduled around your opening hours. A consistent, professional finish so your team and your customers always arrive to a space that looks after itself.",
    includes: [
      "Desks, surfaces and shared areas",
      "Kitchens, break rooms and washrooms",
      "Bins emptied and liners replaced",
      "Floors vacuumed and mopped throughout",
      "Cleaned around your hours, out of the way",
      "Flexible frequency to suit the business",
    ],
  },
  {
    slug: "oven",
    title: "Oven cleaning",
    body: "A dedicated oven detail — racks, glass, trays and interior brought back to life.",
    img: ovenImg,
    detail:
      "A focused deep clean of the one job everyone puts off. Racks, glass, trays and the interior are degreased and brought back to a like-new shine — on its own, or added to any other clean.",
    includes: [
      "Interior degreased and wiped down",
      "Racks and trays soaked and cleaned",
      "Glass door cleaned inside the panes where possible",
      "Hob, knobs and exterior finished",
      "Can be added to a deep or end of tenancy clean",
    ],
  },
  {
    slug: "airbnb",
    title: "Airbnb & holiday-let turnarounds",
    body: "Quick, reliable changeovers between guests, finished to a five-star standard.",
    img: loungeImg,
    detail:
      "Dependable changeovers for short-let hosts. Dan turns the property around between guests to a consistent, photo-ready standard, so every arrival meets the reviews you're working hard to earn.",
    includes: [
      "Full clean between guest stays",
      "Beds stripped and freshly made",
      "Bathrooms sanitised and restocked",
      "Kitchen reset and checked",
      "Quick, reliable turnaround windows",
      "A consistent five-star finish every time",
    ],
  },
  {
    slug: "after-builders",
    title: "After-builders cleans",
    body: "Dust, debris and residue cleared after works so you can enjoy the new space.",
    img: buildersImg,
    detail:
      "Building and renovation work leaves fine dust everywhere. Dan clears the debris and the residue left behind so you can move straight into enjoying the finished result rather than cleaning up after it.",
    includes: [
      "Fine construction dust removed throughout",
      "Paint splashes and residue cleared",
      "Surfaces, units and fittings wiped down",
      "Floors thoroughly vacuumed and mopped",
      "Windows, sills and frames cleaned",
    ],
  },
  {
    slug: "upholstery",
    title: "Upholstery cleaning",
    body: "Sofas, chairs and soft furnishings refreshed and lifted.",
    img: bedroomImg,
    detail:
      "Bring tired sofas, chairs and soft furnishings back to life. A great add-on to a deep clean, or booked on its own when the furniture needs a lift more than the rest of the room.",
    includes: [
      "Sofas and armchairs refreshed",
      "Soft furnishings and cushions treated",
      "Spot attention on marks where possible",
      "Pairs well with a deep clean",
    ],
  },
];

/** Headline four shown on the home page. */
export const HOME_SERVICES = SERVICES.slice(0, 4);

export const EXTRAS = [
  "One-off cleans",
  "Oven cleans",
  "Upholstery cleans",
  "Airbnb cleaning",
  "After builders cleans",
  "Monthly cleans",
];

/* ------------------------------------------------------------------ */
/* Pricing — indicative guide only (see note at top of file)           */
/* ------------------------------------------------------------------ */

export type PriceRow = {
  name: string;
  guide: string;
  note: string;
};

export const PRICING: PriceRow[] = [
  {
    name: "Regular clean",
    guide: "from £18 / hr",
    note: "Weekly, fortnightly or monthly. Priced on the size of the home and how often you'd like it.",
  },
  {
    name: "One-off / deep clean",
    guide: "quoted per job",
    note: "Based on the property's size and condition. You'll get a clear, fixed price before we start.",
  },
  {
    name: "End of tenancy",
    guide: "quoted per property",
    note: "Priced by number of bedrooms and bathrooms. Oven and appliances included.",
  },
  {
    name: "Office & commercial",
    guide: "tailored quote",
    note: "Priced around your space, frequency and hours. Regular contracts welcome.",
  },
];

/* ------------------------------------------------------------------ */
/* Trust points                                                        */
/* ------------------------------------------------------------------ */

export const TRUST = [
  ["Trusted & reliable", "Friendly, professional and fully insured."],
  ["Vetted & experienced", "Carefully vetted, trained and experienced."],
  ["Sparkling results", "Attention to every detail so you don't have to."],
  ["Flexible & convenient", "Cleans to suit your schedule and your needs."],
];

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const GALLERY = [
  { src: hallImg, alt: "Cleaned hallway and staircase" },
  { src: bedroomImg, alt: "Freshly cleaned bedroom" },
  { src: showerImg, alt: "Sparkling glass shower and vanity" },
  { src: loungeImg, alt: "Open plan lounge after a deep clean" },
  { src: diningImg, alt: "Dining room cleaned and tidied" },
  { src: bath2Img, alt: "Bathroom cleaned to a spotless finish" },
];

/* ------------------------------------------------------------------ */
/* Reviews                                                             */
/* ------------------------------------------------------------------ */

export const REVIEWS = [
  {
    quote:
      "We've been using Dan for several months now after going through a number of cleaners who either let us down or just weren't up to the standard we were looking for. Dan has been absolutely amazing. He's never cancelled on us once, and the house feels absolutely spotless every time he leaves. His attention to detail is incredible. I'd be absolutely lost without my weekly clean.",
    name: "Georgina Hambly",
  },
  {
    quote:
      "Dan is fantastic at his job, punctual, reliable and has an excellent standard of work. Communication is clear, friendly & very easy to arrange appointments and discuss any key requirements. Dan has a great attention to detail, a caring nature and most of all is kind & respectful when working with elderly and vulnerable.",
    name: "Megan Perkins",
  },
  {
    quote:
      "I messaged Dan after seeing a post on FB. From the start Dan's communication was excellent, very open and honest. Dan arrived this morning perfectly on time and spent 3 hours cleaning my home. I'm super impressed by Dan's attention to detail and he is very thorough. Dan will now be cleaning our house on a fortnightly basis.",
    name: "Anna Richardson",
  },
  {
    quote:
      "We asked Dan for a deep clean of our house! The most thorough clean we have ever had — we are now looking forward to regular cleans!",
    name: "Sravya Gabriella",
  },
];

/* ------------------------------------------------------------------ */
/* Areas covered                                                       */
/* ------------------------------------------------------------------ */

export const AREAS = [
  "Cardiff City Centre",
  "Cyncoed",
  "Llanishen",
  "Roath",
  "Whitchurch",
  "Penarth",
  "Radyr",
  "Rhiwbina",
  "Pontprennau",
  "Grangetown",
  "Canton",
  "Llandaff",
];
