export type OrderItem = {
  productId: string;
  name: string;
  quantity: number;
  unitPriceCents: number;
};

export type Order = {
  id: string;
  items: OrderItem[];
  totalCents: number;
  createdAt: string;
};