// Static product catalog: 16 standalone general medical products, one price point each.

export type CategoryId = "mobility" | "home-care" | "first-aid" | "daily-living";

export interface Category {
  id: CategoryId;
  name: string;
  blurb: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  { id: "mobility", name: "Mobility & Support", blurb: "Braces, supports and walking aids for everyday movement.", image: "/images/site/cat-mobility.png" },
  { id: "home-care", name: "Home Care", blurb: "Pillows, cushions and bedroom and bathroom safety helpers.", image: "/images/site/cat-home-care.png" },
  { id: "first-aid", name: "First Aid & Wound Care", blurb: "Bandages, gauze, tape, gloves and complete first aid kits.", image: "/images/site/cat-first-aid.png" },
  { id: "daily-living", name: "Daily Living Aids", blurb: "Simple helpers for reaching, organizing and bathing.", image: "/images/site/cat-daily-living.png" },
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  price: number;
  image: string;
  summary: string;
  description: string[];
  included: string[];
  specs: { label: string; value: string }[];
  care: string[];
}

const IMG = "/images/products";

export const PRODUCTS: Product[] = [
  {
    id: "weekly-pill-organizer",
    slug: "weekly-pill-organizer",
    name: "Weekly Pill Organizer, 7-Day AM/PM",
    category: "daily-living",
    price: 9.99,
    image: `${IMG}/weekly-pill-organizer.png`,
    summary: "Fourteen snap-lid compartments to sort a full week of morning and evening doses.",
    description: [
      "This weekly organizer has seven day columns, each split into a morning and an evening compartment, so you can sort a week of items ahead of time in a single sitting. Each compartment has its own snap-closed lid.",
      "The clear body lets you see at a glance which compartments are filled. The compact case slides into a drawer, bag or travel pouch.",
    ],
    included: ["1 weekly organizer with 14 snap-lid compartments", "Clear body so each compartment is easy to see"],
    specs: [
      { label: "Compartments", value: "14 (7 days, AM and PM)" },
      { label: "Size", value: "7.5 x 5.5 x 1.1 inches" },
      { label: "Weight", value: "3 oz" },
      { label: "Material", value: "BPA-free polypropylene" },
    ],
    care: ["Wipe clean with a damp cloth; do not machine wash.", "Keep lids closed when not in use and store away from direct heat."],
  },
  {
    id: "medical-tape-set",
    slug: "medical-tape-set",
    name: "Medical Tape Set, 6 Rolls",
    category: "first-aid",
    price: 13.95,
    image: `${IMG}/medical-tape-set.png`,
    summary: "Six hand-tearable rolls in three widths for dressings, gauze and wraps.",
    description: [
      "A practical set of six medical tape rolls: two paper, two cloth and two clear rolls. Each tears by hand, so no scissors are needed when you are securing a dressing or gauze pad.",
      "The rolls come in half-inch, one-inch and two-inch widths, so one set covers small and large dressings around the house.",
    ],
    included: ["2 paper tape rolls", "2 cloth tape rolls", "2 clear tape rolls", "Rolls sized 0.5, 1 and 2 inches wide, 10 yards each"],
    specs: [
      { label: "Rolls", value: "6" },
      { label: "Widths", value: "0.5 in, 1 in, 2 in" },
      { label: "Length per roll", value: "10 yards (30 feet)" },
      { label: "Weight", value: "9 oz" },
    ],
    care: ["Apply to clean, dry skin or dressings.", "Store in a cool, dry place and keep rolls capped in their sleeves."],
  },
  {
    id: "folding-reacher-grabber",
    slug: "folding-reacher-grabber",
    name: "Folding Reacher Grabber, 26 Inch",
    category: "daily-living",
    price: 14.75,
    image: `${IMG}/folding-reacher-grabber.png`,
    summary: "Lightweight 26-inch pole with a trigger grip to pick up items without bending.",
    description: [
      "The folding reacher grabber extends your reach by 26 inches so you can pick up light items from the floor or a high shelf. A trigger grip closes the rubber-lined jaws.",
      "The pole folds in the middle for storage in a drawer or closet and locks straight when opened. A magnetic tip helps with small metal items such as keys.",
    ],
    included: ["1 folding reacher grabber", "Rubber-lined jaws with magnetic tip"],
    specs: [
      { label: "Length", value: "26 inches open, 14 inches folded" },
      { label: "Weight", value: "7 oz" },
      { label: "Maximum pick-up weight", value: "Up to 5 lbs" },
      { label: "Material", value: "Aluminum pole, ABS handle" },
    ],
    care: ["Use for light household items only.", "Wipe with a damp cloth; keep the folding joint free of debris."],
  },
  {
    id: "bandage-gauze-assortment",
    slug: "bandage-gauze-assortment",
    name: "Adhesive Bandage and Gauze Assortment, 280 Pieces",
    category: "first-aid",
    price: 17.95,
    image: `${IMG}/bandage-gauze-assortment.png`,
    summary: "Assorted adhesive bandages plus sterile gauze pads for everyday cuts and scrapes.",
    description: [
      "This assortment pairs fabric and plastic adhesive bandages in several sizes with individually wrapped sterile gauze pads. It is meant to restock a home, car or office first aid supply.",
      "Bandages are latex-free and individually wrapped. The compact box keeps everything organized and easy to grab.",
    ],
    included: ["200 adhesive bandages in assorted sizes", "60 sterile gauze pads, 2 x 2 inches", "20 sterile gauze pads, 4 x 4 inches", "Storage box"],
    specs: [
      { label: "Total pieces", value: "280" },
      { label: "Bandage styles", value: "Fabric and clear plastic" },
      { label: "Latex", value: "Latex-free" },
      { label: "Box size", value: "8 x 5 x 3 inches" },
    ],
    care: ["Use sterile items once and discard.", "Do not use if an individual wrapper is open or damaged. Store in a dry place."],
  },
  {
    id: "nitrile-gloves-200",
    slug: "nitrile-gloves-200",
    name: "Disposable Nitrile Gloves, Box of 200",
    category: "first-aid",
    price: 18.75,
    image: `${IMG}/nitrile-gloves-200.png`,
    summary: "Powder-free, latex-free disposable gloves in a pull-out dispenser box.",
    description: [
      "Two hundred powder-free nitrile gloves in a dispenser box, suited to first aid, caregiving, cleaning and food prep. Nitrile is latex-free and textured on the fingertips for grip.",
      "Gloves are ambidextrous, so they fit either hand. This box contains size medium.",
    ],
    included: ["200 disposable nitrile gloves, size medium", "Pull-out dispenser box"],
    specs: [
      { label: "Count", value: "200 gloves (100 pairs)" },
      { label: "Size", value: "Medium" },
      { label: "Thickness", value: "4 mil" },
      { label: "Material", value: "Powder-free, latex-free nitrile" },
    ],
    care: ["Single use only; discard after use.", "Store in a cool, dry place away from sunlight."],
  },
  {
    id: "adjustable-knee-support",
    slug: "adjustable-knee-support",
    name: "Adjustable Knee Support Brace",
    category: "mobility",
    price: 28.76,
    image: `${IMG}/adjustable-knee-support.png`,
    summary: "Breathable neoprene knee support with hook-and-loop straps and an open front.",
    description: [
      "This knee support wraps the knee in snug neoprene and closes with hook-and-loop straps, so you set the fit yourself. An open-front design keeps the kneecap free for comfortable bending.",
      "It is a simple elastic support for everyday wear during walking, chores or light activity. It fits either knee.",
    ],
    included: ["1 adjustable knee support brace", "Fit guide card"],
    specs: [
      { label: "Fits knee circumference", value: "12 to 20 inches (measure 4 inches above the kneecap)" },
      { label: "Size", value: "One size, adjustable" },
      { label: "Weight", value: "5 oz" },
      { label: "Material", value: "Neoprene with nylon lining" },
    ],
    care: ["Hand wash in cool water with mild soap and air dry.", "Do not bleach or tumble dry."],
  },
  {
    id: "posture-support-brace",
    slug: "posture-support-brace",
    name: "Adjustable Posture Support Brace",
    category: "mobility",
    price: 38.64,
    image: `${IMG}/posture-support-brace.png`,
    summary: "Figure-eight shoulder straps and a back panel that remind you to sit and stand tall.",
    description: [
      "The posture support brace uses padded shoulder straps and a smooth back panel to give a gentle reminder to keep your shoulders back. It sits flat under a shirt.",
      "Straps adjust with hook-and-loop closures, and the breathable mesh lining keeps it comfortable through a workday.",
    ],
    included: ["1 posture support brace", "Sizing chart"],
    specs: [
      { label: "Fits chest size", value: "30 to 48 inches" },
      { label: "Strap width", value: "2 inches" },
      { label: "Weight", value: "9 oz" },
      { label: "Material", value: "Breathable mesh and elastic" },
    ],
    care: ["Hand wash with mild soap; air dry flat.", "Wear over or under clothing as preferred."],
  },
  {
    id: "memory-foam-cervical-pillow",
    slug: "memory-foam-cervical-pillow",
    name: "Memory Foam Cervical Contour Pillow",
    category: "home-care",
    price: 47.89,
    image: `${IMG}/memory-foam-cervical-pillow.png`,
    summary: "Contoured memory foam pillow with a neck curve and a washable cover.",
    description: [
      "This contour pillow has a raised neck curve on one side and a lower curve on the other, so you can choose the height that suits how you sleep. The memory foam softens to your shape and returns to form.",
      "The zippered bamboo-blend cover comes off for washing.",
    ],
    included: ["1 memory foam contour pillow", "1 removable zippered cover"],
    specs: [
      { label: "Size", value: "23.5 x 14.5 x 4.7 inches" },
      { label: "Weight", value: "2.4 lbs" },
      { label: "Fill", value: "Memory foam" },
      { label: "Cover", value: "Bamboo-blend, machine washable" },
    ],
    care: ["Spot clean the foam; do not wash or wring it.", "Machine wash the cover on gentle and air dry."],
  },
  {
    id: "bed-wedge-pillow",
    slug: "bed-wedge-pillow",
    name: "Bed Wedge Pillow, 7.5 Inch",
    category: "home-care",
    price: 49.76,
    image: `${IMG}/bed-wedge-pillow.png`,
    summary: "A 7.5-inch high foam incline for reading, resting or propping up legs.",
    description: [
      "The bed wedge pillow provides a firm foam incline that is helpful for propping yourself up to read or watch TV, or for elevating legs while resting. It is 24 inches wide.",
      "The gray cover is removable and machine washable, and a non-slip base helps keep the wedge in place on the mattress.",
    ],
    included: ["1 foam bed wedge", "1 removable washable cover"],
    specs: [
      { label: "Size", value: "24 x 24 x 7.5 inches" },
      { label: "Weight", value: "3.1 lbs" },
      { label: "Fill", value: "High-density foam" },
      { label: "Cover", value: "Polyester, machine washable" },
    ],
    care: ["Wash the cover in cold water and air dry.", "Spot clean the foam only."],
  },
  {
    id: "gel-seat-cushion",
    slug: "gel-seat-cushion",
    name: "Gel and Memory Foam Seat Cushion",
    category: "home-care",
    price: 53.45,
    image: `${IMG}/gel-seat-cushion.png`,
    summary: "Memory foam seat cushion with a gel layer, tailbone cutout and non-slip base.",
    description: [
      "A seat cushion for office chairs, dining chairs, wheelchairs or car seats. A layer of cooling gel sits on top of high-density memory foam, and a rear cutout relieves pressure at the tailbone area.",
      "The mesh cover zips off for washing, and the rubber-dotted base helps stop the cushion sliding.",
    ],
    included: ["1 gel and memory foam seat cushion", "1 removable zippered cover", "Carry handle"],
    specs: [
      { label: "Size", value: "18 x 16 x 3 inches" },
      { label: "Weight", value: "2.6 lbs" },
      { label: "Weight capacity", value: "Up to 300 lbs" },
      { label: "Cover", value: "Breathable mesh, machine washable" },
    ],
    care: ["Machine wash the cover on gentle; air dry.", "Wipe the foam with a damp cloth."],
  },
  {
    id: "family-first-aid-kit",
    slug: "family-first-aid-kit",
    name: "Family First Aid Kit, 326 Pieces",
    category: "first-aid",
    price: 54.95,
    image: `${IMG}/family-first-aid-kit.png`,
    summary: "Zippered soft case with 326 organized pieces for home, car and travel.",
    description: [
      "A well-stocked kit for the home or car with bandages, gauze, tape, wipes, scissors, tweezers, cold packs and more, sorted into labeled compartments inside a zippered case.",
      "The case has a carry handle and a loop for hanging in a closet or on a hook.",
    ],
    included: ["Assorted adhesive bandages and gauze pads", "Medical tape roll and elastic wrap", "Antiseptic wipes and alcohol pads", "Scissors and tweezers", "2 instant cold packs", "Nitrile gloves and a CPR face shield", "Zippered organizer case"],
    specs: [
      { label: "Total pieces", value: "326" },
      { label: "Case size", value: "10.5 x 7.5 x 4.5 inches" },
      { label: "Weight", value: "2.2 lbs" },
      { label: "Case material", value: "Water-resistant nylon" },
    ],
    care: ["Check supplies twice a year and replace anything used.", "Store in a dry place at room temperature."],
  },
  {
    id: "adjustable-shower-stool",
    slug: "adjustable-shower-stool",
    name: "Adjustable Height Shower Stool",
    category: "daily-living",
    price: 86.88,
    image: `${IMG}/adjustable-shower-stool.png`,
    summary: "Tool-free adjustable aluminum stool with a padded seat and non-slip feet.",
    description: [
      "This shower stool gives you a stable place to sit while bathing or shaving. The legs adjust without tools across six height settings, and the rubber tips grip wet tile or tub floors.",
      "The rust-resistant aluminum frame is light enough to move yourself, and the seat has drainage holes so water does not collect.",
    ],
    included: ["1 shower stool", "Padded seat", "4 non-slip rubber foot tips"],
    specs: [
      { label: "Seat height", value: "13 to 19 inches in 6 settings" },
      { label: "Seat size", value: "13.5 inches diameter" },
      { label: "Weight capacity", value: "Up to 300 lbs" },
      { label: "Product weight", value: "4.3 lbs" },
    ],
    care: ["Check that the leg buttons are fully locked before each use.", "Rinse and wipe dry after use; inspect rubber tips regularly."],
  },
  {
    id: "folding-seat-cane",
    slug: "folding-seat-cane",
    name: "Folding Walking Cane with Fold-Out Seat",
    category: "mobility",
    price: 87.64,
    image: `${IMG}/folding-seat-cane.png`,
    summary: "Height-adjustable aluminum cane with a built-in fold-out seat for rest stops.",
    description: [
      "A walking cane that opens into a small seat when you need to rest. The seat folds flat against the shaft, and the rubber tip grips on smooth floors and sidewalks.",
      "The ergonomic handle is padded for comfort, and the shaft adjusts to five heights.",
    ],
    included: ["1 folding cane with seat", "Padded handle", "Rubber tip"],
    specs: [
      { label: "Height range", value: "32 to 37 inches in 5 settings" },
      { label: "Seat height", value: "Approx. 18 inches" },
      { label: "Weight capacity", value: "Up to 250 lbs" },
      { label: "Product weight", value: "2.1 lbs" },
    ],
    care: ["Check the locking pin and rubber tip before each use.", "Replace the tip when worn. Wipe with a damp cloth."],
  },
  {
    id: "shower-chair-with-arms",
    slug: "shower-chair-with-arms",
    name: "Shower Chair with Arms and Back",
    category: "daily-living",
    price: 87.76,
    image: `${IMG}/shower-chair-with-arms.png`,
    summary: "Padded armrests, a backrest and height-adjustable legs for a steady seat in the tub.",
    description: [
      "A shower chair with a contoured backrest and two armrests to help you sit and stand. The padded seat has drain holes and the legs adjust to six heights without tools.",
      "Non-slip rubber feet help keep the chair steady on wet surfaces.",
    ],
    included: ["1 shower chair", "Backrest and armrests", "Non-slip rubber foot tips"],
    specs: [
      { label: "Seat height", value: "16 to 21 inches in 6 settings" },
      { label: "Seat width", value: "18 inches" },
      { label: "Weight capacity", value: "Up to 350 lbs" },
      { label: "Product weight", value: "7.6 lbs" },
    ],
    care: ["Confirm the leg locks are fully engaged before each use.", "Rinse and wipe dry after use."],
  },
  {
    id: "raised-toilet-seat-with-arms",
    slug: "raised-toilet-seat-with-arms",
    name: "Raised Toilet Seat with Arms",
    category: "home-care",
    price: 94.82,
    image: `${IMG}/raised-toilet-seat-with-arms.png`,
    summary: "Adds about 5 inches of seat height with padded armrests for sitting and standing.",
    description: [
      "This raised toilet seat adds roughly 5 inches to the seat height and includes padded armrests that provide a hand-hold when sitting down or standing up.",
      "It locks onto standard round or elongated bowls with an adjustable clamp, and the smooth surface wipes clean.",
    ],
    included: ["1 raised seat with armrests", "Adjustable locking hardware", "Installation guide"],
    specs: [
      { label: "Added height", value: "Approx. 5 inches" },
      { label: "Weight capacity", value: "Up to 300 lbs" },
      { label: "Product weight", value: "6.2 lbs" },
      { label: "Fits", value: "Standard round and elongated bowls" },
    ],
    care: ["Check that the locking clamp is tight before each use.", "Clean with a mild household cleaner."],
  },
  {
    id: "bed-assist-rail",
    slug: "bed-assist-rail",
    name: "Bed Assist Rail with Storage Pocket",
    category: "home-care",
    price: 96.95,
    image: `${IMG}/bed-assist-rail.png`,
    summary: "Sturdy metal handle that slides under the mattress to help with getting in and out of bed.",
    description: [
      "The bed assist rail gives you a firm handle beside the bed to hold while getting up or lying down. A steel base slides under the mattress and holds the rail steady.",
      "A fabric storage pocket holds a phone, glasses or the TV remote, and the handle height adjusts to three settings.",
    ],
    included: ["1 bed assist rail", "Fabric storage pocket", "Mattress strap"],
    specs: [
      { label: "Handle height", value: "Adjusts to 3 settings, up to 20 inches above the mattress" },
      { label: "Weight capacity", value: "Up to 300 lbs" },
      { label: "Product weight", value: "8.8 lbs" },
      { label: "Fits", value: "Most home mattresses and box springs" },
    ],
    care: ["Check that the base is firmly under the mattress before each use.", "Wipe with a damp cloth."],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
export function formatPrice(n: number): string {
  return `$${n.toFixed(2)}`;
}
