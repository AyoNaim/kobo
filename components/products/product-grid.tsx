import type { Product } from "@/types/product";
import ProductCard from "./product-card";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}