import { CONTACT, HOURS, LINKS, NO_RESERVATIONS_NOTE } from "@/lib/data";

export const CONCIERGE_SUGGESTIONS = [
  "Dinner ideas",
  "Hours",
  "Walk-ins",
  "Parties",
];

const menuHighlights = [
  "Commuter Classic breakfast sandwich",
  "Lox Bagel",
  "Signature Smash Burger",
  "Poke Bowl",
  "Nonna's Meatballs",
  "Parmesan Encrusted Walleye",
  "Lake Roots Old Fashioned",
];

function hoursLine() {
  return HOURS.map((entry) => `${entry.day}: ${entry.hours.replace(/–/g, "-")}`).join("; ");
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

export function getLakeRootsConciergeReply(message: string) {
  const text = message.toLowerCase();

  if (includesAny(text, ["allerg", "gluten", "vegan", "vegetarian", "diet", "ingredient", "cross-contact", "substitution"])) {
    return `For allergies, ingredients, substitutions, or cross-contact questions, please call ${CONTACT.phoneDisplay} before ordering. I can point to published menu and visit details, but the team should confirm kitchen handling directly.`;
  }

  if (includesAny(text, ["hour", "open", "close", "late", "today", "tonight"])) {
    return `${hoursLine()}. Hours can change around events or holidays, so call ${CONTACT.phoneDisplay} if timing is tight.`;
  }

  if (includesAny(text, ["reservation", "reserve", "book", "table", "wait"])) {
    return `${NO_RESERVATIONS_NOTE} I cannot hold a table or quote a live wait time. For time-sensitive questions, call ${CONTACT.phoneDisplay}.`;
  }

  if (includesAny(text, ["where", "address", "location", "direction", "parking", "map"])) {
    return `Lake Roots is at ${CONTACT.addressLine1}, ${CONTACT.addressLine2}. Use the directions link for the live map route: ${LINKS.directions}. Busy periods can fill the lots, so give yourself a little extra time.`;
  }

  if (includesAny(text, ["menu", "order", "eat", "dinner", "breakfast", "lunch", "recommend", "popular", "coffee", "cocktail", "drink"])) {
    return `Good starting points include ${menuHighlights.slice(0, 6).join(", ")}. Lake Roots covers breakfast, lunch, dinner, coffee, cocktails, and market finds. For current availability or prices, call ${CONTACT.phoneDisplay}.`;
  }

  if (includesAny(text, ["party", "private", "event", "catering", "collaboration", "artist", "author", "music"])) {
    return `For gatherings, use the verified Lake Roots inquiry paths: private parties ${LINKS.parties}, catering ${LINKS.catering}, community collaborations ${LINKS.collaborations}, and artist or author inquiries ${LINKS.artistInquiries}.`;
  }

  if (includesAny(text, ["gift", "card", "market"])) {
    return `Lake Roots has local market shelves and e-gift cards. Start with gift cards here: ${LINKS.giftCards}. For market availability, call ${CONTACT.phoneDisplay}.`;
  }

  if (includesAny(text, ["phone", "call", "contact", "email"])) {
    return `You can call Lake Roots at ${CONTACT.phoneDisplay} or email ${CONTACT.email}.`;
  }

  return `Lake Roots is a Crystal Lake cafe, market, and bar at ${CONTACT.addressLine1}. I can help with menus, hours, directions, walk-in details, events, catering, and gift cards. For live availability, allergies, or urgent questions, call ${CONTACT.phoneDisplay}.`;
}
