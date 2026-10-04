import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{formatPrice(product.priceCents)}</p>
    </article>
  );
}

function formatPrice(priceCents: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(priceCents / 100);
}