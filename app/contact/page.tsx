// components/Contact.tsx
'use client';

export default function Contact() {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-16 px-6 rounded-lg mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to drop us a message.
        </p>

        <form className="space-y-6 max-w-xl mx-auto text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              rows={5}
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
