export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  images?: string[]; // Multiple images for gallery
  specs: string[];
  features?: string[]; // Detailed features list
  description?: string; // Long description
  category: 'phone' | 'accessory';
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
  reviews?: number;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: 'admin' | 'user';
  joinedDate: string;
}