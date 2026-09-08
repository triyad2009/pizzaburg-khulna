// Brand Colors
export const COLORS = {
  primary: '#D62500',    // PizzaBurg Red
  secondary: '#001F3F',  // Navy
  accent: '#FFB81C',     // Yellow
  cream: '#F5F1E8',      // Cream/Off-white
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
};

// Pizza Sizes (Default)
export const DEFAULT_PIZZA_SIZES = [
  { id: 'small', name: 'Small', inches: 8, priceModifier: 0 },
  { id: 'medium', name: 'Medium', inches: 12, priceModifier: 2 },
  { id: 'large', name: 'Large', inches: 14, priceModifier: 4 },
  { id: 'xlarge', name: 'X-Large', inches: 16, priceModifier: 6 },
];

// Pizza Crusts (Default)
export const DEFAULT_PIZZA_CRUSTS = [
  { id: 'thin', name: 'Thin Crust', description: 'Crispy and thin', priceModifier: 0 },
  { id: 'regular', name: 'Regular Crust', description: 'Classic & balanced', priceModifier: 0 },
  { id: 'thick', name: 'Thick Crust', description: 'Fluffy & hearty', priceModifier: 1 },
  { id: 'stuffed', name: 'Stuffed Crust', description: 'Cheese-filled edges', priceModifier: 2 },
];

// Pizza Sauces (Default)
export const DEFAULT_PIZZA_SAUCES = [
  { id: 'tomato', name: 'Tomato', description: 'Classic tomato base', color: '#E74C3C' },
  { id: 'white', name: 'White Garlic', description: 'Creamy white sauce', color: '#FFFFFF' },
  { id: 'bbq', name: 'BBQ', description: 'Smoky BBQ flavor', color: '#8B4513' },
  { id: 'pesto', name: 'Pesto', description: 'Fresh basil pesto', color: '#2ECC71' },
];

// Pizza Cheeses (Default)
export const DEFAULT_PIZZA_CHEESES = [
  { id: 'mozzarella', name: 'Mozzarella', description: 'Classic mozzarella', priceModifier: 0 },
  { id: 'extra', name: 'Extra Cheese', description: 'Double the cheese', priceModifier: 1.5 },
  { id: 'mixed', name: 'Mixed Cheese', description: 'Mozzarella + Cheddar', priceModifier: 1 },
  { id: 'no-cheese', name: 'No Cheese', description: 'Cheese-free option', priceModifier: -1 },
];

// Table Features
export const TABLE_FEATURES = [
  { id: 'window', name: 'Window Side', icon: '🪟' },
  { id: 'photo', name: 'Photo Friendly', icon: '📸' },
  { id: 'cozy', name: 'Cozy', icon: '🕯️' },
  { id: 'group', name: 'Group Friendly', icon: '👥' },
  { id: 'family', name: 'Family Friendly', icon: '👨‍👩‍👧‍👦' },
  { id: 'quiet', name: 'Quiet', icon: '🤫' },
];

// Reservation Experiences
export const RESERVATION_EXPERIENCES = [
  { id: 'family', name: 'Family', icon: '👨‍👩‍👧‍👦', description: 'Perfect for family gatherings' },
  { id: 'friends', name: 'Friends', icon: '👫', description: 'Great for friend groups' },
  { id: 'cozy', name: 'Cozy', icon: '🕯️', description: 'Intimate & romantic' },
  { id: 'celebration', name: 'Celebration', icon: '🎉', description: 'Special occasions' },
  { id: 'photo-spot', name: 'Photo Spot', icon: '📸', description: 'Instagram-worthy location' },
];

// Gallery Categories
export const GALLERY_CATEGORIES = [
  { id: 'food', name: 'Food', icon: '🍕' },
  { id: 'restaurant', name: 'Restaurant', icon: '🏪' },
  { id: 'events', name: 'Events', icon: '🎉' },
  { id: 'celebrations', name: 'Celebrations', icon: '🎊' },
  { id: 'moments', name: 'Moments', icon: '📸' },
];

// Opening Hours Default
export const DEFAULT_OPENING_HOURS = {
  monday: { open: '11:00', close: '22:00' },
  tuesday: { open: '11:00', close: '22:00' },
  wednesday: { open: '11:00', close: '22:00' },
  thursday: { open: '11:00', close: '22:00' },
  friday: { open: '11:00', close: '23:00' },
  saturday: { open: '11:00', close: '23:00' },
  sunday: { open: '12:00', close: '22:00' },
};

// Reservation Settings
export const RESERVATION_SETTINGS = {
  durationMinutes: 90,
  maxGuestsPerTable: 8,
  minGuestsPerTable: 1,
  bookingLimitPerSlot: 5,
  advanceBookingDays: 30,
  minBookingHoursAdvance: 1,
};

// Timezone
export const TIMEZONE = 'Asia/Dhaka';
