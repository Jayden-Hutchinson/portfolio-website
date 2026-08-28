import { useState } from "react";
import ProductQuantity from "./ProductQuantity";
import OrderFormInput from "./OrderFormInput";
import DollarAmount from "./DollarAmount";
import OrderFormModal, { type ModalState } from "./OrderFormModal";
import { ProductsData } from "../data/productsData";

const ORDER_FORM_TITLE = "Create Order";

const OrderFormField = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  StreetAddress: "streetAddress",
  City: "city",
  Province: "province",
  PostalCode: "postalCode",
} as const;

function OrderForm() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [statusText, setStatusText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState<ModalState>("loading");

  function updateQuantity(name: string, quantity: number) {
    setQuantities((prev) => ({
      ...prev,
      [name]: quantity,
    }));
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
    setModalState("loading");
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    openModal();

    console.log("Form Submitted");

    const formData = new FormData(event.currentTarget);

    const products = Object.entries(quantities)
      .filter(([, quantity]) => quantity > 0)
      .map(([name, quantity]) => ({
        name,
        quantity,
      }));

    const order = {
      ...Object.fromEntries(formData),
      products,
    };

    try {
      const response = await fetch("api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Failed to submite order");
      }
      setStatusText("Order submitted successfully!");
      setModalState("success");
      console.log(response);
    } catch {
      setStatusText("Something went wrong. Please try again.");
      setModalState("error");
    }
  }

  const totalPrice = ProductsData.reduce(
    (total, product) => total + product.price * (quantities[product.name] ?? 0),
    0,
  );

  return (
    <form className="relative flex justify-center" onSubmit={handleSubmit}>
      {isModalOpen && (
        <OrderFormModal
          modalState={modalState}
          handleClick={closeModal}
          statusText={statusText}
          totalPrice={totalPrice}
        />
      )}

      <div className="flex w-xl flex-col p-4">
        <div className="font-heading mb-10 text-4xl">{ORDER_FORM_TITLE}</div>

        {/* Customer Info */}
        <OrderFormInput
          type="text"
          name={OrderFormField.FirstName}
          placeholder="First Name"
        />
        <OrderFormInput
          type="text"
          name={OrderFormField.LastName}
          placeholder="Last Name"
        />
        <OrderFormInput
          type="email"
          name={OrderFormField.Email}
          placeholder="Email"
        />

        {/* Customer Address */}
        <OrderFormInput
          type="text"
          name={OrderFormField.StreetAddress}
          placeholder="Street Address"
        />

        <OrderFormInput
          type="text"
          name={OrderFormField.City}
          placeholder="City"
        />
        <OrderFormInput
          type="text"
          name={OrderFormField.Province}
          placeholder="Province"
        />
        <OrderFormInput
          type="text"
          name={OrderFormField.PostalCode}
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

        <div className="mt-5 flex justify-between px-4">
          <div>Total</div>
          <DollarAmount amount={totalPrice} />
        </div>
        <div>
          <button
            className="hover:text-secondary mt-18 w-fit cursor-pointer border-6 border-red-900 px-5 py-3 hover:bg-red-900 active:border-red-800 active:bg-red-800"
            type="submit"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </form>
  );
}

export default OrderForm;
