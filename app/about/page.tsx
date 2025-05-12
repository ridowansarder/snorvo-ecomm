'use client';

export default function About() {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          We are a passionate team dedicated to delivering the best online shopping experience.
          From high-quality products to exceptional customer support, everything we do is designed
          to make your life easier and better. Our mission is to combine innovation, trust, and
          creativity to build a brand that you love.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-left max-w-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">✨ What We Value</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Customer-first philosophy</li>
              <li>Quality and innovation</li>
              <li>Sustainable practices</li>
              <li>Seamless user experience</li>
            </ul>
          </div>

          <div className="max-w-sm text-left">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">🚀 Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We aim to be the go-to destination for premium, curated products that align with your
              lifestyle. Whether you are shopping for essentials or exploring something new, we are here
              to serve with excellence and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
