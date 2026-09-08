import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number, currency: string = 'BDT'): string {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: Date | string, format: string = 'MMM dd, yyyy'): string {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {};
  
  if (format.includes('MMM')) {
    options.month = 'short';
  }
  if (format.includes('dd')) {
    options.day = '2-digit';
  }
  if (format.includes('yyyy')) {
    options.year = 'numeric';
  }
  
  return d.toLocaleDateString('en-US', options);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function generateConfirmationCode(): string {
  return `PB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
}

export function calculatePizzaPrice(basePrice: number, modifiers: number[]): number {
  return basePrice + modifiers.reduce((a, b) => a + b, 0);
}

export function getTableRecommendation(guestCount: number, capacity: number): boolean {
  // Table should have at least 1 spare seat
  return capacity >= guestCount && capacity <= guestCount + 2;
}

export function getStatusColor(status: string): string {
  const colors: { [key: string]: string } = {
    'confirmed': 'bg-green-100 text-green-800',
    'pending': 'bg-yellow-100 text-yellow-800',
    'cancelled': 'bg-red-100 text-red-800',
    'completed': 'bg-blue-100 text-blue-800',
    'no-show': 'bg-gray-100 text-gray-800',
    'active': 'bg-green-100 text-green-800',
    'upcoming': 'bg-blue-100 text-blue-800',
    'expired': 'bg-gray-100 text-gray-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
}
