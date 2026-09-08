'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pb-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="sm" variant="light" />
              <span className="font-display font-bold text-lg">PizzaBurg</span>
            </div>
            <p className="text-gray-300 text-sm">More than food. It's an experience.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/menu" className="hover:text-pb-red transition-colors">Menu</Link></li>
              <li><Link href="/booking" className="hover:text-pb-red transition-colors">Book a Table</Link></li>
              <li><Link href="/offers" className="hover:text-pb-red transition-colors">Offers</Link></li>
              <li><Link href="/gallery" className="hover:text-pb-red transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-pb-red transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-pb-red transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-pb-red transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-pb-red transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Khulna, Bangladesh</li>
              <li>📞 +880 1XXX XXX XXX</li>
              <li>📧 hello@pizzaburg.com</li>
              <li className="pt-2 flex gap-3">
                <a href="#" className="hover:text-pb-red transition-colors">Facebook</a>
                <a href="#" className="hover:text-pb-red transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} PizzaBurg Khulna. All rights reserved. Beware PizzaBurg Is Addictive!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
