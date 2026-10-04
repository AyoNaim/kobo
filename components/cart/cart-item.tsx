export type CartItem = {
  productId: string;
  name: string;
  quantity: number;
  priceCents: number;
};

export default function CartItemRow({ item }: { item: CartItem }) {
  return (
    <li>
      <span>{item.name}</span>
      <span>Qty: {item.quantity}</span>
    </li>
  );
}