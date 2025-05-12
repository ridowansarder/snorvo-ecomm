"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { ThemeToggle } from "./themeToggle";
import AnimatedNavLink from "./animatedNavlink";

export default function Navbar() {
  const [cartCount] = useState(2); // Replace with Zustand/global state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-900 dark:shadow-md dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-purple-600 tracking-wide "
        >
          Snorvo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <AnimatedNavLink href="/products" label="Products" />
          <AnimatedNavLink href="/about" label="About" />
          <AnimatedNavLink href="/contact" label="Contact" />
        </div>

        {/* Search + Cart + Menu Button */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block w-56 rounded-md border px-3 py-1.5 dark:border-gray-200 border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
          />

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary transition-colors dark:text-gray-200" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-purple-700 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-100 mx-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 text-gray-700 dark:text-white",
          isOpen ? "max-h-40" : "max-h-0"
        )}
      >
        <div className="px-4 py-3 space-y-4 text-sm font-medium ">
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="block hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-primary"
          >
            Contact
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full mt-2 rounded-md border px-3 py-1.5 text-sm focus:outline-none dark:border-gray-200 focus:ring-2 focus:ring-primary-light"
          />
        </div>
      </div>
    </nav>
  );
}
