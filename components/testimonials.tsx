// components/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Fast shipping and the product quality is unmatched. I'll never shop anywhere else!",
    name: "Shamim H.",
    location: "Mogbazar, Dhaka",
    color: "bg-blue-100",
  },
  {
    quote: "Customer support was fantastic. They handled my return quickly and kindly.",
    name: "Abir M.",
    location: "Kafrul, Dhaka",
    color: "bg-pink-100",
  },
  {
    quote: "The UI is clean, checkout is smooth, and the delivery was fast. 10/10 experience.",
    name: "Nafisa J.",
    location: "Azimpur, Dhaka",
    color: "bg-green-100",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          Hear real stories from people who love shopping with Snorvo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 dark:text-gray-300 italic">{t.quote}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} dark:bg-gray-700`} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
