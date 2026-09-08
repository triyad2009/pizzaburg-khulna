// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Mock data - This will be replaced with real API calls
export const mockMenuItems = [
  {
    id: '1',
    name: 'BBQ Meat Machine',
    description: 'Loaded with grilled chicken, beef, and bacon with smoky BBQ sauce',
    price: 450,
    category: 'pizza',
    image: '/images/bbq-meat.jpg',
    isPopular: true,
    isFeatured: true,
    spiceLevel: 2,
  },
  {
    id: '2',
    name: 'Kebab Cocktail',
    description: 'Marinated kebab pieces with onions and special spices',
    price: 420,
    category: 'pizza',
    image: '/images/kebab-cocktail.jpg',
    isFeatured: true,
    spiceLevel: 3,
  },
  {
    id: '3',
    name: 'Sausage Carnival',
    description: 'Multiple types of sausages with cheese and fresh peppers',
    price: 400,
    category: 'pizza',
    image: '/images/sausage-carnival.jpg',
    isPopular: true,
    spiceLevel: 1,
  },
  {
    id: '4',
    name: 'Four Flavour',
    description: 'Four different flavors in one pizza - chicken, beef, sausage, and pepperoni',
    price: 480,
    category: 'pizza',
    image: '/images/four-flavour.jpg',
    isFeatured: true,
    spiceLevel: 2,
  },
  {
    id: '5',
    name: 'The Everything',
    description: 'All your favorites - meat lovers dream pizza',
    price: 520,
    category: 'pizza',
    image: '/images/everything.jpg',
    isPopular: true,
    spiceLevel: 2,
  },
];

export const mockTables = [
  { id: '1', number: 'T01', capacity: 2, section: 'Window', shape: 'round', position: { x: 10, y: 10 }, features: ['window', 'photo'], isAvailable: true, isActive: true },
  { id: '2', number: 'T02', capacity: 4, section: 'Center', shape: 'rectangular', position: { x: 30, y: 30 }, features: ['cozy'], isAvailable: true, isActive: true },
  { id: '3', number: 'T03', capacity: 6, section: 'Group', shape: 'rectangular', position: { x: 60, y: 20 }, features: ['group', 'family'], isAvailable: false, isActive: true },
  { id: '4', number: 'T04', capacity: 4, section: 'Center', shape: 'square', position: { x: 45, y: 50 }, features: ['quiet'], isAvailable: true, isActive: true },
  { id: '5', number: 'T05', capacity: 2, section: 'Bar', shape: 'round', position: { x: 80, y: 40 }, features: ['photo', 'cozy'], isAvailable: true, isActive: true },
];
