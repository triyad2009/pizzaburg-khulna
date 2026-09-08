'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
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
            <h1 className="font-display text-5xl font-bold text-pb-navy mb-4">CONTACT US</h1>
            <p className="text-gray-600 text-lg">Get in touch with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-8"
            >
              <h2 className="font-display text-2xl font-bold text-pb-navy mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-pb-navy mb-2">Address</h3>
                  <p className="text-gray-600">Road No. XX, Khulna City, Bangladesh</p>
                </div>
                <div>
                  <h3 className="font-semibold text-pb-navy mb-2">Phone</h3>
                  <p className="text-gray-600">+880 1XXX XXX XXX</p>
                </div>
                <div>
                  <h3 className="font-semibold text-pb-navy mb-2">Email</h3>
                  <p className="text-gray-600">hello@pizzaburg.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-pb-navy mb-2">Hours</h3>
                  <p className="text-gray-600">Mon - Thu: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Fri - Sat: 11:00 AM - 11:00 PM</p>
                  <p className="text-gray-600">Sun: 12:00 PM - 10:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-8"
            >
              <h2 className="font-display text-2xl font-bold text-pb-navy mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pb-red focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pb-red focus:outline-none" />
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pb-red focus:outline-none"></textarea>
                <button type="submit" className="w-full px-4 py-3 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-colors">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
