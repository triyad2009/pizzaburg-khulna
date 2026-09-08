'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { mockMenuItems } from '@/lib/api';
import { formatPrice } from '@/lib/utils';

const FeaturedMenuSection = () => {
  const featured = mockMenuItems.filter((item) => item.isFeatured).slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-pb-navy mb-4">
            WHAT'S ON THE TABLE?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our most beloved creations, crafted with passion and premium ingredients.
          </p>
        </motion.div>

        {/* Featured Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-pb-cream rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 bg-gradient-to-br from-pb-red to-pb-navy flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🍕</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-bold text-pb-navy text-lg flex-1">{item.name}</h3>
                  {item.isPopular && (
                    <span className="ml-2 px-2 py-1 bg-pb-red text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      POPULAR
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-pb-red">৳{item.price}</span>
                  <Link
                    href={`/menu/${item.id}`}
                    className="px-3 py-1 bg-pb-navy text-white text-xs font-semibold rounded-lg hover:bg-pb-red transition-colors"
                  >
                    VIEW
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-block px-8 py-4 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-all transform hover:scale-105"
          >
            EXPLORE FULL MENU
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenuSection;
