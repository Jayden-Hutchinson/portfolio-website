import { useState } from "react";
import { ProductsData } from "../data/ProductsData";
import ProductQuantity from "./ProductQuantity";
import OrderFormInput from "./OrderFormInput";
import DollarAmount from "./DollarAmount";

const ORDER_FORM_TITLE = "Create Order";

function OrderForm() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  function updateQuantity(name: string, quantity: number) {
    setQuantities((prev) => ({
      ...prev,
      [name]: quantity,
    }));
  }

  const orderCost = ProductsData.reduce(
    (total, product) => total + product.price * (quantities[product.name] ?? 0),
    0,
  );

  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-4 w-xl">
        <div className="text-4xl font-heading mb-10">{ORDER_FORM_TITLE}</div>

        {/* Customer Info */}
        <OrderFormInput type="text" name="name" placeholder="First Name" />
        <OrderFormInput type="text" name="name" placeholder="Last Name" />
        <OrderFormInput type="email" name="email" placeholder="Email" />

        {/* Customer Address */}
        <OrderFormInput
          type="text"
          name="street"
          placeholder="Street Address"
        />

        <OrderFormInput type="text" name="city" placeholder="City" />
        <OrderFormInput type="text" name="province" placeholder="Province" />
        <OrderFormInput
          type="text"
          name="postalCode"
          placeholder="Postal Code"
        />

        {ProductsData.map((product) => {
          return (
            <ProductQuantity
              key={product.name}
              product={product}
              quantity={quantities[product.name] ?? 0}
              onQuantityChange={(quantity) =>
                updateQuantity(product.name, quantity)
              }
            />
          );
        })}

        <div className="flex justify-between px-4 mt-5">
          <div>Total</div>
          <DollarAmount amount={orderCost} />
        </div>
        <div>
          <button className="mt-18 active:border-red-800 active:bg-red-800 hover:bg-red-900 border-6 cursor-pointer border-red-900 w-fit px-5 py-3">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
