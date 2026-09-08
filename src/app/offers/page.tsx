'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OffersPage = () => {
  const offers = [
    { id: '1', title: 'Pizza Paradise', desc: '2 Large Pizzas + Garlic Bread FREE', discount: '30% OFF', status: 'ACTIVE' },
    { id: '2', title: 'Combo Bonanza', desc: 'Buy 1 Combo, Get 1 at 50% OFF', discount: '50% OFF', status: 'ACTIVE' },
    { id: '3', title: 'Family Feast', desc: 'Complete meal for family of 4', discount: 'SAVE 500', status: 'ACTIVE' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pb-cream pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-5xl font-bold text-pb-navy mb-2">OFFERS & DEALS</h1>
            <p className="text-gray-600">Amazing offers শুধুমাত্র আপনার জন্য</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, idx) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-pb-red to-pb-navy flex items-center justify-center">
                  <div className="text-6xl">🎉</div>
                </div>
                <div className="p-6">
                  <h2 className="font-display font-bold text-pb-navy text-xl mb-2">{offer.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{offer.desc}</p>
                  <div className="text-3xl font-bold text-pb-red mb-4">{offer.discount}</div>
                  <span className="inline-block px-3 py-1 bg-pb-yellow text-pb-navy text-xs font-bold rounded-full">
                    {offer.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OffersPage;
