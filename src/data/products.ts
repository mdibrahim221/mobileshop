import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // Mobile Category
  {
    id: 'phone-1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'mobile',
    price: 999,
    originalPrice: 1199,
    discountPercentage: 17,
    rating: 4.9,
    reviewCount: 428,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
    specs: {
      Display: '6.7-inch Super Retina XDR OLED (120Hz)',
      Processor: 'A17 Pro chip with 6-core GPU',
      Camera: '48MP Main | 12MP Ultra Wide | 12MP 5x Telephoto',
      Battery: 'Up to 29 hours video playback',
      Storage: '256GB / 512GB / 1TB',
      Weight: '221g'
    },
    colors: [
      { name: 'Natural Titanium', hex: '#8A8682' },
      { name: 'Blue Titanium', hex: '#2A3340' },
      { name: 'White Titanium', hex: '#E2E2DF' },
      { name: 'Black Titanium', hex: '#2E2F32' }
    ],
    isNew: true,
    isFeatured: true,
    isSpecialDeal: true,
    stockStatus: 'Low Stock',
    badge: 'Limited Time Deal'
  },
  {
    id: 'phone-2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'mobile',
    price: 1149,
    originalPrice: 1299,
    discountPercentage: 12,
    rating: 4.8,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Welcome to the era of mobile AI. With Galaxy AI in your hands, unleash whole new levels of creativity, productivity and possibility.',
    specs: {
      Display: '6.8-inch Quad HD+ Dynamic AMOLED 2X',
      Processor: 'Snapdragon 8 Gen 3 for Galaxy',
      Camera: '200MP Main | 50MP 5x Zoom | 12MP Ultra-Wide',
      S_Pen: 'Built-in S Pen stylus included',
      Battery: '5,000 mAh Fast Charging'
    },
    colors: [
      { name: 'Titanium Gray', hex: '#58595B' },
      { name: 'Titanium Violet', hex: '#4B3F72' },
      { name: 'Titanium Black', hex: '#1C1C1E' }
    ],
    isNew: true,
    isFeatured: true,
    isSpecialDeal: true,
    stockStatus: 'In Stock',
    badge: 'Flagship AI'
  },
  {
    id: 'phone-3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    category: 'mobile',
    price: 799,
    originalPrice: 999,
    discountPercentage: 20,
    rating: 4.7,
    reviewCount: 254,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered by Google, the Tensor G3 chip is built with Google AI to deliver cutting-edge photo and video editing capabilities and personal assistance.',
    specs: {
      Display: '6.7-inch Super Actua LTPO OLED',
      Processor: 'Google Tensor G3 & Titan M2 security',
      Camera: '50MP Main | 48MP Ultrawide | 48MP Telephoto',
      Battery: '5050 mAh with 24+ hour battery life',
      OS: 'Pure Android 14 with 7 years OS updates'
    },
    colors: [
      { name: 'Bay Blue', hex: '#5D839E' },
      { name: 'Porcelain', hex: '#EDE8E1' },
      { name: 'Obsidian', hex: '#26282A' }
    ],
    isNew: false,
    isFeatured: true,
    stockStatus: 'In Stock',
    badge: 'Pro Camera'
  },
  {
    id: 'phone-4',
    name: 'OnePlus 12 5G',
    brand: 'OnePlus',
    category: 'mobile',
    price: 699,
    originalPrice: 799,
    discountPercentage: 12,
    rating: 4.6,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    description: 'Smooth Beyond Belief. Powered by Snapdragon 8 Gen 3 and 4th Gen Hasselblad Camera System for Mobile.',
    specs: {
      Display: '6.82-inch 2K 120Hz ProXDR Display',
      Processor: 'Snapdragon 8 Gen 3',
      Charging: '100W SUPERVOOC Fast Charging',
      Camera: '50MP Sony LYT-808 + 64MP Periscope'
    },
    colors: [
      { name: 'Flowy Emerald', hex: '#1E4D40' },
      { name: 'Silky Black', hex: '#1F2022' }
    ],
    isNew: true,
    stockStatus: 'In Stock'
  },

  // Headphones Category
  {
    id: 'audio-1',
    name: 'AirPods Max',
    brand: 'Apple',
    category: 'headphones',
    price: 499,
    originalPrice: 549,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 610,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An over-ear headphone completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates an optimal acoustic seal.',
    specs: {
      Audio_Tech: 'Apple H1 chip in each ear cup',
      Active_Noise_Cancellation: 'Pro-level ANC with Transparency mode',
      Battery: 'Up to 20 hours listening time',
      Spatial_Audio: 'Personalized Spatial Audio with dynamic head tracking'
    },
    colors: [
      { name: 'Space Gray', hex: '#3B3B3D' },
      { name: 'Silver', hex: '#E1E1E3' },
      { name: 'Sky Blue', hex: '#A1B7CB' },
      { name: 'Pink', hex: '#D6A5A8' }
    ],
    isNew: false,
    isFeatured: true,
    isSpecialDeal: true,
    stockStatus: 'In Stock',
    badge: 'Studio Audio'
  },
  {
    id: 'audio-2',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'headphones',
    price: 348,
    originalPrice: 399,
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 520,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Industry-leading noise cancellation with two processors and eight microphones for unprecedented sound purity and call quality.',
    specs: {
      Driver: '30mm precision-engineered driver unit',
      ANC: 'Auto NC Optimizer & Auto Ambient Mode',
      Battery: '30-hour battery life with quick charging (3 min = 3 hours)',
      Weight: '250g ultra-lightweight design'
    },
    colors: [
      { name: 'Silver Sand', hex: '#DEDCD8' },
      { name: 'Black', hex: '#1E1E1E' },
      { name: 'Midnight Blue', hex: '#1B2430' }
    ],
    isNew: true,
    isFeatured: true,
    stockStatus: 'In Stock',
    badge: 'Best ANC'
  },
  {
    id: 'audio-3',
    name: 'Bose QuietComfort Ultra',
    brand: 'Bose',
    category: 'headphones',
    price: 379,
    originalPrice: 429,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 290,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
    description: 'World-class noise cancellation, quieter than ever before. Breakthrough spatialized audio for more immersive listening no matter the content.',
    specs: {
      Modes: 'Quiet, Aware, and Immersion Modes',
      Battery: 'Up to 24 hours (up to 18 hrs with Immersive Audio)',
      Microphones: 'Revolutionary mic array for clear voice pickup'
    },
    colors: [
      { name: 'Black', hex: '#1C1C1C' },
      { name: 'White Smoke', hex: '#ECEBE7' }
    ],
    isNew: true,
    stockStatus: 'In Stock'
  },

  // Accessories Category
  {
    id: 'acc-1',
    name: 'Anker Prime 100W GaN Fast Charger',
    brand: 'Anker',
    category: 'accessories',
    price: 79,
    originalPrice: 99,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    description: 'Compact 3-port wall charger powered by GaNPrime technology. Simultaneously fast-charge your MacBook, iPhone, and Galaxy device.',
    specs: {
      Total_Output: '100W Max',
      Ports: '2x USB-C PowerIQ 4.0, 1x USB-A',
      Safety: 'ActiveShield 2.0 temperature monitoring',
      Size: '43% smaller than original 96W charger'
    },
    colors: [
      { name: 'Space Gray', hex: '#4A4B4D' },
      { name: 'Matte White', hex: '#FAF9F6' }
    ],
    isNew: false,
    isFeatured: true,
    isSpecialDeal: true,
    stockStatus: 'In Stock',
    badge: 'Top Seller'
  },
  {
    id: 'acc-2',
    name: 'Apple MagSafe Duo Wireless Charger',
    brand: 'Apple',
    category: 'accessories',
    price: 119,
    originalPrice: 129,
    discountPercentage: 8,
    rating: 4.6,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1622445268465-840246e90453?auto=format&fit=crop&w=800&q=80',
    description: 'Conveniently charges your compatible iPhone, Apple Watch, Wireless Charging Case for AirPods, and other Qi-certified devices.',
    specs: {
      Compatibility: 'iPhone 12 and newer, Apple Watch series',
      Portability: 'Folds together neatly to take anywhere',
      Connector: 'USB-C to Lightning cable included'
    },
    colors: [{ name: 'White', hex: '#FDFDFD' }],
    isNew: false,
    stockStatus: 'In Stock'
  },
  {
    id: 'acc-3',
    name: 'Belkin 3-in-1 MagSafe Charging Stand',
    brand: 'Belkin',
    category: 'accessories',
    price: 139,
    originalPrice: 149,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
    description: 'Rethink how you charge. This ultra-convenient solution delivers 15W fast wireless charging to your iPhone, Apple Watch, and AirPods.',
    specs: {
      Power: '15W Official MagSafe Fast Charging',
      Design: 'Architectural stainless steel construction',
      LED_Indicator: 'Shows charging status for AirPods'
    },
    colors: [
      { name: 'Charcoal Black', hex: '#212121' },
      { name: 'Pure White', hex: '#F9F9F9' }
    ],
    isNew: true,
    stockStatus: 'In Stock'
  },

  // Gadgets Category
  {
    id: 'gadget-1',
    name: 'Apple Watch Ultra 2',
    brand: 'Apple',
    category: 'gadgets',
    price: 749,
    originalPrice: 799,
    discountPercentage: 6,
    rating: 4.9,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The ultimate sports and adventure watch. Featuring the bright 3000-nit Always-On Retina display, S9 SiP, and double tap gesture.',
    specs: {
      Case: '49mm aerospace-grade titanium case',
      Display: '3000 nits peak brightness display',
      Water_Resistance: '100m water resistance, EN13319 certified',
      Battery: 'Up to 36 hours normal use (72 hrs low power)'
    },
    colors: [{ name: 'Natural Titanium', hex: '#8F8D8A' }],
    isNew: true,
    isFeatured: true,
    isSpecialDeal: true,
    stockStatus: 'In Stock',
    badge: 'Adventure Ready'
  },
  {
    id: 'gadget-2',
    name: 'DJI Mini 4 Pro Drone',
    brand: 'DJI',
    category: 'gadgets',
    price: 759,
    originalPrice: 859,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 198,
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
    description: 'Under 249g lightweight camera drone equipped with 4K/60fps HDR video capability, omnidirectional obstacle sensing, and 34 min flight time.',
    specs: {
      Weight: '< 249 g (no license required in many regions)',
      Camera: '1/1.3-inch CMOS, 48MP photos, True Vertical Shooting',
      Transmission: 'DJI O4 video transmission up to 20 km',
      Flight_Time: 'Up to 34 minutes'
    },
    colors: [{ name: 'Glacier Gray', hex: '#C2C4C6' }],
    isNew: true,
    isFeatured: true,
    stockStatus: 'Low Stock',
    badge: '4K Aerial'
  },
  {
    id: 'gadget-3',
    name: 'Steam Deck OLED 1TB',
    brand: 'Valve',
    category: 'gadgets',
    price: 649,
    originalPrice: 699,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 340,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    description: 'HDR OLED screen, longer battery life, faster Wi-Fi 6E, and improved acoustics inside the most powerful handheld gaming console.',
    specs: {
      Display: '7.4-inch 90Hz HDR OLED display',
      Storage: '1TB NVMe SSD with high-speed microSD slot',
      APU: '6nm AMD APU (4 cores Zen 2 / 8 RDNA 2 CUs)',
      Battery: '50Whr battery (3-12 hours gameplay)'
    },
    colors: [{ name: 'Matte Black', hex: '#191919' }],
    isNew: true,
    stockStatus: 'In Stock'
  }
];
