// components/Contact.tsx
'use client';

export default function Contact() {
  return (
    <section className="mx-auto min-h-[90vh] px-4 py-16 mt-12 max-w-[80vw]">
      <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
      <p className="text-foreground/80 text-lg mb-6">
        We would love to hear from you! Please fill out the form below and we
        will get back to you as soon as possible.
      </p>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground/80 mb-3"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor=
            "email"
            className="block text-sm font-medium text-foreground/80 mb-3"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground/80 mb-3"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Send us your..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
