type QuantityInputProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

type QuantityInputButtonProps = {
  icon: string;
  onClick: () => void;
  disabled?: boolean;
};

function QuantityInputButton({
  icon,
  onClick,
  disabled,
}: QuantityInputButtonProps) {
  return (
    <button
      className="w-8 font-bold text-lg cursor-pointer"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}

function QuantityInput({ quantity, onQuantityChange }: QuantityInputProps) {
  function incrementQuantity() {
    onQuantityChange(++quantity);
  }

  function decrementQuantity() {
    onQuantityChange(--quantity);
  }

  return (
    <div className="border flex items-center rounded-md p-1">
      <QuantityInputButton
        icon="-"
        onClick={decrementQuantity}
        disabled={quantity <= 0}
      />

      <input className="w-5 text-center" value={quantity} />
      <QuantityInputButton icon="+" onClick={incrementQuantity} />
    </div>
  );
}

export default QuantityInput;
