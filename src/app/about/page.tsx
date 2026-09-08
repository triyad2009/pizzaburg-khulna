'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pb-cream pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-5xl font-bold text-pb-navy mb-4">ABOUT PIZZABURG</h1>
            <p className="text-gray-600 text-lg">Our story, our passion, our food</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-12 mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-pb-navy mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              PizzaBurg Khulna একটি premium pizza restaurant যা quality এবং experience-এর উপর বিশ্বাস করে। আমরা শুধু খাবার তৈরি করি না, আমরা memories তৈরি করি।
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              প্রতিটি pizza, প্রতিটি burger, প্রতিটি dish তৈরি হয় passion এবং finest ingredients দিয়ে। আমাদের লক্ষ্য হল প্রতিটি customer-কে একটি unforgettable dining experience প্রদান করা।
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🍕', title: 'Quality Food', desc: 'Premium ingredients, perfect recipes' },
              { icon: '👥', title: 'Great Service', desc: 'Friendly staff, excellent hospitality' },
              { icon: '✨', title: 'Amazing Ambiance', desc: 'Modern, welcoming, comfortable' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-pb-navy text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
