'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockMenuItems } from '@/lib/api';
import { useMenuStore } from '@/store/menuStore';

const MenuPage = () => {
  const { filteredItems, setSelectedCategory, setSearchQuery } = useMenuStore();
  const [searchValue, setSearchValue] = React.useState('');

  const categories = [
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burger', icon: '🍔' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
  ];

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setSearchQuery(value);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pb-cream pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-5xl font-bold text-pb-navy mb-4">
              OUR MENU
            </h1>
            <p className="text-gray-600 text-lg">Discover our complete collection of delicious offerings</p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-pb-red focus:outline-none"
            />
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 mb-12 overflow-x-auto pb-2"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-6 py-2 bg-pb-navy text-white rounded-full font-semibold whitespace-nowrap hover:bg-pb-red transition-colors"
            >
              All Items
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="px-6 py-2 bg-white text-pb-navy border-2 border-pb-navy rounded-full font-semibold whitespace-nowrap hover:bg-pb-red hover:text-white transition-colors"
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 bg-gradient-to-br from-pb-red to-pb-navy flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🍕</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-pb-navy text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-pb-red">৳{item.price}</span>
                    <Link
                      href={`#`}
                      className="px-3 py-1 bg-pb-navy text-white text-xs font-semibold rounded-lg hover:bg-pb-red transition-colors"
                    >
                      ADD
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No items found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
