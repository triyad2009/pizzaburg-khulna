'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-pb-red to-pb-navy text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pb-red opacity-20 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pb-navy opacity-20 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            READY FOR YOUR NEXT CRAVING?
          </h2>
          <p className="text-lg text-gray-100 mb-12 max-w-2xl mx-auto">
            এখনই আপনার টেবিল বুক করুন এবং একটি অবিস্মরণীয় dining experience উপভোগ করুন।
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 bg-white text-pb-red rounded-lg font-semibold hover:bg-pb-yellow transition-all transform hover:scale-105"
            >
              BOOK A TABLE
            </Link>
            <Link
              href="/order-online"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-pb-navy transition-all transform hover:scale-105"
            >
              ORDER ONLINE
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
