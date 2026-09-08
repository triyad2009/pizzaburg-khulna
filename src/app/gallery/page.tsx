'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const images = [
    { id: '1', title: 'Signature Pizza', category: 'food' },
    { id: '2', title: 'Restaurant Ambiance', category: 'restaurant' },
    { id: '3', title: 'Family Dining', category: 'events' },
    { id: '4', title: 'Birthday Celebration', category: 'celebrations' },
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
            <h1 className="font-display text-5xl font-bold text-pb-navy mb-2">GALLERY</h1>
            <p className="text-gray-600">Explore our moments and memories</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="h-64 bg-gradient-to-br from-pb-red to-pb-navy rounded-xl flex items-center justify-center text-white font-display font-bold text-2xl hover:shadow-lg transition-shadow cursor-pointer"
              >
                {img.title}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
