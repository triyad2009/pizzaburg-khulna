'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { mockMenuItems } from '@/lib/api';

interface MoodOption {
  id: string;
  name: string;
  icon: string;
}

const MOOD_OPTIONS: MoodOption[] = [
  { id: 'spicy', name: 'Spicy', icon: '🌶️' },
  { id: 'cheesy', name: 'Cheesy', icon: '🧀' },
  { id: 'hungry', name: 'Hungry', icon: '🤤' },
  { id: 'family', name: 'Family Time', icon: '👨‍👩‍👧‍👦' },
  { id: 'friends', name: 'Friends', icon: '👥' },
  { id: 'light', name: 'Light', icon: '🥗' },
];

const MoodToFoodSection = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(2);
  const [recommendation, setRecommendation] = useState<any>(null);

  const getRecommendation = () => {
    if (!selectedMood) return;
    
    // Simple rule-based recommendation
    const recommended = mockMenuItems.find((item) => {
      if (selectedMood === 'spicy') return item.spiceLevel === 3;
      if (selectedMood === 'cheesy') return item.name.toLowerCase().includes('cheese');
      if (selectedMood === 'hungry') return item.price > 400;
      return item.isPopular;
    });

    setRecommendation(recommended);
  };

  return (
    <section className="py-20 bg-pb-cream">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-pb-navy mb-4">
            WHAT'S YOUR MOOD TODAY?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            আমরা আপনার mood বুঝে পারফেক্ট খাবার recommend করব।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mood Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-pb-navy mb-6">Select Your Mood</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {MOOD_OPTIONS.map((mood) => (
                <motion.button
                  key={mood.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedMood === mood.id
                      ? 'border-pb-red bg-pb-red bg-opacity-10'
                      : 'border-gray-200 hover:border-pb-red'
                  }`}
                >
                  <div className="text-3xl mb-2">{mood.icon}</div>
                  <div className="font-semibold text-sm">{mood.name}</div>
                </motion.button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-pb-navy mb-2">
                Number of People
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  −
                </button>
                <span className="text-xl font-bold flex-1 text-center">{guestCount}</span>
                <button
                  onClick={() => setGuestCount(guestCount + 1)}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={getRecommendation}
              disabled={!selectedMood}
              className="w-full px-6 py-3 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              FIND YOUR MATCH
            </button>
          </motion.div>

          {/* Recommendation */}
          {recommendation && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-sm font-semibold text-pb-red uppercase tracking-wide mb-2">
                  YOUR MATCH
                </h3>
                <h4 className="text-3xl font-display font-bold text-pb-navy mb-2">
                  {recommendation.name}
                </h4>
                <p className="text-gray-600 mb-4">{recommendation.description}</p>
                <p className="text-2xl font-bold text-pb-red mb-6">৳{recommendation.price}</p>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Why this match?</span> Based on your mood preference and guest count, this is our perfect recommendation!
                </p>
              </div>

              <Link
                href={`/menu/${recommendation.id}`}
                className="block w-full px-4 py-3 bg-pb-navy text-white rounded-lg font-semibold text-center hover:bg-pb-red transition-colors"
              >
                VIEW DETAILS
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoodToFoodSection;
