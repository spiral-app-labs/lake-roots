export const CONTACT = {
  phoneHref: "tel:8158936240",
  phoneDisplay: "(815) 893-6240",
  email: "events@lakerootscl.com",
  addressLine1: "475 W Virginia Street",
  addressLine2: "Crystal Lake, IL 60014",
};

export const SITE_CONFIG = {
  previewUrl: "https://lake-roots.vercel.app",
  businessUrl: "https://lakerootscl.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://lake-roots.vercel.app",
};

export const LINKS = {
  instagram: "https://instagram.com/lakerootsco",
  instagramProfileCard: "https://www.instagram.com/lakerootsco/profilecard/?igsh=MXI2M2c2OWFwMDBpcg%3D%3D",
  facebook: "https://facebook.com/lakerootsco",
  giftCards: "https://order.toasttab.com/egiftcards/lake-roots-475-west-virginia-street",
  catering: "https://www.toasttab.com/invoice/lead?rx=3477ef2e-ca38-4b67-a8d3-b0ad50fce024&ot=45774fc6-5674-4347-9ff0-8460700a4161",
  parties: "https://www.toasttab.com/invoice/lead?rx=3477ef2e-ca38-4b67-a8d3-b0ad50fce024&ot=49621c33-4543-4944-bca0-30c0ac6b4c8d",
  collaborations: "https://docs.google.com/forms/d/1M0Bi9QqqUKo2Gy7GfFylkHL3u1IriRuaig58BA6ITPY/viewform?edit_requested=true",
  artistInquiries: "https://docs.google.com/forms/d/e/1FAIpQLScsRg6gWgcoCpw2WKhAsJN3BbLAR9IgmDFckUi_3QKsGbP8HQ/viewform?usp=publish-editor",
  marketSubmissions: "https://docs.google.com/forms/d/e/1FAIpQLScc2-bkd9SF-Bu3LJ16y6DCtvR9yXAsaR58dTojctN7J1X0DA/viewform",
};

export const BRAND_ASSETS = {
  logoLight: "https://images.squarespace-cdn.com/content/v1/6809bd960f2dc66fd779e179/53142154-124c-4cde-a696-7cca164fc7a8/Primary_Linear_Cream.png",
  logoDark: "https://images.squarespace-cdn.com/content/v1/6809bd960f2dc66fd779e179/d8157e55-d97d-4fa0-9ecb-321bde2f0729/Primary_Linear_Boat_Grey.png",
  boatMark: "https://images.squarespace-cdn.com/content/v1/6809bd960f2dc66fd779e179/a9f410bc-a26d-4f3c-859e-1df9abd76f8e/Lake+Roots+-+Crystal+Lake+-+Boat+Logo",
};

export const IMAGE_ASSETS = {
  hero: "https://images.squarespace-cdn.com/content/v1/6809bd960f2dc66fd779e179/0b35459b-9292-45c8-84eb-12b55540e533/Lake+Roots+Website+Banner-13.jpg",
  dinner: "https://images.squarespace-cdn.com/content/v1/6809bd960f2dc66fd779e179/d69a00cf-5726-450f-811f-fc7d07e388ed/Lake+Roots+Dinner+Crystal+Lake",
  founders: "https://images.squarespace-cdn.com/content/v1/6809bd960f2dc66fd779e179/0d8700a0-a01f-472e-87be-d3f2d62e64b0/Lake+Roots+Rod+and+Janey+-+Crystal+Lake",
  tasting: "https://static1.squarespace.com/static/6809bd960f2dc66fd779e179/t/690aaf23ee39c00f909956d5/1762307875481/LakeRootsTasting-Sept22-03.jpg?format=1500w",
  marketShelves: "https://images.squarespace-cdn.com/content/v1/6809bd960f2dc66fd779e179/1772478399017-BSM2AWKLBTIDHK51KYRF/image-asset.jpeg",
};

export const NO_RESERVATIONS_NOTE =
  "At Lake Roots, no reservations are needed. Walk-ins are always welcome.";

export const HOURS = [
  { day: "Monday", hours: "7:00 AM – 3:00 PM" },
  { day: "Tuesday", hours: "7:00 AM – 9:00 PM" },
  { day: "Wednesday", hours: "7:00 AM – 9:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 11:00 PM" },
  { day: "Friday", hours: "7:00 AM – 12:00 AM" },
  { day: "Saturday", hours: "8:00 AM – 12:00 AM" },
  { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
];

export const INSTAGRAM_POSTS = [
  { img: IMAGE_ASSETS.hero, alt: "Lake Roots dining room and bar", label: "Inside Lake Roots" },
  { img: IMAGE_ASSETS.dinner, alt: "Dinner service at Lake Roots", label: "Dinner + cocktails" },
  { img: IMAGE_ASSETS.marketShelves, alt: "Market shelves stocked at Lake Roots", label: "Market finds" },
  { img: IMAGE_ASSETS.founders, alt: "Rod and Janey at Lake Roots", label: "Rod + Janey" },
];

export const PROOF_POINTS = [
  {
    eyebrow: "Founder-Led",
    title: "Built by locals for everyday moments in Crystal Lake.",
    copy:
      "The story page centers Rod and Janey, the Main Beach-to-Downtown location, and the goal of creating a place people can actually walk to and use often.",
    source: "Lake Roots story",
    href: `${SITE_CONFIG.businessUrl}/our-story`,
  },
  {
    eyebrow: "Local Coverage",
    title: "The opening was covered as a real Crystal Lake business story, not a generic concept launch.",
    copy:
      "Patch reported Lake Roots opening in the former Mr. A's space with a cafe, curated market, and bar that gives the neighborhood a new everyday gathering place.",
    source: "Crystal Lake Patch",
    href: "https://patch.com/illinois/crystallake/new-business-cafe-market-artisanal-bar-opens-crystal-lake",
  },
  {
    eyebrow: "Community Demand",
    title: "The neighborhood response has already been strong enough to make local news.",
    copy:
      "Shaw Local reported overflow parking and city adjustments around the site, which is a concrete sign that the business is drawing real attention from Crystal Lake locals.",
    source: "Shaw Local",
    href: "https://www.shawlocal.com/northwest-herald/2025/11/30/good-problem-success-of-new-crystal-lake-cafe-and-market-prompts-city-to-regulate-overflow-parking/",
  },
];

export const BREAKFAST_MENU = [
  { name: "Avocado Toast", price: "$10", desc: "Avocado, pickled red onion, feta, arugula, sesame seeds, sea salt, garlic butter sourdough" },
  { name: "Crunch Toast", price: "$15", desc: "House-made granola, pistachio cream cheese, banana, strawberries, local honey, shredded coconut, whole wheat" },
  { name: "Cinnamon Roll French Toast", price: "$15", desc: "Cinnamon roll, battered, grilled, powdered sugar, cream cheese frosting" },
  { name: "Pierson St. Parfait", price: "$15", desc: "Vanilla greek yogurt, house-made granola, berries, local honey, chia seeds, almond butter" },
  { name: "Commuter Classic", price: "$10", desc: "Scrambled egg, sharp cheddar, LR sauce, potato bun, choice of bacon or house-made breakfast sausage" },
  { name: "Lox Bagel", price: "$15", desc: "Smoked salmon, boursin cheese, cucumber, tomato, capers, pickled red onion, hard-boiled egg, everything bagel" },
  { name: "William St. Wrap", price: "$12", desc: "Eggs, house-made breakfast sausage, lake roots potatoes, sharp cheddar, LR sauce, pickled red onion, wheat tortilla" },
  { name: "The Daily Quiche", price: "$8", desc: "Bacon, cheddar, green onion" },
  { name: "Gourmet Breakfast Sammy", price: "$15", desc: "Eggs, sharp cheddar, bacon, chipotle mayo, avocado, tomato, arugula, schiacciata" },
  { name: "Breakfast Bowl", price: "$14", desc: "Lake roots potatoes, roasted vegetables, pickled onion, over-easy eggs, avocado, tahini" },
  { name: "The Bistro", price: "$14", desc: "Boursin cheese, eggs, green onion, croissant" },
];

export const PASTRIES = [
  "Pistachio Scones", "Chocolate Scones", "Plain Scones", "Bacon Cheddar Scones",
  "Blueberry Scones", "Banana Muffins", "Chocolate Chip Cookies", "Baked Banana Bread", "Seasonal Breads"
];

export const LUNCH_MENU = [
  { name: "Classic Caesar", price: "$12", desc: "+chicken $5, +salmon $9" },
  { name: "BLT+A", price: "$14", desc: "Smoked bacon, arugula, tomato, avocado, roasted garlic aioli, sourdough" },
  { name: "Harvest Melt", price: "$14", desc: "In-house roasted turkey, sharp cheddar, apple slaw, cranberry aioli, pinsa" },
  { name: "The Poke Bowl", price: "$18", desc: "Ahi tuna, rice, avocado, jalapeño, cucumber, mixed greens, wonton crisps, japanese dressing" },
  { name: "Loaded Baked Potato Soup", price: "$7", desc: "House-made, served daily" },
  { name: "The Gates Grilled Cheese", price: "$14", desc: "Bacon, grilled tomato, brie, sharp cheddar, ghost pepper cheese, sourdough" },
  { name: "Signature Smash Burger", price: "$18", desc: "Two smashed patties, sharp cheddar, caramelized onion, LR sauce, potato bun" },
  { name: "Salmon Burger", price: "$17", desc: "House-made salmon patties, ghost pepper cheese, spring mix, chipotle mayo, potato bun" },
  { name: "Mediterranean Wrap", price: "$12", desc: "Roasted zucchini, squash, carrots, red pepper, mushroom, red onion, house-made med dressing, wheat tortilla" },
];

export const DINNER_STARTERS = [
  { name: "Traditional Wings", price: "$9", desc: "5 wings — Asian zing, buffalo garlic, garlic parm, or smokestack dry rub" },
  { name: "Nonna's Meatballs", price: "$12", desc: "House-made beef and pork, marinara, focaccia" },
  { name: "Fish Tacos", price: "$12", desc: "Mahi mahi, jack cheese, lettuce, pico, guacamole" },
  { name: "Ahi Tostada", price: "$17", desc: "Ahi tuna, wonton crisps, guacamole, pico, wasabi drizzle" },
  { name: "Falafel", price: "$16", desc: "House-made tzatziki, arugula, citrus vinaigrette, chipotle pepper jam aioli" },
  { name: "Korean BBQ Pork Tacos", price: "$10", desc: "Jack cheese, cilantro, pickled red onion, sour cream, bbq ranch" },
];

export const DINNER_BOARDS = [
  { name: "Butter Board", price: "$22", desc: "Artisanal butters, breads, accompaniments" },
  { name: "Mezze Board", price: "$24", desc: "Mediterranean dips, flatbread, vegetables" },
  { name: "Charcuterie Board", price: "$27", desc: "Curated meats, cheeses, accompaniments" },
];

export const DINNER_PINSAS = [
  { name: "BBQ Chicken", price: "$18", desc: "BBQ sauce, chicken, red onion, cilantro" },
  { name: "Caprese", price: "$16", desc: "Fresh mozzarella, tomato, basil" },
  { name: "Pear & Prosciutto", price: "$19", desc: "Pear, prosciutto, gorgonzola, arugula" },
  { name: "Carnivore", price: "$18", desc: "Pepperoni, sausage, bacon, mozzarella" },
];

export const DINNER_BOWLS = [
  { name: "Green Goddess", price: "$16", desc: "Mixed greens, avocado, cucumber, herbs" },
  { name: "Lake & Leaf", price: "$25", desc: "Grilled salmon, seasonal greens, citrus" },
  { name: "Sweet & Savory", price: "$16", desc: "Mixed flavors, seasonal ingredients" },
  { name: "The Poke Bowl", price: "$18", desc: "Ahi tuna, rice, avocado, wonton crisps" },
];

export const DINNER_ENTREES = [
  { name: "Braised Short Rib", price: "$22", desc: "Slow-braised, rich and tender" },
  { name: "Garden Pasta", price: "$15", desc: "Seasonal vegetables, light sauce" },
  { name: "Lemon Chicken", price: "$15", desc: "Bright citrus, herbs, seasonal sides" },
  { name: "Signature Smash Burger", price: "$18", desc: "Two smashed patties, sharp cheddar, caramelized onion, LR sauce" },
  { name: "Parmesan Encrusted Walleye", price: "$21", desc: "Crispy parmesan crust, lemon, herbs" },
  { name: "Café Steak", price: "Market Price", desc: "Chef's selection, seasonal preparation" },
];

export const KIDS_MENU = [
  { name: "Strudel Sticks", price: "$7" },
  { name: "French Toast Bites", price: "$8" },
  { name: "Scrambler", price: "$8" },
  { name: "Chicken Tenders", price: "$9" },
  { name: "Grilled Cheese", price: "$7" },
  { name: "Lumber Jacks", price: "$9" },
  { name: "Mini Cheese Burgers", price: "$9" },
  { name: "Mac n Cheese", price: "$6" },
];

export const DESSERTS = [
  { name: "Coconut Cream Bread Pudding", price: "", desc: "21+ — Bumbu infused" },
  { name: "Chocolate Chip Cookie Skillet", price: "", desc: "Warm, gooey, shareable" },
  { name: "Caramel Almond Pastry", price: "", desc: "Flaky, sweet, nutty" },
  { name: "Affogato Espresso", price: "", desc: "Espresso over gelato" },
  { name: "Vanilla Gelato", price: "", desc: "Classic, creamy" },
];

export const COFFEE_MENU = [
  { name: "Espresso", price: "$3.50" },
  { name: "Macchiato", price: "$3.75" },
  { name: "Cortado", price: "$4.00" },
  { name: "Cappuccino", price: "$4.25" },
  { name: "Latte", price: "$4.50 / $4.75" },
  { name: "Mocha", price: "$5.50 / $5.75" },
  { name: "Americano", price: "$3.75" },
  { name: "Drip Coffee", price: "$3.50 / $4.00" },
  { name: "Cold Brew", price: "$5.50 / $6.75" },
  { name: "Nitro Cold Brew", price: "$6.50 / $7.75" },
];

export const ADDONS = [
  { name: "Flavored Syrups", price: "$0.50", desc: "Vanilla, caramel, lavender, hazelnut" },
  { name: "Extra Espresso", price: "$0.75", desc: "" },
  { name: "Cold Foam", price: "$1.00", desc: "" },
  { name: "Milk Substitute", price: "$0.75", desc: "Oat, almond, or coconut" },
  { name: "Protein Collagen", price: "$0.99", desc: "" },
];

export const TEA_MENU = [
  { name: "Hot Tea", price: "$3.50" },
  { name: "Iced Tea", price: "$3.50 / $4.00" },
  { name: "Chai Latte", price: "$5.00 / $5.50" },
  { name: "Matcha Latte", price: "$5.50 / $6.00" },
  { name: "Hot Chocolate", price: "$3.50 / $4.00" },
];

export const REVIVERS = [
  { name: "Strawberry Surge", price: "$6.00 / $6.25" },
  { name: "Riptide", price: "$6.00 / $6.25" },
  { name: "Pink Cloud", price: "$6.00 / $6.25" },
];

export const SMOOTHIES = [
  { name: "Tropical Chill", price: "$7.00" },
  { name: "BerryBliss", price: "$7.00" },
  { name: "BerryNana", price: "$7.00" },
  { name: "Little Roots", price: "$3.00" },
];

export const LUNCH_COCKTAILS = ["Mimosa", "French 75", "Natural Blonde Mary", "Bloody Mary", "Aperol Spritz", "St. Germain Spritz"];

export const DINNER_COCKTAILS = [
  "Cinnamon Manhattan", "The Violet", "Espresso Martini", "Aperol Spritz", "The Deuce",
  "Lake Roots Old Fashioned", "Wisconsin Koolaid", "Matcha Martini", "St. Germain Spritz", "Lake Roots Margarita"
];

export const WINE_WHITE = ["Terlato Pinot Grigio", "Napa Cellars Sauvignon Blanc", "Whitehaven SB", "Raeburn Chardonnay"];
export const WINE_ROSE = ["Freixenet Sparkling Italian Rosé", "Bieler Père & Fils", "Mionetto Prosecco"];
export const WINE_RED = ["Boen Pinot Noir", "Walking Fool Caymus Red Blend", "Bonanza Cabernet Sauvignon", "Decoy Merlot"];

export const EVENTS = [
  {
    title: "Current happenings",
    date: "Follow @lakerootsco",
    time: "Live updates on Instagram",
    desc: "Lake Roots shares weekly happenings, specials, and community moments through its active social channels.",
    icon: "📍",
  },
];
