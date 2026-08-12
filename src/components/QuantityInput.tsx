type QuantityInputProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

function QuantityInput({ quantity, onQuantityChange }: QuantityInputProps) {
  function incrementQuantity() {
    onQuantityChange(++quantity);
  }

  function decrementQuantity() {
    onQuantityChange(--quantity);
  }

  return (
    <div className="border flex items-center rounded-md p-1">
      <button
        className="w-5 font-bold cursor-pointer"
        onClick={decrementQuantity}
        disabled={quantity <= 0}
      >
        -
      </button>

      <input className="w-5 text-center" value={quantity} />

      <button
        className="w-5 cursor-pointer font-bold"
        onClick={incrementQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantityInput;
