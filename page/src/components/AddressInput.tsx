import OrderFormInput from "./OrderFormInput";

function AddressInput() {
  return (
    <div>
      <OrderFormInput type="text" name="street" placeholder="Street Address" />
      <OrderFormInput type="text" name="city" placeholder="City" />
      <OrderFormInput type="text" name="province" placeholder="Province" />
      <OrderFormInput type="text" name="postalCode" placeholder="Postal Code" />
    </div>
  );
}

export default AddressInput;
