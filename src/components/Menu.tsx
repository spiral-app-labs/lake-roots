"use client";
import { useState } from "react";
import { useInView } from "./useInView";

type MenuItem = { name: string; price: string; description: string };
type MenuCategory = { category: string; items: MenuItem[] };

const dayMenu: MenuCategory[] = [
  {
    category: "Breakfast",
    items: [
      { name: "Avocado Toast", price: "$10", description: "Avocado, pickled red onion, feta, arugula, sesame seeds, sea salt, garlic butter sourdough" },
      { name: "Crunch Toast", price: "$15", description: "House-made granola, pistachio cream cheese, banana, strawberries, local honey, coconut, whole wheat" },
      { name: "Cinnamon Roll French Toast", price: "$15", description: "Cinnamon roll, battered, grilled, powdered sugar, cream cheese frosting" },
      { name: "Pierson St. Parfait", price: "$15", description: "Vanilla greek yogurt, house-made granola, berries, local honey, chia seeds, almond butter" },
      { name: "Commuter Classic", price: "$10", description: "Scrambled egg, sharp cheddar, LR sauce, potato bun, choice of bacon or sausage" },
      { name: "Lox Bagel", price: "$15", description: "Smoked salmon, boursin cheese, cucumber, tomato, capers, pickled red onion, everything bagel" },
      { name: "William St. Wrap", price: "$12", description: "Eggs, house-made breakfast sausage, potatoes, sharp cheddar, LR sauce, wheat tortilla" },
      { name: "The Daily Quiche", price: "$8", description: "Bacon, cheddar, green onion" },
      { name: "Gourmet Breakfast Sammy", price: "$15", description: "Eggs, sharp cheddar, bacon, chipotle mayo, avocado, tomato, arugula, schiacciata" },
      { name: "Breakfast Bowl", price: "$14", description: "Lake roots potatoes, roasted vegetables, pickled onion, over-easy eggs, avocado, tahini" },
      { name: "The Bistro", price: "$14", description: "Boursin cheese, eggs, green onion, croissant" },
    ],
  },
  {
    category: "Lunch",
    items: [
      { name: "Classic Caesar", price: "$12", description: "Romaine, parmesan, house-made croutons, caesar dressing (+chicken $5, +salmon $9)" },
      { name: "BLT+A", price: "$14", description: "Smoked bacon, arugula, tomato, avocado, roasted garlic aioli, sourdough" },
      { name: "Harvest Melt", price: "$14", description: "In-house roasted turkey, sharp cheddar, apple slaw, cranberry aioli, pinsa" },
      { name: "The Poke Bowl", price: "$18", description: "Ahi tuna, rice, avocado, jalapeño, cucumber, mixed greens, wonton crisps" },
      { name: "Loaded Baked Potato Soup", price: "$7", description: "House-made, rich and creamy" },
      { name: "The Gates Grilled Cheese", price: "$14", description: "Bacon, grilled tomato, brie, sharp cheddar, ghost pepper cheese, sourdough" },
      { name: "Signature Smash Burger", price: "$18", description: "Two smashed patties, sharp cheddar, caramelized onion, LR sauce, potato bun" },
      { name: "Salmon Burger", price: "$17", description: "House-made salmon patties, ghost pepper cheese, spring mix, chipotle mayo" },
      { name: "Mediterranean Wrap", price: "$12", description: "Roasted zucchini, squash, carrots, red pepper, mushroom, mediterranean dressing" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Scones", price: "Varies", description: "Pistachio, chocolate, plain, bacon cheddar, blueberry — rotating daily" },
      { name: "Banana Muffins", price: "Varies", description: "Fresh baked daily" },
      { name: "Chocolate Chip Cookies", price: "Varies", description: "Warm from the oven" },
      { name: "Banana Bread", price: "Varies", description: "House baked, perfectly moist" },
    ],
  },
];

const nightMenu: MenuCategory[] = [
  {
    category: "To Start or Share",
    items: [
      { name: "Traditional Wings", price: "$9", description: "5 wings — Asian zing, buffalo garlic, garlic parmesan, or smokestack dry rub" },
      { name: "Nonna's Meatballs", price: "$12", description: "House-made beef and pork meatballs, marinara, focaccia" },
      { name: "Fish Tacos", price: "$12", description: "Mahi mahi, jack cheese, lettuce, pico de gallo, guacamole, corn tortillas" },
      { name: "Ahi Tostada", price: "$17", description: "Ahi tuna, wonton crisps, guacamole, pico de gallo, wasabi drizzle" },
      { name: "Falafel", price: "$16", description: "House-made tzatziki, arugula, citrus vinaigrette, chipotle pepper jam aioli" },
      { name: "Korean BBQ Pork Tacos", price: "$10", description: "Jack cheese, cilantro, pickled red onion, sour cream, bbq ranch" },
    ],
  },
  {
    category: "Boards",
    items: [
      { name: "Butter Board", price: "$22", description: "Assorted butter spreads, garlic, pistachio, red pepper flakes, sea salt, lemon zest" },
      { name: "Mezze Board", price: "$24", description: "Roasted red pepper hummus, olive medley, tzatziki, vegetables, pita bread" },
      { name: "Charcuterie Board", price: "$27", description: "Artisanal cured meats and cheeses, cornichon pickles, fruit, local jams" },
    ],
  },
  {
    category: "Pinsas",
    items: [
      { name: "BBQ Chicken", price: "$18", description: "Grilled chicken, pickled red onion, bbq sauce, cheddar cheese, cilantro" },
      { name: "Caprese", price: "$16", description: "Mozzarella, tomato dollops, baby heirloom tomatoes, basil, olive oil, sea salt" },
      { name: "Pear & Prosciutto", price: "$19", description: "Roasted pears, goat cheese, mozzarella, prosciutto, arugula" },
      { name: "Carnivore", price: "$18", description: "Meatballs, bacon, spicy Italian sausage, marinara, mozzarella, parmesan" },
    ],
  },
  {
    category: "Bowls & Salads",
    items: [
      { name: "Green Goddess", price: "$16", description: "Grilled chicken, spinach, arugula, romaine, cucumber, avocado, pickled red onion" },
      { name: "Lake & Leaf", price: "$25", description: "Grilled salmon, mixed greens, avocado, goat cheese, roasted grapes, maple pecan vinaigrette" },
      { name: "Sweet & Savory", price: "$16", description: "Roasted pears, sweet potatoes, ancient grains, arugula, feta, candied pecans" },
    ],
  },
  {
    category: "Entrées",
    items: [
      { name: "Braised Short Rib", price: "$22", description: "Root vegetable purée, lake roots potatoes" },
      { name: "Garden Pasta", price: "$15", description: "Spaghetti, wild mushrooms, heirloom tomatoes, spinach, asparagus, white wine reduction" },
      { name: "Lemon Chicken", price: "$15", description: "Breaded chicken, parmesan, lemon butter, spinach, lake roots potatoes" },
      { name: "Parmesan Encrusted Walleye", price: "$21", description: "Grilled asparagus, lake roots potatoes" },
      { name: "Café Steak", price: "MKT", description: "Chef's choice cut, lake roots potatoes, sautéed power veggie blend" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Coconut Cream Bread Pudding", price: "", description: "Bumbu infused whipped cream, shredded coconut, cinnamon (21+)" },
      { name: "Chocolate Chip Cookie Skillet", price: "", description: "House baked cookie, vanilla gelato, chocolate drizzle" },
      { name: "Caramel Almond Pastry", price: "", description: "Vanilla gelato, caramel drizzle" },
      { name: "Affogato Espresso", price: "", description: "Vanilla gelato" },
    ],
  },
  {
    category: "Little Roots (Kids)",
    items: [
      { name: "Strudel Sticks", price: "$7", description: "" },
      { name: "French Toast Bites", price: "$8", description: "" },
      { name: "Chicken Tenders", price: "$9", description: "" },
      { name: "Grilled Cheese", price: "$7", description: "" },
      { name: "Mini Cheese Burgers", price: "$9", description: "" },
      { name: "Mac n Cheese", price: "$6", description: "" },
    ],
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<"day" | "night">("day");
  const { ref, isVisible } = useInView();

  const menu = activeTab === "day" ? dayMenu : nightMenu;

  return (
    <section id="menu" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={ref} className="text-center mb-12">
          <p className={`text-sage-400 text-sm tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            What We Serve
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-charcoal-800 font-bold mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Our Menu
          </h2>

          {/* Toggle */}
          <div className="inline-flex rounded-full bg-charcoal-100 p-1">
            <button
              onClick={() => setActiveTab("day")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === "day" ? "bg-sage-400 text-white shadow-md" : "text-charcoal-500 hover:text-charcoal-700"}`}
            >
              ☀️ Breakfast & Lunch
            </button>
            <button
              onClick={() => setActiveTab("night")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === "night" ? "bg-charcoal-800 text-white shadow-md" : "text-charcoal-500 hover:text-charcoal-700"}`}
            >
              🌙 Dinner
            </button>
          </div>
        </div>

        <div className="space-y-12">
          {menu.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal-800 font-bold mb-6 border-b-2 border-sage-200 pb-3">
                {cat.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {cat.items.map((item) => (
                  <div key={item.name} className="group flex justify-between items-start gap-4 py-2 hover:bg-sage-50/50 px-3 rounded-lg transition-colors">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <h4 className="font-semibold text-charcoal-800 group-hover:text-sage-500 transition-colors">{item.name}</h4>
                        <span className="flex-1 border-b border-dotted border-charcoal-200 min-w-[2rem]" />
                        <span className="font-bold text-sage-500 whitespace-nowrap">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-charcoal-400 text-sm mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
