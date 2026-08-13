import type { Product } from "../data/ProductsData";
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
    <div className="flex justify-between px-4 py-4 mt-5">
      <div className="text-xl font-heading">{product.name}</div>
      <QuantityInput quantity={quantity} onQuantityChange={onQuantityChange} />
      <DollarAmount amount={price} />
    </div>
  );
}

export default ProductQuantity;
