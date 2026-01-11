import { Product, Testimonial } from './types';

export const SHOP_INFO = {
  name: "Smart Mobile Store",
  tagline: "Latest Smartphones & Best Deals in Town",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // Format for API
  address: "Shop No. 12, Main Market Road, City Center, Mumbai, India",
  email: "contact@smartmobile.store",
  hours: "10:00 AM - 09:00 PM (Daily)"
};

export const PHONES: Product[] = [
  {
    id: 'p1',
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "₹1,59,900",
    originalPrice: "₹1,69,900",
    // Reliable iPhone Titanium Image
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800"
    ],
    specs: ["256GB Storage", "8GB RAM", "A17 Pro Chip", "Titanium Design"],
    features: [
      "Forged in Titanium: Stronger, lighter, and more premium.",
      "A17 Pro Chip: The fastest chip ever in a smartphone.",
      "48MP Main Camera: Next-generation portraits with Focus and Depth Control.",
      "USB-C Support: Connect universally."
    ],
    description: "The iPhone 15 Pro Max is the first iPhone to feature an aerospace-grade titanium design, using the same alloy that spacecraft use for missions to Mars. It features the A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.",
    category: 'phone',
    isNew: true,
    rating: 4.9,
    reviews: 1240
  },
  {
    id: 'p2',
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: "₹1,29,999",
    originalPrice: "₹1,34,999",
    // Samsung S-Series Style
    image: "https://images.unsplash.com/photo-1610945265078-d86fbc17130e?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1610945265078-d86fbc17130e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800"
    ],
    specs: ["512GB Storage", "12GB RAM", "Snapdragon 8 Gen 3", "Galaxy AI"],
    features: [
      "Galaxy AI is here: Circle to Search, Live Translate, and more.",
      "Titanium Frame: Durable and premium feel.",
      "200MP Wide Camera: Capture details that defy reality.",
      "Built-in S Pen: Write, tap, and navigate with precision."
    ],
    description: "Meet the Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 6.8-inch flat display. It's an absolute marvel of AI, powered by the Snapdragon 8 Gen 3 Mobile Platform for Galaxy.",
    category: 'phone',
    isBestSeller: true,
    rating: 4.8,
    reviews: 856
  },
  {
    id: 'p3',
    name: "OnePlus 12",
    brand: "OnePlus",
    price: "₹64,999",
    originalPrice: "₹69,999",
    // OnePlus Style
    image: "https://images.unsplash.com/photo-1662444109670-4293f0b24088?auto=format&fit=crop&q=80&w=800",
    specs: ["256GB Storage", "12GB RAM", "Snapdragon 8 Gen 3", "Hasselblad Camera"],
    features: [
      "Snapdragon 8 Gen 3: Peak performance.",
      "4th Gen Hasselblad Camera System for Mobile.",
      "5400 mAh Battery with 100W SUPERVOOC charging.",
      "2K 120Hz ProXDR Display."
    ],
    description: "Smooth Beyond Belief. The OnePlus 12 delivers an ultra-fast and smooth experience with the latest Snapdragon processor and a massive battery that lasts all day.",
    category: 'phone',
    rating: 4.7,
    reviews: 543
  },
  {
    id: 'p4',
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: "₹1,06,999",
    originalPrice: "₹1,13,999",
    // Pixel Visor Style
    image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?auto=format&fit=crop&q=80&w=800",
    specs: ["256GB Storage", "12GB RAM", "Tensor G3", "Best AI Camera"],
    features: [
      "Google Tensor G3: The most powerful Pixel chip yet.",
      "Fully upgraded cameras and never-before-seen editing.",
      "Temperature sensor: Check the temp of objects.",
      "7 years of OS, security, and Feature Drop updates."
    ],
    description: "The pro-level phone from Google. It features the new Google Tensor G3 chip, fully upgraded cameras, and Google AI to help you do more, even faster.",
    category: 'phone',
    isNew: true,
    rating: 4.6,
    reviews: 320
  },
  {
    id: 'p5',
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: "₹36,999",
    originalPrice: "₹44,999",
    // Nothing Phone Style
    image: "https://images.unsplash.com/photo-1688582239474-06199a071531?auto=format&fit=crop&q=80&w=800",
    specs: ["Glyph Interface", "12GB RAM", "Snapdragon 8+", "Transparent Back"],
    features: [
      "New Glyph Interface: Assign different light sequences.",
      "Snapdragon 8+ Gen 1 chipset.",
      "Nothing OS 2.0: A new visual identity.",
      "50 MP dual rear camera."
    ],
    description: "Come to the bright side. Phone (2) features the new Glyph Interface, enabling you to assign different light and sound sequences for each contact and notification type.",
    category: 'phone',
    rating: 4.5,
    reviews: 210
  },
  {
    id: 'p6',
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: "₹99,999",
    originalPrice: "₹1,05,999",
    // Large Camera / Premium Android
    image: "https://images.unsplash.com/photo-1592911242378-0051d95362df?auto=format&fit=crop&q=80&w=800",
    specs: ["Leica Quad Cam", "16GB RAM", "Snapdragon 8 Gen 3", "WQHD+ Display"],
    features: [
      "Leica Summilux optical lens.",
      "Snapdragon 8 Gen 3 Mobile Platform.",
      "WQHD+ dynamic 1-120Hz AMOLED.",
      "90W HyperCharge."
    ],
    description: "A legend in hand. The Xiaomi 14 Ultra features a professional Leica quad-camera system and a liquid display for an immersive viewing experience.",
    category: 'phone',
    isNew: true,
    rating: 4.7,
    reviews: 150
  }
];

export const ACCESSORIES: Product[] = [
  {
    id: 'a1',
    name: "MagSafe Charger",
    brand: "Apple",
    price: "₹4,500",
    image: "https://images.unsplash.com/photo-1616408221896-0cb723908871?auto=format&fit=crop&q=80&w=800",
    specs: ["15W Charging", "Magnetic Alignment", "USB-C"],
    description: "The MagSafe Charger makes wireless charging a snap. The perfectly aligned magnets attach to your iPhone 12 or later.",
    category: 'accessory',
    rating: 4.8,
    reviews: 450
  },
  {
    id: 'a2',
    name: "Galaxy Buds 2 Pro",
    brand: "Samsung",
    price: "₹12,499",
    originalPrice: "₹17,999",
    image: "https://images.unsplash.com/photo-1610425838089-a5e2f38d3806?auto=format&fit=crop&q=80&w=800",
    specs: ["Hi-Fi Sound", "ANC", "24-bit Audio"],
    description: "24-bit Hi-Fi audio for quality listening. ANC with 3 high SNR microphones eliminates more exterior noise.",
    category: 'accessory',
    isBestSeller: true,
    rating: 4.6,
    reviews: 300
  },
  {
    id: 'a3',
    name: "Rugged Armor Case",
    brand: "Spigen",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1587855049254-351f415c1473?auto=format&fit=crop&q=80&w=800",
    specs: ["Drop Protection", "Carbon Fiber Texture", "Air Cushion"],
    description: "Rugged Armor® packs style with embodied protection. A signature matte black look with carbon fiber and gloss detailing.",
    category: 'accessory',
    rating: 4.5,
    reviews: 800
  },
  {
    id: 'a4',
    name: "20000mAh Power Bank",
    brand: "Mi",
    price: "₹2,199",
    image: "https://images.unsplash.com/photo-1662235941913-c90a1e3605c0?auto=format&fit=crop&q=80&w=800",
    specs: ["50W Charging", "Triple Output", "Two-way Fast Charge"],
    description: "High capacity 20000mAh power bank. Charges laptops, tablets, and phones with ease.",
    category: 'accessory',
    rating: 4.4,
    reviews: 650
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Rahul Sharma", text: "Best price in the market. I bought my iPhone 15 from here. Highly recommended!", rating: 5 },
  { id: 2, name: "Priya Patel", text: "Very helpful staff. They transferred all my data to the new phone patiently.", rating: 5 },
  { id: 3, name: "Amit Kumar", text: "Got a great exchange value for my old Samsung phone.", rating: 4 },
];