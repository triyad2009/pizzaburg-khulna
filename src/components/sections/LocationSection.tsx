'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LocationSection = () => {
  return (
    <section className="py-20 bg-pb-navy text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-96 bg-gray-300"
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-600">
              <div className="text-center">
                <div className="text-6xl mb-3">📍</div>
                <p className="text-lg font-semibold">Map View</p>
                <p className="text-sm text-gray-200">Khulna, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4">FIND US</h2>
            <p className="text-gray-200 mb-8">আমরা Khulna-তে অবস্থিত এবং আপনার সেবায় সর্বদা প্রস্তুত।</p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">📍</div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-200">Road No. XX, Khulna City, Bangladesh</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">📞</div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-200">+880 1XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">⏰</div>
                <div>
                  <h4 className="font-semibold mb-1">Opening Hours</h4>
                  <p className="text-gray-200">Mon - Thu: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-200">Fri - Sat: 11:00 AM - 11:00 PM</p>
                  <p className="text-gray-200">Sun: 12:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="inline-block px-8 py-4 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-yellow hover:text-pb-navy transition-all transform hover:scale-105"
            >
              GET DIRECTIONS
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
