import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PizzaBurg Khulna - Premium Pizza & Dining Experience',
  description: 'Discover PizzaBurg Khulna - More than food, it\'s an experience. Book tables, explore menus, and build your perfect pizza.',
  keywords: 'Pizza, Restaurant, Khulna, Bangladesh, Table Booking, Food Delivery',
  openGraph: {
    title: 'PizzaBurg Khulna',
    description: 'More than food. It\'s an experience.',
    url: 'https://pizzaburg-khulna.com',
    siteName: 'PizzaBurg Khulna',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#D62500" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sohne:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-pb-cream text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
