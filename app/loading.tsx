'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950">
      <motion.div
        className="relative w-16 h-16"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 1,
        }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-black dark:border-white" />
      </motion.div>

      <motion.span
        className="absolute bottom-20 text-gray-700 dark:text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading...
      </motion.span>
    </div>
  );
}
