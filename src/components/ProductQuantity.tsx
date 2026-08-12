import { useState } from "react";

type ProductQuantityProps = {
  name: string;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

function ProductQuantity({
  name,
  quantity,
  onQuantityChange,
}: ProductQuantityProps) {
  function incrementQuantity() {
    onQuantityChange(++quantity);
  }

  function decrementQuantity() {
    onQuantityChange(--quantity);
  }

  return (
    <div className="flex gap-3">
      <div>{name}</div>

      <button
        className="w-5 border rounded cursor-pointer"
        onClick={decrementQuantity}
        disabled={quantity <= 0}
      >
        -
      </button>

      <input className="w-5 text-center bg-gray-700 rounded" value={quantity} />

      <button
        className="w-5 border rounded cursor-pointer font-bold"
        onClick={incrementQuantity}
      >
        +
      </button>
    </div>
  );
}

export default ProductQuantity;
