type OrderFormInputProps = {
  type: string;
  name: string;
  placeholder: string;
};

function OrderFormInput({ type, name, placeholder }: OrderFormInputProps) {
  return (
    <input
      className="mb-2 border-b px-4 py-2 autofill:bg-black"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default OrderFormInput;
