import type { Product } from "../data/productsData";
import DollarAmount from "./DollarAmount";
import QuantityInput from "./QuantityInput";

type ProductQuantityProps = {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

function ProductQuantity({
  product,
  quantity,
  onQuantityChange,
}: ProductQuantityProps) {
  const price = quantity * product.price;

  return (
    <div className="mt-5 flex justify-between px-4 py-4">
      <div className="font-heading text-xl">{product.name}</div>
      <QuantityInput quantity={quantity} onQuantityChange={onQuantityChange} />
      <DollarAmount amount={price} />
    </div>
  );
}

export default ProductQuantity;
