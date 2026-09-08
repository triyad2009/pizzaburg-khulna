'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ReviewsSection = () => {
  const reviews = [
    {
      id: '1',
      name: 'Rahul Hassan',
      rating: 5,
      comment: 'Best pizza in Khulna! The taste is unbeatable and the service is top-notch.',
      date: '2 weeks ago',
    },
    {
      id: '2',
      name: 'Isha Roy',
      rating: 5,
      comment: 'Amazing experience! The ambiance is so welcoming and food quality is premium.',
      date: '1 week ago',
    },
    {
      id: '3',
      name: 'Karim Ahmed',
      rating: 4,
      comment: 'Great place to hang out with friends. Pizza varieties are excellent!',
      date: '3 days ago',
    },
  ];

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
            WHAT PEOPLE ARE SAYING
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            হাজার হাজার সন্তুষ্ট গ্রাহক আমাদের বিশ্বাস করেন। তাদের গল্প পড়ুন।
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-pb-cream rounded-xl p-6 border-l-4 border-pb-red hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-pb-yellow text-lg">⭐</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-300">
                <p className="font-semibold text-pb-navy">{review.name}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
