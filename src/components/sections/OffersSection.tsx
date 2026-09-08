'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const OffersSection = () => {
  const offers = [
    {
      id: '1',
      title: 'Pizza Paradise',
      description: 'Get 2 Large Pizzas + 1 Garlic Bread FREE',
      discount: '30% OFF',
      endDate: 'Dec 31, 2024',
      badge: 'ACTIVE',
    },
    {
      id: '2',
      title: 'Combo Bonanza',
      description: 'Buy 1 Combo, Get 1 at 50% OFF',
      discount: '50% OFF',
      endDate: 'Dec 25, 2024',
      badge: 'ACTIVE',
    },
    {
      id: '3',
      title: 'Family Feast',
      description: 'Complete meal for family of 4',
      discount: 'SAVE 500',
      endDate: 'Dec 28, 2024',
      badge: 'ACTIVE',
    },
  ];

  return (
    <section className="py-20 bg-pb-cream">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-pb-navy mb-4">
            GOOD FOOD.
            <br />
            <span className="text-pb-red">BETTER DEALS.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Amazing offers এবং exclusive deals শুধুমাত্র আপনার জন্য।
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="h-32 bg-gradient-to-br from-pb-red to-pb-navy relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-pb-yellow text-pb-navy px-3 py-1 rounded-full text-xs font-bold">
                  {offer.badge}
                </div>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-4xl">🎉</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-pb-navy text-xl mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-2xl font-bold text-pb-red">{offer.discount}</span>
                  <span className="text-xs text-gray-500">Until {offer.endDate}</span>
                </div>
                <Link
                  href="/order-online"
                  className="w-full px-4 py-2 bg-pb-navy text-white rounded-lg font-semibold text-center hover:bg-pb-red transition-colors text-sm"
                >
                  CLAIM OFFER
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/offers"
            className="inline-block px-8 py-4 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-all transform hover:scale-105"
          >
            VIEW ALL OFFERS
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;
