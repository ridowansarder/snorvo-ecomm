import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { Button } from "./ui/button";

export default async function FeaturedProducts() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });
  return (
    <section className="max-w-7xl mx-auto text-center py-12">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-6 px-6"
      >
        <div className=" font-bold text-left">
          <h1 className="text-sm lg:text-xl">
            Featured products
          </h1>
          <h2 className="text-xl md:text-3xl">
            Discover our latest arrivals
          </h2>
        </div>
        <div className="lg:ml-auto"> 
          <Link href="/products">
            <Button className="p-4 text-lg  rounded-full">All Products</Button>
          </Link>
        </div>
      </div>

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
    </section>
  );
}
