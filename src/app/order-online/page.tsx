'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderOnlinePage = () => {
  const platforms = [
    {
      id: 'foodpanda',
      name: 'Foodpanda',
      description: 'Order from the largest food delivery platform in Bangladesh',
      icon: '🍕',
      url: 'https://www.foodpanda.com.bd',
      color: 'from-pink-500 to-orange-500',
    },
    {
      id: 'foodi',
      name: 'Foodi',
      description: 'Quick and reliable food delivery service',
      icon: '📱',
      url: '#',
      color: 'from-green-500 to-blue-500',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pb-cream pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl font-bold text-pb-navy mb-4">
              ORDER ONLINE
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              আপনার পছন্দের platform থেকে আমাদের delicious খাবার order করুন এবং দ্রুত delivery পান।
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {platforms.map((platform, idx) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${platform.color} rounded-xl p-12 text-white text-center mb-4 group-hover:shadow-xl transition-shadow`}>
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h2 className="font-display text-3xl font-bold">{platform.name}</h2>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-pb-red text-white rounded-lg font-semibold text-center hover:bg-pb-navy transition-colors"
                  >
                    ORDER NOW
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Alternative Booking Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-display font-bold text-pb-navy mb-4">Prefer to Dine In?</h2>
            <p className="text-gray-600 mb-6">
              আমাদের restaurant-এ একটি table book করুন এবং premium dining experience উপভোগ করুন।
            </p>
            <Link
              href="/booking"
              className="inline-block px-8 py-4 bg-pb-navy text-white rounded-lg font-semibold hover:bg-pb-red transition-colors"
            >
              BOOK A TABLE
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderOnlinePage;
