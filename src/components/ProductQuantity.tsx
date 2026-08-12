import type { ProductProps } from "./Product";
import QuantityInput from "./QuantityInput";

type ProductQuantityProps = {
  product: ProductProps;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

function ProductQuantity({
  product,
  quantity,
  onQuantityChange,
}: ProductQuantityProps) {
  return (
    <div className="flex justify-between px-4 py-4">
      <div className="text-lg">{product.name}</div>
      {/* <div>${product.price}</div> */}
      <QuantityInput quantity={quantity} onQuantityChange={onQuantityChange} />
      <div>$0</div>
    </div>
  );
}

export default ProductQuantity;
