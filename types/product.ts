export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceCents: number;
  image: string;
  category: "coffee" | "matcha";
};