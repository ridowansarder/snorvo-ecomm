
import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Carousel from "@/components/carousel";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

export default async function HomePage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });

  return (
    <main className="flex flex-col items-center justify-center space-y-8 min-h-screen p-4 mt-8">
      <section className="max-w-6xl mx-auto flex flex-col p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Snorvo
        </h1>
        <p className="text-lg text-center mb-8">
          Discover our latest products at the best prices!
        </p>
        <Button className="hover:scale-105 transition-transform duration-300 dark:bg-white dark:text-black">
          <Link href="/products">View Products</Link>
        </Button>
      </section>

      <Carousel products={products.data} />

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Products
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Check out our latest arrivals and bestsellers.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.data.map((product) => {
            const price = product.default_price as Stripe.Price;
            return (
              <div
                key={product.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  className="rounded mb-4"
                  width={300}
                  height={300}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  ${(price && price.unit_amount! / 100).toFixed(2)}
                </p>
                <Link href={`/products/${product.id}`}>
                  <Button className="mt-4 hover:scale-105 transition-transform duration-300 dark:bg-white dark:text-black">
                    View Details
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
        <Link href="/products">
          <Button variant='outline' className="text-lg mt-8 hover:scale-105 transition-transform duration-300 dark:bg-white dark:text-black">
            View All Products
          </Button>
        </Link>
      </section>
      <Testimonials />
    </main>
  );
}
