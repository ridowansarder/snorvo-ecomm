import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Snorvo
          </h2>
          <p className="text-sm">
            Premium quality. Effortless shopping. Secure checkout. Welcome to
            your favorite e-com destination.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Snorvo. All rights reserved.
        <div className="text-left">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
            Subscribe
          </h3>
          <p className="text-sm mb-4">
            Get updates on deals, new products, and more.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className="font-medium mb-4"> Connect With Us</h4>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.linkedin.com/in/ridowan-sarder/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/ridowan_sarder/" target="_blank">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/ridowansarder06" target="_blank">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
