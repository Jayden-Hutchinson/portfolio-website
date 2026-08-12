import { useState } from "react";
import { ProductsData } from "../data/ProductsData";
import ProductQuantity from "./ProductQuantity";
import OrderFormInput from "./OrderFormInput";

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
    <div className="flex flex-col">
      <div className="text-3xl">{ORDER_FORM_TITLE}</div>

      {/* Customer Info */}
      <OrderFormInput type="text" name="name" placeholder="Name" />
      <OrderFormInput type="email" name="email" placeholder="Email" />

      {/* Customer Address */}
      <OrderFormInput type="text" name="street" placeholder="Street Address" />
      <OrderFormInput type="text" name="city" placeholder="City" />
      <OrderFormInput type="text" name="province" placeholder="Province" />
      <OrderFormInput type="text" name="postalCode" placeholder="Postal Code" />

      {ProductsData.map((product) => {
        return (
          <ProductQuantity
            key={product.name}
            name={product.name}
            quantity={quantities[product.name] ?? 0}
            onQuantityChange={(quantity) =>
              updateQuantity(product.name, quantity)
            }
          />
        );
      })}

      <div>${orderCost}</div>
    </div>
  );
}

export default OrderForm;
