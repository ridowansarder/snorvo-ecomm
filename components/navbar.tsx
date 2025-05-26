"use client";
import { Lightbulb, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { ModeToggle } from "./themeToggle";
import { Input } from "./ui/input";
import Link from "next/link";

const Navlinks = [
  {
    id: 1,
    url: "/products",
    label: "Products",
  },
  {
    id: 2,
    url: "/about",
    label: "About",
  },
  {
    id: 3,
    url: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const [cartCount] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="transition-all bg-background duration-200 h-16 w-full top-0 z-50 fixed py-3 shadow-md">
      {/* desktop nav */}
      <div className="flex items-center justify-between h-full mx-auto w-[90%] ">
        <Link href="/" className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold">Snorvo</h1>
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          {Navlinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-sm md:text-base font-semibold hover:text-primary/80 transition-all duration-200 hover:underline hover:underline-offset-6"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary transition-colors dark:text-gray-200" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-purple-700 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <div className="hidden lg:flex relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="w-full pl-10"
            />
          </div>
          <ModeToggle />

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>
        </div>

        {/* mobile nav */}

        <div
          className={clsx(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            <div className=" relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="w-full pl-10"
              />
            </div>
            {Navlinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="text-foreground font-semibold transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
