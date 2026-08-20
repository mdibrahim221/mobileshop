import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Titanium Revolution: How Flagship Phone Materials Evolved in 2026',
    excerpt: 'Explore how aerospace-grade titanium alloys transformed mobile durability, ergonomics, and heat dissipation across Apple, Samsung, and top mobile brands.',
    content: `
      In recent years, smartphone manufacturers have steadily moved away from traditional aluminum and stainless steel towards aerospace-grade titanium alloys. 

      ### Why Titanium Matters
      1. **Superior Strength-to-Weight Ratio**: Titanium allows devices like the iPhone 15 Pro Max and Galaxy S24 Ultra to feel noticeably lighter in hand while enduring higher impact thresholds.
      2. **Refined Tactile Finish**: Brushed titanium provides a matte finish that resists fingerprint smudges and retains a warm, premium feel.
      3. **Thermal Efficiency**: Combined with internal vapor chambers, titanium chassis dissipate heat quickly during high-frame-rate mobile gaming and 4K ProRes recording.

      As manufacturing techniques improve, expect titanium elements to expand into mid-tier smartphones and wireless earbuds later this year.
    `,
    category: 'Tech Trends',
    author: {
      name: 'Alexander Wright',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Senior Hardware Analyst'
    },
    date: 'July 24, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-2',
    title: 'Active Noise Cancellation vs Spatial Audio: Buying the Right Headphones',
    excerpt: 'Demystifying audiophile jargon: How Sony WH-1000XM5, AirPods Max, and Bose QC Ultra compare for daily travel, office focus, and high-fidelity sound.',
    content: `
      Choosing between top-tier wireless headphones often comes down to your primary environment: commuting, desk work, or intense travel.

      ### Key Features Compared
      - **ANC (Active Noise Cancellation)**: Sony's V1 processor and Bose's CustomTune technology isolate low-frequency jet engine hums and ambient office chatter.
      - **Spatial Audio**: Dynamic head-tracking on AirPods Max creates an acoustic stage that keeps sound fixed in 3D space relative to your screen.
      - **GaN Fast Charging**: Modern wireless headphones now support 3-minute emergency charges yielding over 3 hours of playback time.
    `,
    category: 'Buying Guides',
    author: {
      name: 'Sophia Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Audio Engineer'
    },
    date: 'July 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-3',
    title: 'GaN Charging Demystified: Why 100W Power Adapters are Shrinking',
    excerpt: 'Gallium Nitride (GaN) semiconductor technology is replacing silicon in power chargers, allowing 100W multi-port adapters to fit inside your coat pocket.',
    content: `
      If you are still carrying separate power bricks for your laptop, tablet, and smartphone, GaN power technology is about to change your travel kit forever.

      Gallium Nitride transfers energy far more efficiently than standard silicon, generating significantly less heat. This efficiency allows components to be placed much closer together without thermal throttling.
    `,
    category: 'Product Reviews',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      role: 'Gadget Reviewer'
    },
    date: 'July 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
  }
];
