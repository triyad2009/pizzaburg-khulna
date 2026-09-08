'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { mockMenuItems } from '@/lib/api';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const pizzas = mockMenuItems.filter((item) => item.category === 'pizza');

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + pizzas.length) % pizzas.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentPizza = pizzas[currentIndex];

  return (
    <section className="min-h-screen bg-pb-cream overflow-hidden pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-140px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-pb-navy leading-tight mb-4">
                MORE THAN FOOD.
                <br />
                <span className="text-pb-red">IT'S AN EXPERIENCE.</span>
              </h1>
              <p className="text-gray-600 text-lg mb-2">
                আপনার favourite flavour, এবার নতুন একটা experience-এর সাথে।
              </p>
              <p className="text-gray-500 text-sm">
                Beware PizzaBurg Is Addictive!
              </p>
            </div>

            {/* Pizza Info */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-display font-bold text-pb-navy mb-2">
                {currentPizza.name}
              </h2>
              <p className="text-gray-600 mb-4">{currentPizza.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pb-red">৳{currentPizza.price}</span>
                <div className="flex gap-2">
                  {currentPizza.isPopular && (
                    <span className="px-3 py-1 bg-pb-red text-white text-xs font-semibold rounded-full">
                      POPULAR
                    </span>
                  )}
                  {currentPizza.isFeatured && (
                    <span className="px-3 py-1 bg-pb-navy text-white text-xs font-semibold rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/menu"
                className="px-8 py-4 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-all transform hover:scale-105 text-center"
              >
                EXPLORE MENU
              </Link>
              <Link
                href="/booking"
                className="px-8 py-4 bg-pb-navy text-white rounded-lg font-semibold hover:bg-pb-red transition-all transform hover:scale-105 text-center"
              >
                BOOK A TABLE
              </Link>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => paginate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Previous pizza"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {pizzas.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-pb-red w-8' : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Go to pizza ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Next pizza"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right - Pizza Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[600px] flex items-center justify-center"
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-pb-red to-pb-navy rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">🍕</div>
                      <p className="font-display text-2xl font-bold">{currentPizza.name}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
