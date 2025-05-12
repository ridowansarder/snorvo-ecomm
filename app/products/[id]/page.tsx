import ProductDetails from "@/components/productDetails";
import { stripe } from "@/lib/stripe";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  return <ProductDetails product={product} />;
}
