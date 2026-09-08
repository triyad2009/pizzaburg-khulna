'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Experience', href: '/experience' },
    { label: 'Book a Table', href: '/booking' },
    { label: 'Offers', href: '/offers' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-pb-cream border-b border-gray-200 z-40 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="font-display font-bold text-lg text-pb-navy">PizzaBurg</span>
            </Link>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-pb-red transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/order-online"
                className="px-6 py-2 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-colors"
              >
                ORDER ONLINE
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-pb-cream border-b border-gray-200 z-40 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-pb-cream rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/order-online"
                className="block px-4 py-2 bg-pb-red text-white rounded-lg font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                ORDER ONLINE
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;
