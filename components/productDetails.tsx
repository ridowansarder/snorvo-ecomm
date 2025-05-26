import Image from "next/image";
import Stripe from "stripe";
import { Button } from "./ui/button";

interface ProductDetailsProps {
  product: Stripe.Product;
}

function ProductDetails({ product }: ProductDetailsProps) {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="mx-auto min-h-[100vh] px-4 py-12 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
      {/* Image Section */}
      <div className="flex justify-center">
        {product.images && product.images.length > 0 && (
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-2xl shadow-xl object-contain w-full max-w-sm hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      {/* Text Section */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          {product.name}
        </h1>
        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
          {product.description || "No description available."}
        </p>
        <p className="text-2xl font-semibold text-foreground/80 mb-6">
          Price: $
          {price && typeof price.unit_amount === "number"
            ? (price.unit_amount / 100).toFixed(2)
            : "N/A"}
        </p>
        <Button>
          Add to Cart
        </Button>
        <Button variant="outline" className="ml-4 hover:bg-black hover:text-white">
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;