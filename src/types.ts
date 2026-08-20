export type CategoryType = 'mobile' | 'accessories' | 'gadgets' | 'headphones';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: CategoryType;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery?: string[];
  description: string;
  specs: Record<string, string>;
  colors?: { name: string; hex: string }[];
  isNew?: boolean;
  isFeatured?: boolean;
  isSpecialDeal?: boolean;
  stockStatus: 'In Stock' | 'Low Stock' | 'Pre-order';
  badge?: string;
}

export interface CategoryCard {
  id: CategoryType | 'new_arrivals' | 'trending';
  name: string;
  description: string;
  productCount: number;
  image: string;
  tag?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  image: string;
}

export type ActiveTab = 'home' | 'products' | 'blog' | 'about' | 'contact';
