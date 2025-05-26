import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden rounded-lg">
      {/* Background Image */}
      <Image
        src="/hero3.jpg" // replace with your actual image path
        alt="Shopping background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to Snorvo <br />
          <span className="text-amber-400">Discover the Best Deals</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-200">
          Shop your favorite products with exclusive discounts and fast
          delivery.
        </p>
        <Link href="/products">
          <Button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Start Shopping
            <ShoppingBag className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
