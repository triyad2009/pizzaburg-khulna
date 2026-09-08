'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-pb-cream flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="mb-6"
        >
          <Logo size="lg" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-pb-red text-lg font-display font-bold tracking-wide"
        >
          Beware PizzaBurg Is Addictive!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
