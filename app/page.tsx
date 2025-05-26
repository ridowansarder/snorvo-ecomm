import Carousel from "@/components/carousel";
import FeaturedProducts from "@/components/featuredProducts";
import Hero from "@/components/hero";
import { stripe } from "@/lib/stripe";

export default async function HomePage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });
  return (
    <main className="flex flex-col items-center justify-center space-y-8 min-h-screen p-4 mt-8">
      <Hero />

      <Carousel products={products.data} />
      <FeaturedProducts />
    </main>
  );
}
