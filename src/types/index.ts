// Auth & Users
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin' | 'staff';
  createdAt: Date;
}

// Menu System
export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  displayOrder: number;
  icon?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  ingredients?: string[];
  spiceLevel?: 0 | 1 | 2 | 3;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free')[];
  isPopular?: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  isAvailable?: boolean;
  createdAt: Date;
}

// Pizza Customization
export interface PizzaSize {
  id: string;
  name: string;
  priceModifier: number;
  inches: number;
}

export interface PizzaCrust {
  id: string;
  name: string;
  description: string;
  priceModifier: number;
}

export interface PizzaSauce {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface PizzaCheese {
  id: string;
  name: string;
  description: string;
  priceModifier: number;
}

export interface PizzaTopping {
  id: string;
  name: string;
  category: string;
  price: number;
  isVegetarian: boolean;
}

export interface PizzaCreation {
  id: string;
  userId?: string;
  name: string;
  size: string;
  crust: string;
  sauce: string;
  cheese: string;
  toppings: string[];
  price: number;
  createdAt: Date;
}

// Tables
export interface TableFeature {
  id: string;
  name: string;
  icon?: string;
}

export interface Table {
  id: string;
  number: string;
  capacity: number;
  section: string;
  shape: 'round' | 'rectangular' | 'square';
  position: { x: number; y: number };
  features: string[];
  isAvailable: boolean;
  isActive: boolean;
  createdAt: Date;
}

// Reservations
export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no-show';
export type ReservationExperience = 'family' | 'friends' | 'cozy' | 'celebration' | 'photo-spot';

export interface Reservation {
  id: string;
  userId: string;
  tableId: string;
  date: Date;
  time: string;
  guests: number;
  experience: ReservationExperience;
  specialMessage?: string;
  specialRequest?: string;
  status: ReservationStatus;
  confirmationCode: string;
  createdAt: Date;
  updatedAt: Date;
}

// Offers
export interface Offer {
  id: string;
  title: string;
  description: string;
  image?: string;
  startDate: Date;
  endDate: Date;
  terms: string;
  status: 'active' | 'upcoming' | 'expired';
  displayOrder: number;
  createdAt: Date;
}

// Gallery
export type GalleryCategory = 'food' | 'restaurant' | 'events' | 'celebrations' | 'moments';

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  category: GalleryCategory;
  displayOrder: number;
  createdAt: Date;
}

// Reviews
export type ReviewStatus = 'pending' | 'approved' | 'rejected' | 'hidden' | 'featured';

export interface Review {
  id: string;
  userId: string;
  name: string;
  email: string;
  rating: number;
  title: string;
  comment: string;
  status: ReviewStatus;
  createdAt: Date;
}

// External Ordering
export interface ExternalOrderingPlatform {
  id: string;
  name: string;
  logo?: string;
  url: string;
  description: string;
  isActive: boolean;
  displayOrder: number;
}

// Site Settings
export interface SiteSettings {
  id: string;
  restaurantName: string;
  restaurantDescription: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    [key: string]: { open: string; close: string } | null;
  };
  reservationDuration: number; // in minutes
  bookingLimitPerSlot: number;
  timezone: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  updatedAt: Date;
}

// Analytics
export interface AnalyticsEvent {
  id: string;
  eventType: 'menu_view' | 'menu_item_view' | 'reservation_started' | 'reservation_completed' | 'external_order_click' | 'offer_view';
  userId?: string;
  data: Record<string, any>;
  timestamp: Date;
}
