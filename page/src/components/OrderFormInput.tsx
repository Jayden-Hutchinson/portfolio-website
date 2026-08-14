type OrderFormInputProps = {
  type: string;
  name: string;
  placeholder: string;
};

function OrderFormInput({ type, name, placeholder }: OrderFormInputProps) {
  return (
    <input
      className="border-b py-2 px-4 mb-2"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default OrderFormInput;
