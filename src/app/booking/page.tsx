'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateConfirmationCode } from '@/lib/utils';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    experience: '',
    table: '',
    name: '',
    email: '',
    phone: '',
  });
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const experiences = [
    { id: 'family', name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { id: 'friends', name: 'Friends', icon: '👥' },
    { id: 'cozy', name: 'Cozy', icon: '🛋️' },
    { id: 'celebration', name: 'Celebration', icon: '🎉' },
  ];

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleSubmit = () => {
    const code = generateConfirmationCode();
    setConfirmation(code);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pb-cream pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          {confirmation ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">✅</div>
              <h1 className="font-display text-4xl font-bold text-pb-navy mb-4">BOOKING CONFIRMED!</h1>
              <div className="bg-white rounded-xl p-8 mb-8">
                <p className="text-gray-600 mb-6">Your reservation has been successfully booked.</p>
                <div className="bg-pb-cream rounded-lg p-6 mb-6">
                  <h2 className="font-semibold text-pb-navy mb-4">Confirmation Details</h2>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reference Code:</span>
                      <span className="font-bold text-pb-red">{confirmation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-bold">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-bold">{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-bold">{formData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-bold capitalize">{formData.experience}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  A confirmation email has been sent to {formData.email}
                </p>
                <Link
                  href="/"
                  className="inline-block px-8 py-3 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-colors"
                >
                  BACK TO HOME
                </Link>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="font-display text-4xl font-bold text-pb-navy mb-2">BOOK YOUR TABLE</h1>
                <p className="text-gray-600">Step {step} of 5</p>
              </motion.div>

              {/* Progress Bar */}
              <div className="mb-12 flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      s <= step ? 'bg-pb-red' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Step 1: Date & Time */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-display font-bold text-pb-navy mb-6">When would you like to visit?</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pb-red focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Time</label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pb-red focus:outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Guests */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-display font-bold text-pb-navy mb-6">How many guests?</h2>
                  <div className="flex items-center gap-6 justify-center">
                    <button
                      onClick={() => setFormData({ ...formData, guests: Math.max(1, formData.guests - 1) })}
                      className="p-3 bg-pb-cream rounded-lg hover:bg-gray-200"
                    >
                      −
                    </button>
                    <span className="text-4xl font-bold text-pb-navy">{formData.guests}</span>
                    <button
                      onClick={() => setFormData({ ...formData, guests: formData.guests + 1 })}
                      className="p-3 bg-pb-cream rounded-lg hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Experience */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-display font-bold text-pb-navy mb-6">What's your vibe?</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {experiences.map((exp) => (
                      <button
                        key={exp.id}
                        onClick={() => setFormData({ ...formData, experience: exp.id })}
                        className={`p-6 rounded-lg border-2 transition-all ${
                          formData.experience === exp.id
                            ? 'border-pb-red bg-pb-red bg-opacity-10'
                            : 'border-gray-300 hover:border-pb-red'
                        }`}
                      >
                        <div className="text-3xl mb-2">{exp.icon}</div>
                        <div className="font-semibold text-pb-navy">{exp.name}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Customer Info */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-display font-bold text-pb-navy mb-6">Your Information</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pb-red focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pb-red focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pb-red focus:outline-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 5: Review */}
              {step === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-display font-bold text-pb-navy mb-6">Confirm Your Booking</h2>
                  <div className="space-y-4 bg-pb-cream p-6 rounded-lg mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date & Time:</span>
                      <span className="font-semibold">{formData.date} at {formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-semibold">{formData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold capitalize">{formData.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-semibold">{formData.name}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-6 py-3 border-2 border-pb-navy text-pb-navy rounded-lg font-semibold hover:bg-pb-navy hover:text-white transition-colors"
                  >
                    BACK
                  </button>
                )}
                {step < 5 ? (
                  <button
                    onClick={handleNext}
                    disabled={!formData.date && step === 1}
                    className="flex-1 px-6 py-3 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-colors disabled:opacity-50"
                  >
                    NEXT
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-pb-red text-white rounded-lg font-semibold hover:bg-pb-navy transition-colors"
                  >
                    CONFIRM BOOKING
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
