import { MenuItem, Branch, Post } from '../types';

export const FOODPANDA_STORE_URL = 'https://www.foodpanda.ph/restaurant/l95v/luna-coffee-the-triangle';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'spanish-latte',
    name: 'Spanish Latte',
    subtitle: 'Best-Seller · Customer Favorite',
    category: 'signature',
    price: '₱175',
    rating: 5.0,
    description: 'Our signature Spanish espresso with rich condensed milk swirl, perfectly balanced creaminess, and available with Oatside oat milk upon request.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125178236/5c1332bf-9b08-47a1-94d6-f21c24156647.jpg',
    badge: '★ #1 Most Ordered',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Condensed Milk', 'Double Shot', 'Creamy Velvet']
  },
  {
    id: 'matcha',
    name: 'Ceremonial Matcha',
    subtitle: 'Creamy Uji Green Tea',
    category: 'signature',
    price: '₱165',
    rating: 4.9,
    description: 'Whisked premium stone-ground ceremonial matcha blended with silky milk (best recommended with oat milk for that rich creamy umami finish).',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/8048ff63-b87d-4287-99df-120071b1b432.jpg',
    badge: 'Top Rated',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Uji Matcha', 'Oatside Blend', 'Velvety Sweet']
  },
  {
    id: 'caramel-macc',
    name: 'Caramel Macchiato',
    subtitle: 'Layered Vanilla & Caramel Drizzle',
    category: 'espresso',
    price: '₱175',
    rating: 4.9,
    description: 'Steamed milk stained with bold espresso shots, kissed with Madagascar vanilla syrup and topped with buttery golden caramel crosshatch.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125177594/4ec9bbd3-dded-4477-842f-46b8db8cb808.jpg',
    badge: 'Crowd Pleaser',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Salted Caramel', 'Fresh Espresso', 'Layered Foam']
  },
  {
    id: 'iced-cream-latte',
    name: 'Iced Cream Latte',
    subtitle: 'Espresso & Vanilla Bean Ice Cream',
    category: 'signature',
    price: '₱195',
    rating: 5.0,
    description: 'Double espresso poured over a handcrafted scoop of rich vanilla bean gelato melted into chilled Oatside milk. Pure dessert coffee heaven.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125177602/03a86180-dbdb-417b-9c09-8a1ae1f8f294.jpg',
    badge: 'Decadent Indulgence',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Vanilla Gelato', 'Chilled Oatside', 'Espresso Affogato']
  },
  {
    id: 'dark-moon',
    name: 'Dark Moon',
    subtitle: 'Signature Obsidian Dark Cocoa Roast',
    category: 'signature',
    price: '₱155',
    rating: 4.9,
    description: 'Luna Coffee exclusive creation: deep dutch dark cacao combined with our bold dark roast extraction for a brooding, chocolate-forward delight.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/a3ec566a-b15b-42db-b5c3-67ccf3fe0fab.jpg',
    badge: 'House Signature',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Dark Dutch Cocoa', 'Obsidian Roast', 'Bittersweet Ganache']
  },
  {
    id: 'malaya',
    name: 'Malaya',
    subtitle: 'House Specialty White Coffee',
    category: 'signature',
    price: '₱165',
    rating: 4.8,
    description: 'An aromatic signature blend harmonizing smooth specialty espresso with sweet condensed milk notes and a whisper of roasted hazelnut.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125174202/207432b8-7fba-41bf-a37a-2e043b9a53e6.jpg',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Roasted Nut', 'Aromatic Crema', 'Sweet Milk']
  },
  {
    id: 'dark-malaya',
    name: 'Dark Malaya',
    subtitle: 'Intense Double-Shot Malaya',
    category: 'espresso',
    price: '₱190',
    rating: 4.9,
    description: 'An extra punch of bold caffeine intensity. For mornings that demand maximum clarity and deep roasted flavor.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125178334/1c46e2dc-baf1-4716-8fad-7da6ee9fab55.jpg',
    badge: 'High Caffeine',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Intense Ristretto', 'Deep Roast', 'Low Acidity']
  },
  {
    id: 'americano',
    name: 'Americano',
    subtitle: 'Classic Pure Black Extraction',
    category: 'espresso',
    price: '₱140',
    rating: 4.8,
    description: 'Two shots of freshly extracted specialty espresso over hot or iced filtered water. Pure unadulterated coffee character with nutty crema.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125178293/07fafe63-4798-4ec4-9114-fa824e89ca38.jpg',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Clean Finish', 'Floral Hints', 'Silky Crema']
  },
  {
    id: 'latte',
    name: 'Caffè Latte',
    subtitle: 'Smooth Textured Microfoam',
    category: 'espresso',
    price: '₱150',
    rating: 4.9,
    description: 'Silky microfoam milk gently poured through a rich double shot of espresso. Balanced, smooth, and endlessly comforting.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125178257/907507b1-8d14-41c7-964a-57f2ad4511f5.jpg',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Steamed Milk', 'Balanced Sweetness', 'Latte Art']
  },
  {
    id: 'tadhana',
    name: 'Tadhana',
    subtitle: 'Secret Recipe House Special',
    category: 'signature',
    price: '₱185',
    rating: 5.0,
    description: 'A destiny in a cup. Layered flavors of toasted caramel, secret spice reduction, and chilled velvet espresso cream.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125177279/dd0a5cd2-6bf3-4052-9b48-adc3f30f4e36.jpg',
    badge: 'Secret Recipe',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Toasted Caramel', 'Velvet Cream', 'Specialty Reserve']
  },
  {
    id: 'croffle',
    name: 'Artisan Croffle',
    subtitle: 'Flaky Croissant Pressed into Crisp Waffle',
    category: 'pastries',
    price: '₱140',
    rating: 4.9,
    description: 'Imported French all-butter croissant proofed, pressed in cast-iron waffle griddles until golden caramelized and crisp outside, tender inside.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/486f58cf-3742-4240-896a-656ae62c99bb.jpg',
    badge: 'Fresh Daily',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Cultured Butter', 'Laminated Layers', 'Caramelized Sugar']
  },
  {
    id: 'waffles',
    name: 'Belgian Liege Waffle',
    subtitle: 'Pearl Sugar Golden Crunch',
    category: 'pastries',
    price: '₱120',
    rating: 4.9,
    description: 'Traditional Belgian Liege brioche dough with caramelized imported pearl sugar clusters that crunch with every bite.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/8f1f0155-3be1-444a-a279-35985e82dd0c.jpg',
    badge: 'Classic Favorite',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Pearl Sugar', 'Brioche Dough', 'Warm Caramel']
  },
  {
    id: 'cheesecake',
    name: 'Basque Burnt Cheesecake',
    subtitle: 'Caramelized Custard Center',
    category: 'pastries',
    price: '₱245',
    rating: 5.0,
    description: 'Scorched deeply on top for bitter-caramel notes, revealing an impossibly rich and molten creamy center.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/4ed762c2-8143-4c6f-87e1-00defa24a230.jpg',
    badge: 'Chef Choice',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Molten Center', 'Burnt Caramel', 'Cream Cheese']
  },
  {
    id: 'java-chip-frappe',
    name: 'Java Chip Frappe',
    subtitle: 'Blended Espresso & Dark Chocolate Crunch',
    category: 'frappe',
    price: '₱220',
    rating: 4.9,
    description: 'Rich dark chocolate chips blitzed into ice-cold espresso and fresh cream, crowned with whipped mountain and mocha drizzle.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125201896/0d7c4795-e856-4868-964a-575bb58e2622.jpg',
    badge: 'Popular Frappe',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Dark Choc Chips', 'Espresso Blend', 'Whipped Cream']
  },
  {
    id: 'matcha-frappe',
    name: 'Matcha Frappe',
    subtitle: 'Blended Ceremonial Green Tea Cream',
    category: 'frappe',
    price: '₱200',
    rating: 4.9,
    description: 'Frosty blended ceremonial matcha with velvety sweet cream, creating an irresistible Japanese summer refresher.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/4782cb11-92a1-43f6-9394-8d88ecd22b94.jpg',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Uji Matcha', 'Ice-Blended', 'Velvet Foam']
  },
  {
    id: 'affogato-frappe',
    name: 'Affogato Frappe',
    subtitle: 'Vanilla Cream with Hot Espresso Pour',
    category: 'frappe',
    price: '₱235',
    rating: 5.0,
    description: 'Frozen sweet cream base kissed with a steaming hot double shot of freshly extracted espresso right before serving.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125181447/1f1fd929-1001-4a9b-a05a-c6073d8d1ce4.jpg',
    badge: 'Barista Special',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Hot-Cold Contrast', 'Gelato Base', 'Fresh Crema']
  },
  {
    id: 'caramel-macc-frappe',
    name: 'Caramel Macchiato Frappe',
    subtitle: 'Frosty Caramel & Espresso Swirl',
    category: 'frappe',
    price: '₱215',
    rating: 4.8,
    description: 'Smooth blended coffee with golden caramel ribboning throughout the cup and whipped cream crown.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125201755/54a79a12-f8f5-4402-96b1-4eee751fac5d.jpg',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Caramel Ribbon', 'Frappe Roast', 'Sweet Swirl']
  },
  {
    id: 'pink-drink',
    name: 'Pink Drink Refresher',
    subtitle: 'Dragonfruit & Cream Sparkler',
    category: 'signature',
    price: '₱170',
    rating: 4.9,
    description: 'Vibrant tropical dragonfruit and berry refresher with coconut milk swirl. Refreshing, fruity, and visually stunning.',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/5e90be8a-b345-4f50-9924-c49ee58923fe.jpg',
    foodpandaUrl: FOODPANDA_STORE_URL,
    notes: ['Dragonfruit', 'Coconut Silk', 'Berry Bright']
  }
];

export const POSTS: Post[] = [
  {
    id: 'starlight-acoustic-sessions',
    title: 'Starlight Acoustic Sessions at The Triangle',
    excerpt: 'Join us every Friday evening for live lo-fi and indie acoustic sets on the open terrazzo patio. Enjoy specialty pour-overs under the Capiz night sky.',
    category: 'Event',
    date: 'Sep 18, 2026',
    readTime: '3 min read',
    tag: 'Live Gathering',
    image: 'https://images.deliveryhero.io/image/fd-ph/LH/l95v-hero.jpg',
    featured: true,
    linkText: 'Reserve Patio Table',
    actionUrl: '#locations',
    author: {
      name: 'Marco Luna',
      role: 'Head of Experience'
    }
  },
  {
    id: 'spanish-latte-croffle-pairing',
    title: 'Midweek Ritual: Spanish Latte and Hot Croffle Combo',
    excerpt: 'Enjoy 15% off our signature Spanish Latte paired with a freshly pressed French all-butter Liege Croffle every Tuesday and Wednesday afternoon.',
    category: 'Promo',
    date: 'Sep 15, 2026',
    readTime: '2 min read',
    tag: 'Limited Special',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/486f58cf-3742-4240-896a-656ae62c99bb.jpg',
    linkText: 'Claim on foodpanda',
    actionUrl: FOODPANDA_STORE_URL,
    author: {
      name: 'Chef Danielle',
      role: 'Bakery Lead'
    }
  },
  {
    id: 'monsoon-harvest-single-origin',
    title: 'New Harvest Arrival: Benguet Atok Typica Micro-Lot',
    excerpt: 'Our roastery received 60kg of parchment coffee from Benguet highlands. Expect tasting notes of wild honey, dried apricot, and dark chocolate crema.',
    category: 'Announcement',
    date: 'Sep 10, 2026',
    readTime: '4 min read',
    tag: 'Roastery Update',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125174202/207432b8-7fba-41bf-a37a-2e043b9a53e6.jpg',
    linkText: 'Explore Coffee Profile',
    actionUrl: '#craft',
    author: {
      name: 'Ramon S.',
      role: 'Lead Roaster'
    }
  },
  {
    id: 'brewing-the-perfect-v60-at-home',
    title: 'Barista Secrets: Dialing In Your V60 at Home',
    excerpt: 'A practical four-step brew recipe using 15g coffee to 240g water at 93°C for bright acidity and lingering sweetness in your morning brew.',
    category: 'Brew Guide',
    date: 'Sep 02, 2026',
    readTime: '5 min read',
    tag: 'Masterclass',
    image: 'https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/l95v/product/125178293/07fafe63-4798-4ec4-9114-fa824e89ca38.jpg',
    linkText: 'Read Brew Recipe',
    actionUrl: '#craft',
    author: {
      name: 'Erika V.',
      role: 'Senior Barista'
    }
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'the-triangle',
    name: 'Luna Coffee - The Triangle',
    designation: 'Flagship Hub and Terrace',
    tagline: 'Arnaldo Boulevard, Roxas City - Active Foodpanda Partner',
    address: 'The Triangle, Arnaldo Boulevard, Roxas City, Capiz 5800',
    coords: '11.5978° N, 122.7477° E',
    hours: '08:00 AM - 11:30 PM (Mon-Thu) | 08:00 AM - 12:00 MN (Fri-Sun)',
    phone: '+63 917 123 5862',
    status: 'Open Now',
    foodpandaUrl: FOODPANDA_STORE_URL,
    features: [
      'Foodpanda Superfast Delivery and Store Pickup Available',
      'Oatside Certified Oatmilk Specialty Bar',
      'Hot-Pressed Fresh Croffles and Basque Cheesecake Daily',
      'Outdoor Starlight Terrazzo Patio Dining'
    ],
    image: 'https://images.deliveryhero.io/image/fd-ph/LH/l95v-hero.jpg',
    vibeDescription: 'Our flagship sanctuary at The Triangle on Arnaldo Boulevard. Designed with warm timber, glowing brass accents, and acoustic warmth for both work and gatherings.'
  },
  {
    id: 'rizal-st',
    name: 'Luna Coffee - Rizal Street',
    designation: 'Original Espresso Bar',
    tagline: 'Downtown Historic District - Slow Brews and Vinyl',
    address: '108 Rizal Street, Downtown District, Roxas City',
    coords: '11.5845° N, 122.7512° E',
    hours: '07:30 AM - 10:30 PM Daily',
    phone: '+63 (036) 621-LUNA',
    status: 'Open Now',
    foodpandaUrl: FOODPANDA_STORE_URL,
    features: [
      'Dual V60 Single-Origin Slow Bar',
      'Curated Lo-Fi and Vinyl Listening Lounge',
      'Takeout and Direct Foodpanda Courier Counter',
      'Sub-Zero Nitrogen Draft Station'
    ],
    image: 'https://images.deliveryhero.io/image/fd-ph/LH/l95v-listing.jpg',
    vibeDescription: 'The original espresso laboratory with polished concrete surfaces, warm amber pendant lamps, and an intimate specialty coffee bar experience.'
  }
];

export const REVIEWS = [
  {
    author: 'Clydel',
    rating: 5,
    date: 'Foodpanda Verified Order',
    text: 'Excellent! Spanish latte is super rich and the croffles arrive crispy and warm every single time.'
  },
  {
    author: 'Manuel',
    rating: 5,
    date: 'Foodpanda Verified Order',
    text: 'Best Spanish Oat in Capiz! Solid wake up drink with real specialty beans and zero bitterness.'
  },
  {
    author: 'Trisha',
    rating: 5,
    date: 'Foodpanda Verified Order',
    text: 'Super sarap yung matcha nila with oatmilk! Has an authentic matcha taste with a splash of creaminess. In love with their frappes!'
  },
  {
    author: 'Gillian',
    rating: 5,
    date: 'Foodpanda Verified Order',
    text: 'The liege waffles and Basque cheesecake are top tier! Perfect pairing with cold brew.'
  }
];
